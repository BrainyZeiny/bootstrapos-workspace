# Agent: Cold Outbound Agent

## What It Does

Runs the daily cold outbound operation autonomously. Pulls new leads, enriches them with personalization data, loads them into the sequencing tool, monitors reply rates, flags hot leads for the calling team, and logs all activity.

## When It Runs

Daily at 6:00 AM local time. Can also be triggered manually when a new batch of leads is ready.

## What It Needs to Run

- Access to lead list source (Apollo, Clay, or CSV upload)
- Sequencing tool API credentials (Instantly or Smartlead)
- Site visitor tracking API (Warmly or Leadfeeder)
- CRM API credentials (for logging replies and outcomes)
- Slack webhook URL (for hot lead alerts)
- Target send count per day

## What Done Looks Like After Each Execution

- New leads enriched and personalized (minimum 50 per day)
- Leads loaded into the active sequence in the sequencing tool
- Previous day's replies reviewed and categorized (interested, not interested, out of office, unsubscribe)
- Hot leads (site visitors + previous email opens) routed to Slack for immediate follow-up
- Daily summary posted to Slack: emails sent, replies received, hot leads routed, unsubscribes logged

## The Agent Prompt

```
Run the daily cold outbound operation. Work through each step in order. Do not stop until all steps are complete.

Step 1: Pull [N] new leads from [source] matching these criteria: [ICP description]
Step 2: Enrich each lead with [company observation] using this prompt: [personalization prompt]
Step 3: Load all enriched leads into [sequencing tool] under the active sequence
Step 4: Review replies from the past 24 hours. Categorize each as: interested, objection, not interested, OOO, unsubscribe. Log in CRM.
Step 5: Check site visitor tool for companies that visited after opening an email. Route any qualified visitors to Slack.
Step 6: Post daily summary to Slack: [webhook URL]

Log all activity to /logs/outbound-[date].log. Report any errors immediately.
```

## Configuration

Before running, confirm in CLAUDE.md or project config:
- Lead source and ICP criteria
- Personalization prompt template
- Sequencing tool credentials (in .env.local)
- CRM credentials (in .env.local)
- Slack webhook URL (in .env.local)
- Daily target volume
