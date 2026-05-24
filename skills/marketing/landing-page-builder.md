# Skill: Landing Page Builder

## What It Is For

Building a landing page that converts ad traffic into signups or leads. The landing page is where money is made or lost in paid advertising.

## The Non-Negotiable Elements

Every high-converting landing page has:

1. **Headline** — What you do. Who it is for. Specific benefit. One sentence.
2. **Subheadline** — Expand on the headline. Address the main objection or the main result.
3. **Social proof above the fold** — Logos, numbers, testimonials. Credibility before they scroll.
4. **CTA above the fold** — The signup or lead form. Visible without scrolling.
5. **The problem** — Make the reader feel seen. Describe their situation before your solution.
6. **The solution** — What you do and how it works. 3-5 bullet points.
7. **Proof** — Case studies, testimonials, or results with specific numbers.
8. **FAQ** — Address the top 5 objections directly.
9. **Final CTA** — Repeat the offer with urgency if applicable.

## The Build Prompt

```
Build me a landing page for [product] in Next.js with TypeScript and Tailwind CSS.

Product: [describe what it does]
Target customer: [who it is for]
Main benefit: [the single most important outcome]
Social proof: [logos, numbers, or testimonials you have]
Price or offer: [what you are asking them to do — free trial, demo request, etc.]

Follow this structure:
1. Hero: headline + subheadline + CTA + social proof
2. Problem section: describe the pain
3. Solution section: describe what you do and how
4. Proof section: case studies or testimonials
5. FAQ section: address the top 5 objections
6. Final CTA

Make it fully responsive. Use a clean, professional design. Add console.logs so I can debug conversion events.
```

## Conversion Tracking

Before running any ads, verify the conversion tracking works:
- Meta Pixel fires on signup page
- Google Tag fires on signup page
- Test conversions show up in each ad platform dashboard

## What Done Looks Like

- Landing page live on Vercel
- Loads in under 3 seconds on mobile
- Conversion form works and routes to correct destination
- All tracking pixels confirmed firing
- First ad campaign connected to the landing page

## Reference

See /skills/marketing/reddit-ad-launch.md, /skills/marketing/meta-ad-launch.md for driving traffic to this page.
