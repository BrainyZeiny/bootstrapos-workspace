# Contributing to BootstrapOS

Thanks for wanting to make BootstrapOS better. Whether you have built something cool, found a bug, or have an idea for a new skill or agent, this is how to contribute.

---

## How to Contribute

1. **Fork the repo** on GitHub
2. **Create a branch** from `main` with a clear name:
   - `feature/stripe-billing-skill` for new content
   - `fix/turso-setup-typo` for bug fixes
   - `docs/update-readme` for documentation changes
3. **Make your changes** following the content standards below
4. **Test in Claude Code** by opening the workspace and running through the relevant flows
5. **Submit a pull request** using the PR template

---

## What to Contribute

We welcome contributions in these areas:

**New skills** (engineering or marketing playbooks)
- Add them to `/skills/engineering/` or `/skills/marketing/`
- Follow the existing format (see Content Standards below)
- Every skill should be something a non-technical founder can use with Claude

**New agents** (autonomous missions)
- Add them to `/agents/`
- Follow the existing agent format
- Agents are different from skills: agents run autonomously on a schedule, skills are referenced repeatedly throughout a project

**New templates**
- Schema templates go in `/reference/schema-templates/`
- Component templates go in `/reference/component-library/`
- Ad, email, and landing page templates have placeholder directories ready to fill: `/reference/ad-templates/`, `/reference/email-templates/`, `/reference/landing-page-templates/`

**Bug fixes**
- Found a broken prompt? A missing step? A wrong file path? Fix it and submit a PR.

**Documentation improvements**
- Clearer explanations, better examples, fixed typos

**New knowledge modules**
- Must be backed by real experience or data, not theory
- Add to `/knowledge/engineering/` or `/knowledge/marketing/`

---

## What NOT to Contribute Without Discussion First

Some things require a conversation before a PR. Open an issue to discuss:

- **Changes to the core stack** (TypeScript, Next.js, Hasura, Turso, Vercel) -- the stack is non-negotiable by design
- **Changes to CLAUDE.md philosophy or workspace rules** -- these are foundational and affect every user
- **Adding new tools or dependencies** -- simplicity is a feature, not a limitation
- **Restructuring the workspace layout** -- the file structure is documented in the course and changing it breaks existing instructions

If you are not sure whether something needs discussion first, open an issue. Better to ask than to build something that cannot be merged.

---

## Content Standards

Every file type has a specific format. Follow the existing files as examples.

### Skills must include:
- **What It Is For** -- one paragraph explaining the purpose
- **When to Use It** -- when does someone reach for this skill
- **Step-by-step instructions** -- the exact workflow
- **The prompt to use** -- a copy-paste prompt for Claude
- **What done looks like** -- how to verify it worked

### Agents must include:
- **What It Does** -- what the agent accomplishes
- **When It Runs** -- schedule or trigger
- **What It Needs to Run** -- credentials, APIs, data sources
- **What Done Looks Like After Each Execution** -- verifiable outcomes

### Schema templates must include:
- **Use This For** -- what type of app this schema fits
- **Tables section** -- field name, type, and notes in table format
- **Relationships** -- how tables connect (one-to-many, many-to-many)

### General rules:
- All code must be **TypeScript** (never JavaScript)
- **No jargon without explanation** -- the audience is non-technical founders
- **No hardcoded secrets** in any file
- Markdown headings follow the existing hierarchy (H1 title, H2 sections)
- Keep it practical. Real prompts, real steps, real outcomes. No theory without application.

---

## Pull Request Process

1. **One PR per logical change** -- do not bundle unrelated changes together
2. **Clear title** that describes what you added or fixed
3. **Fill out the PR template** completely
4. **Be responsive to feedback** -- maintainers may request changes
5. PRs will be reviewed as quickly as possible

---

## Issue Guidelines

- Use the provided issue templates (Bug Report, Feature Request, or New Skill/Agent Proposal)
- Be specific -- include what you expected vs. what happened
- For feature requests, explain the **use case**, not just the feature
- For new skills or agents, include whether you have tested it yourself

---

## Code of Conduct

We are building a community of founders helping each other. Be kind, be helpful, and be the kind of person you would want to collaborate with.

Read the full [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Questions?

- Join the [BrainyZeiny Discord](https://discord.gg/WeAkRwDf)
- Watch the [BrainyZeiny YouTube channel](https://youtube.com/@BrainyZeiny) for walkthroughs and updates
