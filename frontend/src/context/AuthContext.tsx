"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Patient } from "@/lib/types";
import { loginPatient, fetchPatientProfile } from "@/lib/api";

interface AuthContextType {
  patient: Patient | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("patientToken");
    const userData = localStorage.getItem("patientData");
    if (token && userData) {
      try {
        setPatient(JSON.parse(userData));
      } catch {
        localStorage.removeItem("patientToken");
        localStorage.removeItem("patientData");
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const data = await loginPatient({ email, password });
    localStorage.setItem("patientToken", data.token);
    localStorage.setItem("patientData", JSON.stringify(data.patient));
    setPatient(data.patient);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("patientToken");
    localStorage.removeItem("patientData");
    setPatient(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    const profile = await fetchPatientProfile();
    localStorage.setItem("patientData", JSON.stringify(profile));
    setPatient(profile);
  }, []);

  return (
    <AuthContext.Provider
      value={{ patient, loading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
