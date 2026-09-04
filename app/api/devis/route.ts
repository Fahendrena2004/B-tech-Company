import { NextResponse } from "next/server";
import { sendEmail, sanitizeHtml } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      company,
      projectType,
      budgetRange,
      deadline,
      description,
      honeypot,
    } = body;

    // Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, message: "Demande reçue." });
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
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

    if (!phone || typeof phone !== "string" || phone.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Le numéro de téléphone est obligatoire." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 15) {
      return NextResponse.json(
        { success: false, error: "La description du projet est requise (min. 15 caractères)." },
        { status: 400 }
      );
    }

    const cleanName = sanitizeHtml(fullName.trim());
    const cleanEmail = sanitizeHtml(email.trim());
    const cleanPhone = sanitizeHtml(phone.trim());
    const cleanCompany = company && typeof company === "string" && company.trim() ? sanitizeHtml(company.trim()) : "Non précisée";
    const cleanProjectType = projectType && typeof projectType === "string" ? sanitizeHtml(projectType.trim()) : "Application Web";
    const cleanBudget = budgetRange && typeof budgetRange === "string" ? sanitizeHtml(budgetRange.trim()) : "Non défini";
    const cleanDeadline = deadline && typeof deadline === "string" ? sanitizeHtml(deadline.trim()) : "Flexible";
    const cleanDescription = sanitizeHtml(description.trim());

    // Plain text content
    const textContent = `
NOUVELLE DEMANDE DE DEVIS — B-TECH COMPANY
=========================================

📋 Type de projet   : ${cleanProjectType}
👤 Nom du client    : ${fullName.trim()}
📧 Adresse email     : ${email.trim()}
📞 Téléphone/WhatsApp: ${phone.trim()}
🏢 Entreprise        : ${company?.trim() || "Non précisée"}

💰 Budget estimatif : ${cleanBudget}
⏱️ Délai souhaité   : ${cleanDeadline}

📝 Description du besoin & Fonctionnalités clés :
${description.trim()}

-----------------------------------------
Transmis depuis le formulaire de devis officiel de B-Tech Company.
`.trim();

    // HTML Email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Demande de Devis - B-Tech Company</title>
</head>
<body style="margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <div style="max-width: 650px; margin: 30px auto; background-color: #0f172a; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a8a, #0d9488); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
        B-Tech <span style="color: #2dd4bf;">Company</span>
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 15px; color: #ccfbf1; font-weight: 600;">
        Nouvelle Demande de Devis en Ligne
      </p>
    </div>

    <!-- Body Content -->
    <div style="padding: 28px 24px;">
      
      <!-- Project Type Highlight Box -->
      <div style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(45, 212, 191, 0.15)); border: 1px solid rgba(45, 212, 191, 0.3); border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #2dd4bf; letter-spacing: 0.05em; display: block;">Projet ciblé</span>
          <span style="font-size: 18px; font-weight: 800; color: #ffffff;">${cleanProjectType}</span>
        </div>
      </div>

      <!-- Grid Cards: Client Details & Budget/Timeline -->
      <div style="display: table; width: 100%; margin-bottom: 24px;">
        
        <!-- Left Col: Client -->
        <div style="background-color: #1e293b; border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.05); margin-bottom: 16px;">
          <h2 style="margin: 0 0 14px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8;">
            👤 Identification du Client
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; width: 120px; font-weight: 600;">Nom :</td>
              <td style="padding: 5px 0; color: #ffffff; font-weight: 700;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; font-weight: 600;">Email :</td>
              <td style="padding: 5px 0;">
                <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; font-weight: 600;">Téléphone :</td>
              <td style="padding: 5px 0; color: #ffffff;">${cleanPhone}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; font-weight: 600;">Entreprise :</td>
              <td style="padding: 5px 0; color: #cbd5e1;">${cleanCompany}</td>
            </tr>
          </table>
        </div>

        <!-- Right Col: Budget & Timeline -->
        <div style="background-color: #1e293b; border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.05);">
          <h2 style="margin: 0 0 14px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2dd4bf;">
            💰 Paramètres du Projet
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; width: 140px; font-weight: 600;">Budget estimatif :</td>
              <td style="padding: 5px 0; color: #2dd4bf; font-weight: 700;">${cleanBudget}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #94a3b8; font-weight: 600;">Délai souhaité :</td>
              <td style="padding: 5px 0; color: #ffffff;">${cleanDeadline}</td>
            </tr>
          </table>
        </div>

      </div>

      <!-- Project Specifications -->
      <div style="background-color: #1e293b; border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <h2 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8;">
          📝 Cahier des charges / Description des besoins
        </h2>
        <div style="font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; background-color: #0f172a; padding: 16px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
${cleanDescription}
        </div>
      </div>

      <!-- Quick Action CTA -->
      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${cleanEmail}?subject=Devis%20B-Tech%20Company%20-%20${encodeURIComponent(cleanProjectType)}" style="display: inline-block; background: linear-gradient(to right, #0d9488, #0284c7); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);">
          Répondre et transmettre l'estimation à ${cleanName}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #090d16; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; color: #64748b;">
      <p style="margin: 0;">B-Tech Company • Département Commercial & Technique</p>
    </div>

  </div>
</body>
</html>
`.trim();

    const result = await sendEmail({
      subject: `[Devis B-Tech] ${cleanProjectType} - ${cleanName} (${cleanBudget})`,
      html: htmlContent,
      text: textContent,
      replyTo: email.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Une erreur est survenue lors de l'envoi du devis." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande de devis a été transmise avec succès. Notre équipe étudiera votre projet sous 24h à 48h.",
      simulated: result.simulated,
    });
  } catch (error) {
    console.error("Erreur API Devis:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur inattendue lors du traitement du devis." },
      { status: 500 }
    );
  }
}
