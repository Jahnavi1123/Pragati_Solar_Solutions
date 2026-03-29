import { supabase } from "@/lib/supabaseClient";

export interface ContactInquiryPayload {
  name: string;
  phone: string;
  email: string;
  installationType: string;
  systemChoice: string;
  message: string;
}

export interface SubmitContactInquiryResponse {
  ok: boolean;
  inquiryStored: boolean;
  alertSent: boolean;
  warning?: string;
}

export async function submitContactInquiry(
  payload: ContactInquiryPayload,
): Promise<SubmitContactInquiryResponse> {
  const { data, error } = await supabase.functions.invoke<SubmitContactInquiryResponse>(
    "submit-contact-inquiry",
    {
      body: {
        name: payload.name.trim(),
        phone: payload.phone.trim(),
        email: payload.email.trim(),
        installationType: payload.installationType.trim(),
        systemChoice: payload.systemChoice.trim(),
        message: payload.message.trim(),
      },
    },
  );

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No response returned from contact inquiry function.");
  }

  return data;
}
