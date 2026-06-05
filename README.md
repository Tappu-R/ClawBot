# 🦞 ClawBot

> A modular AI Agent framework built with Bun and TypeScript.

ClawBot is an experimental AI agent platform designed to operate through multiple interfaces such as a Command Line Interface (CLI) and Telegram. The project aims to provide a flexible agent architecture capable of tracking actions, executing tools, analyzing codebases, and interacting with users through different communication channels.

---

## ✨ Vision

ClawBot is being developed as an autonomous agent system where a user provides a goal and the agent:

1. Understands the objective.
2. Plans required actions.
3. Executes available tools.
4. Tracks all modifications and decisions.
5. Requests approval when necessary.
6. Delivers results through various interfaces.

The current repository contains the foundation of this architecture.

---

# 🏗 Architecture

```text
User
 │
 ▼
CLI / Telegram Interface
 │
 ▼
Orchestrator
 │
 ├──────────────┐
 ▼              ▼
ActionTracker  ToolExecuter
 │              │
 └──────┬───────┘
        ▼
     AI Model
        ▼
      Result
```

---

# 📂 Project Structure

```text
ClawBot/
│
├── ai/
│   ├── ai.config.ts
│   └── index.ts
│
├── modes/
│   ├── cli.ts
│   ├── telegram.ts
│   │
│   └── agent/
│       ├── action_tracker.ts
│       ├── orchestrator.ts
│       ├── tool_executer.ts
│       └── types.ts
│
├── tui/
│   └── terminal.ts
│
├── index.ts
├── package.json
├── tsconfig.json
└── bun.lock
```

---

# 🧠 Core Components

## AI Layer

### `ai/ai.config.ts`

Responsible for creating the language model instance.

Features:

* Uses OpenRouter as provider
* Reads API key from environment variables
* Supports configurable model selection
* Centralized AI configuration

Environment Variables:

```env
OPENROUTER_API_KEY=your_key_here
OPENROUTER_DEFAULT_MODEL=model_name
```

---

## Terminal UI

### `tui/terminal.ts`

Acts as the entry point after startup.

Responsibilities:

* Displays available modes
* Routes users to the selected interface
* Handles application navigation

Current modes:

* CLI Mode
* Telegram Mode
* Exit

---

## CLI Mode

### `modes/cli.ts`

Command-line interaction layer.

Current status:

* Basic implementation
* Intended for direct terminal conversations with the agent

Future possibilities:

* Interactive agent sessions
* Project analysis
* Code generation
* Tool execution

---

## Telegram Mode

### `modes/telegram.ts`

Telegram integration layer.

Purpose:

* Connect ClawBot to Telegram
* Enable remote agent interaction

Current status:

* Connection placeholder

Future goals:

* Telegram chat commands
* Agent conversations
* Remote task execution

---

## Agent System

The agent architecture lives inside:

```text
modes/agent/
```

This directory represents the intelligence layer of ClawBot.

---

### Action Tracker

File:

```text
modes/agent/action_tracker.ts
```

Tracks every operation performed by the agent.

Examples:

* File creation
* File modification
* Folder creation
* Tool execution
* Code analysis

Benefits:

* Auditability
* User approval workflow
* Agent transparency
* Change history

---

### Orchestrator

File:

```text
modes/agent/orchestrator.ts
```

Acts as the brain of the agent.

Responsibilities:

* Accept user goals
* Create execution plans
* Coordinate tools
* Communicate with AI models
* Manage workflow

Example:

```text
User Goal:
"Build a REST API"

▼

Orchestrator

▼

Plan Tasks

▼

Execute Tools

▼

Track Actions

▼

Return Result
```

---

### Tool Executer

File:

```text
modes/agent/tool_executer.ts
```

Responsible for running agent tools.

Planned capabilities:

* File operations
* Shell commands
* Project generation
* Code editing
* External integrations

Current status:

* Placeholder implementation

---

### Types and Configuration

File:

```text
modes/agent/types.ts
```

Contains:

* AgentConfig
* ActionLog
* ActionStatus
* ActionType

Supported action types:

```text
fileCreate
fileModify
fileDelete
folderCreate
codeAnalysis
toolExecute
```

Configuration options:

```typescript
allowShellExecution
allowFileCreation
allowFileModification
allowFolderCreation
```

---

# 🚀 Getting Started

## Prerequisites

* Bun
* TypeScript
* OpenRouter API Key

Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Tappu-R/ClawBot.git
cd ClawBot
```

Install dependencies:

```bash
bun install
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key
OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
```

---

## Running

Start the application:

```bash
bun run index.ts wakeup
```

You will be presented with:

```text
CLI
Telegram
Quit
```

Select the desired mode.

---

# 🛣 Roadmap

## Phase 1

* [x] Bun project setup
* [x] OpenRouter integration
* [x] Terminal UI
* [x] Agent action tracking
* [ ] Tool execution engine
* [ ] Goal planning system

## Phase 2

* [ ] Codebase analysis
* [ ] File creation tools
* [ ] File editing tools
* [ ] Shell command execution
* [ ] Approval workflows

## Phase 3

* [ ] Telegram bot integration
* [ ] Multi-agent support
* [ ] Memory system
* [ ] Autonomous workflows

---

# 🔒 Safety Philosophy

ClawBot is designed around transparency.

Every important action should:

1. Be logged.
2. Be reviewable.
3. Be traceable.
4. Be optionally approved by the user.

The Action Tracker system forms the foundation for this approach.

---

# 🛠 Tech Stack

* TypeScript
* Bun
* OpenRouter
* AI SDK
* Commander
* Chalk
* Figlet
* Clack Prompts

---

# 📜 License

This project is currently under active development.

Choose an open-source license before production use.

Examples:

* MIT
* Apache-2.0
* GPL-3.0

---

Built with ❤️ using Bun, TypeScript, and AI By Tappu 😜
