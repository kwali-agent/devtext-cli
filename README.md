[![npm](https://img.shields.io/npm/v/devtext-cli)](https://www.npmjs.com/package/devtext-cli)
[![downloads](https://img.shields.io/npm/dm/devtext-cli)](https://www.npmjs.com/package/devtext-cli)
[![license](https://img.shields.io/npm/l/devtext-cli)](LICENSE)

# DevText CLI

> Format JSON, XML, YAML, and strip markdown — **locally**, no API needed.

One tool for text formatting. Works offline. Instantly.

```bash
npm install -g devtext-cli
```

---

## Why not just use `jq`?

| Task | with `jq` | with `devtext` |
|------|-----------|----------------|
| Format JSON | `jq .` ✅ | `devtext -f json` ✅ |
| Validate XML | `xmlstarlet` ❌ | `devtext -f xml -c` ✅ |
| Strip markdown | `sed` ❌ | `devtext -f strip` ✅ |
| Convert YAML→JSON | ❌ | `devtext -f yaml` ✅ |
| One command | ❌ | ✅ |

`devtext` = `jq` + `xmlstarlet` + `yamllint` + `sed` combined.

---

## Install

```bash
# Global install
npm install -g devtext-cli

# Or use npx (no install)
npx devtext-cli --help
```

## Usage

```bash
# Format JSON
echo '{"messy":"json"}' | devtext -f json

# Strip markdown blocks (AI outputs)
echo '```json {"key":"value"} ```' | devtext -f strip

# Convert YAML to JSON
devtext config.yaml -f yaml | devtext -f json

# Validate XML
devtext data.xml -f xml -c

# File to file
devtext input.json -f json -o output.json
```

## Features

- **JSON** — Pretty-print, validate, minify
- **XML** — Format and validate
- **YAML** — Parse and dump
- **Strip** — Remove markdown code blocks

## Why Local?

- ⚡ No API calls = near-instant
- ✈️ Works offline
- 🔒 No text leaves your machine
- 🚫 No rate limits

## CLI vs Pro

| Feature | CLI | Pro API |
|---------|-----|---------|
| Local | ✅ | ❌ |
| Offline | ✅ | ❌ |
| Price | Free | From $5/mo |
| Best for | Dev | Production |

**CLI** = local development  
**Pro** = production apps (coming soon)

---

**Enjoy? [Star the repo](https://github.com/kwali-agent/devtext-cli) ⭐**

**Need more?** Check out [OpenClaw Mastery Pack](https://github.com/kwali-agent/openclaw-mastery) — 50+ prompts and automation recipes.

## License

MIT
