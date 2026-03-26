import type {
  Specialty,
  Service,
  DoctorProfile,
  HomeContent,
  Testimonial,
  FAQ,
  ClinicInfo,
  Booking,
  TimeSlot,
} from "./types";

// ============================================
// Specialties
// ============================================
export const specialties: Specialty[] = [
  { id: 1, name: "Obstetrics", slug: "obstetrics" },
  { id: 2, name: "Gynecology", slug: "gynecology" },
  { id: 3, name: "Fertility", slug: "fertility" },
];

// ============================================
// Services
// ============================================
export const services: Service[] = [
  {
    id: 1,
    name: "Prenatal Care",
    description:
      "Comprehensive prenatal care including regular check-ups, ultrasounds, and monitoring throughout your pregnancy journey.",
    price: 500,
    duration: 30,
    specialty: specialties[0],
    icon: "baby",
    isActive: true,
  },
  {
    id: 2,
    name: "High-Risk Pregnancy",
    description:
      "Specialized monitoring and care for high-risk pregnancies with dedicated attention to maternal and fetal health.",
    price: 800,
    duration: 45,
    specialty: specialties[0],
    icon: "shield",
    isActive: true,
  },
  {
    id: 3,
    name: "Annual Gynecological Exam",
    description:
      "Complete annual examination including pap smear, breast exam, and comprehensive health screening.",
    price: 400,
    duration: 30,
    specialty: specialties[1],
    icon: "stethoscope",
    isActive: true,
  },
  {
    id: 4,
    name: "Fertility Consultation",
    description:
      "Initial fertility assessment and consultation to explore treatment options and plan your path to parenthood.",
    price: 600,
    duration: 45,
    specialty: specialties[2],
    icon: "heartbeat",
    isActive: true,
  },
  {
    id: 5,
    name: "Ultrasound Scan",
    description:
      "Diagnostic ultrasound imaging for prenatal monitoring, gynecological assessment, or fertility evaluation.",
    price: 350,
    duration: 20,
    specialty: specialties[0],
    icon: "flask",
    isActive: true,
  },
  {
    id: 6,
    name: "Postnatal Care",
    description:
      "Comprehensive postnatal check-ups for mother and baby, including recovery monitoring and breastfeeding support.",
    price: 450,
    duration: 30,
    specialty: specialties[0],
    icon: "firstaid",
    isActive: true,
  },
];

// ============================================
// Doctor Profile
// ============================================
export const doctorProfile: DoctorProfile = {
  id: 1,
  name: "Prof. Mohamed Mamdouh Saleh",
  title: "Obstetrics & Gynecology Senior Consultant",
  photo: "/images/doctor.png",
  specialization: "Obstetrics & Gynecology",
  experienceYears: 15,
  consultationFee: 500,
  bio: "Prof. Mohamed Mamdouh Saleh is a distinguished Obstetrics & Gynecology Senior Consultant with decades of experience in women's health. He is dedicated to providing comprehensive maternal and women's health care with a patient-centered approach. His areas of expertise include high-risk pregnancy management, minimally invasive gynecological surgery, and fertility treatments.",
  languages: ["Arabic", "English"],
  qualifications: [
    {
      id: 1,
      degree: "MBBCh — Bachelor of Medicine",
      institution: "Cairo University",
      year: 2005,
    },
    {
      id: 2,
      degree: "MSc Obstetrics & Gynecology",
      institution: "Ain Shams University",
      year: 2010,
    },
    {
      id: 3,
      degree: "MD Obstetrics & Gynecology",
      institution: "Ain Shams University",
      year: 2015,
    },
  ],
  experience: [
    {
      id: 1,
      position: "Consultant OB/GYN",
      organization: "King Fahad Medical City",
      startYear: 2018,
      current: true,
    },
    {
      id: 2,
      position: "Senior Registrar",
      organization: "Ain Shams University Hospital",
      startYear: 2012,
      endYear: 2018,
      current: false,
    },
  ],
  achievements: [
    { id: 1, title: "Board Certified in OB/GYN", year: 2015 },
    {
      id: 2,
      title: "Published 10+ Research Papers",
      description: "International peer-reviewed journals",
    },
    { id: 3, title: "Advanced Laparoscopy Fellowship", year: 2016 },
  ],
  socialLinks: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
};

// ============================================
// Home Page Content
// ============================================
export const homeContent: HomeContent = {
  hero: {
    title: "Expert Care for Every Stage of Motherhood",
    subtitle:
      "Compassionate obstetrics and gynecology services by Prof. Mohamed Mamdouh Saleh — trusted by hundreds of families.",
    image: "/images/hero-placeholder.jpg",
  },
  aboutBrief: doctorProfile.bio,
};

// ============================================
// Testimonials
// ============================================
export const testimonials: Testimonial[] = [
  {
    id: 1,
    patientName: "Sarah A.",
    review:
      "Prof. Mohamed Mamdouh provided exceptional care throughout my pregnancy. His expertise and compassion made the entire experience stress-free.",
    rating: 5,
    date: "2026-02-15",
    isApproved: true,
    isFeatured: true,
  },
  {
    id: 2,
    patientName: "Fatima K.",
    review:
      "I highly recommend this clinic. The staff is professional and the doctor is very knowledgeable. My experience was wonderful from start to finish.",
    rating: 5,
    date: "2026-01-20",
    isApproved: true,
    isFeatured: true,
  },
  {
    id: 3,
    patientName: "Noor M.",
    review:
      "Very professional and caring doctor. The clinic is clean and well-organized. I felt comfortable and well taken care of during my visits.",
    rating: 4,
    date: "2025-12-10",
    isApproved: true,
    isFeatured: true,
  },
];

// ============================================
// FAQs
// ============================================
export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What should I expect during my first prenatal visit?",
    answer:
      "Your first prenatal visit typically includes a complete medical history, physical examination, blood tests, and an ultrasound to confirm the pregnancy and estimate the due date.",
    order: 1,
  },
  {
    id: 2,
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website by clicking the 'Book Appointment' button, selecting your service, preferred date, and time slot.",
    order: 2,
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept online payments via credit/debit cards through our secure payment gateway. Payment is in SAR (Saudi Riyal).",
    order: 3,
  },
  {
    id: 4,
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule your appointment through your patient dashboard. Please note our cancellation policy for any applicable fees.",
    order: 4,
  },
];

// ============================================
// Clinic Info
// ============================================
export const clinicInfo: ClinicInfo = {
  name: "Dr. Mohamed Mamdoh Clinic",
  address: "Riyadh, Saudi Arabia",
  phone: "+966 XX XXX XXXX",
  email: "info@drmamdoh.com",
  googleMapsUrl: "",
  workingHours: [
    { day: "Sunday", startTime: "09:00", endTime: "21:00", isOpen: true },
    { day: "Monday", startTime: "09:00", endTime: "21:00", isOpen: true },
    { day: "Tuesday", startTime: "09:00", endTime: "21:00", isOpen: true },
    { day: "Wednesday", startTime: "09:00", endTime: "21:00", isOpen: true },
    { day: "Thursday", startTime: "09:00", endTime: "21:00", isOpen: true },
    { day: "Friday", startTime: "00:00", endTime: "00:00", isOpen: false },
    { day: "Saturday", startTime: "00:00", endTime: "00:00", isOpen: false },
  ],
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

// ============================================
// Available Dates & Time Slots (Booking)
// ============================================
export const availableDates = [
  "2026-04-01",
  "2026-04-02",
  "2026-04-03",
  "2026-04-06",
  "2026-04-07",
  "2026-04-08",
  "2026-04-09",
];

export const timeSlots: TimeSlot[] = [
  { time: "09:00", isBooked: false },
  { time: "09:30", isBooked: false },
  { time: "10:00", isBooked: true },
  { time: "10:30", isBooked: false },
  { time: "11:00", isBooked: false },
  { time: "14:00", isBooked: false },
  { time: "14:30", isBooked: false },
  { time: "15:00", isBooked: true },
  { time: "15:30", isBooked: false },
];

// ============================================
// Patient Bookings (Dashboard / Appointments)
// ============================================
export const bookings: Booking[] = [
  {
    id: 1,
    bookingId: "BK-001",
    service: services[0], // Prenatal Care
    date: "2026-04-01",
    time: "09:00",
    status: "confirmed",
    paymentStatus: "paid",
    price: 500,
    patient: {
      id: 1,
      name: "Fatima Ahmed",
      email: "fatima@example.com",
      phone: "+966501234567",
    },
    createdAt: "2026-03-20",
  },
  {
    id: 2,
    bookingId: "BK-002",
    service: services[2], // Annual Gynecological Exam
    date: "2026-04-08",
    time: "11:00",
    status: "pending",
    paymentStatus: "unpaid",
    price: 400,
    patient: {
      id: 1,
      name: "Fatima Ahmed",
      email: "fatima@example.com",
      phone: "+966501234567",
    },
    createdAt: "2026-03-22",
  },
  {
    id: 3,
    bookingId: "BK-003",
    service: services[1], // High-Risk Pregnancy
    date: "2026-03-10",
    time: "10:00",
    status: "completed",
    paymentStatus: "paid",
    price: 800,
    patient: {
      id: 1,
      name: "Fatima Ahmed",
      email: "fatima@example.com",
      phone: "+966501234567",
    },
    createdAt: "2026-03-01",
  },
  {
    id: 4,
    bookingId: "BK-004",
    service: services[3], // Fertility Consultation
    date: "2026-02-20",
    time: "14:00",
    status: "cancelled",
    paymentStatus: "unpaid",
    price: 600,
    patient: {
      id: 1,
      name: "Fatima Ahmed",
      email: "fatima@example.com",
      phone: "+966501234567",
    },
    createdAt: "2026-02-15",
  },
];
