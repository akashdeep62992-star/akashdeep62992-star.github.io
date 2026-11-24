# Akashdeep · Portfolio

Personal portfolio site built with **React 18** and **Vite**. It's responsive from phone to desktop and follows the system's light or dark mode.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static files in dist/
```

## Edit content

All text (projects, skills, timeline and contact links) lives in `src/data/profile.js`. Set `email`, `linkedin` or `resume` there and the matching contact buttons appear.

## Structure

```
src/
  App.jsx               page layout
  data/profile.js       all content
  components/
    Header.jsx          sticky nav
    Hero.jsx            intro + StatusBoard
    StatusBoard.jsx     live-project status panel
    Projects.jsx        list of ProjectCard
    ProjectCard.jsx     one project: highlights, diagram, stats
    Skills.jsx, Now.jsx, Contact.jsx, Footer.jsx
  index.css             design tokens + responsive styles
```

## Deploy

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves at https://akashdeep62992-star.github.io.
