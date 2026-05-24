# Decision: Initial Architecture

**Date:** 2025-01-01
**Status:** Accepted

## Context

Starting a new task manager app. Need to decide on the full technology stack and database schema before writing any code.

## Decision

Using the full BootstrapOS stack:
- TypeScript + Next.js for frontend (self-documenting, Claude reads types accurately)
- Hasura for GraphQL backend (auto-generates API from schema, zero backend code)
- Turso for database (free tier, SQLite-based, edge-ready)
- Vercel for deployment (auto-deploys from GitHub, free tier)

Schema follows the BootstrapOS schema design principles:
- Every object gets its own table
- Foreign keys on the "many" side of relationships
- Junction table (project_members) for many-to-many
- No nullable fields that should always have a value

## Reasoning

This stack costs $0-1/month to run until real traffic arrives. Hasura eliminates all backend engineering. TypeScript makes Claude dramatically more accurate. The schema is clean enough to support all planned features without modification.

## Consequences

All API calls go through Hasura GraphQL. No custom API routes unless Hasura cannot handle the use case. All secrets in .env.local. Schema changes via Hasura migrations, never destructive edits.
