import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type ContactInquiryPayload = {
  full_name?: string;
  phone_number?: string;
  email?: string;
  message?: string;
  installation_type?: string;
  system_choice?: string;
  name?: string;
  phone?: string;
  installationType?: string;
  systemChoice?: string;
};

type NormalizedInquiry = {
  full_name: string;
  phone_number: string;
  email: string | null;
  message: string | null;
  installation_type: string | null;
  system_choice: string | null;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const defaultAlertRecipient = "+919006281162";

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
    status,
  });
}

function getRequiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function normalizeRequiredString(value: unknown, fieldName: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${fieldName} is required`);
  }

  return value.trim();
}

function normalizeOptionalString(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function buildInquiry(body: ContactInquiryPayload): NormalizedInquiry {
  return {
    email: normalizeOptionalString(body.email),
    full_name: normalizeRequiredString(
      body.full_name ?? body.name,
      "Full name",
    ),
    installation_type: normalizeOptionalString(
      body.installation_type ?? body.installationType,
    ),
    message: normalizeOptionalString(body.message),
    phone_number: normalizeRequiredString(
      body.phone_number ?? body.phone,
      "Phone number",
    ),
    system_choice: normalizeOptionalString(
      body.system_choice ?? body.systemChoice,
    ),
  };
}

function formatWhatsAppAddress(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith("whatsapp:")) {
    return trimmed;
  }

  return `whatsapp:${trimmed}`;
}

function formatWhatsAppMessage(inquiry: NormalizedInquiry) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return [
    "New Pragati Solar inquiry",
    `Name: ${inquiry.full_name}`,
    `Phone: ${inquiry.phone_number}`,
    `Email: ${inquiry.email ?? "Not provided"}`,
    `Installation type: ${inquiry.installation_type ?? "Not specified"}`,
    `System choice: ${inquiry.system_choice ?? "Not specified"}`,
    `Message: ${inquiry.message ?? "No message provided"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");
}

async function sendWhatsAppAlert(inquiry: NormalizedInquiry) {
  const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
  const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
  const from = Deno.env.get("TWILIO_WHATSAPP_FROM");

  if (!accountSid || !authToken || !from) {
    return { alertSent: false };
  }

  const alertRecipient =
    Deno.env.get("ALERT_WHATSAPP_TO") ?? defaultAlertRecipient;

  const body = new URLSearchParams({
    Body: formatWhatsAppMessage(inquiry),
    From: formatWhatsAppAddress(from),
    To: formatWhatsAppAddress(alertRecipient),
  });

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      body,
      headers: {
        Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("WhatsApp alert failed", errorText);
    return { alertSent: false };
  }

  return { alertSent: true };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  try {
    const body = (await req.json()) as ContactInquiryPayload;
    const inquiry = buildInquiry(body);

    const supabase = createClient(
      getRequiredEnv("SUPABASE_URL"),
      getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    );

    const { data, error } = await supabase
      .from("Contact_inquiries")
      .insert([
        {
          name: inquiry.full_name,
          phone: inquiry.phone_number,
          email: inquiry.email,
          message: inquiry.message,
          installation_type: inquiry.installation_type,
          system_choice: inquiry.system_choice,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    const alertResult = await sendWhatsAppAlert(inquiry);

    return jsonResponse(200, {
      success: true,
      ok: true,
      inquiryStored: true,
      alertSent: alertResult.alertSent,
      data,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected server error";
    const status =
      message.includes("required") || message.includes("invalid") ? 400 : 500;

    return jsonResponse(status, { error: message });
  }
});
