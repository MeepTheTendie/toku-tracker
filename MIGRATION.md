# Toku Tracker - Migration Complete

## What Changed

- **Backend**: Firebase → Convex
- **Data Fetching**: React Query → TanStack Router Loaders
- **Styling**: Tailwind 3.x → Tailwind CSS 4.x + @tailwindcss/vite
- **Auth**: Removed (single-user app)
- **Icons**: Added Lucide React
- **Linting**: @tanstack/eslint-config

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up Convex (will prompt for GitHub login)
npx convex dev

# 3. Seed the database with shows
npx convex run progress:setShows --args "$(cat shows-data.json)"

# 4. Start dev server
npm run dev
```

## Project Structure

```
toku-tracker/
├── convex/
│   ├── schema.ts       # Database schema
│   ├── shows.ts        # Show queries
│   └── progress.ts     # Progress mutations
├── src/
│   ├── lib/
│   │   ├── convex.ts   # Convex client
│   │   └── utils.ts    # cn() utility
│   ├── routes/
│   │   ├── __root.tsx  # Root layout with devtools
│   │   └── index.tsx   # Main tracker page
│   ├── types/
│   │   └── show.ts     # TypeScript types
│   ├── main.tsx        # App entry
│   └── index.css       # Tailwind 4
├── shows-data.json     # Shows export for seeding
└── setup.sh            # Setup script
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
