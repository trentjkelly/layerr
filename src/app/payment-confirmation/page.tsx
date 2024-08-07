'use client'

import { stripe } from "@/utils/stripe";
import Navbar from "@/components/Navbar";

async function getSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId!);
    return session;
  } catch (error) {
    return null;
  }
}

export default async function CheckoutReturnPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = searchParams?.session_id;
  if (!sessionId || typeof sessionId !== "string") {
    return <p>Error: Something wrong!</p>;
  }
  const session = await getSession(sessionId);

  if (!session) {
    return <p>Error: Something wrong!</p>;
  }

  if (session?.status === "open") {
    return <p>Payment did not work.</p>;
  }

  if (session?.status === "complete") {
    // * upgrade the membership or do something to make change to the database to mark this payment complete
    // * this can be making the user a PRO member or add items ... etc.
    return (
      <main>
        <Navbar></Navbar>
        <div className="flex h-screen flex-col items-center justify-center gap-4 bg-background py-32">
          <h1 className="text-4xl font-bold">Success!</h1>
          <h3 className="text-xl font-semibold">Thank you for supporting artists & underground</h3>
        </div>
      </main>
    );
  }

  return null;
}