export const runtime = "edge";

import { NextResponse } from "next/server";

import { bookingSchema } from "@/lib/booking-schema";
import { isMailerConfigured, sendBookingEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  if (!isMailerConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: "mail_unconfigured",
      },
      { status: 500 },
    );
  }

  try {
    const json = await request.json();
    const payload = bookingSchema.parse(json);

    await sendBookingEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          ok: false,
          error: "invalid_payload",
        },
        { status: 400 },
      );
    }

    console.error("Booking submission failed:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "mail_failed",
      },
      { status: 500 },
    );
  }
}

