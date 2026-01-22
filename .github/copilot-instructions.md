# Copilot Instructions

## Project Overview
A responsive portfolio website for Vijaykoushik S (Senior Full Stack Developer & Technical Lead) showcasing expertise in SaaS development, blockchain, and fintech. Built with React 19, Vite, and Tailwind CSS 4 with bilingual support (English/Tamil).

## Architecture & Key Components

### Core Structure
- **App.tsx**: Root component managing single global state `lang` (Language type) for EN/TA bilingual support. Composes all page sections as a single-page layout.
- **components/**: Section-based organization (Navbar, Hero, StackArchitecture, WorkCards, Timeline, TheLab, Footer)
- **types.ts**: Central type definitions (`Language`, `Project`, `ExperienceItem`, `NavItem`) - update here when adding data structures
- **metadata.json**: Portfolio metadata used by the hosting platform

### Data Flow Pattern
- Language toggle flows from `App` → `Footer` (as `toggleLang` callback) and then distributed to child components via `lang` prop
- Project/experience data embedded directly in components as constants (e.g., `projects[]` in WorkCards.tsx, `navItems[]` in Navbar.tsx)
- No external API calls for portfolio content; all static data

### Component Patterns
- **Motion wrapper**: All visible sections use `framer-motion`'s `motion.div` with `initial`/`whileInView`/`viewport={{ once: true }}` for scroll animations
- **Language branching**: Ternary pattern: `lang === 'TA' ? 'Tamil text' : 'English text'` (examples in Navbar.tsx, WorkCards.tsx)
- **Icon system**: Uses `lucide-react` icons (Terminal, Menu, X, ArrowUpRight, etc.) - import from 'lucide-react'
- **Decoration elements**: Absolute positioned gradient blurs (e.g., `bg-cyan-900/10 rounded-full blur-3xl`) for visual polish

## Styling & Tailwind
- **Config** ([tailwind.config.ts](../tailwind.config.ts)): Custom colors (cyan-400/500/900, slate-850/950), font families (Inter/Fira Code), extends defaults
- **Color scheme**: Dark theme (slate-950 background), cyan accents, hover states use `group-hover:` patterns
- **Responsive breakpoints**: Mobile-first, uses `sm:`, `md:`, `lg:` prefixes for multi-device layouts

## Development Workflow
- **Install**: `npm install`
- **Dev server**: `npm run dev` (Vite on port 3000, host 0.0.0.0)
- **Build**: `npm run build` (Vite output)
- **Preview**: `npm run preview`
- **Environment**: Set `GEMINI_API_KEY` in `.env.local` (currently unused but configured in vite.config.ts)

## Project-Specific Patterns

### Adding New Sections
1. Create component in `components/` as `export const YourSection: React.FC<{ lang: Language }>` 
2. Import and add to `App.tsx` main render in logical position
3. Add navigation link in `Navbar.tsx` `navItems` array with both `label` and `taLabel`
4. Use consistent section ID (e.g., `id="your-section"`) for anchor linking

### Adding Projects/Content
1. Update component constant (e.g., `projects[]`, `experiences[]`) directly in the component file
2. Add corresponding TypeScript interface in `types.ts` if creating new data structure
3. Implement bilingual support with ternary operators in rendering

### Accessibility & Polish
- Skip keyboard navigation with `tabindex="-1"` on decorative elements
- Use `rel="noopener noreferrer"` for external links
- Terminal/dev aesthetic: Use monospace fonts for branding, check `font-mono` class

## Build & Deployment
- Vite configuration handles React 19 transpilation via `@vitejs/plugin-react`
- Tailwind CSS 4 uses new `@tailwindcss/vite` plugin (not PostCSS)
- Alias `@:` resolves to root (see [vite.config.ts](../vite.config.ts) resolve.alias)
- No build steps for dark mode or theming - single dark theme hardcoded

## When Adding Features
- Check existing `types.ts` before creating new interfaces
- Maintain bilingual support by adding both English and Tamil labels
- Use framer-motion for all animations (don't add CSS animations manually)
- Keep component files under 200 lines; extract large data/logic to types.ts or separate utilities
- Test scrolling animations work with `whileInView` viewport settings
