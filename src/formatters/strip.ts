export function stripMarkdown(text: string): string {
  // Remove markdown code blocks
  // Matches ```language\ncode\n```
  let result = text;
  
  // Remove fenced code blocks with language specifier
  result = result.replace(/```[\w]*\n?([\s\S]*?)```/g, '$1');
  
  // Remove inline code
  result = result.replace(/`([^`]+)`/g, '$1');
  
  // Remove remaining markdown syntax
  // Bold/italic
  result = result.replace(/(\*\*|__)([^\]]+?)\1/g, '$2');
  result = result.replace(/(\*|_)([^\]]+?)\1/g, '$2');
  
  // Links
  result = result.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  result = result.replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1');
  
  // Headers
  result = result.replace(/^#{1,6}\s+/gm, '');
  
  // Clean up extra whitespace
  result = result.trim();
  
  return result;
}