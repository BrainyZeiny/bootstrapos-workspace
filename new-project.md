# New Project — Start a New App

Say this to Claude to run this script:

> Follow new-project.md

Claude will walk you through building the foundation of your new app. By the end you will have a running Next.js app deployed to Vercel, connected to a Turso database and Hasura backend, and the first feature under construction.

---

## The New Project Prompt for Claude

Paste this into Claude Code:

```
I want to start a new project. Follow new-project.md. Work through every step in order. Ask me questions when you need answers. Do not move to the next step until the current step is complete and verified.

Step 1 — Fill out the master plan sheet.
Ask me the following questions one at a time and wait for my answer before asking the next:
1. What is the name of this project?
2. Who is this app for and what problem does it solve? (One paragraph)
3. What are the main objects in this app? (List every noun — users, posts, products, orders, etc.)
4. For each object, what information do we need to store?
5. How do the objects relate to each other? (One user has many posts? Many students, many activities?)
6. What types of users will use this app and what does each one come to do?
7. What are the four or five features we are building first, in order?
8. What are we explicitly NOT building yet?
9. What does done look like for each feature? (List testable outcomes)

Step 2 — Create the project folder.
Create /projects/[project-name] with this structure:
- CLAUDE.md (project-level rules)
- /logs
- /decisions
- /src/components
- /src/pages
- /src/lib
- .env.example
- .env.local (gitignored)
- .gitignore

Step 3 — Initialize the Next.js app with TypeScript.
Run: npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
Verify it runs with: npm run dev

Step 4 — Connect to GitHub.
Follow /setup-agents/github-setup.md for this project directory.

Step 5 — Connect to Vercel.
Follow /setup-agents/vercel-setup.md for this project.

Step 6 — Create the Turso database.
Follow /setup-agents/turso-setup.md. Save the database URL and auth token to .env.local.

Step 7 — Connect Turso to Hasura.
Follow /setup-agents/hasura-setup.md. Connect the Turso database. Add the Hasura endpoint and admin secret to .env.local.

Step 8 — Design the schema in Hasura.
Check the schema templates in /reference/schema-templates/ for a starting point. If this app is a blog, marketplace, social feed, dashboard, or SaaS with billing, there is a ready-made schema to start from. Based on the master plan and any relevant template, create every table in Hasura with the correct fields and relationships. Verify each table appears in the GraphQL explorer before moving on.

Step 9 — Begin building feature one.
Use /skills/engineering/test-driven.md and /skills/engineering/long-task.md to define done and start the closed-loop build. Do not stop until feature one is complete and all tests pass.

At the end of each step, print a confirmation. Do not skip steps or combine them. Ask me for any information you need. If something fails, fix it before moving on.
```

---

## What Done Looks Like After Step 1

You will have a written master plan that looks like this:

```
PROJECT: [Name]

Function: [One paragraph about who it is for and what problem it solves]

Schema:
- Table 1: fields, types, relationships
- Table 2: fields, types, relationships

Stack: TypeScript, Next.js, Hasura, Turso, Vercel

User flows:
- User type 1: [what they come to do]
- User type 2: [what they come to do]

Features in order:
1. [Feature one]
2. [Feature two]
3. [Feature three]
4. [Feature four]

Not building yet:
- [List]

Done means:
1. [Testable outcome one]
2. [Testable outcome two]
3. [Testable outcome three]
```

Save this plan. It goes at the top of every Claude session for this project.

---

## After Your First Feature

Once feature one is done and verified:

1. Push to GitHub (Vercel auto-deploys)
2. Test on production URL
3. Update the master plan: mark feature one done, add feature two to the active list
4. Say: "Continue with the plan. Build feature two."

Repeat until the product is live and customers are using it.
