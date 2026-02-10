import * as prettier from 'prettier';

export interface JSONOptions {
  pretty?: boolean;
}

export function formatJSON(text: string, options: JSONOptions = {}): string {
  const { pretty = true } = options;
  
  // Try to parse as JSON first
  let parsed: any;
  try {
    parsed = JSON.parse(text);
  } catch (e: any) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
  
  if (pretty) {
    // Use prettier for consistent formatting
    return prettier.format(JSON.stringify(parsed), {
      parser: 'json',
      printWidth: 80,
      tabWidth: 2,
    });
  }
  
  return JSON.stringify(parsed);
}