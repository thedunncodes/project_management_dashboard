
# LeTon

This is a dashboard design for Leton, built with [Next.js](https://nextjs.org), it features interactive data visualization, a responsive UI, and modular architecture. It is designed for financial or business analytics, providing users with dashboards, charts, and task management features.

## Features

- 📊 **Interactive Charts**: Visualize cost and revenue data over time using Recharts.
- 🗓️ **Calendar & Task Management**: Manage tasks and view estimates in a clean, tabbed interface.
- ⚡ **Fast & Responsive**: Built with Next.js App Router and React Server Components for optimal performance.
- 🧩 **Modular Components**: Reusable UI components for rapid development.

## Project Structure

```
leton/
├── public/                # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── components/    # Main UI components
│   │   │   ├── BodyContent.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── Chart.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MainBody.tsx
│   │   │   └── subtabs/   # Subtab components (Estimates, Tasks, Txn)
│   │   │   └── ui/        # UI primitives (button, card, chart)
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and mock data
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── ...
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

- Edit `src/app/page.tsx` to change the main page content.
- Add or modify components in `src/app/components/` for new features.
- Update theme and styles in `src/app/globals.css` and component files.

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
- [Vercel Deployment](https://vercel.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
