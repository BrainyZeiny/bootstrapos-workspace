# Agent: Parallel Agent Orchestration

## What It Does

Runs multiple specialized agents simultaneously on independent tasks, then integrates their outputs. Dramatically accelerates development by parallelizing work that does not depend on each other.

## When to Use It

When you have multiple independent tasks that can proceed simultaneously:
- While the coding agent builds the backend, the UX agent designs the frontend
- While the outbound agent runs cold email, the content agent publishes SEO pages
- Multiple features being built in parallel by different agent instances

## The Orchestration Prompt

```
I need to run multiple agents in parallel on independent tasks. Here is the situation:

[Describe the overall goal]

Task 1 (Coding Agent): [what it builds]
- Done criteria: [list]
- No dependencies on Task 2 or 3

Task 2 (Content Agent): [what it produces]
- Done criteria: [list]
- No dependencies on Task 1 or 3

Task 3 (Outbound Agent): [what it executes]
- Done criteria: [list]
- No dependencies on Task 1 or 2

Start all three tasks. Each task logs to its own log file:
- Task 1: /logs/coding-[date].log
- Task 2: /logs/content-[date].log
- Task 3: /logs/outbound-[date].log

When all three are done, report:
1. What each task produced
2. Any integration steps needed to connect the outputs
3. Confirmation everything is working together
```

## Rules for Parallel Work

- Tasks must be truly independent — no task should depend on the output of another
- Each task must have clear, verifiable done criteria
- Each task must log to its own file
- Integration happens after all tasks are complete, not during

## The YC Agent Stack

At full operation, these agents run in parallel:
- Coding Agent: building features
- Debugger Agent: fixing bugs
- UX Agent: improving the interface
- Content Agent: publishing SEO pages
- Cold Outbound Agent: sending emails
- Paid Media Agent: managing ads
- Monitoring Agent: watching production

This is how a one-person founder operates at the speed of a 10-person team.
