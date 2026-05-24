# Agent: Outbound Agent (Affiliate Recruitment)

## What It Does

Identifies and outreaches to potential affiliates. Finds people with the right audience, drafts outreach messages, tracks responses, and manages the onboarding flow for new affiliates.

## When It Runs

Weekly: Monday and Thursday, to keep affiliate pipeline full.

## What It Needs to Run

- Ideal affiliate profile description
- Outreach message template
- Affiliate program details (commission, tracking link setup)
- LinkedIn or email access for outreach
- CRM or tracking sheet for pipeline

## What Done Looks Like After Each Execution

- 20-30 new potential affiliates identified matching the ICP
- Outreach sent to each with personalized message
- Follow-ups sent to previous week's outreach with no response
- New affiliate sign-ups onboarded with tracking links and propaganda pack
- Weekly pipeline summary: contacted, responded, joined, active

## The Agent Prompt

```
Run the weekly affiliate recruitment operation:

Step 1: Find 20-30 potential affiliates matching this profile: [affiliate ICP]
Sources: LinkedIn search, Twitter/X, newsletter directories, podcast lists

Step 2: For each potential affiliate, draft a personalized outreach message:
- Open with what you noticed about them specifically
- Connect their audience to your product
- Lead with vision, not commission
- Keep it under 100 words
- Include one clear ask (30-min call)

Step 3: Send outreach via [channel]. Log each send in [CRM/sheet].

Step 4: Check last week's outreach. Send follow-up to anyone who did not respond.

Step 5: For anyone who said yes: send onboarding sequence (tracking link + propaganda pack).

Log all activity to /logs/affiliate-outreach-[date].log.
Post weekly summary to Slack.
```
