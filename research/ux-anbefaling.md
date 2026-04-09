# UX-anbefaling: Håndtering av nytt innhold

Dato: 2026-04-08

---

## Bakgrunn

Tre forskere (historiker, reiseblogger, bibliofil) har produsert ca. 3500 linjer nytt innhold fordelt på 9 filer. Nettstedet har i dag et flatt seksjonslayout der alt innhold vises sekvensielt som identiske bokser med farget venstrekant. Resultatet er monotont ("bokser i bokser") og skalerer dårlig med mer innhold.

Denne anbefalingen dekker fem områder: kurasjon, informasjonsarkitektur, progressiv avsløring, datastruktur og navigasjon. Alt er skrevet for å være direkte implementerbart i den eksisterende tech-stacken (vanilla JS, Tailwind, Vite).

---

## 1. Kurasjon: Hva skal inn, hva skal gjemmes, hva skal kuttes

### Prinsipp

Hver dag har en "oppmerksomhetsbudsjett". To karer på biltur i mai har ca. 2-3 minutter per dag til å skumme innholdet kvelden før. Alt som er synlig uten interaksjon ("above the fold") må kunne leses på den tiden.

### Tre nivåer per dag

| Nivå | Synlighet | Innhold | Maks lengde |
|------|-----------|---------|-------------|
| **Høydepunkter** | Alltid synlig | 3-5 kulepunkter per dag, én setning hver. Det viktigste å vite/gjøre. | 150-200 ord |
| **Utdyping** | Bak "Les mer" per seksjon | Full beskrivelse av severdigheter, historiske detaljer, restaurantalternativer | 400-800 ord per seksjon |
| **Bonus** | Bak egen fane/toggle eller kun muntlig | Trivia-perler for bilturen, bibliofil-referanser, dyp historie | Ubegrenset |

### Hva som KUTTES helt

- Lydbøker og musikktips (bekreftet av bruker)
- Stedsbeskrivelser for omveier de ikke tar (f.eks. Roskilde hvis de kjører Øresund, Somme-slagmarkene hvis de ikke har tid)
- Doble restaurantanbefalinger (behold maks 2-3 per dag, dropp "backup"-alternativer)
- Generelle reiseblogger-tips som "husk solkrem" eller "drikk vann"

### Prioritert innholdsliste per dag

Tabellen under viser de viktigste tilleggene fra researchen. Kolonnen "Nivå" angir hvor innholdet hører hjemme.

#### Dag 1: Rakkestad → Puttgarden

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Lübeck: Holstentor, Marienkirche-klokkene | Historiker | Utdyping | Utdyper eksisterende sights |
| Fehmarnbelt som kald krig-sone | Historiker | Bonus/trivia | Muntlig for bilturen |

#### Dag 2: Puttgarden → Duisburg/Moers

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Relikvieskrin-historien (Kölnerdomen finnes pga. rov fra Milano) | Historiker | Høydepunkt | Endrer forståelsen av domen totalt |
| Landschaftspark Duisburg-Nord (industri-ruin om kvelden) | Reiseblogger | Utdyping | Praktisk kveldstips |
| Mercator-projeksjonen oppfunnet i Duisburg | Historiker | Bonus/trivia | Morsomt men ikke must |

#### Dag 3: Duisburg → Rouen (via Waterloo)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| **Den norske koblingen til Waterloo** (Wienkongressen → union med Sverige → 17. mai) | Historiker | Høydepunkt | KRITISK. Kobler Waterloo direkte til 17. mai-feiringen dag 5 |
| Blüchers ankomst (72 år, knust, holdt oppe av snaps) | Historiker | Utdyping | Fargerik tilleggsdetalj |
| Rothschild-myten | Historiker | Bonus/trivia | For god til å utelate, men ikke primærinnhold |

#### Dag 4: Rouen (heldag)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Rollos fulle historie (Gange-Rolf, begravet med sverd og kors) | Historiker | Høydepunkt | Utdyper den viktigste tråden i Normandie |
| Richard Lovehjertes hjerte — hvorfor i Rouen ("divisio corporis") | Historiker | Utdyping | Utdyper eksisterende trivia |
| Flaubert/Madame Bovary | Bibliofil | Bonus/trivia | Litterært lag, ikke kritisk |
| Dreyers "Jeanne d'Arcs lidelse og død" (stumfilm) | Bibliofil | Utdyping | Direkte relevant for Jeanne d'Arc-besøket |

#### Dag 5: Rouen → Bayeux + D-dagskysten (17. mai)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Bayeux-tapetets skjulte detaljer (Aelfgyva, Halleys komet, erotiske scener) | Historiker | Høydepunkt | Gjør tapetbesøket 10x mer interessant |
| Arromanches/Mulberry Harbour (Churchills sitat) | Historiker | Høydepunkt | Mangler helt, bør være egen sights-seksjon |
| 17. mai-koblingen: Normandie = "nordmennenes land" | Historiker | Høydepunkt | Perfekt for 17. mai |
| Vilhelm Erobrerens grav i Caen (bare et lårbein igjen) | Historiker | Utdyping | Fantastisk trivia, men krever omvei |
| Pegasus Bridge (glidere i mørket) | Historiker | Utdyping | Sterk historie, men 30 min fra Bayeux |
| Bayeux lørdag = markedsdag | Reiseblogger | Høydepunkt | OBS: 17. mai er søndag, sjekk dato |
| Pointe du Grouin fotostopp | Reiseblogger | Bonus | Kun relevant for foto |

#### Dag 6: Bayeux → Mont Saint-Michel

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Tidevannsfarene — "Skriv testamentet ditt" | Historiker | Høydepunkt | Perfekt tillegg til tidevanns-avsnittet |
| St. Michaels Ley Line (den mystiske linjen) | Historiker | Bonus/trivia | Kontroversiell men fascinerende |
| Tombelaine — øyen engelskmennene beleiret fra | Historiker | Utdyping | Visuell — synlig fra Mont Saint-Michel |

#### Dag 7: Mont Saint-Michel → La Rochelle (via Nantes)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Nantes-ediktet — FULL kontekst (hugenottenes dag) | Historiker | Høydepunkt | KRITISK. Gjør hele dag 7 til en sammenhengende fortelling |
| Hugenottflyktninger til Østfold/Rakkestad | Historiker | Høydepunkt | Lokal kobling for to karer fra Rakkestad |
| Richelieus demning — inspirert av Aleksander den Store | Historiker | Utdyping | Utdyper eksisterende dekning |
| Fougères (Frankrikes største middelalderborg) | Historiker | Utdyping | Rett på ruten, 30-40 min |

#### Dag 8: La Rochelle → San Sebastián (via Bordeaux)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Bordeaux som nødhovedsatad tre ganger (de Gaulle flyktet herfra) | Historiker | Høydepunkt | Endrer forståelsen av Bordeaux |
| Bordeaux-vinens engelske historie (Eleanor av Aquitaine) | Historiker | Utdyping | Hundreårskrig-tråden fullføres |
| Hemingways "Fiesta" / San Sebastián | Bibliofil | Utdyping | Direkte relevant for destinasjonen |

#### Dag 9: San Sebastián (heldag)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Baskisk identitet — ETA-historien | Historiker | Utdyping | Viktig kontekst for byen |
| Pintxo-rute med rekkefølge og timing | Reiseblogger | Høydepunkt | Direkte praktisk verdi |
| La Concha som filminnspillingslokasjon | Bibliofil | Bonus | Trivia |

#### Dag 10: San Sebastián → Carcassonne (via Narbonne)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Katarkorstoget — Béziers-massakren ("Drep dem alle") | Historiker | Høydepunkt | Dramatisk bakgrunn for Carcassonne |
| Narbonne som romersk provinshovedstad | Historiker | Utdyping | Romersk tråd |
| Kate Mosses "Labyrinth" / Carcassonne | Bibliofil | Utdyping | Direkte relevant for besøket |

#### Dag 11: Carcassonne → Avignon (via Pont du Gard)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Nîmes — mangler helt fra nettstedet! | Historiker | Høydepunkt | KRITISK. Maison Carrée er verdens best bevarte romerske tempel |
| Pont du Gard — utdypet ingeniørhistorie | Historiker | Utdyping | Forsterker eksisterende innhold |
| Avignon-pavene — full kontekst (hvorfor paven flyttet) | Historiker | Utdyping | Utdyper eksisterende dekning |

#### Dag 12: Avignon (+ Gordes, Sénanque, Pont du Gard)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Gordes som motstandssenter under WWII | Historiker | Utdyping | Nytt lag på eksisterende sted |
| Sénanque — cistercienserne og terroir-begrepet | Historiker | Utdyping | Kobler til Burgund dag 13 |
| Provence-lys og fotograferingstips (timing) | Reiseblogger | Høydepunkt | Praktisk verdi |

#### Dag 13: Avignon → Dijon (via Lyon)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Lyon som Gallias hovedstad (KLIMAKS for romersk tråd) | Historiker | Høydepunkt | KRITISK. Hele den romerske tråden kulminerer her |
| Canut-opprøret → Marx i Trier (dag 14) | Historiker | Utdyping | Elegant kobling mellom to dager |
| Jean Moulin og motstandsbevegelsen | Historiker | Utdyping | Utdyper Klaus Barbie-avsnittet |
| Burgunds rike — mektigere enn Frankrike | Historiker | Høydepunkt | KRITISK. Gjør Dijon-besøket meningsfylt |
| Karl den Dristige — kropp funnet halvspist av ulver | Historiker | Utdyping | Dramatisk historie |
| Orange: romerskteater med komplett scenevegg | Historiker | Utdyping | 0 min omvei, rett på A7 |

#### Dag 14: Dijon → Trier (via Alsace)

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Alsace identitetskrise / Malgré-nous | Historiker | Høydepunkt | Gjør Alsace-besøket dypere |
| Marx' fødehus — canut-koblingen fra Lyon | Historiker | Utdyping | Kobler dag 13 og 14 |
| Trier som keiserlig hovedstad (Konstantin, Roma i nord) | Historiker | Utdyping | Utdyper eksisterende dekning |
| Velg 2, ikke 4 Alsace-landsbyer | Reiseblogger | Høydepunkt | Praktisk prioritering |

#### Dag 15: Trier → Koblenz

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Mosel-dalen kjørerute | Reiseblogger | Høydepunkt | Praktisk verdi |
| Burg Eltz | Reiseblogger | Høydepunkt | Mangler i nåværende innhold |
| Loreley-legenden og Heine-diktet | Historiker + Bibliofil | Utdyping | Kulturell kontekst |

#### Dag 16: Koblenz → Hamburg

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Hameln/Rottefangeren — Grimm-koblingen | Historiker + Bibliofil | Utdyping | På eller nær ruten |
| Hanseforbundet full sirkel (Lübeck dag 1 → Hamburg dag 16) | Historiker | Høydepunkt | Binder turen sammen |
| Hamburg optimal rute | Reiseblogger | Høydepunkt | Praktisk verdi |

#### Dag 17: Hamburg → Puttgarden

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Lübeck som Hansaens hovedstad (tilbake der de startet) | Historiker | Høydepunkt | Full sirkel |
| Grass' "Blikktrommen" / Lübeck | Bibliofil | Bonus | Litterært lag |

#### Dag 18: Puttgarden → Rakkestad

| Innhold | Kilde | Nivå | Begrunnelse |
|---------|-------|------|-------------|
| Tematisk oppsummering av hele turen | Historiker | Høydepunkt | Avsluttende refleksjon |
| Pinsedag 26. mai — helligdagsvarsel | Reiseblogger | Høydepunkt | KRITISK praktisk info |

### Oppsummert volum

Med denne kurateringen:
- **Høydepunkter**: Ca. 25-30 nye kulepunkter fordelt på 18 dager (1-2 per dag i snitt)
- **Utdypinger**: Ca. 40-50 nye avsnitt bak "les mer"-interaksjon
- **Bonus/trivia**: Ca. 20-30 perler som kan være en egen modus eller muntlig stoff

---

## 2. Informasjonsarkitektur: Hva brukeren ser først

### Nåværende problem

Dagvisningen (`day.js`) rendrer alle seksjoner sekvensielt: hero-bilde → dag-header → seksjon 1 → seksjon 2 → ... → seksjon N. Det finnes ingen visuell hierarki mellom "dette MÅ du vite" og "dette er hyggelig å vite". En dag med 6 seksjoner krever mye scrolling, og alle seksjoner ser identiske ut bortsett fra farge.

### Foreslått ny struktur per dag

```
┌─────────────────────────────────────────────┐
│  HERO-BILDE med gradient + dag-info          │
├─────────────────────────────────────────────┤
│  DAGSSAMMENDRAG (nytt!)                      │
│  • 3-5 kulepunkter: det viktigste i dag      │
│  • Kjøretid, nøkkelsteder, "ikke gå glipp   │
│    av"-punkter                               │
│  Visuelt: Ingen boks. Ren tekst. Litt        │
│  større font. Føles som en intro, ikke en    │
│  seksjon.                                    │
├─────────────────────────────────────────────┤
│  SEKSJONSKORT (visuelt brudd!)               │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ 🏛️ Sever-│ │ 🍽️ Mat  │ │ 📷 Foto │     │
│  │ digheter │ │          │ │          │     │
│  │ 3 steder │ │ 2 rest.  │ │ 4 spots  │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│  Visuelt: Horisontal rad med klikkbare       │
│  ankerpunkter. Gir oversikt FØR scrolling.   │
├─────────────────────────────────────────────┤
│  SEKSJON: Severdigheter                      │
│  [Høydepunkter synlige]                      │
│  [Utdyping bak "Les mer →"]                 │
│  [Booking-callout hvis relevant]             │
├─────────────────────────────────────────────┤
│  TEMATISK TRÅD (nytt!)                       │
│  "Vikinglinjen: Fra Rollo til Vilhelm"       │
│  Kobler denne dagen til dag 3, 5 og 6.      │
│  Visuelt: Annerledes enn standard-seksjon.   │
│  Mørk bakgrunn, ikon, lenker til relaterte   │
│  dager.                                      │
├─────────────────────────────────────────────┤
│  SEKSJON: Historisk trivia                   │
│  [Kompakt versjon synlig]                    │
│  [Ekspanderbare "Visste du at..."-bokser]    │
├─────────────────────────────────────────────┤
│  SEKSJON: Mat & drikke                       │
│  ...                                         │
├─────────────────────────────────────────────┤
│  SEKSJON: Praktisk                           │
│  ...                                         │
├─────────────────────────────────────────────┤
│  SEKSJON: Overnatting                        │
│  ...                                         │
└─────────────────────────────────────────────┘
```

### Viktige endringer fra nåværende design

#### a) Nytt element: Dagssammendrag ("Dagens høydepunkter")

En kort, uformatert tekstblokk rett under hero-bildet. Ikke en fargekant-boks. Ren typografi — litt større font, litt mer luft. Formålet: gi brukeren det viktigste på 15 sekunder.

Eksempel for dag 5:
> **17. mai i Normandie — nordmennenes land.** Bayeux-tapetet er et 70 meter langt broderi fullt av skjulte detaljer (erotiske scener, Halleys komet, et uløst middelalder-mysterium). Ettermiddagen brukes på D-dagskysten: Omaha Beach, American Cemetery og Pointe du Hoc. Arromanches' kunstige havn er en ingeniørbragd verdt et stopp. Feir med cider ved stranden.

#### b) Visuell variasjon: Seksjonskort-rad

En horisontal rad med 3-5 små kort som fungerer som ankerpunkter. Hvert kort viser seksjonstype-ikon, navn og antall elementer. Klikk scroller ned til seksjonen. Bryter "bokser i bokser"-monotonien uten å kreve ny datastruktur.

Implementering: Generer fra eksisterende `sections`-array. Vis som `flex`-rad med `gap-3`. Hvert kort er en `<a href="#section-{type}">` med `scroll-behavior: smooth`.

#### c) Ny seksjonstype: Tematiske tråder

Forskerne har identifisert 6+ tråder som går på tvers av dager:
1. **Vikinglinjen** (dag 1, 4, 5, 6)
2. **Den romerske tråden** (dag 2, 10, 11, 13)
3. **Hundreårskrigen** (dag 5, 6, 7, 8)
4. **Den norske tråden** (dag 1, 3, 5, 7)
5. **Katedraler og ambisjoner** (dag 2, 4, 5, 6)
6. **Hugenottene og religionsfrihet** (dag 7, 10)

Disse bør IKKE rendres som standard seksjoner med fargekant. De er tverrgående og fortjener egen visuell behandling:
- Mørk/invertert bakgrunn (fungerer i både light og dark mode)
- Tidslinje-ikon eller kart-pin-ikon
- Lenker til relaterte dager: "← Dag 3: Waterloo" / "Dag 5: Bayeux →"
- Plasseres mellom seksjoner, ikke øverst eller nederst

#### d) Rekkefølge på seksjoner

Nåværende rekkefølge følger tdf.md slavisk. Foreslått prioritert rekkefølge:

1. **Dagssammendrag** (alltid først)
2. **Severdigheter** (det de skal SE)
3. **Historisk trivia** (kontekst for det de ser)
4. **Mat & drikke** (nest viktigst etter severdigheter)
5. **Foto** (tips for underveis)
6. **Tematisk tråd** (kobling bakover/fremover)
7. **Praktisk** (logistikk)
8. **Overnatting** (boken er gjort, dette er referanse)

Overnatting og praktisk flyttes ned fordi de er referansemateriell — ikke noe man leser for inspirasjon.

#### e) Bibliofil-innhold: Ikke egen seksjon

Bok- og filmreferanser passer IKKE som egne seksjoner. De bør integreres som:
- **Inline-lenker** i historieseksjoner: "Jeanne d'Arc ble brent her i 1431 (se Dreyers stumfilm fra 1928)"
- **Koblinger i tematiske tråder**: "Fordyp deg: Kate Mosses Labyrinth handler om katarene i Carcassonne"
- **Tooltip eller fotnoter** på spesifikke steder: hover/klikk på "Hemingway" → popover med "Fiesta (1926) er satt i San Sebastián og Pamplona"

Begrunnelse: En egen "Bøker og filmer"-seksjon for hver dag ville blitt ignorert. Kontekstuell plassering gjør at referansene oppdages naturlig.

---

## 3. Progressiv avsløring: Interaksjonsdesign

### Nåværende tilstand

Null progressiv avsløring. Alt innhold rendres fullt ut. `renderSection()` i `section.js` tar inn en seksjon og spytter ut hele `content`-feltet. Ingen collapse, ingen expand, ingen filtrering.

### Tre mekanismer å innføre

#### Mekanisme A: "Les mer" per seksjon

**Hva:** Vis de første 2-3 kulepunktene i en seksjon. Resten bak en "Les mer →"-knapp.

**Teknisk:** Seksjonens `content`-felt deles i to: `contentAbove` (alltid synlig) og `contentBelow` (skjult). Alternativt: bruk en `priority`-property per element i innholdet, og vis bare `priority: 1` som default.

Enklere alternativ som ikke krever datastruktur-endring: CSS-basert truncation. Sett `max-height` på `.section-content` med `overflow: hidden`, og vis en gradient-fade + "Les mer"-knapp. Klikk fjerner `max-height`.

```css
.section-content.collapsed {
  max-height: 12rem; /* ca. 3 kulepunkter */
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}
```

**Hvilke seksjoner:** Sights og history (ofte lange). Food og accommodation er korte nok til å vise alt. Foto er kompakt.

**Tommelregel:** Collapse bare seksjoner med mer enn 5 `<li>`-elementer eller mer enn 200 ord.

#### Mekanisme B: "Visste du at..."-ekspanderbokser

**Hva:** Trivia-perler presentert som kompakte, klikkbare bokser som ekspanderer. Visuelt distinkt fra standard seksjoner — mer som en "fun fact"-boks du finner i en reiseguide.

**Visuelt:**
```
┌─ 🧠 Visste du at... ──────────────────────┐
│ Bayeux-tapetet inneholder en uløst         │
│ middelalder-gåte om "Aelfgyva"         [+] │
└────────────────────────────────────────────┘
```
Klikk ekspanderer:
```
┌─ 🧠 Visste du at... ──────────────────────┐
│ Bayeux-tapetet inneholder en uløst         │
│ middelalder-gåte om "Aelfgyva"         [-] │
│                                            │
│ I nedre border av tapetet finnes en scene  │
│ der en geistlig tar på en kvinne kalt      │
│ "Aelfgyva". Ingen vet hvem hun er eller    │
│ hva scenen betyr. Det er middelalderens    │
│ største uløste mysterium innen kunst-      │
│ historie. I tillegg inneholder tapetet     │
│ avbildningen av Halleys komet...           │
└────────────────────────────────────────────┘
```

**Teknisk:** Ny seksjonstype `trivia` med eget visuelt uttrykk i `section.js`. Rendres med `<details>/<summary>` for tilgjengelighet, stylet med Tailwind.

**Plassering:** Inni eller rett etter `history`-seksjoner. Ikke som egne seksjoner i seksjonslisten.

#### Mekanisme C: Interessefiltrering (enkel variant)

**Hva:** En toppbar med toggle-knapper: "Alt" | "Severdigheter" | "Historie" | "Mat" | "Foto" | "Praktisk". Klikk på en filtrerer vekk de andre seksjonstypene.

**Teknisk:** Ren CSS-klasse-toggling. Legg `data-section-type="history"` på hver seksjon-div. Filteret legger en klasse på containeren som skjuler alle som ikke matcher.

```css
.filter-history .section-sights,
.filter-history .section-photo,
.filter-history .section-food,
.filter-history .section-accommodation,
.filter-history .section-practical { display: none; }
```

**Plasering:** Under dagssammendraget, over seksjonskort-raden. Bare synlig på dager med 4+ seksjoner.

**Viktig:** "Alt" er default. Filteret huskes IKKE mellom dager — hver dag starter med "Alt" aktiv. localStorage er overkill her.

### Prioritering av mekanismer

1. **"Les mer" per seksjon** — lav innsats, høy effekt. Gjør først.
2. **"Visste du at"-bokser** — middels innsats, gir visuell variasjon. Gjør som del av innholdsmigrering.
3. **Interessefiltrering** — middels innsats, men nyttig bare hvis det er 5+ seksjoner per dag. Gjør sist.

---

## 4. Datastruktur: Utvidelser av days.js

### Nåværende struktur (forenklet)

```js
{
  day: 5,
  date: "17. mai",
  weekday: "Søndag",
  from: "Rouen",
  to: "Bayeux",
  km: 220,
  subtitle: "🇳🇴 Gratulerer med dagen!",
  coords: { lat: 49.28, lng: -0.70 },
  stops: [...],
  sections: [
    { type: "sights", title: "...", content: `<ul>...</ul>` },
    { type: "history", title: "...", content: `<ul>...</ul>` },
  ]
}
```

### Foreslåtte utvidelser

#### a) Nytt toppnivå-felt: `highlights`

```js
{
  day: 5,
  // ... eksisterende felter ...
  highlights: [
    "Bayeux-tapetet er fullt av skjulte detaljer — erotiske scener, Halleys komet og et uløst middelalder-mysterium",
    "Arromanches: Kunstig havn slept over Kanalen — Churchills ingeniørbragd",
    "D-dagskysten: Omaha Beach, American Cemetery, Pointe du Hoc",
    "17. mai i Normandie — nordmennenes land"
  ],
  sections: [...]
}
```

Ren tekst-array. Rendres som dagssammendraget. Ingen HTML, ingen markup — bare setninger.

#### b) Utvidelse av seksjon-objekter: `expanded`-felt

```js
{
  type: "sights",
  title: "Bayeux sentrum",
  content: `<ul>...de 3 viktigste punktene...</ul>`,
  expanded: `<ul>...ekstra detaljer, utdypinger...</ul>`,
  bookingWarning: null,
}
```

`content` er alltid synlig. `expanded` vises bak "Les mer". Hvis `expanded` er `null` eller fraværende, vises ingen "Les mer"-knapp. Bakoverkompatibelt — eksisterende seksjoner uten `expanded` fungerer som før.

#### c) Ny seksjonstype: `trivia`

```js
{
  type: "trivia",
  title: "Aelfgyva-mysteriet",
  teaser: "Bayeux-tapetet inneholder en uløst middelalder-gåte",
  content: `<p>I nedre border av tapetet finnes en scene...</p>`,
}
```

Rendres som ekspanderbar "Visste du at"-boks. `teaser` er alltid synlig, `content` bak expand.

#### d) Ny datatype: `threads` (tematiske tråder)

Lagres i `meta.js` eller en ny fil `threads.js`:

```js
export const threads = [
  {
    id: "viking",
    title: "Vikinglinjen",
    icon: "⚔️",
    color: "indigo",
    days: [1, 4, 5, 6],
    descriptions: {
      1: "Avreise fra Skandinavia — vikingenes hjemland",
      4: "Rollo grunnla Normandie i 911",
      5: "Bayeux-tapetet forteller Vilhelm Erobrerens historie",
      6: "Mont Saint-Michel — normannernes festningsverk",
    }
  },
  {
    id: "roman",
    title: "Den romerske tråden",
    icon: "🏛️",
    color: "amber",
    days: [2, 10, 11, 13],
    descriptions: {
      2: "Köln = Colonia Agrippina",
      10: "Narbonne = Narbo Martius, første romerske provins utenfor Italia",
      11: "Pont du Gard og Nîmes — romersk ingeniørkunst",
      13: "Lyon = Lugdunum, Gallias hovedstad",
    }
  },
  // ...
]
```

`section.js` (eller en ny `thread.js`-renderer) bruker dette til å rendre tråd-bokser på de relevante dagene, med lenker til forrige/neste dag i tråden.

#### e) Utvidelse av seksjon-objekter: `references` (bibliofil-innhold)

```js
{
  type: "history",
  title: "Jeanne d'Arc i Rouen",
  content: `...`,
  references: [
    { type: "film", title: "Jeanne d'Arcs lidelse og død", creator: "Carl Th. Dreyer", year: 1928, note: "Stumfilm. Regnes som et av filmhistoriens mesterverk." },
    { type: "book", title: "Jeanne d'Arc: En biografi", creator: "Helen Castor", year: 2015 },
  ]
}
```

Rendres som diskrete pill-tags eller footnotes nederst i seksjonen:
```
📚 Dreyer: Jeanne d'Arcs lidelse og død (1928) · 📖 Castor: Jeanne d'Arc (2015)
```

Klikk på en referanse åpner en popover med `note`-feltet.

#### f) Komplett eksempel: Dag 5 med nye felter

```js
export const day5 = {
  day: 5,
  date: "17. mai",
  weekday: "Søndag",
  from: "Rouen",
  to: "Bayeux",
  km: 220,
  nights: 1,
  subtitle: "🇳🇴 Gratulerer med dagen!",
  coords: { lat: 49.28, lng: -0.70 },
  stops: [
    { name: "Arromanches", lat: 49.34, lng: -0.62, type: "sight" },
    { name: "Omaha Beach", lat: 49.37, lng: -0.87, type: "sight" },
    { name: "Pointe du Hoc", lat: 49.40, lng: -0.99, type: "sight" },
  ],
  highlights: [
    "17. mai i «nordmennenes land» — Normandie ble grunnlagt av norske vikinger",
    "Bayeux-tapetets skjulte detaljer: Halleys komet, erotiske scener og et uløst middelalder-mysterium",
    "Arromanches: Kunstig havn slept over Kanalen — se betongrester i havet",
    "D-dagskysten: Omaha Beach, American Cemetery (korsene «ser» mot Amerika) og Pointe du Hoc"
  ],
  sections: [
    {
      type: "sights",
      title: "Bayeux sentrum",
      content: `<ul>
        <li><strong>Bayeux-tapetet</strong>: 70 meter langt broderi fra ca. 1070...</li>
        <li><strong>Cathédrale Notre-Dame</strong>: Gotisk/romansk krypt fra 1000-tallet.</li>
        <li><strong>Museum of the Battle of Normandy</strong>: Grundig D-dags-museum.</li>
      </ul>`,
      expanded: `<ul>
        <li><strong>TIGER-tanken</strong>: Sjelden overlevende ved museet.</li>
        <li><strong>Bayeux britisk krigskirkegård</strong>: 4648 graver.</li>
      </ul>`,
    },
    {
      type: "sights",
      title: "Arromanches — Mulberry Harbour",
      content: `<ul>
        <li><strong>Kunstig havn</strong>: De allierte slept 400+ betongelementer over Kanalen...</li>
      </ul>`,
    },
    {
      type: "trivia",
      title: "Aelfgyva-mysteriet",
      teaser: "Bayeux-tapetet skjuler middelalderens største uløste gåte",
      content: `<p>I nedre border av tapetet finnes en scene der en geistlig tar på en kvinne kalt «Aelfgyva»...</p>`,
    },
    {
      type: "history",
      title: "D-dagen og Normandie",
      content: `<ul>
        <li><strong>Omaha Beach</strong>: Kodenavn. De fem strendene ble oppkalt...</li>
        <li><strong>Pointe du Hoc</strong>: 225 Rangers klatret 30 meter høye klipper...</li>
        <li><strong>American Cemetery</strong>: Alle korsene ser vestover mot Amerika...</li>
      </ul>`,
      expanded: `<ul>
        <li><strong>Været nesten stoppet D-dagen</strong>: Eisenhower utsatte med én dag...</li>
        <li><strong>Pegasus Bridge</strong>: Første frigjorte franske jord, 00:16 6. juni...</li>
      </ul>`,
      references: [
        { type: "film", title: "Saving Private Ryan", creator: "Steven Spielberg", year: 1998, note: "Åpningsscenen er filmet på Curracloe Beach i Irland, men gjenskaper Omaha Beach." },
        { type: "series", title: "Band of Brothers", creator: "HBO", year: 2001, note: "Følger Easy Company fra trening til D-dagen og videre." },
      ]
    },
    // ... food, accommodation, photo som før
  ]
}
```

### Bakoverkompatibilitet

Alle nye felter er valgfrie:
- `highlights`: Hvis fraværende, vises ikke dagssammendrag
- `expanded`: Hvis fraværende, vises ingen "Les mer"
- `trivia`-seksjoner: Rendres av `section.js` som ny type
- `references`: Hvis fraværende, ingen referanse-tags
- `threads`: Ekstern data i `meta.js`/`threads.js`, kobles i rendering

Eksisterende dager fungerer uendret. Nye felter legges til gradvis dag for dag.

---

## 5. Navigasjon og oppdagelse

### Nåværende navigasjon

- Desktop: Fast sidebar med dagsliste (Dag 1-18) + Reiseinfo + Topp 10
- Mobil: Dropdown `<select>` med alle dager
- Ingen kryssnavigasjon mellom temaer
- Ingen måte å finne "alle historiske høydepunkter" eller "de beste restaurantene"

### Foreslåtte forbedringer

#### a) Tematiske tråder i sidebar (desktop)

Under dagslisten, legg til en seksjon "Tematiske tråder":

```
ℹ️ Reiseinfo
───────────
Dag 1 – Puttgarden
Dag 2 – Köln
...
───────────
⚔️ Vikinglinjen
🏛️ Romerske spor
⛪ Katedraler
🇳🇴 Den norske tråden
───────────
🏆 Topp 10
```

Klikk på en tråd åpner en enkel tidslinje-visning med de relevante dagene og deres tråd-beskrivelse, med lenker til dagene.

#### b) "Se også"-lenker mellom dager

Når en dag er del av en tematisk tråd, vis diskrete lenker nederst i den relevante seksjonen:

```
⚔️ Vikinglinjen: ← Dag 4: Rollo i Rouen | Dag 6: Mont Saint-Michel →
```

Implementeres med `threads`-data. Ikke nye DOM-elementer — bare en liten tekst-rad under seksjonen som er relevant.

#### c) Forbedret Topp 10-side

Nåværende Topp 10 har tre lister (historie, foto, mat). Utvid med:
- **Topp 5 trivia-perler** (de beste "visste du at"-punktene)
- **Tematiske tråder** (visuell tidslinje)
- **Booking-sjekkliste** (samlet oversikt over alt som bør forhåndsbestilles)

#### d) Mobilnavigasjon: Sveip mellom seksjoner

Nåværende sveip navigerer mellom dager. Legg til vertikal sveip-indikator som viser hvilken seksjon brukeren er i (dots/prikker langs høyre kant), slik at det er tydelig at det er mer innhold under.

#### e) "Neste dag"-preview

Nederst på hver dagvisning, vis en kort preview av neste dag:

```
┌─────────────────────────────────────────────┐
│  I morgen: Dag 6 → Mont Saint-Michel        │
│  130 km · Kort kjøring til et av verdens    │
│  mest ikoniske steder                        │
│  [Se dag 6 →]                               │
└─────────────────────────────────────────────┘
```

Skaper forventning og flow. Erstatter den nåværende tørre "Dag 6: Mont Saint-Michel →"-lenken.

---

## 6. Implementeringsrekkefølge

Foreslått rekkefølge basert på effekt vs. innsats:

### Fase 1: Innhold først (kan gjøres uten kodeendringer)

1. Legg til `highlights`-array i `dayN.js` for alle 18 dager
2. Legg de viktigste MUST-ADD-punktene fra kurasjonslisten inn i eksisterende seksjoner
3. Oppdater `meta.js` med tematiske tråder

### Fase 2: Visuelt brudd

4. Implementer dagssammendrag-rendering i `day.js` (bruker `highlights`)
5. Implementer "Les mer" med CSS-basert collapse i `section.js`
6. Legg til seksjonskort-rad over seksjonene

### Fase 3: Nye elementer

7. Implementer `trivia`-seksjonstype i `section.js`
8. Implementer tematisk tråd-rendering
9. Legg til `expanded`-felt i seksjonene som trenger det
10. Flytt innhold fra `content` til `expanded` der det gir mening

### Fase 4: Navigasjon

11. Legg til tråd-lenker i sidebar
12. Implementer "Se også"-lenker mellom dager
13. Legg til "Neste dag"-preview
14. Eventuelt: interessefiltrering

### Estimat

- Fase 1: Kun innholdsarbeid, ingen kode. 2-3 timer.
- Fase 2: Små endringer i `day.js` og `section.js`. 1-2 timer.
- Fase 3: Nye rendere i `section.js` + ny CSS. 2-3 timer.
- Fase 4: Endringer i `sidebar.js` + `day.js`. 2-3 timer.

Totalt: 7-11 timer kodetid + innholdskurasjon.

---

## 7. Oppsummering av anbefalinger

| Problem | Løsning | Prioritet |
|---------|---------|-----------|
| For mye innhold, alt like synlig | Tre-nivå kurasjon: highlights → utdyping → bonus | HØYEST |
| "Bokser i bokser" | Dagssammendrag + seksjonskort-rad + trivia-bokser | HØY |
| Ingen progressiv avsløring | CSS-basert "Les mer" + `<details>`-baserte trivia | HØY |
| Ingen tverrgående tråder | `threads`-data + visuelt distinkt tråd-rendering | MIDDELS |
| Bibliofil-innhold har ingen plass | `references`-felt med pill-tags/popovers | MIDDELS |
| Monoton navigasjon | Tråder i sidebar + "Se også"-lenker + neste dag-preview | LAV |
| Rekkefølge på seksjoner er tilfeldig | Prioritert rekkefølge: sights → history → food → foto → praktisk → overnatting | LAV |

Viktigst av alt: **Ikke alt trenger å være på nettstedet.** De beste trivia-perlene fra "TRIVIA-PERLER"-kategorien i kurasjonslisten fungerer best muntlig i bilen. Nettstedet skal gi et raskt overblikk kvelden før og være en oppslagsbok underveis — ikke en reiseguide på 200 sider.
