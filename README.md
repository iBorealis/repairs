# Cœur Numérique - Digital Renewal Workshop

A modern, bilingual website for Cœur Numérique, a Quebec-based business that gives electronics a second life through repair, modding, and charitable donations.

## Features

### Core Functionality
- **Bilingual Support**: Full French/English translation system with language toggle
- **Dark Mode**: System-aware theme with manual toggle
- **Responsive Design**: Mobile-first design that works on all devices
- **Supabase Integration**: Database for quote requests and donation tracking

### Three Business Pillars

1. **REVITALISER** - The Electronic Spa Treatment
   - Deep cleaning and thermal optimization
   - Hardware upgrades (SSD, RAM, GPU)
   - Software optimization

2. **MODIFIER** - The Performance Lab
   - Retro console modifications (IPS screens, modchips)
   - Modern console improvements
   - Custom PC builds

3. **RESTAURER** - The Social Mission
   - Device donation program
   - 15% discount for donors
   - Ecological impact counter

### Pages

- **Home**: Hero with animated counter, three pillars showcase
- **Services**: Detailed service offerings for both REVITALISER and MODIFIER
- **Mission**: Donation program explanation and impact metrics
- **Gallery**: Filterable portfolio of completed projects
- **Contact**: Quote request form with Supabase integration

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom color system
- **Animations**: Framer Motion (subtle, professional)
- **Routing**: React Router
- **Database**: Supabase
- **Build Tool**: Vite

## Color Palette

- **Primary** (Tech Blue): #1890ff
- **Gaming** (Pink/Red): #e6005c
- **Eco** (Green): #00ba66
- Dark mode fully supported

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

The following variables are configured in `.env`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Database Schema

### Tables
- `quote_requests`: Service quote submissions
- `donations`: Device donation submissions
- `ecological_counter`: Track devices saved

All tables have Row Level Security enabled with appropriate policies.

## Design Philosophy

- **Modern & Tech-Centric**: Clean, professional aesthetic
- **Console Modding Vibe**: Nostalgic yet expert feel
- **Charity Focus**: Impact metrics prominently displayed
- **Subtle Animations**: Professional micro-interactions
- **User-Friendly**: Clear navigation and calls-to-action

## Notes

- Stock photos from Pexels are used as placeholders
- Fonts: Inter (body), Orbitron (display/headings)
- All animations are subtle to maintain professionalism
- French is the primary language (Quebec-based)
