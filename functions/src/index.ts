/**
 * Import function triggers from their respective submodules:
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import nodemailer from "nodemailer";

// Ajuste a região se quiser (ex: "us-central1", "southamerica-east1", etc.)
setGlobalOptions({ maxInstances: 10, region: "southamerica-east1" });

/**
 * Transporter SMTP (Nodemailer)
 * use variáveis de ambiente para NÃO deixar senha no código.
 *
 * Configure depois com:
 * firebase functions:config:set smtp.host="seu_host" smtp.port="587" smtp.user="seu_usuario" smtp.pass="sua_senha"
 * e dentro do código você lê com process.env ou process.env.FUNCTIONS_EMULATOR ? etc.
 *
 * Aqui vou usar process.env para ficar simples.
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,            // ex: "smtp.seudominio.com"
  port: 465,
  secure: true,                          // true se usar porta 465
  auth: {
    user: process.env.SMTP_USER,          // usuário do servidor SMTP
    pass: process.env.SMTP_PASS,          // senha do servidor SMTP
  },
});

/**
 * Função HTTP para receber o formulário e enviar e-mail
 * URL (depois do deploy): https://<REGION>-<PROJECT_ID>.cloudfunctions.net/sendContactEmail
 */
export const sendContactEmail = onRequest(async (req, res) => {
  // CORS básico (ajuste o domínio em produção)
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const { name, company, whatsapp, email, message } = req.body || {};

    if (!name || !whatsapp || !email) {
      res.status(400).json({
        success: false,
        error: "Campos obrigatórios ausentes (name, whatsapp, email).",
      });
      return;
    }

    const subject = "Novo contato pelo site - Ânima AI";

    const text = `
Novo contato pelo site Ânima AI:

Nome: ${name}
Empresa: ${company || "-"}
WhatsApp: ${whatsapp}
E-mail: ${email}

Mensagem:
${message || "-"}
    `.trim();

    const html = `
      <h2>Novo contato pelo site Ânima AI</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Empresa:</strong> ${company || "-"}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong><br/>${(message || "-")
        .toString()
        .replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `Contato - Ânima AI <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_FROM,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });

    logger.info("E-mail de contato enviado com sucesso", { email, name });

    res.status(200).json({ success: true });
  } catch (error: any) {
    logger.error("Erro ao enviar e-mail de contato", { error });
    res.status(500).json({
      success: false,
      error: "Erro ao enviar e-mail. Tente novamente mais tarde.",
    });
  }
});
