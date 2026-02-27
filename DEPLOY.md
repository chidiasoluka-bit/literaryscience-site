# Literary Science — Deployment Guide

## What's in this project

This is an **11ty (Eleventy)** static site with **Decap CMS** for browser-based editing.

- `src/` — all source files
  - `index.njk` — homepage
  - `epistemology.njk` — The Work
  - `studio.njk` — Studio page (pulls from `src/studio/*.md`)
  - `toolkit.njk` — Toolkit page (pulls from `src/toolkit/*.md`)
  - `work.njk` — Engage (paid offerings)
  - `newcomm.njk` — NewComm flagship
  - `studio/` — Studio entries as markdown files
  - `toolkit/` — Toolkit items as markdown files
  - `admin/` — Decap CMS admin panel
  - `css/` — Shared stylesheet
  - `img/` — Images
- `.eleventy.js` — Build config
- `netlify.toml` — Netlify deployment config
- `package.json` — Dependencies

---

## Step 1: Push to GitHub

1. Create a new GitHub repository (e.g., `literaryscience-site`)
2. Unzip this project and push it:

```bash
cd literaryscience-site
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/YOUR-USERNAME/literaryscience-site.git
git push -u origin main
```

## Step 2: Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Netlify will auto-detect settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `_site`
5. Click "Deploy site"
6. Once deployed, go to **Site settings** → **Domain management** → Add your custom domain `literaryscience.com`

## Step 3: Enable the CMS

This is the key step that lets you edit from your browser:

1. In Netlify, go to **Site settings** → **Identity** → Click **Enable Identity**
2. Under **Registration**, set to **Invite only**
3. Under **Services** → **Git Gateway** → Click **Enable Git Gateway**
4. Go to **Identity** tab → **Invite users** → Add your email
5. You'll receive an email — click the confirmation link
6. Now go to `literaryscience.com/admin/`
7. Log in with your email

## How to Add Content

### Via the CMS (recommended)

1. Go to `literaryscience.com/admin/`
2. Click **Studio Entries** or **Toolkit Items**
3. Click **New Studio Entry** (or New Toolkit Item)
4. Fill in the fields:
   - **Title** — the entry title
   - **Type** — Musing, Drawing, Aside, Quote, or Pinned
   - **Date** — when it was written/created
   - **Image** — upload a drawing or photo (optional)
   - **Dark background** — toggle for dark card
   - **Tall** — toggle to span two rows in the grid
   - **Body** — write in markdown (bold, italic, links all work)
5. Click **Publish**
6. Netlify rebuilds automatically in ~30 seconds

### Via text files (for the adventurous)

Create a new `.md` file in `src/studio/`:

```markdown
---
title: My New Musing
type: musing
date: 2026-03-15
---

The body of the entry goes here. *Italic* and **bold** work.
```

Push to GitHub. Netlify rebuilds automatically.

### Adding toolkit PDFs

1. In the CMS, edit a Toolkit Item
2. Use the **Download File** field to upload a PDF
3. Publish — the "Coming soon" button becomes a "Download" button

---

## Entry Types

| Type | Dot Color | Use for |
|------|-----------|---------|
| `musing` | Black | Extended thoughts, intellectual explorations |
| `drawing` | Gray | Sketches, diagrams, visual thinking |
| `aside` | Light gray | Short observations, fragments |
| `quote` | Hollow circle | Quotes from others with your commentary |
| `pinned` | Black | Important entry that stays at the top |

## Options

| Field | What it does |
|-------|-------------|
| `dark: true` | Black background card |
| `tall: true` | Spans two rows in the grid |
| `pinned: true` | Hides the date (for permanent entries) |
| `image` | Shows an image at the top of the entry |

---

## Site Structure

```
literaryscience.com/              → Homepage (studio entrance)
literaryscience.com/epistemology/  → The Work (full epistemology)
literaryscience.com/studio/        → The Studio (musings, drawings)
literaryscience.com/toolkit/       → The Toolkit (free downloads)
literaryscience.com/work/          → The Door (paid offerings)
literaryscience.com/newcomm/       → NewComm (flagship)
literaryscience.com/admin/         → CMS editing panel
```
