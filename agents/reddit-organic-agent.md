# Agent: Reddit Organic Agent

## What It Does

Monitors target subreddits for posts and comments where your product is relevant. Drafts replies that add genuine value and naturally mention your product where appropriate. Tracks which subreddits and post types drive the most traffic.

## When It Runs

Daily: 9:00 AM to scan new posts and identify opportunities.

## What It Needs to Run

- List of target subreddits
- Product description and use cases
- Rules for when to mention the product vs. add value without mentioning it
- Reddit account credentials (must be an account with established karma)
- Slack webhook for reply drafts (human approves before posting)

## What Done Looks Like After Each Execution

- New posts scanned across all target subreddits
- 5-10 high-opportunity posts or comments identified
- Draft reply written for each opportunity
- Drafts posted to Slack for human review and approval
- Weekly summary: posts replied to, upvotes received, traffic driven from Reddit

## Important Rules

- The agent drafts. A human approves and posts. Never post autonomously.
- Replies that mention the product must be relevant and valuable — not a pitch.
- If the reply is only valuable as marketing, do not post it. Add real value first.
- Never post in subreddits where self-promotion is banned.
- Maintain the karma and reputation of the Reddit account.

## The Agent Prompt

```
Scan the following subreddits for posts where I can add genuine value: [list subreddits]

For each post, determine:
1. Is this person facing a problem I can genuinely help with?
2. Is this post recent (under 24 hours old)?
3. Does this post have engagement potential (comments open, subreddit allows discussion)?

For each qualifying post, draft a reply that:
- Answers their question or adds real value
- Mentions [product] only if it is genuinely relevant and helpful
- Sounds like a knowledgeable person in the community, not a marketer
- Is 3-8 sentences, conversational, no jargon

Post all drafts to Slack for review. Log everything to /logs/reddit-organic-[date].log.
```
