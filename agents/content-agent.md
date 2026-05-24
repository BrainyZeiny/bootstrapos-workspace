# Agent: Content Agent

## What It Does

Generates content for programmatic SEO pages, updates existing content with new data, identifies new keyword opportunities, and monitors organic search performance.

## When It Runs

Weekly: Monday 7:00 AM for SEO health check and content generation batch.

## What It Needs to Run

- Google Search Console API credentials
- List of target keyword patterns
- Content templates for each page type
- Vercel deployment access (or GitHub push access)

## What Done Looks Like After Each Execution

- Search Console data reviewed: which pages are gaining/losing rankings
- 20-50 new programmatic pages generated from keyword data
- Existing pages with declining rankings updated with fresh content
- New pages deployed to production via GitHub push
- Weekly summary: total pages indexed, new pages created, ranking changes, organic traffic trend

## The Agent Prompt

```
Run the weekly content operation:

Step 1: Pull Search Console data for the past 7 days. Identify:
- Pages gaining more than 10 positions in rankings
- Pages dropping more than 10 positions
- New keywords appearing in top 20 for the first time

Step 2: Generate [N] new programmatic pages using this template: [template path]
Keyword data source: [data source]
Page structure: [describe]

Step 3: For any page that dropped more than 10 positions, generate an updated version of the content and flag for review.

Step 4: Push new pages to GitHub (main branch). Vercel will auto-deploy.

Step 5: Post weekly summary to Slack.

Log everything to /logs/content-[date].log.
```
