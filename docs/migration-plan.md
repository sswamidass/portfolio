# Portfolio Site — React Migration Plan

_Generated: 2026-03-26_

---

## Route Map (React Router v6)

| Current File | React Route | Page Component |
|-------------|-------------|----------------|
| `index.html` | `/` | `src/pages/Home.jsx` |
| `r360-casestudy.html` | `/r360` | `src/pages/R360CaseStudy.jsx` |
| `k12-casestudy.html` | `/k12` | `src/pages/K12CaseStudy.jsx` |
| `tirerack-casestudy.html` | `/tirerack` | `src/pages/TireRackCaseStudy.jsx` |

All case study page links (`href="r360-casestudy.html"` etc.) become `<Link to="/r360">`.

---

## Component Architecture

### Layout Components (`src/components/layout/`)

| Component | Description |
|-----------|-------------|
| `Sidebar.jsx` | Fixed 300px left sidebar — avatar, name, nav menu, social footer |
| `MainContent.jsx` | Right content area wrapper — calc(100% - 300px) |
| `HomeLayout.jsx` | Root layout wrapping Sidebar + MainContent (home page only) |
| `CaseStudyLayout.jsx` | Layout for all case study pages — back button + scrollable content |

### Page Components (`src/pages/`)

| Component | Route | Description |
|-----------|-------|-------------|
| `Home.jsx` | `/` | Assembles all home sections |
| `R360CaseStudy.jsx` | `/r360` | remote360 case study — dark theme |
| `K12CaseStudy.jsx` | `/k12` | Elevate K12 case study — light theme |
| `TireRackCaseStudy.jsx` | `/tirerack` | Tire Rack case study — light theme |

### Shared UI Components (`src/components/`)

| Component | Description | Notes |
|-----------|-------------|-------|
| `AnimateBox.jsx` | Wrapper that triggers scroll animation | Replaces Waypoints + Animate.css |
| `ProgressBar.jsx` | Skill bar with label and color class | Static width, color-1 |
| `TimelineEntry.jsx` | Single experience entry (icon, label, date) | Used in timeline section |
| `ProjectCard.jsx` | Portfolio card with background image + hover overlay | Includes lightbox trigger |
| `LightboxGallery.jsx` | Multi-image lightbox wrapper | Replaces Ekko Lightbox |
| `Carousel.jsx` | Owl-style single-item fade carousel | Replaces jquery owl.carousel |
| `AccordionPanel.jsx` | Education accordion expand/collapse | Replaces Bootstrap collapse JS |
| `SectionHeader.jsx` | `.heading-meta` + `.portfolio-heading` combo | Reused across all pages |
| `BackButton.jsx` | Fixed circle back button with arrow | Case study pages only |
| `NavMenu.jsx` | Sidebar nav list with smooth scroll + active state | Used in Sidebar |
| `ServiceCard.jsx` | Icon + title + description card | Used in Services section |

### Home Page Section Components (`src/components/sections/`)

| Component | HTML section | Complexity |
|-----------|-------------|-----------|
| `Welcome.jsx` | Welcome section | Low |
| `Services.jsx` | Services 3-col grid | Low |
| `Skills.jsx` | Progress bars | Low |
| `Education.jsx` | Accordion panel | Medium (accordion state) |
| `Companies.jsx` | Company logo grid | Low |
| `Experience.jsx` | Vertical timeline | Low |
| `Work.jsx` | Project cards + lightbox galleries | High (lightbox state) |
| `Contact.jsx` | Contact info 3-col | Low |

---

## CSS Migration

### Strategy
Carry all CSS files over **exactly as-is**. No rewriting, renaming, or consolidation.

### File Mapping

| Source | Destination | Method |
|--------|-------------|--------|
| `css/style.css` | `src/assets/css/style.css` | Direct copy, import in `main.jsx` |
| `css/bootstrap.css` | `src/assets/css/bootstrap.css` | Direct copy |
| `css/animate.css` | `src/assets/css/animate.css` | Direct copy |
| `css/icomoon.css` | `src/assets/css/icomoon.css` | Direct copy — font paths need update |
| `css/flexslider.css` | `src/assets/css/flexslider.css` | Direct copy (keep — may use) |
| `css/owl.carousel.min.css` | `src/assets/css/owl.carousel.min.css` | Direct copy |
| `css/owl.theme.default.min.css` | `src/assets/css/owl.theme.default.min.css` | Direct copy |
| `sass/` | Not migrated | SCSS source kept for reference only |

### Font Path Update Required
`icomoon.css` uses relative paths like `../fonts/icomoon/...`. After moving to `src/assets/css/`, paths must be updated to `../fonts/icomoon/...` relative to new location or use absolute `/src/assets/fonts/`.

### Global CSS Import Order in `main.jsx`
```js
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/flexslider.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
```
Same order as the HTML `<link>` tags.

---

## NPM Packages to Install

| Package | Version | Replaces |
|---------|---------|---------|
| `react-router-dom` | v6 | HTML page navigation |
| `react-owl-carousel` | latest | `owl.carousel.min.js` |
| `yet-another-react-lightbox` | latest | Ekko Lightbox (or use simple modal) |

**Note:** jQuery, Bootstrap JS, Waypoints, and all jQuery plugins are **not installed**. Their behaviors are reimplemented natively in React.

---

## Risk Areas & Mitigation

### 1. Scroll-Triggered Animations (HIGH)
**Current:** jQuery Waypoints library detects scroll position, then applies Animate.css classes with staggered 200ms delays.

**React approach:**
```jsx
// useAnimateOnScroll hook
const useAnimateOnScroll = (effect = 'fadeInUp') => {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(effect, 'animated')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [effect])
  return ref
}
```
`AnimateBox.jsx` wraps any element and applies the hook. Stagger timing handled with CSS `animation-delay` or a delay prop.

**Risk:** Stagger sequencing (k * 200ms for sibling elements) — needs careful reimplementation per section.

---

### 2. Lightbox Gallery (MEDIUM)
**Current:** Ekko Lightbox v5.3.0 — triggers on `data-toggle="lightbox"` attribute with hidden anchor siblings for multi-image galleries.

**React approach:** Use `yet-another-react-lightbox` (lightweight, accessible). Galleries stored as arrays passed to `<LightboxGallery>`. No hidden anchors needed.

**Risk:** Low — behavior is straightforward to replicate.

---

### 3. Owl Carousel (MEDIUM)
**Current:** jQuery Owl Carousel with `animateOut: 'fadeOut'`, `animateIn: 'fadeIn'`, autoplay, loop, custom nav icons.

**React approach:** `react-owl-carousel` package — wraps the same underlying library. Config props map 1:1. Same CSS already imported.

**Risk:** Low — same library, same CSS.

---

### 4. Off-Canvas Mobile Menu (LOW)
**Current:** jQuery adds/removes `.offcanvas` class on `body`. CSS transitions sidebar in/out.

**React approach:** `useState` for `isMenuOpen`. Conditionally add `offcanvas` class to the body via `useEffect` + `document.body.classList`.

---

### 5. Smooth Scroll + Active Nav Highlighting (MEDIUM)
**Current:** `clickMenu()` uses jQuery `.animate({scrollTop})`. `navigationSection()` uses Waypoints to detect scroll position and update active nav item.

**React approach:**
- Click: `element.scrollIntoView({ behavior: 'smooth' })`
- Active highlight: `IntersectionObserver` on each section, update state with active section id

**Risk:** Medium — must match exact offset (`-55px`) behavior of original.

---

### 6. Bootstrap Accordion (LOW)
**Current:** Bootstrap 3 JS handles `.panel-collapse` expand/collapse.

**React approach:** `useState` for open/closed state. Toggle `in` class (Bootstrap 3 convention) or use `<details>`/`<summary>` with matching CSS overrides.

---

### 7. Font Paths (LOW)
**Current:** `icomoon.css` references fonts relative to `/css/`. After moving, paths will break.

**Fix:** Update `@font-face` src paths in `icomoon.css` copy to match new asset structure. Same for Gravity font declarations in `style.css`.

---

### 8. Full-Height Elements (LOW)
**Current:** `.js-fullheight` set to `window.innerHeight` via jQuery on resize.

**React approach:** CSS `height: 100vh` or a `useWindowHeight` hook. Behavior identical — already matches CSS intent.

---

## Project Scaffold Structure

```
portfolio-react/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── css/         ← All CSS files (exact copies)
│   │   ├── fonts/       ← All font files (exact copies)
│   │   ├── images/      ← All image files (exact copies)
│   │   └── sswamidass_resume.pdf
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MainContent.jsx
│   │   │   ├── HomeLayout.jsx
│   │   │   └── CaseStudyLayout.jsx
│   │   ├── sections/
│   │   │   ├── Welcome.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Companies.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Work.jsx
│   │   │   └── Contact.jsx
│   │   ├── AnimateBox.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── TimelineEntry.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── LightboxGallery.jsx
│   │   ├── Carousel.jsx
│   │   ├── AccordionPanel.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── BackButton.jsx
│   │   ├── NavMenu.jsx
│   │   └── ServiceCard.jsx
│   ├── hooks/
│   │   ├── useAnimateOnScroll.js
│   │   ├── useActiveSection.js
│   │   └── useWindowHeight.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── R360CaseStudy.jsx
│   │   ├── K12CaseStudy.jsx
│   │   └── TireRackCaseStudy.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Migration Checklist

### Phase 1 — Scaffold
- [ ] `npm create vite@latest portfolio-react -- --template react`
- [ ] Install `react-router-dom`, `react-owl-carousel`, `yet-another-react-lightbox`
- [ ] Copy all CSS → `src/assets/css/`
- [ ] Copy all fonts → `src/assets/fonts/`
- [ ] Copy all images → `src/assets/images/`
- [ ] Copy resume PDF → `src/assets/`
- [ ] Update font `@font-face` src paths in CSS copies
- [ ] Import all CSS in `main.jsx`

### Phase 2 — Core Infrastructure
- [ ] Set up `App.jsx` with React Router v6 routes
- [ ] Build `HomeLayout.jsx` — sidebar + main structure
- [ ] Build `CaseStudyLayout.jsx` — back button + content
- [ ] Build `Sidebar.jsx` — avatar, name, title, NavMenu, social links
- [ ] Build `NavMenu.jsx` — smooth scroll + active state
- [ ] Build `AnimateBox.jsx` + `useAnimateOnScroll.js` hook
- [ ] Build `BackButton.jsx`

### Phase 3 — Home Page Sections
- [ ] `Welcome.jsx`
- [ ] `Services.jsx` + `ServiceCard.jsx`
- [ ] `Skills.jsx` + `ProgressBar.jsx`
- [ ] `Education.jsx` + `AccordionPanel.jsx`
- [ ] `Companies.jsx`
- [ ] `Experience.jsx` + `TimelineEntry.jsx`
- [ ] `Work.jsx` + `ProjectCard.jsx` + `LightboxGallery.jsx`
- [ ] `Contact.jsx`
- [ ] `Carousel.jsx` (Owl Carousel wrapper)

### Phase 4 — Case Study Pages
- [ ] `R360CaseStudy.jsx`
- [ ] `K12CaseStudy.jsx`
- [ ] `TireRackCaseStudy.jsx`

### Phase 5 — QA
- [ ] `npm run dev` runs clean, no console errors
- [ ] Visual diff: Home — layout, typography, colors, spacing
- [ ] Visual diff: Sidebar nav — hover, active, mobile off-canvas
- [ ] Visual diff: Animations — scroll triggers, timing, stagger
- [ ] Visual diff: Work section — card hover, lightbox open/close
- [ ] Visual diff: r360 case study — dark theme, images, back button
- [ ] Visual diff: k12 case study — light theme, images
- [ ] Visual diff: Tire Rack case study — light theme, images
- [ ] Mobile (< 768px) — off-canvas menu, full-width layout
- [ ] Update README
