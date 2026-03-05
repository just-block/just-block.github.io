# Release process

1. Bump `"version"` in `public/manifest.json` (e.g. `"1.0.11"` → `"1.0.12"`)
2. Run `npm run build:prod:zip` — builds the extension and creates `justBlock.zip` in the project root
3. The Chrome Web Store developer console opens automatically after the build
4. Click on the extension row ("Block website Chrome - Just Block") to go inside the listing
5. Click **Package** in the left sidebar
6. Click **Upload new package** and drag `justBlock.zip` from Finder onto the upload area
7. Click **Submit for review**
