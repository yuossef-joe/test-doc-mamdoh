# Technical Specifications - Frontend & Backend Breakdown
## Dr. Mohamed Mamdoh Website & CMS

---

## **1. PUBLIC WEBSITE**

### **1.1 Home Page**

#### Frontend
- **Hero Section**
  - Doctor's main photo/banner image
  - Headline/tagline text
  - "Book Appointment" call-to-action button
  - Responsive layout for mobile/tablet/desktop
- **About Section**
  - Brief bio text (2-3 paragraphs)
  - Small profile photo
  - Read more link to About page
- **Services Overview**
  - Card/grid layout displaying services
  - Service icons/images
  - Service titles and short descriptions
  - "View All Services" button
- **Testimonials Section**
  - Patient review cards
  - Star ratings display
  - Patient names and dates
  - Carousel/slider for multiple reviews
- **Contact Section**
  - Clinic address display
  - Phone number (clickable for mobile)
  - Email address
  - Working hours display
  - Embedded Google Maps
  - Social media icons/links

#### Backend
- **Content Management**
  - Store hero section content (title, subtitle, image URL)
  - Store doctor bio text
  - Store testimonials data (name, review, rating, date)
  - Store contact information (address, phone, email, hours)
- **API Endpoints**
  - GET /api/home-content - Fetch all home page content
  - GET /api/testimonials - Fetch testimonials list

---

### **1.2 Services Page**

#### Frontend
- **Services List Display**
  - Grid or list view of all services
  - Service cards with images
  - Service names and descriptions
  - Pricing display (if applicable)
- **Filter System**
  - Specialty dropdown/filter
  - Sub-specialty dropdown/filter
  - Search bar for service names
  - Clear filters button
- **Service Detail View**
  - Individual service page
  - Full description
  - Duration and pricing
  - "Book This Service" button

#### Backend
- **Services Database**
  - Store service details (name, description, price, duration)
  - Store specialty categories
  - Store sub-specialty categories
  - Link services to specialties
- **API Endpoints**
  - GET /api/services - Fetch all services
  - GET /api/services/:id - Fetch single service details
  - GET /api/specialties - Fetch specialty list
  - GET /api/subspecialties - Fetch sub-specialty list
  - GET /api/services/filter?specialty=X - Filter services
- **Admin Management**
  - CRUD operations for services (via CMS)
  - CRUD operations for specialties (via CMS)

---

### **1.3 About Page**

#### Frontend
- **Doctor Profile Section**
  - Large professional photo
  - Full name and title
  - Specialty/specialization display
- **Biography Section**
  - Complete bio text with formatting
  - Section headings (Education, Experience, etc.)
- **Qualifications Display**
  - List of degrees and certifications
  - Institution names and years
  - Visual timeline (optional)
- **Experience Section**
  - Work history list
  - Hospital/clinic names
  - Years of experience
  - Positions held
- **Achievements Section**
  - Awards and recognition
  - Publications
  - Special certifications
  - Professional memberships

#### Backend
- **Doctor Profile Database**
  - Store all profile information
  - Store biography text
  - Store qualifications list
  - Store experience records
  - Store achievements data
- **API Endpoints**
  - GET /api/doctor-profile - Fetch complete profile
- **Admin Management**
  - Update doctor profile interface
  - Edit bio and credentials

---

### **1.4 Contact Page**

#### Frontend
- **Contact Form**
  - Name input field
  - Email input field
  - Phone number input field
  - Subject/topic dropdown
  - Message textarea
  - Submit button
  - Form validation (required fields)
  - Success/error message display
- **Contact Information Display**
  - Clinic address
  - Phone number(s)
  - Email address
  - Working hours breakdown by day
- **Map Integration**
  - Google Maps embedded iframe
  - Location marker
  - Get directions link
- **Social Media Links**
  - Facebook, Instagram, LinkedIn icons
  - Clickable links to profiles

#### Backend
- **Contact Form Processing**
  - Receive form submissions
  - Validate input data
  - Store messages in database
  - Send email notification to admin
  - Auto-reply email to sender
- **Database**
  - Store contact form submissions
  - Store contact information
- **API Endpoints**
  - POST /api/contact - Submit contact form
  - GET /api/contact-info - Fetch contact details

---

## **2. BOOKING SYSTEM**

### Frontend
- **Step 1: Service Selection**
  - Specialty dropdown menu
  - Sub-specialty dropdown (conditional)
  - Service selection radio buttons or cards
  - Price display for selected service
  - "Next" button
- **Step 2: Date Selection**
  - Interactive calendar widget
  - Available dates highlighted
  - Unavailable/past dates disabled
  - Selected date visual indicator
  - Month/year navigation
- **Step 3: Time Slot Selection**
  - Available time slots displayed as buttons
  - Booked slots shown as disabled
  - Selected time slot highlighted
  - Time zone display
- **Step 4: Patient Information**
  - Login prompt if not logged in
  - Registration form for new patients
    - Full name
    - Email
    - Phone number
    - Date of birth
    - Gender
  - Auto-fill for logged-in users
- **Step 5: Review & Confirm**
  - Booking summary display
  - Service, date, time
  - Price breakdown
  - Edit buttons for each section
  - Terms and conditions checkbox
  - "Proceed to Payment" button
- **Progress Indicator**
  - Step numbers/breadcrumb navigation
  - Current step highlighted
  - Completed steps marked

### Backend
- **Availability Management**
  - Calculate available dates based on doctor schedule
  - Calculate available time slots for selected date
  - Check slot availability in real-time
  - Handle concurrent booking attempts
  - Reserve slot temporarily during booking process
- **Booking Creation**
  - Create booking record with status "pending"
  - Link to patient account
  - Link to selected service
  - Store date, time, location
  - Generate unique booking ID
- **Database**
  - Bookings table (id, patient_id, service_id, date, time, location, status, price)
  - Doctor schedule table (day, start_time, end_time, is_available)
  - Time slots table (date, time, is_booked, booking_id)
- **API Endpoints**
  - GET /api/specialties - Fetch specialties
  - GET /api/services?specialty=X - Fetch services by specialty
  - GET /api/availability/dates?month=X - Fetch available dates
  - GET /api/availability/slots?date=X - Fetch time slots for date
  - POST /api/bookings/reserve - Reserve a time slot temporarily
  - POST /api/bookings/create - Create booking record
  - GET /api/bookings/:id - Fetch booking details
- **Schedule Management**
  - Store doctor's working hours
  - Store days off/holidays
  - Store blocked time slots
  - Calculate appointment duration
  - Add buffer time between appointments

---

## **3. PAYMENT SYSTEM**

### Frontend
- **Payment Page**
  - Booking summary display
  - Amount to pay clearly shown (SAR)
  - Payment gateway selection (Paymob or Stripe)
  - For Paymob: Redirect to hosted payment page / iframe
  - For Stripe: Stripe Elements card input
  - Secure payment badge/trust indicators
  - "Pay Now" button
  - Loading/processing indicator
- **Payment Confirmation**
  - Success message display
  - Transaction ID display
  - Booking confirmation details
  - Download receipt button
  - "View My Appointments" link
- **Payment Failure Handling**
  - Error message display
  - Retry payment button
  - Contact support link

### Backend
- **Payment Gateway Integration**
  - Initialize payment with Paymob (primary) or Stripe (secondary)
  - Generate payment intent/session
  - Process payment through gateway
  - Handle payment callbacks/webhooks
  - Verify payment status
  - Support SAR currency
- **Transaction Management**
  - Create transaction record
  - Store payment details (amount, method, status, transaction_id)
  - Link transaction to booking
  - Update booking status to "confirmed" on successful payment
  - Handle refunds if needed
- **Receipt Generation**
  - Generate payment receipt (Phase 2: PDF)
  - Include booking details, payment info, invoice number
  - Send receipt details to patient email
- **Database**
  - Transactions table (id, booking_id, amount, payment_method, status, transaction_id, gateway_response, created_at)
  - Payment methods table
- **API Endpoints**
  - POST /api/payments/initialize - Initialize payment
  - POST /api/payments/process - Process payment
  - POST /api/payments/webhook - Handle gateway webhooks
  - GET /api/payments/:id/receipt - Download receipt
  - POST /api/payments/:id/refund - Process refund
- **Email Notifications**
  - Send payment confirmation email
  - Send booking confirmation email
  - Attach receipt PDF to email

---

## **4. OUT OF SCOPE FEATURES**

The following features are explicitly out of scope per the BRD and should NOT be implemented:

- **Online Consultations (Telemedicine):** Video calls, waiting rooms, recording, screen sharing
- **Doctor Dashboard:** Separate doctor login, clinical notes, diagnosis management, prescription writer, medical report writer, patient messaging
- **Prescriptions & Reports:** PDF prescription generation, medical report generation, document processing
- **Medical History Management:** Patient medical files, lab reports, scans, medical history CRUD by doctor
- **Messaging System:** Patient-doctor communication, message threads, inbox
- **Admin Dashboard:** Patient management, user management, detailed analytics/reports, audit logs
- **Multi-doctor/Multi-practice Support**
- **EHR/EMR Integration, Insurance, Pharmacy**

---

## **5. CMS PANEL**

### Frontend
- **Login Page**
  - Email input
  - Password input
  - "CMS Login" button
  - Error message display
- **Dashboard Home**
  - Statistics cards
    - Today's bookings
    - This month's revenue (SAR)
    - Pending testimonials
    - Total active services
  - Quick actions buttons
  - Recent activity feed (new bookings, cancellations, contact form submissions)
  - Upcoming appointments list
- **Bookings Overview**
  - **Bookings List**
    - Table with all bookings
    - Filters (by date, status, payment status, patient)
    - Search functionality
    - Pagination
  - **Booking Details**
    - Patient info
    - Service, date, time
    - Payment status and amount
    - Actions: Complete, Cancel
  - **Create Booking (Walk-in)**
    - Enter patient name/phone
    - Select service
    - Select date and time
    - Save button
- **Schedule Management**
  - **Working Hours Setup**
    - Set hours for each day of week
    - Toggle days on/off
    - Set break times
    - Save schedule button
  - **Days Off Management**
    - Calendar to select days off
    - Add holidays
    - Block specific dates with reason
    - List of blocked dates with delete option
  - **Time Slot Configuration**
    - Set appointment duration
    - Set buffer time between appointments
- **Services Management**
  - **Services List**
    - Table of all services
    - Add new service button
    - Edit/Delete actions
  - **Add/Edit Service Form**
    - Service name
    - Description
    - Specialty selection
    - Price (SAR)
    - Duration
    - Is Active toggle
    - Save button
  - **Specialty Management**
    - Add/edit/delete specialties
- **Content Pages Management**
  - **Content Pages List**
    - Table of pages (home, about, contact, privacy, terms)
    - Published/Draft status badge
    - Last updated date
    - Edit button
  - **Content Page Editor**
    - Title field
    - Content editor (JSON/rich text)
    - SEO title, SEO description
    - Is Published toggle
    - Save button
- **Doctor Profile Editor**
  - Name, title, bio
  - Qualifications, experience years, consultation fee
  - Languages, awards, social links
  - Profile picture upload
- **Clinic Information Editor**
  - Clinic name, address, phone, email
  - Google Maps URL
  - Working hours
- **Testimonials Management**
  - List of all testimonials
  - Filter by approved/pending, featured
  - Approve/Feature toggle buttons
  - Add testimonial manually
  - Edit/Delete testimonials
- **FAQ Management**
  - List of all FAQs
  - Filter by category
  - Add/Edit/Delete FAQs
  - Reorder functionality
- **Payment Gateway Configuration**
  - Active gateway selector
  - Paymob settings (API key, integration IDs, HMAC secret - masked)
  - Stripe settings (publishable key, secret key - masked)
  - Test connection button

### Backend
- **Authentication & Authorization**
  - CMS staff login with email/password
  - Generate JWT token
  - Verify CMS_STAFF role on protected routes
  - Session management
- **Bookings Management**
  - Fetch all bookings with filters
  - Create bookings manually (walk-in)
  - Update booking status
  - Cancel bookings
- **Schedule Management**
  - Store and update doctor schedule
  - Store blocked dates/times
  - Calculate available slots based on schedule
  - Validate schedule conflicts
- **Services Management**
  - CRUD operations for services
  - CRUD operations for specialties
- **Content Management**
  - CRUD operations for content pages
  - Doctor profile management
  - Clinic information management
- **Testimonials Management**
  - CRUD operations for testimonials
  - Approve/feature functionality
- **FAQ Management**
  - CRUD operations for FAQs
  - Reorder functionality
- **Payment Configuration**
  - Store/update payment gateway credentials (encrypted)
  - Test gateway connectivity
- **API Endpoints**
  - POST /api/cms/login
  - GET /api/cms/dashboard
  - GET /api/cms/bookings
  - GET /api/cms/bookings/:id
  - POST /api/cms/bookings
  - PATCH /api/cms/bookings/:id/status
  - PATCH /api/cms/bookings/:id/cancel
  - GET /api/cms/schedule
  - POST /api/cms/schedule
  - PATCH /api/cms/schedule/:id
  - DELETE /api/cms/schedule/:id
  - GET /api/cms/blocked-dates
  - POST /api/cms/blocked-dates
  - DELETE /api/cms/blocked-dates/:id
  - GET /api/cms/services
  - POST /api/cms/services
  - PATCH /api/cms/services/:id
  - DELETE /api/cms/services/:id
  - GET /api/cms/specialties
  - POST /api/cms/specialties
  - PATCH /api/cms/specialties/:id
  - DELETE /api/cms/specialties/:id
  - GET /api/cms/content
  - GET /api/cms/content/:pageKey
  - PATCH /api/cms/content/:pageKey
  - GET /api/cms/doctor-profile
  - PATCH /api/cms/doctor-profile
  - POST /api/cms/doctor-profile/picture
  - GET /api/cms/clinic
  - PATCH /api/cms/clinic
  - GET /api/cms/testimonials
  - POST /api/cms/testimonials
  - PATCH /api/cms/testimonials/:id
  - PATCH /api/cms/testimonials/:id/approve
  - PATCH /api/cms/testimonials/:id/feature
  - DELETE /api/cms/testimonials/:id
  - GET /api/cms/faqs
  - POST /api/cms/faqs
  - PATCH /api/cms/faqs/:id
  - PATCH /api/cms/faqs/reorder
  - DELETE /api/cms/faqs/:id
  - GET /api/cms/payment-config
  - PATCH /api/cms/payment-config
  - POST /api/cms/payment-config/test

---

> **Note:** Doctor Dashboard is **out of scope** for this project. Dr. Mohamed Mamdoh manages appointments, patients, and clinical workflows through the CMS Panel (Section 5). See Section 4 for a complete list of out-of-scope features.

---

## **7. PATIENT DASHBOARD**

### Frontend
- **Login/Registration**
  - **Login Form**
    - Email input
    - Password input
    - Login button
    - Forgot password link
    - "Register" link
  - **Registration Form**
    - Full name
    - Email
    - Phone number
    - Password
    - Confirm password
    - Date of birth
    - Gender
    - Terms acceptance checkbox
    - Register button
    - Form validation
  - **Email Verification**
    - OTP code input (6-digit)
    - Resend OTP button
    - Auto-redirect on success
  - **Forgot Password**
    - Email input → sends OTP
    - OTP verification step
    - New password + confirm password
- **Dashboard Home**
  - Welcome message with patient name
  - Upcoming appointment card
  - Quick action buttons
    - Book Appointment
    - My Appointments
  - Recent activity feed
- **My Appointments**
  - **Upcoming Appointments**
    - List/card view of future appointments
    - Date, time, service display
    - Status badge
    - Actions: Cancel, Reschedule, View Details
  - **Past Appointments**
    - History of completed appointments
    - Date and service
    - Payment receipt download
  - **Appointment Details View**
    - Full appointment information
    - Payment receipt download
    - Clinic directions link
- **Book New Appointment**
  - Same booking flow as public booking page
  - Pre-filled patient information
  - Payment integration
- **Profile Settings**
  - **Personal Information**
    - View/edit contact details
    - Update phone, email
  - **Change Password**
    - Current password
    - New password
    - Confirm password
  - **Notification Preferences**
    - Email notifications toggle
    - SMS notifications toggle

### Backend
- **Authentication**
  - Patient registration
  - Email verification via OTP
  - Login authentication
  - JWT token generation (access: 1hr, refresh: 7 days)
  - Password hashing (bcrypt)
  - Forgot password flow (OTP-based)
  - Session management
- **Patient Profile Management**
  - Store patient data
  - Update profile information
  - Change password
- **Appointments**
  - Fetch patient's appointments
  - Filter by status (upcoming, past, cancelled)
  - Appointment cancellation logic
  - Reschedule appointment
  - Check cancellation policy
- **Database**
  - Patients table (id, name, email, phone, date_of_birth, gender, password_hash, is_verified, created_at)
  - Patient preferences table (id, patient_id, email_notifications, sms_notifications)
- **API Endpoints**
  - POST /api/patients/register
  - POST /api/patients/verify-email
  - POST /api/patients/login
  - POST /api/patients/forgot-password
  - POST /api/patients/reset-password
  - GET /api/patients/profile
  - PUT /api/patients/profile
  - PUT /api/patients/change-password
  - GET /api/patients/appointments
  - GET /api/patients/appointments/:id
  - DELETE /api/patients/appointments/:id/cancel
  - PUT /api/patients/appointments/:id/reschedule
  - GET /api/patients/appointments/:id/receipt

---

## **8. NOTIFICATIONS & COMMUNICATION**

### Frontend
- **Email Display** (Patient receives)
  - Branded email template
  - Clear subject lines
  - Appointment details
  - Action buttons (View, Cancel, etc.)
  - Contact information footer

### Backend
- **Email Service Integration**
  - Nodemailer with SMTP configuration (SendGrid, Mailgun, or AWS SES)
  - Email template engine
  - HTML email rendering
- **SMS Service Integration**
  - Twilio SMS API integration
  - SMS template system
  - Send appointment reminders
  - Send OTP verification codes
  - Send password reset OTPs
- **Email Types & Triggers**
  - **OTP Verification**
    - Trigger: New registration or email verification
    - Content: 6-digit OTP code with expiration time
  - **Password Reset OTP**
    - Trigger: User requests password reset
    - Content: 6-digit OTP code with expiration time
  - **Booking Confirmation**
    - Trigger: After successful payment
    - Content: Appointment details, date, time, clinic address
  - **Payment Receipt**
    - Trigger: After payment processed
    - Content: Transaction details, amount (SAR)
  - **Appointment Reminder**
    - Trigger: 24 hours before appointment
    - Content: Reminder with appointment details, directions
  - **Cancellation Confirmation**
    - Trigger: When appointment cancelled
    - Content: Cancellation details, refund information
- **SMS Types & Triggers**
  - OTP codes (registration & password reset)
  - Appointment confirmation
  - Appointment reminder (24 hours before)
  - Cancellation confirmation
- **Notification Scheduling**
  - Cron jobs or task scheduler for reminders
  - Queue system for emails/SMS
  - Retry logic for failed deliveries
- **Database**
  - Email logs table (id, recipient, subject, type, status, sent_at, error_message)
  - SMS logs table (id, recipient_phone, type, status, sent_at, error_message)

---

## **9. SECURITY & DATA PROTECTION**

### Frontend
- **HTTPS Enforcement**
  - All pages served over HTTPS
  - SSL certificate installed
  - HTTP to HTTPS redirect
- **Secure Forms**
  - Input validation on client side (Zod schemas)
  - Password strength indicators
  - CSRF token inclusion
  - Secure cookie flags
- **Session Management**
  - Auto-logout after inactivity
  - Logout functionality
  - Token refresh handling
- **Password Requirements Display**
  - Minimum length
  - Character requirements
  - Strength meter

### Backend
- **Authentication Security**
  - Password hashing (bcrypt with salt)
  - JWT token generation and validation
  - Access token expiration (1 hour)
  - Refresh token system (7 days)
  - Rate limiting on login attempts
  - Account lockout after failed attempts
- **Authorization**
  - Role-based access control (PATIENT, CMS_STAFF)
  - Permission checking middleware
  - Route protection
  - Data access restrictions (patients see only their data)
- **Data Encryption**
  - SSL/TLS for data in transit
  - Sensitive field encryption (payment gateway credentials)
- **Input Validation & Sanitization**
  - Server-side validation for all inputs (Zod)
  - SQL injection prevention (Prisma parameterized queries)
  - XSS prevention (sanitize HTML)
  - CSRF token validation
  - File upload validation (type, size)
- **API Security**
  - JWT authentication on all protected routes
  - Rate limiting per IP/user
  - CORS configuration
  - Request size limits
- **Database Security**
  - Encrypted connections
  - Principle of least privilege for DB users
  - No sensitive data in logs
  - Parameterized queries via Prisma ORM
- **Backup & Recovery**
  - Automated daily backups
  - Encrypted backup storage
  - Backup retention policy
- **Monitoring & Logging**
  - Error logging and monitoring
  - Failed login attempt tracking
  - Log retention and rotation
- **Database Tables for Security**
  - Login attempts table (id, email, ip_address, success, timestamp)
  - Sessions table (id, user_id, token, expires_at, ip_address)
- **API Endpoints**
  - POST /api/auth/login
  - POST /api/auth/logout
  - POST /api/auth/refresh-token
  - POST /api/auth/forgot-password
  - POST /api/auth/reset-password
  - POST /api/auth/verify-otp

---

**Document Status:** Technical Specification  
**Last Updated:** March 26, 2026  
**Prepared For:** Dr. Mohamed Mamdoh Website & CMS
