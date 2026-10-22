---
name: publish-release
description: Publish a new version of the Chrome extension to the Chrome Web Store. Use when the user asks to release, publish, or ship a new extension version.
---

# Publish release

Work autonomously through the steps. Drive the browser with computer-use (cmux-cua). Stop before the final **Submit for review** confirmation and leave that click to the user.

1. Bump `"version"` in `packages/extension/public/manifest.json` (patch bump unless told otherwise, e.g. `"1.1.1"` → `"1.1.2"`). Commit and push the bump.
2. Run `pnpm run build:prod:zip` in `packages/extension`. It builds the extension, creates `packages/extension/justBlock.zip` and opens the Chrome Web Store developer console on the extension's **Package** page.
3. If the console didn't land there, click the extension row ("Block website Chrome - Just Block") and then **Package** in the left sidebar.
4. Click **Upload new package** and upload `packages/extension/justBlock.zip` (drag it from Finder onto the upload area, or pick it via the file dialog).
5. Check that the uploaded package shows the new version, then open the **Submit for review** dialog and stop. Tell the user it's ready for them to confirm.
