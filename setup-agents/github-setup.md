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
