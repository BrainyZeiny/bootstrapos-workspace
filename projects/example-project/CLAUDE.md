# Example Project — Claude Rules

This file is read at the start of every session for this project. Follow every rule.

## Project

A simple task manager demonstrating the full BootstrapOS stack. Users can create an account, create projects, and add tasks to projects. Tasks have a status (todo, in progress, done) and can be assigned to other users.

## Stack

- Frontend: TypeScript, Next.js 14, Tailwind CSS
- Backend: Hasura GraphQL
- Database: Turso
- Deployment: Vercel

## Schema

### users
- id (integer, PK), name (string), email (string, unique), password_hash (string), created_at (timestamp)

### projects
- id (integer, PK), name (string), description (string), owner_id (integer → users), created_at (timestamp)

### project_members
- id (integer, PK), project_id (integer → projects), user_id (integer → users), role (string: owner/member), joined_at (timestamp)

### tasks
- id (integer, PK), title (string), description (string), status (string: todo/in_progress/done), project_id (integer → projects), assignee_id (integer → users, nullable), created_by (integer → users), created_at (timestamp), updated_at (timestamp)

## Relationships

- One User owns many Projects (owner_id on Project)
- One Project has many Users via ProjectMembers (many-to-many)
- One Project has many Tasks
- One Task optionally assigned to one User (assignee_id)

## User Flows

**Authenticated user (project owner):** Creates an account, creates a project, adds tasks, assigns tasks to team members, moves tasks through status.

**Team member:** Joins a project, sees assigned tasks, updates task status.

## Rules

- All logs go in /logs
- Use ample console.log statements throughout all code
- Before any push to GitHub, add debugging statements to verify every user flow
- Never hardcode secrets — always use .env.local
- Never destructively edit the schema — always migrate
- Maintain /decisions log for every architectural choice with date and reasoning
- Commit frequently with descriptive messages
- Never push to master without testing locally first
