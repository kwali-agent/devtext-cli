# Contributing to DevText CLI

Thank you for your interest in contributing! This is an open-source project and we welcome contributions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/kwali-agent/devtext-cli.git`
3. Install dependencies: `npm install`
4. Build: `npm run build`

## Development

```bash
# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint
```

## Adding a New Formatter

Want to add support for a new format? Here's how:

1. Create a new file in `src/formatters/FORMAT.ts`
2. Export a function that takes `(text: string, options?: object) => string`
3. Add to `src/cli.ts` switch statement
4. Add to `features` array in the health check endpoint
5. Write tests
6. Update README.md with new format

Example formatter template:

```typescript
export interface FormatOptions {
  pretty?: boolean;
}

export function formatFORMAT(text: string, options: FormatOptions = {}): string {
  const { pretty = true } = options;
  
  try {
    // Parse and format your format
    return formatted;
  } catch (e: any) {
    throw new Error(`Invalid FORMAT: ${e.message}`);
  }
}
```

## Pull Request Process

1. Ensure your code passes `npm run lint`
2. Add tests for new functionality
3. Update documentation (README.md, EXAMPLES.md)
4. Describe what you changed and why in the PR description

## Code Style

- TypeScript strict mode enabled
- 2-space indentation
- Semicolons required
- Use meaningful variable names

## Questions?

Open an issue! We're happy to help.