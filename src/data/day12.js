// DAG 12
export const day12 = {
  day: 12,
  date: "24. mai",
  weekday: "Søndag",
  from: "Avignon",
  to: "Avignon (Pavepalasset)",
  km: 94,
  hours: 2,
  nights: 0,
  subtitle: "Heldag i pavebyen — med Luberon på toppen om dere orker",
  description: "Heldag i Avignon med Pavepalasset i førersetet — Europas største gotiske palass og pavelig residens i 67 år. Luberon-løkka (Gordes, Sénanque, Roussillon) som valgfri ettermiddagstur hvis det er overskudd.",
  intro: "Dag to i Avignon er Pavepalasset-dagen. Europas største gotiske palass tar 2–4 timer hvis dere virkelig vil inn i historikken — og det er det dere skal denne dagen. Etterpå venter Pont Saint-Bénézet, Rocher des Doms, bymurene og solnedgang fra Villeneuve. Hvis dere orker en biltur etter Pavepalasset, ligger Luberon-løkka (Gordes, Sénanque, Roussillon) 40–50 km øst — Provences mest maleriske hjørne. Men ingen skam i å la den ligge.",
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
      title: "Hoveddag: Pavepalasset og Avignon",
      highlight: true,
      summary: "Europas største gotiske palass, broen fra barnesangen, og byen der pavene regjerte i 67 år — med to (tidvis tre!) paver samtidig. Gi Pavepalasset 2–4 timer for et ordentlig dypdykk.",
      bookingWarning: "Palais des Papes – alltid populært! Book tidsluke på forhånd.",
      bookingUrl: "https://www.palais-des-papes.com/",
      references: [
        { type: "book", title: "The Babylonian Captivity of the Church", author: "Yves Renouard", relevance: "Standardverket om de syv pavene i Avignon — bakgrunnen for hver eneste sal dere går gjennom i palasset." },
        { type: "book", title: "A Year in Provence", author: "Peter Mayle", relevance: "Mayle bodde i Luberon-området — hans skildringer av markedene, vinbøndene og landsbylivet er Luberon-løkka i bokform (hvis dere drar opp på ettermiddagen)." },
        { type: "film", title: "A Good Year", year: 2006, relevance: "Filmet i Provence-vinmarkene rundt Gordes og Bonnieux — landskapet i filmen er det samme dere ser hvis dere tar Luberon-løkka." },
      ],
      content: `<ul>
<li><strong>Palais des Papes</strong> (Pavepalasset): Europas største gotiske palass. Pavelig residens 1309–1377. UNESCO. <strong>Regn 2–4 timer hvis dere vil ha tid i hver sal med audioguide</strong>. Palasset er nesten TOMT — plyndret under revolusjonen og brukt som kaserne av Napoleon. Men de enorme, nakne hallene gir en kraftigere opplevelse enn forventet. Grand Tinel (festsalen) er 48 meter lang. Histopad (AR-tablet) gir rommene tilbake møblene digitalt — anbefales sterkt.</li>
<li><strong>Pont Saint-Bénézet</strong> («Pont d'Avignon»): Broen fra barnesangen. Bygget 1177, 4 av 22 buer igjen. Barnesangen handler egentlig om å danse UNDER broen — på Île de la Barthelasse der det var vertshus og danselokaler.</li>
<li><strong>Rocher des Doms</strong>: Park på klippen rett ved palasset, panorama mot Mont Ventoux og Alpene. Perfekt benk-pause mellom palasset og lunsj.</li>
<li><strong>Bymurene</strong>: Komplett bevarte fra 1300-tallet. 5 km lange.</li>
<li><strong>Fort Saint-André i Villeneuve-lès-Avignon</strong>: 10 min over Rhônen. DEN beste utsikten over Avignon — hele skyline med Pavepalasset, broen og bymurene. Best ved solnedgang (ca. 21:00 i mai).</li>
<li><a href="https://www.avignon-tourisme.com/" target="_blank" rel="noopener">avignon-tourisme.com</a></li>
</ul>`
    },
    {
      type: "sights",
      title: "Valgfritt: Luberon-løkka (Gordes, Sénanque, Roussillon)",
      summary: "Hvis dere har overskudd etter Pavepalasset: 40 km øst ligger Provences mest maleriske hjørne — Frankrikes vakreste landsby, et levende cistercienserabdedi og okerklippene i Roussillon.",
      bookingWarning: "Sénanque-abbediet har begrenset kapasitet — book på forhånd hvis dere bestemmer dere tidlig på dagen.",
      bookingUrl: "https://www.senanque.fr/",
      references: [
        { type: "film", title: "Le Hussard sur le toit", year: 1995, relevance: "Filmet i Gordes-området — de provençalske steinlandsbyene i filmen er de samme dere ser hvis dere tar Luberon-løkka." },
        { type: "film", title: "Jean de Florette", year: 1986, relevance: "Ikonisk Provence-film om vann og rural maktkamp — fanger essensen av Luberon-landskapet." },
      ],
      content: `<ul>
<li><strong>Gordes</strong>: Ofte kalt Frankrikes vakreste landsby. Steinbygninger langs bratt åsside med borg på toppen. Tips: Gordes er best UTENFRA — stopp ved Point de Vue på D15 for fotoet (østvendt åsside). Innsiden er turistifisert. 30–40 min er nok.</li>
<li><strong>Sénanque-abbediet</strong> (5 min fra Gordes): Cistercienserabdedi fra 1148. Fortsatt i drift — munker lever her etter Benedikts regel og dyrker lavendel. NB: Lavendelen er IKKE i blomst i mai (tidligst slutten av juni), men uten lilla turister er det nesten tomt — dere får abbediet for dere selv!</li>
<li><strong>Roussillon</strong> (15 min fra Gordes): Landsby på okerfargede klipper. Byen er i rødt, oransje og gult. Helt unikt. «Le Sentier des Ocres» (Okerstien, ca. 3 EUR) er en vandring gjennom okerklippene — som å gå på Mars. Best i ettermiddagslys etter kl. 16:00. OBS: Okerjord flekker klær!</li>
<li><a href="https://www.gordes-village.com/" target="_blank" rel="noopener">gordes-village.com</a></li>
</ul>
<p>💡 Realistisk: Pavepalasset i 3 timer + lunsj + Pont d'Avignon + Rocher des Doms tar dagen helt fram til kl. 16–17. Roussillon i ettermiddagslys er det lille ekstra hvis dere fortsatt har energi — Gordes/Sénanque er greit å skippe.</p>`
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
      type: "customs",
      title: "Lokale skikker — Frankrike (Provence/Luberon)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> i hver eneste landsby — Gordes, Roussillon, Sénanque. Provence-folk legger MERKE til hilsenen, særlig i små landsbyer der turister er lette å kjenne igjen.</li>
<li><strong>I Sénanque-abbediet</strong>: Stillhet er regelen. Munkene følger Benedikts regel — snakk lavt, ikke fotografer munker, kle dere anstendig (dekkede skuldre/knær).</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. «L'addition, s'il vous plaît». 1–5 EUR ekstra i tips eller bare runde opp.</li>
<li><strong>Provence-mat og drikke</strong>: <strong>Pastis</strong> som aperitiff (Ricard er den vanligste merket — blandes med kaldt vann fra mugge, ca. 1:5). <strong>Rosé fra Provence</strong> er nasjonalt drikke om sommeren — bestill den iskald. <strong>Tapenade</strong> (oliven), <strong>aioli</strong> (hvitløksmajones), og <strong>herbes de Provence</strong> finner dere overalt.</li>
<li><strong>Sørfransk tempo</strong>: Søndag i Provence betyr at mye stenger — men markedene er åpne om morgenen, og turistlandsbyer som Gordes har det meste åpent. Tempoet er bevisst rolig.</li>
<li><strong>Engelsk</strong>: Bra i turistmagneter (Gordes, Roussillon), variabelt i mindre landsbyer.</li>
<li><strong>Fransk-forsøk</strong>: «C'est magnifique!» får varme smil overalt i Provence.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:30 (provençalere tar lang lunsj!), middag 19:30–22:00. Søndag kveld: ring og bekreft, mye stengt.</li>
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
      title: "Søndag 24. mai — Pavepalasset-dagen",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Frokost</strong>: Les Halles Avignon (åpent søndager til kl. 14:00) eller hotellets frokost.</li>
<li><strong>Pavepalasset kl. 09:30–13:00</strong>: Book tidsluke tidligst mulig. Histopad (AR-tablet) inkludert i billetten — gjør de tomme salene levende. Audioguide eller guided tour for full historikk.</li>
<li><strong>Lunsj kl. 13:00–14:30</strong>: I Avignon sentrum. Le Carré du Palais har utsikt rett mot palasset.</li>
<li><strong>Ettermiddag kl. 14:30–18:00</strong>: Pont Saint-Bénézet, Rocher des Doms, gå på bymurene, Rue des Teinturiers.</li>
<li><strong>Solnedgang</strong>: Fort Saint-André i Villeneuve for den ultimate utsikten over Avignon (ca. 20:00–21:00).</li>
<li><strong>Hvis dere har overskudd</strong>: Luberon-løkka (Gordes/Sénanque/Roussillon) tar 4–5 timer. Roussillon i ettermiddagslys er det sterkeste enkelt-elementet hvis dere bare gidder ett.</li>
<li><strong>Lavendel i mai</strong>: Sénanques lavendelmarker er GRØNNE — lavendelen blomstrer først i slutten av juni. Valmuer og villblomster i stedet.</li>
</ul>`
    },
  ],
};
