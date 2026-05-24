# Skill: Component Builder

## What It Is For

Building reusable UI components that take in data from the schema and display it cleanly. Every piece of UI is its own component. Components connect to form views. Views make your app.

## When to Use It

Any time you need to build a new UI element. Before building any component, verify the data it needs exists in the schema.

## Core Concepts

**A component has three things:**
1. A name (StudentList, PostCard, ActivityRow)
2. A job (what it displays or does)
3. Inputs (what data it needs to do that job)

**Components do not own their data.** They receive it from the schema via Hasura/GraphQL and display it. If the data is not in the schema, the component cannot display it.

**Views are components stacked together.** The teacher dashboard view is: NavBar + StudentList + AddStudentButton. That is it.

## Step-by-Step Instructions

**Step 1: Identify what you need to display**
What information needs to appear on screen? What does the user need to interact with?

**Step 2: Check the schema**
Does the data you want to display exist in the schema? If no, go design the schema first.

**Step 3: Name the component**
Pick a clear name that describes what it is. StudentList. PostCard. BookingForm. ActivityRow.

**Step 4: Define its inputs**
What data does this component need? A list of students? A single post object? A date range?

**Step 5: Find a reference**
Take a screenshot of a UI element you like from another app. You will pass this to Claude.

**Step 6: Build it**

## The Prompt to Use

```
Build me a [ComponentName] component using TypeScript and Tailwind CSS.

It takes in: [describe the data inputs]

It displays: [describe what appears on screen]

It should look like: [paste a screenshot or describe the visual style]

Make it reusable — it should work anywhere I pass it the right data.

The data it needs comes from this Hasura GraphQL query: [paste the query or describe the table it reads from]
```

## Screenshot Tip

Take a screenshot of any UI you like. Instagram's post card. Airbnb's listing card. Notion's table row. Paste it directly into Claude and say "build me a component that looks like this." This is faster and more accurate than describing in words.

## What Done Looks Like

A complete component:
- Has a clear TypeScript interface defining its props
- Reads from the correct Hasura schema via GraphQL
- Renders correctly with real data
- Works standalone and inside a view
- Has console.log for debugging in development

## Reference

See /knowledge/engineering/module-1-vibe-code.md (Components section) for the full conceptual explanation.
See /reference/component-library/ for pre-built component templates.
