# Skill: Mass Email at Scale

## What It Is For

Sending thousands of personalized cold emails per day while maintaining inbox deliverability.

## When to Use It

After cold outbound infrastructure is set up and warmed (see /skills/marketing/cold-outbound-infrastructure.md).

## The Volume Math

- 15 domains × 3 inboxes = 45 inboxes
- 45 inboxes × 40 emails/day safe limit = 1,800 emails/day
- 1,800 emails/day × 22 working days = ~40,000 emails/month

At 0.5% response rate: 200 replies per month. At 20% close rate from replies: 40 new customers per month.

## AI Personalization at Scale

Do not write 40,000 individual emails. Build a template with 3-5 personalization variables and fill them with AI and enrichment data:

**Template structure:**
```
Subject: [Company name] + [pain point or observation]

Hi [First name],

[One sentence specific to their company — use AI to generate from LinkedIn/website data]

[Your pitch: one sentence on what you do + one specific result]

[CTA: one ask — a call, a reply, a question]

[Your name]
```

**Personalization variables:**
- `[company_observation]`: AI-generated from company LinkedIn or website (what they do, recent news, hiring signal)
- `[specific_result]`: rotate from 3-5 proven results
- `[CTA]`: A/B test different asks

## The Prompt to Build the System

```
I want to build a mass personalization system for cold email. I have:

- Lead list: [describe your list source and fields available]
- Sequencing tool: [Instantly/Smartlead/other]
- Enrichment tool: [Apollo/Clay/other]

Help me:
1. Design a template with personalization variables
2. Write the AI prompt that generates [company_observation] from company data
3. Set up the Clay or Apollo workflow to enrich each lead and generate the variable
4. Import the personalized leads into my sequencing tool
5. Set up A/B tests on subject lines and CTAs
6. Define the follow-up sequence (email 2 and email 3 timing and content)

Walk me through each step.
```

## What Done Looks Like

- Personalized list of 1,000+ leads ready to send
- Sequences set up in the sequencing tool with 3-email cadence
- A/B tests running on subject lines
- First replies coming in within 5 days of launch
- Site visitor tracking active to route hot leads to callers
