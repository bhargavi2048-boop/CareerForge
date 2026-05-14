<div align="center">

<img src="https://img.shields.io/badge/AI%20CareerForge-Hackathon%202026-3b82f6?style=for-the-badge&logo=lightning&logoColor=white" alt="AI CareerForge"/>

# ⚡ AI CareerForge
### *Know Your Interview Readiness Score — Before It's Too Late*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-34d399?style=flat-square&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Hackathon](https://img.shields.io/badge/AI%20CareerForge-Hackathon-f59e0b?style=flat-square&logo=trophy&logoColor=white)](https://github.com)

<br/>

> **A 2-minute AI-powered assessment that gives students an objective, multi-dimensional Interview Readiness Score — with a personalized action plan to close their gaps before facing real recruiters.**

<br/>

 🚀 Live Demo: "https://bhargavi2048-boop.github.io/CareerForge/"

  [📋 Take Assessment](#) · [📖 Documentation](#table-of-contents) · [👑 Meet the Team](#-team)

<br/>

![CareerForge Banner](https://img.shields.io/badge/Interview%20Readiness-Score%200--100-3b82f6?style=for-the-badge)
![Assessment Time](https://img.shields.io/badge/Assessment%20Time-Under%202%20Minutes-34d399?style=for-the-badge)
![Dimensions](https://img.shields.io/badge/Dimensions%20Evaluated-4-f59e0b?style=for-the-badge)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Features](#-features)
- [Scoring Model](#-scoring-model)
- [Pages & Structure](#-pages--structure)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Readiness Levels](#-readiness-levels)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Team](#-team)
- [Hackathon Challenge](#-hackathon-challenge)
- [License](#-license)

---

## 🎯 Overview

**AI CareerForge** is a fully client-side, AI-powered interview readiness platform built for the *AI CareerForge Hackathon 2026*. It enables students and fresh graduates to assess their interview preparedness across four critical dimensions in under two minutes — and receive an actionable improvement roadmap before they ever face a recruiter.

The platform eliminates the most painful part of job searching: discovering your preparation gaps *after* a failed interview.

---

## 🔥 The Problem

Every year, millions of students enter the job market unprepared — not because they lack talent, but because they have no objective way to measure their readiness before the real interviews happen.

Common pain points:
- **Siloed preparation** — grinding LeetCode but ignoring resume, or polishing the resume but never practicing communication
- **No baseline** — students don't know what "interview-ready" actually looks like in measurable terms  
- **Late discovery** — gaps surface only after rejections, when confidence is already shaken
- **Generic advice** — "practice more coding" helps no one; specific, prioritized steps do

---

## 💡 The Solution

AI CareerForge provides a **structured, 5-step assessment** that maps a student's profile against the four pillars hiring managers at top tech companies actually evaluate. The output is:

1. **A 0–100 Interview Readiness Score** — objective, weighted, and immediately interpretable
2. **A 4-dimension breakdown** — so students see exactly where they stand
3. **A prioritized action plan** — specific, High/Medium/Low priority recommendations ranked by impact
4. **A 30-Day Sprint Plan** — a week-by-week structured preparation schedule
5. **A downloadable report** — shareable with mentors or career advisors

All of this in under **2 minutes**.

---

## ✨ Features

| Feature | Description |
|---|---|
| ⏱ **Live 2-Min Timer** | Countdown timer during assessment keeps the process focused and on-track |
| 📊 **Weighted Scoring Engine** | Multi-dimensional algorithm calculating a 0–100 readiness score |
| 🎯 **Personalized Recommendations** | Dynamically generated based on individual assessment answers |
| 🏷️ **Priority Tags** | Each recommendation marked as HIGH / MEDIUM / LOW priority |
| 📅 **30-Day Sprint Plan** | Structured week-by-week action calendar |
| 📥 **Downloadable Report** | One-click export of the readiness report as a text file |
| 🔄 **Retake Support** | Users can retake the assessment anytime to track improvement |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop viewports |
| 🎨 **Animated UI** | Scroll-triggered card reveals, animated score rings, and smooth transitions |
| 💾 **Zero Backend** | Entirely client-side — no server, no database, no login required |

---

## 📐 Scoring Model

The readiness score is calculated using a **weighted multi-dimensional model** inspired by actual tech hiring criteria:

```
Overall Score = (Technical × 0.30) + (Resume × 0.25) + (Communication × 0.25) + (Portfolio × 0.20)
```

### Dimension Breakdown

#### 💻 Technical Skills — 30%
| Sub-factor | Weight |
|---|---|
| Number of technical skills selected | Up to 40 pts |
| DSA / coding confidence (self-rated 1–5) | Up to 30 pts |
| Number of personal/academic projects built | Up to 30 pts |

#### 📄 Resume Quality — 25%
| Sub-factor | Weight |
|---|---|
| Resume completeness (sections present) | Up to 60 pts |
| Role-targeting and tailoring | Up to 20 pts |
| External review / feedback received | Up to 20 pts |

#### 🎤 Communication — 25%
| Sub-factor | Weight |
|---|---|
| Mock interview sessions completed | Up to 40 pts |
| Verbal communication confidence (self-rated 1–5) | Up to 35 pts |
| STAR method preparedness | Up to 25 pts |

#### 💼 Portfolio & Visibility — 20%
| Sub-factor | Weight |
|---|---|
| Active GitHub with public repositories | 35 pts |
| Live/deployed projects | Up to 45 pts |
| Certifications (Coursera, AWS, Google, etc.) | Up to 20 pts |

---

## 🗂️ Pages & Structure

| Page | File | Description |
|---|---|---|
| 🏠 Home | `index.html` | Landing page — hero, features, how-it-works, demo score, CTA |
| 📝 Assessment | `assessment.html` | 5-step timed questionnaire with live progress tracking |
| 📊 Results | `results.html` | Animated score, dimension cards, recommendations, action plan |
| ℹ️ About | `about.html` | Problem statement, scoring methodology, readiness level guide |
| 👥 Team | `team.html` | Team leader profile, hackathon context, tech stack |

---

## 📁 Project Structure

```
careerforge/
│
├── index.html              # Home / Landing page
├── assessment.html         # 5-step assessment form with timer
├── results.html            # Readiness score + personalized report
├── about.html              # Platform overview & scoring methodology
├── team.html               # Team page (Bhargavi N — Team Leader)
│
├── css/
│   └── style.css           # Full design system — dark theme, responsive, animations
│
└── js/
    ├── main.js             # Navigation, intersection observer animations, score ring demo
    ├── assessment.js       # Step logic, 2-min timer, form data collection, scoring engine
    └── results.js          # Animated ring counter, dimension renderer, recommendation engine
```

---

## 🚀 Getting Started

No build tools, no dependencies, no server required. Just open and run.

### Option 1 — Open Directly
```bash
# Unzip the downloaded file
unzip careerforge_website.zip

# Open the homepage in your browser
open careerforge/index.html
```

### Option 2 — Local Dev Server (recommended for best experience)
```bash
# Using Python (built into most systems)
cd careerforge
python3 -m http.server 8080

# Then visit:
# http://localhost:8080
```

```bash
# Using Node.js / npx
cd careerforge
npx serve .

# Then visit:
# http://localhost:3000
```

### Option 3 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Open the `careerforge/` folder
3. Right-click `index.html` → **Open with Live Server**

> ✅ No npm install, no build step, no environment setup. Works instantly in any modern browser.

---

## ⚙️ How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     USER JOURNEY                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. LAND          →  Hero page explains value proposition   │
│                                                             │
│  2. ASSESS        →  5-step form (2-min countdown timer)    │
│     ├── Step 1: Basic info & target role                    │
│     ├── Step 2: Technical skills & DSA level                │
│     ├── Step 3: Resume completeness & quality               │
│     ├── Step 4: Communication & behavioral prep             │
│     └── Step 5: Portfolio & online presence                 │
│                                                             │
│  3. SCORE         →  Algorithm runs in browser (JS)         │
│     └── Weighted score across 4 dimensions → 0–100          │
│                                                             │
│  4. RESULTS       →  Animated readiness report              │
│     ├── Overall score ring animation                        │
│     ├── Per-dimension breakdown bars                        │
│     ├── Personalized recommendations (prioritized)          │
│     └── 30-Day sprint plan                                  │
│                                                             │
│  5. ACT           →  Download report or retake assessment   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Data flow:** All form responses are collected client-side → passed through the scoring engine in `assessment.js` → stored in `sessionStorage` → read and rendered by `results.js`. No data leaves the browser.

---

## 🏅 Readiness Levels

| Score | Level | What It Means |
|---|---|---|
| 🌱 0 – 35 | **Beginner** | Strong foundation work needed. Follow the 30-day sprint plan consistently. |
| 🛠 36 – 54 | **Developing** | You're on the right track but significant gaps remain. Focus on HIGH priority items. |
| 📈 55 – 74 | **Intermediate** | Getting close! Address the 2–3 highlighted gaps and you'll be ready in weeks. |
| 🌟 75 – 100 | **Interview Ready** | Your profile is strong. Start applying to target companies with confidence. |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure across 5 pages |
| **CSS3** | Custom design system — variables, grid, flexbox, animations, media queries |
| **Vanilla JavaScript (ES6+)** | Assessment logic, scoring engine, DOM manipulation, sessionStorage |
| **Google Fonts** | Syne (display) + DM Sans (body) — carefully chosen type pairing |
| **SVG** | Animated score rings rendered as inline SVG with CSS transitions |
| **SessionStorage API** | Passing assessment data between pages without a backend |
| **Blob API** | Client-side report download without a server |

> **Zero external libraries.** No React, no Vue, no jQuery, no Tailwind. Pure HTML, CSS, and JavaScript — keeping it fast, lightweight, and dependency-free.

---

## 📸 Screenshots

### Home Page
> Dark-themed landing page with animated hero, feature cards, live score demo, and CTA

### Assessment (5-Step Form)
> Step-by-step questionnaire with live 2-minute countdown timer and progress dots

### Results Page
> Animated SVG score ring, 4-dimension breakdown, prioritized action plan, 30-day sprint calendar

### Team Page
> Bhargavi N featured as Team Leader with crown icon and hackathon context

---

## 👑 Team

<div align="center">

| | |
|---|---|
| **Name** | Bhargavi N |
| **Role** | Team Leader & Product Architect |
| **Responsibilities** | End-to-end product design, assessment scoring model, UX strategy, frontend implementation |

*Built solo as a hackathon submission — every line of design, logic, and copy crafted by one person with one mission: make interview readiness measurable.*

</div>

---

## 🏆 Hackathon Challenge

**Event:** AI CareerForge Hackathon 2026  
**Category:** Interview Readiness  
**Challenge:** *Design and develop a solution that evaluates different aspects of interview preparation — Technical Skills, Resume, Communication gaps, Portfolio — and provides an overall "Interview Readiness Score" with personalized improvement plans. The evaluation process should not take more than 2 minutes.*

### How We Met Every Deliverable

| Deliverable | Status | Implementation |
|---|---|---|
| ✅ Working Prototype | **Done** | Fully functional 5-page MVP |
| ✅ Readiness Metric | **Done** | 0–100 score + 4-level classification |
| ✅ Actionable Feedback | **Done** | Prioritized recs + 30-day sprint plan |
| ✅ User-Friendly Interface | **Done** | Dark theme, responsive, animated |
| ✅ Under 2 Minutes | **Done** | Live countdown timer enforces the limit |

---

## 📄 License

```
MIT License

Copyright (c) 2026 Bhargavi N — AI CareerForge

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

**Built with ❤️ by Bhargavi N · AI CareerForge Hackathon 2026**

⭐ *If this project helped you, consider starring the repo!*

[🚀 Take the Assessment](#) · [📖 Read the Docs](#) · [👑 Meet the Team](#-team)

</div>
