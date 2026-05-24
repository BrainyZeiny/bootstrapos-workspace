# Setup Agent: Vercel Setup

## What This Does

Connects your GitHub repository to Vercel for automatic deployment. Every push to main triggers a deployment within 60 seconds.

## The Prompt

```
Set up Vercel deployment for my project.

Step 1: Account
Tell me to go to vercel.com and sign up with my GitHub account. Walk me through exactly what to click.

Step 2: Import project
Tell me to click "Add New Project" and import my GitHub repository.
Walk me through:
- Selecting the repository
- Framework preset: Next.js (should auto-detect)
- Root directory: ./ (or where my Next.js app lives)
- Build command: npm run build (default)
- Output directory: .next (default)

Step 3: Environment variables
Before deploying, I need to add environment variables. Ask me for:
- NEXT_PUBLIC_HASURA_ENDPOINT
- HASURA_ADMIN_SECRET
- TURSO_DATABASE_URL
- TURSO_AUTH_TOKEN
Walk me through where to add these in Vercel's UI.

Step 4: Deploy
Tell me to click Deploy. The first build takes 2-3 minutes. 
Tell me what to look for to confirm it succeeded.

Step 5: Custom domain (optional)
Ask me if I have a custom domain. If yes, walk me through connecting it in Vercel's Domains settings.

Step 6: Verify
Tell me to make a small change to a file and push to GitHub. 
Confirm the deployment triggered automatically.
Confirm the change appears on the live URL.

Print a confirmation when everything is working.
```

## What Done Looks Like

```
Vercel setup complete.

Project: [project name]
Live URL: https://[project].vercel.app
GitHub connected: yes
Auto-deploy: active — every push to main triggers deployment
Environment variables: all configured

Test deployment: successful
```
