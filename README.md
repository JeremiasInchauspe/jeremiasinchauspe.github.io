# Jeremias Inchauspe

TLDR:
- This repository hosts my personal academic website: <https://jeremiasinchauspe.github.io/>.
- The site is a lightweight static GitHub Pages website. No Jekyll, Node, or build step is required.
- Edit `index.html` for the home/about page.
- Edit `publications.html` and `teaching.html` for the main sections.
- Replace the profile photo in `assets/img/`.
- Edit visual styling in `assets/css/styles.css`.
- Commit and push to `main`; GitHub Pages publishes the site automatically.

<div align="center">

[![Website](https://img.shields.io/badge/website-live-0a66c2)](https://jeremiasinchauspe.github.io/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-active-2ea44f)](https://pages.github.com/)
[![Static HTML](https://img.shields.io/badge/static-HTML%20%2B%20CSS-orange)](#repository-structure)

**Personal academic website for Jeremias Inchauspe.**

</div>

## About

This is a small static site for an academic profile, publications, teaching, and training updates. It is inspired by the clean academic homepage structure used in sites such as Daniel M. Low's academic website, but implemented as plain HTML, CSS, and JavaScript for easier maintenance.

## Repository Structure

```text
.
|-- index.html                              # Home/about page
|-- publications.html                       # Publications and conference outputs
|-- teaching.html                           # Teaching and training
|-- research.html                           # Research timeline, kept as a direct page
|-- favicon.svg                             # Browser tab icon
|-- assets/
|   |-- css/styles.css                      # Site styles
|   |-- js/site.js                          # Theme toggle and publication search
|   |-- img/                                # Profile image
`-- .nojekyll                               # Serve static files directly on GitHub Pages
```

## Local Preview

From the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

## Updating The Site

Most edits are direct HTML changes:

- Home/about text: `index.html`
- Navigation links: the `<nav>` block in each HTML file
- Publications: `publications.html`
- Teaching and training: `teaching.html`
- Profile photo: `assets/img/profile-jeremias-fondo-celeste-close.jpg`
- Colors, spacing, and layout: `assets/css/styles.css`

After editing:

```powershell
git status
git add .
git commit -m "Update site"
git push
```

GitHub Pages will rebuild and publish the site from the `main` branch.

## Notes

- The site is public and served by GitHub Pages.
- The repository is intentionally simple so it can be edited without a build system.
- Keep personal contact information limited to the institutional email address.
