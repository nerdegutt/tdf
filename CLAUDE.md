# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Prosjektoversikt

Statisk nettsted for en 18-dagers biltur gjennom Europa (Tour de France 2026). To reisende (Erlend og Bjørn Erik) kjører fra Rakkestad gjennom Tyskland, Belgia, Frankrike, Spania og tilbake. Alt innhold er norskspråklig.

- **GitHub**: https://github.com/nerdegutt/tdf
- **Produksjon**: https://tdf.offline.no (Vercel, auto-deploy ved push til `main`)

## Kildefil: tdf.md

`tdf.md` er den autoritative kilden for alt innhold. Nettstedet skal reflektere dette dokumentet slavisk. Når brukeren sier "har oppdatert tdf.md", betyr det at `src/data/days.js` må oppdateres tilsvarende.

### Slik parser du tdf.md → days.js

Dokumentet følger et konsistent mønster:

```
## DAG {nr} – {ukedag} {dato}: {fra} → {til}
**Ca. {km} km | {beskrivelse}**
```

Hver dag har seksjoner markert med overskrifter og emojier:
| Emoji-prefiks i tdf.md | Section type i days.js | Beskrivelse |
|-------------------------|----------------------|-------------|
| 🏛️ | `sights` | Severdigheter og steder å besøke |
| 🧠 | `history` | Historisk trivia for Bjørn Erik |
| 📷 | `photo` | Fotomuligheter og -tips |
| 🏨 | `accommodation` | Overnattingsforslag |
| 🍽️ | `food` | Restauranter, mat og drikke |
| 💡 | `practical` | Praktiske tips, alternativer for dagen |
| 🎟️ | `booking` | Ting som bør forhåndsbestilles (opptrer som callout inni andre seksjoner) |

Noen dager har underseksjoner (f.eks. "Ettermiddag: D-dagskysten" under dag 5). Disse er del av `sights`-seksjonen for den dagen.

Booking-callouts (linjer som starter med `> 🎟️`) skal bli en `bookingWarning`-property på den aktuelle seksjonen de opptrer i, ikke egne seksjoner.

### Seksjon-mapping eksempel

Gitt denne tdf.md-strukturen:
```markdown
## DAG 6 – Søndag 18. mai: Bayeux → Mont Saint-Michel
**Ca. 130 km | Kort kjøring til et av verdens mest ikoniske steder**

> 🎟️ **BOOK PÅ FORHÅND:** Abbediet – kan bli lange køer.

### 🏛️ Mont Saint-Michel
- **Abbediet**: Benediktinerabdedi grunnlagt 708 e.Kr. ...
```

Blir dette i days.js:
```js
{
  day: 6,
  date: "18. mai",
  weekday: "Søndag",
  from: "Bayeux",
  to: "Mont Saint-Michel",
  km: 130,
  subtitle: "Kort kjøring til et av verdens mest ikoniske steder",
  coords: { lat: 48.6361, lng: -1.5115 },
  stops: [],
  sections: [
    {
      type: "sights",
      title: "Mont Saint-Michel",
      bookingWarning: "Abbediet – kan bli lange køer.",
      bookingUrl: "https://www.abbaye-mont-saint-michel.fr/",
      content: `<ul><li><strong>Abbediet</strong>: Benediktinerabdedi grunnlagt 708 e.Kr. ...</li></ul>`
    }
  ]
}
```

### Innholds-konvertering: Markdown → HTML i content-feltet

Konvertér markdown til enkel HTML i `content`-feltet:
- `**tekst**` → `<strong>tekst</strong>`
- `- punkt` → `<ul><li>punkt</li></ul>`
- `[tekst](url)` → `<a href="url" target="_blank" rel="noopener">tekst</a>`
- `[🔍 Bilder](url)` → `<a href="url" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a>`
- Behold emojier som de er i HTML-en
- Avsnitt separert med tomme linjer → `<p>`-tagger

### Koordinater

Hver dag trenger GPS-koordinater for kartet. Hoveddestinasjonen (`coords`) og eventuelle mellomtstopp (`stops`). Koordinatene finner du basert på stedsnavn. Alle stopp nevnt med `### 🏛️ ANBEFALT STOPP:` eller tilsvarende i tdf.md skal ha egne stops-entries med koordinater.

Stopp-typer i `stops[]`:
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

## Kommandoer

```bash
npm install          # Installer avhengigheter
npm run dev          # Lokal dev-server med hot-reload
npm run build        # Produksjonsbygg til dist/
npm run preview      # Forhåndsvis produksjonsbygg lokalt
```

## Filstruktur

```
tdf/
├── index.html              # Eneste HTML-fil, alt rendres her
├── vite.config.js
├── package.json
├── tdf.md                  # KILDEFIL – autoritativ for alt innhold
├── CLAUDE.md
├── src/
│   ├── main.js             # Entrypoint: router, init, event-koordinering
│   ├── style.css           # Tailwind-import + custom styles
│   ├── data/
│   │   └── days.js         # Strukturert data for alle 18 dager (generert fra tdf.md)
│   ├── views/
│   │   ├── overview.js     # Forsiden: kart + dag-kort-grid
│   │   └── day.js          # Dagvisning: sidebar + seksjoner
│   └── components/
│       ├── map.js          # Leaflet-kart med rute og markører
│       ├── sidebar.js      # Desktop-sidebar (dagliste) + mobil-dropdown
│       └── section.js      # Felles seksjon-renderer for alle typer
└── public/
    └── (evt. statiske assets)
```

## Arkitektur

### To visninger, én HTML-fil

Nettstedet er en SPA med hash-basert routing:
- `#/` → **Oversikt**: Fullskjerm Leaflet-kart med rutepolyline og markører + dag-kort-grid under
- `#/dag/1` → **Dagvisning**: Dagkart (togglebart) + innhold med sidebar-navigasjon
- `#/dag/2` osv.

### Dataflyt

```
tdf.md (redigeres manuelt)
    ↓ (Claude Code konverterer)
src/data/days.js (strukturert JS)
    ↓ (importeres av)
views + components (rendrer til DOM)
```

### Responsiv layout

| Breakpoint | Oversikt | Dagvisning |
|------------|----------|------------|
| Desktop ≥1024px | Kart + grid | Sidebar (250px fast) + innhold |
| Tablet 768–1023px | Kart + grid | Dropdown + innhold |
| Mobil <768px | Kart (lavere) + stablede kort | Dropdown + innhold |

### Kart

- Leaflet med OpenStreetMap-fliser (gratis)
- **Oversiktskart**: Polyline gjennom alle dagenes koordinater, markører per dag + stopp, klikk → navigerer til dag
- **Dagkart**: Viser rute for kjøredager (forrige destinasjon → stopp → dagens destinasjon), zoomer inn på byen for hviledager
- Dagkartet kan toggles av/på med kartikon i navigasjonsbaren (tilstand lagres i localStorage)
- Kart-slide-animasjon bruker CSS grid `grid-template-rows: 1fr/0fr` for smooth uten layout-problemer
- Piltast-navigasjon (venstre/høyre) mellom dager i dagvisningen

### Seksjonstyper og visuell stil

Hver seksjonstype rendres med konsistent styling av `section.js`:

| Type | Ikon | Farge (Tailwind) | Border/badge |
|------|------|-------------------|--------------|
| `sights` | 🏛️ | blue-600 | Blå venstre-border |
| `history` | 🧠 | purple-600 | Lilla venstre-border |
| `photo` | 📷 | green-600 | Grønn venstre-border |
| `accommodation` | 🏨 | amber-600 | Oransje venstre-border |
| `food` | 🍽️ | red-600 | Rød venstre-border |
| `practical` | 💡 | slate-600 | Grå venstre-border |

Booking-warnings rendres som fremhevet callout-boks med 🎟️-ikon inni den aktuelle seksjonen.

### Sidebar (dagvisning)

Desktop: Fast sidebar til venstre med alle dager listet som:
```
Dag 1 – Puttgarden
Dag 2 – Duisburg       ← aktiv dag uthevet
Dag 3 – Rouen
...
```

Mobil: `<select>`-dropdown øverst med samme innhold.

Mobil (<640px): Dropdown legger seg under logoen i headeren for mer plass.

### Dark/light tema

- **Dark er default**. Brukerens valg lagres i localStorage (`tdf-theme`: `'dark'` | `'light'`).
- Inline `<script>` i `<head>` fjerner `dark`-klassen synkront ved `light`-preferanse for å unngå flash.
- Toggle-switch i footer med sol/måne-ikoner.
- Dark-overrides i `style.css` inverterer stone-paletten (bg-stone-50 → #1c1917, bg-white → #292524, osv.).
- Header, sidebar, seksjoner, booking-callouts, Leaflet-popups og zoom-kontroller har egne dark-overrides.
- Kartflisene vises i lys stil uavhengig av tema.

## Oppdateringsworkflow

Når brukeren sier "har oppdatert tdf.md, oppdater nettstedet":

1. Les `tdf.md` og identifiser endringer (nye dager, endrede seksjoner, nytt innhold)
2. Oppdater `src/data/days.js` tilsvarende:
   - Nye dager → legg til nye objekter i `days`-arrayet
   - Endret innhold → oppdater `content`-feltet i riktig seksjon
   - Nye seksjoner → legg til nye objekter i `sections`-arrayet
   - Fjernede seksjoner → fjern fra arrayet
   - Endrede koordinater/steder → oppdater `coords`/`stops`
3. Sjekk at `section.js` håndterer eventuelle nye seksjonstyper
4. Verifiser med `npm run dev`

## Spesielle elementer i tdf.md

- **Ruteoversikt-tabellen** (øverst): Brukes til oversiktsdata og dag-kort på forsiden
- **Booking-oversikt-tabellen**: Rendres som egen seksjon på forsiden eller som callouts per dag
- **Topp 10-listene** (bunnen): Kan bli en egen visning eller seksjon på forsiden
- **Praktisk-seksjonen** (Tesla & kjøring): Global info, vises på forsiden
- **Lenker med 🔍**: Google bildesøk-lenker — rendres som diskrete "se bilder"-lenker

## Git-policy

- **ALDRI** kjør `git commit` eller `git push` uten eksplisitt godkjenning fra brukeren
- Vis endringer og vent på bekreftelse før commit
- Brukeren tester lokalt med `npm run dev` før noe pushes

## Konvensjoner

- Alt UI-tekst på norsk
- Bruk Tailwind utility-klasser, unngå custom CSS der mulig
- Ingen tunge avhengigheter utover Leaflet og Tailwind
- `days.js` eksporterer `export const days = [...]` og `export const tripMeta = {...}`
- Lenker til eksterne sider åpnes i ny fane (`target="_blank"`)
- Emojier fra tdf.md beholdes i rendret innhold
