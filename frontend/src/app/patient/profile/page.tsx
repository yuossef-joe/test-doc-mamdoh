"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSchema,
  changePasswordSchema,
  type ProfileFormValues,
  type ChangePasswordValues,
} from "@/lib/validations";
import { useAuth } from "@/context/AuthContext";
import { updatePatientProfile, changePassword } from "@/lib/api";
import { Button, Input } from "@/components/common";
import { PiCheckCircle } from "react-icons/pi";
import { cn } from "@/lib/utils";

type Tab = "profile" | "password";

export default function ProfilePage() {
  const { patient, refreshProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [profileError, setProfileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Profile form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: patient?.name || "",
      phone: patient?.phone || "",
      dateOfBirth: patient?.dateOfBirth || "",
      gender: patient?.gender as "male" | "female" | undefined,
    },
  });

  // Password form
  const passwordForm = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onProfileSubmit = async (data: ProfileFormValues) => {
    setProfileError("");
    setProfileSuccess(false);
    try {
      await updatePatientProfile(data);
      await refreshProfile();
      setProfileSuccess(true);
    } catch {
      setProfileError("Failed to update profile.");
    }
  };

  const onPasswordSubmit = async (data: ChangePasswordValues) => {
    setPasswordError("");
    setPasswordSuccess(false);
    try {
      await changePassword(data.currentPassword, data.newPassword);
      setPasswordSuccess(true);
      passwordForm.reset();
    } catch {
      setPasswordError(
        "Failed to change password. Check your current password.",
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">Profile Settings</h1>

      {/* Tabs */}
      <div className="mt-6 flex items-center gap-1 border-b border-border">
        {(["profile", "password"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 text-sm font-medium capitalize transition-colors",
              activeTab === tab
                ? "border-b-2 border-primary text-primary"
                : "text-text-secondary hover:text-text-primary",
            )}>
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="mt-6 max-w-lg rounded-lg bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary">
            Personal Information
          </h2>
          <form
            onSubmit={profileForm.handleSubmit(onProfileSubmit)}
            className="mt-4 space-y-4">
            <Input
              label="Full Name"
              {...profileForm.register("name")}
              error={profileForm.formState.errors.name?.message}
              required
            />
            <Input
              label="Phone"
              type="tel"
              {...profileForm.register("phone")}
              error={profileForm.formState.errors.phone?.message}
              required
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Date of Birth"
                type="date"
                {...profileForm.register("dateOfBirth")}
              />
              <div>
                <label className="mb-1 block text-sm font-medium text-text-primary">
                  Gender
                </label>
                <select
                  {...profileForm.register("gender")}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>

            {profileSuccess && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <PiCheckCircle size={16} /> Profile updated successfully.
              </div>
            )}
            {profileError && (
              <p className="text-sm text-red-500">{profileError}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              loading={profileForm.formState.isSubmitting}>
              Save Changes
            </Button>
          </form>
        </div>
      )}

      {/* Password Tab */}
      {activeTab === "password" && (
        <div className="mt-6 max-w-lg rounded-lg bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary">
            Change Password
          </h2>
          <form
            onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
            className="mt-4 space-y-4">
            <Input
              label="Current Password"
              type="password"
              {...passwordForm.register("currentPassword")}
              error={passwordForm.formState.errors.currentPassword?.message}
              required
            />
            <Input
              label="New Password"
              type="password"
              {...passwordForm.register("newPassword")}
              error={passwordForm.formState.errors.newPassword?.message}
              helperText="At least 8 characters"
              required
            />
            <Input
              label="Confirm New Password"
              type="password"
              {...passwordForm.register("confirmPassword")}
              error={passwordForm.formState.errors.confirmPassword?.message}
              required
            />

            {passwordSuccess && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <PiCheckCircle size={16} /> Password changed successfully.
              </div>
            )}
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              loading={passwordForm.formState.isSubmitting}>
              Update Password
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
