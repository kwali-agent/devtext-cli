#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import * as fs from 'fs';
import { formatJSON } from './formatters/json';
import { formatXML } from './formatters/xml';
import { formatYAML } from './formatters/yaml';
import { stripMarkdown } from './formatters/strip';

const program = new Command();

program
  .name('devtext')
  .description('Format JSON, XML, YAML, and strip markdown — locally, no API needed')
  .version('1.0.0');

program
  .argument('[input]', 'Input file (or use stdin)')
  .option('-f, --format <type>', 'Output format: json, xml, yaml, strip', 'json')
  .option('-o, --output <file>', 'Output file (default: stdout)')
  .option('-p, --pretty', 'Pretty print formatted output', true)
  .option('-m, --minify', 'Minify output (overrides --pretty)')
  .option('-c, --check', 'Validate without outputting')
  .action(async (inputFile, options) => {
    try {
      // Read input
      let text: string;
      if (inputFile) {
        text = fs.readFileSync(inputFile, 'utf-8');
      } else {
        // Read from stdin
        const chunks: Buffer[] = [];
        for await (const chunk of process.stdin) {
          chunks.push(chunk);
        }
        text = Buffer.concat(chunks).toString('utf-8');
      }

      if (!text.trim()) {
        console.error(chalk.red('Error: No input provided'));
        process.exit(1);
      }

      // Format based on type
      let result: string;
      switch (options.format) {
        case 'json':
          result = formatJSON(text, { pretty: !options.minify && options.pretty });
          break;
        case 'xml':
          result = formatXML(text, { pretty: !options.minify && options.pretty });
          break;
        case 'yaml':
          result = formatYAML(text, { dump: !options.minify && options.pretty });
          break;
        case 'strip':
          result = stripMarkdown(text);
          break;
        default:
          console.error(chalk.red(`Error: Unknown format "${options.format}"`));
          process.exit(1);
      }

      if (options.check) {
        console.log(chalk.green('✓ Valid'));
        process.exit(0);
      }

      // Output
      if (options.output) {
        fs.writeFileSync(options.output, result);
        console.log(chalk.green(`✓ Formatted output written to ${options.output}`));
      } else {
        console.log(result);
      }
    } catch (error: any) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

// Example command
program
  .command('example')
  .description('Show usage examples')
  .action(() => {
    console.log(chalk.bold('DevText CLI Examples\n'));
    
    console.log(chalk.cyan('# Format JSON from file'));
    console.log('devtext messy.json -f json -o clean.json\n');
    
    console.log(chalk.cyan('# Pipe from stdin'));
    console.log(`echo '{"messy":"json"}' | devtext -f json\n`);
    
    console.log(chalk.cyan('# Strip markdown code blocks'));
    console.log(`echo ' \`\`\`json {test:1} \`\`\`' | devtext -f strip\n`);
    
    console.log(chalk.cyan('# Validate XML')));
    console.log('devtext data.xml -f xml -c\n');
    
    console.log(chalk.cyan('# Convert YAML to JSON'));
    console.log('devtext config.yaml -f yaml | devtext -f json');
  });

program.parse();

// Show help if no args
if (!process.argv.slice(2).length) {
  program.outputHelp();
}