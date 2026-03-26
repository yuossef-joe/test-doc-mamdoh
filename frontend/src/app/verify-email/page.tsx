"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PiEnvelopeSimple } from "react-icons/pi";
import Link from "next/link";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-8 text-center shadow-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <PiEnvelopeSimple size={32} className="text-primary" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-text-primary">
            Check Your Email
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            We&apos;ve sent a verification link to{" "}
            <strong className="text-text-primary">{email}</strong>. Please click
            the link to verify your account.
          </p>
          <p className="mt-4 text-xs text-text-secondary">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button className="text-primary hover:underline">
              resend verification
            </button>
            .
          </p>
          <div className="mt-6">
            <Link
              href="/login"
              className="text-sm font-medium text-primary hover:underline">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailContent />
    </Suspense>
  );
}
