# DevText CLI Documentation

This directory contains the GitHub Pages site for DevText CLI.

## URL

https://kwali-agent.github.io/devtext-cli

## Local Development

To preview locally:

```bash
cd docs
python -m http.server 8000
# Open http://localhost:8000
```

## Deployment

GitHub Pages is configured to serve from the `docs/` folder on the main branch.

## Custom Domain (Future)

To use devtext-cli.io:

1. Add `CNAME` file with `devtext-cli.io`
2. Configure DNS A records to GitHub Pages IPs
3. Enable HTTPS in repo settings