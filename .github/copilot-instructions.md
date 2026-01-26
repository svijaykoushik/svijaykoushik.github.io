# Copilot Instructions

## Project Overview
Single-page portfolio for Vijaykoushik S showcasing SaaS, blockchain, and fintech expertise. Built with **Vike** (file-based routing), **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Features bilingual support (EN/TA) with no backend—all content is static.

## Critical Architecture

### File Structure & Routing
- **Vike-based**: `/pages/index/+Page.tsx` is the main page. Routes auto-generated from file structure. Build uses Vike prerendering (see `/pages/+config.ts`).
- **Root page component** (`+Page.tsx`): Manages single global state `const [lang, setLang] = useState<Language>('EN')` passed to all section components.
- **`types.ts`**: Single source for TypeScript interfaces—`Language`, `Project`, `ExperienceItem`, `NavItem`. Add here before creating new component data structures.

### Language Flow (EN/TA Bilingual)
- `+Page.tsx` holds `lang` state, passes to Footer via `toggleLang` callback
- Footer's toggle updates `lang` → re-renders all child components
- **Pattern**: `lang === 'TA' ? 'தமிழ் உரை' : 'English text'` (seen in Navbar, WorkCards, StackArchitecture)
- All navigation items in `navItems` array have both `label` and `taLabel` fields

### Component Data Patterns
- **Data embedded in components**: `projects[]`, `navItems[]`, `experiences[]` defined as constants inside component files (not fetched)
- **No API calls**: Portfolio is fully static
- **Animation wrapper**: Every visible section wrapped in `motion.div` with `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`

## Component Structure & Styling

### Layout Sections (in `+Page.tsx` render order)
1. Navbar (fixed, scroll-aware backdrop blur)
2. Hero (gradient text, abstract terminal visual)
3. StackArchitecture (tech stack with connecting lines)
4. WorkCards (3 featured projects with icons)
5. Timeline (career milestones with icons)
6. TheLab (community contributions section)
7. Footer (contact + language toggle)

### Tailwind Palette
- **Dark theme**: `bg-slate-950` (background), `slate-300` (body text), `slate-900` (cards)
- **Cyan accents**: `cyan-400` (bright), `cyan-500` (medium), `cyan-900/10` (decorative blurs)
- **Fonts**: `font-sans` (Inter), `font-mono` (Fira Code—used for branding, line numbers, labels)
- **Decorative elements**: Absolute positioned `bg-cyan-900/10 rounded-full blur-3xl` for visual polish, `tabindex="-1"` on non-interactive elements

## Development Workflow

### Build & Dev Commands
- `npm run dev` — Vike dev server (port 3000, host 0.0.0.0)
- `npm run build` — Prerendering to static HTML (output: `dist/`)
- `npm run preview` — Preview built site locally
- Environment: `.env.local` for `GEMINI_API_KEY` (configured but unused)

### Adding New Content/Sections
1. **New project**: Add to `projects[]` in [WorkCards.tsx](../components/WorkCards.tsx), follow `Project` interface from `types.ts`
2. **New nav item**: Add to `navItems[]` in [Navbar.tsx](../components/Navbar.tsx) with `label` and `taLabel`
3. **New section**: Create component in `components/`, accept `lang: Language` prop, wrap in `motion.div`, then render in `+Page.tsx` main order
4. **New data type**: Define interface in [types.ts](../types.ts), use in components

## Key Patterns & Gotchas

- **No React Router**: Page routing is file-based via Vike; use hash links (`#expertise`, `#work`) for in-page navigation
- **All animations use Framer Motion**: Don't add CSS `@keyframes`; use `motion.div` with variants
- **Icon library**: `lucide-react` for all icons (Terminal, Code, Blocks, Github, etc.)
- **External links**: Always use `target="_blank" rel="noopener noreferrer"` (see Footer, WorkCards)
- **Prerendering**: Static site—no runtime API calls, all content compiled at build time
