# Running locally

## Install dependencies

From the repo root:

```bash
pnpm install
```

This installs dependencies for all packages.

## Landing page

```bash
pnpm run -F=landing dev
```

Opens at http://localhost:11052.

To preview the production static build:

```bash
pnpm run -F=landing build && pnpm run -F=landing preview
```

## Extension

### Dev mode (browser preview, no Chrome APIs)

```bash
pnpm run -F=extension dev
```

Opens at http://localhost:10274. Useful for UI work — Chrome extension APIs won't be available.

### Load as Chrome extension

1. Build the extension:

```bash
pnpm run -F=extension build:dev
```

2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer mode" (top right toggle)
4. Click "Load unpacked"
5. Select the `packages/extension/dist` folder
6. The extension icon appears in the toolbar — click it to open
7. After code changes, rebuild and click the reload button on the extension card
