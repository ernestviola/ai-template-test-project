# Agent Instructions

## 1. Project Overview

Toy CSV parser — testing the AI dev harness template. Node/TypeScript, Vitest.

## 2. Build and Test Commands

No build step — Vitest runs TypeScript directly, nothing to compile separately.

Test suite: `npx vitest run`

No lint command configured yet — add one (e.g. ESLint) when the project grows past a single file; leave `LINT_CMD` blank until then.

```sh
TEST_CMD="npx vitest run"
LINT_CMD=""
```

## 3. Code Style Guidelines

No style guide beyond language defaults yet — this is a single-file toy project. Revisit once there's more than one module or a linter is added.

## 4. Testing Instructions

- Full suite: `npx vitest run`
- Single test file: `npx vitest run tests/parser.test.ts`
- Single test by name: `npx vitest run -t "parses a simple CSV"`
- No mocking needed — `parseCSV` is a pure function with no external dependencies.

## 5. Boundaries

Do not modify any of the following without explicit confirmation from the user:

- `.devcontainer/` — container sandbox config; changes here affect the security boundary
- `.githooks/` — enforcement hooks; changes here weaken the harness
- `hooks/` — hook scripts and domain allowlist
- `docker-compose.yml` — network isolation config
- `.gitignore` — modifying this could expose secrets
- CI/CD config files (`.github/`, `.gitlab-ci.yml`, etc.)
- Infrastructure or deployment files

## 6. Security Considerations

- Never read, print, or commit files matching: `.env`, `*.env`, `*.pem`, `*.key`, `*.p12`, `*.pfx`, `*secret*`, `*credential*`, `*token*`
- Treat any file matching the above patterns as sensitive even if the contents look benign
- Always run inside the devcontainer — do not bypass it to work directly on the host
- To extend network access, add a domain to `hooks/allowed-domains.txt` and rebuild the proxy container (`docker compose build proxy`) — do not modify `tinyproxy.conf` directly

## 7. Commit and PR Guidelines

- Branch naming: `type/short-description` (e.g. `feat/add-auth`, `fix/null-pointer`)
- Commits: conventional commits format (`feat:`, `fix:`, `chore:`, `docs:`, etc.)
- Every AI-assisted change gets logged in `docs/CHANGES.md` after review
