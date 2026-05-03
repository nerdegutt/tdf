// DAG 12
export const day12 = {
  day: 12,
  date: "24. mai",
  weekday: "Søndag",
  from: "Avignon",
  to: "Gordes/Luberon (dagstur)",
  km: 94,
  hours: 2,
  nights: 0,
  subtitle: "Avignon + Gordes/Luberon",
  intro: "Dag to i Avignon, med dagstur til Luberon — Provences mest maleriske hjørne. Gordes er ofte kalt Frankrikes vakreste landsby, Sénanque-abbediet er et levende cisterciensermunkesamfunn fra 1148, og Roussillon er en landsby bygget på klipper av ren oker i rødt, oransje og gult. Tilbake i Avignon venter Pavepalasset og broen fra barnesangen.",
  coords: { lat: 43.95, lng: 4.81 },
  stops: [
    { name: "Gordes", lat: 43.91, lng: 5.20, type: "sight" },
    { name: "Roussillon", lat: 43.90, lng: 5.29, type: "sight" },
  ],
  trivia: [
    "Cistercienserne ved Sénanque «oppfant» terroir-begrepet — deres systematiske vinproduksjon la grunnlaget for hele den franske vinkulturen.",
    "Samuel Beckett gjemte seg i Roussillon under WWII og plukket druer for å skjule sin identitet — okerklippen dukker opp i «Mens vi venter på Godot».",
    "Châteauneuf-du-Pape-vinene ble de første i Frankrike med formell kvalitetsbetegnelse (1936) — modellen EU kopierte med sitt PDO-system.",
  ],
  sections: [
    {
      type: "sights",
      title: "Avignon",
      highlight: true,
      summary: "Europas største gotiske palass, broen fra barnesangen, og byen der pavene regjerte i 67 år — med to (tidvis tre!) paver samtidig.",
      bookingWarning: "Palais des Papes – alltid populært!",
      bookingUrl: "https://www.palais-des-papes.com/",
      references: [
        { type: "book", title: "A Year in Provence", author: "Peter Mayle", relevance: "Mayle bodde i Luberon-området dere besøker — hans skildringer av markedene, vinbøndene og landsbylivet er dagsturen i bokform." },
        { type: "film", title: "A Good Year", year: 2006, relevance: "Filmet i Provence-vinmarkene rundt Gordes og Bonnieux — landskapet i filmen er det samme dere kjører gjennom." },
      ],
      content: `<ul>
<li><strong>Palais des Papes</strong> (Pavepalasset): Europas største gotiske palass. Pavelig residens 1309–1377. UNESCO. Regn 2 timer. NB: Palasset er nesten TOMT — plyndret under revolusjonen og brukt som kaserne av Napoleon. Men de enorme, nakne hallene gir en kraftigere opplevelse enn forventet. Grand Tinel (festsalen) er 48 meter lang.</li>
<li><strong>Pont Saint-Bénézet</strong> («Pont d'Avignon»): Broen fra barnesangen. Bygget 1177, 4 av 22 buer igjen. Barnesangen handler egentlig om å danse UNDER broen — på Île de la Barthelasse der det var vertshus og danselokaler.</li>
<li><strong>Rocher des Doms</strong>: Park på klippen, panorama mot Mont Ventoux og Alpene.</li>
<li><strong>Bymurene</strong>: Komplett bevarte fra 1300-tallet. 5 km lange.</li>
<li><a href="https://www.avignon-tourisme.com/" target="_blank" rel="noopener">avignon-tourisme.com</a></li>
</ul>`
    },
    {
      type: "sights",
      title: "Dagstur: Gordes & Luberon – Anbefales sterkt!",
      highlight: true,
      summary: "Frankrikes vakreste landsby, et levende cistercienserabdedi, og en landsby i rødt, oransje og gult midt på eker-klipper.",
      bookingWarning: "Sénanque-abbediet har begrenset kapasitet.",
      bookingUrl: "https://www.senanque.fr/",
      references: [
        { type: "film", title: "Le Hussard sur le toit", year: 1995, relevance: "Filmet i Gordes-området — de provençalske steinlandsbyene i filmen er de samme dere besøker i dag." },
        { type: "film", title: "Jean de Florette", year: 1986, relevance: "Ikonisk Provence-film om vann og rural maktkamp — fanger essensen av Luberon-landskapet dere kjører gjennom." },
      ],
      content: `<ul>
<li><strong>Gordes</strong>: Ofte kalt Frankrikes vakreste landsby. Steinbygninger langs bratt åsside med borg på toppen. Tips: Gordes er best UTENFRA — stopp ved Point de Vue på D15 for morgenlys-foto (østvendt åsside). Innsiden er turistifisert. 30–40 min er nok.</li>
<li><strong>Sénanque-abbediet</strong> (5 min fra Gordes): Cistercienserabdedi fra 1148. Fortsatt i drift — munker lever her etter Benedikts regel og dyrker lavendel. NB: Lavendelen er IKKE i blomst i mai (tidligst slutten av juni), men uten lilla turister er det nesten tomt — dere får abbediet for dere selv!</li>
<li><strong>Roussillon</strong> (15 min fra Gordes): Landsby på okerfargede klipper. Byen er i rødt, oransje og gult. Helt unikt. «Le Sentier des Ocres» (Okerstien, ca. 3 EUR) er en vandring gjennom okerklippene — som å gå på Mars. Best i ettermiddagslys etter kl. 16:00. OBS: Okerjord flekker klær!</li>
<li><a href="https://www.gordes-village.com/" target="_blank" rel="noopener">gordes-village.com</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Det store skismaet i vest</strong>: Da paven flyttet til Avignon i 1309 (det «babylonske fangenskapet»), startet en 67 år lang periode med franske paver i Avignon. Da paven endelig returnerte til Roma i 1377, valgte franskmennene sin <em>egen</em> pave – og plutselig hadde kristenheten <strong>to paver samtidig</strong> (tidvis tre!). Skismaet varte til 1417.</li>
<li><strong>Pont d'Avignon</strong> (Pont Saint-Bénézet) ble ifølge legenden bygget av gjeteren Bénézet etter en guddommelig befaling. For å bevise at han var utvalgt, løftet han angivelig en enorm stein alene og la den som brofundament. Barnesangen «Sur le pont d'Avignon» handler egentlig om å danse <strong>under</strong> broen (sous le pont), ikke på den.</li>
<li><strong>Oker-gruvene i Roussillon</strong> har vært i bruk siden romertiden. Oker fra Roussillon ble brukt til å farge alt fra tekstiler til veggmalerier over hele Europa. Fargene i klippene spenner fra blodrødt til lysegult, avhengig av jernoksidinnholdet.</li>
<li><strong>Châteauneuf-du-Pape</strong> (20 min fra Avignon) betyr bokstavelig «Pavens nye slott» – pavene i Avignon bygde sommerresidensen sin her og plantet vingårdene som startet vintradisjonen. I 1954 vedtok kommunen en lov som <strong>forbyr UFOer å lande</strong> i vinmarkene. Loven står fortsatt.</li>
<li><strong>Gordes under WWII</strong>: Landsbyen var et viktig senter for den franske motstandsbevegelsen. I august 1944 ble den angrepet av tyske tropper som hevn — flere hus ble brent og sivile drept.</li>
<li><strong>Sénanque og terroir-begrepet</strong>: Cistercienserne (grunnlagt i Cîteaux, Burgund, 1098) var middelalderens reformbevegelse — radikal enkelhet som reaksjon mot benediktinernes rikdom. Sénanque er et av «de tre søstrene i Provence». Munkenes systematiske vinproduksjon la grunnlaget for terroir-begrepet som hele den franske vinkulturen hviler på.</li>
<li><strong>Villeneuve-lès-Avignon</strong> (andre siden av Rhône): Bygget av den franske kongen som MOTFESTNING til pavens Avignon. Fort Saint-André ble reist av Filip den Smukke for å markere at kongen holdt øye med paven. DEN BESTE utsikten over Avignon — hele skyline med Pavepalasset, broen og bymurene.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Gordes fra «Point de Vue» på D15-veien</strong>: Hele landsbyen på åssiden. Et av Frankrikes mest fotograferte motiver. 📸 <a href="https://www.google.com/search?tbm=isch&q=gordes+village+point+de+vue+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Sénanque med lavendelrekker – ikonisk Provence-motiv. <a href="https://www.google.com/search?tbm=isch&q=abbaye+de+senanque+lavender+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Roussillon i ettermiddagslys: Okerklippene gjør alt magisk. <a href="https://www.google.com/search?tbm=isch&q=roussillon+provence+ochre+village+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Pavepalasset fra broen og fra Villeneuve-lès-Avignon (andre siden). <a href="https://www.google.com/search?tbm=isch&q=palais+des+papes+avignon+pont+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li><strong>Fort Saint-André, Villeneuve</strong>: DEN beste utsikten over Avignon, spesielt ved solnedgang (ca. 21:00 i mai). 10 min kjøring, ca. 8 EUR. <a href="https://www.google.com/search?tbm=isch&q=fort+saint+andre+villeneuve+avignon+sunset+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Avignon (kveld 2)",
      bookingWarning: "Le Coude à Coude er stengt søndager (åpent tir–lør). Kun aktuell for dag 11 (lørdag).",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="http://www.carredupalais.fr" target="_blank" rel="noopener">Le Carré du Palais</a></strong> – Utsikt mot Pavepalasset! Vinbar i gamle Banque de France. Åpent 7/7, 12:00–22:00. Kalvefilet med sopp, grillet kjøtt. <em>Ca. 40–60 EUR/pers.</em></li>
<li><strong><a href="https://www.restaurantsevin.fr/" target="_blank" rel="noopener">Restaurant SEVIN</a></strong> – 1 Michelin-stjerne i 1100-tallshus med fresker fra 1300-tallet. Sesongbasert. Åpent søndager i mai (fre–tir). <em>Ca. 60–145 EUR/pers.</em></li>
<li><strong>Le Coude à Coude</strong> – #1 TripAdvisor! Ektepar, rutete duker, blomsterterrasse. Meny fra 18 EUR! Rue de la Saraillerie 37. <em>Ca. 20–30 EUR/pers.</em></li>
</ul>`
    },
    {
      type: "gem",
      title: "Village des Bories — steinalder-landsby ved Gordes",
      content: `<p>4 km fra Gordes sentrum. En hel restaurert landsby av «bories» — små steinhytter bygget UTEN mørtel (som Pont du Gard!). Brukt fra bronsealderen til 1800-tallet. Direkte kobling til Pont du Gard: tørrmuret stein uten mørtel — romerne perfeksjonerte en teknikk som menneskene i Luberon hadde brukt i tusenvis av år. De runde steinhyttene mot blå himmel og oliventrær er unike fotomotiver — dere er trolig nesten alene.</p>`,
      detour: "4 km fra Gordes",
      duration: "30–45 min",
      cost: "Ca. 6 EUR",
    },
    {
      type: "practical",
      title: "Søndag 24. mai — Luberon-dagsturen",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Les Halles Avignon</strong>: Åpent søndager til kl. 14:00 — start gjerne dagen her med frokost.</li>
<li><strong>Anbefalt rekkefølge</strong>: Gordes Point de Vue i morgenlys (08:00–10:00, østvendt) → Sénanque (forhåndsbestilt) → Gordes sentrum → Roussillon i ettermiddagslys (etter 16:00, okerklippene gløder).</li>
<li><strong>Lavendel i mai</strong>: Sénanques lavendelmarker er GRØNNE — lavendelen blomstrer først i slutten av juni. Men: uten lilla turister er det nesten tomt, og valmuer + villblomster er overalt i stedet!</li>
<li><strong>Solnedgang</strong>: Fort Saint-André i Villeneuve for den ultimate utsikten over Avignon (ca. 20:00–21:00).</li>
</ul>`
    },
  ],
};
