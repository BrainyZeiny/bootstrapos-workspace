# Skill: Master Plan Sheet

## What It Is For

The master plan sheet is the single document Claude reads at the start of every session to understand what you are building, how it is structured, what technology it uses, and what to build next. It is the memory Claude does not have between sessions.

## When to Use It

Before writing a single prompt for any new project or feature. Update it every time something significant changes. Paste it at the start of every session.

## The Template

```
MASTER PLAN SHEET

Function of the app:
[One paragraph. Who is it for. What problem does it solve. What does success look like.]

Schema:
[List every table. For each table list every field and its type. For each relationship specify one-to-many or many-to-many and where the foreign key lives.]

Example:
- Users table: id (integer), name (string), email (string), password_hash (string), created_at (timestamp)
- Posts table: id (integer), title (string), body (string), published (boolean), author_id (integer → Users), created_at (timestamp)
- Relationship: one User has many Posts (author_id lives on Post)

Technical stack:
- Frontend: TypeScript and Next.js
- Backend: Hasura (GraphQL)
- Database: Turso
- Deployment: Vercel via GitHub
- Do not deviate from this stack under any circumstances

User flows:
[For each user type: who are they, what do they come to do, what do they walk away with. Three sentences max per user type.]

Views and components:
[For each view, list the key components. For each component note what data it takes in.]

Features in order (four to five max):
1.
2.
3.
4.
5.

Not building yet:
[Explicit list of what is out of scope]

Tests — done means all of these are true:
1.
2.
3.
4.
5.
```

## Step-by-Step Instructions

1. Open a blank document before opening Claude
2. Fill out every section of the template above
3. If you cannot fill out a section, answer these questions first:
   - What are the main objects (nouns) in my app?
   - What does each user type come to do?
   - What is the first thing that needs to work?
4. Paste the completed plan at the start of every Claude session
5. After each session, update any sections that changed

## The Prompt to Use

At the start of every session:

```
Here is the master plan for this project. Read it carefully before doing anything.

[PASTE YOUR PLAN HERE]

We are using TypeScript and Next.js for the frontend, Hasura for the GraphQL backend, and Turso for the database. Do not deviate from this stack.

Today I want to work on: [describe the specific task]
```

## What Done Looks Like

A completed plan sheet has:
- One clear paragraph describing the app
- Every table listed with every field and type
- Every relationship specified with foreign key location
- User flows for every user type (3 sentences max each)
- Exactly 4-5 features in priority order
- An explicit not-building-yet list
- Testable done criteria for each feature

## Reference

See /knowledge/engineering/module-1-vibe-code.md for the full explanation of why planning works and why Claude fails without it.
