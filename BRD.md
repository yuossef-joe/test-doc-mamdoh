# Business Requirements Document (BRD)

## Dr. Mohamed Mamdoh — Website & Content Management System

| Field                | Detail                                  |
| -------------------- | --------------------------------------- |
| **Document Version** | 1.0                                     |
| **Date**             | March 26, 2026                          |
| **Project Name**     | Dr. Mohamed Mamdoh Website & CMS        |
| **Project Type**     | Full-Stack Web Application (Healthcare) |
| **Status**           | In Development                          |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Objectives](#2-project-objectives)
3. [Scope](#3-scope)
4. [Stakeholders](#4-stakeholders)
5. [Business Requirements](#5-business-requirements)
6. [Functional Requirements](#6-functional-requirements)
   - 6.1 [Public Website](#61-public-website)
   - 6.2 [Booking System](#62-booking-system)
   - 6.3 [Payment System](#63-payment-system)
   - 6.4 [Patient Portal](#64-patient-portal)
   - 6.5 [Content Management System (CMS)](#65-content-management-system-cms)
   - 6.6 [Notifications & Communications](#66-notifications--communications)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [System Architecture](#8-system-architecture)
9. [Data Model Overview](#9-data-model-overview)
10. [User Roles & Permissions](#10-user-roles--permissions)
11. [Integration Requirements](#11-integration-requirements)
12. [Security & Compliance](#12-security--compliance)
13. [Phasing & Prioritization](#13-phasing--prioritization)
14. [Assumptions & Constraints](#14-assumptions--constraints)
15. [Risks & Mitigations](#15-risks--mitigations)
16. [Glossary](#16-glossary)

---

## 1. Executive Summary

The **Dr. Mohamed Mamdoh Website & CMS** is a healthcare web application designed to establish a professional online presence for the medical practice and enable patients to discover services, book appointments, and manage their bookings online. The platform comprises a public-facing website, an online appointment booking and payment system, a lightweight patient portal, and a Content Management System (CMS) for the practice to manage website content, services, schedules, and bookings.

The system aims to:

- Provide patients with a seamless online experience from discovering services to booking, paying, and tracking their appointments.
- Give the practice full control over website content, service catalog, doctor schedule, and testimonials via a CMS.
- Automate appointment confirmations, reminders, and payment receipts via email and SMS.

The platform supports **in-clinic** appointment booking with integrated payment processing via multiple gateways (Paymob, Stripe, PayPal, Moyasar, TAP).

---

## 2. Project Objectives

| #   | Objective                                                     | Success Metric                                                                         |
| --- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| O1  | Enable online appointment booking with real-time availability | Patients can book 24/7; zero double-bookings                                           |
| O2  | Provide secure online payment processing                      | Payment success rate ≥ 95%                                                             |
| O3  | Deliver a professional public-facing website                  | Increase patient acquisition through online presence                                   |
| O4  | Offer a patient self-service portal for booking management    | Patients can view, cancel, and track their appointments                                |
| O5  | Provide a CMS for content and schedule management             | Practice staff can update website content, services, and schedule without code changes |
| O6  | Automate patient communications                               | Booking confirmations, reminders, and receipts sent automatically                      |
| O7  | Ensure data security and privacy compliance                   | Secure handling of patient data aligned with healthcare standards                      |

---

## 3. Scope

### 3.1 In Scope

| Module             | Description                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Public Website** | Home, Services, About, Contact pages with SEO support                                                                                    |
| **Booking System** | Multi-step booking flow with real-time availability and slot reservation                                                                 |
| **Payment System** | Multi-gateway payment processing, receipts, refunds                                                                                      |
| **Patient Portal** | Patient registration/login, view upcoming and past bookings, cancel/reschedule                                                           |
| **CMS**            | Content management for website pages, services, specialties, schedules, testimonials, FAQs, doctor profile, and booking/payment settings |
| **Notifications**  | Email and SMS for booking confirmations, reminders, and payment receipts                                                                 |
| **Authentication** | Patient registration, login, email verification, password reset, JWT tokens                                                              |

### 3.2 Out of Scope

- Mobile native applications (iOS/Android) — only responsive web
- Doctor dashboard / clinical management (prescriptions, clinical notes, medical reports)
- Admin dashboard for practice administration (patient management, analytics, user management)
- Telemedicine / video consultations
- EHR/EMR integration with third-party hospital systems
- Insurance claim processing
- Pharmacy integration / e-prescribing
- Multi-doctor / multi-practice support (single practice focus)
- AI-based symptom checking or diagnosis assistance
- Patient messaging / communication with doctor

---

## 4. Stakeholders

| Role                                    | Responsibility                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| **Dr. Mohamed Mamdoh** (Practice Owner) | Primary stakeholder; defines services, schedule, and content                       |
| **Patients**                            | End users who discover services, book appointments, pay, and track bookings online |
| **Practice Staff / Content Manager**    | Manages website content, schedule, and bookings via CMS                            |
| **Development Team**                    | Backend and frontend developers building the platform                              |
| **Payment Gateway Providers**           | Third-party services for processing payments (Paymob, Stripe, etc.)                |

---

## 5. Business Requirements

### BR-1: Online Presence & Patient Acquisition

The practice requires a professional, bilingual (Arabic/English) website that showcases the doctor's credentials, services, and clinic information to attract and convert new patients.

### BR-2: Digital Appointment Booking

Patients must be able to discover available services, select dates and time slots, and complete the booking process entirely online — 24/7, without phone calls.

### BR-3: Online Payment Collection

The platform must support secure, PCI-compliant online payments with multiple methods (credit/debit cards, mobile wallets, bank transfers, cash recording), automatic receipt generation, and refund processing.

### BR-4: Patient Self-Service

Patients must be able to register, view their upcoming and past bookings, cancel or reschedule appointments, and download payment receipts.

### BR-5: Content Management

The practice needs a CMS to manage all website content (home page, about, services, testimonials, FAQs), doctor schedule, blocked dates, and booking/payment settings — without requiring code changes.

### BR-6: Communication Automation

The system must automatically send notifications for booking confirmations, payment receipts, and appointment reminders (24h before) — via email and SMS channels.

### BR-7: Data Security & Privacy

Patient data must be handled securely, with encryption in transit and at rest, role-based access controls, and compliance with healthcare data protection standards.

---

## 6. Functional Requirements

### 6.1 Public Website

#### FR-1.1: Home Page

| ID       | Requirement                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| FR-1.1.1 | Display hero section with doctor photo/banner, headline, tagline, and a "Book Appointment" CTA button                  |
| FR-1.1.2 | Show brief doctor biography with profile photo and "Read More" link                                                    |
| FR-1.1.3 | Display top services in a card/grid layout with icons, titles, and short descriptions                                  |
| FR-1.1.4 | Show patient testimonials with star ratings in a carousel/slider                                                       |
| FR-1.1.5 | Display contact information: clinic address, phone, email, working hours, embedded Google Maps, and social media links |
| FR-1.1.6 | All content must be dynamically loaded from the CMS backend                                                            |

#### FR-1.2: Services Page

| ID       | Requirement                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| FR-1.2.1 | Display all services in a grid/list view with images, names, descriptions, and prices                   |
| FR-1.2.2 | Provide filter system by specialty, sub-specialty, and search bar                                       |
| FR-1.2.3 | Individual service detail view with full description, duration, pricing, and "Book This Service" button |

#### FR-1.3: About Page

| ID       | Requirement                                                              |
| -------- | ------------------------------------------------------------------------ |
| FR-1.3.1 | Display doctor's full profile: photo, name, title, specialization        |
| FR-1.3.2 | Show complete biography with section headings                            |
| FR-1.3.3 | List qualifications, degrees, certifications with institutions and years |
| FR-1.3.4 | Display work experience history with positions and durations             |
| FR-1.3.5 | Show achievements, awards, publications, and professional memberships    |

#### FR-1.4: Contact Page

| ID       | Requirement                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
| FR-1.4.1 | Provide contact form with name, email, phone, subject dropdown, and message fields        |
| FR-1.4.2 | Validate all required fields before submission                                            |
| FR-1.4.3 | Submit form data to backend; send email notification to practice and auto-reply to sender |
| FR-1.4.4 | Display clinic information, working hours, map, and social media links                    |

---

### 6.2 Booking System

| ID     | Requirement                                                                                                                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-2.1 | **Step 1 — Service Selection:** Patient selects specialty → sub-specialty → specific service. Display price for selected service.                                                                        |
| FR-2.2 | **Step 2 — Date Selection:** Interactive calendar showing available dates. Past and blocked dates disabled. Month/year navigation.                                                                       |
| FR-2.3 | **Step 3 — Time Slot Selection:** Display available time slots as selectable buttons. Booked slots shown as disabled.                                                                                    |
| FR-2.4 | **Step 4 — Patient Information:** Prompt login if not authenticated. Registration form for new patients (name, email, phone, DOB, gender). Auto-fill for logged-in patients.                             |
| FR-2.5 | **Step 5 — Review & Confirm:** Display booking summary (service, date, time, price). Allow edits per section. Terms checkbox. "Proceed to Payment" button.                                               |
| FR-2.6 | **Progress Indicator:** Visual step progress bar / breadcrumb showing current and completed steps.                                                                                                       |
| FR-2.7 | **Slot Reservation:** Temporarily reserve selected time slot for 10 minutes during booking to prevent double-booking. Use database transaction with SERIALIZABLE isolation level.                        |
| FR-2.8 | **Concurrency Handling:** System must prevent double-booking via unique constraint on (booking_date, booking_time, doctor_id).                                                                           |
| FR-2.9 | **Availability Calculation:** Compute available slots from doctor schedule (working hours per day), minus booked appointments and blocked dates, accounting for service duration + 5-minute buffer time. |

---

### 6.3 Payment System

| ID      | Requirement                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------- |
| FR-3.1  | Display booking summary and total amount on payment page                                            |
| FR-3.2  | Support multiple payment methods: credit card, debit card, mobile wallet, cash, bank transfer, MADA |
| FR-3.3  | Integrate with payment gateways: Paymob (primary), Stripe, PayPal, Moyasar, TAP                     |
| FR-3.4  | Process payments via gateway API (initialize → process → verify via webhooks)                       |
| FR-3.5  | On successful payment, update booking status to CONFIRMED and payment status to PAID                |
| FR-3.6  | Generate PDF receipt with booking details, payment info, and invoice number                         |
| FR-3.7  | Send payment confirmation and booking confirmation emails with receipt attachment                   |
| FR-3.8  | Handle payment failures with error display and retry option                                         |
| FR-3.9  | Support payment refunds (full and partial) with reason tracking                                     |
| FR-3.10 | Default currency: SAR (Saudi Riyal)                                                                 |
| FR-3.11 | Store payment gateway configuration (API keys, merchant IDs) securely with test/live mode toggle    |

---

### 6.4 Patient Portal

#### FR-4.1: Authentication

| ID       | Requirement                                                             |
| -------- | ----------------------------------------------------------------------- |
| FR-4.1.1 | Patient registration with name, email, phone, password, DOB, gender     |
| FR-4.1.2 | Email verification via OTP code after registration                      |
| FR-4.1.3 | Login with email and password                                           |
| FR-4.1.4 | Forgot password flow with OTP code sent to email                        |
| FR-4.1.5 | Password reset with new password + confirmation                         |
| FR-4.1.6 | JWT-based session management (access token: 1hr, refresh token: 7 days) |
| FR-4.1.7 | Rate limiting on login attempts (5 per 15 minutes)                      |

#### FR-4.2: Patient Dashboard

| ID       | Requirement                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| FR-4.2.1 | Welcome message with patient name                                                   |
| FR-4.2.2 | Display next upcoming appointment card with service, date, time, and clinic address |
| FR-4.2.3 | Quick action: Book New Appointment                                                  |
| FR-4.2.4 | Recent bookings feed                                                                |

#### FR-4.3: Appointment Management

| ID       | Requirement                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| FR-4.3.1 | View upcoming and past appointments in separate tabs                         |
| FR-4.3.2 | Each appointment shows date, time, service, status badge, and action buttons |
| FR-4.3.3 | View appointment details including payment receipt download                  |
| FR-4.3.4 | Cancel appointments with cancellation reason and refund information          |
| FR-4.3.5 | Reschedule appointments by selecting new date and time from available slots  |

#### FR-4.4: Profile & Settings

| ID       | Requirement                                   |
| -------- | --------------------------------------------- |
| FR-4.4.1 | View and edit contact details (phone, email)  |
| FR-4.4.2 | Change password (current + new + confirm)     |
| FR-4.4.3 | Notification preferences (email, SMS toggles) |

---

### 6.5 Content Management System (CMS)

#### FR-5.1: CMS Authentication

| ID       | Requirement                                                        |
| -------- | ------------------------------------------------------------------ |
| FR-5.1.1 | CMS login with email and password (restricted to authorized staff) |
| FR-5.1.2 | JWT-based session with CMS role verification                       |

#### FR-5.2: Website Content Management

| ID       | Requirement                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| FR-5.2.1 | Manage home page hero section content (title, subtitle, image URL)                                       |
| FR-5.2.2 | Manage doctor profile / about page content (bio, qualifications, experience, achievements)               |
| FR-5.2.3 | Manage contact information (address, phone, email, working hours, social media links)                    |
| FR-5.2.4 | Manage dynamic content pages (page_key, title, JSON content, SEO title, SEO description, publish status) |

#### FR-5.3: Services & Specialties Management

| ID       | Requirement                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| FR-5.3.1 | CRUD operations on services (name, description, specialty, duration, price, active status) |
| FR-5.3.2 | CRUD operations on specialties and sub-specialties (hierarchical with parent-child)        |
| FR-5.3.3 | Link services to specialties                                                               |
| FR-5.3.4 | Toggle service active/inactive status                                                      |

#### FR-5.4: Schedule Management

| ID       | Requirement                                                         |
| -------- | ------------------------------------------------------------------- |
| FR-5.4.1 | Set doctor's working hours for each day of the week                 |
| FR-5.4.2 | Toggle days on/off                                                  |
| FR-5.4.3 | Block specific dates (holidays, days off) with reasons              |
| FR-5.4.4 | Configure appointment duration and buffer time between appointments |

#### FR-5.5: Bookings Overview

| ID       | Requirement                                                              |
| -------- | ------------------------------------------------------------------------ |
| FR-5.5.1 | View list of all bookings with filters (date, status, service)           |
| FR-5.5.2 | View booking details (patient name, service, date, time, payment status) |
| FR-5.5.3 | Update booking status (confirm, cancel, mark as completed)               |
| FR-5.5.4 | Export bookings to CSV                                                   |

#### FR-5.6: Testimonials Management

| ID       | Requirement                                       |
| -------- | ------------------------------------------------- |
| FR-5.6.1 | View all submitted testimonials                   |
| FR-5.6.2 | Approve or reject testimonials for public display |
| FR-5.6.3 | Mark testimonials as featured                     |
| FR-5.6.4 | Delete testimonials                               |

#### FR-5.7: FAQ Management

| ID       | Requirement                                                         |
| -------- | ------------------------------------------------------------------- |
| FR-5.7.1 | CRUD operations on FAQs (question, answer, category, display order) |
| FR-5.7.2 | FAQ categories: booking, payment, general, services                 |
| FR-5.7.3 | Toggle FAQ active/inactive                                          |

#### FR-5.8: Settings

| ID       | Requirement                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| FR-5.8.1 | Payment gateway configuration (API keys, merchant IDs, test/live mode toggle) |
| FR-5.8.2 | Clinic information updates (address, phone, Google Maps link)                 |

---

### 6.6 Notifications & Communications

| ID     | Requirement                                                                                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-6.1 | **Email notifications** for: booking confirmation, payment receipt, appointment reminder (24h before), cancellation confirmation, password reset, account verification |
| FR-6.2 | **SMS notifications** (via Twilio) for: appointment reminders, OTP verification codes, booking confirmations                                                           |
| FR-6.3 | Branded HTML email templates                                                                                                                                           |
| FR-6.4 | Email queue system with retry logic (track attempts, errors, scheduled retries)                                                                                        |
| FR-6.5 | SMS queue system with provider tracking                                                                                                                                |
| FR-6.6 | Notification scheduling via cron jobs (appointment reminders 24h before)                                                                                               |

---

## 7. Non-Functional Requirements

| ID    | Category            | Requirement                                                                                         |
| ----- | ------------------- | --------------------------------------------------------------------------------------------------- |
| NFR-1 | **Performance**     | Page load time < 3 seconds; API response time < 500ms for 95th percentile                           |
| NFR-2 | **Scalability**     | System must support concurrent booking without race conditions (SERIALIZABLE transaction isolation) |
| NFR-3 | **Availability**    | Target 99.5% uptime during operating hours                                                          |
| NFR-4 | **Responsiveness**  | All interfaces must be fully responsive (mobile, tablet, desktop)                                   |
| NFR-5 | **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions)                                                   |
| NFR-6 | **Localization**    | Bilingual support (Arabic RTL and English LTR)                                                      |
| NFR-7 | **Accessibility**   | WCAG 2.1 AA compliance for public website                                                           |
| NFR-8 | **SEO**             | Dynamic meta tags, schema markup, sitemaps for public pages                                         |
| NFR-9 | **Backup**          | Automated daily database backups with 30-day retention and encrypted storage                        |

---

## 8. System Architecture

### 8.1 Technology Stack

| Layer                                          | Technology                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Frontend — Public Website & Patient Portal** | Next.js (App Router), React, TypeScript, Tailwind CSS, Radix UI, Zod, React Hook Form |
| **Frontend — CMS Panel**                       | React, Vite, TypeScript, Tailwind CSS, React Router DOM                               |
| **Backend**                                    | Node.js, Express, TypeScript, Prisma ORM                                              |
| **Database**                                   | PostgreSQL                                                                            |
| **Authentication**                             | JWT (access + refresh tokens), bcrypt password hashing                                |
| **Payment Gateways**                           | Paymob, Stripe, PayPal, Moyasar, TAP                                                  |
| **Email**                                      | Nodemailer (SMTP / SendGrid / Mailgun / AWS SES)                                      |
| **SMS**                                        | Twilio                                                                                |
| **File Storage**                               | Cloud storage (AWS S3 or equivalent) for receipts and uploads                         |
| **Testing**                                    | Jest, Supertest                                                                       |

### 8.2 Application Architecture

```
┌───────────────────────────────────────────────────┐
│                     CLIENTS                       │
│                                                   │
│  ┌──────────────────┐      ┌──────────────────┐   │
│  │ Public Website   │      │ CMS Panel        │   │
│  │ + Patient Portal │      │ (React / Vite)   │   │
│  │ (Next.js)        │      │                  │   │
│  └────────┬─────────┘      └────────┬─────────┘   │
│           │                         │              │
└───────────┼─────────────────────────┼──────────────┘
            │                         │
            └────────────┬────────────┘
                         │  REST API (JSON)
                         ▼
              ┌──────────────────────┐
              │   Express.js API     │
              │   (Node.js + TS)     │
              │                      │
              │  ┌────────────────┐  │
              │  │  Middleware     │  │
              │  │  - Auth (JWT)   │  │
              │  │  - RBAC         │  │
              │  │  - Rate Limit   │  │
              │  │  - Helmet       │  │
              │  │  - CORS         │  │
              │  └────────────────┘  │
              │                      │
              │  ┌────────────────┐  │
              │  │  Controllers    │  │
              │  │  Services       │  │
              │  │  Utils          │  │
              │  └────────────────┘  │
              └──────────┬───────────┘
                         │  Prisma ORM
                         ▼
              ┌──────────────────────┐
              │    PostgreSQL DB     │
              └──────────────────────┘
```

### 8.3 Deployment Architecture

| Component                       | Deployment                                                 |
| ------------------------------- | ---------------------------------------------------------- |
| Public Website + Patient Portal | Next.js deployed to Vercel / VPS                           |
| CMS Panel                       | Static build (Vite) deployed to CDN / VPS                  |
| Backend API                     | Node.js process on VPS / Cloud instance                    |
| Database                        | Managed PostgreSQL (e.g., Supabase, AWS RDS, DigitalOcean) |
| File Storage                    | AWS S3 or compatible object storage                        |

---

## 9. Data Model Overview

The system uses a relational database organized into the following domains:

### 9.1 Core User Tables

| Table        | Purpose                                                                             |
| ------------ | ----------------------------------------------------------------------------------- |
| **Users**    | Authentication records (email, password hash, role, verification status, OTP codes) |
| **Patients** | Patient profiles (name, phone, DOB, gender)                                         |
| **Doctors**  | Doctor profile (bio, qualifications, experience, consultation fee, specialty)       |

### 9.2 Service & Specialty Tables

| Table           | Purpose                                                                        |
| --------------- | ------------------------------------------------------------------------------ |
| **Specialties** | Medical specialties with hierarchical parent-child support for sub-specialties |
| **Services**    | Service catalog (name, description, duration, price, linked to specialty)      |

### 9.3 Booking & Payment Tables

| Table                   | Purpose                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Bookings**            | Appointment records with unique constraint on (date, time, doctor) to prevent double-booking |
| **Payments**            | Payment transactions with multi-gateway support, refund tracking                             |
| **BookingReservations** | Temporary slot holds (10-minute expiry) to prevent concurrent booking conflicts              |

### 9.4 Scheduling Tables

| Table               | Purpose                                                                     |
| ------------------- | --------------------------------------------------------------------------- |
| **DoctorSchedules** | Weekly schedule (day, start/end time, active status); unique per doctor+day |
| **BlockedDates**    | Calendar exceptions (date, reason)                                          |
| **AvailableSlots**  | Pre-generated time slots (date, start/end time, booked status, service)     |

### 9.5 Communication Tables

| Table          | Purpose                                                                             |
| -------------- | ----------------------------------------------------------------------------------- |
| **EmailQueue** | Email queue with retry logic (recipient, subject, body, template, status, attempts) |
| **SMSQueue**   | SMS queue with provider tracking                                                    |

### 9.6 Content & CMS Tables

| Table                  | Purpose                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| **ContentPages**       | CMS content (page key, title, JSON content, SEO fields, publish status)    |
| **Testimonials**       | Patient reviews (name, content, rating, approval/featured status)          |
| **FAQ**                | FAQs (question, answer, category, order, active status)                    |
| **DoctorClinics**      | Clinic info (name, address, phone, email, Google Maps, working hours JSON) |
| **DoctorCertificates** | Doctor credentials (title, issuer, year, file URL)                         |

### 9.7 System Tables

| Table                    | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| **TokenBlacklist**       | Revoked JWT tokens                                             |
| **AppointmentReminders** | Scheduled reminders (type, time, status, channel)              |
| **PaymentGatewayConfig** | Gateway credentials (API keys, merchant IDs, test mode toggle) |

---

## 10. User Roles & Permissions

| Permission                             | PATIENT | CMS STAFF |
| -------------------------------------- | :-----: | :-------: |
| View public website                    |   ✅    |    ✅     |
| Register / Login                       |   ✅    |    ✅     |
| Book appointments                      |   ✅    |    ❌     |
| Make payments                          |   ✅    |    ❌     |
| View own bookings                      |   ✅    |    ❌     |
| Cancel / reschedule own bookings       |   ✅    |    ❌     |
| Edit own profile                       |   ✅    |    ❌     |
| Access CMS panel                       |   ❌    |    ✅     |
| Manage website content                 |   ❌    |    ✅     |
| Manage services / specialties          |   ❌    |    ✅     |
| Manage doctor schedule / blocked dates |   ❌    |    ✅     |
| View / manage all bookings             |   ❌    |    ✅     |
| Manage testimonials                    |   ❌    |    ✅     |
| Manage FAQs                            |   ❌    |    ✅     |
| Configure payment gateways             |   ❌    |    ✅     |
| Update clinic information              |   ❌    |    ✅     |

---

## 11. Integration Requirements

| Integration           | Purpose                                       | Priority |
| --------------------- | --------------------------------------------- | -------- |
| **Paymob**            | Primary payment gateway for Saudi/MENA region | MVP      |
| **Stripe**            | Secondary payment gateway (international)     | MVP      |
| **PayPal**            | Alternative payment method                    | Phase 2  |
| **Moyasar**           | Saudi payment gateway                         | Phase 2  |
| **TAP**               | MENA region payment gateway                   | Phase 2  |
| **Nodemailer (SMTP)** | Transactional email delivery                  | MVP      |
| **Twilio**            | SMS notifications and OTP delivery            | MVP      |
| **Google Maps**       | Clinic location embed on website              | MVP      |
| **AWS S3**            | File storage (receipts, uploads)              | MVP      |

---

## 12. Security & Compliance

### 12.1 Authentication & Authorization

| ID    | Requirement                                                          |
| ----- | -------------------------------------------------------------------- |
| SEC-1 | Password hashing with bcrypt (salt rounds: 10)                       |
| SEC-2 | JWT access tokens (1-hour expiry) with refresh tokens (7-day expiry) |
| SEC-3 | Token blacklist for logout and revocation                            |
| SEC-4 | Role-based access control (RBAC) middleware on all protected routes  |
| SEC-5 | Rate limiting on authentication endpoints (5 attempts / 15 minutes)  |
| SEC-6 | Account lockout after 5 consecutive failed login attempts            |

### 12.2 Data Protection

| ID     | Requirement                                                            |
| ------ | ---------------------------------------------------------------------- |
| SEC-7  | HTTPS/TLS encryption for all data in transit                           |
| SEC-8  | Database encryption at rest                                            |
| SEC-9  | Sensitive field encryption (payment keys, secrets)                     |
| SEC-10 | Input validation and sanitization on all endpoints (express-validator) |
| SEC-11 | SQL injection prevention via Prisma parameterized queries              |
| SEC-12 | XSS prevention via input sanitization                                  |
| SEC-13 | CORS configuration restricted to known origins                         |
| SEC-14 | Helmet.js for HTTP security headers                                    |
| SEC-15 | Request body size limits                                               |

### 12.3 Privacy & Compliance

| ID     | Requirement                                                       |
| ------ | ----------------------------------------------------------------- |
| SEC-16 | Secure handling of patient data aligned with healthcare standards |
| SEC-17 | No sensitive data in application logs                             |
| SEC-18 | Data access restricted by role (patients see only their own data) |

### 12.4 Infrastructure Security

| ID     | Requirement                                    |
| ------ | ---------------------------------------------- |
| SEC-19 | Automated daily backups with encrypted storage |
| SEC-20 | 30-day backup retention policy                 |
| SEC-21 | Security monitoring and error logging          |

---

## 13. Phasing & Prioritization

### Phase 1 — MVP (Weeks 1–4)

| Priority | Feature                                                              |
| -------- | -------------------------------------------------------------------- |
| P0       | Authentication system (register, login, verify, reset password, JWT) |
| P0       | Basic CRUD for patients, doctors, services, specialties              |
| P0       | Booking system with real-time availability and slot reservation      |
| P0       | Payment integration (Paymob / Stripe)                                |
| P0       | Basic email notifications (booking, payment, reminders)              |
| P0       | Public website (Home, Services, About, Contact)                      |
| P0       | Patient portal (dashboard, appointments, profile)                    |
| P1       | Admin dashboard (stats, patients, appointments, schedule, services)  |
| P1       | Doctor dashboard (appointments, patients, basic notes)               |

### Phase 2 — Extended Features (Weeks 5–8)

| Priority | Feature                                                      |
| -------- | ------------------------------------------------------------ |
| P1       | PDF generation (prescriptions, medical reports, receipts)    |
| P1       | Prescription writer and report generator in doctor dashboard |
| P1       | Clinical notes with auto-save                                |
| P1       | Patient medical history and files management                 |
| P1       | In-app notification system                                   |
| P2       | SMS notifications via Twilio                                 |
| P2       | Advanced admin analytics and reporting                       |
| P2       | Testimonials management with approval workflow               |
| P2       | FAQ management                                               |

### Phase 3 — Advanced (Weeks 9–12)

| Priority | Feature                                              |
| -------- | ---------------------------------------------------- |
| P2       | Video consultations (Google Meet / Zoom integration) |
| P2       | Video waiting room and call interface                |
| P2       | Session recording                                    |
| P2       | Google Calendar integration                          |
| P3       | Additional payment gateways (PayPal, Moyasar, TAP)   |
| P3       | WhatsApp notifications                               |
| P3       | Advanced CMS features                                |
| P3       | Data export and account deletion workflows           |

---

## 14. Assumptions & Constraints

### Assumptions

| #   | Assumption                                                                     |
| --- | ------------------------------------------------------------------------------ |
| A1  | The system serves a single doctor / single medical practice                    |
| A2  | The primary patient base is in the Saudi Arabia / MENA region                  |
| A3  | Default currency is SAR (Saudi Riyal)                                          |
| A4  | CMS staff will manually configure working hours and blocked dates              |
| A5  | Appointments are exclusively with the primary doctor (single-provider model)   |
| A6  | All content (website, emails) will support Arabic (RTL) and English (LTR)      |
| A7  | File storage for media assets will use cloud object storage (S3 or equivalent) |

### Constraints

| #   | Constraint                                                                                        |
| --- | ------------------------------------------------------------------------------------------------- |
| C1  | Junior development team — the architecture should remain straightforward                          |
| C2  | Tight timeline — MVP targeted within 4 weeks                                                      |
| C3  | No dedicated DevOps — deployment and CI/CD should be simple                                       |
| C4  | PCI compliance must be achieved through gateway-hosted payment forms (no raw card data on server) |
| C5  | Backend is REST API only (no GraphQL)                                                             |
| C6  | No native mobile app — responsive web only                                                        |

---

## 15. Risks & Mitigations

| #   | Risk                                    | Impact | Likelihood | Mitigation                                                                                           |
| --- | --------------------------------------- | ------ | ---------- | ---------------------------------------------------------------------------------------------------- |
| R1  | Double-booking due to race conditions   | High   | Medium     | SERIALIZABLE transaction isolation + BookingReservation table + unique DB constraint                 |
| R2  | Payment callback failures               | High   | Medium     | Idempotent webhook handling; payment status polling fallback; email queue with retry logic           |
| R3  | Data breach of patient data             | High   | Low        | Encryption at rest and in transit; RBAC; security headers; input validation                          |
| R4  | Email/SMS delivery failures             | Medium | Medium     | Queue system with retry logic (max attempts tracking); fallback channels; delivery status monitoring |
| R5  | Scope creep on tight timeline           | High   | High       | Clear MVP scope; phased delivery; prioritized backlog                                                |
| R6  | Single point of failure (single server) | High   | Low        | Database backups; monitoring; disaster recovery plan                                                 |
| R7  | Junior developer capability gaps        | Medium | Medium     | Comprehensive documentation; clear task breakdown; code reviews                                      |

---

## 16. Glossary

| Term                    | Definition                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Booking**             | An appointment reservation made by a patient for a specific service, date, and time                |
| **Booking Reservation** | A temporary hold (10-minute expiry) on a time slot during the booking process to prevent conflicts |
| **CMS**                 | Content Management System — enables staff to update website content without code changes           |
| **CMS Panel**           | The internal staff-facing web application for managing content, bookings, and services             |
| **JWT**                 | JSON Web Token — stateless authentication mechanism used for API access                            |
| **OTP**                 | One-Time Password — temporary code sent via email/SMS for verification                             |
| **RBAC**                | Role-Based Access Control — permission system based on user roles (CMS STAFF, PATIENT)             |
| **SAR**                 | Saudi Riyal — default currency for the platform                                                    |
| **Paymob**              | Primary payment gateway for the MENA region                                                        |
| **Slot**                | A discrete time block in the doctor's schedule available for booking                               |
| **Webhook**             | A callback URL that payment gateways use to notify the system of payment events                    |

---

_End of Document_
