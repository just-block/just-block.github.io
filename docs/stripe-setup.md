# Stripe one-off licenses

## Runtime env

Local API development uses `packages/api/.dev.vars`:

```ini
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_1TZ3I0Dv3kWHwKUqQK1IVScb
ALLOWED_ORIGINS=http://localhost:10274,chrome-extension://jbclpnhceoikcflgfdlfonceofcbjpgd
```

Production Worker secrets:

```bash
cd packages/api
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET
wrangler secret put STRIPE_PRICE_ID
wrangler secret put ALLOWED_ORIGINS
```

Extension build env is committed in `packages/extension/.env.development` and
`packages/extension/.env.production`. The build scripts select them by Vite mode:
`build:dev` uses `development`; `build:prod` uses `production`.

```ini
VITE_API_URL=https://just-block-api.7gorbachevm.workers.dev
VITE_STRIPE_PAYMENT_LINK_URL=https://buy.stripe.com/...
```

Local webhook testing with the Stripe CLI:

```bash
stripe listen --forward-to localhost:58829/stripe/webhook
```

Copy the `whsec_...` value printed by the CLI into `STRIPE_WEBHOOK_SECRET`.

Local webhook testing with ngrok:

```bash
npm run dev:stripe
```

This starts the app and exposes the API at:

```txt
https://causal-magpie-closing.ngrok-free.app/stripe/webhook
```

## Fulfillment flow

1. Extension opens the public Stripe Payment Link.
2. Stripe sends `checkout.session.completed` to `/stripe/webhook`.
3. API verifies the webhook signature.
4. API retrieves the Checkout Session with line items from Stripe.
5. API only fulfills sessions with `mode=payment`, `payment_status=paid`, and `STRIPE_PRICE_ID`.
6. API creates one available license for the unique `stripe_checkout_session_id`.
7. API emails the key to the Stripe customer email.
8. User activates the key in the extension.
