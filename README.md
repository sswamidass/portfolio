# Sanjay Swamidass — Portfolio (React)

React + Vite migration of the original HTML/CSS/JS portfolio site.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

## Routes

| URL | Page |
|-----|------|
| `/` | Home (portfolio + all sections) |
| `/r360` | remote360 Case Study |
| `/k12` | Elevate K12 Case Study |
| `/tirerack` | Tire Rack Case Study |

## Tech Stack

- Vite + React (functional components, hooks)
- React Router v6
- yet-another-react-lightbox (replaces Ekko Lightbox)
- All original CSS preserved exactly as-is
- IntersectionObserver replaces jQuery Waypoints for scroll animations
- No jQuery

## Project Structure

```
src/
├── assets/css/        All original CSS files (exact copies)
├── assets/fonts/      All font files
├── components/
│   ├── layout/        HomeLayout, CaseStudyLayout, Sidebar
│   └── sections/      Welcome, Services, Skills, Education, Companies, Experience, Work, Contact
├── hooks/             useAnimateOnScroll, useActiveSection
├── pages/             Home, R360CaseStudy, K12CaseStudy, TireRackCaseStudy
├── App.jsx            Router setup
└── main.jsx           CSS imports + app mount
public/
└── images/            All image assets (served at /images/...)
```
