# Module 1 — Vibe Code: Zero to Hero

## Intro

I have seen it a million times. Vibe coders get to a certain point and then they get completely stuck.

Why? Because they are building to solve individual prompts instead of thinking holistically about what they are actually building.

Without the right foundation, LLMs paint themselves into a corner fast. And when that happens, no amount of prompting gets you out.

On the other hand, I am watching the best engineers I know move 100x, 1000x faster than they ever could before. Not because they are better at prompting. Because they understand what they are building at a fundamental level and they use AI to execute on that understanding.

Here is the thing. These fundamentals are not hard to learn. I can teach you these fundamentals in under an hour. And once you have them, you can achieve exactly what these engineers are achieving. You will stop vibe coding like a beginner who gets stuck at the MVP stage and start building like an engineer who ships production ready products.

That is what this module is. The fundamentals you need to vibe code like an engineer.

---

## Lesson 1: The Three Layers You Need to Understand for Every App Ever Built

Every app you have ever used — Instagram, Uber, Slack, your bank's website — was built on exactly three layers. Not four. Not two. Three. And if you don't understand what those three layers are and how they talk to each other, you will never be able to vibe code anything that actually works at scale.

Layer one is the frontend.

This is what you see. The buttons, the pages, the forms, the menus. Everything visual. Everything you can click on or type into. The frontend has one job: show things to the user and collect their input. That's it. It has no memory. It has no logic of its own. It is just a pretty face that asks questions and displays answers.

When you open Instagram and you see your feed — that's the frontend. When you type into a search bar — that's the frontend. When you tap a button — that's the frontend sending a question to somewhere else.

Layer two is the backend.

This is the brain. The backend is where all the decisions happen. When you tap that button on the frontend, the backend is what receives the request, figures out what to do with it, applies your business logic, checks permissions, runs calculations, and sends back a response.

Think of it like a waiter at a restaurant. You place your order — that's the frontend. The waiter takes it to the kitchen — that's the backend. The kitchen makes the food. The waiter brings it back. You eat. You never see the kitchen. You don't need to. But without it, nothing works.

Layer three is the database.

This is the memory. Every piece of data that needs to survive after you close the app lives in the database. Your username. Your messages. Your photos. Your order history. The backend is smart but it forgets everything the moment a request is done. The database is what makes information permanent.

Now here is how they talk to each other.

You tap a button on the frontend. The frontend sends a request to the backend. The backend receives it, goes to the database, gets whatever information it needs, does whatever it needs to do, and sends a response back to the frontend. The frontend takes that response and updates what you see on screen.

That is it. That is every app. Every single one. From a billion dollar company to the MVP you are building right now.

Let me make this real with an example.

Let's build a blog. Super simple. A form with two fields: a title and a body. You fill them in and hit publish. Here is exactly what happens across the three layers:

One — you type your title and your body into the form on the frontend and hit publish.

Two — the frontend sends those two fields to the backend.

Three — the backend receives them and saves them to the database.

Your blog post now lives in the database permanently. Get the write right and the read takes care of itself. Three layers. One form. Two fields. That is all it is.

Now here is why this matters for vibe coding.

When you understand the three layers, you stop making requests to Claude that make no sense. You stop asking your frontend to remember things it cannot remember. You stop asking your backend to display things it cannot display. You stop confusing where your logic should live.

Most vibe coders who get stuck are stuck because they are asking Claude to do something in the wrong layer. And Claude, being the agreeable thing that it is, will try to make it work — and it will build you something that kind of works for five minutes and then completely falls apart.

Once you know the three layers, you tell Claude exactly where you are working and exactly what you need. And Claude stops shitting the bed.

The one thing I want you to remember from this video:

Frontend shows. Backend thinks. Database remembers.

---

## Lesson 2: Schema, Schema, Schema

If there is one concept that separates the vibe coders who ship from the ones who get stuck, it is this one. Schema. And I am going to say it again because I need you to take it seriously. Schema. Schema. Schema.

Most people skip this. They open Claude, they start describing features, and they just start building. And for the first hour it feels amazing. Claude is shipping code, things are appearing on the screen, it feels like magic.

And then at some point everything starts breaking. Features conflict with each other. Data goes missing. Claude starts contradicting itself. And no matter how many times you re-prompt, you cannot get out of the hole.

That is a schema problem. Every single time.

So what is a schema?

A schema is the blueprint of your data. Before you write a single prompt, before you build a single feature, you need to know what data your app is going to store and how it is structured. That is your schema.

Think of it like the foundation of a house. You would not start building walls before you know where the foundation goes. But that is exactly what most vibe coders do. And then they wonder why everything is falling apart.

Here is the thing. A schema sounds technical. It is really not. Let me prove it to you.

Imagine your teacher walks up to Kevin and says hey Kevin, do you mind keeping track of everybody signing up for the field trip? Kevin says sure, grabs a piece of paper, and starts a list. Just names at first. Simple.

But then Kevin starts thinking. Actually I need to know if the parents signed the permission slip. So he adds a column for that. Then the teacher tells him there are two groups — group A and group B. So Kevin adds another column for that. Maybe he also needs to know if each kid has paid. Another column.

Before Kevin knows it, he does not just have a list. He has a table. Name. Permission slip signed. Group. Paid. Each kid is a row. Each piece of information is a column.

That table is a schema. Kevin just designed one without writing a single line of code. Without knowing what a database is. Without ever hearing the word schema in his life. He just sat down, thought about what information he needed to keep track of, and wrote it down. A computer does the exact same thing. Same logic. Just faster, and at a much larger scale.

That is all a schema is. A collection of tables. Each table has columns. Each row is a record. You have been doing this your whole life.

Now let's graduate to a blog.

A blog has two tables. Users and Posts.

The User table stores information about the people who can log in and write posts. What do we need to know about a user? Their name. Their email. Their password. The date they signed up.

Name — text. In schema language we call that a string. Email — string. Password — string. Created at — a date and time. We call that a timestamp.

Now the Post table. A post is a blog article. What do we need to store?

Title — string. Body — string. Published — boolean. True or false. Is this post live or not? Created at — timestamp. Author id — this one is special. We will get to it in a second.

Those are your fields. And every field has a type. String means text. Timestamp means a date and time. Boolean means yes or no. Integer means a whole number. That is it. Four types. Every piece of data in every app in the world is one of those four things.

Relationships — who belongs to who.

Here is the thing about data. Nothing exists in isolation. Your tables are connected to each other. And understanding how they connect is one of the most important things you can teach Claude before you start building.

There are two types of relationships you need to know.

One to many.

One thing owns many of another thing. But each of those things only has one owner.

Back to the blog. A user can write many posts. But each post was written by only one user. That is one to many. One user. Many posts.

The reference — the author id — lives on the Post. Not on the User. Because every post needs to know who wrote it. We do not go to the User and list every post they ever wrote. We go to the Post and look at who wrote it. The reference lives on the many side. Always.

Many to many.

Now let's go back to Kevin. The teacher tells him the field trip has activities. Hiking, canoeing, rock climbing. And every student can sign up for more than one.

Kevin's first instinct is to just add columns. Hiking. Canoeing. Rock climbing. One checkmark per student per activity. Simple.

But then the teacher adds five more activities. Now Kevin has eight columns and most of them are empty for most students. The sheet is a mess. And when the teacher asks how many students signed up for canoeing Kevin has to check every single row one by one.

So Kevin makes a second sheet just for activities. Activity name. Start time. How many spots are left.

And then he makes a third sheet. The signup sheet. One row per student per activity. Jake — hiking. Jake — canoeing. Sarah — rock climbing.

Now when the teacher asks who is going canoeing Kevin just looks at the signup sheet and finds every canoeing row. Done in seconds.

But then Mrs. Rodriguez shows up. She is running the canoeing session. She wants to know who is coming. Kevin points her to the signup sheet. But the signup sheet just has names. Mrs. Rodriguez does not know which Jake. She does not have his phone number. She does not know if he has a nut allergy.

So Kevin realizes the signup sheet cannot just have names. It needs to point back to the full student record. Not copy the information. Just point to it. So that anyone — Kevin, Mrs. Rodriguez, the teacher — can follow that pointer all the way back to Jake's full details.

That pointer is called a foreign key. And that is all it is. A reference from one sheet to another. You do not copy information. You point to it.

Every object gets its own table.

Here is the rule Kevin lands on after all of this.

Every distinct thing in your app deserves its own table. A student is a thing. A table. An activity is a thing. A table. A signup is a thing. A table.

The more you separate your objects, the cleaner your logic. One giant sheet that tries to hold everything collapses fast. Separate sheets that point to each other scale forever. And when you tell Claude about your app this way — here are my objects, here is what each one stores, here is how they connect — Claude builds clean code. Because clean thinking produces clean code.

Everything in your app is a table. Every table has columns. Every column has a type. A string is text. A timestamp is a date and time. A boolean is yes or no. An integer is a number. Relationships connect your tables. One to many — one user, many posts. Many to many — many students, many activities, with a signup sheet connecting them.

Get this right before you write a single prompt and Claude will never lose the thread.

**In the repo:** The reusable schema design workflow lives at `/skills/engineering/schema-design.md`. Ready-made schema templates for common app types (blog, marketplace, social feed, dashboard, SaaS with billing) live at `/reference/schema-templates/`.

---

## Lesson 3: Why Your LLM Keeps Shitting the Bed — How to Fix That With Good Planning

I have seen it a million times.

Someone opens Claude, describes a feature, Claude builds it. They ask for another feature, Claude builds that too. And for a while it feels incredible. Like they finally cracked it.

And then they ask for one more thing and everything falls apart. And they cannot figure out why.

Here is why. Every prompt lived on its own island. They were adding rooms to a house without ever thinking about the foundation. And at some point they wanted to add a room that the foundation could not support. And instead of being able to just build up, they had to go all the way back down and extend the foundation first. Except by that point the house was already built on top of it. And now everything has to come down.

That is what happens when you build without a plan. You are not building a house. You are stacking rooms and hoping the ground holds.

You are living request by request. Feature by feature. With no holistic view of what you are building. Claude has no memory between prompts unless you give it one. Every new session starts from zero. And if you are not grounding every single prompt in a plan, Claude is guessing. And a Claude that is guessing is a Claude that is shitting the bed.

The fix is simple. Before you add a single room, you design the foundation. You decide how big the house is going to be, where the walls are going, what it is built on, and what you are building first. And then every time you sit down to build you look at that plan and you build from it.

That document is the plan. And it is the single most important thing you will take away from this lesson.

What is the plan.

The plan is the one document that Claude keeps coming back to whenever it has questions. It is your single source of truth. It is the difference between Claude guessing and Claude executing.

Every feature needs a plan. Every app needs a plan.

Before you build a single feature you sit down and you make the plan. And then every time you open Claude you paste that plan in. Every time. Without exception.

The plan is never finished. You update it every time something significant changes. A new table gets added. A feature gets cut. A technology decision gets made. The plan always reflects the current state of your app. It is a living document not a one-time exercise.

What goes in the plan.

One. The function of the app. Who is this app for. What problem does it solve. What does success look like. One paragraph. Force yourself to be concise.

Two. The schema. Your tables. Your nouns. Your fields. Your relationships. This is the foundation of the foundation.

Three. The technical stack. Where is your data going to live. What database are you using. What is your backend. What is your frontend. What services are you deploying to. For this course the stack is simple and non-negotiable. TypeScript. Next.js for the frontend. Hasura for your GraphQL backend. And Turso as your database.

Four. The user flows. Who are the different types of users in your app and what do they come to do. Three sentences per user type. That is it.

Five. Four to five features max in priority order. Not every feature you will ever build. Just the four or five features you are building right now. Build them. Test them. Then add four more.

Six. What you are NOT building. Explicitly telling Claude what is out of scope stops it from over-engineering.

The habits that make the plan work.

Write the plan before you open Claude. Not in Claude. Not with Claude. Before Claude. Think it through yourself first.

Paste the plan at the start of every session. Claude has no memory between conversations. Your plan is the memory.

Update the plan every time something significant changes.

Never prompt without context. Always say here is the app, here is the schema, here is the stack, here is what we have built so far, now add the feature.

The two model workflow.

You plan with Opus. Opus is the deep thinker. It reasons through your architecture, reviews your schema, stress tests your feature list. Then you build with Sonnet. Once the plan is locked Sonnet executes it. Faster. Cheaper. Plan with Opus. Build with Sonnet. Anthropic built this directly into Claude Code.

Feature by feature is the way.

Do not try to one-shot a complex app. Build one feature. Test it. Make sure it works. Then build the next one on top of a solid foundation.

**In the repo:** The master plan sheet template lives at `/skills/engineering/plan-template.md`. Copy it, fill it out, and paste it at the start of every Claude session.

---

## Lesson 4: Components — You Need to Understand the Fucking Components

If you understood the schema lesson, this one is going to click immediately. Because components are the exact same concept — just for the frontend instead of the backend.

Schema is the structure of your backend. Components are the structure of your frontend. Same concept. Different layer.

What is a component.

A component is the smallest reusable piece of UI. A button. A form. A list. A card. A nav bar. Each one is its own component.

A component does not own its data. It receives data from somewhere else and displays it. That is its only job. Take in data. Show it.

Every component has three things. A name. A job. And inputs — the data it needs to do that job. Simple.

What is a view.

A view is just a screen. And every screen is just components stacked together.

The teacher dashboard is a view. Inside it — a nav bar component, a student list component, an add student button component. That is it. Views are the big picture. Components are the building blocks.

Components take in data. And that data comes from the schema.

This is where everything connects. And this is where most vibe coders get completely derailed.

I cannot tell you how many times I have seen this. Someone asks Claude to display something on the frontend. Claude does not find it in the schema. So instead of telling you it does not exist, Claude does one of three things. It makes the data up and hardcodes it so it looks right but is completely static. It creates a fake placeholder that will never connect to your real database. Or it takes a lazy shortcut and just renders something that looks like it works until you actually try to use it.

The fix is simple. If you want it on the frontend it has to be in the schema. Full stop. A component cannot display data that does not exist in your database. So before you ask Claude to build any component, ask yourself — is this data in my schema? If the answer is no, go add it to the schema first. Then build the component.

Schema first. Components second. Every single time.

One more secret: show Claude what you want.

If you want Claude to build a component that looks a certain way — show it a screenshot. Take a screenshot of anything. A component you like from another app. A design from Figma. A sketch on a piece of paper. Paste it directly into Claude and say: build me a component that looks like this.

Claude reads images incredibly well. Screenshots are one of the most powerful and most underused tools in vibe coding. Use them constantly when building components.

The one thing I want you to remember.

Every piece of UI is its own component. Components take in data from the schema. Components make views. Views make your app.

**In the repo:** Pre-built component templates (table, form, modal, nav bar, card grid) live at `/reference/component-library/`. Use them as starting points.

---

## Lesson 5: The Only Stack You Will Ever Need to Go From Zero to $1M

This lesson is opinionated. These are not the only tools that exist. They are not the only tools that work. But after 12 years as an engineer, building multiple companies, and vibe coding my way through more products than I can count, these are the tools I keep coming back to. Every single time.

Here is the stack. Three rows. No debate.

TypeScript vs JavaScript: the secret most vibe coders miss.

JavaScript and TypeScript are actually the same language. TypeScript is just JavaScript with one addition: types. That is it. Same language. Same syntax. Just with types on top.

TypeScript self-documents your code. Every variable, every function, every piece of data tells Claude exactly what it is and what it can be. Claude does not have to guess. It does not have to infer. It does not have to make assumptions. It just reads the types and knows.

When you give Claude JavaScript it is working with unlabeled boxes. When you give Claude TypeScript it is working with labeled boxes that only accept the right thing. TypeScript makes Claude dramatically more accurate.

Always always always specify TypeScript. Put it in the plan. Put it in every prompt. Never leave it out.

Hasura: your entire backend in one tool.

Hasura reads your schema and automatically generates your entire GraphQL API. Every query. Every mutation. Every relationship. Built for you. Instantly. No backend engineering required.

It also handles permissions out of the box. You define rules and Hasura enforces them automatically at the API level.

And because Hasura generates the API from your schema, when you update the schema Hasura updates the API automatically.

Turso: the database that keeps your bill under $10 a month.

Turso is built on SQLite. You do not even need to put down a credit card to sign up. You go to turso.tech, you create a free account, you create a database, and Turso gives you two things: a database URL and an auth token. That is it. Your database is running in production.

The free tier gives you nine billion row reads a month. You are not hitting that ceiling for a very long time.

How to tell Claude to use this stack.

Put this in your plan. Every single time:

We are using TypeScript and Next.js for the frontend. We are using Hasura for the GraphQL backend. We are using Turso for the database. Do not deviate from this stack under any circumstances.

**In the repo:** The stack is enforced in `CLAUDE.md` and cannot be changed. Claude reads it at the start of every session.

---

## Lesson 6: Let's Get Your Cloud Bill Under $10/Month

The stack we use — TypeScript, Next.js, Hasura, and Turso — runs in production for under ten dollars a month. Real users. Real data. Real traffic. Under ten dollars a month.

Turso: the database nobody talks about.

Turso is built on SQLite — the most widely deployed database in the world. It is on your phone right now. It is in your browser. What Turso does is take SQLite and make it cloud-native. Globally distributed. Edge-ready. And absurdly cheap to run.

You do not even need to put down a credit card to sign up. You go to turso.tech, you create a free account, you create a database, and Turso gives you two things: a database URL and an auth token. Your database is running in production. No credit card. No server to manage.

The free tier gives you nine billion row reads a month.

Hasura: why this beats everything else for your backend.

The reason comes down to one word: GraphQL.

Instead of fifteen endpoints, you have one. The frontend just asks for exactly what it needs through that one endpoint and GraphQL goes and gets it. And because it is one endpoint with one concise schema, Claude can hold the whole thing in its head easily. Fewer tokens to read. Fewer mistakes. Cleaner code throughout the entire build.

The one principle that ties everything together.

Self-documenting code is always better. TypeScript is self-documenting. GraphQL is self-documenting. The schema is self-documenting. Instead of Claude trying to remember seventeen different endpoints, it reads one schema and knows everything.

Next.js on Vercel.

The free tier covers everything. Custom domain. Automatic HTTPS. Global CDN. Preview deployments for every pull request. All free.

The total.

Turso: zero dollars. Hasura: zero dollars. Vercel: zero dollars. Your domain: roughly one dollar a month. One dollar a month. Production grade.

**In the repo:** Setup scripts for each service live at `/setup-agents/turso-setup.md`, `/setup-agents/hasura-setup.md`, and `/setup-agents/vercel-setup.md`.

---

## Lesson 7: Debugging — How to Get Your LLM to Unshit Itself

Something is broken. You do not know why. You re-prompt Claude. It tries something. Still broken. You re-prompt again. Now something else is broken too. You re-prompt again. Now you have three problems instead of one.

This is how every vibe coder debugs. And it is the worst possible approach. Because Claude without information is just guessing. And every guess that misses makes the codebase worse.

But here is the thing. This problem is not new. Developers have been dealing with broken code since the beginning of software. And long before AI, long before LLMs, long before vibe coding existed, engineers had a solution. It was not glamorous. But it worked every single time.

They added debugging statements.

A debugging statement is just a line of code that prints what is happening inside your app at a specific moment. With LLMs the code looks clean. Claude writes it confidently. It reads like it should work. And when it does not work the vibe coder has no idea why because they did not write the code themselves. So they re-prompt. And re-prompt. And make it worse.

The answer is the same as it always was. Debugging statements. We just call them logs now. And instead of you adding them manually you ask Claude to add them. Same concept. Same result. More information. Less guessing.

What is a log.

A log is just a snapshot of your data at a specific moment in time. It prints what is actually happening inside your app as it runs.

On the frontend a log is a single line of code called a console.log. It looks like this:

console.log("student data before submit", studentData)

How to use logs to debug.

Step one. Something breaks. Do not re-prompt. Do not ask Claude to fix it yet. First ask Claude to add console.log statements throughout the relevant part of the app.

Step two. Run the app. Reproduce the bug. Open the browser console.

Step three. Copy everything that printed in the console. All of it. Paste it into Claude.

Step four. Tell Claude: here are the logs from when the bug happened. Based on this what is wrong and how do you fix it.

The closed loop prompt (advanced).

If you are using Claude Code, you can ask Claude to write logs to a file instead of just the browser console. A log file that Claude Code can read directly. Claude adds the logs, runs the app, reads the log file itself, and uses that information to fix the bug autonomously.

That is the closed loop debugging method. Claude logs. Claude reads. Claude fixes. Claude tests. Claude does not stop until it works.

The prompt that works every time.

Something is broken in this flow. Before trying to fix anything, add console.log statements throughout the relevant code to show me what the data looks like at every step. Then tell me what to do to reproduce the bug so the logs print. Once I give you the logs, use them to identify the exact problem and fix it. Do not stop until it works.

That is the whole system. Logs first. Fix second. Never guess.

**In the repo:** The reusable debug loop workflow lives at `/skills/engineering/debug-loop.md`.

---

## Lesson 8: Long Tasks — The Secret to Setting Your LLM on a Mission and Not Letting It Quit Until It Wins

Programmers have known something for decades that most vibe coders have never heard of.

It is called test-driven development. And the idea is beautifully simple. Before you build anything you define what success looks like. You write down the outcomes that need to be true when the feature is done. And then you build until every single one of those outcomes is true. You do not decide when you are done. The tests do.

With LLMs you can do the exact same thing. And when you combine it with something called a closed loop — where the LLM does not just build but also checks its own work — you get something incredibly powerful. Claude does not stop when it thinks it is done. It stops when it can prove it is done.

Test-driven development for vibe coders.

You tell Claude: build the student signup flow. When you are done I want these things to be true. One — a student can fill out the form and hit submit. Two — after they submit, the student record exists in the database. Three — the student can log back in with their credentials. Four — the student can see the available activities. Five — the student can sign up for an activity and that signup record exists in the database linking them to the activity.

Do not tell me you are done until every single one of those things is true.

Now Claude has a finish line it cannot fake. It has to build something that actually works. Not something that looks like it works.

The closed loop.

A closed loop means Claude does not just build — it also checks its own work inside the same session. Claude builds the signup form. Then it signs up a test student. Then it goes and looks in the database to confirm the student record is there. If it is not there something is broken. Claude adds log statements, reads them, finds the bug, fixes it, and tries again. It keeps going through that loop — build, test, check, fix — until every outcome is true.

The mission prompt.

Here is how to structure it every time you have a long task.

Here is the plan: paste your full plan.
Your task is: describe the complete task in full detail.
Before you start: ask me every question you need answered to complete this without stopping.
Once I answer your questions, start building. When you think something is done, test it. Check that the data exists where it should. If something is broken add log statements, find the bug, fix it, and keep going. Do not stop and ask me questions. Do not tell me you are done until every one of these outcomes is true: list your outcomes one by one.

The one thing I want you to remember.

Programmers have always known that you do not ship until the tests pass. Now you can make your LLM live by the same rule.

Define your outcomes before you build. Give Claude a closed loop to work in. Tell it not to stop until every outcome is proven true.

Set it on a mission. Let it win.

**In the repo:** The mission prompt template lives at `/skills/engineering/long-task.md`. The test-driven development workflow lives at `/skills/engineering/test-driven.md`.
