# Agent: Testing Agent

## What It Does

Runs end-to-end tests across all critical user flows before every production deployment. Catches regressions before users see them.

## When It Runs

Before every push to master. Triggered automatically by the pre-push hook.

## What It Needs to Run

- Staging or localhost app running
- Test user credentials
- List of critical user flows to test

## Critical Flows to Test (Customize Per Project)

1. User signup
2. User login
3. Core feature flow (specific to each app)
4. Data persistence (verify data saved to database)
5. Logout

## The Agent Prompt

```
Run end-to-end tests on the application at [URL]. Work through each flow completely before moving to the next.

For each flow:
1. Execute every step in the flow
2. Verify the expected outcome (check UI and database where relevant)
3. Log the result: PASS or FAIL with details

Flows to test:
1. [Signup flow with test user credentials]
2. [Login flow]
3. [Core feature flow]
4. [Data persistence check]
5. [Logout]

If any flow FAILS:
- Post details to Slack
- Stop the deployment
- Report exactly what failed and where

If all flows PASS:
- Confirm ready to deploy
- Log results to /logs/test-run-[timestamp].log
```
