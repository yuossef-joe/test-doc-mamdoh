# UI/UX Design Requirements

## Prof. Mohamed Mamdouh Saleh — Website & CMS

| Field               | Detail                                                  |
| ------------------- | ------------------------------------------------------- |
| **Date**            | March 26, 2026                                          |
| **Project**         | Dr. Mohamed Mamdoh Website & CMS                        |
| **Specialty**       | Obstetrics & Gynecology (Obs/Gyn)                       |
| **Title**           | Prof. Mohamed Mamdouh Saleh — Obs/Gyn Senior Consultant |
| **Target Audience** | Women (prenatal, pregnancy, postnatal), families        |

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Logo Usage](#4-logo-usage)
5. [Iconography & Imagery](#5-iconography--imagery)
6. [Layout & Grid System](#6-layout--grid-system)
7. [Component Design System](#7-component-design-system)
8. [Public Website Pages](#8-public-website-pages)
9. [Booking Flow UX](#9-booking-flow-ux)
10. [Patient Portal UX](#10-patient-portal-ux)
11. [CMS Panel UX](#11-cms-panel-ux)
12. [Responsive Design](#12-responsive-design)
13. [RTL & Bilingual Support](#13-rtl--bilingual-support)
14. [Accessibility (WCAG 2.1 AA)](#14-accessibility-wcag-21-aa)
15. [Micro-interactions & Animations](#15-micro-interactions--animations)
16. [SEO & Performance UX](#16-seo--performance-ux)
17. [Error States & Empty States](#17-error-states--empty-states)

---

## 1. Brand Identity

### 1.1 Brand Personality

| Attribute       | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| **Tone**        | Warm, caring, professional, trustworthy                                   |
| **Mood**        | Calm, reassuring, welcoming — reflecting maternal care and women's health |
| **Keywords**    | Motherhood, care, expertise, trust, safety, comfort, professionalism      |
| **Positioning** | A leading Obs/Gyn senior consultant with a modern, patient-first approach |

### 1.2 Brand Values Reflected in Design

- **Trust & Expertise** — Clean layouts, professional typography, credentials prominently displayed
- **Warmth & Care** — Soft pinks, rounded corners, welcoming imagery of mothers and babies
- **Modernity** — Sleek UI, smooth transitions, responsive design
- **Clarity** — Intuitive navigation, clear CTAs, no visual clutter

---

## 2. Color System

### 2.1 Primary Palette

| Role          | Color        | Hex       | Usage                                                          |
| ------------- | ------------ | --------- | -------------------------------------------------------------- |
| **Primary**   | Medical Blue | `#2aa8d1` | Headers, primary buttons, links, active states, accents        |
| **Secondary** | Rose Pink    | `#e26197` | Highlights, secondary buttons, tags, feminine/maternal accents |
| **Neutral**   | White        | `#ffffff` | Backgrounds, cards, text on dark surfaces                      |

### 2.2 Extended Palette (Derived)

| Role                | Hex       | Usage                                                               |
| ------------------- | --------- | ------------------------------------------------------------------- |
| **Primary Light**   | `#e8f6fb` | Hover states, info banners, status badges (not section backgrounds) |
| **Primary Dark**    | `#1e8aab` | Hover state on primary buttons, focus rings                         |
| **Secondary Light** | `#fce8f0` | Hover backgrounds, soft highlights, notification badges             |
| **Secondary Dark**  | `#c4507e` | Hover state on secondary buttons                                    |
| **Text Primary**    | `#1a1a2e` | Headings, body text                                                 |
| **Text Secondary**  | `#64748b` | Captions, placeholders, subtle labels                               |
| **Text Muted**      | `#94a3b8` | Disabled text, hints                                                |
| **Background**      | `#f8fafc` | Page backgrounds (public website)                                   |
| **Surface**         | `#ffffff` | Cards, modals, elevated surfaces                                    |
| **Border**          | `#e2e8f0` | Card borders, dividers, input borders                               |
| **Border Focus**    | `#2aa8d1` | Input focus rings                                                   |
| **Success**         | `#10b981` | Success messages, confirmed badges, payment success                 |
| **Warning**         | `#f59e0b` | Warning alerts, pending status badges                               |
| **Error**           | `#ef4444` | Error messages, form errors, cancelled badges                       |
| **Info**            | `#2aa8d1` | Info alerts (same as primary)                                       |

### 2.3 Gradient Definitions

| Name                | Gradient                                            | Usage                                      |
| ------------------- | --------------------------------------------------- | ------------------------------------------ |
| **Hero Gradient**   | `linear-gradient(135deg, #2aa8d1 0%, #e26197 100%)` | Hero section overlay, CTA backgrounds      |
| **Soft Gradient**   | `linear-gradient(135deg, #ffffff 0%, #fce8f0 100%)` | Feature cards background, section dividers |
| **Button Gradient** | `linear-gradient(90deg, #2aa8d1 0%, #1e8aab 100%)`  | Primary button hover effect                |

### 2.4 Color Contrast Requirements

- All text on backgrounds must meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- `#2aa8d1` on `#ffffff` = use for large text, icons, and UI elements only (approx 3.2:1) — for body text, use `#1e8aab` or darker
- `#e26197` on `#ffffff` = use for large text, badges, highlights — not for small body text
- Body text must always use `#1a1a2e` or `#64748b` on white/light backgrounds

### 2.5 Dark Mode (CMS Panel Only — Optional Phase 2)

| Role             | Light Mode | Dark Mode |
| ---------------- | ---------- | --------- |
| **Background**   | `#f8fafc`  | `#0f172a` |
| **Surface**      | `#ffffff`  | `#1e293b` |
| **Text Primary** | `#1a1a2e`  | `#f1f5f9` |
| **Border**       | `#e2e8f0`  | `#334155` |
| **Sidebar**      | `#1e293b`  | `#0f172a` |

---

## 3. Typography

### 3.1 Font Families

| Language      | Font           | Fallback                             | Usage                  |
| ------------- | -------------- | ------------------------------------ | ---------------------- |
| **English**   | Inter          | system-ui, -apple-system, sans-serif | All English text       |
| **Arabic**    | Cairo          | Noto Sans Arabic, sans-serif         | All Arabic text        |
| **Monospace** | JetBrains Mono | Fira Code, monospace                 | Code blocks (CMS only) |

### 3.2 Type Scale

| Token     | Size (px) | Size (rem) | Weight   | Line Height | Usage                                |
| --------- | --------- | ---------- | -------- | ----------- | ------------------------------------ |
| `h1`      | 48        | 3.0        | 700 Bold | 1.2         | Hero headline                        |
| `h2`      | 36        | 2.25       | 700 Bold | 1.25        | Section titles                       |
| `h3`      | 28        | 1.75       | 600 Semi | 1.3         | Card titles, subsection headings     |
| `h4`      | 22        | 1.375      | 600 Semi | 1.35        | Widget titles, feature titles        |
| `h5`      | 18        | 1.125      | 600 Semi | 1.4         | Small headings, labels               |
| `body-lg` | 18        | 1.125      | 400 Reg  | 1.6         | Lead paragraphs, hero description    |
| `body`    | 16        | 1.0        | 400 Reg  | 1.6         | Default body text                    |
| `body-sm` | 14        | 0.875      | 400 Reg  | 1.5         | Captions, table text, secondary info |
| `caption` | 12        | 0.75       | 400 Reg  | 1.4         | Timestamps, meta text, hints         |
| `button`  | 16        | 1.0        | 500 Med  | 1.0         | Button labels                        |
| `label`   | 14        | 0.875      | 500 Med  | 1.0         | Form labels, navigation items        |

### 3.3 Responsive Typography

| Breakpoint | h1   | h2   | h3   | body |
| ---------- | ---- | ---- | ---- | ---- |
| Mobile     | 32px | 26px | 22px | 16px |
| Tablet     | 40px | 30px | 24px | 16px |
| Desktop    | 48px | 36px | 28px | 16px |

---

## 4. Logo Usage

### 4.1 Logo Description

The logo features an elegant white silhouette of a **mother holding her baby** on a black background, representing the Obs/Gyn specialty. Below the illustration:

- **"Prof . Mohamed Mamdouh Saleh"** in a decorative script/cursive font
- **"Obs/Gyn Senior Consultant"** in a clean serif font beneath

### 4.2 Logo Versions Required

| Version             | Background   | Usage                                           |
| ------------------- | ------------ | ----------------------------------------------- |
| **Full Color**      | Black `#000` | Default — hero section, dark overlays           |
| **White**           | Transparent  | On primary blue or gradient backgrounds         |
| **Primary Color**   | Transparent  | On white/light backgrounds — use `#2aa8d1` fill |
| **Monochrome Dark** | Transparent  | On light backgrounds — dark silhouette          |
| **Favicon/Icon**    | —            | Cropped mother-baby silhouette only (no text)   |

### 4.3 Logo Placement Rules

| Element          | Placement                                                 |
| ---------------- | --------------------------------------------------------- |
| **Header**       | Left-aligned (LTR) / Right-aligned (RTL), 40–48px height  |
| **Footer**       | Centered or left-aligned, 60px height, with tagline below |
| **Login Pages**  | Centered above form, 80–100px height                      |
| **Favicon**      | 32x32 icon version (mother-baby silhouette only)          |
| **Email Header** | Centered, max 200px width                                 |

### 4.4 Logo Clear Space

- Minimum clear space around the logo: **1x the height of the "M" in Mohamed**
- Never place text, buttons, or other elements within this space
- Never stretch, rotate, skew, or change logo proportions
- Never change logo colors outside the approved versions

---

## 5. Iconography & Imagery

### 5.1 Icon Style

| Property    | Value                                                                        |
| ----------- | ---------------------------------------------------------------------------- |
| **Library** | React Icons (`react-icons`) — Phosphor or Heroicons set                      |
| **Style**   | Outline (default), Filled (active/selected states)                           |
| **Size**    | 20px (inline), 24px (navigation), 32px (feature cards), 48px (hero features) |
| **Color**   | `#2aa8d1` (primary), `#e26197` (accent), `#64748b` (muted)                   |
| **Stroke**  | 1.5px stroke weight for consistency                                          |

### 5.2 Service Icons (Suggested Mapping)

| Service Category       | Icon Suggestion             |
| ---------------------- | --------------------------- |
| Prenatal Care          | Baby/pregnancy silhouette   |
| Gynecology             | Medical heart / stethoscope |
| Delivery / Labor       | Hospital / birth            |
| High-Risk Pregnancy    | Shield with heart           |
| Fertility Consultation | Flower / growth icon        |
| General Check-up       | Clipboard with checkmark    |
| Ultrasound / Imaging   | Monitor / scan icon         |
| Postpartum Care        | Mother and child            |

### 5.3 Photography Style

| Property          | Guideline                                                          |
| ----------------- | ------------------------------------------------------------------ |
| **Subject**       | Women, mothers, babies, families — always positive, caring moments |
| **Tone**          | Warm, bright, natural lighting — not clinical or cold              |
| **Color Grading** | Warm tones with slight pink/blue cast matching brand palette       |
| **Doctor Photos** | Professional headshot, white coat, warm smile, clean background    |
| **Stock Photos**  | Diverse, inclusive, modern — avoid overly generic medical stock    |
| **Clinic Photos** | Bright, clean, welcoming spaces — not sterile/intimidating         |

### 5.4 Illustration Style (Optional Enhancement)

- Soft line illustrations of pregnancy/motherhood
- Use `#2aa8d1` and `#e26197` as illustration accent colors
- Minimal, modern line art matching the logo aesthetic
- Use for empty states, onboarding, and feature highlights

---

## 6. Layout & Grid System

### 6.1 Grid

| Property      | Value                                 |
| ------------- | ------------------------------------- |
| **System**    | 12-column grid                        |
| **Max Width** | 1280px (public), 100% (CMS)           |
| **Gutter**    | 24px (desktop), 16px (mobile)         |
| **Margin**    | 32px (desktop), 16px (mobile)         |
| **Container** | Centered, max-width with auto margins |

### 6.2 Spacing Scale (8px Base)

| Token | Value | Usage                               |
| ----- | ----- | ----------------------------------- |
| `xs`  | 4px   | Tight spacing (icon-to-text)        |
| `sm`  | 8px   | Internal component spacing          |
| `md`  | 16px  | Component padding, form field gaps  |
| `lg`  | 24px  | Section inner padding, card padding |
| `xl`  | 32px  | Gap between components              |
| `2xl` | 48px  | Gap between page sections           |
| `3xl` | 64px  | Section top/bottom padding          |
| `4xl` | 96px  | Hero section padding                |

### 6.3 Elevation / Shadows

| Level | Shadow                         | Usage                          |
| ----- | ------------------------------ | ------------------------------ |
| `sm`  | `0 1px 2px rgba(0,0,0,0.05)`   | Subtle cards, inputs           |
| `md`  | `0 4px 6px rgba(0,0,0,0.07)`   | Hover cards, dropdowns         |
| `lg`  | `0 10px 15px rgba(0,0,0,0.10)` | Modals, floating elements      |
| `xl`  | `0 20px 25px rgba(0,0,0,0.12)` | Hero cards, important overlays |

### 6.4 Border Radius

| Token  | Value  | Usage                               |
| ------ | ------ | ----------------------------------- |
| `sm`   | 6px    | Small tags, badges                  |
| `md`   | 8px    | Buttons, inputs, cards              |
| `lg`   | 12px   | Feature cards, modals               |
| `xl`   | 16px   | Hero cards, large banners           |
| `full` | 9999px | Avatars, pill badges, round buttons |

---

## 7. Component Design System

### 7.1 Buttons

| Variant       | Background  | Text Color | Border        | Usage                                            |
| ------------- | ----------- | ---------- | ------------- | ------------------------------------------------ |
| **Primary**   | `#2aa8d1`   | `#ffffff`  | none          | Main CTAs: "Book Appointment", "Confirm", "Save" |
| **Secondary** | `#e26197`   | `#ffffff`  | none          | Secondary actions: "View Details", "Learn More"  |
| **Outline**   | transparent | `#2aa8d1`  | 1px `#2aa8d1` | Tertiary actions: "Cancel", "Back", "Edit"       |
| **Ghost**     | transparent | `#2aa8d1`  | none          | Inline actions: "Read More", "View All"          |
| **Danger**    | `#ef4444`   | `#ffffff`  | none          | Destructive: "Delete", "Remove"                  |
| **Disabled**  | `#e2e8f0`   | `#94a3b8`  | none          | Inactive buttons                                 |

**Button Specifications:**

- Height: 44px (default), 36px (small), 52px (large)
- Padding: 16px–24px horizontal
- Border radius: 8px
- Font: 16px / 500 weight
- Hover: darken 10% + subtle shadow
- Active: darken 15%
- Focus: 3px offset ring in `#2aa8d1` at 40% opacity
- Transition: all 150ms ease

### 7.2 Form Inputs

| State        | Border        | Background | Label Color |
| ------------ | ------------- | ---------- | ----------- |
| **Default**  | 1px `#e2e8f0` | `#ffffff`  | `#64748b`   |
| **Focus**    | 2px `#2aa8d1` | `#ffffff`  | `#2aa8d1`   |
| **Error**    | 2px `#ef4444` | `#fef2f2`  | `#ef4444`   |
| **Disabled** | 1px `#e2e8f0` | `#f1f5f9`  | `#94a3b8`   |
| **Filled**   | 1px `#e2e8f0` | `#ffffff`  | `#1a1a2e`   |

**Input Specifications:**

- Height: 44px (default), 36px (small)
- Padding: 12px horizontal
- Border radius: 8px
- Label: float above (animated) or static above
- Error text: 12px, `#ef4444`, below input
- Helper text: 12px, `#94a3b8`, below input
- Transition: border-color 150ms ease

### 7.3 Cards

| Type             | Padding | Shadow | Radius | Usage                    |
| ---------------- | ------- | ------ | ------ | ------------------------ |
| **Service Card** | 24px    | `sm`   | 12px   | Services grid            |
| **Testimonial**  | 24px    | `sm`   | 12px   | Testimonials carousel    |
| **Stat Card**    | 20px    | `sm`   | 12px   | Dashboard statistics     |
| **Appointment**  | 20px    | `sm`   | 12px   | Appointment list items   |
| **Booking Step** | 32px    | `md`   | 16px   | Booking wizard container |

**Card Hover Effect (Interactive cards only):**

- Shadow increases from `sm` to `md`
- Slight translateY(-2px) lift
- Border-bottom: 3px solid `#2aa8d1` or `#e26197`
- Transition: all 200ms ease

### 7.4 Badges & Status Tags

| Status        | Background | Text Color | Border |
| ------------- | ---------- | ---------- | ------ |
| **Confirmed** | `#d1fae5`  | `#065f46`  | none   |
| **Pending**   | `#fef3c7`  | `#92400e`  | none   |
| **Cancelled** | `#fee2e2`  | `#991b1b`  | none   |
| **Completed** | `#e8f6fb`  | `#1e8aab`  | none   |
| **Paid**      | `#d1fae5`  | `#065f46`  | none   |
| **Unpaid**    | `#fee2e2`  | `#991b1b`  | none   |
| **Featured**  | `#fce8f0`  | `#c4507e`  | none   |
| **Draft**     | `#f1f5f9`  | `#64748b`  | none   |

**Badge Specs:** Padding 4px 10px, border-radius 9999px (pill), font 12px / 500 weight.

### 7.5 Navigation

**Public Website Header:**

- Background: `#ffffff` with `sm` shadow on scroll
- Height: 72px (desktop), 64px (mobile)
- Logo: left-aligned, 40px height
- Nav items: `#1a1a2e`, hover `#2aa8d1`, active `#2aa8d1` with bottom border
- "Book Appointment" CTA: Primary button style (always visible)
- Mobile: Hamburger icon → full-screen overlay menu with slide transition

**Patient Dashboard Header:**

- Background: `#ffffff`
- Patient name + avatar dropdown on right
- Breadcrumbs below

**CMS Sidebar:**

- Background: `#1e293b` (dark)
- Width: 260px (expanded), 72px (collapsed)
- Logo: centered, white version, 40px height
- Nav items: `#94a3b8` default, `#ffffff` active, `#2aa8d1` left border when active
- Icons: 20px, left of label
- Hover: `rgba(255,255,255,0.05)` background

### 7.6 Modals & Dialogs

- Overlay: `rgba(0,0,0,0.5)` backdrop with backdrop-blur(4px)
- Container: `#ffffff`, border-radius 16px, padding 32px, shadow `xl`
- Max width: 520px (small), 720px (medium), 960px (large)
- Header: h4 title, close (X) button top-right
- Footer: action buttons right-aligned
- Entry animation: fade + scale from 95% to 100%, 200ms ease
- Close on backdrop click and Escape key

### 7.7 Toast Notifications

| Type        | Icon  | Left Border | Background |
| ----------- | ----- | ----------- | ---------- |
| **Success** | Check | `#10b981`   | `#f0fdf4`  |
| **Error**   | X     | `#ef4444`   | `#fef2f2`  |
| **Warning** | Alert | `#f59e0b`   | `#fffbeb`  |
| **Info**    | Info  | `#2aa8d1`   | `#e8f6fb`  |

- Position: top-right
- Auto-dismiss: 5 seconds
- Entry: slide in from right, 300ms ease
- Exit: fade out, 200ms ease

### 7.8 Tables (CMS Panel)

- Header: `#f8fafc` background, `#64748b` text, 500 weight, uppercase 12px
- Rows: `#ffffff` background, alternate `#f8fafc` (zebra striping)
- Row hover: `#f8fafc` background
- Border: 1px `#e2e8f0` between rows
- Cell padding: 12px 16px
- Actions column: icon buttons with tooltips

---

## 8. Public Website Pages

### 8.1 Home Page

#### Hero Section

- **Layout:** Full viewport height (100vh), centered content
- **Background:** Doctor's professional photo or clinic image with gradient overlay (`linear-gradient(135deg, rgba(42,168,209,0.85), rgba(226,97,151,0.75))`)
- **Content:**
  - Logo (white version) or doctor name in white
  - Headline: large `h1`, white, bold — e.g., "Expert Care for Every Stage of Motherhood"
  - Subheading: `body-lg`, white/80% opacity
  - CTA: Large primary button "Book Your Appointment" + secondary ghost button "Explore Services"
- **Animation:** Fade-in-up on load (title → subtitle → buttons, staggered 200ms)

#### About Section

- **Layout:** 2 columns (image left, text right) — stack on mobile
- **Background:** `#ffffff` with box-shadow `lg` (`0 10px 15px rgba(0,0,0,0.10)`) on the content card, border-radius `lg`
- **Image:** Circular or rounded-square doctor photo with `#e26197` accent border
- **Text:** Brief bio (2-3 paragraphs), "Read More" ghost button → `/about`
- **Accent:** Subtle pink decorative element (dot pattern or curved line)

#### Services Section

- **Layout:** Section heading centered, 3-column card grid below
- **Background:** `#ffffff` — section uses white background, depth created via card shadows
- **Cards:** Icon (colored in `#2aa8d1`), service name (`h4`), short description, box-shadow `sm`, hover lifts to shadow `md`
- **Accent:** Cards have a top border or icon circle in alternating `#2aa8d1` and `#e26197`
- **CTA:** "View All Services" secondary button centered below grid
- **Show:** First 6 services only

#### Testimonials Section

- **Layout:** Section heading centered, carousel below
- **Background:** `#ffffff` — clean white, no colored background
- **Cards:** Patient name, star rating (filled stars in `#f59e0b`), review text, date — each card has box-shadow `md` (`0 4px 6px rgba(0,0,0,0.07)`) and border-radius `lg`
- **Carousel:** Auto-play (5s interval), dots pagination, left/right arrows
- **Quote Icon:** Decorative quotation mark in `#e26197` at 20% opacity

#### FAQs Section

- **Layout:** Accordion style, max-width 800px centered
- **Container:** `#ffffff` background, box-shadow `md` (`0 4px 6px rgba(0,0,0,0.07)`), border-radius `lg`, padding `lg`
- **Items:** Question as clickable header, answer expands below
- **Icons:** Plus/minus toggle icon in `#2aa8d1`
- **Animation:** Smooth height transition, 250ms ease

#### Contact Section

- **Layout:** 2 columns — clinic info + embedded Google Map
- **Info Cards:** Address, phone (tel: link), email (mailto: link), working hours — each card with box-shadow `sm` and border-radius `md`
- **Icons:** Each info item prefixed with colored icon
- **Map:** Google Maps embed, 400px height, full-width on mobile, with box-shadow `md` and border-radius `lg`
- **Social Links:** Icon row (Facebook, Instagram, LinkedIn) in `#2aa8d1`, hover `#e26197`

### 8.2 Services Page

- **Header:** Page title "Our Services" with breadcrumbs
- **Filter Bar:** Specialty dropdown + search input, sticky on scroll
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Cards:** Service image/icon, name, short description, price (SAR), "Book Now" button
- **Detail View:** Modal or dedicated page with full description, duration, price, and CTA

### 8.3 About Page

- **Hero:** Smaller hero banner with doctor photo and name overlay
- **Sections:** Biography → Qualifications → Experience → Achievements
- **Qualifications:** Timeline or card layout with institution logos
- **Achievements:** Grid of cards with icons
- **CTA:** Bottom section "Ready to Book?" with appointment CTA button

### 8.4 Contact Page

- **Layout:** 2 columns — form (left), info (right) — stack on mobile
- **Form Fields:** Name, Email, Phone, Subject (dropdown), Message (textarea)
- **Validation:** Real-time with Zod, error messages below fields
- **Submit:** Primary button, loading spinner during submission
- **Success:** Toast notification + form clear
- **Info Panel:** Address, phone, email, working hours, social links

---

## 9. Booking Flow UX

### 9.1 Wizard Layout

- **Container:** Centered card (max-width 720px), shadow `md`, padding 32px
- **Progress Bar:** Horizontal step indicator at top, 5 steps
  - Steps: Service → Date → Time → Patient Info → Review
  - Active step: `#2aa8d1` filled circle + bold label
  - Completed step: `#10b981` check icon
  - Future step: `#e2e8f0` outline circle + muted label
  - Animated connector line fills as steps progress
- **Navigation:** "Back" (outline button, left) + "Next" (primary button, right)
- **Mobile:** Progress bar compresses to current step number only (e.g., "Step 2 of 5")

### 9.2 Step 1: Service Selection

- **Specialty Filter:** Dropdown or pill buttons for specialties
- **Service List:** Radio-button cards in a vertical list
  - Each card: Service name, short description, price (SAR), duration
  - Selected: `#2aa8d1` border + white `#ffffff` background with box-shadow `sm`
- **Selected Summary:** Fixed bottom bar showing selected service + price

### 9.3 Step 2: Date Selection

- **Calendar:** Custom calendar component
  - Available dates: default style, clickable
  - Unavailable/past dates: muted gray, not clickable, strikethrough
  - Selected date: `#2aa8d1` filled circle with white text
  - Today: dotted border indicator
  - Month navigation: left/right arrow buttons
- **Selected Date Display:** Below calendar showing formatted date

### 9.4 Step 3: Time Slot Selection

- **Time Grid:** Button grid, 3-4 columns
  - Available: outline style, clickable
  - Booked: muted `#e2e8f0`, disabled, strikethrough text
  - Selected: `#2aa8d1` filled with white text
- **Morning/Afternoon Headers:** Group slots by time period

### 9.5 Step 4: Patient Information

- **Logged-in Users:** Auto-filled info with "Edit" option, skip to Step 5
- **New Users:**
  - Login/Register toggle tabs
  - Registration form: Name, Email, Phone, DOB (date picker), Gender (radio), Password
  - All validated with Zod schemas
  - Password strength indicator bar (red → yellow → green)

### 9.6 Step 5: Review & Confirm

- **Booking Summary Card:**
  - Service name + price
  - Date + time
  - Patient name + contact
  - Edit buttons per section (pencil icon → navigates back to that step)
- **Terms Checkbox:** Required, links to terms page
- **Total:** Large displayed amount in SAR
- **CTA:** Large primary button "Proceed to Payment" with lock icon

### 9.7 Payment Page

- **Summary Panel:** Left side — booking details recap
- **Payment Panel:** Right side — gateway selection
  - Paymob: Redirect to hosted page or embedded iframe
  - Stripe: Stripe Elements card input within the page
- **Security Indicators:** Lock icon, "Secure Payment" text, gateway logos
- **Loading:** Full-screen overlay with spinner during processing

### 9.8 Confirmation Page

- **Success State:**
  - Large green checkmark icon with animation (scale in + bounce)
  - "Booking Confirmed!" heading
  - Booking reference number
  - Summary details (service, date, time, amount)
  - "Download Receipt" button (outline)
  - "View My Appointments" button (primary)
  - Confetti animation (subtle, optional)

### 9.9 Failed Payment Page

- Red X icon
- "Payment Failed" heading
- Error reason (if available)
- "Retry Payment" primary button
- "Contact Support" link

---

## 10. Patient Portal UX

### 10.1 Login Page

- **Layout:** Centered card on soft gradient background
- **Logo:** Centered above form, 80px height
- **Heading:** "Patient Login"
- **Fields:** Email, Password (with show/hide toggle)
- **CTA:** Primary full-width button "Login"
- **Links:** "Forgot Password?" below form, "Create Account" at bottom
- **Error:** Inline error message in red below form

### 10.2 Registration Page

- **Layout:** Centered card, wider than login
- **Fields:** Name, Email, Phone, DOB, Gender, Password, Confirm Password, Terms checkbox
- **Password:** Strength meter bar below input
- **CTA:** "Create Account" primary button

### 10.3 Email Verification

- **Layout:** Centered card with envelope illustration
- **OTP Input:** 6 individual digit boxes (auto-advance on input)
- **Timer:** "Resend code in 0:59" countdown
- **Resend:** "Resend Code" link (enabled after timer)

### 10.4 Dashboard Home

- **Welcome:** "Welcome back, [Name]" heading
- **Upcoming Card:** Next appointment highlighted card with service, date, time, address
- **Quick Actions:** 2-3 action buttons (Book Appointment, View All Appointments, Edit Profile)
- **Recent Feed:** Last 3 appointments as compact list items

### 10.5 Appointments Page

- **Tabs:** "Upcoming" (default) | "Past"
- **Active Tab:** `#2aa8d1` bottom border + bold text
- **Appointment Cards:** Date, time, service, status badge, action buttons
  - Upcoming: "View", "Cancel", "Reschedule"
  - Past: "View Details"
- **Empty State:** Illustration + "No appointments yet" + "Book Now" CTA
- **Cancel Flow:** Confirm dialog → reason selection → cancellation summary with refund info
- **Reschedule Flow:** Modal with date + time picker → confirmation

### 10.6 Profile Settings

- **Tabs:** Personal Info | Security | Notifications
- **Personal Info:** Editable form with Save button
- **Security:** Change password form (current + new + confirm)
- **Notifications:** Toggle switches for Email and SMS preferences

---

## 11. CMS Panel UX

### 11.1 Login Page

- **Layout:** Centered card, dark muted background
- **Logo:** White version centered, 80px
- **Heading:** "CMS Login"
- **Fields:** Email + Password with show/hide
- **CTA:** Primary button "Login"
- **Clean and minimal** — no registration link (CMS accounts are pre-created)

### 11.2 Dashboard Layout

- **Sidebar:** Fixed left, 260px, dark (`#1e293b`)
  - Logo at top
  - Navigation items with icons
  - Active: white text + `#2aa8d1` left accent bar
  - Hover: subtle white overlay
  - Collapse toggle at bottom
- **Top Bar:** White, page title, user dropdown (right)
- **Content Area:** `#f8fafc` background, scrollable, padding 24px

### 11.3 Dashboard Home

- **Stat Cards:** 4 cards in a row — Today's Bookings, Revenue (SAR), Pending Testimonials, Active Services
  - Each card: Icon (colored), label, large number
  - Accent color strip at top of each card (alternating `#2aa8d1` and `#e26197`)
- **Quick Actions:** Grid of 4 action buttons
- **Recent Activity:** Timeline-style feed
- **Upcoming Appointments:** Compact table, 5 rows, "View All" link

### 11.4 Data Tables (Bookings, Services, Testimonials, FAQs)

- **Top Bar:** Search input (left) + Filter dropdowns + "Add New" button (right)
- **Table:** Zebra striping, sortable columns, status badges
- **Actions:** Icon buttons (view, edit, delete) with tooltips
- **Pagination:** Bottom-right, showing "1–10 of 50" + page buttons
- **Empty State:** Illustration + message + "Add First [Item]" CTA
- **Loading:** Skeleton rows (pulsing placeholder)

### 11.5 Form Pages (Content Editor, Doctor Profile, Clinic Info, Payment Config)

- **Layout:** Max-width 720px centered, or 2-column for complex forms
- **Sections:** Grouped with section headings and dividers
- **Save:** Sticky bottom bar with "Save Changes" button + unsaved indicator
- **Success:** Toast notification on save
- **Validation:** Inline errors below fields

### 11.6 Schedule Management

- **Working Hours:** List of 7 days, each with toggle + time pickers
  - Active day: row has white background
  - Inactive: muted, grayed out
- **Blocked Dates:** Calendar view with blocked dates highlighted in red
  - Add: Date picker + reason input in modal
  - List: Table of blocked dates with delete button

---

## 12. Responsive Design

### 12.1 Breakpoints

| Name       | Min Width | Tailwind Prefix | Target Devices                     |
| ---------- | --------- | --------------- | ---------------------------------- |
| **Mobile** | 0px       | (default)       | Phones (320–639px)                 |
| **sm**     | 640px     | `sm:`           | Large phones                       |
| **md**     | 768px     | `md:`           | Tablets (portrait)                 |
| **lg**     | 1024px    | `lg:`           | Tablets (landscape), small laptops |
| **xl**     | 1280px    | `xl:`           | Desktops                           |
| **2xl**    | 1536px    | `2xl:`          | Large desktops                     |

### 12.2 Responsive Behavior Matrix

| Component      | Mobile                        | Tablet          | Desktop            |
| -------------- | ----------------------------- | --------------- | ------------------ |
| Header nav     | Hamburger menu                | Compact links   | Full links + CTA   |
| Hero section   | Stacked, 60vh                 | 80vh            | 100vh              |
| Grid columns   | 1 column                      | 2 columns       | 3–4 columns        |
| Sidebar (CMS)  | Hidden, overlay               | Collapsed icons | Full 260px         |
| Tables         | Card view / horizontal scroll | Full table      | Full table         |
| Booking wizard | Full-width card               | 560px centered  | 720px centered     |
| Forms          | Full-width                    | 480px centered  | 560px centered     |
| Modals         | Full-screen                   | 520px centered  | 520–720px centered |
| Footer         | Stacked                       | 2 columns       | 4 columns          |

### 12.3 Touch Targets

- Minimum touch target: **44px × 44px** (WCAG 2.5.5)
- Spacing between interactive elements: minimum 8px
- Swipe gestures for testimonial carousel on mobile
- Pull-to-refresh on appointment lists (optional)

---

## 13. RTL & Bilingual Support

### 13.1 Language Toggle

- **Position:** Header, next to "Book Appointment" CTA
- **Style:** Text button "عربي" / "EN" — toggle between Arabic and English
- **Behavior:** Full page re-render with `dir="rtl"` or `dir="ltr"`
- **Persistence:** Store language preference in localStorage

### 13.2 RTL Layout Rules

| Property        | LTR            | RTL             |
| --------------- | -------------- | --------------- |
| Text alignment  | left           | right           |
| Flex direction  | row            | row-reverse     |
| Margins/Padding | left/right     | mirrored        |
| Icons (arrows)  | → points right | ← points left   |
| Sidebar         | left           | right           |
| Logo            | left in header | right in header |
| Breadcrumbs     | Home > Page    | Page < Home     |
| Progress bar    | left-to-right  | right-to-left   |

### 13.3 Tailwind RTL Implementation

- Use Tailwind's `rtl:` variant for directional utilities
- Use `ltr:` for LTR-only overrides
- Use logical properties: `ms-` (margin-start), `me-` (margin-end), `ps-` (padding-start), `pe-` (padding-end)

### 13.4 Arabic Typography Adjustments

- Arabic font (Cairo) may need +2px size increase for readability
- Arabic line-height should be slightly taller (1.7–1.8 for body)
- Arabic bold weights may appear heavier — consider using 600 instead of 700

---

## 14. Accessibility (WCAG 2.1 AA)

### 14.1 Mandatory Requirements

| Requirement              | Implementation                                               |
| ------------------------ | ------------------------------------------------------------ |
| **Color contrast**       | 4.5:1 for normal text, 3:1 for large text & UI elements      |
| **Keyboard navigation**  | All interactive elements focusable and operable via keyboard |
| **Focus indicators**     | 3px `#2aa8d1` ring, 2px offset, on all focusable elements    |
| **Alt text**             | All images have descriptive alt text                         |
| **ARIA labels**          | All icon buttons, form fields, navigation landmarks          |
| **Heading hierarchy**    | Sequential h1 → h2 → h3 (no skipping levels)                 |
| **Skip navigation**      | "Skip to main content" link visible on focus                 |
| **Form labels**          | Every input has an associated `<label>`                      |
| **Error identification** | Errors identified by color AND text AND icon                 |
| **Link purpose**         | All links have descriptive text (no "click here")            |
| **Page titles**          | Unique descriptive `<title>` per page                        |
| **Language attribute**   | `lang="en"` or `lang="ar"` on `<html>`                       |

### 14.2 Screen Reader Considerations

- Announce page changes on SPA navigation (aria-live regions)
- Announce toast notifications with `role="alert"`
- Booking wizard progress: "Step 2 of 5: Select Date"
- Status badges: "Status: Confirmed" (not just color)
- Star ratings: "4 out of 5 stars" (not just star icons)

### 14.3 Reduced Motion

- Respect `prefers-reduced-motion` media query
- Disable parallax, carousel autoplay, and animated transitions when enabled
- Keep opacity transitions (fade) but disable transform transitions (slide, bounce)

---

## 15. Micro-interactions & Animations

### 15.1 Transition Defaults

| Property     | Duration | Easing      |
| ------------ | -------- | ----------- |
| Color/BG     | 150ms    | ease        |
| Transform    | 200ms    | ease-out    |
| Opacity      | 200ms    | ease        |
| Height/Width | 250ms    | ease-in-out |
| Page enter   | 300ms    | ease-out    |

### 15.2 Key Animations

| Interaction             | Animation                                            |
| ----------------------- | ---------------------------------------------------- |
| Page load               | Staggered fade-in-up for sections (200ms delay each) |
| Button hover            | Background darkens, subtle shadow appears            |
| Card hover              | Lift (translateY -2px) + shadow increase             |
| Booking step transition | Slide left/right with fade                           |
| Progress bar fill       | Width animation with ease-in-out                     |
| Modal open              | Backdrop fade + card scale from 95% with fade        |
| Toast appear            | Slide in from right                                  |
| Success checkmark       | SVG draw animation (stroke-dashoffset)               |
| Loading spinner         | Rotate 360° infinite, `#2aa8d1` arc on gray ring     |
| Skeleton loading        | Shimmer effect (gradient slide), pulsing opacity     |
| Accordion expand        | Smooth height transition with content fade-in        |
| Testimonial carousel    | Smooth horizontal slide, fade at edges               |
| Star rating hover       | Stars fill progressively with `#f59e0b`              |

### 15.3 Loading States

| Context              | Loading Pattern                                          |
| -------------------- | -------------------------------------------------------- |
| Initial page load    | Skeleton screens matching content layout                 |
| API data fetch       | Skeleton rows/cards with shimmer                         |
| Button submit        | Button text replaced with spinner, button disabled       |
| Full-page transition | Centered spinner with brand logo                         |
| Image loading        | Blur-up placeholder → sharp image                        |
| Payment processing   | Full overlay with spinner + "Processing payment..." text |

---

## 16. SEO & Performance UX

### 16.1 SEO Requirements (Public Website Only)

| Requirement           | Implementation                                             |
| --------------------- | ---------------------------------------------------------- | ---------------------------- |
| **Meta titles**       | Unique per page, format: "Page Name                        | Prof. Mohamed Mamdouh Saleh" |
| **Meta descriptions** | Unique, 150-160 chars, include keywords                    |
| **Open Graph tags**   | og:title, og:description, og:image for social sharing      |
| **Schema markup**     | LocalBusiness, MedicalOrganization, Physician, FAQPage     |
| **Sitemap**           | Auto-generated XML sitemap                                 |
| **Canonical URLs**    | Canonical tag on every page                                |
| **Alt text**          | Descriptive alt on all images                              |
| **Heading structure** | One h1 per page, proper hierarchy                          |
| **URL structure**     | Clean, descriptive slugs (e.g., `/services/prenatal-care`) |

### 16.2 Performance Targets

| Metric                  | Target        |
| ----------------------- | ------------- |
| **LCP**                 | < 2.5 seconds |
| **FID / INP**           | < 200ms       |
| **CLS**                 | < 0.1         |
| **Page weight**         | < 1MB initial |
| **Time to interactive** | < 3 seconds   |

### 16.3 Performance Optimizations

- Next.js Image component with WebP format, lazy loading
- Font display: swap (prevent invisible text during load)
- Code splitting per route
- Preload critical resources (fonts, hero image)
- Defer non-critical JS
- Cache API responses where appropriate

---

## 17. Error States & Empty States

### 17.1 Error Pages

| Page              | Content                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| **404**           | Illustration + "Page Not Found" + "The page you're looking for doesn't exist." + "Go Home" button |
| **500**           | Illustration + "Something Went Wrong" + "We're working on it." + "Try Again" button               |
| **Network Error** | Illustration + "No Connection" + "Check your network." + "Retry" button                           |
| **Unauthorized**  | Redirect to login page with toast "Please login to continue"                                      |

### 17.2 Empty States (CMS)

| Context                   | Message                             | Action                   |
| ------------------------- | ----------------------------------- | ------------------------ |
| No bookings               | "No bookings found"                 | Adjust filters           |
| No services               | "No services added yet"             | "Add Your First Service" |
| No testimonials           | "No testimonials yet"               | "Add a Testimonial"      |
| No FAQs                   | "No FAQs created"                   | "Create Your First FAQ"  |
| No blocked dates          | "No days off scheduled"             | "Block a Date"           |
| No search results         | "No results for '[query]'"          | "Clear search"           |
| No appointments (Patient) | "You have no upcoming appointments" | "Book an Appointment"    |

### 17.3 Empty State Style

- Centered illustration (soft line art in brand colors)
- Heading: `h4`, `#1a1a2e`
- Description: `body-sm`, `#64748b`
- CTA: Primary or outline button

---

## Tailwind CSS Configuration Reference

```javascript
// tailwind.config.ts — Key brand tokens
const config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2aa8d1",
          light: "#e8f6fb", // hover states & badges only, not section backgrounds
          dark: "#1e8aab",
        },
        secondary: {
          DEFAULT: "#e26197",
          light: "#fce8f0",
          dark: "#c4507e",
        },
        text: {
          primary: "#1a1a2e",
          secondary: "#64748b",
          muted: "#94a3b8",
        },
        surface: "#ffffff",
        background: "#f8fafc",
        border: "#e2e8f0",
        sidebar: "#1e293b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Noto Sans Arabic", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.07)",
        lg: "0 10px 15px rgba(0,0,0,0.10)",
        xl: "0 20px 25px rgba(0,0,0,0.12)",
      },
    },
  },
};
```

---

**Document Status:** UI/UX Design Requirements  
**Last Updated:** March 26, 2026  
**Prepared For:** Dr. Mohamed Mamdoh Website & CMS  
**Brand Colors:** `#2aa8d1` · `#e26197` · `#ffffff`
