# Agent: Monitoring Agent

## What It Does

Monitors application health, error rates, performance metrics, and uptime. Alerts immediately when something is wrong.

## When It Runs

Every 15 minutes for critical checks. Daily at 7:00 AM for full health report.

## What It Needs to Run

- Vercel deployment URL
- Key application routes to check
- Hasura endpoint
- Database connection string
- Slack webhook for alerts

## What Done Looks Like After Each Execution

**Every 15 minutes:**
- All critical routes return 200 status
- Hasura GraphQL endpoint responding
- Database accepting connections
- If any check fails: immediate Slack alert with details

**Daily:**
- Performance summary: average response times for key routes
- Error rate: 4xx and 5xx errors over past 24 hours
- Deployment status: last successful deploy, any failed deploys
- Database size and growth trend

## The Agent Prompt

```
Run health checks on the application:

1. HTTP check: GET [production URL] — expect 200
2. HTTP check: GET [production URL]/api/health — expect 200
3. GraphQL check: POST [Hasura endpoint] with query { __typename } — expect 200
4. Database check: query users table, count rows — expect success

If any check fails:
- Post immediate alert to Slack: [webhook URL]
- Include: what failed, error message, timestamp
- Retry after 2 minutes
- If still failing after retry, escalate: post second alert

Log all results to /logs/monitoring-[timestamp].log.
```
