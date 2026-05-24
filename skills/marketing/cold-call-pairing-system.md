# Skill: Cold Call Pairing System

## What It Is For

Pairing cold email with cold calling using site visitor signals. This is the system that makes cold outreach work at scale in 2026.

## How It Works

1. Send cold email to targeted prospect
2. Prospect reads email, visits your site
3. Site visitor tracking identifies the company (IP reverse lookup)
4. Alert routes to sales rep in real time
5. Rep calls within minutes with context
6. Call opens with: "I saw you were checking us out..."

The call does not feel cold. The prospect knows who you are. Conversion rates are dramatically higher than cold calling without the email warmup.

## Setup Steps

**Step 1: Site visitor tracking**
Install Warmly or Leadfeeder tracking pixel on your landing page. Configure it to identify company by IP. Set up Slack alerts for new identified visitors.

**Step 2: Routing rules**
Set up routing: if visitor from target company list → immediate Slack alert to rep assigned to that account.

**Step 3: Rep workflow**
When rep receives alert:
- Check which email was sent to that company
- Check if the visitor came from the email link
- Wait 5-10 minutes if they are still on the site
- Call the primary contact at that company
- Open with: "Hey [name], I saw you were on our site checking us out after my email. Wanted to see if you had any questions."

**Step 4: CRM logging**
Every call gets logged. Outcome. Next step. Follow-up date.

## The Prompt to Set This Up

```
I need to set up a cold call pairing system. Here is what I have:

- Cold email infrastructure: [describe]
- Site visitor tracking tool: [Warmly/Leadfeeder/other]
- CRM: [describe]
- Sales team size: [number of reps]

Help me set up the routing from site visitor → Slack alert → rep assignment → call workflow. Walk me through every technical step and every process step.
```

## What Done Looks Like

- Tracking pixel installed and identifying 20%+ of site visitors by company
- Slack alerts firing within 2 minutes of qualified visitor landing on site
- Reps know exactly what to say when they get an alert
- Every call logged in CRM with outcome and next step
- Weekly review: which emails drive the most site visits → optimize those first
