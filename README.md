# NovaFolio

My personal developer portfolio — built with React, Vite, and Tailwind CSS. Showcases my projects, skills, and a way to get in touch, with a fully working dark/light theme toggle.

🔗 **Live:** [nova-folio-nu.vercel.app](https://nova-folio-nu.vercel.app)

## Overview

NovaFolio is a single-page portfolio with a dedicated `/projects` route for detailed case studies. It was built not just to showcase my work, but as a hands-on way to practice core React concepts that come up in frontend interviews.

## Features

- Responsive design — works across mobile, tablet, and desktop
- Dark / light theme toggle using Context API
- Sticky navbar with scroll-based background and section highlighting
- Mobile hamburger menu with overlay navigation
- Reusable, prop-driven components (`ProjectCard`, `SkillChip`)
- Dedicated projects detail page with "Read more" expandable overview
- Controlled contact form with validation
- Smooth scroll navigation between sections

## Tech Stack

- **React** — component architecture, hooks
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — styling
- **React Router DOM** — client-side routing (`/`, `/projects`)
- **React Icons** — icon set

## React Concepts Used

| Concept | Where it's used |
|---|---|
| `useState` | Mobile menu toggle, contact form, hover states |
| `useEffect` | Scroll position tracking, scroll-to-top on route change |
| Custom Hook | `useScrollPosition` — tracks scroll Y with cleanup |
| Context API | `ThemeContext` — global dark/light theme state |
| `useContext` | `useTheme` hook for consuming theme context |
| Props & Reusability | `ProjectCard`, `SkillChip` components |
| Conditional Rendering | Theme-based styles, form success states, mobile menu |
| Controlled Components | Contact form inputs (name, email, message) |
| List Rendering with Keys | Projects, skills, and nav links |
| React Router | `BrowserRouter`, `Routes`, `Route`, `Link` for `/projects` page |

## Project Structure

```
src/
├── components/       # Navbar, Hero, About, Projects, Skills, Contact, Footer, ProjectCard, SkillChip
├── pages/            # Home, ProjectsPage
├── context/          # ThemeContext
├── hooks/            # useScrollPosition
├── data/             # ProjectsData.js
└── App.jsx
```

## Run Locally

```bash
git clone https://github.com/sadiksaifi9958/NovaFolio.git
cd NovaFolio
npm install
npm run dev
```

## Author

**Sadik Saifi**
- [LinkedIn](https://www.linkedin.com/in/sadik-saifi-934794353)
- [GitHub](https://github.com/sadiksaifi9958)
