# Content guide

All content is validated during `npm run check` and `npm run build`.

## Publication

Create `src/content/publications/example.md`:
```yaml
---
title: "Title"                    # required
authors: [Ahmed Abdelmaguid]       # required
year: 2026                         # required
summary: "One sentence."           # required
tags: [Text-to-SQL]                # optional
featured: false                    # optional
venue: "Venue"                     # optional
date: 2026-09-25                   # optional
status: "Research manuscript"      # optional
paper: https://example.org/paper    # optional
code: https://github.com/example    # optional
project: /research/example          # optional
---
```

## Project

Create `src/content/projects/example.md`; the filename becomes its URL slug (for example, `example.md` becomes `/research/example`). Required fields are `title`, `status`, and `summary`. Optional fields: `tags`, `featured`, `image`, `collaborators`, `paper`, `code`, `external`, and `relatedPublications`. Its Markdown body becomes the detail page.

## Update and note

An update needs `date`, `category`, and `title`; `description`, `featured`, `image`, `externalLink`, and `internalLink` are optional. Categories are defined in `content.config.ts`.

A note needs `title`, `date`, `description`, and `category`. Optional: `tags`, `featuredImage`, `draft`. Set `draft: true` to keep it private.

## YAML records

Add experience with required `role`, `organization`, `startDate`, and `tags`; optional `location`, `endDate`, `description`. Education requires `degree`, `field`, `institution`, and `status`. Teaching requires `courseCode`, `institution`, and `role`; `courseName`, `term`, `year`, and `description` are optional.
