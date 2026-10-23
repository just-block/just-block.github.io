---
name: publish-release
description: Publish a new version of the Chrome extension to the Chrome Web Store. Use when the user asks to release, publish, or ship a new extension version.
---

# Publish release

1. Make sure everything to ship is committed on `main` and the working tree is clean.
2. Run `pnpm -F extension release` (patch bump; pass `minor` or `major` when the user asks). It bumps the manifest version, commits, tags `ext-vX.Y.Z` and pushes.
3. Watch CI: `gh run watch $(gh run list --workflow=release-extension.yml --limit 1 --json databaseId -q '.[0].databaseId') --exit-status`. It builds, uploads to the Chrome Web Store API (v2, via Workload Identity Federation), submits for review and creates the GitHub release.
4. Report the version and the run result. The store review happens on Google's side.
