# KodNestCareers Monorepo (Scaffold)

This repository contains the local-first KodNestCareers platform, organized as a pnpm workspace with a modular monolith plus worker architecture.

## Quick local setup (scaffold)

1. Install Node.js 20+ and pnpm.
2. Clone this repository and navigate to the root.
3. Copy `.env.example` to `.env` and adjust values if needed.
4. Start local infrastructure:

   ```bash
   docker compose -f docker-compose.local.yml up -d
   ```

5. Install dependencies (once packages are defined):

   ```bash
   pnpm install
   ```

6. Run apps (once implemented):

   ```bash
   pnpm dev
   ```

## Structure (high level)

- `apps/web` - Next.js web app (auth, dashboard, API routes).
- `apps/worker` - Background worker, queues, and schedulers.
- `packages/db` - Prisma schema, client, and repositories.
- `packages/modules` - Domain modules (auth-profile, job-tracker, readiness, resume, notifications, analytics).
- `packages/ai-gateway` - AI routing, providers, and prompt cache.
- `packages/events` - Event types, outbox, and publishers.
- `packages/shared` - Shared types, errors, logger, utilities, validators.
- `packages/config` - Environment, feature flags, and security configuration.
- `infra` - Docker and helper scripts for local environments.
- `docs` - PRD, architecture notes, runbooks, and testing strategy.
- `assets` - Brand and font assets.
- `output` - Generated artifacts (for example PDFs).
- `tmp` - Temporary files (for example intermediate PDFs).

This scaffold intentionally avoids business logic and heavy dependencies. It is a starting point for implementing the full KodNestCareers platform.
# KodNestCareers Monorepo

This is the local-first KodNestCareers monorepo scaffold, structured as a modular monolith with a worker.

## Prerequisites

- Node.js and pnpm
- Docker and Docker Compose

## Install dependencies

```bash
pnpm install
```

## Run local infrastructure

```bash
docker compose -f docker-compose.local.yml up -d
```

## Apps

- Web app: Next.js app in `apps/web`
- Worker: background worker in `apps/worker`

## Notes

- This scaffold contains only minimal placeholder files and no business logic yet.

