# Backend — Files & Folders Structure

> **Project:** Dr. Mohamed Mamdoh Website & CMS  
> **Last Updated:** March 26, 2026

```
backend/
├── .env
├── .env.example
├── .gitignore
├── DEVELOPMENT_CHECKLIST.md
├── erd.md
├── jest.config.cjs
├── loader.mjs
├── nodemon.json
├── package.json
├── tsconfig.json
│
├── __tests__/
│   ├── auth.test.ts
│   ├── bookings.test.ts
│   ├── cms.test.ts
│   ├── patients.test.ts
│   ├── payments.test.ts
│   ├── public.test.ts
│   ├── setup.ts
│   └── TEST_COVERAGE_REPORT.ts
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│       └── migration_lock.toml
│
├── src/
│   ├── index.ts
│   ├── server.ts
│   │
│   ├── config/
│   │   └── index.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── bookings.controller.ts
│   │   ├── cms.controller.ts
│   │   ├── content.controller.ts
│   │   ├── faqs.controller.ts
│   │   ├── index.ts
│   │   ├── patients.controller.ts
│   │   ├── payments.controller.ts
│   │   ├── public.controller.ts
│   │   ├── schedule.controller.ts
│   │   ├── services.controller.ts
│   │   └── testimonials.controller.ts
│   │
│   ├── db/
│   │   ├── index.ts
│   │   └── prisma.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── index.ts
│   │   └── role.middleware.ts
│   │
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── bookings.routes.ts
│   │   ├── cms.routes.ts
│   │   ├── content.routes.ts
│   │   ├── faqs.routes.ts
│   │   ├── index.ts
│   │   ├── patients.routes.ts
│   │   ├── payments.routes.ts
│   │   ├── public.routes.ts
│   │   ├── schedule.routes.ts
│   │   ├── services.routes.ts
│   │   └── testimonials.routes.ts
│   │
│   ├── services/
│   │   ├── email.service.ts
│   │   ├── index.ts
│   │   ├── paymob.service.ts
│   │   ├── sms.service.ts
│   │   └── stripe.service.ts
│   │
│   └── utils/
│       ├── errorHandling.ts
│       ├── generateToken.ts
│       ├── index.ts
│       ├── sendEmail.event.ts
│       ├── sendMail.ts
│       └── templateHtml-Email.ts
│
└── types/
    └── prisma.d.ts
```
