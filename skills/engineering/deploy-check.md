# Skill: Deploy Check

## What It Is For

Verifying everything works before pushing to GitHub and triggering a production deployment. Master is sacred — only push what works.

## When to Use It

Before every push to GitHub. No exceptions.

## The Deploy Check Prompt

```
Before I push to GitHub, run a complete deploy check. Work through every item below. Fix anything that fails before I push.

1. Run the app locally: npm run dev — confirm no errors in the terminal
2. Open the browser and check the console — confirm no JavaScript errors
3. Test every user flow we built or changed in this session:
   [List the flows you touched]
4. Check the logs directory — confirm no unexpected errors
5. Confirm all environment variables are in .env.example (without values) and .env.local (with values) and that .env.local is in .gitignore
6. Confirm no hardcoded secrets anywhere in the codebase
7. Confirm all new schema changes have proper migrations (no destructive edits)
8. Run TypeScript check: npx tsc --noEmit — fix any type errors

When every item above passes, tell me it is safe to push and give me the exact git commands to run.
```

## Step-by-Step Instructions

1. Save all your files
2. Paste the deploy check prompt into Claude
3. Tell Claude which flows you built or changed in this session
4. Wait for Claude to complete all checks
5. Fix anything that fails
6. Push only when Claude confirms it is safe

## What Done Looks Like

```
Deploy check complete. All items passed:

1. App runs locally: no terminal errors
2. Browser console: clean, no errors
3. User flows tested:
   - Signup: works end to end
   - Login: works end to end
   - Post creation: works end to end
4. Logs: no unexpected errors
5. Environment variables: all in .env.example and .env.local, .env.local is gitignored
6. No hardcoded secrets found
7. Schema: no destructive changes
8. TypeScript: no type errors

Safe to push. Here are your commands:
git add src/ .env.example
git commit -m "feat: add post creation flow"
git push origin master
```

## The Commands

After deploy check passes:

```bash
git add [specific files — never git add -A without reviewing]
git commit -m "feat: [what you built]"
git push origin master
```

Vercel will auto-deploy within 1-2 minutes. Check your Vercel dashboard to confirm the deployment succeeded.
