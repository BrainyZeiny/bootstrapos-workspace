# Skill: Long Task — Closed Loop Mission

## What It Is For

Setting Claude on a mission and not letting it stop until it wins. Claude builds, tests, reads logs, fixes, and loops until every defined outcome is true.

## When to Use It

For any task that involves multiple steps: building a complete feature, setting up infrastructure, debugging a complex issue, running a marketing automation.

## The Mission Prompt Structure

```
Here is the master plan for this project:
[PASTE YOUR FULL PLAN]

Your mission: [describe the complete task in full detail]

Before you start: ask me every question you need answered to complete this without stopping. Wait for my answers before beginning.

Once I answer your questions, start. When you think something is done, test it:
- Check that data exists where it should in the database
- Check that user flows work end to end
- Check the logs for any errors

If something is broken: add log statements, find the bug, fix it, and keep going.

Do not stop and ask me questions mid-task.
Do not tell me what you have done and wait for approval.
Do not tell me you are done until every one of these outcomes is true:

1. [Testable outcome one]
2. [Testable outcome two]
3. [Testable outcome three]
4. [Testable outcome four]
5. [Testable outcome five]

Start by asking your questions.
```

## Step-by-Step Instructions

1. Fill out your master plan completely (see /skills/engineering/plan-template.md)
2. Define clear, testable done criteria — not "the feature works" but "a user can sign up and their record appears in the database"
3. Paste the mission prompt with plan and done criteria
4. Answer Claude's upfront questions
5. Walk away. Claude will loop until done.

## Tips

- The more specific your done criteria, the better Claude executes
- If Claude gets stuck for too long, paste the logs and say "here is what you are seeing, keep going"
- Use Claude Code for maximum autonomy — it can read files, run commands, and check its own output

## What Done Looks Like

Claude prints a summary confirming every done criterion is met with evidence:
- "User signup: tested, Jake's record exists in the database (id: 3)"
- "Activity signup: tested, Jake is linked to Canoeing (signup id: 7)"
- "Login: tested, Jake can log in with his credentials and see his activities"

## Reference

See /knowledge/engineering/module-1-vibe-code.md (Long Tasks section) for the full explanation.
See /skills/engineering/test-driven.md for how to define done criteria.
