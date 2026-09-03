# Portfolio Site — Full Audit Report

_Generated: 2026-03-26_

---

## 1. File Structure & Inventory

### HTML Pages (4 files)

| File | Size | Description |
|------|------|-------------|
| `index.html` | ~31KB | Main portfolio homepage (sidebar nav, all sections) |
| `r360-casestudy.html` | ~18KB | remote360® case study (dark theme) |
| `k12-casestudy.html` | ~11KB | Elevate K12 case study (light theme) |
| `tirerack-casestudy.html` | ~12KB | Tire Rack case study (light theme) |

### CSS Files (`/css/`)

| File | Size | Notes |
|------|------|-------|
| `style.css` | 45KB | Main custom styles — compiled from SCSS |
| `bootstrap.css` | 141KB | Bootstrap 3.x framework |
| `animate.css` | 74KB | Animation library (only ~4 animations used) |
| `icomoon.css` | 30KB | Custom icon font definitions |
| `flexslider.css` | 7KB | Image slider styles (slider is currently commented out) |
| `owl.carousel.min.css` | 3.6KB | Carousel plugin |
| `owl.theme.default.min.css` | 2.4KB | Carousel theme |
| `bootstrap.css.map` | 74KB | Source map — not needed in production |

### SCSS Source Files (`/sass/`)

| File/Dir | Notes |
|----------|-------|
| `style.scss` | Main file, ~39KB, defines all variables, mixins, component styles |
| `bootstrap.scss` | Bootstrap import file |
| `/sass/bootstrap/` | Full Bootstrap 3 SCSS source (50+ partials) |

**Key SCSS variables:**
```scss
$font-header: 'gravitybook'
$font-primary: 'gravityregular'
$font-secondary: 'gravityultralight'
$brand-color-1: #2c98f0   // Blue
$brand-color-2: #ec5453   // Red
$brand-color-3: #f9bf3f   // Yellow
$brand-color-4: #a84cb8   // Purple
$brand-color-5: #2fa499   // Teal
$brand-color-6: #4054b2   // Indigo
$brand-gray:    #2d2d2c
$brand-white:   #fff
```

### JavaScript Files (`/js/`)

| File | Size | Notes |
|------|------|-------|
| `main.js` | 7KB | **All custom logic** — animations, nav, menu, carousel |
| `jquery.min.js` | 83KB | jQuery 3.4.1 (also loaded from CDN on index.html) |
| `bootstrap.min.js` | 36KB | Bootstrap 3 JS — accordion, modals, dropdowns |
| `jquery.waypoints.min.js` | 8.7KB | Scroll detection for animations |
| `owl.carousel.min.js` | 40KB | Carousel plugin |
| `jquery.flexslider-min.js` | 22KB | Image slider (currently commented out) |
| `jquery.easing.1.3.js` | 8.2KB | Easing functions for animations |
| `jquery.countTo.js` | 3.8KB | Number counter (no active usage on page) |
| `google_map.js` | 2.7KB | Google Maps init — **not used on any current page** |
| `modernizr-2.6.2.min.js` | 16KB | Feature detection (IE legacy) |
| `respond.min.js` | 4.3KB | IE8 media query polyfill (IE legacy) |

### Font Files (`/fonts/`)

| Family | Formats | Files |
|--------|---------|-------|
| Gravity (custom) | WOFF, WOFF2 | 18 files — ultralight, light, book, regular, bold (each + italic) |
| Bootstrap Glyphicons | SVG, TTF, WOFF, WOFF2, EOT | 5 files |
| icomoon | SVG, TTF, WOFF, EOT | 4 files |

### Other Files

| File | Size | Notes |
|------|------|-------|
| `favicon.ico` | 4.9KB | Site favicon |
| `sswamidass_resume.pdf` | 204KB | Resume — linked from sidebar |
| `package.json` | ~400B | Minimal, no major dependencies |

---

## 2. Asset Inventory

### Images (`/images/`, `/images/pk/`)

**Total image assets: ~80+ files, ~90MB**

#### Homepage / Portfolio Grid
| File | Size | Notes |
|------|------|-------|
| `img-1.jpg` – `img-8.jpg` | 100–260KB | Project card background images |
| `final_*.jpg` | 626KB–2.7MB | Final project screenshots (large) |

#### Case Study Images
| File | Size | Notes |
|------|------|-------|
| `responsive_group*.png` | 715KB–2.3MB | Device mockups (desktop/tablet/mobile) |
| `wireframes.jpg`, `mockups*.jpg` | 290–440KB | Design process images |
| `ui-*.png / .jpg` | 280KB–880KB | UI design screenshots |
| `k12_flow.png`, `k12_wireframe.png`, `k12_logo.png` | varies | K12-specific |
| `r360.png`, `r360_StyleGuide.jpg` | varies | remote360 branding |
| `persona*.svg / .png` | 7.3KB–943KB | User persona graphics |
| `ia*.jpg` | 888KB–966KB | Information architecture diagrams |
| `beforeafter*.jpg` | 655KB–859KB | Before/after comparisons |

#### Product Kiosk Gallery (`/images/pk/`)
11 files: `pk-1.jpg` – `pk-10.jpg`, `uxflow_kiosks.jpg` — 119KB–1.2MB each

#### Background & Support
| File | Size | Notes |
|------|------|-------|
| `about*.jpg` | 331–508KB | About section images |
| `img_bg_*.jpg` | 520KB–3.8MB | Hero/section background images |
| `ignition.png` | 544KB | Legacy Java app screenshot |
| `reports.png` | 2.1MB | Report feature screenshot |
| `ge.png`, `mms.png`, `tirerack.png`, `simpleupdates.png` | 3.6–76KB | Company logos |
| `loc.png` | 2.2KB | Map location marker |
| `Group 7.svg` | 943KB | Large SVG (persona graphic) |

**Potential optimization flags:**
- Several JPGs exceed 1MB — candidates for WebP conversion + srcset
- `Group 7.svg` at 943KB is abnormally large for an SVG
- `img_bg_*.jpg` background images up to 3.8MB — consider progressive JPEG

### External CDN Assets

| Asset | CDN URL | Pages |
|-------|---------|-------|
| jQuery 3.4.1 | cdnjs.cloudflare.com | `index.html` only |
| Ekko Lightbox CSS 5.3.0 | cdnjs.cloudflare.com | `index.html` only |
| Ekko Lightbox JS 5.3.0 | cdnjs.cloudflare.com | `index.html` only |
| Google Fonts: Quicksand | fonts.googleapis.com | All pages |
| Google Fonts: Playfair Display | fonts.googleapis.com | All pages |

**Note:** Quicksand and Playfair Display are loaded via Google Fonts on all pages but **are not referenced anywhere in the CSS**. They appear to be unused.

---

## 3. Dependencies & Third-Party Scripts

### Per-Page Dependency Matrix

| Dependency | index | r360 | k12 | tirerack |
|-----------|-------|------|-----|---------|
| jQuery 3.4.1 (CDN) | ✓ | — | — | — |
| jQuery 3.4.1 (local) | — | ✓ | ✓ | ✓ |
| Bootstrap 3 CSS | ✓ | ✓ | ✓ | ✓ |
| Bootstrap 3 JS | ✓ | ✓ | ✓ | ✓ |
| animate.css | ✓ | ✓ | ✓ | ✓ |
| icomoon.css | ✓ | ✓ | ✓ | ✓ |
| jquery.waypoints | ✓ | ✓ | ✓ | ✓ |
| flexslider CSS+JS | ✓ | — | — | — |
| owl.carousel CSS+JS | ✓ | — | — | — |
| jquery.easing | ✓ | ✓ | ✓ | ✓ |
| jquery.countTo | ✓ | — | — | — |
| Ekko Lightbox (CDN) | ✓ | — | — | — |
| main.js | ✓ | ✓ | ✓ | ✓ |
| google_map.js | — | — | — | — |
| modernizr | ✓ | — | — | — |
| respond.min.js | ✓ | — | — | — |

**Flags:**
- jQuery loaded from CDN on `index.html` but from local file on case study pages — inconsistent
- `google_map.js` loaded in no page (orphaned)
- `modernizr` and `respond.min.js` only on `index.html` (IE polyfills — drop in React build)

---

## 4. Component Breakdown

### Page Structure Map

```
index.html
├── Fixed Sidebar (#portfolio-aside)
│   ├── Author avatar
│   ├── Name + Title
│   ├── Nav menu (About, Services, Skills, Education, Experience, Work)
│   └── Social footer (Facebook, Instagram, LinkedIn, Resume)
└── Main Content (#portfolio-main)
    ├── Welcome section
    ├── Services section (3-col grid)
    ├── Skills section (progress bars)
    ├── Education section (accordion)
    ├── Company logos section
    ├── Experience section (timeline)
    ├── Work section (project cards + lightbox)
    └── Contact section (3-col info)

r360-casestudy.html / k12-casestudy.html / tirerack-casestudy.html
├── Back button (fixed, top-left)
└── Sequential content sections (.portfolio-about)
    ├── Heading meta + heading
    ├── Descriptive paragraphs
    └── Center-aligned images (with .animate-box)
```

### Recurring UI Patterns

| Pattern | Used In | Notes |
|---------|---------|-------|
| Fixed sidebar nav | index | 300px, off-canvas on mobile |
| Section header (meta + h2) | All pages | Centered (index) or left (case studies) |
| 3-column Bootstrap grid | index | Services, Contact sections |
| Progress bars | index/Skills | Static width, color-1 class |
| Vertical timeline | index/Experience | Alternating left/right |
| Project card with overlay | index/Work | Background image, hover reveal |
| Lightbox gallery | index/Work | Multi-image, hidden anchor links |
| Owl Carousel | index | Single item, fade, auto-loop |
| Accordion/collapse | index/Education | Bootstrap panel-group |
| Scroll-triggered animations | All pages | Waypoints + Animate.css |
| Back button with arrow | Case studies | Fixed 50px circle, hover animation |

### JavaScript Behaviors That Need React Conversion

| Behavior | Current Impl | React Approach |
|----------|-------------|----------------|
| Scroll-triggered animations | Waypoints + Animate.css | IntersectionObserver hook |
| Mobile off-canvas menu | jQuery class toggle | useState + CSS class |
| Smooth scroll to section | jQuery `.animate()` | `scrollIntoView` |
| Active nav highlighting | Waypoints callbacks | IntersectionObserver |
| Lightbox gallery | Ekko Lightbox (jQuery) | `ekko-lightbox` npm or alternative |
| Owl Carousel | jQuery plugin | `react-owl-carousel` npm |
| Accordion expand/collapse | Bootstrap 3 JS | React state or details/summary |
| Full-height elements | jQuery resize handler | CSS `100vh` + resize listener |
| Number counter animation | jquery.countTo | Custom hook with requestAnimationFrame |

---

## 5. Orphaned / Unused Files

| File | Status |
|------|--------|
| `js/google_map.js` | Not loaded on any page |
| `js/modernizr-2.6.2.min.js` | IE8 polyfill — not needed for React build |
| `js/respond.min.js` | IE8 media query polyfill — not needed |
| Google Fonts (Quicksand, Playfair Display) | Loaded but not used in CSS |
| `css/bootstrap.css.map` | Source map — not needed in production |
| `js/jquery.flexslider-min.js` + `css/flexslider.css` | Slider code commented out in main.js |
