# Skill: Schema Design

## What It Is For

Designing the data structure for your app before building anything. The schema is the foundation. Everything Claude builds will be built on top of it. Get this right before writing a single feature prompt.

## When to Use It

At the start of every new project, before building any feature that involves new data, and any time you realize you need to store something new.

## Core Concepts

**Every distinct object gets its own table.**
A user is a table. A post is a table. A product is a table. An order is a table. Do not combine unrelated objects in one table.

**Every field has a type.**
- string: text (names, emails, descriptions, titles)
- integer: whole numbers (counts, IDs, quantities)
- boolean: yes or no (published, active, paid)
- timestamp: date and time (created_at, updated_at, completed_at)

**Relationships connect tables.**
- One-to-many: one User has many Posts. Foreign key (author_id) lives on Post.
- Many-to-many: many Students, many Activities. A third Signup table connects them with student_id and activity_id.

## Step-by-Step Instructions

**Step 1: List your objects**
Write down every noun in your app. Users. Posts. Products. Orders. Reviews. Comments. Activities. Anything that needs to be stored is a noun that becomes a table.

**Step 2: For each object, list its fields**
What information do you need to store about each one? Name it. Give it a type. Add created_at and updated_at to every table by default.

**Step 3: Define relationships**
For each pair of objects, ask: can one have many of the other? Can many have many? Where does the foreign key live?

**Step 4: Add the schema to your master plan**

**Step 5: Create the tables in Hasura**
Once the schema is locked in the plan, create the tables in Hasura. Hasura will automatically generate the GraphQL API for every table.

## The Prompt to Use

```
I need to design the schema for my app. Here is what the app does and what the main objects are:

[describe your app and list your objects]

Help me design a complete schema. For each table list every field and its type. For each relationship specify whether it is one-to-many or many-to-many and where the foreign key lives. Format it exactly like this:

- Table name: field (type), field (type), field (type)
- Relationship: [description with foreign key location]

Do not build anything yet. Just design the schema.
```

## What Done Looks Like

A complete schema has:
- Every object as its own table
- Every field named and typed
- Every relationship specified with foreign key location
- No data duplicated across tables (point with foreign key, do not copy)
- created_at on every table

## Common Mistakes

- Storing everything in one giant table
- Forgetting the junction table for many-to-many relationships
- Putting the foreign key on the wrong side (it always lives on the "many" side)
- Hardcoding data that should be in the database
- Designing for hypothetical future objects instead of what you need now
