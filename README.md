# BootstrapOS Workspace

The operating system for bootstrapped founders. Clone once. Use forever.

BootstrapOS is a pre-configured Claude Code workspace that combines a philosophy library, a skills library, autonomous agents, and a project structure designed to take non-technical founders from zero to $1M without a technical co-founder.

No jargon. No complexity. Everything works by running a single command or saying a single sentence to Claude.

---

## What Is Inside

- **CLAUDE.md** — The master brain. Claude reads this at the start of every session and knows exactly how to work with you.
- **/knowledge** — The course. Every module covering engineering fundamentals and marketing playbooks, so Claude understands the why behind every decision.
- **/skills** — Reusable tactical playbooks for engineering and marketing tasks. Claude references these whenever it needs to execute a specific recurring workflow.
- **/agents** — Autonomous missions that run on a schedule or trigger. Cold outbound, paid media, Reddit, coding, debugging.
- **/setup-agents** — One-time setup scripts for every tool in the stack. Claude follows these so you never touch the terminal directly.
- **/reference** — Schema templates, component templates, ad templates, email templates, and landing page templates. Starting points you copy and modify.
- **/projects** — Where your actual apps live. Every project gets its own folder with its own rules, logs, and decisions log.
- **/artifacts** — Where all Claude-generated files land. Never in root.

---

## Get Started in Three Steps

**Step 1 — Clone the repo**

```bash
git clone https://github.com/rocketdevs/bootstrapos-workspace
cd bootstrapos-workspace
```

**Step 2 — Open in Claude Code**

Open the Claude app. Navigate to Claude Code. Open the bootstrapos-workspace folder.

**Step 3 — Say this to Claude**

```
Follow setup.md
```

Claude will detect your operating system, install everything you need, set up your accounts, and confirm when everything is ready.

---

## The Stack

| Layer | Tool |
|---|---|
| Frontend | TypeScript + Next.js |
| Backend | Hasura (GraphQL) |
| Database | Turso |
| Deployment | Vercel via GitHub |

This stack runs in production for under $10 a month. No credit card required for any of it until you have real traffic.

---

## The Philosophy

Frontend shows. Backend thinks. Database remembers.

Schema first. Components second. Plan before you prompt. Logs before you guess.

Build one feature. Test it. Then build the next.

---

## For RocketDevs

Deployed at [bootstrap-os.rocketdevs.com](https://bootstrap-os.rocketdevs.com)
