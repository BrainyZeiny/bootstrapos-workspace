# Module 2 — How to Set Up BootstrapOS

## What This Module Covers

Before you write a single line of code you need your environment set up correctly. Most founders skip this step and spend days debugging problems that were never about their code — they were about their setup.

This module walks through getting BootstrapOS running on your machine from scratch. By the end you have Claude Code open, the BootstrapOS workspace cloned, GitHub connected, and the full stack ready to build anything.

Lessons cover:

1. **How to set up Claude Code and clone the BootstrapOS workspace** — Downloading the Claude app, understanding the three modes (Chat, Claude Code, Cowork), cloning the repo, and understanding what is inside it.

2. **Mac setup** — One prompt that installs Homebrew, Node.js, TypeScript, Git, Cursor, GitHub SSH keys, and Claude Code. Verified end-to-end. Closed loop — Claude does not stop until every tool is confirmed.

3. **Windows setup** — Same as Mac but starting with WSL2 + Ubuntu. The translation layer that makes every developer tool work on Windows.

4. **Localhost vs Production** — Why your app lives in two places. What localhost means. What production means. The rule: build locally, test locally, push when it works.

5. **How to set up GitHub** — Code is just text files. GitHub is cloud storage for text files. Vercel watches GitHub. One push, automatic deploy. The pipeline explained simply.

## Key Concepts

**The three modes of Claude:**
- Chat: back and forth conversation, great for questions
- Claude Code: Claude has access to your file system, can run commands, build autonomously — this is where you live
- Cowork: desktop automation tool, useful but Claude Code does everything Cowork does and more

**The workspace structure:**
- CLAUDE.md: master brain, Claude reads this every session
- /knowledge: the course, the why behind every rule
- /skills: tactical playbooks, the how for every recurring task
- /agents: autonomous missions
- /setup-agents: one-time setup scripts
- /reference: templates
- /projects: your actual apps
- /artifacts: all generated files land here

**The pipeline:**
Your computer → push to GitHub → Vercel sees it → deploys to production → world sees it

**Master is sacred.** Only push to master when something is working and tested. The moment it hits master it goes live.

## Scripts

Full lesson scripts for this module are available in the BootstrapOS course.
