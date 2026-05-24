# Module 2 — How to Set Up BootstrapOS

## Intro

Everything we covered in Module 1 was concepts. Now we build. But before you write a single line of code you need your environment set up correctly. Most founders skip this step and spend days debugging problems that were never about their code — they were about their setup.

This module walks you through getting BootstrapOS running on your machine from scratch. By the end you will have Claude Code open, the BootstrapOS workspace cloned, GitHub connected, and your entire stack ready to build anything.

---

## Lesson 1: How to Set Up Claude Code and Clone the BootstrapOS Workspace

The first thing you are going to do is download the Claude app. Go to claude.ai. Download it for Mac or Windows. Install it. Open it.

That is step one. Everything else happens from inside this app.

The three modes you will see.

When you open Claude you are going to see a few different things. Chat. Claude Code. And something called Cowork.

Chat is what most people think of when they think of Claude. You type a message. Claude responds. Back and forth. Great for questions, brainstorming, writing. You will use it occasionally but it is not where you build.

Claude Code is where you live. Claude Code gives Claude access to your entire file system. It can read files, create files, run commands, install packages, push to GitHub, and build your entire app autonomously. This is the tool that makes everything in Module 1 actually possible. And it is not just for coding. You can use Claude Code for marketing tasks too. Cold outbound infrastructure. Programmatic SEO pages. Landing pages. Ad copy at scale. Anything that involves files and automation. Most serious founders use Claude Code for everything. That is completely normal. That is what we do.

Cowork is a desktop tool for non-developers to automate file and task management. It is a great tool but for this course you can ignore it. Claude Code does everything Cowork does and more. Stick with Claude Code.

Clone the BootstrapOS workspace.

The very first thing you do inside Claude Code is clone the BootstrapOS workspace. Run this command:

```
git clone https://github.com/BrainyZeiny/bootstrapos-workspace.git
```

Once it is cloned you have everything you need to start building. Let me walk you through what is inside it.

The BootstrapOS file structure.

```
/bootstrapos-workspace
  CLAUDE.md
  setup.md
  new-project.md
  /artifacts
  /knowledge
  /skills
  /reference
  /projects
```

Here is what each folder does.

CLAUDE.md is the master brain of the workspace. Every time you open Claude Code it reads this file first. Your stack. Your rules. Your philosophy. Claude never forgets anything that is in CLAUDE.md. This is how Claude knows to always use TypeScript, always log to the /logs directory, never hardcode secrets, never pollute the root directory. You set the rules once. Claude follows them forever.

setup.md is the script Claude follows to set up your machine from scratch. Mac or Windows. Every tool. Every account. Every credential. You say follow setup.md and Claude walks you through the entire thing autonomously.

new-project.md is the script Claude follows every time you start a new app. It walks you through filling out the master plan, initializes the project folder, connects GitHub, Vercel, Turso, and Hasura, and starts building feature by feature.

artifacts is where all generated files land. Claude never pollutes your root directory. Everything it creates goes here. Your workspace stays clean no matter how much Claude builds.

knowledge is the course. Every module from BootstrapOS lives here as a markdown file. The vibe coding philosophy. The schema methodology. The planning framework. The marketing playbooks. Claude reads this folder so it always understands the why behind every decision it makes.

This folder is free and it updates forever. Every time a new module drops on the [BrainyZeiny YouTube channel](https://youtube.com/@BrainyZeiny), a new file lands in /knowledge. You just pull the latest version of the repo and Claude is instantly smarter.

skills is where the tactical playbooks live. The skills folder is organized into sections:

Setup skills — the exact prompts for setting up every tool in the stack. Mac setup. Windows setup. GitHub. Vercel. Turso. Hasura.

Engineering skills — schema design, component building, the debug loop, long tasks, test-driven development, deploy verification. Every repeatable engineering workflow has a skill file.

Marketing skills — cold outbound infrastructure, mass email at scale, programmatic SEO, Reddit ad launch, Meta ad launch, Google Search ads, affiliate program setup, landing page builder. Every marketing workflow gets turned into a skill and added to this folder. Every YouTube video where I show you how I do something — that skill lands in the repo the same day.

reference is your template library. Common schema patterns so you never design a schema from scratch. Reusable components so you never build the same UI twice. Ad templates, email templates, landing page templates.

projects is where your actual apps live. Every new app you build gets its own folder here with its own CLAUDE.md, its own /logs directory, its own /decisions log.

The one thing I want you to remember.

You do not need to understand every file in this workspace. You just need to know it is there and that Claude reads it. The workspace is your operating system. Claude is your engineering team. You stay in Claude Code. You talk to it. It builds.

Clone the repo. Open it in Claude Code. Say follow setup.md.

Everything else happens from there.

**In the repo:** The workspace lives at https://github.com/BrainyZeiny/bootstrapos-workspace. Join the community on [Discord](https://discord.gg/WeAkRwDf).

---

## Lesson 2: Setup From Scratch on a Mac

Before you write a single line of code you need your machine set up correctly. We are going to do the entire setup in one shot using Claude Code itself. You are going to give Claude one prompt and it is going to install everything you need, verify every installation, fix anything that breaks, and not stop until your machine is completely ready.

Here is what we are installing. In this order.

Homebrew. This is the package manager for Mac. Think of it as the app store for developer tools.

Node.js and npm. Node is the runtime that lets you run JavaScript and TypeScript on your machine. npm is the package manager that comes with it.

TypeScript. Self-documenting. Claude reads it better. Always TypeScript. We install it globally.

Git. Git is how you track changes to your code and how you push your code to GitHub.

Cursor. This is your code editor. Think of it like a Word document but for code. Cursor is built specifically for AI-assisted development.

GitHub and SSH keys. GitHub is where your code lives in the cloud. SSH keys are how your machine proves to GitHub that it is you.

Claude Code. The command line tool that lets Claude read your entire codebase, run commands, create files, and build autonomously.

One prompt. Paste this into Claude Code. Walk away. Come back when it is done.

This is the closed loop in practice. Not for building an app. For setting up your machine. Same principle. Define what done looks like. Tell Claude not to stop until it gets there.

**In the repo:** The Mac setup prompt lives at `/setup-agents/mac-setup.md`. Claude follows it step by step.

---

## Lesson 3: Setup From Scratch on Windows

Windows has one extra step that Mac does not have. Before we install anything else we need to install WSL.

WSL stands for Windows Subsystem for Linux. Almost all developer tools are built for Linux or Mac. Windows speaks a different language. WSL gives your Windows machine the ability to speak Linux — which means every tool we need works exactly the same way it does on a Mac.

Think of it like installing a translation layer. Once WSL is running your Windows machine behaves like a Linux machine for development purposes. And from that point on everything is identical to the Mac setup.

This is the one thing most Windows tutorials skip. They try to install developer tools directly on Windows and then wonder why half of them do not work correctly. Always start with WSL. Always.

Everything else installs inside WSL. Same tools. Same order. Same verification. Same closed loop.

**In the repo:** The Windows setup prompt lives at `/setup-agents/windows-setup.md`.

---

## Lesson 4: Localhost vs Production — Why Your App Lives in Two Places

When you start building your app something is going to confuse you if nobody explains it first.

Your app lives in two places at the same time. And they are completely separate from each other.

The first place is your machine. This is called localhost. When you run your app locally it is only visible to you. Nobody else on the internet can see it. It is your private sandbox.

The second place is production. This is your app running on Vercel where the whole world can see it. Real users. Real data. Real consequences.

The rule is simple. You always build on localhost first. You never touch production directly. When something is ready — when it works locally and you have tested it — you push it to GitHub. Vercel sees the push and automatically deploys it to production. The whole world sees the update.

That is the whole flow. Build locally. Test locally. Push to GitHub. Vercel deploys. Production updates.

When you run your Next.js app locally you open your terminal and type one command. npm run dev. Your app starts up and gives you a local address — something like localhost:3000. You open that in your browser and you see your app exactly as it will look in production.

The one habit that protects you.

Never push to production something you have not tested on localhost first.

Build locally. Test locally. Push when it works. That is the whole game.

---

## Lesson 5: How to Set Up GitHub and Connect It to Your Project

Before we set up GitHub let me explain something that will make everything click.

Code is just text. That is it. Your entire app — every feature, every screen, every piece of logic — is just a collection of text files sitting in a folder on your computer. There is nothing magical about it. It is text. Organized in a specific way.

And your computer — right now, when you run your app locally — is acting as a server. When you type npm run dev and open localhost:3000 in your browser, your computer is serving your app to your browser the same way a real server serves it to the world. The only difference is that your computer is only accessible to you.

So when you are building locally you are building on your own private server. You make changes to the text files. Your local server picks them up instantly. You see the result in your browser. You test it. And when it is ready you send those text files somewhere else — a real server that the whole world can access.

That somewhere else is GitHub and Vercel working together.

Here is the flow.

You write code on your computer. Text files in a folder. When you are happy with what you built you push those files to GitHub. GitHub is just cloud storage for text files — your code lives there safely in the cloud. The moment your code lands on GitHub Vercel sees it and automatically copies those files to its servers. Your app is now live in production.

That is the entire pipeline. Your computer to GitHub to Vercel to the world.

And the key concept here is the main branch. When you push your code to GitHub it goes to the main branch. Main is the source of truth. It is the version of your code that Vercel watches. Every time something new lands on main Vercel deploys it automatically. So the rule is simple: only push to main when something is working and tested.

**In the repo:** The GitHub setup prompt lives at `/setup-agents/github-setup.md`. The Vercel setup prompt lives at `/setup-agents/vercel-setup.md`.
