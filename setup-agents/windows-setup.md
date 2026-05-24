# Setup Agent: Windows Setup

## What This Does

Installs every development tool needed for BootstrapOS on a Windows machine. Starts with WSL2 — the translation layer that makes developer tools work on Windows. Run this once on a new machine.

## Why WSL2

Almost all developer tools are built for Linux or Mac. WSL2 (Windows Subsystem for Linux) gives your Windows machine the ability to run Linux natively. Once WSL2 is running, your development environment behaves exactly like a Mac. One extra step up front, identical experience from there on.

## The Prompt

Paste this into Claude Code:

```
I am setting up a brand new Windows machine for BootstrapOS development. Install and configure everything in order. Verify each step before moving to the next. Fix anything that fails.

Important: WSL2 requires a Windows restart partway through. Tell me when to restart, wait for my confirmation that I have restarted, then continue.

Install in this exact order:

1. WSL2 with Ubuntu
   Command: wsl --install
   Then restart Windows.
   After restart, verify: wsl --version
   Ubuntu should open and ask you to create a username and password — tell me what to enter.

2. Node.js and npm inside WSL
   Command (inside WSL): 
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   Verify: node --version && npm --version

3. TypeScript globally inside WSL
   Command: npm install -g typescript
   Verify: tsc --version

4. Git inside WSL
   Command: sudo apt-get install git
   Verify: git --version

5. Cursor editor (Windows app)
   Action needed from me: Download from cursor.sh and install as a Windows application
   Tell me when to do this and what to look for
   Cursor connects to WSL automatically

6. GitHub SSH setup inside WSL
   Command sequence:
   - git config --global user.name "My Name" (ask me for my name)
   - git config --global user.email "my@email.com" (ask me for my email)
   - ssh-keygen -t ed25519 -C "my@email.com"
   - eval "$(ssh-agent -s)"
   - ssh-add ~/.ssh/id_ed25519
   Print the public key. Walk me through adding it to GitHub.
   Verify: ssh -T git@github.com

7. Claude Code inside WSL
   Command: npm install -g @anthropic-ai/claude-code
   Verify: claude --version

After every step: print a confirmation. At the end: print a complete summary.
```

## What Done Looks Like

```
Windows setup complete.

WSL2: Ubuntu running
Node.js: v20.x.x
npm: 10.x.x
TypeScript: 5.x.x
Git: 2.x.x
Cursor: installed (Windows app connected to WSL)
GitHub SSH: connected
Claude Code: x.x.x

Your Windows machine is ready to build.
```

---

## Error Handling

If any step fails, Claude should:
1. Read the error message carefully
2. Check if the issue is a Windows feature that needs enabling
3. Check if the tool is already installed (skip and verify the version)
4. Try an alternative installation method
5. Only ask the user for help if three attempts have failed

### Common Issues and Fixes

**WSL fails to install**
- Windows Subsystem for Linux may need to be enabled manually. Run in PowerShell as admin: `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart` and then `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`. Restart the computer and try again.

**Ubuntu does not install automatically**
- If `wsl --install` does not install Ubuntu, run `wsl --install -d Ubuntu` explicitly.

**npm permission errors in WSL**
- If `npm install -g` fails with EACCES inside WSL, fix with `sudo chown -R $USER /usr/local/lib/node_modules`.

**PATH not updated after install**
- If a tool was just installed but the command is not found, run `source ~/.bashrc` or open a new terminal tab.

**Windows Defender blocks scripts**
- If PowerShell scripts are blocked, the user may need to run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell as admin.
