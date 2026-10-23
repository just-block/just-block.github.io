---
name: production-env
description: Add or edit production API env vars or secrets (packages/api/.env.production, dotenvx). Use when changing production config, secrets or Cloudflare Worker env.
---

# Production env

Production API env lives in `packages/api/.env.production` and is encrypted with dotenvx.

To add or edit production env vars:
1. Temporarily put the real plaintext values directly in `packages/api/.env.production`.
2. Keep simple one-line values unquoted unless quotes are actually part of the value.
3. Run `pnpm run -F=api production:env:encrypt`.
4. Verify with `pnpm run -F=api production:env:decrypt`; decrypted values used by CI must not include wrapping quotes.

Do not use `dotenvx set` for this repo. Quoted encrypted values like `KEY="encrypted:..."` decrypt to quoted plaintext in GitHub Actions, and those quotes become part of the Cloudflare Worker secret value.
