"use client";

import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { useCallback } from "react";

export default function StripeEmbedded() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "");

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    return fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error);
          });
        }
        return res.json();
      })
      .then((data) => data.client_secret)
      .catch((error) => {
        console.error("Error fetching client secret:", error);
        throw error;
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div className="h-full w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout className="" />
      </EmbeddedCheckoutProvider>
    </div>
  );
}