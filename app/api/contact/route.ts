import { Resend } from "resend";
import { buildAdminMail } from "@/lib/contact/buildAdminMail";
import { buildAutoReply } from "@/lib/contact/buildAutoReply";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!resend) {
      return Response.json(
        {
          success: false,
          message: "Email service is not configured",
        },
        {
          status: 500,
        }
      );
    }

    const adminMail = buildAdminMail(body);
    const autoReply = buildAutoReply(body);

    // -----------------------------
    // 管理者宛メール
    // -----------------------------

    await resend.emails.send({
      from: "雪入美優 <contact@miyuyukiiri.com>",

      to: "klaviermyun@gmail.com",

      subject: adminMail.subject,

      text: adminMail.text,
    });

    // -----------------------------
    // 自動返信メール
    // -----------------------------

    const autoReplyResult = await resend.emails.send({
      from: "雪入美優 <contact@miyuyukiiri.com>",

      to: body.email,

      subject: autoReply.subject,

      text: autoReply.text,
    });

    console.log("Auto Reply Result:", autoReplyResult);

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}