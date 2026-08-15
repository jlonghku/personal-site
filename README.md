# Long Jiang — Academic Website

Personal academic website for Dr Long Jiang, Research Assistant Professor in the Department of Civil and Environmental Engineering at The Hong Kong Polytechnic University.

## Content

- Research themes in ecohydrological modelling, urban flooding, water quality, and environmental AI
- Categorized technical expertise and selected honours
- Selected research projects and publications
- Academic experience, teaching, professional service, and contact details
- Links to PolyU, Google Scholar, ORCID, and GitHub profiles

## Local preview

This is a dependency-free static site. Serve the `public` directory with any local web server, for example:

```bash
python3 -m http.server 8000 -d public
```

Then open `http://localhost:8000`.

## Deploy to Vercel

Import this GitHub repository in Vercel. The included `vercel.json` publishes the `public` directory without a build step. Every later push to the connected GitHub branch will trigger a new deployment.

## Updating the site

- Main content: `public/index.html`
- Visual design: `public/styles.css`
- Mobile menu and copyright year: `public/script.js`
- Profile photograph: `public/profile.jpg`
