# BootstrapOS

**The operating system for bootstrapped founders.** Clone once. Use forever.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-BrainyZeiny-red?logo=youtube)](https://youtube.com/@BrainyZeiny)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-5865F2?logo=discord&logoColor=white)](https://discord.gg/WeAkRwDf)

Hey! Welcome to the BootstrapOS repo. This is the companion workspace to the [BrainyZeiny YouTube channel](https://youtube.com/@BrainyZeiny). If you are here, you are probably a founder who wants to build real software without a technical co-founder. You are in the right place.

---

## What Is BootstrapOS

BootstrapOS is a pre-configured [Claude Code](https://claude.ai/code) workspace that gives non-technical founders everything they need to build, launch, and grow a real software product. It is not a framework. It is not a boilerplate. It is an operating system for how you work.

Inside this repo you get a philosophy library (the "why" behind every decision), a skills library (tactical playbooks for recurring tasks), autonomous agents (missions that run without you), and a project structure that keeps everything clean as your product grows.

This is the exact system behind [RocketDevs](https://rocketdevs.com) ($9.3M ARR built almost entirely on paid ads) and [Hivemind](https://hivemindai.com) ($3.4M ARR in under six months through affiliate marketing and cold outbound). The marketing playbooks are the ones that drive $90K/month on Reddit at 18x ROAS and $35K/month on Meta at 16x lifetime ROAS. The engineering skills are the ones that keep a non-technical founder shipping production-grade software without touching the terminal.

You clone this repo. You open it in Claude Code. You say one sentence. And you start building.

---

## The Philosophy

> **Frontend shows. Backend thinks. Database remembers.**
>
> Schema first. Components second. Plan before you prompt. Logs before you guess.
>
> Build one feature. Test it. Then build the next.

Every rule in this workspace exists because we learned the hard way what happens when you break it. The philosophy is simple. Follow it and Claude becomes dramatically more useful. Ignore it and you end up in the same hole every vibe coder ends up in.

---

## The Stack

| Layer | Tool | Why |
|---|---|---|
| Language | TypeScript | Self-documenting. Claude reads types and makes fewer mistakes. Always TypeScript, never JavaScript. |
| Frontend | Next.js | The most popular React framework. Works with Vercel out of the box. |
| Backend | Hasura (GraphQL) | Reads your schema and generates your entire API automatically. Zero backend code. |
| Database | Turso | SQLite-based, edge-ready, free tier with 9 billion row reads/month. Your database costs $0. |
| Deployment | Vercel | Auto-deploys from GitHub on every push. Free tier covers everything until you have real traffic. |

**Total cost to run in production: under $10/month.** Usually $0-1 until you have paying customers.

This stack is non-negotiable. It is the one thing in this workspace that does not change. Everything else is subject to iteration, but the stack has been proven across multiple companies and millions in revenue.

---

## What's Inside

> **Note:** This file structure is subject to change as the project evolves. Watch the [BrainyZeiny channel](https://youtube.com/@BrainyZeiny) for updates, or pull the latest version of this repo.

```
bootstrapos-workspace/
  README.md              You are here
  CLAUDE.md              The master brain -- Claude reads this every session
  setup.md               First-time machine setup script
  new-project.md         Start a new app script
  CONTRIBUTING.md        How to contribute to this project
  LICENSE                MIT

  /knowledge/            The course (8 modules)
    /engineering/        Vibe coding fundamentals, setup, hiring
    /marketing/          Choose your path, cold outreach, paid ads, affiliate, content

  /skills/               Tactical playbooks (19 skills)
    /engineering/        Schema design, planning, components, debugging, testing, deploy
    /marketing/          Cold outbound, mass email, SEO, Reddit, Meta, Google, affiliate, landing pages

  /agents/               Autonomous missions (11 agents)
                         Coding, debugging, UX, cold outbound, paid media, Reddit,
                         content, monitoring, testing, affiliate outreach, orchestration

  /setup-agents/         One-time setup scripts (6 scripts)
                         Mac, Windows, GitHub, Vercel, Turso, Hasura

  /reference/            Templates and starting points
    /schema-templates/   Blog, marketplace, social feed, dashboard, SaaS with billing
    /component-library/  Table, form, modal, nav bar, card grid
    /ad-templates/       Ad copy templates (growing)
    /email-templates/    Cold email templates (growing)
    /landing-page-templates/  Landing page structures (growing)

  /projects/             Your actual apps live here
    /example-project/    Working reference app (TaskFlow) with full stack demo

  /artifacts/            All Claude-generated files land here -- never in root
```

**Knowledge** is the "why." Claude reads these modules to understand the reasoning behind every decision. This is the course content from the BrainyZeiny YouTube channel, and it updates as new videos are released.

**Skills** are the "how." Reusable playbooks Claude references whenever it needs to execute a specific recurring task. Each skill has a prompt you can copy-paste, step-by-step instructions, and a definition of what "done" looks like.

**Agents** are autonomous missions. Unlike skills (which are referenced repeatedly), agents run on a schedule or are triggered by an event. They execute ongoing work without you in the loop.

**Setup agents** are one-time scripts. They run once to configure a tool or environment. Every step is written so a non-technical founder can follow it with zero prior knowledge.

**Reference** is your template library. Schema patterns so you never design a database from scratch. Component templates so you never build the same UI twice. Starting points you copy and modify.

---

## Get Started

### Step 1: Clone the repo

```bash
git clone https://github.com/BrainyZeiny/bootstrapos-workspace.git
cd bootstrapos-workspace
```

### Step 2: Open in Claude Code

Open the Claude app (download from [claude.ai](https://claude.ai) if you do not have it). Navigate to Claude Code. Open the `bootstrapos-workspace` folder.

If you have never used Claude Code before: it gives Claude access to your file system so it can read files, create files, run commands, and build your entire app autonomously. This is where you will spend most of your time.

### Step 3: Say this to Claude

```
Follow setup.md
```

That is it. Claude will:
- Detect your operating system (Mac or Windows)
- Install every developer tool you need (Node.js, TypeScript, Git, Claude Code, etc.)
- Walk you through setting up GitHub, Vercel, Turso, and Hasura accounts
- Save all your credentials securely
- Print a confirmation when everything is ready

You do not touch the terminal. Claude handles everything. You just click where it tells you to click in the browser.

### What "done" looks like

When setup is complete, Claude prints a summary confirming every tool is installed and every account is connected. If anything is missing, tell Claude and it will fix it.

---

## Starting Your First Project

Once setup is done, say:

```
Follow new-project.md
```

Claude will ask you 9 questions to build your master plan:

1. What is the name of this project?
2. Who is this app for and what problem does it solve?
3. What are the main objects in this app? (users, posts, products, orders, etc.)
4. For each object, what information do you need to store?
5. How do the objects relate to each other?
6. What types of users will use this app and what does each one come to do?
7. What are the 4-5 features you are building first, in order?
8. What are you explicitly NOT building yet?
9. What does "done" look like for each feature?

After you answer, Claude creates the project folder, initializes Next.js with TypeScript, connects GitHub and Vercel, creates a Turso database, connects it to Hasura, and starts building your first feature.

Check out the [example project](projects/example-project) (TaskFlow) to see what a finished project structure looks like.

---

## How to Run Things

You do not memorize terminal commands. You talk to Claude. Here is what to say for each workflow:

| What you want to do | What to say to Claude |
|---|---|
| Set up your machine from scratch | `Follow setup.md` |
| Start a new app | `Follow new-project.md` |
| Build the next feature | Paste your master plan + `Continue with the plan. Build feature [N].` |
| Fix a bug | `Something is broken in [flow]. Add logs, find the bug, and fix it. Do not stop until it works.` |
| Run a deploy check before pushing | `Run a deploy check before I push. Test every flow we changed.` |
| Launch cold outbound | `Follow /skills/marketing/cold-outbound-infrastructure.md to set up cold email.` |
| Launch Reddit ads | `Follow /skills/marketing/reddit-ad-launch.md` |
| Launch Meta ads | `Follow /skills/marketing/meta-ad-launch.md` |
| Set up an affiliate program | `Follow /skills/marketing/affiliate-program-setup.md` |
| Build a landing page | `Follow /skills/marketing/landing-page-builder.md` |

The skills and agents handle the complexity. You just tell Claude what you want to do in plain English.

---

## Contributing

This is a community project. If you have built something cool with BootstrapOS, found a bug, or have an idea for a new skill or agent, we want to hear from you.

**What is welcome:**
- New skills (engineering or marketing playbooks)
- New agents (autonomous missions)
- New templates (schemas, components, ads, emails, landing pages)
- Bug fixes and documentation improvements
- New knowledge modules backed by real experience

**What requires discussion first:**
- Changes to the core stack (TypeScript, Next.js, Hasura, Turso, Vercel)
- Changes to CLAUDE.md philosophy or workspace rules
- Adding new tools or dependencies
- Restructuring the file layout

Read the full [Contributing Guide](CONTRIBUTING.md) for content standards, PR process, and how to format new skills and agents.

---

## Requesting Features / Reporting Issues

We have issue templates set up to make this easy:

- **Bug Report** -- something is broken or not working as expected
- **Feature Request** -- suggest a new feature or improvement
- **New Skill or Agent Proposal** -- propose a new playbook or autonomous mission

Click the **Issues** tab and pick the template that fits. If something does not work, do not suffer in silence. Open an issue. The more detail you provide, the faster we can fix it.

---

## Community

This project is built in public. Watch the videos. Join the Discord. Build with us.

- **YouTube:** [BrainyZeiny](https://youtube.com/@BrainyZeiny) -- the full BootstrapOS course, live builds, and updates
- **Discord:** [Join the community](https://discord.gg/WeAkRwDf) -- ask questions, share what you are building, get help
- **RocketDevs:** [rocketdevs.com](https://rocketdevs.com) -- vetted remote developers when you are ready to hire

The `/knowledge` folder updates every time a new video drops. Pull the latest version of this repo and Claude instantly has the new content.

---

## License

[MIT](LICENSE) -- free to use, modify, and distribute.

Built by the BrainyZeiny community.
