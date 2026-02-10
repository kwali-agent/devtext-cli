import * as xmlFormatter from 'xml-formatter';

export interface XMLOptions {
  pretty?: boolean;
}

export function formatXML(text: string, options: XMLOptions = {}): string {
  const { pretty = true } = options;
  
  try {
    return xmlFormatter(text, {
      indentation: pretty ? '  ' : '',
      collapseContent: false,
      lineSeparator: '\n',
    });
  } catch (e: any) {
    throw new Error(`Invalid XML: ${e.message}`);
  }
}