"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormValues } from "@/lib/validations";
import { registerPatient } from "@/lib/api";
import { Button, Input } from "@/components/common";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError("");
    try {
      await registerPatient({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender as "male" | "female" | undefined,
      });
      router.push("/verify-email?email=" + encodeURIComponent(data.email));
    } catch {
      setError("Registration failed. This email may already be registered.");
    }
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
          <h1 className="text-center text-2xl font-bold text-text-primary">
            Create Account
          </h1>
          <p className="mt-1 text-center text-sm text-text-secondary">
            Register to book appointments and manage your health
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <Input
              label="Full Name"
              {...register("name")}
              error={errors.name?.message}
              required
            />
            <Input
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              required
            />
            <Input
              label="Phone"
              type="tel"
              {...register("phone")}
              error={errors.phone?.message}
              required
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Date of Birth"
                type="date"
                {...register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
              />
              <div>
                <label className="mb-1 block text-sm font-medium text-text-primary">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>
            <Input
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password?.message}
              helperText="At least 8 characters"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
              required
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("terms")}
                id="terms"
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
              />
              <label htmlFor="terms" className="text-sm text-text-secondary">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-red-500">{errors.terms.message}</p>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={isSubmitting}>
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
