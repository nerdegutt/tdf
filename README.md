# Tour de France 2026 🚗

Reiseguide for en 18-dagers biltur gjennom Europa (13.–30. mai 2026).

**Produksjon:** https://tdf.offline.no

## Kjør lokalt

Krever [Node.js](https://nodejs.org/) (v18+).

```bash
npm install
npm run dev
```

Åpne lenken som vises i terminalen (vanligvis `http://localhost:5173`).

## Bygg for produksjon

```bash
npm run build
npm run preview    # forhåndsvis bygget lokalt
```

## Tech stack

- **Vite** — byggsystem
- **Tailwind CSS v4** — styling
- **Leaflet** — kart (OpenStreetMap, ingen API-nøkkel)
- **Vanilla JS** — ingen rammeverk
- **Vercel** — hosting (auto-deploy ved push til `main`)
