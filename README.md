# DevText CLI

Format JSON, XML, YAML, and strip markdown — locally, no API needed.

## Install

```bash
npm install -g devtext-cli
```

Or use npx (no install):
```bash
npx devtext-cli --help
```

## Usage

```bash
# Format JSON file
devtext data.json -f json -o clean.json

# Pipe from stdin
echo '{"messy":"json"}' | devtext -f json

# Strip markdown code blocks
devtext ai-output.md -f strip

# Validate XML
devtext data.xml -f xml -c

# Convert YAML to JSON
devtext config.yaml -f yaml | devtext -f json
```

## Features

- **JSON**: Pretty-print, validate, minify
- **XML**: Format and validate
- **YAML**: Parse and dump
- **Strip**: Remove markdown code blocks from AI outputs

## Why Local?

- No API calls = works offline
- No rate limits
- No text leaves your machine
- Faster (no network)

## Compare: DevText CLI vs DevText Pro

| Feature | CLI | Pro |
|---------|-----|-----|
| Runs locally | ✅ | ❌ |
| Works offline | ✅ | ❌ |
| No API key | ✅ | Free tier |
| Batch processing | ✅ | ✅ |
| CI/CD integration | ✅ | ✅ |
| Price | Free | $5/mo |

Use CLI for local development. Use Pro for hosted API in production apps.

## License

MIT