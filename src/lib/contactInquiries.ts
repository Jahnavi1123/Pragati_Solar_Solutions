import {
  FunctionsFetchError,
  FunctionsHttpError,
  FunctionsRelayError,
} from "@supabase/supabase-js";

import { supabase } from "@/lib/supabaseClient";

export interface ContactInquiryPayload {
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
}

export interface SubmitContactInquiryResponse {
  ok: boolean;
  inquiryStored: boolean;
  alertSent: boolean;
}

function normalizePayload(payload: ContactInquiryPayload) {
  return {
    email: payload.email?.trim() ?? "",
    full_name: (payload.full_name ?? payload.name ?? "").trim(),
    installation_type:
      (payload.installation_type ?? payload.installationType ?? "").trim(),
    message: payload.message?.trim() ?? "",
    phone_number: (payload.phone_number ?? payload.phone ?? "").trim(),
    system_choice:
      (payload.system_choice ?? payload.systemChoice ?? "").trim(),
  };
}

function shouldFallbackToDirectInsert(error: unknown) {
  if (
    error instanceof FunctionsFetchError ||
    error instanceof FunctionsRelayError
  ) {
    return true;
  }

  return (
    error instanceof FunctionsHttpError && error.context.status === 404
  );
}

async function insertContactInquiryDirectly(
  payload: ContactInquiryPayload,
): Promise<SubmitContactInquiryResponse> {
  const normalized = normalizePayload(payload);

  const { error } = await supabase.from("Contact_inquiries").insert([
    {
      email: normalized.email,
      installation_type: normalized.installation_type || null,
      message: normalized.message,
      name: normalized.full_name,
      phone: normalized.phone_number,
      system_choice: normalized.system_choice || null,
    },
  ]);

  if (error) {
    throw error;
  }

  return {
    alertSent: false,
    inquiryStored: true,
    ok: true,
  };
}

export async function submitContactInquiry(
  payload: ContactInquiryPayload,
): Promise<SubmitContactInquiryResponse> {
  const normalized = normalizePayload(payload);
  const { data, error } = await supabase.functions.invoke<SubmitContactInquiryResponse>(
    "submit-contact-inquiry",
    {
      body: {
        full_name: normalized.full_name,
        phone_number: normalized.phone_number,
        email: normalized.email,
        message: normalized.message,
        installation_type: normalized.installation_type,
        system_choice: normalized.system_choice,
      },
    },
  );

  if (error) {
    if (shouldFallbackToDirectInsert(error)) {
      return insertContactInquiryDirectly(payload);
    }

    throw error;
  }

  if (!data) {
    return insertContactInquiryDirectly(payload);
  }

  return data;
}
