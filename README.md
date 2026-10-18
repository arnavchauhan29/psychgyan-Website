# PsychGyan Official Website

Welcome to the official PsychGyan website project.

- **Brand:** PsychGyan
- **Domain:** psychgyan.in
- **Tagline:** Better Mind • Brighter Future
- **Primary Audience:** Coaching institute owners and directors (Classes 9 to 12)
- **Secondary Institutional Audience:** School principals, management, academic coordinators, and teachers
- **Additional Audience:** Students and parents
- **Primary Call to Action:** Partner with PsychGyan

---

## 1. Project Overview

PsychGyan is an education-support and student-development initiative. We help educational institutions understand students beyond academic marks through structured diagnostic assessments and targeted developmental initiatives.

This website is designed to be lightweight, professional, ultra-fast, and completely free to host (0 budget) using pure semantic HTML5, modern custom CSS, and minimal vanilla JavaScript.

---

## 2. File and Folder Structure

```text
psychgyan-website/
├── assets/
│   ├── logo.svg                      # Redesigned brand mark for light surfaces (awaiting founder approval)
│   ├── logo-white.svg                # Redesigned brand mark for dark surfaces (navy footer)
│   ├── logo-v1.svg                   # Preserved previous logo version
│   ├── logo-white-v1.svg             # Preserved previous dark logo version
│   ├── hero-illustration.svg         # Bespoke educational psychology and 5-pillar network illustration
│   ├── director-pravendra-shakya.svg # Illustrative portrait for Pravendra Shakya (New Dastak Classes)
│   ├── director-amritesh-sir.svg     # Illustrative portrait for Amritesh Sir (RPS Academy)
│   ├── director-krishna-sir.svg      # Illustrative portrait for Krishna Sir (Skyline Institute)
│   ├── director-shivnandan-sir.svg   # Illustrative portrait for Shivnandan Sir (Royal Defence Academy)
│   └── logo-placeholder.svg          # Original foundation placeholder
├── index.html                        # Complete homepage structure with tabs, diagrams, and public testimonials
├── styles.css                        # Design system tokens, vibrant layouts, and colourful testimonial cards
├── script.js                         # Vanilla JS for tabs, 5-pillar explorer, FAQ accordion, and modals
└── README.md                         # Project guide and documentation
```

---

## 3. Brand Identity & Color Palette

- **Primary Blue:** `#1E40AF` (used for main institutional elements and primary actions)
- **Bright Blue:** `#3B82F6` (used for focus rings, accents, and highlights)
- **Orange:** `#F97316` (used for coaching-institute badges and high-priority action buttons)
- **Green:** `#10B981` (used for school badges and mind-growth leaf graphic)
- **Yellow:** `#FACC15` (used for key phrase underlines and cautionary highlights)
- **Navy:** `#0F172A` (used for dark footers, high-contrast text, and structural frames)
- **Cream:** `#FFFAF0` (used for primary page background instead of stark white)
- **Cream Subtle:** `#FBF4E6` (used for alternating editorial sections)

### Typography
- **Headings:** Plus Jakarta Sans
- **Body Text:** Source Sans 3

---

## 4. Key Upgrades Implemented in this Release

1. **Redesigned Brand Identity (SVG Logo):**
   - An iconic, cohesive emblem integrating a dignified human profile and an upward-flourishing mind-growth leaf, an orange intellect spark, and a balanced wordmark.
   - Separate, optimized SVG assets for light surfaces (`assets/logo.svg`) and dark surfaces (`assets/logo-white.svg`).
   - Previous versions safely preserved in `assets/logo-v1.svg` and `assets/logo-white-v1.svg`.

2. **Vibrant Coursera-Inspired Hero Section:**
   - Bold, authoritative headline with highlighted emphasis phrases.
   - Dual audience pathway ribbon with equal prominence for Coaching Institutes and Schools.
   - Bespoke, colorful SVG infographic (`assets/hero-illustration.svg`) illustrating the student mind and the five PMT pillars.

3. **Institutional Credibility Ribbon (Responsible Logo Strip Alternative):**
   - Clean horizontal trust ribbon highlighting Classes 9 & 10 Foundation, Classes 11 & 12 Entrance (JEE/NEET), Board Exam Batches, and Institutional Leadership.
   - Prepared space for approved partner logos once officially verified, without fabricating affiliations.

4. **Interactive Audience Pathways (Tabs System):**
   - Interactive tabs allowing users to explore tailored solutions for Coaching Institutes or Schools.

5. **Interactive 5 PMT Pillars Explorer:**
   - Clickable pillar tabs that update live on-screen, detailing the educational diagnostic scope of each pillar.

6. **Institutional Collaboration Process Stepper:**
   - Visual 4-step flowchart explaining the institutional partnership journey from dialogue to sustained seminars.

7. **Public, Verified Testimonials Section:**
   - Titled: "Testimonials: Trusted Voices in Education"
   - Features four distinct, colourful cards with exact approved quotes and illustrative director portraits:
     - New Dastak Classes (Pravendra Shakya, Director) with `director-pravendra-shakya.svg`
     - RPS Academy (Amritesh Sir, Director) with `director-amritesh-sir.svg`
     - Skyline Institute (Krishna Sir, Director) with `director-krishna-sir.svg`
     - Royal Defence Academy (Shivnandan Sir, Director) with `director-shivnandan-sir.svg`
   - Transparently declared as illustrative portrait representations to preserve absolute authenticity.

8. **Expandable FAQ Accordion:**
   - 6 high-value questions and answers addressing non-clinical scope, time commitment, data privacy, target cohorts, 14-day beta pilot, and pilot enrollment.

9. **Scroll-Reveal Animations & Accessibility:**
   - Lightweight `IntersectionObserver` scroll-reveals that respect `@media (prefers-reduced-motion: reduce)`.

---

## 5. How to Preview the Website Locally (Windows)

Because this website uses pure HTML and CSS without complicated build steps or packages, you can preview it instantly:

1. Open your File Explorer and navigate to your project folder:
   `C:\Users\chauh\OneDrive\Documents\psychgyan WEBSITE`
2. Double-click on `index.html` to open it in your default web browser (Chrome, Edge, etc.).
3. **Important Note on Browser Cache:** If you already had the website open in a browser tab, hold down `Ctrl` and press `F5` (or press `Ctrl + Shift + R`) to force the browser to reload the fresh CSS and images without using older cached files.
4. Click on **"Testimonials"** in the top navigation menu to jump directly to the four institutional director cards.

---

## 6. Verification and Quality Checks Performed

- **Testimonials Section:** Fully unblocked with zero opacity-delay blockers. All four director cards render immediately with their verified quotes, custom color themes, and illustrative vector portraits (`assets/director-*.svg`).
- **Hero Infographic:** "From Problems to Possibilities" integrated into the right-hand hero frame.
- **Active Counselling Section:** "From Confusion to Clarity" visual showcase added above Testimonials.
- **Zero Em Dashes:** Verified via automated script that no em dashes are used in website copy.
- **Link Integrity:** All internal anchor links lead to valid, existing IDs on the page.
- **Pure Web Technologies:** Zero external npm packages, zero UI frameworks, zero build tools.
- **Strict Privacy & Governance:** Clear disclosures that PMT is an educational initiative in active development, non-clinical, and that no student assessment records are collected on this public site.
