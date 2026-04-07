// DAG 12
export const day12 = {
  day: 12,
  date: "24. mai",
  weekday: "Søndag",
  from: "Avignon",
  to: "Gordes/Luberon (dagstur)",
  km: 94,
  nights: 0,
  subtitle: "Avignon + Gordes/Luberon",
  coords: { lat: 43.95, lng: 4.81 },
  stops: [
    { name: "Gordes", lat: 43.91, lng: 5.20, type: "sight" },
    { name: "Roussillon", lat: 43.90, lng: 5.29, type: "sight" },
  ],
  sections: [
    {
      type: "sights",
      title: "Avignon",
      bookingWarning: "Palais des Papes – alltid populært!",
      bookingUrl: "https://www.palais-des-papes.com/",
      content: `<ul>
<li><strong>Palais des Papes</strong> (Pavepalasset): Europas største gotiske palass. Pavelig residens 1309–1377. UNESCO. Regn 2 timer.</li>
<li><strong>Pont Saint-Bénézet</strong> («Pont d'Avignon»): Broen fra barnesangen. Bygget 1177, 4 av 22 buer igjen.</li>
<li><strong>Rocher des Doms</strong>: Park på klippen, panorama mot Mont Ventoux og Alpene.</li>
<li><strong>Bymurene</strong>: Komplett bevarte fra 1300-tallet. 5 km lange.</li>
<li><a href="https://www.avignon-tourisme.com/" target="_blank" rel="noopener">avignon-tourisme.com</a></li>
</ul>`
    },
    {
      type: "sights",
      title: "Dagstur: Gordes & Luberon – Anbefales sterkt!",
      bookingWarning: "Sénanque-abbediet har begrenset kapasitet.",
      bookingUrl: "https://www.senanque.fr/",
      content: `<ul>
<li><strong>Gordes</strong>: Ofte kalt Frankrikes vakreste landsby. Steinbygninger langs bratt åsside med borg på toppen.</li>
<li><strong>Sénanque-abbediet</strong> (5 min fra Gordes): Cistercienserabdedi fra 1148 med lavendelmarker. Tidlig lavendel mulig i mai!</li>
<li><strong>Roussillon</strong> (15 min fra Gordes): Landsby på okerfargede klipper. Byen er i rødt, oransje og gult. Helt unikt.</li>
<li><a href="https://www.gordes-village.com/" target="_blank" rel="noopener">gordes-village.com</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historisk trivia for Bjørn Erik",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Det store skismaet i vest</strong>: Da paven flyttet til Avignon i 1309 (det «babylonske fangenskapet»), startet en 67 år lang periode med franske paver i Avignon. Da paven endelig returnerte til Roma i 1377, valgte franskmennene sin <em>egen</em> pave – og plutselig hadde kristenheten <strong>to paver samtidig</strong> (tidvis tre!). Skismaet varte til 1417.</li>
<li><strong>Pont d'Avignon</strong> (Pont Saint-Bénézet) ble ifølge legenden bygget av gjeteren Bénézet etter en guddommelig befaling. For å bevise at han var utvalgt, løftet han angivelig en enorm stein alene og la den som brofundament. Barnesangen «Sur le pont d'Avignon» handler egentlig om å danse <strong>under</strong> broen (sous le pont), ikke på den.</li>
<li><strong>Gordes</strong> har en mørk krigshistorie: Landsbyen var et viktig senter for den franske motstandsbevegelsen under WWII. I august 1944 ble den angrepet av tyske tropper som hevn – flere hus ble brent og sivile drept.</li>
<li><strong>Oker-gruvene i Roussillon</strong> har vært i bruk siden romertiden. Oker fra Roussillon ble brukt til å farge alt fra tekstiler til veggmalerier over hele Europa. Fargene i klippene spenner fra blodrødt til lysegult, avhengig av jernoksidinnholdet.</li>
<li><strong>Châteauneuf-du-Pape</strong> (20 min fra Avignon) betyr bokstavelig «Pavens nye slott» – pavene i Avignon bygde sommerresidensen sin her og plantet vingårdene som startet vintradisjonen. I 1954 vedtok kommunen en lov som <strong>forbyr UFOer å lande</strong> i vinmarkene. Loven står fortsatt.</li>
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
</ul>`
    },
    {
      type: "food",
      title: "Middag i Avignon (kveld 2)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="http://www.carredupalais.fr" target="_blank" rel="noopener">Le Carré du Palais</a></strong> – Utsikt mot Pavepalasset! Vinbar i gamle Banque de France. Åpent 7/7, 12:00–22:00. Kalvefilet med sopp, grillet kjøtt. <em>Ca. 40–60 EUR/pers.</em></li>
<li><strong><a href="https://www.restaurantsevin.fr/" target="_blank" rel="noopener">Restaurant SEVIN</a></strong> – 1 Michelin-stjerne i 1100-tallshus med fresker fra 1300-tallet. Sesongbasert. Åpent søndager i mai (fre–tir). <em>Ca. 60–145 EUR/pers.</em></li>
<li><strong>Le Coude à Coude</strong> – #1 TripAdvisor! Ektepar, rutete duker, blomsterterrasse. Meny fra 18 EUR! ⚠️ <strong>Stengt søndager</strong> (åpent tir–lør). Kun aktuell for dag 11 (lørdag). Rue de la Saraillerie 37. <em>Ca. 20–30 EUR/pers.</em></li>
</ul>`
    },
  ],
};
