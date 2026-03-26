// API types matching the backend endpoints from Technical-Specifications-Frontend-Backend.md

// ============================================
// Service & Specialty Types
// ============================================
export interface Specialty {
  id: number;
  name: string;
  nameAr?: string;
  slug: string;
}

export interface Service {
  id: number;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number; // SAR
  duration: number; // minutes
  specialty: Specialty;
  image?: string;
  icon?: string;
  isActive: boolean;
}

// ============================================
// Doctor Profile
// ============================================
export interface DoctorProfile {
  id: number;
  name: string;
  nameAr?: string;
  title: string;
  titleAr?: string;
  bio: string;
  bioAr?: string;
  photo: string;
  specialization: string;
  experienceYears: number;
  consultationFee: number;
  qualifications: Qualification[];
  experience: Experience[];
  achievements: Achievement[];
  languages: string[];
  socialLinks: SocialLinks;
}

export interface Qualification {
  id: number;
  degree: string;
  institution: string;
  year: number;
}

export interface Experience {
  id: number;
  position: string;
  organization: string;
  startYear: number;
  endYear?: number;
  current: boolean;
}

export interface Achievement {
  id: number;
  title: string;
  description?: string;
  year?: number;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

// ============================================
// Home Page Content
// ============================================
export interface HomeContent {
  hero: {
    title: string;
    titleAr?: string;
    subtitle: string;
    subtitleAr?: string;
    image: string;
  };
  aboutBrief: string;
  aboutBriefAr?: string;
}

// ============================================
// Testimonials
// ============================================
export interface Testimonial {
  id: number;
  patientName: string;
  review: string;
  reviewAr?: string;
  rating: number; // 1-5
  date: string;
  isApproved: boolean;
  isFeatured: boolean;
}

// ============================================
// FAQ
// ============================================
export interface FAQ {
  id: number;
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  category?: string;
  order: number;
}

// ============================================
// Contact
// ============================================
export interface ClinicInfo {
  name: string;
  nameAr?: string;
  address: string;
  addressAr?: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
  workingHours: WorkingHour[];
  socialLinks: SocialLinks;
}

export interface WorkingHour {
  day: string;
  dayAr?: string;
  startTime: string;
  endTime: string;
  isOpen: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ============================================
// Booking
// ============================================
export interface TimeSlot {
  time: string;
  isBooked: boolean;
}

export interface AvailableDate {
  date: string; // YYYY-MM-DD
  isAvailable: boolean;
}

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";
export type PaymentStatus = "unpaid" | "paid" | "refunded";

export interface Booking {
  id: number;
  bookingId: string; // unique reference
  service: Service;
  date: string;
  time: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  price: number;
  patient: PatientSummary;
  createdAt: string;
}

export interface BookingFormData {
  serviceId: number;
  date: string;
  time: string;
  patientId?: number;
}

// ============================================
// Patient / Auth
// ============================================
export interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: "male" | "female";
  isVerified: boolean;
}

export interface PatientSummary {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  dateOfBirth?: string;
  gender?: "male" | "female";
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  patient: Patient;
}

// ============================================
// Payment
// ============================================
export interface PaymentInitResponse {
  paymentUrl?: string; // Paymob redirect
  clientSecret?: string; // Stripe
  transactionId: string;
}

export interface Transaction {
  id: number;
  bookingId: number;
  amount: number;
  paymentMethod: "paymob" | "stripe";
  status: "pending" | "success" | "failed";
  transactionId: string;
  createdAt: string;
}

// ============================================
// Content Pages
// ============================================
export interface ContentPage {
  pageKey: string;
  title: string;
  titleAr?: string;
  content: string;
  contentAr?: string;
  seoTitle?: string;
  seoDescription?: string;
  isPublished: boolean;
}

// ============================================
// API Response Wrappers
// ============================================
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
