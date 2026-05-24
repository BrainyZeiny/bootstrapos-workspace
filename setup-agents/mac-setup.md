# Setup Agent: Mac Setup

## What This Does

Installs every development tool needed for BootstrapOS on a Mac. Run this once on a new machine. Claude handles everything — you do not touch the terminal.

## The Prompt

Paste this into Claude Code:

```
I am setting up a brand new Mac for BootstrapOS development. Install and configure everything in order. Verify each step before moving to the next. Fix anything that fails. Do not stop until every item is installed and verified.

Install in this exact order:

1. Homebrew (Mac package manager)
   Command: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   Verify: brew --version

2. Node.js and npm via Homebrew
   Command: brew install node
   Verify: node --version && npm --version
   Required: Node 20+ 

3. TypeScript globally via npm
   Command: npm install -g typescript
   Verify: tsc --version

4. Git via Homebrew
   Command: brew install git
   Verify: git --version

5. Cursor editor
   Action needed from me: Download from cursor.sh and install
   Tell me when to do this and what to look for

6. GitHub SSH setup
   Command sequence:
   - git config --global user.name "My Name" (ask me for my name first)
   - git config --global user.email "my@email.com" (ask me for my email first)
   - ssh-keygen -t ed25519 -C "my@email.com"
   - eval "$(ssh-agent -s)"
   - ssh-add ~/.ssh/id_ed25519
   Print the public key so I can add it to GitHub.
   Walk me through exactly where to click on GitHub to add it.
   Verify: ssh -T git@github.com

7. Claude Code via npm
   Command: npm install -g @anthropic-ai/claude-code
   Verify: claude --version

After every step: print a confirmation with the version number. At the end: print a complete summary of everything installed.
```

## What Done Looks Like

```
Mac setup complete.

Homebrew: 4.x.x
Node.js: v20.x.x
npm: 10.x.x
TypeScript: 5.x.x
Git: 2.x.x
Cursor: installed
GitHub SSH: connected (ssh -T git@github.com returned "Hi username!")
Claude Code: x.x.x

Your Mac is ready to build.
```
