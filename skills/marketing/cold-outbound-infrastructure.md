# Skill: Cold Outbound Infrastructure

## What It Is For

Setting up the technical foundation for cold email at scale. Getting this right is the difference between landing in inbox and landing in spam.

## When to Use It

Before sending a single cold email. Infrastructure must be in place and warmed up before volume begins.

## What You Need

**Domains:** 15+ domains minimum for serious volume. One is your primary brand domain. The rest are variations (getbrandname.com, trybrandname.com, brandnamehq.com, etc.). Never send cold email from your primary domain — protect your deliverability.

**Inboxes:** 3 inboxes per domain maximum. Sending too much from one inbox tanks deliverability.

**DNS records:** Every domain needs SPF, DKIM, and DMARC configured correctly. No exceptions.

**Warming:** New domains and inboxes need 2-4 weeks of warming before sending volume. Use a warming service.

## The Setup Prompt

```
I need to set up cold email infrastructure. Help me work through each step:

Step 1: List every domain I need to purchase and where to buy them
Step 2: Walk me through configuring SPF, DKIM, and DMARC for each domain
Step 3: Set up [number] inboxes per domain in Google Workspace
Step 4: Connect to [sequencing tool] and configure inbox rotation
Step 5: Set up the warming schedule and tell me when I can start sending
Step 6: Set up site visitor tracking on my landing page

Work through each step completely before moving to the next. Do not move on until I confirm the current step is done.
```

## Tools That Work

**Sequencing:** Instantly, Smartlead, or Apollo — all have strong deliverability and inbox rotation
**Warming:** Instantly or Mailreach — warm new inboxes before sending
**Site visitor tracking:** Warmly or Leadfeeder — identify companies visiting your site by IP
**Enrichment:** Apollo or Clay — build targeted lists with verified emails

## What Done Looks Like

- All domains purchased and DNS records verified (use MXToolbox to check)
- All inboxes created and connected to sequencing tool
- Warming running on all inboxes (at least 2 weeks before sending)
- Site visitor tracking pixel installed and firing on landing page
- First sequence drafted and ready to activate after warming completes

## Reference

See /skills/marketing/cold-call-pairing-system.md for the signal-based calling layer.
See /agents/cold-outbound-agent.md for the ongoing autonomous execution agent.
