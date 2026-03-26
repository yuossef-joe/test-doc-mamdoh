"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/lib/validations";
import { useAuth } from "@/context/AuthContext";
import { Button, Input } from "@/components/common";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError("");
    try {
      await login(data.email, data.password);
      router.push("/patient/dashboard");
    } catch {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
          <h1 className="text-center text-2xl font-bold text-text-primary">
            Welcome Back
          </h1>
          <p className="mt-1 text-center text-sm text-text-secondary">
            Sign in to your patient account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <Input
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              required
            />
            <Input
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
              required
            />

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={isSubmitting}>
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
