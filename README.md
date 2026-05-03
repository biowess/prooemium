<p align="center">
  <a href="https://biowess.github.io/prooemium">
    <img
      alt="Live Demo"
      src="https://img.shields.io/badge/live%20demo-biowess.github.io%2Fprooemium-F3E7D3?style=flat-square&labelColor=2A2118&color=E8D6B8&logo=vercel&logoColor=F8F3EA"
    />
  </a>
</p>

<p align="center">
  <img
    alt="React 19.0.1"
    src="https://img.shields.io/badge/React-19.0.1-F3E7D3?style=flat-square&labelColor=2A2118&logo=react&logoColor=CBB38A"
  /> <img
    alt="Vite 6.2.3"
    src="https://img.shields.io/badge/Vite-6.2.3-F3E7D3?style=flat-square&labelColor=2A2118&logo=vite&logoColor=D8BE8A"
  /> <img
    alt="TypeScript 5.8.2"
    src="https://img.shields.io/badge/TypeScript-5.8.2-F3E7D3?style=flat-square&labelColor=2A2118&logo=typescript&logoColor=C9AE7B"
  /> <img
    alt="Tailwind CSS 4.1.14"
    src="https://img.shields.io/badge/Tailwind_CSS-4.1.14-F3E7D3?style=flat-square&labelColor=2A2118&logo=tailwindcss&logoColor=DCC39A"
  /> <img
    alt="React Router 7.14.2"
    src="https://img.shields.io/badge/React_Router-7.14.2-F3E7D3?style=flat-square&labelColor=2A2118&logo=reactrouter&logoColor=C7A06A"
  />
</p>

# Prooemium

**Prooemium** is a personal blog and journal built like a small publication: measured, structured, and quiet on purpose. It does not chase noise. It gives the writing a page, a frame, and room to breathe.

The site is currently live at **[biowess.github.io/prooemium](https://biowess.github.io/prooemium)**.

## What this project is

This repository contains a front-end journal experience shaped around editorial restraint. The homepage works like a front page: the newest entry is promoted as the lead story, while older writing becomes an archive grid. Each article opens into a spacious reading layout with metadata on the side and the text in the center.

The result is not a generic blog engine. It is a carefully composed reading room.

## The spirit of the project

The design language is intentionally severe: cream paper, black ink, a single red accent, hard borders, sharp corners, and a grid that stays visible instead of hiding itself. The typography is doing most of the emotional work. The layout exists to support the writing, not to compete with it.

That same discipline carries into the content model. Entries are not written as loose Markdown files. They are stored as structured JSON documents, which keeps the editorial form explicit:

- what the piece is called
- when it was published
- how long it reads
- who wrote it
- how the body is assembled block by block

This keeps the project calm, predictable, and easy to extend without losing its shape.

## How writing is organized

Articles live in `src/content/articles/*.json`. Each file represents one published entry and follows the same schema.

```json
{
  "slug": "a-stable-url-for-the-article",
  "title": "Article Title",
  "date": "2026-05-03",
  "excerpt": "A short summary shown on the homepage and article header.",
  "readTime": "5 min read",
  "author": "Mohammed W. Hammami",
  "content": [
    { "type": "paragraph", "text": "Opening paragraph..." },
    { "type": "heading", "text": "Section Title" },
    {
      "type": "quote",
      "text": "Quoted passage.",
      "citation": "Source or attribution"
    },
    {
      "type": "image",
      "url": "/assets/example.png",
      "alt": "Descriptive alt text"
    },
    { "type": "separator" }
  ]
}
```

### Supported content blocks

The renderer currently understands five block types:

- `paragraph`
- `heading`
- `quote`
- `image`
- `separator`

Quotes can include a citation line. Images can be embedded from `url` with descriptive `alt` text. Separators add a visual pause between sections.

There is no tag system or category layer in the current schema. The archive is intentionally date-led, which keeps the experience spare and editorial rather than database-like.

## Editorial workflow

The writing workflow is simple and deliberate:

1. Create a new JSON file inside `src/content/articles/`.
2. Fill in the article metadata: `slug`, `title`, `date`, `excerpt`, `readTime`, and `author`.
3. Compose the body as an ordered list of content blocks.
4. Save the file and rebuild the site.

The articles are loaded with `import.meta.glob(..., { eager: true })` in `src/lib/articles.ts`, so every JSON file is discovered at build time and sorted by date in descending order. The newest entry becomes the featured article on the homepage.

Routes are equally direct:

- `/` — the front page and archive
- `/article/:slug` — a single entry
- `/about` — the manifesto and author page

## How the code supports the reading experience

A few implementation details shape the tone of the site:

- `src/components/layout/Header.tsx` establishes the publication header, volume mark, and navigation.
- `src/components/layout/Footer.tsx` closes the page like a printed colophon.
- `src/pages/Home.tsx` features the most recent entry and presents the rest as an archive grid.
- `src/pages/Article.tsx` renders structured article blocks and keeps reading centered and spacious.
- `src/pages/About.tsx` turns the author page into a manifesto rather than a résumé.
- `src/index.css` defines the paper/ink palette, the fonts, the newsprint texture, and the sharp-edged visual system.

The typography stack is part of the identity:
- **EB Garamond** for body copy
- **Playfair Display** for display headings
- **Inter** for interface text
- **JetBrains Mono** for metadata and publication marks

The color system stays disciplined:
- paper: `#F9F9F7`
- ink: `#111111`
- accent red: `#CC0000`

## Visual identity

Prooemium is designed to feel like a modern newspaper folded into a journal.

The homepage uses a full-width lead article and a tight archive grid. The article view introduces a fixed metadata column, a strong title block, and a text column with generous line length. The first paragraph receives a drop cap. Quotes are framed like editorial pull quotes. Images are bordered and restrained. The whole interface is built around clarity, not ornament.

The About page extends that same logic into a short manifesto and a portrait, reinforcing that the site is as much about position and voice as it is about publishing.

## Project structure

```text
src/
├── components/layout/   # Header, footer, and shared page shell
├── content/articles/    # Article JSON documents
├── lib/                 # Article loading helpers
├── pages/               # Home, article, and about pages
├── types.ts             # Shared content and article types
├── App.tsx              # Router setup
└── index.css            # Global visual system and typography
public/
└── assets/photo.png     # About-page portrait
```

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

To build the production bundle:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

## Notes

The repository includes an `.env.example` file from the original scaffold, including `GEMINI_API_KEY` and `APP_URL`. The published journal experience in this snapshot is content-driven and client-rendered.

## Closing

Prooemium is a journal, but also a posture: precise, quiet, and deliberate. It treats each entry as something to be composed, not merely posted. The code keeps that promise by giving the writing a structure strong enough to disappear.
