# Running locally

## Install dependencies

From the repo root:

```bash
npm install
```

This installs dependencies for all packages.

## Landing page

```bash
npm run dev -w packages/landing
```

Opens at http://localhost:3000.

To preview the production static build:

```bash
npm run build-and-serve -w packages/landing
```

## Extension

### Dev mode (browser preview, no Chrome APIs)

```bash
npm run dev -w packages/extension
```

Opens at http://localhost:5173. Useful for UI work — Chrome extension APIs won't be available.

### Load as Chrome extension

1. Build the extension:

```bash
npm run build:dev -w packages/extension
```

2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer mode" (top right toggle)
4. Click "Load unpacked"
5. Select the `packages/extension/dist` folder
6. The extension icon appears in the toolbar — click it to open
7. After code changes, rebuild and click the reload button on the extension card
