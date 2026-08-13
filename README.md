# ⚡ Shubhjit Bobade | Developer Portfolio

A high-performance, responsive personal portfolio website for Shubhjit Bobade, built with a SaaS-grade dark developer aesthetic, featuring interactive architecture explorers, dynamic AI pipeline visualizers, and a functional command-line terminal.

---

## 🚀 Live Demo & Deployment

This project is configured for rapid, seamless deployments on **Vercel** or **Netlify**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (GPU-accelerated animations, micro-interactions, spring physics)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ✨ Features Built-In

1. **Recruiter Snapshot**: A 10-second high-level visual summary detailing core stack, experience, location, and immediate availability.
2. **Interactive System Architecture Explorer**: A visual node flow diagram detailing onboarding engines, schema rules, and API gateways. Hover over nodes to explore technical explanations.
3. **AI Pipeline Visualizer**: Showcases multi-stage GenAI generation workflows using Runway, Kling, and Gemini models.
4. **Command-Line Terminal**: A fully functional command-line prompt supporting interactive commands:
   - `help` - Show available commands
   - `whoami` - Show summary of experience
   - `stack` - Show core languages, databases, and frameworks
   - `focus` - Show systems engineering philosophy
   - `status` - Show recruitment availability
5. **Direct Connect Cards**: Redesigned minimalist direct-contact grid supporting email redirection, telephone links, LinkedIn connection, and GitHub exploration.
6. **Detailed Case Studies**: Clean overlay modals containing problems, solutions, architecture highlights, and impact metrics.

---

## 💻 Local Setup & Development

Follow these steps to run the portfolio on your local machine:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
This outputs optimized, static assets into the `dist/` directory.

---

## 📂 Project Structure

```text
e:/Portfolio/
  ├── public/              (Public static assets)
  ├── src/
  │   ├── assets/          (Images, PDFs, and global files)
  │   ├── components/      (Reusable interactive UI widgets)
  │   ├── data/            (Single source of truth for resume details)
  │   ├── sections/        (Visual layout sections)
  │   ├── App.tsx          (App orchestrator)
  │   ├── index.css        (Tailwind & custom styling overrides)
  │   ├── main.tsx         (Vite entry point)
  │   └── vite-env.d.ts    (TypeScript environment declarations)
  ├── package.json
  ├── tailwind.config.js
  └── vite.config.ts
```
