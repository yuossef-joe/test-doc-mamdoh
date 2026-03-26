# Frontend Development Tasks - Main Website + Patient Dashboard

**Developer:** Frontend Junior Developer  
**Project Duration:** 3 weeks (TIGHT DEADLINE - Focus on essentials)  
**Technology Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Radix UI + Zod + React Hook Form  
**Last Updated:** March 26, 2026

**This project includes:**

1. Public Website (Home, Services, About, Contact)
2. Booking System
3. Payment Integration (Paymob primary, Stripe secondary)
4. Patient Dashboard (Login, Appointments, Profile)

**Out of Scope** (per BRD — do NOT implement):

- Doctor dashboard / clinical portal
- Prescriptions, clinical notes, medical reports
- Patient messaging / communication with doctor
- Medical history management & medical files
- Video consultations / telemedicine
- Admin dashboard (separate CMS project)

---

## **PHASE 1: PROJECT SETUP** (Day 1)

### Task 1.1: Initialize Next.js Project

- [ ] Create new Next.js app: `npx create-next-app@latest dr-mohamed-mamdoh-website`
- [ ] Choose options: TypeScript (Yes), ESLint (Yes), Tailwind CSS (Yes), App Router (Yes)
- [ ] Navigate to project folder: `cd dr-mohamed-mamdoh-website`
- [ ] Start development server: `npm run dev`
- [ ] Verify app runs on localhost:3000

### Task 1.2: Install Essential Dependencies

```bash
npm install @radix-ui/themes @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-toast
npm install zod react-hook-form @hookform/resolvers   # Form validation
npm install react-icons                                # Icons
npm install react-toastify                             # Toast notifications
```

### Task 1.3: Project Structure Setup

Next.js App Router structure:

```
app/
├── page.tsx              # Home page
├── services/
│   └── page.tsx         # Services page
├── about/
│   └── page.tsx         # About page
├── contact/
│   └── page.tsx         # Contact page
├── booking/
│   └── page.tsx         # Booking page
├── login/
│   └── page.tsx         # Patient Login
├── register/
│   └── page.tsx         # Patient Registration
├── patient/             # Patient Dashboard (Protected)
│   ├── layout.tsx       # Patient dashboard layout
│   ├── page.tsx         # Dashboard home
│   ├── appointments/
│   │   └── page.tsx
│   ├── book/
│   │   └── page.tsx
│   └── profile/
│       └── page.tsx
├── layout.tsx           # Root layout
└── globals.css

components/
├── common/              # Reusable components
├── home/               # Home sections
├── services/           # Services components
├── about/              # About components
├── contact/            # Contact components
├── booking/            # Booking flow components
└── patient/            # Patient dashboard components

lib/
├── api.ts              # API calls
├── auth.ts             # Authentication helpers
└── utils.ts            # Helper functions

context/
└── AuthContext.tsx     # Patient authentication

public/
└── images/             # Static images
```

### Task 1.4: Configure Next.js Routing

- [ ] Next.js uses file-based routing (already set up)
- [ ] Create page files:
  - `app/page.tsx` - Home Page (already exists)
  - `app/services/page.tsx` - Services Page
  - `app/about/page.tsx` - About Page
  - `app/contact/page.tsx` - Contact Page
  - `app/booking/page.tsx` - Booking Page
- [ ] Use Link component from 'next/link' for navigation
- [ ] Test navigation between pages

### Task 1.5: Setup API Service

- [ ] Create `lib/api.ts` file
- [ ] Use Next.js native fetch or axios
- [ ] Create helper functions for API calls

```typescript
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const fetchHomeContent = async () => {
  const res = await fetch(`${API_BASE_URL}/home-content`);
  return res.json();
};

export const fetchServices = async () => {
  const res = await fetch(`${API_BASE_URL}/services`, { cache: "no-store" });
  return res.json();
};
// Add more as needed
```

---

## **PHASE 2: LAYOUT & COMMON COMPONENTS** (Week 1)

### Task 2.1: Create Header Component

**File:** `components/common/Header.js`

- [ ] Doctor's logo or name
- [ ] Navigation menu (Home, Services, About, Contact)
- [ ] "Book Appointment" button (prominent, different color)
- [ ] Mobile responsive hamburger menu
- [ ] Sticky header on scroll
- [ ] Active link highlighting

**Styling Tips:**

- Use flexbox for layout
- Add smooth transitions
- Make it responsive (mobile menu at <768px)

### Task 2.2: Create Footer Component

**File:** `components/common/Footer.js`

- [ ] Contact information (phone, email, address)
- [ ] Quick links (Services, About, Privacy Policy)
- [ ] Social media icons with links
- [ ] Copyright notice
- [ ] Working hours display
- [ ] Responsive layout (stack on mobile)

### Task 2.3: Create Loading Component

**File:** `components/common/Loading.js`

- [ ] Spinner animation
- [ ] Use when fetching data from API
- [ ] Center on screen

### Task 2.4: Create Button Component

**File:** `components/common/Button.js`

- [ ] Reusable button with props (text, onClick, variant)
- [ ] Different variants (primary, secondary, outline)
- [ ] Hover effects
- [ ] Disabled state

### Task 2.5: Create Card Component

**File:** `components/common/Card.js`

- [ ] Reusable card for services, testimonials
- [ ] Props: image, title, description, action
- [ ] Shadow on hover
- [ ] Responsive design

---

## **PHASE 3: HOME PAGE** (Week 2)

### Task 3.1: Hero Section Component

**File:** `components/home/HeroSection.js`

- [ ] Large banner image (doctor's photo or clinic)
- [ ] Headline text overlay
- [ ] Subheading/tagline
- [ ] "Book Appointment" CTA button (links to /booking)
- [ ] Gradient overlay on image for text readability
- [ ] Full viewport height
- [ ] Responsive for mobile/tablet

**API Integration:**

- [ ] Fetch hero content from `GET /api/home-content`
- [ ] Display dynamic title, subtitle, image URL

### Task 3.2: About Section Component

**File:** `components/home/AboutSection.js`

- [ ] Small profile photo (circular)
- [ ] Brief bio text (2-3 paragraphs)
- [ ] "Read More" button linking to `/about`
- [ ] Two-column layout (image + text)
- [ ] Stack on mobile

**API Integration:**

- [ ] Fetch from `GET /api/home-content`
- [ ] Display bio text

### Task 3.3: Services Overview Component

**File:** `components/home/ServicesOverview.js`

- [ ] Grid layout (3-4 columns on desktop, 1-2 on mobile)
- [ ] Service cards with:
  - Icon/image
  - Service title
  - Short description
- [ ] "View All Services" button linking to `/services`
- [ ] Hover effects on cards

**API Integration:**

- [ ] Fetch services from `GET /api/services`
- [ ] Display first 6 services only

### Task 3.4: Testimonials Section Component

**File:** `components/home/TestimonialsSection.js`

- [ ] Testimonial cards with:
  - Patient name
  - Review text
  - Star rating (5-star display)
  - Date
- [ ] Carousel/slider functionality (optional: use library like `react-slick`)
- [ ] Auto-play option
- [ ] Navigation arrows

**API Integration:**

- [ ] Fetch from `GET /api/testimonials`
- [ ] Display reviews dynamically

### Task 3.5: Contact Section Component

**File:** `components/home/ContactSection.js`

- [ ] Clinic address with map icon
- [ ] Phone number (clickable tel: link)
- [ ] Email (clickable mailto: link)
- [ ] Working hours
- [ ] Embedded Google Maps iframe
- [ ] Social media icon links (Facebook, Instagram, LinkedIn)
- [ ] Two-column layout (info + map)

**API Integration:**

- [ ] Fetch from `GET /api/contact-info`

**Google Maps Embed:**

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  frameborder="0"
  allowfullscreen></iframe>
```

### Task 3.6: Assemble Home Page

**File:** `pages/HomePage.js`

- [ ] Import all sections
- [ ] Arrange in order: Hero → About → Services → Testimonials → Contact
- [ ] Add smooth scroll between sections
- [ ] Test all API calls
- [ ] Add loading states
- [ ] Handle errors gracefully

---

## **PHASE 4: SERVICES PAGE** (Week 3)

### Task 4.1: Services List Component

**File:** `components/services/ServicesList.js`

- [ ] Grid layout for service cards
- [ ] Each card shows:
  - Service image/icon
  - Service name
  - Short description
  - Price (if available)
  - "Learn More" button
- [ ] Responsive grid (4 columns → 2 → 1)

**API Integration:**

- [ ] Fetch from `GET /api/services`
- [ ] Display all services
- [ ] Handle loading and errors

### Task 4.2: Filter System Component

**File:** `components/services/FilterBar.js`

- [ ] Specialty dropdown
- [ ] Sub-specialty dropdown (appears after specialty selected)
- [ ] Search input field
- [ ] "Clear Filters" button
- [ ] Update services list based on filters

**API Integration:**

- [ ] Fetch specialties: `GET /api/specialties`
- [ ] Fetch sub-specialties: `GET /api/subspecialties`
- [ ] Filter services: `GET /api/services/filter?specialty=X`

**Functionality:**

- [ ] Filter services locally after fetching
- [ ] OR make API call with filter params
- [ ] Show "No services found" if empty

### Task 4.3: Service Detail Modal/Page

**File:** `components/services/ServiceDetail.js`

- [ ] Full service description
- [ ] Duration and pricing display
- [ ] "Book This Service" button
- [ ] Open in modal OR separate page
- [ ] Close button (if modal)

**API Integration:**

- [ ] Fetch single service: `GET /api/services/:id`

### Task 4.4: Assemble Services Page

**File:** `pages/ServicesPage.js`

- [ ] Add page header with title
- [ ] Add FilterBar at top
- [ ] Add ServicesList below
- [ ] Implement filter logic
- [ ] Handle service card click → show detail
- [ ] Test all functionality

---

## **PHASE 5: ABOUT PAGE** (Week 3)

### Task 5.1: Doctor Profile Component

**File:** `components/about/DoctorProfile.js`

- [ ] Large professional photo
- [ ] Full name and title
- [ ] Specialization/specialty display
- [ ] Attractive layout (photo + info side by side)

### Task 5.2: Biography Component

**File:** `components/about/Biography.js`

- [ ] Complete bio text with formatting
- [ ] Section headings (Education, Experience, etc.)
- [ ] Use proper typography (line height, spacing)

### Task 5.3: Qualifications Component

**File:** `components/about/Qualifications.js`

- [ ] List of degrees and certifications
- [ ] Institution names and years
- [ ] Optional: Timeline visualization
- [ ] Icons for each qualification

### Task 5.4: Experience Component

**File:** `components/about/Experience.js`

- [ ] Work history list
- [ ] Hospital/clinic names
- [ ] Years of experience
- [ ] Positions held
- [ ] Timeline or list format

### Task 5.5: Achievements Component

**File:** `components/about/Achievements.js`

- [ ] Awards and recognition
- [ ] Publications
- [ ] Special certifications
- [ ] Professional memberships
- [ ] Grid or card layout

### Task 5.6: Assemble About Page

**File:** `pages/AboutPage.js`

- [ ] Import all components
- [ ] Arrange sections: Profile → Bio → Qualifications → Experience → Achievements
- [ ] Add section dividers
- [ ] Professional styling

**API Integration:**

- [ ] Fetch from `GET /api/doctor-profile`
- [ ] Display all profile data
- [ ] Add loading state

---

## **PHASE 6: CONTACT PAGE** (Week 4)

### Task 6.1: Contact Form Component

**File:** `components/contact/ContactForm.js`

- [ ] Input fields:
  - Name (required)
  - Email (required, validate format)
  - Phone number (required)
  - Subject/Topic (dropdown)
  - Message (textarea, required)
- [ ] Submit button
- [ ] Form validation before submit
- [ ] Loading state during submission
- [ ] Success message after submit
- [ ] Error handling

**Form Validation:**

```javascript
const validate = () => {
  if (!name) return "Name is required";
  if (!email || !/\S+@\S+\.\S+/.test(email)) return "Valid email required";
  if (!message) return "Message is required";
  return null;
};
```

**API Integration:**

- [ ] Submit to `POST /api/contact`
- [ ] Send: { name, email, phone, subject, message }
- [ ] Show success toast notification
- [ ] Clear form after success

### Task 6.2: Contact Information Component

**File:** `components/contact/ContactInfo.js`

- [ ] Clinic address with icon
- [ ] Phone number(s) - clickable
- [ ] Email address - clickable
- [ ] Working hours breakdown by day
- [ ] Card-style layout
- [ ] Icons for each info type

### Task 6.3: Map Component

**File:** `components/contact/Map.js`

- [ ] Embedded Google Maps
- [ ] Location marker
- [ ] "Get Directions" link
- [ ] Responsive height

### Task 6.4: Social Media Links Component

**File:** `components/contact/SocialLinks.js`

- [ ] Facebook icon + link
- [ ] Instagram icon + link
- [ ] LinkedIn icon + link
- [ ] Twitter/X icon + link (optional)
- [ ] Hover effects
- [ ] Open in new tab

### Task 6.5: Assemble Contact Page

**File:** `pages/ContactPage.js`

- [ ] Two-column layout:
  - Left: Contact form
  - Right: Contact info + social links
- [ ] Map section below (full width)
- [ ] Stack columns on mobile
- [ ] Test form submission
- [ ] Test all links

---

## **PHASE 7: BOOKING SYSTEM** (Week 5-6)

### Task 7.1: Booking Wizard Container

**File:** `pages/BookingPage.js`

- [ ] Multi-step wizard component
- [ ] Progress indicator showing steps 1-5
- [ ] Current step highlighted
- [ ] "Back" and "Next" buttons
- [ ] Store booking data in state

### Task 7.2: Step 1 - Service Selection

**File:** `components/booking/Step1ServiceSelection.js`

- [ ] Specialty dropdown
- [ ] Sub-specialty dropdown (conditional)
- [ ] Service selection (radio buttons or cards)
- [ ] Display selected service price
- [ ] "Next" button (enabled when service selected)

**API Integration:**

- [ ] Fetch specialties: `GET /api/specialties`
- [ ] Fetch services: `GET /api/services?specialty=X`
- [ ] Store selected service in parent state

### Task 7.3: Step 2 - Date Selection

**File:** `components/booking/Step2DateSelection.js`

- [ ] Calendar widget (use library like `react-calendar`)
- [ ] Highlight available dates
- [ ] Disable unavailable/past dates
- [ ] Month/year navigation
- [ ] Visual indicator for selected date

**API Integration:**

- [ ] Fetch available dates: `GET /api/availability/dates?month=X`
- [ ] Only enable dates returned by API

### Task 7.4: Step 3 - Time Slot Selection

**File:** `components/booking/Step3TimeSelection.js`

- [ ] Display available time slots as buttons
- [ ] Show booked slots as disabled
- [ ] Highlight selected slot
- [ ] Grid layout for slots
- [ ] Display timezone

**API Integration:**

- [ ] Fetch slots: `GET /api/availability/slots?date=YYYY-MM-DD`
- [ ] Mark booked slots as disabled

### Task 7.5: Step 4 - Patient Information

**File:** `components/booking/Step4PatientInfo.js`

- [ ] Check if user logged in
- [ ] If not logged in:
  - Show login form OR
  - Show registration form with fields:
    - Full name
    - Email
    - Phone
    - Date of birth
    - Gender
    - Password
    - Confirm password
  - Toggle between login/register
- [ ] If logged in, auto-fill information
- [ ] "Continue as Guest" option (optional)

**Note:** Full login/registration will be built in Patient Dashboard phase, but add basic version here

### Task 7.7: Step 5 - Review & Confirm

**File:** `components/booking/Step5Review.js`

- [ ] Display booking summary:
  - Service name
  - Date and time
  - Price breakdown
- [ ] Edit buttons for each section (go back to that step)
- [ ] Terms and conditions checkbox
- [ ] "Proceed to Payment" button

**API Integration:**

- [ ] Reserve slot: `POST /api/bookings/reserve`
- [ ] Create booking: `POST /api/bookings/create`
- [ ] Redirect to payment page after booking created

### Task 7.8: Progress Indicator Component

**File:** `components/booking/ProgressIndicator.js`

- [ ] Show steps 1-5
- [ ] Highlight current step
- [ ] Mark completed steps with checkmark
- [ ] Click to go back to previous steps
- [ ] Responsive design

### Task 7.9: Integration & Testing

- [ ] Connect all steps in BookingPage
- [ ] Implement navigation between steps
- [ ] Store all selections in state
- [ ] Validate each step before proceeding
- [ ] Test complete booking flow
- [ ] Handle API errors gracefully
- [ ] Add loading states

---

## **PHASE 8: PATIENT AUTHENTICATION** (Day 12-13)

### Task 8.1: Setup Authentication Context

**File:** `context/AuthContext.tsx`

- [ ] Create authentication context
- [ ] Store patient token in localStorage
- [ ] Provide login/logout/register functions
- [ ] Auto-load user on app start

```typescript
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('patientToken');
    const userData = localStorage.getItem('patientData');
    if (token && userData) {
      setPatient(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await fetch('/api/patient/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('patientToken', data.token);
      localStorage.setItem('patientData', JSON.stringify(data.patient));
      setPatient(data.patient);
    }
  };

  const logout = () => {
    localStorage.removeItem('patientToken');
    localStorage.removeItem('patientData');
    setPatient(null);
  };

  return (
    <AuthContext.Provider value={{ patient, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

### Task 8.2: Patient Login Page

**File:** `app/login/page.tsx`

- [ ] Professional medical-themed design
- [ ] "Patient Login" heading
- [ ] Email input field
- [ ] Password input with show/hide toggle
- [ ] "Remember Me" checkbox
- [ ] "Login" button
- [ ] "Forgot Password?" link
- [ ] "Don't have an account? Register" link
- [ ] Form validation
- [ ] Loading state during login
- [ ] Error message display

**API Integration:**

- [ ] POST `/api/patient/login`
- [ ] Store token and patient data
- [ ] Redirect to `/patient` dashboard

### Task 8.3: Patient Registration Page

**File:** `app/register/page.tsx`

- [ ] "Create Patient Account" heading
- [ ] Multi-step form (3 steps):
  - **Step 1: Basic Info**
    - Full Name
    - Email
    - Phone Number
    - Password (with strength indicator)
    - Confirm Password
  - **Step 2: Personal Details**
    - Date of Birth (date picker)
    - Gender (dropdown)
    - Address
  - **Step 3: Emergency Contact**
    - Emergency Contact Name
    - Emergency Contact Phone
    - Terms & Conditions checkbox
- [ ] Progress indicator
- [ ] Form validation per step
- [ ] "Register" button
- [ ] "Already have account? Login" link

**API Integration:**

- [ ] POST `/api/patient/register`
- [ ] Show success message
- [ ] Redirect to email verification or login

### Task 8.3b: Email Verification Page

**File:** `app/verify-email/page.tsx`

- [ ] "Verify Your Email" heading
- [ ] OTP input field (6-digit code)
- [ ] "Verify" button
- [ ] "Resend Code" button with cooldown timer
- [ ] Success message and auto-redirect to login

**API Integration:**

- [ ] POST `/api/auth/verify-otp`
- [ ] POST `/api/auth/resend-otp`

### Task 8.4: Protected Route Middleware

**File:** `middleware.ts`

- [ ] Create Next.js middleware to protect patient routes
- [ ] Check for token in localStorage/cookies
- [ ] Redirect to login if not authenticated

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("patientToken")?.value;

  if (!token && request.nextUrl.pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/patient/:path*",
};
```

### Task 8.5: Forgot Password Flow

**File:** `app/forgot-password/page.tsx`

- [ ] Email input
- [ ] "Send OTP Code" button
- [ ] Success message directing to OTP entry

**File:** `app/reset-password/page.tsx`

- [ ] OTP code input (6-digit)
- [ ] New password input
- [ ] Confirm password input
- [ ] "Reset Password" button

**API Integration:**

- [ ] POST `/api/auth/forgot-password` (sends OTP to email)
- [ ] POST `/api/auth/reset-password` (with OTP + new password)

---

## **PHASE 9: PATIENT DASHBOARD** (Days 14-16)

### Task 9.1: Patient Dashboard Layout

**File:** `app/patient/layout.tsx`

- [ ] Top navigation header:
  - Logo (links to home)
  - Menu items: Dashboard, Appointments, Book Appointment
  - User dropdown (Profile, Settings, Logout)
- [ ] Mobile responsive hamburger menu
- [ ] Breadcrumbs
- [ ] Protected layout (requires authentication)

### Task 9.2: Patient Dashboard Home

**File:** `app/patient/page.tsx`

- [ ] Welcome message with patient name
- [ ] **Upcoming Appointment Card**:
  - Service name, Date, Time
  - Clinic address
  - "View Details" button
  - "Cancel" / "Reschedule" buttons
- [ ] **Quick Actions Grid**:
  - Book New Appointment
  - View All Appointments
  - Edit Profile
- [ ] **Recent Appointments List**:
  - Last 3-5 completed appointments
  - Date, service name, status

**API Integration:**

- [ ] GET `/api/patients/dashboard`
- [ ] GET `/api/patients/profile`

### Task 9.3: My Appointments Page

**File:** `app/patient/appointments/page.tsx`

- [ ] Tabs: "Upcoming" and "Past"
- [ ] **Upcoming Appointments**:
  - Card view for each appointment
  - Show: Date, Time, Service, Status
  - Actions: View Details, Cancel, Reschedule
- [ ] **Past Appointments**:
  - Same card layout
  - Status: Completed, Cancelled
  - "View Details" button

**API Integration:**

- [ ] GET `/api/patients/appointments?status=upcoming`
- [ ] GET `/api/patients/appointments?status=past`
- [ ] POST `/api/patients/appointments/:id/cancel`
- [ ] POST `/api/patients/appointments/:id/reschedule`

### Task 9.4: Appointment Detail Modal

**File:** `components/patient/AppointmentDetail.tsx`

- [ ] Full appointment information
- [ ] Service details
- [ ] Payment status and amount
- [ ] Clinic address with Google Maps directions link
- [ ] Cancel/Reschedule options (if upcoming)

### Task 9.5: Book New Appointment (from Dashboard)

**File:** `app/patient/book/page.tsx`

- [ ] Reuse booking flow components
- [ ] Pre-fill patient information
- [ ] Simplified flow (already logged in)

### Task 9.6: Profile Settings Page

**File:** `app/patient/profile/page.tsx`

- [ ] Tabs: Personal Info, Security, Notifications
- [ ] **Personal Info**: Edit name, phone, DOB, gender, address, emergency contact
- [ ] **Security**: Change password form (current password + new password + confirm)
- [ ] **Notifications**: Toggle email/SMS notification preferences

**API Integration:**

- [ ] GET `/api/patients/profile`
- [ ] PATCH `/api/patients/profile`
- [ ] POST `/api/patients/change-password`
- [ ] PATCH `/api/patients/notification-preferences`

---

## **PHASE 10: PAYMENT PAGE** (Day 17)

### Task 8.1: Payment Page Layout

**File:** `pages/PaymentPage.js`

- [ ] Display booking summary (service, date, time, price)
- [ ] Payment method selection
- [ ] Payment form fields
- [ ] "Pay Now" button
- [ ] Secure connection badge

### Task 8.2: Payment Form Component

**File:** `components/payment/PaymentForm.js`

- [ ] Payment gateway selection (Paymob or Stripe)
- [ ] For Paymob: Redirect to Paymob hosted payment page (iframe integration)
- [ ] For Stripe: Stripe Elements card input
- [ ] Loading state during payment processing
- [ ] Handle payment gateway redirect callbacks

**Note:** Paymob uses a hosted payment page (redirect/iframe), not direct card input. Stripe uses Stripe Elements.

### Task 8.3: Payment Integration

**API Integration:**

- [ ] Initialize payment: `POST /api/payments/initialize`
- [ ] Get payment URL/client secret from backend
- [ ] For Paymob: Redirect to Paymob iframe URL
- [ ] For Stripe: Use Stripe Elements for card input
- [ ] Handle payment callback/webhook redirect
- [ ] Process result: `GET /api/payments/:id/status`

**Note:** Work with backend developer for Paymob + Stripe integration. Currency is SAR.

### Task 8.4: Payment Confirmation Page

**File:** `pages/PaymentConfirmation.js`

- [ ] Success message with icon
- [ ] Transaction ID display
- [ ] Booking details summary
- [ ] "Download Receipt" button
- [ ] "View My Appointments" button (if logged in)
- [ ] Confetti animation (optional)

### Task 8.5: Payment Failed Page

**File:** `pages/PaymentFailed.js`

- [ ] Error message display
- [ ] "Retry Payment" button
- [ ] "Contact Support" link
- [ ] Display error reason if available

---

## **PHASE 11: RESPONSIVE DESIGN & POLISH** (Days 18-19)

### Task 9.1: Mobile Responsiveness

- [ ] Test all pages on mobile screen sizes (320px, 375px, 414px)
- [ ] Test on tablet sizes (768px, 1024px)
- [ ] Ensure all components stack properly
- [ ] Test hamburger menu functionality
- [ ] Fix any layout issues
- [ ] Test touch interactions

### Task 9.2: Cross-Browser Testing

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Fix any browser-specific issues

### Task 9.3: Performance Optimization

- [ ] Optimize images (compress, use WebP)
- [ ] Lazy load images below fold
- [ ] Code splitting for large components
- [ ] Minimize bundle size
- [ ] Add loading states everywhere

### Task 9.4: Accessibility

- [ ] Add alt text to all images
- [ ] Ensure proper heading hierarchy (h1, h2, h3)
- [ ] Add ARIA labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader
- [ ] Ensure proper color contrast

### Task 9.5: SEO Optimization

- [ ] Add meta tags (title, description)
- [ ] Add Open Graph tags for social sharing
- [ ] Create sitemap
- [ ] Add robots.txt
- [ ] Use semantic HTML tags

### Task 9.6: Final Polish

- [ ] Consistent spacing throughout
- [ ] Consistent colors (create color variables)
- [ ] Smooth transitions and animations
- [ ] Loading spinners for async operations
- [ ] Error messages styled properly
- [ ] Empty states designed
- [ ] 404 page created

---

## **PHASE 12: TESTING & DEPLOYMENT** (Days 20-21)

### Task 10.1: Testing

- [ ] Test all pages load correctly
- [ ] Test all forms submit correctly
- [ ] Test all links work
- [ ] Test API error handling
- [ ] Test with slow network (throttle in DevTools)
- [ ] Test booking flow end-to-end
- [ ] Test payment flow (test mode)

### Task 10.2: Build for Production

- [ ] Run `npm run build`
- [ ] Test production build locally
- [ ] Check bundle size
- [ ] Ensure no console errors

### Task 10.3: Deployment

- [ ] Choose hosting (Netlify, Vercel, AWS S3)
- [ ] Configure environment variables
- [ ] Deploy to production
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test live site

### Task 10.4: Documentation

- [ ] Create README with setup instructions
- [ ] Document environment variables needed
- [ ] Document build and deployment process
- [ ] Create component documentation

---

## **TECHNICAL STACK SUMMARY**

### Core Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Routing:** Next.js File-based Routing
- **HTTP Client:** Native Fetch API
- **Styling:** Tailwind CSS

### Recommended Packages

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@radix-ui/themes": "^3.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-toast": "^1.0.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "react-icons": "^4.10.0",
    "react-toastify": "^9.1.3",
    "react-calendar": "^4.3.0",
    "swiper": "^11.0.0"
  }
}
```

---

## **DESIGN GUIDELINES**

### Color Scheme

Choose a professional medical color scheme:

- **Primary:** Blue (#2563eb) - trust, medical
- **Secondary:** Teal (#0d9488) - calm, health
- **Accent:** Orange (#f59e0b) - warmth, call-to-action
- **Text:** Dark gray (#1f2937)
- **Background:** White (#ffffff) or light gray (#f9fafb)

### Typography

- **Headings:** Bold, clear (e.g., Inter, Poppins, Montserrat)
- **Body:** Readable (e.g., Roboto, Open Sans)
- **Font Sizes:**
  - h1: 2.5rem (40px)
  - h2: 2rem (32px)
  - h3: 1.5rem (24px)
  - body: 1rem (16px)

### Spacing

- Use consistent spacing: 8px, 16px, 24px, 32px, 48px, 64px
- Generous whitespace for clean look

### Components

- Rounded corners (4-8px border-radius)
- Subtle shadows for cards
- Smooth transitions (0.3s)

---

## **IMPORTANT NOTES**

### Best Practices

1. **Component Reusability** - Create reusable components for buttons, cards, inputs
2. **State Management** - Use React Context or simple props for now (add Redux later if needed)
3. **Error Handling** - Always handle API errors gracefully, show user-friendly messages
4. **Loading States** - Show spinners/skeletons while data loads
5. **Form Validation** - Validate on client before API call
6. **Responsive First** - Design for mobile, then enhance for desktop
7. **Consistent Naming** - Use clear, consistent names for components and files
8. **Comments** - Add comments for complex logic
9. **Code Organization** - Keep files small (<300 lines), split if larger
10. **Git Commits** - Commit often with clear messages

### Common Pitfalls to Avoid

- ❌ Don't fetch data in render - use useEffect
- ❌ Don't ignore loading and error states
- ❌ Don't hardcode API URLs - use environment variables
- ❌ Don't skip mobile testing
- ❌ Don't use inline styles everywhere - use CSS modules/classes
- ❌ Don't forget alt text on images
- ❌ Don't skip form validation
- ❌ Don't expose sensitive data in frontend code
- ❌ Don't create deeply nested components
- ❌ Don't ignore browser console warnings

### Resources

- React Docs: https://react.dev/
- React Router: https://reactrouter.com/
- MDN Web Docs: https://developer.mozilla.org/
- Google Fonts: https://fonts.google.com/
- React Icons: https://react-icons.github.io/react-icons/
- Can I Use: https://caniuse.com/ (browser compatibility)

---

**Good luck! Build it step by step, test frequently, and don't hesitate to ask for help!** 🎨✨
