import { contactData } from "@/data/contact";

export interface SendEmailOptions {
  to?: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

/**
 * Sanitize strings to prevent HTML injection / XSS in generated email templates
 */
export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends an email using the Resend API (via direct fetch for optimal serverless compatibility)
 * or simulates sending in development mode if no API key is provided.
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailOptions): Promise<{ success: boolean; id?: string; error?: string; simulated?: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = to || process.env.CONTACT_EMAIL_TO || contactData.email;
  const fromAddress = process.env.CONTACT_EMAIL_FROM || "B-Tech Website <onboarding@resend.dev>";

  // If no API key is set (e.g., local development), log and simulate success gracefully
  if (!apiKey) {
    console.log("=================================================");
    console.log("ℹ️ [EMAIL SIMULATION] RESEND_API_KEY non configurée.");
    console.log(`✉️ À        : ${recipient}`);
    console.log(`✉️ Répondre : ${replyTo || "N/A"}`);
    console.log(`✉️ Sujet    : ${subject}`);
    console.log("✉️ Contenu  :\n" + text);
    console.log("=================================================");
    return { success: true, simulated: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: replyTo ? [replyTo] : undefined,
        subject,
        html,
        text,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error:", data);
      return {
        success: false,
        error: data.message || "Erreur lors de l'envoi de l'email via Resend.",
      };
    }

    return { success: true, id: data.id };
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur inconnue lors de l'envoi de l'email.",
    };
  }
}
