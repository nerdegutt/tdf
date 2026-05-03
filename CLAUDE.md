# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Prosjektoversikt

Statisk nettsted for en 18-dagers biltur gjennom Europa (Tour de France 2026). To reisende (Erlend og Bjørn Erik) kjører fra Rakkestad gjennom Tyskland, Belgia, Frankrike, Spania og tilbake. Alt innhold er norskspråklig.

- **GitHub**: https://github.com/nerdegutt/tdf
- **Produksjon**: https://tdf.offline.no (Vercel, auto-deploy ved push til `main`)

## Kildedata: dayN.js-filer

De individuelle dagfilene (`src/data/day1.js` – `day18.js`) er den autoritative kilden for alt innhold. Hver fil eksporterer et dag-objekt med strukturert data.

### Seksjonstyper i days.js

| Type | Ikon | Beskrivelse |
|------|------|-------------|
| `sights` | 🏛️ | Severdigheter og steder å besøke |
| `history` | 🧠 | Historisk trivia for Bjørn Erik |
| `photo` | 📷 | Fotomuligheter og -tips |
| `accommodation` | 🏨 | Overnattingsforslag |
| `food` | 🍽️ | Restauranter, mat og drikke |
| `practical` | 💡 | Praktiske tips, alternativer for dagen |

Booking-callouts er `bookingWarning`/`bookingUrl`-properties på den aktuelle seksjonen, ikke egne seksjoner.

### Dag-objekt struktur

```js
{
  day: 6,
  date: "18. mai",
  weekday: "Mandag",
  from: "Bayeux",
  to: "Mont Saint-Michel",
  km: 130,
  nights: 1,
  subtitle: "Kort kjøring til et av verdens mest ikoniske steder",
  coords: { lat: 48.6361, lng: -1.5115 },
  stops: [
    { name: "Sted", lat: 48.00, lng: -1.00, type: "sight" }
  ],
  sections: [
    {
      type: "sights",
      title: "Mont Saint-Michel",
      bookingWarning: "Abbediet – kan bli lange køer.",
      bookingUrl: "https://www.abbaye-mont-saint-michel.fr/",
      content: `<ul><li><strong>Abbediet</strong>: ...</li></ul>`
    }
  ]
}
```

### Content-feltet

Content er HTML (ikke markdown):
- `<strong>tekst</strong>` for uthevet tekst
- `<ul><li>punkt</li></ul>` for lister
- `<a href="url" target="_blank" rel="noopener">tekst</a>` for lenker
- `<a href="url" ... class="photo-search-link">🔍 Bilder</a>` for bildesøk-lenker
- Emojier beholdes som de er
- `<p>`-tagger for avsnitt

### Koordinater

Hver dag har GPS-koordinater for kartet: `coords` for hoveddestinasjonen og `stops[]` for mellomtstopp.

Stopp-typer:
```js
{ name: "Köln", lat: 50.9375, lng: 6.9603, type: "city" }      // By-stopp
{ name: "Øresundsbroen", lat: 55.57, lng: 12.85, type: "photo" } // Fotostopp
```

## Tech stack

| Hva | Teknologi |
|-----|-----------|
| Byggsystem | Vite |
| CSS | Tailwind CSS v4 via `@tailwindcss/vite` |
| Kart | Leaflet med OpenStreetMap-fliser (gratis, ingen API-nøkkel) |
| JS | Vanilla ES-moduler (ingen React/Vue/Angular) |
| Hosting | Vercel (importerer git-repo, autodetekterer Vite) |
| PDF-generering | Puppeteer (lokalt og i GitHub Action) + Ghostscript (kompresjon) |

## Kommandoer

```bash
npm install          # Installer avhengigheter
npm run dev          # Lokal dev-server med hot-reload
npm run build        # Produksjonsbygg + komprimert PDF (~3 MB) til dist/ og public/
npm run build:fast   # Produksjonsbygg uten PDF (det Vercel kjører)
npm run build:hq     # Produksjonsbygg + høy-kvalitet PDF (~18 MB), uten Ghostscript
npm run preview      # Forhåndsvis produksjonsbygg lokalt
```

## PDF-distribusjon

PDF-en (`tdf-reise.pdf`) er IKKE sjekket inn i repoet. Den genereres på to måter:

- **GitHub Action** (`.github/workflows/pdf.yml`): Kjører ved hver push til `main`. Bygger HQ-versjon på Ubuntu (har Chromium shared libs som Vercel mangler) og laster opp som asset til en GitHub Release med tag `latest-pdf`. Asset-URL er stabil: `https://github.com/nerdegutt/tdf/releases/download/latest-pdf/tdf-reise.pdf`.
- **Lokalt**: `npm run build` eller `npm run build:hq` produserer PDF i `dist/tdf-reise.pdf` (også kopiert til `public/`, men `public/tdf-reise.pdf` er gitignored).

På produksjon redirecter `/tdf-reise.pdf` til GitHub-release-URL-en (definert i `vercel.json`). Lokalt under `npm run dev` har Vite ingen redirect — lenken serverer fra `public/tdf-reise.pdf` hvis den finnes (kjør `npm run build` først), ellers 404.

### Hvordan PDF-en bygges

1. `src/views/print.js` rendrer alle 18 dager + reiseinfo + topp 10 på én lang side (`/print`-ruten).
2. `scripts/render-pdf.mjs`:
   - Starter en lokal HTTP-server på `dist/`.
   - Puppeteer åpner `/print` (eller `/print?hq=1` i HQ-modus).
   - Venter på `window.__printReady` som settes av `print.js` når alle kart-tiles og bilder er ferdig lastet.
   - **Flater kart**: Tar JPEG-screenshot av hvert kart-element, skriver til `dist/__print_tmp__/`, erstatter tile-mosaikken med ett enkelt `<img>` per kart. Dette reduserer PDF-størrelsen dramatisk.
   - Genererer PDF med A4-stående.
   - Komprimerer med Ghostscript (`PDFSETTINGS=/ebook`) i standard-modus. HQ-modus hopper over Ghostscript.
3. Resultatet havner i `dist/tdf-reise.pdf`.

## Filstruktur

```
tdf/
├── index.html              # Eneste HTML-fil, alt rendres her
├── vite.config.js
├── package.json
├── (tdf.md slettet – dagfilene er nå autoritativ kilde)
├── CLAUDE.md
├── src/
│   ├── main.js             # Entrypoint: router, init, event-koordinering
│   ├── style.css           # Tailwind-import + custom styles
│   ├── data/
│   │   ├── days.js         # Aggregator: importerer day1-18.js, kobler på bilder, re-eksporterer meta
│   │   ├── day1.js … day18.js  # Individuelle dagfiler med strukturert data
│   │   ├── meta.js         # tripMeta, bookingOverview, top10
│   │   ├── images.js       # Unsplash-bildedata og attachImages()
│   │   └── routes.js       # Forhåndsgenererte OSRM-kjøreruter (statisk)
│   ├── views/
│   │   ├── overview.js     # Forsiden: kart + dag-kort-grid
│   │   ├── day.js          # Dagvisning: sidebar + seksjoner
│   │   ├── info.js         # Reiseinfo: ruteoversikt, Tesla/kjøring, booking-oversikt
│   │   └── top10.js        # Topp 10-lister: historie, foto, mat
│   └── components/
│       ├── map.js          # Leaflet-kart med OSRM-ruter og markører
│       ├── sidebar.js      # Desktop-sidebar (dagliste) + global dropdown-nav
│       └── section.js      # Felles seksjon-renderer for alle typer
└── public/
    └── (evt. statiske assets)
```

## Arkitektur

### Fire visninger, én HTML-fil

Nettstedet er en SPA med hash-basert routing:
- `#/` → **Oversikt**: Fullskjerm Leaflet-kart med rutepolyline og markører + dag-kort-grid under
- `#/info` → **Reiseinfo**: Ruteoversikt-tabell, praktisk info (Tesla/kjøring), booking-oversikt
- `#/dag/1` … `#/dag/18` → **Dagvisning**: Dagkart (togglebart) + innhold med sidebar-navigasjon
- `#/topp10` → **Topp 10**: Tre personlige topp 10-lister (historie, foto, mat)

Info, dagvisning og topp 10 gjenbruker `#view-day`-containeren (sidebar + innholdsområde). Dagkartet skjules for info og topp 10.

### Dataflyt

```
src/data/day1.js … day18.js (individuelle dagfiler — autoritativ kilde)
    ↓ (importeres av)
src/data/days.js (aggregator: samler alle dager, kobler bilder)
    ↓ (importeres av)
views + components (rendrer til DOM)
```

`days.js` er en ren aggregator som importerer fra `day1.js`–`day18.js`, kobler på bilder fra `images.js`, og re-eksporterer `tripMeta`, `bookingOverview` og `top10` fra `meta.js`. Når innhold skal endres, rediger den aktuelle `dayN.js`-filen direkte.

### Responsiv layout

| Breakpoint | Oversikt | Dagvisning |
|------------|----------|------------|
| Desktop ≥1024px | Kart + grid | Sidebar (250px fast) + innhold |
| Tablet 768–1023px | Kart + grid | Dropdown + innhold |
| Mobil <768px | Kart (lavere) + stablede kort | Dropdown + innhold |

### Kart og kjøreruter

- Leaflet med OpenStreetMap-fliser (gratis)
- **Kjøreruter fra OSRM**: Faktiske veier, ikke luftlinjer. Rutedata er forhåndsgenerert og lagret statisk i `src/data/routes.js` — ingen runtime API-kall
- **routes.js-format**: `export const routes = {"1":{km:733,points:[[lat,lng],...]}, ...}` — ca. 200 punkter per rute
- **Ferje-hack (Rødby↔Puttgarden)**: OSRM kan ikke rute over ferjer. Dag 1 og 18 ruter til/fra Rødby (DK), dag 2 og 17 ruter fra/til Puttgarden (DE). Ferjestrekningen vises ikke på kartet
- **Oversiktskart**: Tegner polyline per dag fra routes.js, markører per dag + stopp, klikk → navigerer til dag
- **Dagkart**: Bruker routes.js hvis tilgjengelig, fallback til stiplet rett linje. Dag 1 (ingen forrige dag) håndteres spesielt — ruten tegnes uten startpunkt-markør
- Dagkartet kan toggles av/på med kartikon i navigasjonsbaren (tilstand lagres i localStorage)
- Kart-slide-animasjon bruker CSS grid `grid-template-rows: 1fr/0fr` for smooth uten layout-problemer
- Piltast- og sveip-navigasjon gjennom hele sekvensen: Reiseinfo → Dag 1–18 → Topp 10
- Sveip (touchstart/touchend) krever ≥80px horisontal sveip og mer horisontalt enn vertikalt for å unngå konflikt med scrolling
- Smart sveip i horisontalt scrollbare elementer (tabeller): navigasjon trigges kun når elementet er scrollet til kanten i sveiperetningen

#### Generere nye ruter

Hvis ruten endres, kan nye OSRM-data hentes med OSRM demo-API:
```
GET https://router.project-osrm.org/route/v1/driving/{lng1},{lat1};{lng2},{lat2}?overview=full&geometries=geojson
```
Respons inneholder `routes[0].geometry.coordinates` (lng/lat-par — husk å flippe til lat/lng for Leaflet) og `routes[0].distance` (meter). Forenkle til ~200 punkter per rute for å holde filstørrelsen nede.

### Unsplash-bilder

Hver dag har et hero-bilde fra Unsplash. Bildedataen ligger i `src/data/images.js` og kobles til dag-objektene via `attachImages()` i `days.js`. Hvert bilde har:
- `hero`: Bred crop (1200×400) for dagvisningens hero-seksjon med gradient-overlay og lenkede credits
- `thumb`: Mindre crop (600×340) for dag-kort på forsiden med ren tekst-attribusjon (ikke lenker, da kortene selv er `<a>`-tagger)
- `credit`/`creditUrl`: Fotografens navn og Unsplash-profil
- `photoUrl`: Lenke til originalbildet på Unsplash
- UTM-parametere på Unsplash-lenker iht. deres retningslinjer

For å bytte bilde: Finn foto-ID og bruk `curl` for å hente CDN-base-URL fra `og:image`-meta-taggen:
```bash
curl -sL "https://unsplash.com/photos/{PHOTO_ID}" | grep -oE 'https://images\.unsplash\.com/photo-[^"?]+' | head -1
```

### Seksjonstyper og visuell stil

Hver seksjonstype rendres med konsistent styling av `section.js`:

| Type | Ikon | Farge | Border + bakgrunn |
|------|------|-------|-------------------|
| `sights` | 🏛️ | blue | Blå venstre-border + svak blå tint |
| `history` | 🧠 | purple | Lilla venstre-border + svak lilla tint |
| `photo` | 📷 | green | Grønn venstre-border + svak grønn tint |
| `accommodation` | 🏨 | amber | Oransje venstre-border + svak oransje tint |
| `food` | 🍽️ | red | Rød venstre-border + svak rød tint |
| `practical` | 💡 | slate | Grå venstre-border + svak grå tint |
| `booking` | 🎟️ | cyan | Cyan venstre-border + svak cyan tint |

Bakgrunnstinten styres via `color-mix()` i CSS (5% light, 10% dark). Fargene defineres som CSS-variabler (`--color-sights` osv.) i `:root`.

Booking-warnings rendres som fremhevet callout-boks med 🎟️-ikon inni den aktuelle seksjonen.

### Sidebar og navigasjon

Desktop: Fast sidebar til venstre med Reiseinfo øverst, alle dager i midten, og Topp 10 nederst:
```
ℹ️ Reiseinfo
───────────
Dag 1 – Puttgarden
Dag 2 – Köln            ← aktiv uthevet
Dag 3 – Rouen
...
───────────
🏆 Topp 10
```

Dropdown (`<select>`) i headeren vises på alle skjermstørrelser, alle visninger. Inneholder Kartoversikt, Reiseinfo, alle dager, og Topp 10.

Smal mobil (<640px): Dropdown legger seg under logoen i headeren for mer plass.

`populateSidebar(route)` og `populateMobileNav(route)` tar et route-objekt `{ view, dayNum }` for å markere aktiv side.

### Dark/light tema

- **Dark er default**. Brukerens valg lagres i localStorage (`tdf-theme`: `'dark'` | `'light'`).
- Inline `<script>` i `<head>` fjerner `dark`-klassen synkront ved `light`-preferanse for å unngå flash.
- Toggle-switch i footer med sol/måne-ikoner.
- Dark-overrides i `style.css` inverterer stone-paletten (bg-stone-50 → #1c1917, bg-white → #292524, osv.).
- Header, sidebar, seksjoner, booking-callouts, Leaflet-popups og zoom-kontroller har egne dark-overrides.
- Kartflisene vises i lys stil uavhengig av tema.

## Oppdateringsworkflow

Innhold redigeres direkte i `src/data/dayN.js`-filene:
1. Endret innhold → oppdater `content`-feltet i riktig seksjon
2. Nye seksjoner → legg til nye objekter i `sections`-arrayet
3. Fjernede seksjoner → fjern fra arrayet
4. Endrede koordinater/steder → oppdater `coords`/`stops`
5. Oppdater `meta.js` hvis totalKm, bookingOverview eller top10 er påvirket
6. Hvis ruten er endret (ny destinasjon), oppdater `routes.js` med nye OSRM-data
7. Sjekk at `section.js` håndterer eventuelle nye seksjonstyper
8. Verifiser med `npm run dev`

## Spesielle elementer

- **Ruteoversikt-tabellen**: Rendres på Reiseinfo-siden (`#/info`) som klikkbar tabell
- **Booking-oversikt-tabellen**: Rendres på Reiseinfo-siden + som callouts per dag
- **Topp 10-listene**: Rendres på Topp 10-siden (`#/topp10`) med fargekodede kategorier
- **Praktisk-seksjonen** (Tesla & kjøring): Rendres på Reiseinfo-siden
- **Lenker med 🔍**: Google bildesøk-lenker — rendres som diskrete "se bilder"-lenker

## Universell utforming (a11y)

- `<main id="app">` som semantisk landmark for hovedinnhold
- Skip-lenke ("Gå til hovedinnhold") øverst i body, synlig ved tab-fokus
- `aria-live="polite"` region (`#nav-announcement`) annonserer sidebytte for skjermlesere
- `aria-current="page"` på aktiv lenke i sidebar
- `aria-label` på kart-toggle-knapp, tema-toggle, kart-containere og sidebar
- `<label>` (sr-only) på navigasjons-dropdown
- `aria-hidden="true"` på dekorative emojier (seksjonsikoner, bil-emoji, sol/måne)
- `scope="col"` på alle `<th>` i tabeller
- `role="separator"` på skillelinjer i sidebar
- Beskrivende popup-lenketekst i kart ("Se dag X: Sted →")
- Bedre alt-tekst på bilder ("Dag X: Fra til Til")

## Git-policy

- **ALDRI** kjør `git commit` eller `git push` uten eksplisitt godkjenning fra brukeren
- Vis endringer og vent på bekreftelse før commit
- Brukeren tester lokalt med `npm run dev` før noe pushes

## Konvensjoner

- Alt UI-tekst på norsk
- Bruk Tailwind utility-klasser, unngå custom CSS der mulig
- Ingen tunge avhengigheter utover Leaflet og Tailwind
- `days.js` er aggregator som re-eksporterer `days`, `tripMeta`, `bookingOverview` og `top10`
- Dagdata redigeres i individuelle `dayN.js`-filer, metadata i `meta.js`, bilder i `images.js`
- Hvert dag-objekt får en `image`-property via `attachImages()` i `days.js`
- Lenker til eksterne sider åpnes i ny fane (`target="_blank"`)
- Emojier beholdes i rendret innhold
