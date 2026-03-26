import type {
  HomeContent,
  Service,
  Specialty,
  Testimonial,
  FAQ,
  DoctorProfile,
  ClinicInfo,
  ContactFormData,
  AvailableDate,
  TimeSlot,
  BookingFormData,
  Booking,
  LoginData,
  RegisterData,
  AuthResponse,
  Patient,
  PaymentInitResponse,
  ContentPage,
} from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ============================================
// Generic fetch helper
// ============================================
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  // Attach auth token if available
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("patientToken");
    if (token) {
      (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `API error: ${res.status}`);
  }

  return res.json();
}

// ============================================
// Public APIs
// ============================================
export async function fetchHomeContent(): Promise<HomeContent> {
  return apiFetch<HomeContent>("/home-content");
}

export async function fetchServices(): Promise<Service[]> {
  return apiFetch<Service[]>("/services");
}

export async function fetchServiceById(id: number): Promise<Service> {
  return apiFetch<Service>(`/services/${id}`);
}

export async function fetchServicesBySpecialty(
  specialtyId: number,
): Promise<Service[]> {
  return apiFetch<Service[]>(`/services/filter?specialty=${specialtyId}`);
}

export async function fetchSpecialties(): Promise<Specialty[]> {
  return apiFetch<Specialty[]>("/specialties");
}

export async function fetchDoctorProfile(): Promise<DoctorProfile> {
  return apiFetch<DoctorProfile>("/doctor-profile");
}

export async function fetchClinicInfo(): Promise<ClinicInfo> {
  return apiFetch<ClinicInfo>("/clinic");
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return apiFetch<Testimonial[]>("/testimonials");
}

export async function fetchFAQs(): Promise<FAQ[]> {
  return apiFetch<FAQ[]>("/faqs");
}

export async function fetchContentPage(pageKey: string): Promise<ContentPage> {
  return apiFetch<ContentPage>(`/content/${pageKey}`);
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ============================================
// Booking APIs
// ============================================
export async function fetchAvailableDates(
  month: string,
): Promise<AvailableDate[]> {
  return apiFetch<AvailableDate[]>(`/availability/dates?month=${month}`);
}

export async function fetchAvailableSlots(date: string): Promise<TimeSlot[]> {
  return apiFetch<TimeSlot[]>(`/availability/slots?date=${date}`);
}

export async function reserveSlot(
  data: BookingFormData,
): Promise<{ reservationId: string }> {
  return apiFetch<{ reservationId: string }>("/bookings/reserve", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function createBooking(data: BookingFormData): Promise<Booking> {
  return apiFetch<Booking>("/bookings/create", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function fetchBookingById(id: string): Promise<Booking> {
  return apiFetch<Booking>(`/bookings/${id}`);
}

// ============================================
// Auth APIs
// ============================================
export async function loginPatient(data: LoginData): Promise<AuthResponse> {
  return apiFetch<AuthResponse>("/patients/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function registerPatient(
  data: RegisterData,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/patients/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function verifyEmail(otp: string): Promise<AuthResponse> {
  return apiFetch<AuthResponse>("/patients/verify-email", {
    method: "POST",
    body: JSON.stringify({ otp }),
  });
}

export async function forgotPassword(
  email: string,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/patients/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function resetPassword(
  otp: string,
  newPassword: string,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/patients/reset-password", {
    method: "POST",
    body: JSON.stringify({ otp, newPassword }),
  });
}

// ============================================
// Patient Dashboard APIs
// ============================================
export async function fetchPatientProfile(): Promise<Patient> {
  return apiFetch<Patient>("/patients/profile");
}

export async function updatePatientProfile(
  data: Partial<Patient>,
): Promise<Patient> {
  return apiFetch<Patient>("/patients/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function changePassword(
  currentPassword: string,
  newPassword: string,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>("/patients/change-password", {
    method: "PUT",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}

export async function fetchPatientAppointments(
  status?: "upcoming" | "past",
): Promise<Booking[]> {
  const query = status ? `?status=${status}` : "";
  return apiFetch<Booking[]>(`/patients/appointments${query}`);
}

export async function cancelAppointment(
  id: number,
): Promise<{ message: string }> {
  return apiFetch<{ message: string }>(`/patients/appointments/${id}/cancel`, {
    method: "DELETE",
  });
}

export async function rescheduleAppointment(
  id: number,
  date: string,
  time: string,
): Promise<Booking> {
  return apiFetch<Booking>(`/patients/appointments/${id}/reschedule`, {
    method: "PUT",
    body: JSON.stringify({ date, time }),
  });
}

// ============================================
// Payment APIs
// ============================================
export async function initializePayment(
  bookingId: number,
  gateway: "paymob" | "stripe",
): Promise<PaymentInitResponse> {
  return apiFetch<PaymentInitResponse>("/payments/initialize", {
    method: "POST",
    body: JSON.stringify({ bookingId, gateway }),
  });
}

export async function fetchPaymentStatus(
  transactionId: string,
): Promise<{ status: string }> {
  return apiFetch<{ status: string }>(`/payments/${transactionId}/status`);
}
