# React Task Management Dashboard

A small, responsive Task Management Dashboard built with React + Vite and Tailwind CSS.

## Features

- **Dashboard overview** — Total, Pending, and Completed task counts that update automatically
- **Add tasks** — Form with required title, optional description, and priority (Low / Medium / High)
- **Task list** — Cards showing title, description, priority, and status
- **Update & remove** — Toggle between Pending and Completed, plus Delete
- **Filters** — All / Pending / Completed
- **Responsive** — Works well on desktop and mobile
- **Optional** — Tasks are saved in `localStorage` so they persist after refresh

## Tech Stack

- React 19 (functional components + hooks)
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)

## Components

- `DashboardSummary` — Summary cards
- `TaskForm` — Add-task form with validation
- `TaskList` + `TaskCard` — Filtered list and individual task cards

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    DashboardSummary.jsx
    TaskForm.jsx
    TaskList.jsx
    TaskCard.jsx
  App.jsx
  main.jsx
  index.css
```

## Notes

- Each task receives a unique ID (not based on array index).
- Empty or whitespace-only titles are rejected.
- Form clears after a successful submission.
- No backend or external API is required.
