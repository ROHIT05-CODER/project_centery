# Project Center

A clean-start Next.js + TypeScript + Tailwind CSS starter for an engineering project catalogue and WhatsApp enquiry business website.

## 1. Requirements
- Node.js 20.9+ (recommended)
- npm
- Supabase project (for database, authentication and image storage)

## 2. Install and run
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

On Windows PowerShell, copy the environment template with:
```powershell
Copy-Item .env.example .env.local
```

## 3. Configure Supabase
1. Create a Supabase project.
2. Copy the Project URL and anon/public key into `.env.local`.
3. Open Supabase SQL Editor and review/run `supabase/schema.sql`.
4. Configure an admin user and role only after reviewing the authorization policies.
5. Never place the Supabase service-role key in browser code or commit secrets.

The starter includes a Supabase browser client helper and initial SQL schema. Database-backed project loading, secure server-side admin authorization, and admin CRUD screens are planned next; the initial catalogue currently uses sample data.

## 4. Configure WhatsApp
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your business number with country code, digits only (India example format: `91XXXXXXXXXX`, without `+`).

## 5. Project structure
- `app/` routes and page layouts
- `components/` reusable UI components
- `lib/` project data and integrations
- `supabase/` database schema
- `public/` add your real prototype images here

## 6. Important before production
- Replace sample projects with verified project information.
- Replace all image placeholders with matching owner-provided prototype photographs.
- Add server-side authentication and role checks before enabling admin writes.
- Add upload policies for authorized admins only.
- Test WhatsApp number, forms, responsive layouts, SEO and deployment settings.
- Do not publish unverified prices, durations, specifications, testimonials or business credentials.
