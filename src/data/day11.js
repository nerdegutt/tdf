// DAG 11
export const day11 = {
  day: 11,
  date: "23. mai",
  weekday: "Lørdag",
  from: "Carcassonne",
  to: "Avignon",
  km: 241,
  hours: 2.5,
  nights: 2,
  subtitle: "Romersk teknologi og pavebyen",
  description: "Carcassonne til Avignon via Pont du Gard og Nîmes — pavebyen med Europas største gotiske palass, komplett bevarte bymurer og porten til Provence.",
  intro: "Avignon er pavebyens by — i 67 år (1309–1377) regjerte pavene herfra i stedet for Roma, og Europas største gotiske palass troner fortsatt over de komplett bevarte bymurene. Byen har 92 000 innbyggere, et pulserende sentrum innenfor murene, og er porten til Provence med Rhône-viner, lavendel og lys som har inspirert kunstnere i århundrer.",
  coords: { lat: 43.95, lng: 4.81 },
  stops: [
    { name: "Nîmes", lat: 43.84, lng: 4.36, type: "city" },
    { name: "Pont du Gard", lat: 43.95, lng: 4.54, type: "sight" },
  ],
  trivia: [
    "Pont du Gard: 50 000 tonn stein, 49 meter høy, tre nivåer, INGEN mørtel — og etter 2000 år står den fortsatt.",
    "Nîmes ga navn til «denim»-stoff: «de Nîmes» ble forkortet til «denim». Verdens mest brukte klesplagg har sitt opphav i denne byen.",
    "Pavene havnet i Avignon fordi Filip den Smukke presset så hardt at paven aldri turde sette foten i Roma — byen var for farlig.",
  ],
  sections: [
    {
      type: "sights",
      title: "Stopp: Pont du Gard (30 min vest for Avignon)",
      highlight: true,
      summary: "Verdens best bevarte romerske akvedukt — 49 meter høy, bygget uten mørtel, og stående etter 2000 år.",
      bookingWarning: "Parkering bør bestilles i høysesong.",
      bookingUrl: "https://www.pontdugard.fr/",
      references: [
        { type: "book", title: "Lettres de mon moulin", author: "Alphonse Daudet", relevance: "Klassiske fortellinger fra Provence — landskapet rundt Pont du Gard og Nîmes er Daudets verden." },
      ],
      content: `<ul>
<li><strong>Romersk akvedukt fra ca. år 50 e.Kr.</strong> UNESCO. 49 meter høy, tre nivåer. Ca. 50 000 tonn stein.</li>
<li>Bygget for å føre vann 50 km fra Uzès til Nîmes. <strong>Helt uten mørtel – steinene er bare stablet!</strong></li>
<li>2000 år gammel og fortsatt stående. Museum på stedet. Regn 2–3 timer.</li>
<li><strong>Tips</strong>: Ankom før kl. 10 for å unngå bussgruppene og varmen — kalksteinen lyser fortsatt gyllent i lørdagsformiddagen, og Gardon-elven er roligst før det blir trafikk.</li>
</ul>`
    },
    {
      type: "sights",
      title: "Anbefalt stopp: Nîmes (15 min fra Pont du Gard)",
      highlight: true,
      summary: "Frankrikes best bevarte romerske by — med verdens mest intakte amfiteater og det best bevarte romerske tempelet. Pont du Gard ble bygget for å føre vann HIT.",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Les Arènes</strong> (amfiteateret, ca. 70 e.Kr.): Det best bevarte i verden — bedre enn Colosseum. Brukes FORTSATT til tyrefekting og konserter. <a href="https://www.arenes-nimes.com/" target="_blank" rel="noopener">arenes-nimes.com</a></li>
<li><strong>Maison Carrée</strong>: Det best bevarte romerske tempelet i verden — alle søyler intakt. Bygget ca. 2 e.Kr. som hyllest til keiser Augustus' barnebarn. UNESCO.</li>
<li><strong>Musée de la Romanité</strong> (åpnet 2018): Moderne museum som kontekstualiserer all romersk historie i regionen.</li>
<li>💡 Pont du Gard ble bygget for å føre vann til NÎMES — det er selve destinasjonen for akvedukten dere nettopp besøkte. Å se Pont du Gard uten å se Nîmes er som å se en motorvei uten å besøke byen den leder til.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Akvedukten den var del av førte vann <strong>50 km</strong> fra Uzès til Nîmes, med et fall på bare <strong>17 meter</strong> over hele strekningen – det er en gradient på 34 cm per kilometer. Romersk ingeniørkunst på sitt ypperste.</li>
<li>I middelalderen ble Pont du Gard brukt som <strong>bro for fotgjengere og kjøretøy</strong>. Steinene på den andre etasjen er slitt av hundrevis av år med trafikk.</li>
<li>Det er fortsatt synlige <strong>numre og merker</strong> hugget inn i steinene av de romerske arbeiderne – antakelig for å holde styr på hvilke steiner som skulle hvor under byggingen. Et slags 2000 år gammelt IKEA-system.</li>
<li><strong>Den menneskelige historien</strong>: Pont du Gard ble bygget av 800–1000 arbeidere over ca. 5 år. De fleste var trolig ikke slaver, men spesialiserte steinarbeidere. Hele akvedukten leverte ca. 20 000 kubikkmeter vann PER DAG til Nîmes — nok til termalbad, fontener og drikkevann for 50 000 innbyggere.</li>
<li><strong>Gesell-graffiti</strong>: Pont du Gard har innskrifter fra 1600–1800-tallet risset inn av geseller (<em>compagnons du devoir</em>) som reiste rundt i Frankrike som del av sin utdanning — en tradisjon som fortsatt eksisterer.</li>
<li><strong>Pavene i Avignon — hvorfor de kom</strong>: Filip IV av Frankrike (Filip den Smukke) presset paven så hardt at han fikk valgt en franskmann, Klemens V, i 1305. Klemens turde aldri sette fot i Roma — byen var for farlig med adelsklaner som kriget i gatene. Syv franske paver på rad (1305–1378) bygde det enorme palasset og gjorde Avignon til kristenhetens rikeste by.</li>
<li><strong>Petrarcas «nye Babylon»</strong>: Petrarca, som bodde i Avignon, kalte byen full av «horer, simoni og korrupsjon». Paradokset: Pavene i Avignon var trolig mer effektive administratorer enn de i Roma, men fordi de var franske, ble de sett som marionetter.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Fra elvebredden nedenfra: Akvedukten speilet i Gardon-elven. Morgen best. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+reflection+gardon+river+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Fra stien på høyre bredd: Alle tre nivåer synlige. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+three+levels+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Nærbilder av steinene uten mørtel – fascinerende teksturer. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+stone+detail+close+up" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Avignon (2 netter: 23.–24. mai)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://en.hotel-magnan.com/" target="_blank" rel="noopener">Hôtel Le Magnan</a></strong> – Intra-muros, sjarmerende patio. Parkering 14–15 EUR/dag (offentlig koster 28–35!). <em>Ca. 59–89 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hoteldegarlande.com/en/" target="_blank" rel="noopener">Hôtel de Garlande</a></strong> – 1700-talls boutique i bilfri sone, 14 rom. 8.9/10. "Et av våre favoritthoteller i Europa." Vanskelig bilparkering. <em>Ca. 90–130 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotel-mignon.com/en_gb/" target="_blank" rel="noopener">Hôtel Mignon</a></strong> – Bygning fra 1300-tallet, 16 rom, nær Pont d'Avignon. Små rom og bad. <em>Ca. 75–110 EUR/rom/natt.</em></li>
</ul>
<p>🅿️ Le Magnan: parkering til halv pris av offentlig – det opplagte valget med bil!</p>`
    },
    {
      type: "food",
      title: "Middag i Avignon (kveld 1)",
      bookingWarning: "Fou de Fafa: Kun 10 bord – reserver!",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.restaurantfoudefafa.com" target="_blank" rel="noopener">Fou de Fafa</a></strong> – Intim bistro, kun 10 bord! Alt hjemmelaget. Anka med bringebærsaus, svinekjøtt med ratatouille. 3-retters 43 EUR. 4.7–4.8/5. <strong>Reserver!</strong> <em>Ca. 40–50 EUR/pers.</em></li>
<li><strong><a href="http://www.restaurant-agape-avignon.com/fr/" target="_blank" rel="noopener">L'Agape</a></strong> – Bib Gourmand. Terrasse på sjarmerende plass med platantrær. Kreativ men jordnær. <em>Ca. 35–50 EUR/pers.</em></li>
<li><strong>Avenio</strong> – Vinbar og bistro i sentrum. Lokale Rhône-viner, tapas og franske småretter. Populær blant lokale. Place des Corps Saints. <em>Ca. 20–35 EUR/pers.</em></li>
</ul>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Frankrike (Provence)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> til alle dere møter. Etter 18:00: «Bonsoir». «Au revoir» når dere går. I Provence går det ofte med et solid håndtrykk i tillegg.</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. «L'addition, s'il vous plaît» — regningen kommer ikke uoppfordret.</li>
<li><strong>Tipsing</strong>: Service er inkludert. 1–5 EUR ekstra eller bare runde opp.</li>
<li><strong>Provence — pastis og lange lunsjer</strong>: <strong>Pastis</strong> (anisaperitiff) er signaturen. Bestill «un pastis» eller «un Ricard» — serveres med vannmugge og is, du blander selv etter smak (ca. 1:5). Lange lunsjer (12:00–14:30) er normen, og mange butikker stenger 13:00–15:00 i hetten.</li>
<li><strong>Provençalsk varme</strong>: Sørfranskmenn er mer overbærende med fransk-feil og generelt litt mer prateete enn pariserne. Aksent er bløtere og mer syngende.</li>
<li><strong>Mat</strong>: Bouillabaisse (fiskestue), tapenade (oliven-pasta), ratatouille — Rhône-vin (Châteauneuf-du-Pape, Côtes-du-Rhône) er regionens stolthet.</li>
<li><strong>Engelsk</strong>: Variabelt. I Avignon sentrum (turistby): bra. På landet: dårligere.</li>
<li><strong>Fransk-forsøk</strong>: «Merci beaucoup» med solid sørfransk varme får et stort smil. Provençalere er mer tilgivelige enn pariserne.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:00, middag 19:30–22:00. Lørdag kveld: bra åpent.</li>
</ul>`
    },
    {
      type: "gem",
      title: "Rue des Teinturiers — Avignons bohemkvarter",
      content: `<p>En brosteinsgate langs en kanal (Sorgue) med gamle vannhjul som fortsatt dreier. Platantrær, bohemske barer og kaféer, og restene av et gammelt kloster. Mens alle er på Place de l'Horloge og Pavepalasset, sitter Avignon-boerne her og drikker pastis. Den mest sjarmerende gaten i hele byen — og nesten ingen turister finner den. Fra Place des Corps-Saints, gå sørover. Gaten er ca. 500 meter lang.</p>`,
      detour: "I sentrum",
      duration: "30 min",
      cost: "Gratis",
    },
    {
      type: "practical",
      title: "Lørdag 23. mai — tidslinje",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Avreise Carcassonne ca. kl. 07:30</strong>: ca. 2 t på A61/A9 til Pont du Gard. Stikk innom et bakeri i nedre by for croissant og kaffe før dere ruller.</li>
<li><strong>Pont du Gard kl. 09:30–12:00</strong>: Tidlig nok til å unngå de største bussgruppene (de kommer 10:30–12:00) og varmen midt på dagen. Book parkering på forhånd (pontdugard.fr, ca. 18 EUR for bil + 2 pers). Regn 2–2,5 timer.</li>
<li><strong>Nîmes kl. 12:30–15:00</strong>: 15 min fra Pont du Gard. Lunsj i sentrum, deretter Les Arènes + Maison Carrée (1–1,5 time).</li>
<li><strong>Avignon kl. 16:00</strong>: 45 min fra Nîmes. Sjekk inn, utforsk bymurene og Rue des Teinturiers før middag.</li>
</ul>`
    },
  ],
};
