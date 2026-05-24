# Agent: Paid Media Agent

## What It Does

Monitors active ad campaigns across Reddit, Meta, and Google. Reviews performance data, flags anomalies, pauses underperforming ads, escalates scaling opportunities, and posts weekly performance reports.

## When It Runs

Daily check-in: 8:00 AM for overnight data.
Weekly report: Monday 9:00 AM.

## What It Needs to Run

- Reddit Ads API credentials
- Meta Marketing API credentials
- Google Ads API credentials
- Target CPA per platform
- Slack webhook URL

## What Done Looks Like After Each Execution

**Daily:**
- Performance data pulled for all active campaigns
- Any ad with CPA >50% above target flagged for pause review
- Any ad with CPA >20% below target flagged as scaling opportunity
- Anomalies (sudden spend drop, zero impressions, policy violations) flagged immediately to Slack

**Weekly:**
- Full performance report by platform: spend, impressions, clicks, conversions, CPA, ROAS
- Creative performance ranking: top 3 and bottom 3 creatives
- Recommendations: what to pause, what to scale, what new creative to test
- Budget allocation recommendation for next week

## The Agent Prompt

```
Run the paid media performance review. Work through each platform in order.

For each platform (Reddit, Meta, Google):
1. Pull last 24 hours of campaign performance data
2. Identify any campaigns or ad sets with CPA >50% above target — list them and recommend pause
3. Identify any campaigns or ad sets with CPA >20% below target — list them and recommend scaling
4. Check for any anomalies: sudden spend drop, zero delivery, policy flags
5. Post summary to Slack

Log all data to /logs/paid-media-[date].log.

Platforms and targets:
- Reddit: target CPA [amount], account [credentials from .env.local]
- Meta: target CPA [amount], account [credentials from .env.local]
- Google: target CPA [amount], account [credentials from .env.local]
```

## Weekly Report Format

```
PAID MEDIA WEEKLY — [DATE RANGE]

REDDIT
Spend: $X | Conversions: Y | CPA: $Z | ROAS: X.Xx

META
Spend: $X | Conversions: Y | CPA: $Z | ROAS: X.Xx

GOOGLE
Spend: $X | Conversions: Y | CPA: $Z | ROAS: X.Xx

TOP PERFORMING CREATIVES:
1. [Creative name]: CPA $X, X conversions
2. ...

RECOMMENDATIONS:
- Pause: [list]
- Scale: [list]
- Test next: [list]
```
