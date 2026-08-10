import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(150),
  message: z.string().trim().min(1).max(2000),
});

// EmailJS publishable credentials (safe to ship, but we call from the server
// to avoid browser CORS/allow-list restrictions).
const SERVICE_ID = "service_eukw398";
const TEMPLATE_ID = "template_6m0dyll";
const PUBLIC_KEY = "-xKIiCsnesAD4d5KT";

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", origin: "http://localhost" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          subject: data.subject || "Portfolio enquiry",
          message: data.message,
          to_email: "ramakrishnamettu4@gmail.com",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`EmailJS send failed [${res.status}]: ${body}`);
      throw new Error(`Email send failed [${res.status}]: ${body}`);
    }
    return { sent: true as const };
  });
