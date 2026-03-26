# Frontend Development Tasks - CMS Panel
**Developer:** Frontend Junior Developer  
**Project Duration:** 3 weeks (TIGHT DEADLINE - Focus on core features)  
**Technology Stack:** React + Vite + TypeScript + Tailwind CSS + React Router DOM  
**Last Updated:** March 26, 2026

**This project includes:**
1. CMS Login & Authentication
2. Dashboard with booking metrics
3. Doctor Profile & Clinic Information Management
4. Services & Specialties Management
5. Schedule & Blocked Dates Management
6. Bookings Overview & Management
7. Content Pages Management
8. Testimonials Management
9. FAQ Management
10. Payment Gateway Configuration

**Out of Scope** (per BRD — do NOT implement):
- Patient management (patients are self-service via public website)
- Consultations / video call management
- Analytics & detailed reports
- User management (multi-admin)
- Doctor dashboard
- Prescriptions, clinical notes, medical reports

---

## **PHASE 1: PROJECT SETUP** (Days 1-2)

### Task 1.1: Initialize CMS Project
- [ ] Create new React app with Vite: `npm create vite@latest dr-mohamed-mamdoh-cms -- --template react-ts`
- [ ] Navigate to project: `cd dr-mohamed-mamdoh-cms`
- [ ] Install Tailwind CSS: `npm install -D tailwindcss @tailwindcss/vite`
- [ ] Configure Tailwind in `vite.config.ts` and `src/index.css`
- [ ] Start dev server and verify it works

### Task 1.2: Install Essential Dependencies
```bash
npm install react-router-dom axios
npm install react-icons                  # Icons
npm install react-toastify               # Toast notifications
npm install date-fns                     # Date formatting
npm install zod react-hook-form @hookform/resolvers  # Form validation
```

### Task 1.3: Project Structure Setup
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── dashboard/
│   ├── bookings/
│   ├── schedule/
│   ├── services/
│   ├── content/
│   ├── testimonials/
│   ├── faqs/
│   └── common/
├── pages/
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── BookingsPage.tsx
│   ├── SchedulePage.tsx
│   ├── ServicesPage.tsx
│   ├── ContentPage.tsx
│   ├── TestimonialsPage.tsx
│   ├── FaqsPage.tsx
│   ├── DoctorProfilePage.tsx
│   └── PaymentConfigPage.tsx
├── services/
│   └── api.ts
├── utils/
│   └── helpers.ts
├── context/
│   └── AuthContext.tsx
├── App.tsx
└── main.tsx
```

### Task 1.4: Setup Authentication Context
**File:** `context/AuthContext.tsx`
- [ ] Create context for CMS staff authentication
- [ ] Store CMS staff token in localStorage
- [ ] Provide login/logout functions
- [ ] Check if user is authenticated
```typescript
const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cmsUser, setCmsUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('cmsToken');
    if (token) {
      // Verify token and set CMS user
    }
    setLoading(false);
  }, []);
  
  const login = async (email: string, password: string) => {
    // API call to /api/cms/login
  };
  
  const logout = () => {
    localStorage.removeItem('cmsToken');
    setCmsUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ cmsUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Task 1.5: Setup API Service
**File:** `services/api.ts`
- [ ] Configure axios with base URL
- [ ] Add token to all requests (interceptor)
- [ ] Handle 401 errors (auto logout)
```typescript
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('cmsToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('cmsToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;
```

### Task 1.6: Setup Protected Routes
**File:** `App.tsx`
- [ ] Create PrivateRoute component
- [ ] Redirect to login if not authenticated
- [ ] Setup all routes
```typescript
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { cmsUser, loading } = useContext(AuthContext);
  
  if (loading) return <div>Loading...</div>;
  
  return cmsUser ? children : <Navigate to="/login" />;
};
```

---

## **PHASE 2: LOGIN PAGE** (Week 1)

### Task 2.1: Create Login Page
**File:** `pages/LoginPage.tsx`
- [ ] Center card layout
- [ ] Doctor's logo/name at top
- [ ] "CMS Login" heading
- [ ] Email input field
- [ ] Password input field
- [ ] "Show/Hide Password" toggle
- [ ] "Login" button
- [ ] Error message display area
- [ ] Loading state during login

### Task 2.2: Form Validation
- [ ] Validate email format
- [ ] Validate password not empty
- [ ] Show error messages under fields
- [ ] Disable submit button while loading

### Task 2.3: API Integration
- [ ] Call `POST /api/cms/login` with credentials
- [ ] Store token in localStorage on success
- [ ] Update AuthContext with CMS user data
- [ ] Redirect to dashboard on success
- [ ] Show error message on failure
- [ ] Handle network errors

### Task 2.4: Styling
- [ ] Professional, clean design
- [ ] Medical color scheme
- [ ] Responsive (works on all screens)
- [ ] Smooth transitions
- [ ] Focus states on inputs

---

## **PHASE 3: LAYOUT COMPONENTS** (Week 1-2)

### Task 3.1: Create Sidebar Component
**File:** `components/layout/Sidebar.tsx`
- [ ] Fixed left sidebar (250px width)
- [ ] Logo/branding at top
- [ ] Navigation menu items:
  - 📊 Dashboard
  - 📅 Bookings
  - ⏰ Schedule
  - 💼 Services
  - 📝 Content Pages
  - ⭐ Testimonials
  - ❓ FAQs
  - 👨‍⚕️ Doctor Profile
  - 💳 Payment Config
- [ ] Active menu item highlighted
- [ ] Hover effects
- [ ] Icons for each menu item
- [ ] Collapse/expand functionality (optional)
- [ ] Responsive: hide on mobile, show hamburger menu

### Task 3.2: Create Header Component
**File:** `components/layout/Header.tsx`
- [ ] Fixed top bar
- [ ] Hamburger menu button (mobile only)
- [ ] Page title display
- [ ] CMS user profile dropdown
  - User name
  - Logout button
- [ ] Responsive design

### Task 3.3: Create Layout Component
**File:** `components/layout/Layout.tsx`
- [ ] Wrap Sidebar + Header + Main Content
- [ ] Main content area with padding
- [ ] Responsive layout
```javascript
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};
```

### Task 3.4: Common Components
**File:** `components/common/`
- [ ] **Button.tsx** - Reusable button with variants (Tailwind CSS styled)
- [ ] **Card.tsx** - Card wrapper with shadow
- [ ] **Table.tsx** - Reusable table component
- [ ] **Modal.tsx** - Modal dialog
- [ ] **Pagination.tsx** - Pagination controls
- [ ] **SearchBar.tsx** - Search input with icon
- [ ] **LoadingSpinner.tsx** - Loading indicator
- [ ] **EmptyState.tsx** - Empty state message
- [ ] **ConfirmDialog.tsx** - Confirmation dialog

---

## **PHASE 4: DASHBOARD HOME PAGE** (Week 2)

### Task 4.1: Statistics Cards Component
**File:** `components/dashboard/StatsCards.tsx`
- [ ] 4 cards in a row (2x2 on mobile)
- [ ] Each card shows:
  - Icon
  - Title
  - Large number
  - Optional subtitle
- [ ] Cards for:
  - Today's Bookings
  - This Month's Revenue (SAR)
  - Pending Testimonials
  - Total Services
- [ ] Color coding for each card
- [ ] Hover effects

**API Integration:**
- [ ] Fetch from `GET /api/cms/dashboard`
- [ ] Display statistics dynamically

### Task 4.2: Quick Actions Component
**File:** `components/dashboard/QuickActions.tsx`
- [ ] Grid of action buttons:
  - View Bookings
  - Manage Schedule
  - Edit Doctor Profile
  - Manage Content
- [ ] Icon + text buttons
- [ ] Navigate to respective pages on click

### Task 4.3: Recent Activity Feed
**File:** `components/dashboard/RecentActivity.tsx`
- [ ] List of recent events:
  - New bookings
  - Cancelled appointments
  - New contact form submissions
  - New testimonials pending approval
- [ ] Each item shows:
  - Icon
  - Activity description
  - Time ago (e.g., "2 hours ago")
- [ ] Scrollable list (max 5-10 items)
- [ ] "View All" link

### Task 4.4: Upcoming Appointments List
**File:** `components/dashboard/UpcomingAppointments.tsx`
- [ ] Table showing today's and upcoming appointments
- [ ] Columns: Patient Name, Service, Date, Time, Status
- [ ] Click to view booking details
- [ ] Show max 5-10 items
- [ ] "View All" link to bookings page

**API Integration:**
- [ ] Fetch from `GET /api/cms/bookings?date=today&limit=10`

### Task 4.5: Assemble Dashboard Page
**File:** `pages/DashboardPage.tsx`
- [ ] Wrap in Layout component
- [ ] Add page title "Dashboard"
- [ ] Arrange components:
  - Stats cards at top
  - Quick actions + Recent activity side by side
  - Upcoming appointments below
- [ ] Load data on mount
- [ ] Handle loading and errors

---

## **PHASE 5: CONTENT & TESTIMONIALS MANAGEMENT** (Week 3)

### Task 5.1: Content Pages List
**File:** `components/content/ContentList.tsx`
- [ ] Table with columns:
  - Page Key (home, about, contact, privacy, terms)
  - Title
  - Published Status
  - Last Updated
  - Actions (Edit)
- [ ] Status badges (Published/Draft)

**API Integration:**
- [ ] Fetch from `GET /api/cms/content`

### Task 5.2: Content Page Editor
**File:** `components/content/ContentEditor.tsx`
- [ ] Form fields:
  - Title (required)
  - Content (JSON/rich text editor)
  - SEO Title
  - SEO Description
  - Is Published (toggle)
- [ ] Save button
- [ ] Preview option (optional)

**API Integration:**
- [ ] GET `/api/cms/content/:pageKey`
- [ ] PATCH `/api/cms/content/:pageKey`
- [ ] Show success toast on save

### Task 5.3: Doctor Profile Editor
**File:** `pages/DoctorProfilePage.tsx`
- [ ] Form sections:
  - **Basic Info:** Name, title, bio
  - **Professional:** Qualifications, experience_years, consultation_fee
  - **Additional:** Languages, awards (JSON), social links (JSON)
  - **Profile Picture:** Upload/change photo
- [ ] Save button per section

**API Integration:**
- [ ] GET `/api/cms/doctor-profile`
- [ ] PATCH `/api/cms/doctor-profile`
- [ ] POST `/api/cms/doctor-profile/picture`

### Task 5.4: Clinic Information Editor
**File:** `components/content/ClinicInfoEditor.tsx`
- [ ] Form fields:
  - Clinic Name
  - Address
  - Phone
  - Email
  - Google Maps URL
  - Working Hours (JSON editor)
- [ ] Save button

**API Integration:**
- [ ] GET `/api/cms/clinic`
- [ ] PATCH `/api/cms/clinic`

### Task 5.5: Testimonials Management
**File:** `pages/TestimonialsPage.tsx`
- [ ] Table with columns:
  - Patient Name
  - Rating (stars)
  - Review Preview
  - Approved (Yes/No badge)
  - Featured (Yes/No badge)
  - Actions (View, Approve, Feature, Edit, Delete)
- [ ] Filter by: Approved/Pending, Featured
- [ ] "Add Testimonial" button (manual entry)

**API Integration:**
- [ ] GET `/api/cms/testimonials`
- [ ] POST `/api/cms/testimonials`
- [ ] PATCH `/api/cms/testimonials/:id`
- [ ] PATCH `/api/cms/testimonials/:id/approve`
- [ ] PATCH `/api/cms/testimonials/:id/feature`
- [ ] DELETE `/api/cms/testimonials/:id`

### Task 5.6: Testimonial Form Modal
**File:** `components/testimonials/TestimonialForm.tsx`
- [ ] Modal dialog
- [ ] Form fields:
  - Patient Name (required)
  - Rating (1-5 star selector)
  - Review Text (textarea, required)
  - Is Approved (toggle)
  - Is Featured (toggle)
- [ ] Save button

### Task 5.7: FAQ Management
**File:** `pages/FaqsPage.tsx`
- [ ] Table with columns:
  - Question
  - Category
  - Order
  - Active (Yes/No)
  - Actions (Edit, Delete)
- [ ] Filter by category
- [ ] "Add FAQ" button
- [ ] Drag-and-drop reordering (optional, or manual order input)

**API Integration:**
- [ ] GET `/api/cms/faqs`
- [ ] POST `/api/cms/faqs`
- [ ] PATCH `/api/cms/faqs/:id`
- [ ] PATCH `/api/cms/faqs/reorder`
- [ ] DELETE `/api/cms/faqs/:id`

### Task 5.8: FAQ Form Modal
**File:** `components/faqs/FaqForm.tsx`
- [ ] Modal dialog
- [ ] Form fields:
  - Question (required)
  - Answer (textarea, required)
  - Category (dropdown: booking, payment, general, services)
  - Order (number)
  - Is Active (toggle)
- [ ] Save button

### Task 5.9: Assemble Content Page
**File:** `pages/ContentPage.tsx`
- [ ] Tab navigation:
  - Content Pages
  - Clinic Information
- [ ] Display respective component per tab
- [ ] Test all CRUD operations

---

## **PHASE 6: BOOKINGS OVERVIEW** (Week 4)

### Task 6.1: Bookings List View
**File:** `components/bookings/BookingsList.tsx`
- [ ] Table with columns:
  - Patient Name
  - Service
  - Date & Time
  - Status (badge)
  - Payment Status (badge)
  - Actions (View, Cancel)
- [ ] Status badges (colored)
- [ ] Pagination
- [ ] Loading state

**API Integration:**
- [ ] Fetch from `GET /api/cms/bookings`

### Task 6.2: Filter & Search Component
**File:** `components/bookings/BookingsFilter.tsx`
- [ ] Date range picker
- [ ] Status filter (All, Confirmed, Pending, Cancelled, Completed)
- [ ] Payment status filter
- [ ] Patient name/email search
- [ ] "Clear Filters" button

### Task 6.3: Booking Details Modal
**File:** `components/bookings/BookingDetail.tsx`
- [ ] Display all booking info
- [ ] Patient details (name, email, phone)
- [ ] Service details
- [ ] Payment info (amount, status, gateway)
- [ ] Action buttons:
  - Mark as Complete
  - Cancel (with optional refund)

**API Integration:**
- [ ] Fetch: `GET /api/cms/bookings/:id`
- [ ] Update status: `PATCH /api/cms/bookings/:id/status`
- [ ] Cancel: `PATCH /api/cms/bookings/:id/cancel`

### Task 6.4: Create Booking Form (Walk-in)
**File:** `components/bookings/CreateBookingForm.tsx`
- [ ] Modal dialog
- [ ] Select or enter patient name/phone
- [ ] Select service
- [ ] Select date (calendar)
- [ ] Select time slot (from available)
- [ ] Notes field (optional)
- [ ] Create button

**API Integration:**
- [ ] Check availability first
- [ ] POST `/api/cms/bookings`

### Task 6.5: Assemble Bookings Page
**File:** `pages/BookingsPage.tsx`
- [ ] Filters at top
- [ ] Bookings list table
- [ ] "Create Booking" button for walk-ins
- [ ] Pagination
- [ ] Test all features

---

## **PHASE 7: SCHEDULE MANAGEMENT** (Week 4)

### Task 7.1: Working Hours Setup Component
**File:** `components/schedule/WorkingHours.tsx`
- [ ] List of days of the week
- [ ] Each day has:
  - Toggle (Available/Unavailable)
  - Start time picker
  - End time picker
  - Break time start/end (optional)
- [ ] "Save Schedule" button

**API Integration:**
- [ ] Fetch: `GET /api/cms/schedule`
- [ ] Update: `PATCH /api/cms/schedule`

### Task 7.2: Days Off Management Component
**File:** `components/schedule/DaysOff.tsx`
- [ ] Calendar to select dates
- [ ] List of blocked dates
- [ ] Each blocked date has:
  - Date
  - Reason
  - Delete button
- [ ] "Add Day Off" button opens dialog
- [ ] Dialog to add new blocked date with reason

**API Integration:**
- [ ] GET blocked dates
- [ ] POST `/api/cms/blocked-dates`
- [ ] DELETE `/api/cms/blocked-dates/:id`

### Task 7.3: Time Slot Configuration Component
**File:** `components/schedule/TimeSlotConfig.tsx`
- [ ] Input: Appointment duration (minutes)
- [ ] Input: Buffer time between appointments (minutes)
- [ ] Input: Maximum appointments per day
- [ ] Save button

**API Integration:**
- [ ] Store in settings or schedule table

### Task 7.4: Assemble Schedule Page
**File:** `pages/SchedulePage.tsx`
- [ ] Tab navigation:
  - Working Hours
  - Days Off
  - Time Slot Settings
- [ ] Display respective component per tab
- [ ] Save changes button (if not in each component)

---

## **PHASE 8: SERVICES MANAGEMENT** (Week 5)

### Task 8.1: Services List Component
**File:** `components/services/ServicesList.tsx`
- [ ] Table with columns:
  - Service Name
  - Specialty
  - Price (SAR)
  - Duration
  - Active (Yes/No)
  - Actions (Edit, Delete)
- [ ] "Add New Service" button
- [ ] Search bar

**API Integration:**
- [ ] Fetch: `GET /api/cms/services`

### Task 8.2: Add/Edit Service Form
**File:** `components/services/ServiceForm.tsx`
- [ ] Modal dialog
- [ ] Fields:
  - Service Name (required)
  - Description (textarea)
  - Specialty (dropdown)
  - Price (SAR)
  - Duration (minutes)
  - Is Active (toggle)
- [ ] Save button

**API Integration:**
- [ ] POST `/api/cms/services` for new
- [ ] PATCH `/api/cms/services/:id` for edit

### Task 8.3: Specialty Management Component
**File:** `components/services/SpecialtyManagement.tsx`
- [ ] Two sections:
  - Specialties list
- [ ] Each section has:
  - Add button
  - List of items with Edit/Delete
- [ ] Simple inline edit or modal

**API Integration:**
- [ ] CRUD operations on specialties via `/api/cms/specialties`

### Task 8.4: Delete Confirmation
- [ ] Reuse ConfirmDialog component
- [ ] Warn if service has appointments

**API Integration:**
- [ ] DELETE `/api/cms/services/:id`

### Task 8.5: Assemble Services Page
**File:** `pages/ServicesPage.tsx`
- [ ] Tab navigation:
  - Services
  - Specialties
- [ ] Display respective component

---

## **PHASE 9: PAYMENT GATEWAY CONFIGURATION** (Week 5)

### Task 9.1: Payment Config Page
**File:** `pages/PaymentConfigPage.tsx`
- [ ] Display current active payment gateway
- [ ] Form sections for each gateway:
  - **Paymob:** API Key, Integration IDs, HMAC Secret (masked)
  - **Stripe:** Publishable Key, Secret Key (masked)
- [ ] Active gateway selector
- [ ] "Test Connection" button
- [ ] Save button

**API Integration:**
- [ ] GET `/api/cms/payment-config`
- [ ] PATCH `/api/cms/payment-config`
- [ ] POST `/api/cms/payment-config/test`

---

## **PHASE 10: RESPONSIVE DESIGN & TESTING** (Week 5-6)

### Task 13.1: Mobile Responsiveness
- [ ] Test all pages on mobile (320px, 375px, 414px)
- [ ] Sidebar collapses to hamburger menu
- [ ] Tables scroll horizontally or stack
- [ ] Forms stack on mobile
- [ ] Charts resize properly
- [ ] Fix any layout issues

### Task 13.2: Tablet Responsiveness
- [ ] Test on tablet sizes (768px, 1024px)
- [ ] Adjust sidebar width if needed
- [ ] Ensure good use of screen space

### Task 13.3: Cross-Browser Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Fix any browser-specific issues

### Task 13.4: Performance Optimization
- [ ] Code splitting for large pages
- [ ] Lazy load components
- [ ] Optimize images
- [ ] Minimize bundle size
- [ ] Add loading states everywhere

### Task 13.5: Accessibility
- [ ] Keyboard navigation works
- [ ] ARIA labels on interactive elements
- [ ] Color contrast meets standards
- [ ] Screen reader friendly
- [ ] Focus indicators visible

### Task 13.6: Error Handling
- [ ] Graceful API error handling
- [ ] User-friendly error messages
- [ ] Network error handling
- [ ] 404 page
- [ ] Empty states for lists

### Task 13.7: Testing
- [ ] Test all CRUD operations
- [ ] Test all forms and validations
- [ ] Test filters and search
- [ ] Test pagination
- [ ] Test export functionality
- [ ] Test charts and reports
- [ ] Test authentication flow (login, logout, token expiry)

### Task 13.8: Final Polish
- [ ] Consistent spacing and colors
- [ ] Smooth transitions
- [ ] Loading indicators
- [ ] Success/error toasts
- [ ] Confirmation dialogs
- [ ] Tooltips on icons
- [ ] Professional overall look

---

## **PHASE 11: DEPLOYMENT**

### Task 14.1: Build for Production
- [ ] Configure environment variables (API URL)
- [ ] Run `npm run build`
- [ ] Test production build locally
- [ ] Check bundle size
- [ ] No console errors

### Task 14.2: Deploy
- [ ] Choose hosting (Netlify, Vercel, AWS S3)
- [ ] Deploy production build
- [ ] Configure custom domain (e.g., cms.drmohamedmamdoh.com)
- [ ] Setup SSL certificate
- [ ] Test live CMS panel

### Task 14.3: Documentation
- [ ] Create README with setup instructions
- [ ] Document all features
- [ ] Document environment variables
- [ ] Create user guide for CMS staff

---

## **TECHNICAL STACK SUMMARY**

### Core Technologies
- **Framework:** React (v18+)
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS
- **Date Handling:** date-fns

### Essential Packages
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "axios": "^1.4.0",
    "react-icons": "^4.10.0",
    "react-toastify": "^9.1.3",
    "date-fns": "^2.30.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "vite": "^5.0.0"
  }
}
```

---

## **DESIGN GUIDELINES**

### Color Scheme
- **Primary:** #2563eb (Blue) - Professional
- **Secondary:** #0d9488 (Teal) - Medical
- **Success:** #10b981 (Green)
- **Warning:** #f59e0b (Orange)
- **Error:** #ef4444 (Red)
- **Background:** #f9fafb (Light gray)
- **Sidebar:** #1e293b (Dark)

### Typography
- **Font:** Roboto or Inter
- **Headings:** Bold, clear hierarchy
- **Body:** 14-16px, readable

### Component Styling
- Consistent card shadows
- 8px border radius
- Hover effects on interactive elements
- Consistent spacing (8, 16, 24, 32px)

---

## **IMPORTANT NOTES**

### Best Practices
1. **Always protect routes** - Only authenticated CMS staff can access
2. **Validate forms** - Client-side validation before API calls
3. **Handle errors gracefully** - Show user-friendly messages
4. **Use loading states** - Show spinners during API calls
5. **Consistent UI** - Reuse components for consistency
6. **Responsive design** - Test on all screen sizes
7. **Accessibility** - Follow WCAG guidelines
8. **Performance** - Lazy load, code split, optimize
9. **Security** - Never expose tokens, sanitize inputs
10. **Testing** - Test thoroughly before deployment

### Common Pitfalls to Avoid
- ❌ Don't skip authentication checks
- ❌ Don't ignore mobile responsiveness
- ❌ Don't expose sensitive data
- ❌ Don't skip error handling
- ❌ Don't hardcode API URLs
- ❌ Don't use inline styles everywhere
- ❌ Don't forget loading states
- ❌ Don't skip accessibility
- ❌ Don't ignore performance
- ❌ Don't commit sensitive data

### Resources
- Tailwind CSS Docs: https://tailwindcss.com/docs
- React Router: https://reactrouter.com/
- Vite Docs: https://vitejs.dev/
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/
- date-fns: https://date-fns.org/

---

**Good luck! Build a powerful CMS panel step by step!** 📊🚀
