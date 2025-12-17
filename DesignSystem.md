# Design System - Phasha Suzan Portfolio

## 1. Color Palette

The site uses a dark, professional theme based on Tailwind CSS's **Slate** palette, accented with **Blue** and **Cyan** to represent a modern, electric tech aesthetic.

### Backgrounds
- **Main Background:** `bg-slate-950` (#020617) - A very deep blue-black.
- **Card Background:** `bg-slate-900` (#0f172a) - Slightly lighter for contrast.
- **Glass Effect:** `bg-slate-900/50` with `backdrop-blur-sm`.

### Text Colors
- **Primary Text:** `text-white` (#ffffff) - Headings and emphasis.
- **Secondary Text:** `text-slate-300` (#cbd5e1) - Body text.
- **Muted Text:** `text-slate-400` (#94a3b8) and `text-slate-500` (#64748b) - Meta info and footers.

### Brand Accents (Gradients & Highlights)
- **Primary Accent:** Blue-600 (#2563eb) to Blue-400 (#60a5fa).
- **Secondary Accent:** Cyan-500 (#06b6d4) to Sky-400 (#38bdf8).
- **Gradients:** Often used as `bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400`.

### Functional Colors
- **Success/Backend:** Emerald-500 (#10b981).
- **Mobile/Warning:** Orange-500 (#f97316).
- **AI/Magic:** Blue/Cyan Mix.

## 2. Typography

**Font Family:** [Inter](https://fonts.google.com/specimen/Inter) (sans-serif).

- **Headings:** Bold (700) or Extra Bold (800).
- **Body:** Regular (400) or Medium (500).
- **Code/Tags:** Monospace styling or small uppercase tracking.

## 3. UI Elements

### Buttons
- **Primary:** Rounded full (`rounded-full`), Blue background, slight shadow (`shadow-blue-600/25`).
- **Secondary:** Transparent with border (`border-slate-700`), hover effects.

### Cards
- **Style:** Glassmorphism inspired.
- **Border:** Thin, semi-transparent (`border-slate-800`).
- **Hover:** Slight lift (`-translate-y-1`), glow effect, or border color change to Blue/Cyan.

### Animations
- **Pulse:** Used on the job title text.
- **Glow:** Background orbs using `blur-[100px]`.
- **Transitions:** Standard duration `duration-300` ease-in-out.