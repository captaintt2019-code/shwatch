import type { BookingPayload } from "./booking-schema";

const TELEGRAM_BOT_TOKEN = "8711172254:AAEZtqWsrB2GZLC6YVMnoateUV-KE6A49rQ";
const TELEGRAM_CHAT_ID = "173142392";

export function isMailerConfigured() {
  return true;
}

export async function sendBookingEmail(payload: BookingPayload) {
  const lines = [
    "📋 *新预约咨询*",
    "",
    `👤 姓名：${payload.name}`,
    `📞 电话：${payload.phone}`,
  ];

  if (payload.brand) lines.push(`⌚ 品牌：${payload.brand}`);
  if (payload.model) lines.push(`🔢 型号：${payload.model}`);
  if (payload.issue) lines.push(``, `📝 故障描述：\n${payload.issue}`);

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: lines.join("\n"),
        parse_mode: "Markdown",
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Telegram API error: ${error}`);
  }
}
