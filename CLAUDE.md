# Website Development Project Rules

## Before Starting Any Session
1. Confirm you are on main branch: `git branch`
2. Confirm clean git state: `git status`
3. Read this file (CLAUDE.md)
4. Identify the project type from the brief: Website or Landing Page
5. Read the skill files — canonical copies live in the XeedlyAI library at `C:\Users\shadd\Documents\standards` (this repo no longer carries local copies):
   - ALWAYS read (library): `skills\shared\content-voice\SKILL.md`, `skills\shared\webdev\SKILL.md`, `skills\site\site-design\SKILL.md`, `skills\shared\deploy\SKILL.md`
   - If Website: ALSO read `skills\site\seo-architecture\SKILL.md`
   - If Landing Page: ALSO read `skills\site\landing-page\SKILL.md`
6. Read the project brief from briefs/[project-name].md
7. Run `npm run build` to confirm the project builds before making changes

## Build Rules
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS + custom CSS variables for theming
- Components: shadcn/ui as base, customized per project
- Fonts: Loaded via next/font — Inter + JetBrains Mono are family canon (decision 2026-07-01); never Roboto or Arial. Client sites may declare a distinctive display face in their DELTAS.
- Images: next/image with proper alt text always
- Deployment: Vercel via Git push to main
- Verification: `npm run build` must pass before any commit
- Never run `npm run dev` — verify via build only, check on Vercel

## Git Rules
- Always work on main branch
- Never use git worktrees
- Commit messages: descriptive, prefixed with [feat], [fix], [content], [style], [setup]
- Push to origin/main after every verified build

## Content Rules
- Read the project brief before writing ANY content
- All content must be original, SEO-optimized, and AEO-structured
- Every page must include JSON-LD structured data
- Every page must have unique meta title (under 60 chars) + description (under 155 chars)
- FAQ sections use schema.org FAQPage markup
- Follow ALL rules in the library `skills\shared\content-voice\SKILL.md` — especially the banned words list

## Design Rules
- Every project must have a distinctive visual identity — no generic AI aesthetics
- Read the library `skills\site\site-design\SKILL.md` before making any styling decisions
- Choose fonts and colors based on the project brief, not defaults
- Dark and light themes are both valid — match the brief

## Project Type Routing
- The brief has a "Project Type" field: Website or Landing Page
- Website builds: generate multiple pages following the silo architecture in the library `skills\site\seo-architecture\SKILL.md`
- Landing Page builds: generate a single page following the 10-section framework in the library `skills\site\landing-page\SKILL.md`
- NEVER apply landing page patterns to website pages or vice versa

## Quality Checklist (Before Final Commit)
- [ ] npm run build passes with zero errors
- [ ] Every page has unique meta title + description
- [ ] Every page has appropriate JSON-LD structured data
- [ ] Every image has alt text
- [ ] All internal links work
- [ ] FAQ sections have FAQPage schema markup
- [ ] No banned words from the library content-voice skill appear anywhere
- [ ] Responsive: looks correct at 375px, 768px, and 1440px widths
- [ ] Lighthouse: 90+ on Performance, Accessibility, SEO
