# 🍝 La Tavola — Restaurant App

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-green?style=flat-square)](https://la-tavola-three.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-cyan?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

> Italian restaurant menu app with real-time ordering system and mobile-first UI.

## 📋 Overview

**La Tavola** is a digital menu and ordering system for an authentic Italian restaurant. Built with React and Tailwind CSS, it features real-time data management, category filtering, shopping cart functionality, and a multi-step checkout process.

## ✨ Features

- **Interactive Menu** — 25+ authentic Italian dishes across 6 categories
- **Category Filters** — Filter by: Antipasti, Primi, Secondi, Pizze, Dolci, Bevande
- **Shopping Cart** — Animated side drawer with real-time updates
- **Cart Badge** — Animated badge in navbar showing item count
- **3-Step Checkout** — Delivery info → Payment → Confirmation
- **Order Confirmation** — Generated order number for tracking
- **State Management** — Global state with Zustand

## 🛠️ Tech Stack

| Technology       | Purpose          |
| ---------------- | ---------------- |
| React 19         | UI Framework     |
| Vite             | Build Tool       |
| Tailwind CSS     | Styling          |
| Framer Motion    | Animations       |
| Zustand          | State Management |
| React Router DOM | Routing          |
| React Icons      | Icon Library     |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Luis-Miha/la-tavola.git

# Navigate to directory
cd la-tavola

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
la-tavola/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route pages
│   ├── data/           # Menu data
│   ├── store/          # Zustand store
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies
```

## 🎨 Design

- **Primary Colors**: Warm Red (#dc2626), Orange (#ea580c)
- **Typography**: Playfair Display (headings), Inter (body)
- **Style**: Italian-inspired with warm tones, soft shadows, smooth animations

## 📱 Pages

| Route                 | Description                 |
| --------------------- | --------------------------- |
| `/`                   | Homepage with hero and menu |
| `/cart`               | Shopping cart with items    |
| `/checkout`           | 3-step checkout process     |
| `/order-confirmation` | Order confirmation with ID  |

## 👨‍💻 Author

**George Luis Mihalache** — Junior Front-End Developer

- GitHub: [@Luis-Miha](https://github.com/Luis-Miha)
- Email: Luis_99@hotmail.it
- LinkedIn: [george-luis-mihalache](https://www.linkedin.com/in/george-luis-mihalache-318058387/)

---

<div align="center">
  <p>⭐ Star this project if you find it useful!</p>
  <p>Built with ❤️ by George Luis Mihalache</p>
</div>
