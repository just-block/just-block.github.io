---
name: publish-release
description: Publish a new version of the Chrome extension to the Chrome Web Store. Use when the user asks to release, publish, or ship a new extension version.
---

# Publish release

Releases run in CI (`.github/workflows/release-extension.yml`), triggered by an `ext-vX.Y.Z` tag.

1. Make sure everything to ship is committed and pushed to `main`, and the working tree is clean.
2. Run `pnpm -F extension release` (patch bump; pass `minor` or `major` when the user asks). It computes the next version from the latest `ext-v*` tag and pushes the new tag.
3. Watch the run with `gh run watch $(gh run list --workflow=release-extension.yml --limit 1 --json databaseId -q '.[0].databaseId')`. It builds, uploads to the Chrome Web Store, submits for review and creates a GitHub release with the zip.
4. Report the version and the run result. The store review itself happens on Google's side.

To check Chrome Web Store access without publishing, run `gh workflow run release-extension.yml` (dry run).
