"use client";

import { useState } from "react";
import { Button, Input } from "@/components/common";
import { forgotPassword } from "@/lib/api";
import Link from "next/link";
import { PiCheckCircle } from "react-icons/pi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");
    setLoading(true);
    try {
      await forgotPassword(email);
      setSent(true);
    } catch {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
          {sent ? (
            <div className="text-center">
              <PiCheckCircle size={48} className="mx-auto text-green-500" />
              <h1 className="mt-3 text-xl font-bold text-text-primary">
                Reset Link Sent
              </h1>
              <p className="mt-2 text-sm text-text-secondary">
                Check your email for a password reset link.
              </p>
              <Link
                href="/login"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-center text-2xl font-bold text-text-primary">
                Forgot Password
              </h1>
              <p className="mt-1 text-center text-sm text-text-secondary">
                Enter your email to receive a reset link.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  loading={loading}>
                  Send Reset Link
                </Button>
              </form>

              <p className="mt-4 text-center text-sm text-text-secondary">
                <Link href="/login" className="text-primary hover:underline">
                  Back to Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
