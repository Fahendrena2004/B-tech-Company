import { NextResponse } from "next/server";
import { sendEmail, sanitizeHtml } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message, honeypot } = body;

    // Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message reçu." });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Le nom complet est obligatoire (min. 2 caractères)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Une adresse email valide est obligatoire." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Le message est obligatoire (min. 10 caractères)." },
        { status: 400 }
      );
    }

    const cleanName = sanitizeHtml(name.trim());
    const cleanEmail = sanitizeHtml(email.trim());
    const cleanPhone = phone && typeof phone === "string" ? sanitizeHtml(phone.trim()) : "Non renseigné";
    const cleanProjectType = projectType && typeof projectType === "string" ? sanitizeHtml(projectType.trim()) : "Général";
    const cleanMessage = sanitizeHtml(message.trim());

    // Plain text content
    const textContent = `
NOUVEAU MESSAGE DE CONTACT — B-TECH COMPANY
===========================================

👤 Nom complet   : ${name.trim()}
📧 Adresse email  : ${email.trim()}
📞 Téléphone      : ${phone || "Non renseigné"}
📌 Type de projet : ${projectType || "Général"}

💬 Message :
${message.trim()}

-------------------------------------------
Envoyé depuis le formulaire de contact officiel de B-Tech Company.
`.trim();

    // HTML Email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Nouveau Contact - B-Tech Company</title>
</head>
<body style="margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <div style="max-width: 600px; margin: 30px auto; background-color: #0f172a; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a8a, #0284c7); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
        B-Tech <span style="color: #38bdf8;">Company</span>
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 14px; color: #e0f2fe;">
        Nouveau message reçu via le site web officiel
      </p>
    </div>

    <!-- Body Content -->
    <div style="padding: 28px 24px;">
      
      <!-- Contact Info Card -->
      <div style="background-color: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8;">
          Coordonnées de l'expéditeur
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; width: 130px; font-weight: 600;">Nom :</td>
            <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Email :</td>
            <td style="padding: 6px 0; color: #38bdf8;">
              <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Téléphone :</td>
            <td style="padding: 6px 0; color: #ffffff;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Projet :</td>
            <td style="padding: 6px 0; color: #ffffff;">
              <span style="display: inline-block; padding: 3px 10px; border-radius: 999px; background-color: #0369a1; color: #e0f2fe; font-size: 12px; font-weight: 600;">
                ${cleanProjectType}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Message Card -->
      <div style="background-color: #1e293b; border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8;">
          Message du visiteur
        </h2>
        <div style="font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; background-color: #0f172a; padding: 16px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
${cleanMessage}
        </div>
      </div>

      <!-- Quick Action CTA -->
      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${cleanEmail}?subject=Re:%20Votre%20demande%20B-Tech%20Company" style="display: inline-block; background: linear-gradient(to right, #2563eb, #0284c7); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
          Répondre à ${cleanName}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #090d16; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #64748b;">
      <p style="margin: 0;">B-Tech Company • Solutions numériques, Web, Mobile & Design</p>
    </div>

  </div>
</body>
</html>
`.trim();

    const result = await sendEmail({
      subject: `[Contact B-Tech] ${cleanProjectType} - ${cleanName}`,
      html: htmlContent,
      text: textContent,
      replyTo: email.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Une erreur est survenue lors de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Notre équipe vous répondra rapidement.",
      simulated: result.simulated,
    });
  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur inattendue lors du traitement de la demande." },
      { status: 500 }
    );
  }
}
