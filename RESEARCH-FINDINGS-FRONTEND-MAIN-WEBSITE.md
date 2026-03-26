# Research Findings: Frontend Main Website vs Technical Specifications

**Date:** March 26, 2026  
**Status:** Comprehensive Gap Analysis (Updated to align with BRD)

---

## **EXECUTIVE SUMMARY**

After thorough comparison between the FRONTEND-MAIN-WEBSITE-TASKS.md and Technical-Specifications-Frontend-Backend.md, aligned with the BRD (source of truth), the main website tasks document is **well-aligned with project scope**. Many features previously flagged as "missing" are **intentionally out of scope** per the BRD. Below is the updated analysis.

---

## **OUT OF SCOPE FEATURES (Per BRD)**

The following features were previously listed as gaps but are **confirmed out of scope** and should NOT be implemented:

- Video Consultations / Telemedicine Interface
- Doctor Dashboard (separate login/UI)
- Prescriptions viewing/downloading
- Medical Reports viewing/downloading
- Medical History management
- Messaging system (patient ↔ doctor)
- Clinical Notes / Diagnosis management
- Two-Factor Authentication (2FA)
- In-App Notification Bell system
- Account Deletion / "Delete Account" flow
- Data Export / "Download My Data"
- HIPAA/GDPR compliance features
- Audit logs for data access
- Guest checkout without registration
- Multi-doctor support
- EHR/EMR integration
- Admin Dashboard (replaced by CMS Panel)

---

## **✅ COMPLETE SECTIONS**

### 1. Public Website Structure
- ✅ Home Page (Hero, About, Services, Testimonials, Contact, FAQs)
- ✅ Services Page (Listing, Filtering by specialty)
- ✅ About Page (Profile, Bio, Qualifications, Experience, Achievements)
- ✅ Contact Page (Form, Information, Map, Social Links)

### 2. Booking System
- ✅ Step 1: Service Selection
- ✅ Step 2: Date Selection
- ✅ Step 3: Time Slot Selection
- ✅ Step 4: Patient Information
- ✅ Step 5: Review & Confirm
- ✅ Progress Indicator

> **Note:** Location Selection was removed (single clinic location per BRD). Booking is now 5 steps instead of 6.

### 3. Authentication & Patient Dashboard
- ✅ Login Page
- ✅ Registration Page
- ✅ Email Verification (OTP-based)
- ✅ Forgot Password (OTP-based)
- ✅ Protected Routes
- ✅ Dashboard Home
- ✅ My Appointments (upcoming, past, cancel, reschedule)
- ✅ Profile Settings

### 4. Layout & Common Components
- ✅ Header Component
- ✅ Footer Component
- ✅ Loading Component
- ✅ Button Component
- ✅ Card Component

---

## **⚠️ REMAINING GAPS (In-Scope Features Needing Attention)**

### 1. **Appointment Cancellation Policy & Rules** ⚠️
**BRD Requirement:** Cancellation policy enforcement
**Tasks Document:** NOT FULLY DETAILED

**Missing Details:**
- Display cancellation policy before booking
- Prevent cancellations within X hours of appointment
- Calculate refund amounts based on cancellation timing
- Display refund information to patient
- Confirmation dialog before cancellation

---

### 2. **Appointment Rescheduling Flow** ⚠️
**BRD Requirement:** Patient can reschedule appointments
**Tasks Document:** Mentioned but not fully detailed

**Missing Components:**
- Select new date and time
- Availability check for new slot
- Confirmation before reschedule

---

### 3. **Payment Integration Details** ⚠️
**BRD Requirement:** Paymob (primary) + Stripe (secondary), SAR currency
**Tasks Document:** Updated but some details could be expanded

**Considerations:**
- Paymob hosted page/iframe integration
- Stripe Elements integration
- Payment error handling specifics
- Retry payment logic
- Receipt download from patient dashboard

---

### 4. **Privacy Policy & Terms Pages** ⚠️
**BRD Requirement:** Standard legal pages
**Tasks Document:** NOT EXPLICITLY INCLUDED as separate tasks

**Missing Components:**
- Static privacy policy page (content from CMS)
- Static terms & conditions page (content from CMS)
- Cookie consent banner (if required)

---

### 5. **Error Boundary & Error Pages** ⚠️
**Tasks Document:** Partially covered, not detailed

**Missing Components:**
- Global error boundary component
- 404 Not Found page
- 500 Server Error page
- Network error handling
- Payment failed page

---

### 6. **SMS Notification Preferences** ⚠️
**BRD Requirement:** Twilio SMS integration (MVP priority)
**Tasks Document:** Toggle exists in profile, but no further detail

**Considerations:**
- SMS opt-in during registration
- SMS appointment reminders (24 hours before)
- SMS OTP delivery for verification

---

## **📋 SUMMARY TABLE**

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| ~~Video Consultations~~ | N/A | — | **OUT OF SCOPE** |
| Email Verification (OTP) | ✅ Complete | — | Added to tasks |
| Forgot Password (OTP) | ✅ Complete | — | Added to tasks |
| ~~2FA Authentication~~ | N/A | — | **OUT OF SCOPE** |
| SMS Notifications | ⚠️ Partial | MEDIUM | Twilio integration, MVP priority |
| ~~Notification Bell~~ | N/A | — | **OUT OF SCOPE** |
| Payment Details | ⚠️ Partial | HIGH | Paymob + Stripe clarifications needed |
| ~~Data Export~~ | N/A | — | **OUT OF SCOPE** |
| ~~Account Deletion~~ | N/A | — | **OUT OF SCOPE** |
| Privacy/Terms Pages | ⚠️ Missing | MEDIUM | CMS-driven content pages |
| Error Boundary | ⚠️ Incomplete | MEDIUM | Better UX |
| ~~Medical History~~ | N/A | — | **OUT OF SCOPE** |
| ~~Prescriptions~~ | N/A | — | **OUT OF SCOPE** |
| ~~Reports~~ | N/A | — | **OUT OF SCOPE** |
| ~~Messages~~ | N/A | — | **OUT OF SCOPE** |
| Cancellation Policy | ⚠️ Incomplete | HIGH | Business logic needed |
| Rescheduling Flow | ⚠️ Incomplete | HIGH | Needs detailed steps |

---

## **RECOMMENDATIONS**

### **Phase 1: Address In-Scope Gaps**
1. Detail cancellation policy display & workflow
2. Detail rescheduling flow with availability check
3. Add Privacy Policy & Terms pages (content via CMS API)
4. Add error boundary and error pages (404, 500)

### **Phase 2: Enhance Payment & SMS**
1. Document Paymob iframe integration details
2. Document Stripe Elements fallback details
3. Confirm SMS opt-in flow during registration
4. Add receipt download from appointment details

---

## **BACKEND API DEPENDENCIES**

The following backend endpoints are needed by the frontend (updated paths per BRD):

**Authentication:**
- POST /api/patients/register
- POST /api/patients/verify-email (OTP)
- POST /api/patients/login
- POST /api/patients/forgot-password (sends OTP)
- POST /api/patients/reset-password (with OTP)

**Patient Dashboard:**
- GET /api/patients/profile
- PUT /api/patients/profile
- PUT /api/patients/change-password
- GET /api/patients/appointments
- GET /api/patients/appointments/:id
- DELETE /api/patients/appointments/:id/cancel
- PUT /api/patients/appointments/:id/reschedule
- GET /api/patients/appointments/:id/receipt

**Public APIs:**
- GET /api/services
- GET /api/services/:id
- GET /api/specialties
- GET /api/doctor/profile (public)
- GET /api/clinic (public)
- GET /api/schedule/available-slots?date=YYYY-MM-DD
- POST /api/bookings
- GET /api/testimonials (approved)
- GET /api/faqs
- GET /api/content/:pageKey
- POST /api/contact

**Payment:**
- POST /api/payments/paymob/initiate
- POST /api/payments/stripe/create-intent
- POST /api/payments/webhook (server-to-server)

---

## **QUESTIONS FOR PRODUCT TEAM**

1. What is the appointment cancellation policy (hours before, refund %)?
2. How long should reserved slots be held during payment (5min, 15min)?
3. What is the session timeout duration (auto-logout)?
4. Are Privacy Policy and Terms pages managed via CMS or static?
5. Should SMS opt-in be enabled by default during registration?

---

**Document Status:** Updated Research & Gap Analysis (BRD-aligned)  
**Prepared By:** Copilot Research Agent  
**Last Updated:** March 26, 2026  
**Project:** Dr. Mohamed Mamdoh Website & CMS
