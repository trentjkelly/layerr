import { stripe } from "@/utils/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {
    // Attempt to parse the request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error("Failed to parse request body:", error);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate the body content
    if (!body) {
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: process.env.PRO_PRICE_ID,
          quantity: 55,
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      automatic_tax: { enabled: false },
      return_url: `${request.headers.get(
        "origin"
      )}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (err) {
    console.error("Error creating session:", err);

    return NextResponse.json(
      { error: "Failed to create session"},
      { status: 400 }
    );
  }
}