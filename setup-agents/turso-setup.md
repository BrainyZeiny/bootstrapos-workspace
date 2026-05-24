# Setup Agent: Turso Setup

## What This Does

Creates a Turso database and saves the connection credentials. Free. No credit card. Done in under 5 minutes.

## The Prompt

```
Set up a Turso database for my project.

Step 1: Account
Tell me to go to turso.tech and sign up. No credit card required. Walk me through what to click.

Step 2: Install Turso CLI
Command: brew install tursodatabase/tap/turso (Mac)
Or: curl -sSfL https://get.tur.so/install.sh | bash (Linux/WSL)
Then: turso auth login
Walk me through the login — it opens a browser.
Verify: turso --version

Step 3: Create database
Command: turso db create [project-name]-db
Verify: turso db list (confirm the database appears)

Step 4: Get credentials
Command: turso db show [project-name]-db
This shows the database URL.
Command: turso db tokens create [project-name]-db
This generates the auth token.

Step 5: Save to .env.local
Add to .env.local:
TURSO_DATABASE_URL=[the URL from step 4]
TURSO_AUTH_TOKEN=[the token from step 4]

Add to .env.example (no values):
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=

Verify: cat .env.local (confirm both variables are there)

Step 6: Add to Vercel
Tell me to go to my Vercel project settings → Environment Variables and add:
- TURSO_DATABASE_URL
- TURSO_AUTH_TOKEN
Walk me through where to find this in Vercel.

Print a confirmation when done.
```

## What Done Looks Like

```
Turso setup complete.

Database: [project-name]-db
Region: [closest region]
URL: libsql://[project-name]-db-[username].turso.io
Auth token: saved to .env.local and Vercel

Cost: $0/month (free tier)
Row read limit: 9 billion/month
```

---

## Validation

After completing the setup, run these checks to confirm everything works:

1. **Verify the database exists:** `turso db show [project-name]-db --url` — this should print the database URL.
2. **Verify the auth token is valid:** Check that the token stored in `.env.local` is non-empty and starts with a valid prefix.
3. **Run a test query:** Connect to the database and run `SELECT 1;` to confirm read access works.

## Error Handling

If any step fails, Claude should:
1. Read the error message carefully
2. Check if Turso CLI is authenticated (`turso auth status`)
3. If the database already exists, skip creation and retrieve the existing URL
4. If token generation fails, try `turso db tokens create [project-name]-db` again
5. Only ask the user for help if three attempts have failed

### Common Issues and Fixes

**Turso CLI not found after install**
- Run `source ~/.bashrc` or `source ~/.zshrc` to reload the PATH.

**Database creation fails with "already exists"**
- This is not an error. Run `turso db show [project-name]-db --url` to get the URL of the existing database.

**Auth token is empty or invalid**
- Run `turso auth login` to re-authenticate, then generate a new token.

**Connection refused when testing**
- Verify the database URL starts with `libsql://`. If it starts with `https://`, replace it with `libsql://`.
