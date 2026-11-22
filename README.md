# ai-personal

Personal AI setup, shared publicly, that isn't tied to any one project: skills, Claude Code mods and
the design notes behind them. The test for whether something belongs here: it would
still be useful if every project I'm working on disappeared.

## Layout

| Folder | What | Works in |
|---|---|---|
| `skills/` | Skills in the open Agent Skills format (`SKILL.md`) | Any tool that supports the format (Claude, ChatGPT, Codex, Gemini CLI, ...) |
| `plugins/` | Claude Code mods and plugins | Claude Code only (desktop and mobile apps draw themes) |
| `design/` | Design notes and comparison pages for the mods | Reference |
| `.claude-plugin/marketplace.json` | Makes this repo installable with `/plugin` | Claude Code |

## Install the Darkroom theme

At the prompt of a Claude Code terminal session:

```
/plugin install darkroom --marketplace cmugar/ai-personal
```

From a shell:

```
claude plugin install darkroom --marketplace cmugar/ai-personal
```

In the desktop app, where `/plugin` does not run: click **+** next to the prompt box,
then **Plugins**, **Add marketplace** with `cmugar/ai-personal`, then **Add plugin**.

Answer `y` to add the marketplace, then pick a scope (user scope applies it to every
session).

To go back to the app's default look, disable or uninstall the plugin from `/plugin`.

## Rules

- Public repo: everything committed here is published, history included. Never
  commit keys, tokens, passwords, or anything personal or client-specific; those go
  in a separate private repo.
- Anything project-specific stays in that project's repo.
- This repo is the master copy. A skill uploaded elsewhere (claude.ai settings, a
  custom GPT) is re-uploaded from here, not edited there.
