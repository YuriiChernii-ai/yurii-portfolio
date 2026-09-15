# Site Copy Inventory — Yurii Chernii Portfolio

This document is a complete inventory of every piece of user-visible text copy found on the two real, linked pages of this portfolio site — `buff-site.html` (home/main page) and `about-me.html` (about page) — organized by page and by section, in top-to-bottom reading order. It is meant to be handed to another AI agent (or a human copywriter) to get suggestions on which copy to rewrite and how; it is a faithful transcription, not an edit — wording, capitalization and punctuation are kept exactly as they appear in the HTML (HTML entities like `&mdash;` have been decoded to their real character, e.g. `—`).

**Intentionally excluded from this inventory:**
- All case-study pages (e.g. `case-viaduct.html`) — skipped per request.
- The translated duplicate pages `buff-site-pl.html`, `buff-site-uk.html`, `about-me-pl.html`, `about-me-uk.html` — these are machine-translated copies of the same English copy covered below, so including them would just repeat this content three times over.
- Stray/dev fragment files that are not real linked pages: `_onav.html`, `buff-hero.html`, `chipsa-widgets.html`. These were checked with a text search across `buff-site.html` and `about-me.html` and are not referenced (linked, `<script src>`'d, or included) from either page — they appear to be leftover component snippets/scratch files, not live pages, so they are excluded rather than marked "unclear."

---

## buff-site.html — Page metadata

- `<title>`: "Buff — site with menu + chat widgets" — **FLAG: this reads like a leftover dev/working title, not a real public-facing page title.** No `<meta name="description">` tag is present on this page.

---

## buff-site.html — Opener (intro overlay, plays once on load)

- "Hey,"
- "I'm Yurii."

---

## buff-site.html — Hero (`<header class="hero2">`)

- H1 (visible, with inline icon marker `¤`): "I design, launch and grow AI-native ¤ products and brands"
- H1 `aria-label` (clean version, no marker): "I design, launch and grow AI-native products and brands"
- Button: "Resume"
- Body paragraph: "I turn ideas into shipped products — brand, interface and motion in one hand. Fast from concept to launch, then iterating on what real users do with it."
- `aria-label` on the project-logo row: "Projects I worked on" (row itself has no visible text, just three unlabeled logo icons)
- Showreel video block `aria-label`: "Showreel"
- Hover caption that appears when the cursor is over the showreel: "View showreel"
- Badge tag text: "Design. Build. Ship." (this text also plays a font/style "slot machine" animation on load before settling)
- Badge default caption: "AI-native design process"
- Badge icon-stack hover captions (title / subtitle shown when hovering each AI-tool icon, from `data-title` / `data-subtitle`):
  - Figma — "Design systems & prototyping"
  - ChatGPT — "Structuring tasks & research"
  - Claude — "Speeding up front-end handoff"
  - Midjourney — "Fast visual concepts"

---

## buff-site.html — Cases section (`#cases`, "Selected work")

- H2: "Just look at these recent cases, they turned out great"
- Tab labels (toggle): "Cases", "Concepts"
- Section `aria-label`: "Selected work"; toggle `aria-label`: "Filter work"

**Case 1 (live case — links to case-viaduct.html, excluded as a page but its teaser copy here is on the home page):**
- Eyebrow: "Client"
- Headline: "Illustrated a full concept series exploring light, form and structural rhythm"
- Body: "Art direction, colour grading and final compositing across a full digital newspaper concept. Each spread explores how light interacts with structure, building one consistent visual language from cover to close."
- CTA: "View case"

**Case 2 (links to "#" — placeholder link):**
- Eyebrow: "Client"
- Headline: "Built stylised key art and promotional frames for a fast-paced voxel game universe"
- Body: "Modelling, lighting and shot design for a voxel game's key art. Worked closely with the team to translate real gameplay moments into striking promotional frames across every platform."
- CTA: "View case"

**Case 3 (locked/NDA case):**
- Eyebrow: "Client"
- Headline: "Delivered full product design work for an enterprise client kept entirely under NDA"
- Body: "Full scope confidential — research, UI and design-system work across the whole product. The write-up stays unpublished while the NDA with the client remains active."
- CTA (disabled): "Under NDA"
- Lock overlay text (shown on hover): "Closed under NDA"
- Hover cursor caption (`data-cursor-label`): "Under NDA"

**"Concepts" tab (4 tiles):** all four tiles are empty placeholder blocks (`<span class="case__media-fill">`) with no headline, body, or CTA text at all — **FLAG: PLACEHOLDER — needs real copy** (or these tiles need removing if the Concepts tab isn't shipping content yet).

---

## buff-site.html — "Samen" section (`#samen`, "Working together")

- H2: "By working together we go further"
- Body paragraph: "Создаю эффективные и функциональные продукты с нуля. Люблю дизайн, умею исследовать и выстраивать новые процессы з AI." — **FLAG: PLACEHOLDER / WRONG LANGUAGE — this paragraph is written in Cyrillic (a Russian/Ukrainian mix) on the English page, while every other paragraph around it is in English. This is almost certainly untranslated/leftover text that needs a real English sentence.**
- Button: "more about me"
- Section `aria-label`: "Working together"

---

## buff-site.html — Skills section (`#skills`)

- Column heading: "Design Skills" — chips: UX, UI, Prototyping, Auto Layout, Variants, Components, CJM, User Flow, Benchmarking, Interactive Prototypes, A/B Testing, User Research, Design System, Adaptive Design, Web Design
- Column heading: "Technical Skills" — chips: Figma, FigJam, Vibe Coding, Slack, HTML, CSS, Codex, Orca, Claude, Midjourney, AI, Framer, ChatGPT, Photoshop, After Effects, Illustrator, Jira
- Column heading: "Soft Skills" — chips: Stakeholder Communication, Cross-functional Collaboration, Problem Solving, Empathy, Agile, Scrum, Attention to Detail, Data-driven Thinking, Helicopter View, Lifelong Learning, Ownership for Results

---

## buff-site.html — Footer (`<footer class="foot" id="contact">`)

- H2: "Let's start a conversation"
- Body paragraph: "Open for product design work — full projects or a focused sprint. Tell me what you are building on Telegram or by email, and I will come back with how I would approach it." (the word "Telegram" is a link to `https://t.me/`, which is the bare Telegram homepage, not a personal handle — **FLAG: possibly a placeholder/incomplete link**)
- Label: "Contacts"
- "From Lviv to Warsaw"
- Email: hello@yurii.design
- Label: "Media"
- Social nav labels: "Behance", "Dribbble", "LinkedIn", "Telegram" — **FLAG: all four social links point to `href="#"` (placeholder), not real profile URLs**
- Footer photo `alt`: "Yurii Chernii"
- Bottom bar: "© 2026" and "Yurii Chernii" (the name is a link to `#`, also a placeholder)

---

## buff-site.html — Floating nav / brand (persists across the whole page)

- Brand logo link `aria-label`: "Home"
- Menu toggle label: "Menu"
- Centered logo link `aria-label`: "Yurii — home"
- Top-right CTA: "Read CV"
- Language switcher: "EN"
- Nav panel, column 1 (no heading): "Main", "About me", "Works"
- Nav panel, column 2 (no heading): "Viaduct", "Blocks", "BitBro" with tag "NDA"
- Nav panel featured card: "Showreel" (title), "More info" (button)

---

## about-me.html — Page metadata

- `<title>`: "Yurii Chernii — about"
- Screen-reader-only H1 at top of `<body>`: "Yurii Chernii — about me"

---

## about-me.html — Opener (same intro overlay as the home page)

- "Hey,"
- "I'm Yurii."

---

## about-me.html — Floating nav / brand

**Note:** this page's nav panel content is structured and worded differently from `buff-site.html`'s nav panel (different column headings and link labels), even though it's visually the same component — worth flagging for consistency if the two are meant to share one menu.

- Menu toggle label: "Menu"
- Centered logo link `aria-label`: "Yurii — home"
- Top-right CTA: "Read CV"
- Language switcher: "EN"
- Nav panel, column 1, heading "Work": "Showreel", "Case studies", "Motion toolkits" with tag "New", "Experiments"
- Nav panel, column 2, heading "Studio": "About", "Journal" with counter "12", "Contact"
- Nav panel featured card: "Featured" with tag "Reel"; card title "Starling — a branded motion system"; button "More info"

---

## about-me.html — Hero (`<header class="lx-hero" id="top">`)

- Hero photo `alt`: "Yurii Chernii"
- Name wordmark image `alt` (h1): "Yurii Chernii"
- Roaming cursor hover captions that cycle across the hero photo (in order): "AI Native", "Ready for offers", "Product Designer", "3 years of experience", "Warsaw."

---

## about-me.html — "Samen" section (`#samen`, "Working together")

- H2: "Looking for the next team to grow with"
- Body paragraph: "Product designer covering strategy, systems, UI and front-end — full ownership, start to finish."
- Social button labels: "Behance", "Dribbble", "LinkedIn", "Telegram" — **FLAG: all four again point to `href="#"` placeholder links**
- Carousel of case-image thumbnails below — all images have empty `alt=""` (decorative), no caption text

---

## about-me.html — Journey section (`.jrn`, "Journey")

**"Journey" list (H2: "Journey"):**
- "The next chapter" — "Open to product roles — looking for a team to join full-time and grow with, in-house or remote." — Present
- "Freelance" / role "UI/UX Designer" — "Independent product design across web and mobile — full ownership from discovery to final UI, working directly with founders and small teams." — Nov 2024 — Present
- "NDA Project" / role "Product Designer" — "Mobile app for an enterprise client via outstaffing — full design process end-to-end, working alongside a team of three designers, under NDA." — 2025 — 2026

**"Education" list (H2: "Education"):**
- "University" — "Multimedia, Computer Graphics and Visual Communication Design at Uniwersytet Merito WSB — a strong base in modern design, real projects and UX/UI." — 2024 — 2027
- "Course (AI for Designers)" — "Workflows, prototyping, design-to-code and Figma automation — applied to day-to-day product work and real briefs." — 2026
- "Mentoring" — "One-to-one mentorship from Lead Designers Andrii Sukhov (Glorium) and Erik Tsurikov (A5 Labs), with feedback going straight into real projects." — 2025 — 2026

---

## about-me.html — "How I think, how I work" section (`.think`)

- H2 (two-line): "How I think," / "how I work"
- "Systems Thinking" — "A screen is never just a screen — it's part of something bigger. I hold user needs, business goals and technical limits in one view, so decisions still hold up later on."
- "Ownership & Initiative" — "Perfect briefs don't really exist, so I don't wait for one. I take the problem apart myself, pick a direction and push it forward — scope is where I start, not where I stop."
- "Data-informed Decisions" — "I trust evidence over gut feeling. Research and analytics shape the first move, and instinct only takes over once the numbers already agree."
- "Design Systems" — "Structure has to be usable, not just tidy. I build token-based systems with naming people can guess correctly — one shared source of truth for design and code."
- "Dev-Friendly" — "Knowing how code, tokens and layout constraints actually work keeps handoffs from turning into arguments — what I design is what ships."
- "Care for Craft" — "The small stuff is what people notice first. Even with AI speeding up production, I still sweat the details — that's what makes work feel finished."

---

## about-me.html — "Work with me" / Freelance section (`.free`)

- Tag line: "Ready to discuss your offer"
- Button: "Email me" (mailto: hello@yurii.design)
- Decorative image deck of past work thumbnails above the tag line — all `alt=""`, no caption text

---

## about-me.html — Skills section (`#skills`)

Identical content to the Skills section on `buff-site.html`:
- "Design Skills" — chips: UX, UI, Prototyping, Auto Layout, Variants, Components, CJM, User Flow, Benchmarking, Interactive Prototypes, A/B Testing, User Research, Design System, Adaptive Design, Web Design
- "Technical Skills" — chips: Figma, FigJam, Vibe Coding, Slack, HTML, CSS, Codex, Orca, Claude, Midjourney, AI, Framer, ChatGPT, Photoshop, After Effects, Illustrator, Jira
- "Soft Skills" — chips: Stakeholder Communication, Cross-functional Collaboration, Problem Solving, Empathy, Agile, Scrum, Attention to Detail, Data-driven Thinking, Helicopter View, Lifelong Learning, Ownership for Results

---

## about-me.html — Footer

Identical content to the footer on `buff-site.html` (same "Let's start a conversation" heading, body copy, contact block, social links, and copyright bar — see the `buff-site.html — Footer` section above for the full text). Same placeholder-link caveats apply (Telegram href, social hrefs, copyright name href all point to `#`/bare domains).

---

## Summary of flagged items needing priority attention

1. **`buff-site.html` `<title>`** — "Buff — site with menu + chat widgets" reads like a dev placeholder, not a real page title.
2. **`buff-site.html` Samen section body copy** — written in Cyrillic (Russian/Ukrainian mix) instead of English: "Создаю эффективные и функциональные продукты с нуля. Люблю дизайн, умею исследовать и выстраивать новые процессы з AI." This is the single most obvious content bug on the site.
3. **"Concepts" tab on `buff-site.html`** — four case tiles with zero copy (empty placeholder fills).
4. **Placeholder links** — Behance/Dribbble/LinkedIn/Telegram social links and the footer copyright name link all point to `#`; the footer's inline "Telegram" link points to the bare `https://t.me/` homepage rather than a personal handle.
5. **Nav menu content mismatch** — the floating nav panel shows different column headings and links depending on whether you're on `buff-site.html` or `about-me.html`, which may or may not be intentional.
