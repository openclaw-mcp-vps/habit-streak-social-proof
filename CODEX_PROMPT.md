# Build Task: habit-streak-social-proof

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: habit-streak-social-proof
HEADLINE: Share habit streaks with accountability partners
WHAT: Tracks habits and shares progress with chosen accountability partners, sends encouragement/shame notifications
WHY: People are 65% more likely to complete goals with accountability partner, existing apps lack social pressure features
WHO PAYS: Fitness enthusiasts, productivity seekers, people building new habits
NICHE: health-tracking
PRICE: $$7/mo

ARCHITECTURE SPEC:
A Next.js web app with user authentication, habit tracking dashboard, and real-time social accountability features. Uses PostgreSQL for data persistence, Pusher for real-time notifications, and Lemon Squeezy for subscription management.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/habits/page.tsx
- app/partners/page.tsx
- app/api/auth/[...nextauth]/route.ts
- app/api/habits/route.ts
- app/api/partners/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/HabitCard.tsx
- components/StreakDisplay.tsx
- components/PartnerInvite.tsx
- components/NotificationCenter.tsx
- lib/db.ts
- lib/pusher.ts
- lib/lemonsqueezy.ts
- middleware.ts

DEPENDENCIES: next, react, tailwindcss, next-auth, @auth/prisma-adapter, prisma, @prisma/client, pusher, pusher-js, @lemonsqueezy/lemonsqueezy.js, zod, date-fns, lucide-react, recharts

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/habit-streak-social-proof
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019dff7e-d43f-7c52-bf36-3a04ee0be133
--------
user
# Build Task: habit-streak-social-proof

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: habit-streak-social-proof
HEADLINE: Sha
Please fix the above errors and regenerate.