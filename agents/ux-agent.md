# Agent: UX Agent

## What It Does

Reviews the application UI against usability best practices, identifies friction points in user flows, generates improvement recommendations, and builds quick fixes for obvious issues.

## When It Runs

Weekly: Triggered after significant feature releases or on demand.

## What It Needs to Run

- Application URL
- List of key user flows to review
- Access to user feedback or session recordings if available

## What Done Looks Like After Each Execution

- All key user flows walked through from a new user perspective
- List of friction points identified with severity rating
- Quick fixes built for low-effort, high-impact issues
- List of larger improvements recommended for next sprint
- Summary posted to Slack

## The Agent Prompt

```
Run a UX review of the application at [URL]. 

Walk through each user flow as if you are a brand new user who has never seen this product:

Flows to review:
1. [First-time signup and onboarding]
2. [Core feature flow]
3. [Settings or account management]

For each flow, evaluate:
- Is it obvious what to do at each step?
- Is there any confusion or friction?
- Is error handling clear and helpful?
- Is the mobile experience acceptable?
- Does the language assume technical knowledge?

After the review:
1. List friction points, rated: Critical / High / Medium / Low
2. Fix all Critical and High issues immediately
3. Write up Medium and Low issues as recommendations
4. Post summary to Slack with before/after for any fixes made
```
