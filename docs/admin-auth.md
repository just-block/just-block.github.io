# Admin API

## Local admin credentials

- Email: `admin@justblock.app`
- Password: `admin123`

## Seed a new admin user

Local (uses `.dev.vars`):

```bash
cd packages/api
npx dotenvx run -f .dev.vars -- npx tsx scripts/seed-admin.ts <email> <password> [name]
```

Production (uses encrypted `.env.production` via dotenvx):

```bash
cd packages/api
npx dotenvx run -f .env.production -- npx tsx scripts/seed-admin.ts <email> <password> [name]
```

## Scripts

```bash
npm run dev           # start local worker
npm run db:generate   # generate migration after schema changes
npm run db:migrate    # apply migrations
npm run deploy        # deploy to Cloudflare
npm run cf-typegen    # regenerate worker types
```

## Endpoints

### Auth (better-auth)

- `POST /auth/sign-in/email` — sign in with email/password
- `POST /auth/sign-up/email` — create account (currently enabled)

### License API (tRPC at `/trpc`)

**Public:**
- `POST /trpc/checkLicense` — body: `{"licenseKey":"...","instanceId":"uuid"}` — returns `{valid: true/false}`, activates if available
- `GET /trpc/checkAvailable?input={"licenseKey":"..."}` — returns `{available: true/false}`

**Admin (requires session cookie):**
- `GET /trpc/list` — list all licenses
- `POST /trpc/create` — body: `{"licenseKey":"..."}` — create license
- `POST /trpc/revoke` — body: `{"id":"uuid"}` — revoke license

### Stripe webhook

- `POST /stripe/webhook` — Stripe webhook endpoint for `checkout.session.completed` and `checkout.session.async_payment_succeeded`
- Required API env vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID`
- Public extension build env: `VITE_STRIPE_PAYMENT_LINK_URL`
