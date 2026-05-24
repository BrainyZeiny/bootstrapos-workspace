# Setup Agent: GitHub Setup

## What This Does

Connects your project to GitHub and wires up automatic deployment to Vercel. Run this at the start of every new project.

## The Prompt

```
Set up GitHub for my project. Work through each step completely before moving to the next.

Step 1: Initialize git in the current project folder
Command: git init
Verify: git status

Step 2: Create .gitignore
Create a .gitignore that ignores:
- node_modules/
- .next/
- .env.local
- .env*.local
- *.log
- .DS_Store
Verify: cat .gitignore

Step 3: Initial commit
git add .
git commit -m "initial commit: project scaffold"

Step 4: Create GitHub repository
Tell me to go to github.com/new and:
- Name: [ask me for the project name]
- Visibility: public (or private — ask me)
- Do NOT initialize with README (we already have one)
Click Create repository. Tell me what to look for.

Step 5: Connect local to remote
Copy the SSH remote URL from GitHub (git@github.com:username/repo.git)
Command: 
git remote add origin [URL I provide]
git branch -M main
git push -u origin main

Step 6: Verify
Tell me to check github.com/username/repo — confirm all files appear.

Print a confirmation when everything is done.
```

## What Done Looks Like

```
GitHub setup complete.

Repository: github.com/[username]/[project]
Branch: main
All project files visible on GitHub
Auto-deploy: ready to connect to Vercel (run vercel-setup.md next)
```

---

## Validation

After completing the setup, run these checks to confirm everything works:

1. **Verify the repo exists on GitHub:** Run `gh repo view --json name,url` — this should print the repo name and URL.
2. **Verify push access:** Run `git push --dry-run` — this should succeed without errors.

## Error Handling

If any step fails, Claude should:
1. Read the error message carefully
2. Check if `gh` CLI is authenticated (`gh auth status`)
3. If SSH fails, fall back to HTTPS authentication
4. If the repo already exists on GitHub, skip creation and verify the remote is set correctly
5. Only ask the user for help if three attempts have failed

### Common Issues and Fixes

**SSH authentication fails**
- Fall back to HTTPS: `git remote set-url origin https://github.com/[username]/[repo].git`
- Then authenticate with: `gh auth login` and select HTTPS when prompted.

**Permission denied (publickey)**
- The SSH key may not be added to GitHub. Run `gh ssh-key add ~/.ssh/id_ed25519.pub` to add it.
- If the key does not exist, generate one: `ssh-keygen -t ed25519 -C "[email]"`

**Repository already exists on GitHub**
- This is not an error. Run `git remote add origin git@github.com:[username]/[repo].git` (or update with `git remote set-url origin ...`) and push.

**gh CLI not authenticated**
- Run `gh auth login` and follow the browser-based authentication flow.
