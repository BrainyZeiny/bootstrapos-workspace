# Skill: Programmatic SEO Pages

## What It Is For

Flooding the long tail with hundreds or thousands of targeted pages that rank for specific keyword combinations. Pages that are impossible to compete with manually but trivial to generate with AI and code.

## When to Use It

When you have identified a large category of related keywords (e.g., "[city] + [service]", "[job title] + [tool]", "[problem] + [solution]") where each combination represents real search volume and no dominant competitor exists.

## How It Works

1. Identify a keyword pattern with many variations
2. Build a template page that works for any instance of the pattern
3. Generate all instances programmatically from a data source
4. Deploy at scale via Next.js dynamic routes
5. Submit to Google Search Console

## The Build Prompt

```
I want to build a programmatic SEO system. Here is the keyword pattern:

Pattern: [e.g., "hire [job title] developers in [city]"]
Data source: [e.g., list of 50 job titles × 200 cities = 10,000 pages]
Target audience: [who searches these terms]
What they want to find: [what the page should deliver]

Help me:
1. Design the page template (what goes on every page, what changes per instance)
2. Set up Next.js dynamic routes to generate all pages
3. Build the data source (CSV or database table)
4. Generate the page content for each instance
5. Add proper meta titles, descriptions, and canonical URLs
6. Submit the sitemap to Google Search Console

Work through each step completely.
```

## What Done Looks Like

- 500+ pages live on your domain
- Each page has unique, relevant content (not just swapped keywords)
- Sitemap submitted to Google Search Console
- Pages begin appearing in Google index within 2-4 weeks
- Traffic from long tail starts showing up in Search Console within 60-90 days

## Reference

See /knowledge/marketing/module-2-cold-outreach.md for the SEO strategy context.
See /agents/content-agent.md for automating ongoing content updates to programmatic pages.
