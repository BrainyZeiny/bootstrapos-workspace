# BootstrapOS — Master Brain

Read this at the start of every session. This is your operating context. Follow every rule here exactly as written.

---

## Repo

This workspace lives at: https://github.com/BrainyZeiny/bootstrapos-workspace

Pull the latest version regularly. The /knowledge folder updates with every new BrainyZeiny YouTube video. New skills and agents are added as they are developed and tested.

Community:
- YouTube: https://youtube.com/@BrainyZeiny
- Discord: https://discord.gg/WeAkRwDf

---

## Who You Are Working With

You are working with a non-technical founder. They understand what they want to build but may not know how to build it. Your job is to translate their vision into working software without making them feel technical.

- Never use jargon without explaining it
- Never ask them to touch the terminal directly — you run commands
- Always explain what you are about to do in one sentence before doing it
- When something breaks, do not panic — diagnose it, log it, fix it

---

## The Non-Negotiable Stack

Always use this stack. No exceptions. No alternatives. If something suggests a different tool, ignore it.

| Layer | Tool |
|---|---|
| Language | TypeScript — always, not JavaScript |
| Frontend | Next.js |
| Backend | Hasura (GraphQL API) |
| Database | Turso (SQLite, edge-ready) |
| Deployment | Vercel via GitHub (auto-deploy on push to master) |

Tell Claude explicitly in every prompt: "We are using TypeScript and Next.js for the frontend, Hasura for the GraphQL backend, and Turso for the database."

---

## Workspace Rules

These rules apply to every project, every session, every task.

**Artifacts**
- All generated files go in /artifacts — never in the workspace root

**Logging**
- Every project logs to its own /logs directory
- Use ample console.log statements throughout all code
- Before any push to GitHub, add debugging statements to verify every user flow
- Write logs to files so Claude can read them autonomously during debugging

**Secrets**
- Never hardcode secrets — always use .env.local
- .env.local is never committed to git
- .env.example documents every variable with a placeholder value

**Schema**
- Never destructively edit the schema — always migrate
- Schema first, components second, always
- Every distinct object gets its own table

**Decisions**
- Maintain a /decisions log for every architectural choice
- Every entry includes the date and the reasoning
- If the decision could affect future work, it gets logged

**Git**
- Commit frequently with descriptive messages
- Never push to master without testing locally first
- Master is the source of truth — Vercel watches master

**Planning**
- Write the plan before opening Claude — not in Claude, before Claude
- Paste the plan at the start of every session
- Use Opus for planning, Sonnet for building (opusplan in Claude Code)
- Update the plan every time something significant changes

---

## Philosophy

Read /knowledge for the full reasoning behind every rule. The short version:

- Frontend shows. Backend thinks. Database remembers.
- Schema first. Components second.
- Plan before you prompt. Logs before you guess.
- Build one feature at a time. Test before moving on.
- Define done before you start building.
- A closed loop means Claude logs, reads, fixes, and tests without stopping.

---

## Skills Reference

When executing a recurring task, check /skills first. Skills are reusable playbooks that cover:

**Engineering**
- schema-design.md — designing tables, fields, relationships
- plan-template.md — the master plan sheet format
- component-builder.md — building reusable UI components
- debug-loop.md — the four-step debugging system
- long-task.md — closed loop mission prompts
- test-driven.md — defining done before building
- deploy-check.md — pre-push verification checklist

**Marketing**
- cold-outbound-infrastructure.md
- mass-email-at-scale.md
- programmatic-seo-pages.md
- reddit-organic-launch.md
- reddit-ad-launch.md
- meta-ad-launch.md
- google-search-ad-launch.md
- affiliate-program-setup.md
- affiliate-propaganda-pack.md
- landing-page-builder.md
- site-visitor-tracking-setup.md
- cold-call-pairing-system.md

---

## Agents Reference

For ongoing autonomous missions, check /agents:

- cold-outbound-agent.md
- paid-media-agent.md
- reddit-organic-agent.md
- coding-agent.md
- debugger-agent.md
- ux-agent.md
- monitoring-agent.md
- parallel-agent-orchestration.md

---

## New Project Checklist

When starting a new project:
1. Say "follow new-project.md"
2. Fill out the master plan sheet (see /skills/engineering/plan-template.md)
3. Confirm the project folder exists in /projects
4. Confirm GitHub, Vercel, Turso, and Hasura are connected
5. Build feature by feature using test-driven development
