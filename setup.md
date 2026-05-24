# Setup — First-Time Machine Configuration

**Prerequisite:** You should have already cloned this repo from https://github.com/BrainyZeiny/bootstrapos-workspace. If you have not, run `git clone https://github.com/BrainyZeiny/bootstrapos-workspace.git` first, then open the folder in Claude Code.

Say this to Claude to run this script:

> Follow setup.md

Claude will detect your operating system and run the appropriate setup agent. You do not need to touch the terminal. Claude handles everything. You only need to click in a browser when Claude tells you to.

---

## What Gets Set Up

By the end of this script you will have:

- All developer tools installed and verified
- Git configured and connected to GitHub
- A Vercel account connected to your GitHub
- A Turso account with your first database ready
- A Hasura Cloud account ready to connect
- Claude Code installed and ready to build

---

## The Setup Prompt for Claude

Paste this into Claude Code:

```
Detect my operating system. If I am on a Mac, follow /setup-agents/mac-setup.md. If I am on Windows, follow /setup-agents/windows-setup.md. Work through every step in order. Verify each step before moving to the next. Fix anything that fails before continuing. When the machine setup is complete, continue with:

1. /setup-agents/github-setup.md
2. /setup-agents/vercel-setup.md
3. /setup-agents/turso-setup.md
4. /setup-agents/hasura-setup.md

Do not stop until every tool is installed, every account is connected, and you can confirm the full stack is ready. Print a final summary when everything is done.
```

---

## What Done Looks Like

Claude will print a final summary that looks like this:

```
Setup complete. Here is what is ready:

Machine tools:
- Homebrew (Mac) / WSL2 + Ubuntu (Windows): installed
- Node.js: v20.x.x
- TypeScript: 5.x.x
- Git: 2.x.x
- Cursor: installed
- Claude Code: installed

Accounts connected:
- GitHub: connected, SSH key added
- Vercel: connected to GitHub, auto-deploy enabled
- Turso: account active, database URL and token saved
- Hasura: project created, endpoint ready

Your stack is ready to build.
```

If anything in that summary is missing, tell Claude and it will fix it.

---

## After Setup

Once setup is complete, you are ready to start your first project. Say:

> Follow new-project.md
