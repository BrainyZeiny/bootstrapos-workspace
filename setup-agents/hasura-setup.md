# Setup Agent: Hasura Setup

## What This Does

Creates a Hasura Cloud project, connects it to your Turso database, and gives you a GraphQL API for every table. Zero backend code required.

## The Prompt

```
Set up Hasura Cloud for my project and connect it to my Turso database.

Step 1: Account
Tell me to go to hasura.io and sign up for a free Hasura Cloud account. Walk me through what to click.

Step 2: Create project
Tell me to click "New Project" and select the free tier. Name it [project-name].
Wait for the project to provision (takes about 60 seconds).

Step 3: Connect Turso database
In Hasura Console → Data → Manage → Connect Database:
- Database name: default
- Data source: Turso
- Database URL: [from .env.local TURSO_DATABASE_URL]
- Auth token: [from .env.local TURSO_AUTH_TOKEN]

Tell me exactly where to click and what fields to fill in.

Step 4: Get Hasura credentials
From Hasura Console → Project Settings → General:
- GraphQL endpoint: https://[project-name].hasura.app/v1/graphql
- Admin secret: [from Project Settings → Env Vars → HASURA_GRAPHQL_ADMIN_SECRET]

Step 5: Save to .env.local
Add to .env.local:
NEXT_PUBLIC_HASURA_ENDPOINT=https://[project-name].hasura.app/v1/graphql
HASURA_ADMIN_SECRET=[the admin secret]

Add to .env.example:
NEXT_PUBLIC_HASURA_ENDPOINT=
HASURA_ADMIN_SECRET=

Step 6: Add to Vercel
Add both variables to Vercel environment variables.

Step 7: Verify connection
In Hasura Console → API tab, run this test query:
{ __typename }
It should return: { "data": { "__typename": "query_root" } }

Print a confirmation when everything is connected.
```

## What Done Looks Like

```
Hasura setup complete.

Project: [project-name]
GraphQL endpoint: https://[project-name].hasura.app/v1/graphql
Turso connection: active
Test query: passing

Next step: Create your tables in Hasura → Data → [database] → Create Table
Every table you create gets an instant GraphQL API.
```
