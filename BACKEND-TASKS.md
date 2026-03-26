# Backend Development Tasks - Dr. Mohamed Mamdoh Website & CMS

**Developer:** Backend Junior Developer  
**Project Duration:** 4 weeks  
**Last Updated:** March 26, 2026
**Technology Stack:** Express.js + Prisma ORM + TypeScript + PostgreSQL

---

## **MVP SCOPE (Priority for Junior Developer)**

Focus on getting these working first:

1. ✅ Authentication (login, register, email verification, JWT tokens)
2. ✅ Basic CRUD for services, specialties, doctor profile
3. ✅ Booking system with real-time availability & slot reservation
4. ✅ Payment integration (Paymob primary, Stripe secondary)
5. ✅ Email & SMS notifications (Nodemailer + Twilio)
6. ✅ CMS APIs for content, schedule, testimonials, FAQs

**Phase 2 features** (add after MVP is stable):

- PDF generation (receipts)
- Additional payment gateways (PayPal, Moyasar, TAP)
- Advanced notification scheduling & cron jobs
- WhatsApp notifications

**Out of Scope** (per BRD — do NOT implement):

- Doctor dashboard / clinical management
- Prescriptions, clinical notes, medical reports
- Admin dashboard for practice administration (patient management, analytics, user management)
- Telemedicine / video consultations
- Patient messaging / communication with doctor
- Medical history management & medical files
- Multi-doctor / multi-practice support
- EHR/EMR integration, insurance, pharmacy

---

## **PHASE 1: PROJECT SETUP, DATABASE & AUTHENTICATION** (Week 1)

### Task 1.1: Complete Project Setup

- [ ] Initialize TypeScript Node.js project: `npm init -y`
- [ ] Install all core dependencies:
  ```bash
  npm install express dotenv cors express-validator bcryptjs jsonwebtoken
  npm install @prisma/client express-rate-limit helmet nodemailer
  npm install -D typescript @types/node @types/express @types/bcryptjs ts-node nodemon prisma
  ```
- [ ] Initialize TypeScript: `npx tsc --init`
- [ ] Configure `tsconfig.json` (target: ES2020, moduleResolution: node, outDir: dist)
- [ ] Set up project structure with all folders (config, controllers, models, routes, middleware, services, utils, db)
- [ ] Create `.env` file with all environment variables (PORT, DATABASE_URL, JWT_SECRET, etc.)
- [ ] Configure nodemon and build scripts in package.json

### Task 1.2: Database Schema & Connection

- [ ] Initialize Prisma: `npx prisma init`
- [ ] Configure database URL in `.env` file: `DATABASE_URL="postgresql://user:password@localhost:5432/dr_mohamed_mamdoh_db"`
- [ ] Copy the complete Prisma schema to `prisma/schema.prisma`
- [ ] Review all tables and their relationships
- [ ] Understand the enums and their usage

**Complete Prisma Schema Overview:**

**Core User Tables:**

1. **Users** - Authentication (id, email, password, role [PATIENT, CMS_STAFF], is_verified, phone, otp_code, otp_expires_at, last_login)
2. **Patients** - Patient profiles (user_id, name, phone, DOB, gender)
3. **Doctors** - Doctor profile — single record (bio, qualifications, experience_years, specialty_id, profile_picture, consultation_fee, languages[], awards, social_links)

**Service & Specialty Tables:** 4. **Specialties** - Medical specialties (id, name, description, parent_id for sub-specialties, icon, image_url, order_index, is_active) 5. **Services** - Services offered (id, name, description, specialty_id, duration_minutes, price, is_active)

**Booking & Payment Tables:** 6. **Bookings** - Appointments (id, patient_id, service_id, booking_date, booking_time, status, payment_status, notes)

- Unique constraint: [booking_date, booking_time]

7. **Payments** - Payment tracking with multi-gateway support (id, booking_id, amount, currency [SAR], gateway, gateway_order_id, gateway_transaction_id, payment_method, status, paymob_payment_key, paymob_hmac, customer_email)
8. **BookingReservations** - Temporary slot holds with 10-min expiry (id, booking_date, booking_time, service_id, patient_email, patient_phone, token, expires_at)

**Scheduling Tables:** 9. **DoctorSchedules** - Weekly schedule (id, day_of_week enum, start_time, end_time, is_active) — Unique: [day_of_week] 10. **BlockedDates** - Date exceptions (id, date, reason) 11. **AvailableSlots** - Pre-generated time slots (id, date, start_time, end_time, is_booked, service_id) — Unique: [date, start_time]

**Communication Tables:** 12. **EmailQueue** - Email queue with retry (id, recipient_email, subject, body, template_id, status, attempts, error_message, retry_at) 13. **SMSQueue** - SMS queue (id, recipient_phone, message, status, provider, provider_id, attempts, sent_at)

**Content & CMS Tables:** 14. **ContentPages** - CMS pages (id, page_key unique, title, content JSON, seo_title, seo_description, is_published, updated_by) 15. **Testimonials** - Patient reviews (id, patient_name, content, rating, is_approved, is_featured) 16. **FAQ** - Frequently Asked Questions (id, question, answer, category, order, is_active) 17. **DoctorClinics** - Clinic information (id, clinic_name, address, phone, email, google_maps, working_hours JSON) 18. **DoctorCertificates** - Doctor credentials (id, title, issuer, year, file_url, is_verified)

**System Tables:** 19. **TokenBlacklist** - JWT revocation (id, token unique, user_id, expires_at) 20. **AppointmentReminders** - Automated reminders (id, booking_id, reminder_type, scheduled_time, sent_at, status, channel) 21. **PaymentGatewayConfig** - Payment gateway settings (id, gateway unique, api_key, api_secret, merchant_id, integration_id, iframe_id, is_active, is_test_mode)

**Important Enums:**

- Role: PATIENT, CMS_STAFF
- Gender: MALE, FEMALE, OTHER
- BookingStatus: PENDING, CONFIRMED, CANCELLED, COMPLETED, NO_SHOW, RESCHEDULED
- PaymentStatus: PENDING, PAID, REFUNDED, FAILED, PARTIALLY_REFUNDED
- PaymentMethod: CREDIT_CARD, DEBIT_CARD, MOBILE_WALLET, CASH, BANK_TRANSFER, MADA
- PaymentGateway: PAYMOB, STRIPE, PAYPAL, MOYASAR, TAP
- DayOfWeek: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY

- [ ] Generate Prisma Client: `npx prisma generate`
- [ ] Create and run migrations: `npx prisma migrate dev --name init`
- [ ] Create seed file in `prisma/seed.ts` for:
  - Initial CMS staff user
  - Sample specialties (e.g., Cardiology, Dermatology, Pediatrics)
  - Sample services linked to specialties
  - Doctor profile and clinic info
  - Payment gateway configuration (Paymob test mode)
  - Sample FAQs
  - Default content pages (home, about, contact)
- [ ] Configure seed script in package.json: `"prisma": { "seed": "ts-node prisma/seed.ts" }`
- [ ] Run seed: `npx prisma db seed`
- [ ] Test database connection: `npx prisma studio` to verify all tables created
- [ ] Review relationships and constraints in Prisma Studio

**Note:** Focus on in-scope tables only. Do NOT create tables for messaging, prescriptions, clinical notes, medical reports, medical files, or video consultations.

### Task 1.3: Express Server & Middleware Setup

- [ ] Create `src/server.ts` with complete Express setup
- [ ] Configure all middleware: helmet, CORS, body-parser, rate limiting
- [ ] Set up centralized error handling middleware
- [ ] Create request logging middleware
- [ ] Set up API route structure with base `/api` prefix
- [ ] Create health check endpoint: `GET /api/health`
- [ ] Test server starts and responds correctly

### Task 1.4: Complete Authentication System

- [ ] Create authentication controller with all endpoints:
  - `POST /api/auth/register` (patient registration with validation)
  - `POST /api/auth/login` (for patients and CMS staff)
  - `POST /api/auth/logout`
  - `POST /api/auth/forgot-password` (send OTP to email)
  - `POST /api/auth/reset-password` (verify OTP + set new password)
  - `POST /api/auth/verify-email` (OTP code verification after registration)
  - `POST /api/auth/refresh-token`
- [ ] Implement JWT token generation (access token: 1hr, refresh token: 7 days)
- [ ] Create token blacklist table for logout/revocation
- [ ] Implement token refresh mechanism:
  - Verify refresh token
  - Check if token is blacklisted
  - Generate new access token
  - Return new tokens
- [ ] Create authentication middleware for protected routes
- [ ] Create role-based authorization middleware (CMS_STAFF, PATIENT)
- [ ] Hash passwords with bcrypt (salt rounds: 10)
- [ ] Implement rate limiting on auth endpoints (5 login attempts per 15 min)
- [ ] Add account lockout after 5 failed attempts
- [ ] Test all authentication flows thoroughly including token refresh

---

## **PHASE 2: CORE API DEVELOPMENT - MVP FEATURES** (Week 2)

### Task 2.1: Public Website APIs

- [ ] Create complete public controller with all endpoints:
  - `GET /api/home-content` - hero section, about, stats
  - `GET /api/testimonials` - fetch approved testimonials
  - `GET /api/contact-info` - clinic details, hours, location
  - `GET /api/doctor-profile` - complete doctor bio, qualifications, experience
  - `GET /api/services` - all services with pagination
  - `GET /api/services/:id` - single service details
  - `GET /api/specialties` - all specialties and subspecialties
  - `GET /api/services/filter` - filter by specialty/subspecialty
  - `GET /api/faqs` - public FAQs grouped by category (active only)
  - `POST /api/contact` - contact form submission
- [ ] Configure email service (SendGrid/Mailgun/SMTP) for contact form
- [ ] Create HTML email templates for contact confirmations
- [ ] Test all public endpoints

### Task 2.2: Booking & Availability System (Critical Flow)

- [ ] Create booking controller and availability service
- [ ] Implement schedule management endpoints:
  - `GET /api/availability/dates?month=X&year=Y` - available dates
  - `GET /api/availability/slots?date=YYYY-MM-DD` - time slots for date
  - `GET /api/schedule` - doctor's working hours and blocked dates
- [ ] Create availability calculation logic:
  - Check doctor schedule (working hours per day)
  - Exclude blocked dates and holidays
  - Calculate slots based on appointment duration + buffer time (e.g., 30min + 5min buffer)
  - Mark booked slots as unavailable
- [ ] Implement booking workflow with **transaction isolation**:

  **Step 1: Reserve Slot** (`POST /api/bookings/reserve`)
  - Begin database transaction (SERIALIZABLE isolation level)
  - Check if slot already booked (query Bookings table for matching date/time)
  - Check if slot already reserved (query Booking_Reservations table, exclude expired)
  - Create record in Booking_Reservations table with 10-minute expiry
  - Return reservation ID and expiry time
  - Commit transaction
  - Handle failure: Return 409 Conflict if slot taken or reserved

  **Step 2: Complete Booking** (`POST /api/bookings/create`)
  - Validate reservation exists and not expired
  - Create booking record with status "pending_payment"
  - Link to patient, service, reserved slot
  - Generate unique booking ID
  - Return booking details for payment

  **Step 3: Payment Success** (handled in payment webhook)
  - Update Bookings.status to "confirmed"
  - Update Bookings.payment_status to "paid"
  - Delete corresponding record from Booking_Reservations table
  - Create record in Payments table with status "completed"
  - Trigger confirmation email + SMS to patient
  - Handle failure: Roll back transaction, keep booking as pending, attempt refund if payment captured

  **Step 4: Payment Failure**
  - Keep booking as "pending_payment" for 1 hour
  - Allow retry
  - After timeout: Cancel booking, release slot

- [ ] Additional endpoints:
  - `GET /api/bookings/:id` - booking details
  - `PUT /api/bookings/:id/cancel` - cancel booking (implement refund logic)
  - `PUT /api/bookings/:id/reschedule` - reschedule appointment
- [ ] Set up cron job to clean expired reservations (runs every 5 minutes)
- [ ] Test complete booking flow including race conditions

### Task 2.3: Payment Integration with Paymob (Error Handling)

- [ ] Choose payment gateway: **Paymob** (Egypt/MENA region)
- [ ] Sign up for Paymob account and get API credentials
- [ ] Install SDK: `npm install paymob` (or use native fetch for REST API)
- [ ] Configure Paymob credentials in `.env`:
  - PAYMOB_API_KEY
  - PAYMOB_SECRET_KEY
  - PAYMOB_INTEGRATION_ID (card payments)
  - PAYMOB_IFRAME_ID
  - PAYMOB_HMAC_SECRET (for webhook verification)
- [ ] Store configuration in PaymentGatewayConfig table
- [ ] Create payment controller and service
- [ ] Implement Paymob payment workflow:

  **Step 1: Initialize Payment** (`POST /api/payments/initialize`)
  - Validate booking exists and status is "pending_payment"
  - Get booking details (amount, patient info)
  - Call Paymob Authentication API to get auth token
  - Register order with Paymob (order_id, amount, currency SAR)
  - Generate payment key with customer billing data
  - Store payment record in Payments table:
    - gateway = PAYMOB
    - gateway_order_id = Paymob order ID
    - paymob_payment_key = payment key
    - customer_email, customer_phone
    - status = PENDING
  - Return iframe URL or payment key to frontend

  **Step 2: Payment Callback** (`GET /api/payments/callback`)
  - Receive callback from Paymob with transaction data
  - Verify HMAC signature for security
  - Extract transaction details (success, txn_response_code, amount_cents)
  - Update payment record with gateway_transaction_id
  - If success: trigger booking confirmation flow
  - If failed: update payment status to FAILED
  - Redirect user to success/failure page with status

  **Step 3: Payment Webhook** (`POST /api/payments/webhook`)
  - Verify webhook signature (HMAC verification critical!)
  - Parse Paymob transaction object
  - Handle transaction states:
    - `success=true`: Update Bookings.payment_status to PAID, Payments.status to COMPLETED, send confirmation email
    - `success=false`: Mark Payments.status as FAILED, notify patient
    - Pending transactions: Keep as PENDING
  - Use idempotency: Check if transaction already processed (by gateway_transaction_id)
  - Log all webhook events to audit log
  - Return 200 OK immediately

  **Step 4: Get Receipt** (`GET /api/payments/:id/receipt`)
  - Retrieve payment record with booking details
  - Generate receipt (JSON response for MVP):
    - Booking details (date, time, doctor, service)
    - Payment amount and currency
    - Transaction ID (gateway_transaction_id)
    - Payment method (card last 4 digits from payment_method_details JSON)
    - Date and time
  - (PDF generation in Phase 5)

  **Step 5: Process Refund** (`POST /api/payments/:id/refund`)
  - Validate refund eligibility (cancellation policy in booking notes)
  - Call Paymob Refund API with transaction_id and amount
  - Update Payments.status to REFUNDED or PARTIALLY_REFUNDED
  - Store refund_reason
  - Update Bookings.payment_status to REFUNDED
  - Update Bookings.status to CANCELLED
  - Send refund confirmation email and SMS

  **Step 6: Query Transaction Status** (`GET /api/payments/:id/status`)
  - Query Paymob API for transaction status
  - Update local payment record if status changed
  - Return current status to frontend

- [ ] Error handling:
  - Handle Paymob API errors (network, authentication, invalid data)
  - Implement retry logic for failed API calls (max 3 attempts)
  - Log all payment events to AuditLog table
  - Handle partial refunds
  - Graceful degradation if Paymob is down (show maintenance message)
  - Validate currency (SAR for Saudi Arabia, EGP for Egypt)
- [ ] Test payment flow:
  - Use Paymob test cards (check Paymob docs for test card numbers)
  - Test success scenario
  - Test decline scenario
  - Test webhook delivery
  - Test HMAC verification
  - Test refund flow

**Important Notes:**

- Paymob uses cents (multiply amount by 100)
- HMAC verification is critical for security - never skip this
- Store all transaction IDs for reconciliation
- Support multiple payment methods (CREDIT_CARD, DEBIT_CARD, MADA, MOBILE_WALLET)
- Consider adding Moyasar or Tap as alternative gateways for Saudi market

### Task 2.4: Basic Email & SMS Notification Service (MVP)

- [ ] **Email Setup:**
  - Install nodemailer: `npm install nodemailer`
  - Configure SMTP in .env (Gmail, SendGrid, AWS SES, or Mailgun)
  - Create email service with simple templates
  - Implement email queue using EmailQueue table
- [ ] **SMS Setup:**
  - Choose SMS provider: Twilio, Unifonic, or Yamamah (for Saudi Arabia)
  - Install SDK: `npm install twilio` or use REST API
  - Configure SMS credentials in .env
  - Create SMS service
  - Implement SMS queue using SMSQueue table
- [ ] **Implement essential notification triggers:**
  - Booking confirmation (Email + SMS to patient)
  - Appointment reminder 24h before (Email + SMS)
  - Cancellation notification (Email + SMS)
  - Payment confirmation (Email + SMS with receipt info)
  - Payment failed notification (Email)
  - OTP verification codes (Email + SMS)
  - Password reset OTP (Email + SMS)
- [ ] **Email templates (branded HTML):**
  - Booking confirmation template
  - Payment success / receipt template
  - Cancellation confirmation template
  - Appointment reminder template (24h before)
  - OTP verification template
  - Password reset template
  - Contact form auto-reply template
- [ ] **SMS templates (160 characters max):**
  - "Your appointment with Dr. Mohamed Mamdoh on [Date] at [Time] is confirmed. Ref: [ID]"
  - "Reminder: Your appointment tomorrow at [Time]. Reply C to cancel."
  - "Payment of SAR [Amount] received. Thank you!"
  - "Your verification code is [CODE]. Expires in 10 minutes."
- [ ] Implement notification service with channel support:
  - Send via email (using EmailQueue table)
  - Send via SMS (using SMSQueue table)
  - Support multiple channels for same notification
- [ ] Implement retry logic:
  - Email: 3 attempts with exponential backoff
  - SMS: 2 attempts (SMS is more expensive)
  - Update attempts counter and error_message
  - Set retry_at timestamp
- [ ] Create cron job for processing queues:
  - Check EmailQueue every minute for pending emails
  - Check SMSQueue every minute for pending SMS
  - Process failed items that are ready for retry
  - Send appointment reminders daily at 8 AM (check bookings for next day)
  - Clean expired booking reservations every 5 minutes
- [ ] Test with real contact information:
  - Test email delivery and templates
  - Test SMS delivery (watch costs in test mode)
  - Test multi-channel notifications
  - Test retry logic with intentional failures

**Priority:** Get email + SMS working with branded HTML templates first. Advanced features (WhatsApp, more complex scheduling) come later.

---

## **PHASE 3: PATIENT PORTAL APIS** (Week 3)

### Task 3.1: Patient Dashboard & Appointment Management

- [ ] `GET /api/patients/dashboard` - get patient summary:
  - Upcoming appointments count and list
  - Recent completed appointments
  - Next appointment details
- [ ] `GET /api/patients/appointments` - list all appointments with filters (status, date range, pagination)
- [ ] `GET /api/patients/appointments/:id` - get appointment details (includes service info, payment status, cancellation policy)
- [ ] `POST /api/patients/appointments/:id/cancel` - cancel appointment with reason
- [ ] `POST /api/patients/appointments/:id/reschedule` - reschedule appointment:
  - Check new slot availability
  - Reserve new slot (10-min expiry)
  - Release old slot
  - Update booking record
  - Send confirmation email + SMS
- [ ] Implement cancellation policy logic (free cancel 24h before, 50% refund 12-24h, no refund <12h)
- [ ] Protect all routes with patient JWT middleware
- [ ] Test all appointment endpoints

### Task 3.2: Patient Profile & Settings

- [ ] `GET /api/patients/profile` - get patient profile (name, email, phone, DOB, gender, address)
- [ ] `PATCH /api/patients/profile` - update patient profile (name, phone, DOB, gender, address, emergency_contact)
- [ ] `POST /api/patients/change-password` - change password (requires current password, bcrypt compare)
- [ ] `PATCH /api/patients/notification-preferences` - update notification preferences:
  - email_notifications (boolean)
  - sms_notifications (boolean)
- [ ] Validate phone number format
- [ ] Validate password strength requirements
- [ ] Protect all routes with patient JWT middleware
- [ ] Test profile and settings endpoints

---

## **PHASE 4: CMS PANEL APIS** (Week 4)

### Task 4.1: CMS Authentication & Dashboard

- [ ] Create CMS controller with CMS_STAFF role middleware
- [ ] `POST /api/cms/login` - CMS staff authentication (separate from patient login)
- [ ] `GET /api/cms/dashboard` - key metrics:
  - Total bookings (today, this week, this month)
  - Upcoming appointments today
  - Revenue this month
  - Pending testimonials awaiting approval
  - Recent contact form submissions
- [ ] Protect all CMS routes with CMS_STAFF JWT middleware

### Task 4.2: Doctor Profile & Clinic Management (CMS)

- [ ] **Doctor Profile Management:**
  - `GET /api/cms/doctor-profile` - get doctor profile for editing
  - `PATCH /api/cms/doctor-profile` - update doctor profile:
    - name, title, bio, qualifications, experience_years
    - consultation_fee, languages[]
    - awards JSON, social_links JSON
  - `POST /api/cms/doctor-profile/picture` - upload profile picture
- [ ] **Clinic Information:**
  - `GET /api/cms/clinic` - get clinic information
  - `PATCH /api/cms/clinic` - update clinic info:
    - clinic_name, address, phone, email
    - google_maps_url
    - working_hours JSON

### Task 4.3: Services & Specialties Management (CMS)

- [ ] **Services Management:**
  - `GET /api/cms/services` - list all services
  - `POST /api/cms/services` - create service (name, description, price, duration_minutes, is_active)
  - `PATCH /api/cms/services/:id` - update service
  - `DELETE /api/cms/services/:id` - soft delete service (set is_active=false)
- [ ] **Specialties Management:**
  - `GET /api/cms/specialties` - list all specialties
  - `POST /api/cms/specialties` - create specialty (name, description, icon, is_active)
  - `PATCH /api/cms/specialties/:id` - update specialty
  - `DELETE /api/cms/specialties/:id` - soft delete specialty
- [ ] Validate service price and duration
- [ ] Test services and specialties CRUD

### Task 4.4: Schedule & Blocked Dates Management (CMS)

- [ ] **Schedule Management:**
  - `GET /api/cms/schedule` - get doctor's weekly schedule (DoctorSchedule table)
  - `POST /api/cms/schedule` - create weekly schedule entry (day_of_week, start_time, end_time, slot_duration)
  - `PATCH /api/cms/schedule/:id` - update schedule entry
  - `DELETE /api/cms/schedule/:id` - delete schedule entry
- [ ] **Blocked Dates:**
  - `GET /api/cms/blocked-dates` - list all blocked dates
  - `POST /api/cms/blocked-dates` - block specific date with reason (holiday, vacation, etc.)
  - `DELETE /api/cms/blocked-dates/:id` - unblock date
- [ ] Validate schedule changes don't conflict with existing confirmed appointments
- [ ] Test schedule and blocked dates management

### Task 4.5: Bookings Overview (CMS)

- [ ] `GET /api/cms/bookings` - list all bookings with filters:
  - Filter by: status, payment_status, date range, patient name/email
  - Pagination, sorting
- [ ] `GET /api/cms/bookings/:id` - get booking details (patient info, service, payment, timestamps)
- [ ] `POST /api/cms/bookings` - manually create booking for walk-in patient
- [ ] `PATCH /api/cms/bookings/:id/status` - update booking status (confirm, complete, cancel)
- [ ] `PATCH /api/cms/bookings/:id/cancel` - cancel booking with optional refund trigger
- [ ] Test bookings overview and management

### Task 4.6: Content Pages Management (CMS)

- [ ] **Content Pages:**
  - `GET /api/cms/content` - list all content pages
  - `GET /api/cms/content/:pageKey` - get content for specific page (home, about, contact, privacy, terms)
  - `PATCH /api/cms/content/:pageKey` - update page content:
    - title
    - content (JSON structure for flexible layout)
    - seo_title, seo_description
    - is_published (boolean)
  - Track updated_by (CMS staff user_id)
- [ ] Test content page CRUD and publishing

### Task 4.7: Testimonials Management (CMS)

- [ ] `GET /api/cms/testimonials` - list all testimonials (filter by is_approved, is_featured)
- [ ] `GET /api/cms/testimonials/:id` - get testimonial details
- [ ] `POST /api/cms/testimonials` - create testimonial (manual entry by CMS staff)
- [ ] `PATCH /api/cms/testimonials/:id` - edit testimonial
- [ ] `PATCH /api/cms/testimonials/:id/approve` - approve testimonial (set is_approved=true)
- [ ] `PATCH /api/cms/testimonials/:id/feature` - feature testimonial on homepage (set is_featured=true)
- [ ] `DELETE /api/cms/testimonials/:id` - delete testimonial
- [ ] Test testimonials CRUD, approval, and featuring

### Task 4.8: FAQ Management (CMS)

- [ ] `GET /api/cms/faqs` - list all FAQs (filter by category, is_active)
- [ ] `POST /api/cms/faqs` - create FAQ:
  - question, answer
  - category ('booking', 'payment', 'general', 'services')
  - order (for sorting)
  - is_active
- [ ] `PATCH /api/cms/faqs/:id` - update FAQ
- [ ] `PATCH /api/cms/faqs/reorder` - bulk update order numbers
- [ ] `DELETE /api/cms/faqs/:id` - delete FAQ
- [ ] Test FAQ CRUD and reordering

### Task 4.9: Payment Gateway Configuration (CMS)

- [ ] `GET /api/cms/payment-config` - get active payment gateway configuration (masked secrets)
- [ ] `PATCH /api/cms/payment-config` - update payment gateway settings:
  - Paymob: API key, integration IDs, HMAC secret
  - Stripe: publishable key, secret key
  - Active gateway selection
- [ ] `POST /api/cms/payment-config/test` - test payment gateway connectivity
- [ ] Store encrypted payment credentials in PaymentGatewayConfig table
- [ ] Test payment configuration management

---

## **PHASE 5: POST-MVP ENHANCEMENTS** (After MVP is stable)

**Note:** These features are optional and should only be implemented after MVP is complete and tested.

### Task 5.1: Additional Payment Gateways

- [ ] Integrate PayPal payment gateway
- [ ] Integrate Moyasar payment gateway
- [ ] Integrate TAP payment gateway
- [ ] Create unified payment service interface for multi-gateway support
- [ ] Update payment webhook handlers for each gateway
- [ ] Test payment flows for all gateways

### Task 5.2: PDF Generation for Receipts

- [ ] Install PDF library: `npm install pdfkit` or `npm install puppeteer`
- [ ] Create PDF template with clinic branding for payment receipts:
  - Clinic letterhead
  - Patient info
  - Service details
  - Payment breakdown
  - Transaction ID
  - Date and reference number
- [ ] Implement endpoint:
  - `GET /api/patients/appointments/:id/receipt` - generate and download payment receipt PDF
- [ ] Store generated PDFs in cloud storage (AWS S3 or equivalent)
- [ ] Test PDF generation and download

### Task 5.3: Cloud Storage for Files (S3/Cloudinary)

- [ ] Set up AWS S3 or Cloudinary account
- [ ] Install SDK: `npm install @aws-sdk/client-s3` or `npm install cloudinary`
- [ ] Configure storage buckets/folders:
  - profile-photos
  - receipts
- [ ] Create file upload service with signed URLs
- [ ] Update profile photo upload endpoints to use cloud storage
- [ ] Implement file deletion when records are deleted
- [ ] Configure access policies (private files, signed URLs for retrieval)
- [ ] Test file upload and retrieval

### Task 5.4: WhatsApp Notifications

- [ ] Research WhatsApp Business API or Twilio WhatsApp
- [ ] Implement WhatsApp message sending service
- [ ] Add WhatsApp as notification channel for:
  - Booking confirmations
  - Appointment reminders
  - Payment receipts
- [ ] Test WhatsApp message delivery

---

## **PHASE 6: SECURITY, OPTIMIZATION & DEPLOYMENT** (Final Week)

### Task 6.1: Security Hardening

- [ ] Install security packages: `npm install helmet express-rate-limit`
- [ ] Review and test all authentication flows
- [ ] Implement input validation on all endpoints using validator library
- [ ] Add SQL injection prevention (Prisma uses parameterized queries by default)
- [ ] Add XSS prevention (sanitize HTML inputs with DOMPurify)
- [ ] Configure CORS properly (whitelist frontend domains only)
- [ ] Set security headers with Helmet
- [ ] Implement rate limiting on all public endpoints (10 requests/minute for auth, 100 for others)
- [ ] Review and secure file upload functionality (validate file types, limit size)
- [ ] Add audit logging for sensitive operations (user creation, deletions, role changes)
- [ ] Test role-based access control thoroughly

### Task 6.2: Database Optimization

- [ ] Add indexes to frequently queried fields:
  - bookings (patient_id, booking_date, status, payment_status)
  - booking_reservations (booking_date, booking_time, expires_at)
  - email_queue (status, scheduled_for)
  - sms_queue (status, scheduled_for)
  - testimonials (is_approved, is_featured)
  - faqs (category, is_active, order)
  - users (email) - already unique
  - doctor_schedules (day_of_week)
  - blocked_dates (date)
  - payments (booking_id, status)
- [ ] Optimize complex queries (booking availability, dashboard metrics)
- [ ] Configure connection pooling in Prisma schema (connection_limit in datasource)
- [ ] Configure automated daily backups
- [ ] Test backup restoration procedure
- [ ] Document database schema and relationships

### Task 6.3: Performance Optimization

- [ ] Add compression middleware
- [ ] Implement pagination on large datasets (bookings, testimonials, FAQs)
- [ ] Profile and optimize slow endpoints
- [ ] Optimize availability slot calculations

### Task 6.4: Error Handling & Logging

- [ ] Install logging library: `npm install winston`
- [ ] Set up structured logging with log levels (error, warn, info, debug)
- [ ] Log all API requests with response time
- [ ] Create global error handling middleware
- [ ] Return standardized error responses (JSON with error code, message, details)
- [ ] Log errors to file and console
- [ ] Set up error monitoring (Sentry for production)

### Task 6.5: API Documentation

- [ ] Install Swagger: `npm install swagger-jsdoc swagger-ui-express`
- [ ] Document all API endpoints with Swagger/OpenAPI
- [ ] Add request/response examples
- [ ] Document authentication requirements
- [ ] Add error response codes
- [ ] Generate API documentation page at `/api-docs`

### Task 6.6: Testing

- [ ] Install testing framework: `npm install jest supertest --save-dev`
- [ ] Write unit tests for critical functions:
  - Authentication (login, register, token validation)
  - Booking logic (availability, reservation, conflict handling)
  - Payment processing
- [ ] Write integration tests for API endpoints (at least one per controller)
- [ ] Test edge cases:
  - Double booking prevention
  - Payment failure handling
  - Expired reservations
- [ ] Test role-based access control
- [ ] Achieve >70% code coverage (run `npm test -- --coverage`)

### Task 6.7: Deployment Preparation

- [ ] Create `.env.example` file with all required variables
- [ ] Set up environment-specific configurations (development, staging, production)
- [ ] Create deployment documentation:
  - Environment setup
  - Database migration steps
  - Environment variables
  - Running the server
- [ ] Set up CI/CD pipeline (GitHub Actions or GitLab CI)
- [ ] Configure production database (PostgreSQL on AWS RDS, Railway, or similar)
- [ ] Set up monitoring (New Relic, Datadog, or PM2)
- [ ] Create health check endpoint: `GET /health`
- [ ] Test production build locally
- [ ] Deploy to staging environment first
- [ ] Perform smoke tests on staging
- [ ] Deploy to production

---

## **APPENDIX: CRITICAL REMINDERS**

### ⚠️ MVP Priority Order

1. **Week 1:** Setup, Database, Authentication, Public APIs (services, doctor profile, availability)
2. **Week 2:** Booking System (with transaction isolation!), Payment (Paymob + Stripe), Email & SMS notifications
3. **Week 3:** Patient Portal (dashboard, appointments, profile, reschedule, cancel)
4. **Week 4:** CMS Panel APIs (content, services, schedule, testimonials, FAQs, bookings overview)

**Phase 2 (after MVP):** Additional payment gateways (PayPal, Moyasar, TAP), PDF receipts, Cloud storage, WhatsApp notifications

### 🔥 Critical Flows That Must Work Perfectly

**Booking Flow:**

1. User checks availability → GET /api/availability/slots
2. User reserves slot → POST /api/bookings/reserve (10-min expiry)
3. User completes payment → Paymob/Stripe PaymentIntent
4. Webhook confirms → Update booking to "confirmed", send email + SMS
5. Handle failures → Cancel reservation, release slot, refund if needed

**Error Handling Checklist:**

- [ ] Double booking prevented (transaction isolation)
- [ ] Payment failures handled gracefully
- [ ] Expired reservations cleaned up automatically
- [ ] Race conditions tested
- [ ] All errors return proper status codes (400, 401, 403, 404, 409, 500)

### 📦 Final Deliverables

- [ ] Complete backend API running on port 5000
- [ ] PostgreSQL database with all migrations
- [ ] Paymob + Stripe test mode working
- [ ] Email (Nodemailer) + SMS (Twilio) notifications working
- [ ] API documentation at /api-docs
- [ ] Postman collection or similar for testing
- [ ] README with setup instructions
- [ ] .env.example file

**Good luck! Focus on getting MVP working first, then add advanced features.**

---

## **TECHNICAL STACK SUMMARY**

### Core Technologies

- **Runtime:** Node.js (v18+)
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT + bcrypt

### Essential Packages

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0",
    "cors": "^2.8.5",
    "@prisma/client": "^5.7.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "express-validator": "^7.0.0",
    "express-rate-limit": "^6.10.0",
    "helmet": "^7.0.0",
    "nodemailer": "^6.9.0",
    "twilio": "^4.20.0",
    "stripe": "^12.0.0",
    "node-cron": "^3.0.2",
    "winston": "^3.10.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.10.0",
    "@types/express": "^4.17.0",
    "@types/bcryptjs": "^2.4.0",
    "ts-node": "^10.9.0",
    "nodemon": "^3.0.0",
    "prisma": "^5.7.0",
    "jest": "^29.6.0",
    "supertest": "^6.3.0"
  }
}
```

---

## **IMPORTANT NOTES**

### Best Practices

1. **Always validate input** on the server side, never trust client data
2. **Use environment variables** for all sensitive data (API keys, passwords)
3. **Hash passwords** before storing, never store plain text
4. **Use parameterized queries** to prevent SQL injection
5. **Implement proper error handling** - don't expose internal errors to clients
6. **Log important operations** for debugging and audit trails
7. **Test thoroughly** before moving to next phase
8. **Comment your code** for future maintenance
9. **Follow consistent naming conventions**
10. **Keep functions small and focused** (single responsibility)

### Common Pitfalls to Avoid

- ❌ Don't skip input validation
- ❌ Don't commit .env files to version control
- ❌ Don't expose sensitive data in API responses
- ❌ Don't allow SQL injection vulnerabilities
- ❌ Don't implement your own encryption (use established libraries)
- ❌ Don't skip error handling
- ❌ Don't hardcode credentials or URLs
- ❌ Don't ignore rate limiting on public endpoints
- ❌ Don't skip database migrations
- ❌ Don't test only happy paths, test edge cases too

### Getting Help

- Read Express.js documentation: https://expressjs.com/
- Read Prisma documentation: https://www.prisma.io/docs
- Read TypeScript documentation: https://www.typescriptlang.org/
- Check Stack Overflow for common issues
- Review payment gateway documentation carefully
- Test in Postman/Thunder Client before frontend integration
- Ask senior developer when stuck >30 minutes

### Progress Tracking

- Mark tasks complete as you finish them
- Test each endpoint before moving to next
- Document any deviations from plan
- Report blockers immediately
- Commit code regularly with clear messages

---

**Good luck! Take it one phase at a time. Don't rush - quality over speed!** 🚀
