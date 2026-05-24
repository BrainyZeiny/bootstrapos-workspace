# Skill: Site Visitor Tracking Setup

## What It Is For

Identifying the companies that visit your website so your sales team can follow up immediately. The missing layer between cold email and cold calling.

## When to Use It

As part of the cold outbound infrastructure setup. Should be live before the first cold email goes out.

## How It Works

When a visitor hits your website, their IP address is logged. Site visitor tracking tools use a database of IP-to-company mappings to identify which company that visitor came from. You cannot identify individual people — but you can identify companies with 20-40% coverage (the rest are home IPs or VPNs).

## Setup Steps

**Step 1: Choose a tool**
- Warmly: best for real-time routing and Slack integration
- Leadfeeder (now Dealfront): best for CRM integration and historical analysis
- Clearbit Reveal: good for high-volume sites

**Step 2: Install the tracking pixel**
Add the JavaScript snippet to your Next.js app. Add it to your root layout so it fires on every page.

**Step 3: Configure company filters**
Set up filters to only alert on companies matching your ICP (industry, size, location). Ignore traffic from your own company and common ISPs.

**Step 4: Set up Slack alerts**
Configure real-time Slack notifications when a qualified company visits. Include: company name, industry, size, page visited, time on site, and which cold email sequence they are in (if known).

**Step 5: Define the response playbook**
What does the rep do when an alert arrives? Who calls? What do they say? Define this before the first alert fires.

## The Setup Prompt

```
I want to set up site visitor tracking on my Next.js site. I am using [Warmly/Leadfeeder/other].

Help me:
1. Install the tracking pixel in my Next.js root layout (app/layout.tsx)
2. Configure the ICP filters: [describe your ideal company profile]
3. Set up Slack alerts with these fields: company name, industry, size, pages visited, time on site
4. Test that the pixel is firing correctly
5. Confirm a test visit appears in the dashboard

Walk me through each step.
```

## What Done Looks Like

- Pixel installed and verified firing on all pages
- Test visit from a known IP shows up in dashboard
- Slack alerts configured and tested
- Response playbook written and shared with reps
- First real company identified within 24 hours of first cold email going out
