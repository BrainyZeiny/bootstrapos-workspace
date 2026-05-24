# Skill: Test-Driven Development for Vibe Coders

## What It Is For

Defining what done looks like before you build. Claude does not stop when it thinks it is done. It stops when it can prove it is done.

## When to Use It

At the start of every feature build. Before writing a single prompt, write down the outcomes that must be true when the feature is complete.

## Core Concept

Test-driven development for vibe coders is simple: you do not decide when you are done. The tests do.

A test is just a statement that can be verified as true or false:
- "A user can sign up with an email and password" — verifiable
- "The signup works" — not verifiable

Write verifiable outcomes. Give them to Claude. Tell Claude not to stop until all of them are true.

## The Done Criteria Format

For each feature, write 4-6 outcomes like this:

```
Done means all of these are true:

1. A user can fill out the signup form and submit it
2. After submitting, a User record exists in the database with the correct email
3. The user can log in with those credentials
4. After logging in, the user sees their dashboard
5. The user's session persists if they close and reopen the browser
```

Every outcome should:
- Be testable (can be verified true or false)
- Reference real system state (database record exists, page loads, data appears)
- Be specific about what "correct" means

## The Prompt to Use

```
I am building [feature name]. Here is the master plan: [paste plan]

Define done as all of these outcomes being true and verified:
1. [Outcome one]
2. [Outcome two]
3. [Outcome three]
4. [Outcome four]

Build this feature. When you think it is done, verify each outcome above:
- For database checks: query the database and confirm the record exists
- For UI checks: confirm the correct data appears on screen
- For flow checks: walk through the user journey end to end

Do not tell me you are done until you have verified every outcome. Show me the verification evidence for each one.
```

## What Done Looks Like

Claude provides evidence for each outcome:

```
Verification:
1. Signup form submits: confirmed, no errors in console
2. User record in database: confirmed, queried users table, Jake's record (id: 3) exists with correct email
3. Login works: confirmed, Jake can log in with his password
4. Dashboard loads: confirmed, dashboard renders with correct data
5. Session persists: confirmed, closing and reopening browser maintains session
```

## Reference

See /knowledge/engineering/module-1-vibe-code.md (Long Tasks section).
See /skills/engineering/long-task.md for the mission prompt that enforces these criteria.
