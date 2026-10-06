# Ahmed Abdelmaguid — academic website

A static, content-driven personal academic website for GitHub Pages. Astro generates fast HTML at build time; TypeScript and Astro Content Collections validate the content; Markdown supplies maintainable research writing; CSS provides the responsive theme; and GitHub Actions publishes the built site.

## Requirements and commands

Use Node 20 or 24 LTS (Node 20 is pinned in `.nvmrc` for CI-compatible local work) and a current npm version.

```bash
npm install       # first local install
npm ci            # reproducible install / CI
npm run dev
npm run check
npm run build
npm run preview
npm run format
```

## Everyday maintenance

Identity, research interests, current work, social links, CV path, and navigation live in `src/config/site.ts`. Blank social fields are hidden. Change `--color-accent` in `src/styles/global.css` to recolor the site.

Create one Markdown file per publication in `src/content/publications/`, project in `src/content/projects/`, update in `src/content/updates/`, or note in `src/content/notes/`. Schemas in `src/content.config.ts` document and validate every field. Copy an existing file as a starting point. To publish a note, use `draft: false`; drafts never build public routes.

Education and teaching entries are YAML files in their corresponding content folders. Add experience as a YAML file in `src/content/experience/`; the homepage intentionally hides this section until real records exist.

Put a profile photo at `public/images/profile.jpg` (the initials fallback remains until then) and your real PDF at `public/cv/Ahmed_Abdelmaguid_CV.pdf`. The CV page detects whether that PDF exists. Add paper, code, DOI, and social URLs only when available.

## Deployment

This is configured as the user site `AhmedHamdi101.github.io`, served at `https://AhmedHamdi101.github.io/`. Push `main`; `.github/workflows/deploy.yml` installs with `npm ci`, builds, uploads, and deploys using GitHub’s official Pages actions. In repository **Settings → Pages**, set Source to **GitHub Actions**.

For a normal repository named `personal-site`, change `base` in `astro.config.mjs` to `/personal-site/` and update `site` to the corresponding URL. Keep this change centralized—do not edit individual links.

For a later custom domain, configure it in GitHub Pages, set the required DNS records at your registrar, allow GitHub to provision HTTPS, update `site` in `astro.config.mjs`, and add the required `CNAME` file if GitHub does not create it.

## Troubleshooting

- **Node/npm failure:** use Node 20 and remove/reinstall dependencies only if needed.
- **Content build error:** validate frontmatter against `src/content.config.ts`; dates use `YYYY-MM-DD`.
- **Missing photo/CV:** add the files at the paths above; neither causes a broken page.
- **Pages works locally but not online:** check the workflow log, Pages source, and `base` setting.
- **Theme does not persist:** ensure browser storage is enabled; preference is stored locally under `theme`.

See [architecture notes](docs/ARCHITECTURE.md) and the [content guide](docs/CONTENT_GUIDE.md).
