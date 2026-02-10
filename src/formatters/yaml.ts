import * as yaml from 'js-yaml';

export interface YAMLOptions {
  dump?: boolean;
}

export function formatYAML(text: string, options: YAMLOptions = {}): string {
  const { dump = true } = options;
  
  try {
    // Try parsing as YAML
    const parsed = yaml.load(text);
    
    if (dump) {
      return yaml.dump(parsed, {
        indent: 2,
        lineWidth: -1, // No line wrapping
        noRefs: true,
      });
    }
    
    return JSON.stringify(parsed);
  } catch (e: any) {
    throw new Error(`Invalid YAML: ${e.message}`);
  }
}