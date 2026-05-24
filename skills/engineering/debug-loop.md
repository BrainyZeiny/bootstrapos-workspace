# Skill: Debug Loop

## What It Is For

Getting your LLM to unshit itself when something is broken. Logs first. Fix second. Never guess.

## When to Use It

Any time something is broken and re-prompting has not fixed it.

## The Four-Step System

**Step 1: Stop re-prompting. Add logs.**
Do not ask Claude to fix anything yet. First ask it to add console.log statements throughout the broken flow.

**Step 2: Reproduce the bug.**
Follow whatever steps trigger the broken behavior. Open the browser console (right-click → Inspect → Console tab).

**Step 3: Copy the logs.**
Copy everything that printed in the console. All of it.

**Step 4: Give Claude the logs.**
Paste the logs into Claude and tell it to find and fix the problem.

## The Prompt to Use

**Step 1 prompt:**
```
Something is broken in [describe the flow]. Before trying to fix anything, add console.log statements throughout the relevant code to show me what the data looks like at every step. Add logs:
- Before the form submits
- After the data gets collected
- Before anything gets sent to the backend
- After the response comes back
- Everywhere data transforms

Do not change any logic yet. Just add the logs.
```

**Step 4 prompt:**
```
Here are the logs from when the bug happened:

[PASTE LOGS]

Based on these logs, what is wrong and how do you fix it? Fix it now and show me the result.
```

## The Closed Loop Prompt (Advanced)

If you are using Claude Code, you can ask Claude to debug itself:

```
Something is broken in [describe the flow]. 

Add console.log statements throughout the relevant code and write the logs to /logs/debug.log so you can read them directly.

Then reproduce the bug by [describe how to trigger it].

Read the log file. Identify the exact problem. Fix it. Run it again. Verify the logs show the correct behavior.

Do not stop until the bug is fixed and the logs confirm it is working.
```

## What Done Looks Like

- The broken behavior no longer occurs
- The logs show correct data at every step
- Claude can explain exactly what was wrong and why the fix works

## Reference

See /knowledge/engineering/module-1-vibe-code.md (Debugging section) for the full explanation.
