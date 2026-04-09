# Visuell redesign — Tour de France 2026

Designbrief for oppgradering av dagvisningen og nettstedet generelt.
Dato: 2026-04-08

---

## 1. Problemanalyse

### Hva fungerer i dag
- Fargekodingen per seksjonstype (blå=severdigheter, lilla=historie osv.) gir gjenkjennelighet
- Hero-bilder med gradient-overlay er pent
- Sidebar-navigasjon på desktop er funksjonell
- Dark/light mode er godt implementert
- Kartet med OSRM-ruter er teknisk solid

### Hva som ikke fungerer
- **Boks-i-boks-monotoni**: Alle seksjoner er identiske rektangler med `border-left-4 + rounded-lg + shadow-sm`. Bokser inni bokser (booking-callout). Ingen visuell variasjon.
- **Flat hierarki**: Severdigheter og fotomuligheter har nøyaktig samme visuelle vekt. Alt er like viktig = ingenting er viktig.
- **Innholdsoverflod-problem**: Nå som historisk trivia, bøker/filmer, skjulte perler og tematiske tråder skal inn, vil listen av identiske bokser bli uutholdelig lang. Dag 4 (Rouen) har allerede 4 seksjoner — med nytt innhold kan det bli 8-10.
- **Passiv layout**: Ren vertikal stabling, ingen variasjon i bredde, størrelse eller plassering. Intet trekker blikket.
- **Typografi**: System-font uten personlighet. Ingen variasjon i tekststørrelse utover standard h3/body.

---

## 2. Designprinsipper for redesignet

1. **Progressiv avsløring**: Vis det viktigste først. La brukeren grave dypere selv.
2. **Visuelt hierarki gjennom variasjon**: Ulike innholdstyper fortjener ulike visuelle behandlinger — ikke alt skal være en boks.
3. **Luft og rytme**: Varier spacing og bredde for å skape pusterom mellom tette informasjonsblokker.
4. **Berøringsflater**: Gjør innholdet interaktivt der det gir mening (utvidbare seksjoner, tabs) uten å skjule kritisk info.

---

## 3. Dagvisningens nye struktur

### 3.1 Tre hierarkiske nivåer

I stedet for en flat liste av seksjoner, del innholdet i tre tydelige lag:

#### Nivå 1: "Dagens høydepunkter" (alltid synlig, visuelt dominerende)
- **Hva**: De 2-3 viktigste tingene for denne dagen. F.eks. Kölnerdomen, Waterloo-slagmarken, Mont Saint-Michel.
- **Visuell behandling**: Store, luftige blokker med bilde (der tilgjengelig), tydelig overskrift i 1.5rem/24px, og et kort sammendrag (2-3 setninger). IKKE i en boks — bruk full bredde med rikelig whitespace. Skill fra resten med en tynn separator eller bare luft.
- **Implementering**: Nytt felt `highlight: true` på utvalgte seksjoner i dayN.js. Seksjoner med `highlight: true` rendres i dette nivået.
- **Layout**: Stablet vertikalt, men med vesentlig mer luft enn dagens bokser. Tenk magasin-layout — overskrift, kort intro, deretter detaljer.

#### Nivå 2: "Mer å oppdage" (alltid synlig, men visuelt nedtonet)
- **Hva**: Matanbefalinger, overnatting, fotomuligheter, praktiske tips — ting som er nyttige men ikke "opplevelsen".
- **Visuell behandling**: Kompaktere kort i et 2-kolonners grid (desktop) / stablet (mobil). Kortene bruker den eksisterende fargestreken (border-left), men er mindre og tettere enn dagens seksjoner. Overskriften er i 1rem/16px.
- **Layout desktop**: `grid-cols-2` med `gap-4`. Mat og overnatting side om side. Foto og praktisk side om side.
- **Layout mobil**: Stablet med minimal spacing.

#### Nivå 3: "Dypdykk" (kollapset, brukeren åpner selv)
- **Hva**: Historisk trivia, bøker/filmer, skjulte perler, tematiske koblinger — det som beriker men ikke er essensielt.
- **Visuell behandling**: Accordions/utvidbare paneler med kun overskrift synlig. Ikon + tittel + "chevron ned"-ikon. Bakgrunn uten boks — bare en tynn border-bottom som separator.
- **Interaksjon**: Klikk/tap på tittelen folder ut innholdet med en smooth CSS-animasjon (same grid-template-rows-teknikk som dagkartet allerede bruker).
- **Implementering**: `<details>`/`<summary>` for progressiv forbedring (fungerer uten JS), stylet med Tailwind. Alternativt custom toggle med aria-expanded.

### 3.2 Seksjonens nye anatomi (Nivå 1)

Erstatt den nåværende boks-wrapperen med en mer åpen layout:

```
[Ikon]  KATEGORI-TAG (liten, fargekodet)
        
# Seksjonstittel                          ← større, fetere
Kort sammendrag i 2-3 setninger           ← ny property: `summary`
        
Detaljert innhold (dagens content)        ← litt nedtonet farge
        
--- separator eller bare luft ---
```

Konkret:
- **Kategori-tag**: Erstatt den fargerike border-left med en liten pill/tag øverst: `<span class="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded-full">🏛️ Severdigheter</span>` med bakgrunnsfarge fra seksjonstypen. Subtilt men informativt.
- **Tittel**: Større font (text-xl eller text-2xl for Nivå 1), font-bold, text-stone-900. Ingen emoji i selve tittelen — emojien er i taggen.
- **Sammendrag**: Nytt felt `summary` i dataobjektet. Vises i text-base, text-stone-600, maks 2-3 linjer. Gir brukeren en rask vurdering av om dette er verdt å lese.
- **Content**: Dagens HTML-innhold, men i text-sm (litt mindre enn body) og text-stone-500/600. Ikke i en boks — rett på bakgrunnen.

### 3.3 Bort med border-left-4-boksen

**Ikke fjern den helt, men reservér den for Nivå 2-kort.** Det er et greit visuelt mønster for kompakte informasjonsblokker — problemet er at den brukes på ALT. Løsningen:

| Nivå | Visuell wrapper |
|------|----------------|
| Nivå 1 (høydepunkter) | Ingen boks. Åpen layout med separator. Kategori-tag i pill-format. |
| Nivå 2 (kompakt) | Behold border-left-4 + tint, men i et 2-kolonne grid, med mindre padding og font. |
| Nivå 3 (dypdykk) | Accordion med kun border-bottom. Ingen bakgrunnsfarge i kollapset tilstand. Utvidet: svak tint. |

---

## 4. Nye innholdstyper — visuell behandling

### 4.1 "Visste du at…?" — Historisk trivia-bobler

**Konsept**: Korte, frittstående trivia-biter som bryter opp flyten mellom seksjoner. Ikke en del av seksjonsstrukturen — plasseres som "mellomrom-innhold" mellom nivåene.

**Visuell stil**:
```
┌──────────────────────────────────────────┐
│  🧠  Visste du at…?                      │
│                                          │
│  Kölnerdomen finnes bare fordi           │
│  relikviene til De hellige tre konger    │
│  ble røvet fra Milano i 1164.            │
│  Hele katedralen er en glorifisert       │
│  oppbevaringsboks.                       │
└──────────────────────────────────────────┘
```

- Ingen border-left. I stedet en subtil border rundt hele elementet (1px, stone-200/dark:stone-700) med rounded-xl.
- Bakgrunn: svak lilla tint (color-mix 3%) for å signalisere historie-tilhørighet.
- Font: text-sm, kursiv ingress ("Visste du at…"), deretter normal tekst.
- Max-width: 80% av containeren, sentrert — bryter den konstante full-bredde-flyten.
- Plassering: Mellom Nivå 1 og Nivå 2. Eller spredt utover mellom seksjoner der det passer.

**Data-implementering**: Ny property `trivia: []` på dag-objektet — et array med korte strenger. Rendres som trivia-bobler mellom seksjonene.

### 4.2 Bøker og filmer — inline berikelse

**Konsept**: Bok/film-referanser skal IKKE være en egen seksjon. De skal knyttes til stedet de handler om, som berikende metadata.

**To varianter**:

#### A) Inline-tag på seksjonen
Under tittelen til en høydepunkt-seksjon, vis relevante referanser som kompakte tags:

```
🏛️ SEVERDIGHETER

# Waterloo-slagmarken

📖 Les Misérables (Victor Hugo)  ·  🎬 Waterloo (1970)  ·  📖 Vanity Fair
```

Implementering: Ny property `references: [{type: 'book', title: '...', author: '...'}, {type: 'film', title: '...', year: '...'}]` på seksjonen. Rendres som en rad med pill-tags under tittelen.

Stil: `text-xs text-stone-400`, `border border-stone-200 rounded-full px-2 py-0.5`. Klikk/hover viser en tooltip eller ekspanderer til kort beskrivelse.

#### B) Utvidbar referanse-blokk (Nivå 3)
I dypdykk-accordionen, en dedikert "Bøker & filmer"-seksjon med kort-layout:

```
📚 BØKER & FILMER FOR DENNE DAGEN

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ 📖              │  │ 🎬              │  │ 📖              │
│ Les Misérables  │  │ Waterloo (1970) │  │ Vanity Fair     │
│ Victor Hugo     │  │ Rod Steiger     │  │ Thackeray       │
│                 │  │                 │  │                 │
│ "Waterloo er    │  │ 17 000          │  │ Brussel-scenene │
│ ikke et slag…"  │  │ statister!      │  │ før slaget.     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

Grid med 3 kolonner desktop, 1-2 mobil. Hvert kort har:
- Type-ikon (📖/🎬/🎧)
- Tittel i font-medium
- Forfatter/regissør i text-xs text-stone-400
- 1-2 setninger kobling til stedet
- Eventuelt sitat i kursiv

### 4.3 Skjulte perler / reiseblogger-tips

**Konsept**: Lokale tips som føles annerledes enn de "offisielle" severdighetene. Skal ha en mer uformell, personlig tone.

**Visuell stil**:
```
💎  SKJULT PERLE

    Belgisches Viertel — Kölns hippeste nabolag
    
    10 min gange fra domen. Brüsseler Platz er byens 
    uoffisielle stue om kvelden. Grab-and-go fra Veedels-
    butikkene, sett deg ned, og se Köln på ekte.
    
    📍 5 min fra ruten  ·  ⏱️ 30 min  ·  💰 Gratis
```

- Ingen boks — åpen layout som Nivå 1, men med en distinkt tag (`💎 SKJULT PERLE` i en mørk pill, f.eks. bg-stone-800 text-white text-xs).
- Metadata-rad nederst med avstand fra ruten, tidsbruk og kostnad — formatert som diskrete tags.
- Plasseres i Nivå 2 blant de kompakte kortene, men visuelt differensiert med den mørke taggen.

**Data-implementering**: Ny seksjonstype `gem` med tilleggsproperties `detour` (km/min fra ruten), `duration` (anbefalt tid), `cost` (gratis/billig/moderat).

### 4.4 Tematiske tråder

**Konsept**: Røde tråder som binder dager sammen (vikingruten, Napoleon-sporet, katedralkappløpet). Skal gi en følelse av at reisen henger sammen.

**Visuell stil**: En tynn, fargekodet linje (ikke boks!) øverst på dagvisningen, under hero-bildet:

```
━━━ 🏛️ VIKINGSPORET: Dag 1 (Roskilde) → Dag 4 (Rouen) → Dag 5 (Bayeux) ━━━
```

- Implementering: Horisontalt scrollbar stripe med dag-lenker.
- Stil: Full bredde, text-xs, bg subtil farge. Klikkbare daglenker.
- Bare synlig på dager som tilhører tråden.

**Data-implementering**: Nytt toppnivå-objekt `threads` i meta.js:
```js
export const threads = [
  { id: 'viking', label: 'Vikingsporet', icon: '⚔️', color: 'purple', days: [1, 4, 5] },
  { id: 'napoleon', label: 'Napoleon-tråden', icon: '👑', color: 'red', days: [3, 4, 6] },
  { id: 'cathedral', label: 'Katedralkappløpet', icon: '⛪', color: 'blue', days: [2, 3, 4, 6] },
]
```

---

## 5. Dagvisningens layout — full redesign

### 5.1 Ny seksjonsinndeling (top-down)

```
┌─────────────────────────────────────────────────────┐
│  HERO-BILDE (full bredde, høyere enn i dag: 300px)  │
│  med gradient + dag-header OPPå bildet              │
└─────────────────────────────────────────────────────┘

  ── Tematisk tråd-stripe (hvis aktuell) ──

  ┌───────────────────────────────────────────────┐
  │  🏛️ SEVERDIGHETER                             │  ← Nivå 1
  │                                               │
  │  # Kölnerdomen                                │
  │  Europas mest ambisiøse "oppbevaringsboks"…   │
  │                                               │
  │  📖 Referanser: Tod und Teufel (Schätzing)    │
  │  · 🎬 Köln-Tatort                             │
  │                                               │
  │  [Detaljert innhold]                          │
  └───────────────────────────────────────────────┘

  ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
  │  🧠  Visste du at…?                           │  ← Trivia-boble
  │  Uten rovet av De hellige tre kongers          │
  │  relikvier fra Milano i 1164 — ingen dom.     │
  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘

  ┌──────────────────┐  ┌──────────────────┐
  │ 🍽️ Mat & drikke  │  │ 🏨 Overnatting   │  ← Nivå 2 (grid)
  │                  │  │                  │
  │ Früh am Dom      │  │ Van der Valk     │
  │ Lommeschweiß…    │  │ Moers            │
  └──────────────────┘  └──────────────────┘

  ┌──────────────────┐  ┌──────────────────┐
  │ 📷 Fotomuligh.   │  │ 💡 Praktisk      │
  │                  │  │                  │
  │ Hohenzollern-    │  │ Parkering: …     │
  │ brücke, Triange… │  │ Timing: …        │
  └──────────────────┘  └──────────────────┘

  ── 💎 SKJULTE PERLER ──
  
  Belgisches Viertel — Kölns hippeste nabolag
  📍 10 min gange  ·  ⏱️ 1t  ·  💰 Gratis

  ── DYPDYKK (accordion) ──

  ▸ 🧠 Historisk trivia for Bjørn Erik         ← kollapset
  ▸ 📚 Bøker & filmer                          ← kollapset
  ▸ 🔗 Tematiske koblinger                     ← kollapset
```

### 5.2 Hero-bilde redesign

Dagens hero er 192px (h-48) desktop / 256px (h-64). Øk til:
- **Desktop**: `h-72` (288px) — nok plass til å legge dag-headeren INNI bildet.
- **Mobil**: `h-56` (224px).

Flytt dag-headeren (dagnummer-sirkelen, dato, fra→til, subtitle) ned i hero-bildet, over gradienten. Hvit tekst. Dette sparer vertikal plass og gir en mer magazine-aktig feel.

```html
<div class="relative h-72">
  <img src="..." class="w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
  <div class="absolute bottom-6 left-6">
    <span class="text-white/70 text-sm">Dag 2 · Torsdag 14. mai</span>
    <h2 class="text-3xl font-bold text-white">Puttgarden → Köln</h2>
    <span class="text-white/60 text-sm">🚗 530 km · Domkirken, Eau de Cologne og kölsch</span>
  </div>
</div>
```

### 5.3 Booking-callout redesign

Nåværende: rosa boks inni en farget boks. Boks-i-boks.

Ny stil: En horisontal "banner" med ikon + tekst + CTA-knapp, plassert rett under seksjonens tittel (ikke inne i en wrapper-boks, men som en del av seksjonens innhold):

```
🎟️  Book på forhånd: Kölnerdomen — gratis inngang men timebestilling anbefalt
                                                        [Bestill her →]
```

Stil: Ingen bakgrunnsfarge. I stedet: `border border-amber-300 rounded-lg` med `py-2 px-4`. En tynn, iøynefallende kant uten tung bakgrunn. Knappen `Bestill her →` som en liten pill med `bg-amber-500 text-white`.

---

## 6. Typografi-oppgradering

### 6.1 Font-stack

Bytt fra `system-ui` til en mer distinkt kombinasjon:

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

Inter er en open-source-font med utmerket lesbarhet, mange vekter, og støtte for norske tegn. Tilgjengelig via Google Fonts eller `@fontsource/inter` (npm-pakke, self-hosted = raskt).

Alternativt (null-kostnad, ingen ekstra last): Bruk system-ui men med typografiske forbedringer via CSS:

```css
body {
  font-family: system-ui, -apple-system, sans-serif;
  font-feature-settings: "cv01", "cv02", "cv03";  /* Åpnere former i Inter/SF Pro */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
```

### 6.2 Typografisk skala

Definer en tydelig skala med større spenn mellom nivåene:

| Element | Nåværende | Nytt | Bruk |
|---------|-----------|------|------|
| Dag-tittel (i hero) | text-2xl (24px) | text-3xl (30px) | Hovedtittel |
| Nivå 1-seksjonstittel | text-lg (18px) | text-xl (20px) | Høydepunkter |
| Nivå 2-korttittel | text-lg (18px) | text-base font-semibold (16px) | Kompakte kort |
| Nivå 3-accordion-tittel | — (ny) | text-sm font-medium (14px) | Dypdykk-toggle |
| Body text | text-base (16px) | text-base (16px) | Uendret |
| Sammendrag | — (ny) | text-base text-stone-500 (16px) | Under Nivå 1-tittel |
| Metadata/tags | text-xs (12px) | text-xs (12px) | Uendret |

### 6.3 Linjelengde

Nåværende max-width er `max-w-4xl` (896px) for dag-innholdet. Det er greit, men for Nivå 1-tekst bør linjelengden begrenses ytterligere for bedre lesbarhet:

```css
.section-prose { max-width: 65ch; } /* ca. 650px */
```

Nivå 2-kort i grid håndterer dette naturlig gjennom kolonne-bredden.

---

## 7. Spacing og rytme

### 7.1 Vertikal spacing mellom nivåer

| Overgang | Nåværende | Nytt |
|----------|-----------|------|
| Hero → Nivå 1 | mb-6 (24px) | mb-10 (40px) |
| Mellom Nivå 1-seksjoner | mb-4 (16px) | mb-12 (48px) |
| Trivia-boble (mellom nivåer) | — | my-10 (40px over/under) |
| Nivå 1 → Nivå 2-grid | — | mt-12 mb-8 (48/32px) |
| Mellom Nivå 2-kort | gap-4 (16px) | gap-5 (20px) |
| Nivå 2 → Nivå 3 | — | mt-10 (40px) |
| Mellom Nivå 3-accordions | mb-0 | border-b som separator |

### 7.2 Separatorer

Erstatt noe av shadow-boksene med tynnere, elegantere separatorer:

- Mellom Nivå 1-seksjoner: `<hr class="border-stone-200 my-10">` (tynn linje med masse luft)
- Mellom Nivå 2 og 3: En typografisk separator: `<div class="text-center text-stone-300 text-xs tracking-widest my-10">· · ·</div>`
- Nivå 3-accordions: Bare `border-b border-stone-200` på hvert panel, ingen annen visuell separasjon.

---

## 8. Fargebruk — mer tilbakeholden

### 8.1 Reduser fargemetning

Dagens seksjonsfarger er sterke (blue-600, purple-600 osv.). For Nivå 1 (uten boks) bør fargene bare brukes i:
- Kategori-tag (pill med bg-farge)
- Eventuelt understrek på tittel ved hover

For Nivå 2 (bokser) behold den nåværende stilen, men skru ned bakgrunnstinten fra 5% til 3% (light) / 8% (dark).

For Nivå 3 (accordions) — ingen farge i kollapset tilstand. Ved utvidelse, svak tint (2%) på innholdsområdet.

### 8.2 Aksent-farge

Innfør en konsekvent aksent-farge for interaktive elementer:
- CTA-knapper (booking): `bg-amber-500` / `hover:bg-amber-600`
- Accordion-chevron: `text-stone-400` → `text-blue-500` ved hover
- Referanse-tags: `border-stone-300` → `border-blue-200` ved hover

---

## 9. Forsiden (oversikt) — mindre endringer

Forsiden fungerer godt. Små forbedringer:

### 9.1 Dag-kort med sneak peek
Legg til subtitle under by-navnet i hvert kort: en enkelt setning som gjør kortet mer innbydende.

```
Dag 4 · Lørdag 16. mai

Rouen
Rakkestad → Rouen
Jeanne d'Arc, Monet og Frankrikes eldste vertshus  ← subtitle allerede finnes, gi den mer plass
🚗 0 km · Heldagsutforskning
```

Gi subtitle'en text-sm i stedet for text-xs, og la den bryte over flere linjer.

### 9.2 Tematiske tråder på forsiden
Under dag-kortene, en seksjon med de tematiske trådene som horisontale "tidslinje"-elementer:

```
⚔️ Vikingsporet     Dag 1 ──── Dag 4 ──── Dag 5
👑 Napoleon-tråden   Dag 3 ──── Dag 4 ──── Dag 6
```

Hver dag-sirkelen er klikkbar. Gir brukeren en grunn til å bla gjennom hele reisen, ikke bare dag for dag.

---

## 10. Responsivitet

### 10.1 Nivå 2-grid

| Breakpoint | Kolonner |
|------------|----------|
| < 640px | 1 kolonne (stablet) |
| 640–1024px | 2 kolonner |
| > 1024px | 2 kolonner (sidebar spiser plass) |

### 10.2 Trivia-bobler

Desktop: max-width 80%, sentrert.
Mobil: full bredde med mx-4 padding. Fortsatt sentrert tekst.

### 10.3 Referanse-tags

Desktop: horisontal rad.
Mobil: wrapp til flere linjer, men behold pill-formatet.

### 10.4 Accordions (Nivå 3)

Fungerer identisk på alle skjermstørrelser. Touch-target minimum 44px høyde på accordion-headeren.

### 10.5 Hero-bilde med innebygd header

Desktop: tekst plassert i bunnen venstre.
Mobil: tekst sentrert, litt mindre font (text-2xl i stedet for text-3xl).

---

## 11. Dark mode-tilpasninger

Alle nye elementer trenger dark-overrides:

| Element | Light | Dark |
|---------|-------|------|
| Kategori-pill bg | color-mix(seksjonsfarge 10%, white) | color-mix(seksjonsfarge 20%, #1c1917) |
| Trivia-boble border | border-stone-200 | border-stone-700 |
| Trivia-boble bg | color-mix(purple 3%, white) | color-mix(purple 8%, #1c1917) |
| Accordion border-b | border-stone-200 | border-stone-700 |
| Referanse-tag border | border-stone-300 | border-stone-600 |
| Booking-banner border | border-amber-300 | border-amber-700 |
| Skjult perle-tag bg | bg-stone-800 text-white | bg-stone-200 text-stone-900 |

---

## 12. Implementeringsrekkefølge

Prioritert etter visuell effekt per time investert:

### Fase 1: Rask forbedring (1-2 timer)
1. **Hero-redesign**: Flytt dag-header inn i hero-bildet. Øk høyde. Stor visuell effekt, liten kodeendring (kun `day.js`).
2. **Spacing-oppgradering**: Øk spacing mellom seksjoner, fjern noen skygger. Kun CSS/klasse-endringer.
3. **Booking-callout**: Fjern boks-i-boks, erstatt med banner-stil.

### Fase 2: Strukturell endring (3-5 timer)
4. **Nivå 2-grid**: Rendre mat/overnatting/foto/praktisk i 2-kolonners grid. Endring i `day.js` for å gruppere seksjoner.
5. **Nivå 1-seksjoner uten boks**: Fjern border-left og bakgrunnstint for highlight-seksjoner. Legg til kategori-pill.
6. **Datamodell-utvidelse**: Legg til `highlight`, `summary`, `trivia` properties i dayN.js.

### Fase 3: Nye innholdstyper (4-6 timer)
7. **Trivia-bobler**: Ny render-funksjon og data.
8. **Accordions for dypdykk**: Implementer Nivå 3 med `<details>`/`<summary>`.
9. **Referanse-tags**: Inline bok/film-referanser på seksjoner.
10. **Skjulte perler**: Ny seksjonstype `gem` med metadata.

### Fase 4: Polish (2-3 timer)
11. **Tematiske tråder**: Data-struktur og visuell stripe.
12. **Font-optimalisering**: Inter via fontsource eller typografiske forbedringer.
13. **Overgangsanimasjoner**: Subtile fade/slide for accordion-innhold.
14. **Forside-forbedringer**: Tidslinje for tematiske tråder.

---

## 13. Ting vi IKKE endrer

- **Sidebar-navigasjonen**: Fungerer godt, ingen grunn til å røre den.
- **Kartet**: Teknisk solid og visuelt distinkt nok.
- **Dark/light toggle**: Beholdes som den er.
- **Hash-routing**: Fungerer, ingen grunn til å bytte.
- **Tailwind + vanilla JS**: Beholder tech-stacken.
- **Seksjonsfargene**: Fargekodingen er god — det er bruken av den som må varieres.

---

## 14. Visuelt moodboard (verbal beskrivelse)

Tenk på redesignet som en overgang fra **"referanseverk"** til **"reisemagasin"**:

- **Før**: En rapport med fargekodede bokser. Grundig men kjedelig. Alt like fremtredende.
- **Etter**: Et magasin-layout der store bilder og overskrifter fanger blikket, kompakte info-kort gir det praktiske, og dypdykk venter for de som vil grave. Luft, typografi og hierarki gjør at øyet vet hvor det skal se.

Inspirasjonsreferanser (ikke kopier, men lær av):
- **Lonely Planet destination pages**: Hierarkisk innhold med "top experiences" først.
- **Notion travel templates**: Ren typografi, variasjon i blokktyper (callout, toggle, kolonne-grid).
- **NY Times travel section**: Store bilder, magazine-typografi, sitater som bryter opp teksten.

---

## 15. Oppsummering

| Problem | Løsning |
|---------|---------|
| Alt ser likt ut | Tre hierarkiske nivåer med ulik visuell behandling |
| Boks i boks | Nivå 1 uten boks, Nivå 2 kompakte kort, Nivå 3 accordion |
| Flat hierarki | highlight-seksjoner rendres stort og luftig |
| For mye innhold | Progressiv avsløring via accordion og grid |
| Monoton typografi | Større skala-spenn, kategori-pills, sammendrags-tekst |
| Nye innholdstyper trenger plass | Trivia-bobler, referanse-tags, perle-kort, tråd-striper |
| Passiv layout | 2-kolonne grid, varierende bredde, sentrerte trivia-elementer |
