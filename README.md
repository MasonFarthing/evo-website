# Evo Learning Platform

A modern, AI-powered learning platform built with Next.js, React, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🎯 TypeScript for type safety
- 🔥 Modern gradient designs and animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
evo-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── tailwind.config.ts      # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Adding New Features

The project is set up and ready for development. You can:

1. Add new pages in the `app/` directory
2. Create new components in `components/`
3. Add new UI components in `components/ui/`
4. Customize styles in `tailwind.config.ts`
5. Add global styles in `app/globals.css`

## Deployment

This project can be deployed on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform 