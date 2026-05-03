// DAG 10
export const day10 = {
  day: 10,
  date: "22. mai",
  weekday: "Fredag",
  from: "San Sebastián",
  to: "Narbonne",
  km: 492,
  hours: 5,
  nights: 1,
  subtitle: "Lang kjøredag med essensielt stopp",
  description: "San Sebastián til Narbonne — Gallias første romerske koloni fra 118 f.Kr., med 2100 år gamle hjulspor synlige midt på torget.",
  intro: "Narbonne — eller Narbo Martius — var den aller første romerske kolonien i Gallia, grunnlagt 118 f.Kr. Byen var en supermakt i antikken, viktigere enn både Lyon og Bordeaux, med Via Domitia som hovedpulsåre. I dag er det en rolig sørfransk by med 55 000 innbyggere, en ufullført katedral og 2100 år gamle hjulspor synlige midt på torget.",
  coords: { lat: 43.18, lng: 3.00 },
  stops: [
    { name: "Carcassonne", lat: 43.21, lng: 2.35, type: "city" },
  ],
  trivia: [
    "Ved beleiringen av Béziers i 1209 sa pavens legat angivelig «Drep dem alle, Gud vil kjenne sine egne» — dere kjører rett gjennom massakrens åsted mellom Carcassonne og Narbonne.",
    "Ifølge legenden lurte Dame Carcas Karl den Store ved å skyte en kornfylt gris over muren — han ga opp, og da hun ringte i bjellene: «Carcas sonne!» (derav bynavnet).",
    "Narbonne (Narbo Martius) var viktigere enn både Lyon og London i det vestlige Romerriket — med 30 000–35 000 innbyggere.",
  ],
  sections: [
    {
      type: "sights",
      title: "Anbefalt stopp: Carcassonne (2–3 timer)",
      highlight: true,
      summary: "Europas best bevarte middelalderby med doble ringmurer og 52 tårn — katarenes siste bastion og Viollet-le-Ducs mesterverk.",
      bookingWarning: "Château Comtal og rempartene – tidsluker i høysesong.",
      bookingUrl: "https://www.remparts-carcassonne.fr/",
      references: [
        { type: "book", title: "Labyrinth", author: "Kate Mosse", relevance: "Satt i Carcassonne med handling i katar-tiden og nåtiden — murene og gatene i boken er de samme dere går i." },
        { type: "book", title: "The Perfect Heresy", author: "Stephen O'Shea", relevance: "Dekker det albigensiske korstoget som knuste katarene — Carcassonne var et av de viktigste åstedene." },
        { type: "film", title: "Robin Hood: Prince of Thieves", year: 1991, relevance: "Carcassonne ble brukt som filmkulisse — de doble ringmurene dere ser er de samme som i filmen." },
      ],
      content: `<ul>
<li><strong>Europas best bevarte middelalderby.</strong> Doble ringmurer, 52 tårn. UNESCO.</li>
<li>Restaurert av Viollet-le-Duc på 1800-tallet. Gå rundt på murene.</li>
<li><strong>Comte-slottet</strong>: Festningen inne i festningen. Museum og utsikt.</li>
<li><strong>Basilique Saints-Nazaire</strong>: Gotisk/romansk kirke med fantastiske glassmalerier.</li>
<li><strong>Dame Carcas-legenden</strong>: En byste av Dame Carcas står ved Porte Narbonnaise. Ifølge legenden lurte hun Karl den Store ved å skyte en kornfylt gris over muren for å gi inntrykk av at de hadde mat nok.</li>
<li><a href="https://www.tourism-carcassonne.co.uk/" target="_blank" rel="noopener">carcassonne-tourisme.com</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Carcassonne og katarene</strong>: Byen var et senter for katarismen – en kristen «kjettersk» bevegelse på 1100–1200-tallet. Pave Innocens III utlyste det <strong>albigensiske korstoget</strong> (1209) for å utrydde dem. Carcassonne falt i 1209 etter en to ukers beleiring. Lederen Simon de Montfort ble den nye herren.</li>
<li>Under beleiringen av Carcassonne i 1209 sa pavens legat angivelig de berømte ordene: <em>«Drep dem alle, Gud vil kjenne sine egne»</em> – da han ble spurt hvordan man skulle skille katarer fra katolikker. (Sitatet er muligens apokryft, men det har blitt stående.)</li>
<li><strong>Viollet-le-Duc</strong> sin restaurering av Carcassonne (1853–79) er kontroversiell blant historikere. Han la til skifertakene med spisse tårn, som gir borgen sitt eventyr-aktige utseende. Opprinnelig hadde tårnene flate terracotta-tak i sørfransk stil. Noen mener han «Disneyfiserte» borgen – men uten ham hadde den trolig blitt revet.</li>
<li><strong>Narbonne</strong> var den første romerske kolonien i Gallia, grunnlagt <strong>118 f.Kr.</strong> – altså eldre enn både Lyon og Paris som romerske byer. Byen var hovedstad i provinsen Gallia Narbonensis og en av de viktigste byene i det vestlige Romerriket.</li>
<li><strong>Via Domitia</strong> (synlig på torget i Narbonne) var den aller første romerske veien bygget i Gallia, anlagt av Gnaeus Domitius Ahenobarbus i 118 f.Kr. Den gikk fra Rhône til Spania – og dere kjører omtrent samme rute!</li>
<li><strong>Katarene — hva de egentlig trodde</strong>: Katarismen var en dualistisk religion som mente den materielle verden var skapt av en ond gud. Kroppen var et fengsel, og den katolske kirken — med rikdom og palasser — var djevelens verk. De hadde egne prester (<em>parfaits</em>), levde i fattigdom, og praktiserte en enkel dødsrite kalt <em>consolamentum</em>. I Languedoc var de fleste adelsfamiliene katar-sympatisører.</li>
<li><strong>Béziers-massakren (22. juli 1209)</strong>: Dere kjører rett gjennom massakrens åsted mellom Carcassonne og Narbonne. Anslagsvis 15 000–20 000 mennesker ble slaktet — katarer OG katolikker. Folk søkte tilflukt i katedralene, men korsfarerne brente dem med alle inni. Det berømte sitatet <em>«Drep dem alle, Gud vil kjenne sine egne»</em> stammer fra Béziers, ikke Carcassonne. Béziers falt på én dag.</li>
<li><strong>Narbonnes uferdige katedral</strong>: Bare koret ble fullført fordi bymyndighetene nektet å rive bymuren for å gjøre plass til skipet — de fryktet angrep. Resultatet: et av Frankrikes høyeste gotiske kor (41 m) som bare… stopper. En vegg der skipet skulle vært.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Fra østsiden/Pont Vieux: Hele borgen – ikonisk siluett. <a href="https://www.google.com/search?tbm=isch&q=carcassonne+pont+vieux+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>«Listen» mellom de doble murene – tidløst. <a href="https://www.google.com/search?tbm=isch&q=carcassonne+lices+double+walls" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Porte Narbonnaise: Hovedporten med to massive tårn. <a href="https://www.google.com/search?tbm=isch&q=porte+narbonnaise+carcassonne" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "sights",
      title: "Narbonne",
      highlight: true,
      summary: "Gallias første romerske koloni, med Via Domitia synlig på torget og en katedral som aldri ble ferdig.",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Cathédrale Saint-Just-et-Saint-Pasteur</strong>: Kun koret fullført, men Frankrikes TREDJE HØYESTE gotiske kor (41 m).</li>
<li><strong>Via Domitia</strong>: Eldste romerske veien i Gallia (118 f.Kr.) synlig på Place de l'Hôtel de Ville. Se de 2100 år gamle hjulsporene i steinen!</li>
<li><strong>Horreum</strong>: Underjordisk romersk lagerhus fra 1. århundre f.Kr. — det eneste tilgjengelige underjordiske romerske bygningsverket i Sør-Frankrike. <a href="https://www.narbonne-tourisme.com/" target="_blank" rel="noopener">narbonne-tourisme.com</a></li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Narbonne",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://hoteldumidi.net/eng/" target="_blank" rel="noopener">Hôtel du Midi</a></strong> – Fra 49 EUR/rom/natt! Privat garasje 10 EUR/natt. 36 nyrenoverte rom. 10% rabatt ved direktebooking. <em>Ca. 49–70 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotelnarbonne.com/en/" target="_blank" rel="noopener">Hôtel de France</a></strong> – 9.0/10 Expedia! 14 rom i 1800-tallshus. Frokost med lokale spesialiteter. <em>Ca. 69–89 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotelresidence.fr/" target="_blank" rel="noopener">Hôtel La Résidence</a></strong> – 1800-talls privathus, bar med lokale Corbières-viner. Parkering 12 EUR/natt. <em>Ca. 80–120 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Narbonne",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Chez Lulu</strong> – 4.7/5, retro-bistro i "Café de la Poste" fra 1932. 100% hjemmelaget cassoulet (and, pølse, bønner). Solide kjøttretter. Billigere enn forventet! Blvd Gambetta 30. <em>Ca. 15–28 EUR/pers.</em></li>
<li><strong><a href="https://www.petitcomptoir.com/" target="_blank" rel="noopener">Le Petit Comptoir</a></strong> – Institusjon siden 1976. 300+ Languedoc-viner. God kjøttmeny. <em>Ca. 35–50 EUR/pers.</em></li>
<li><strong><a href="https://www.chezfranck11.fr/" target="_blank" rel="noopener">Chez Franck</a></strong> – Grillrestaurant med kjøtt over vedild, institusjon siden 1968. Drevet av eks-rugbyspiller Franck Tournaire. Entrecôte, côte de bœuf, lam – alt på grill. 4.7/5 Google. Reservasjon per telefon: 04 68 41 59 32. <em>Ca. 40–50 EUR/pers.</em></li>
</ul>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Frankrike (Languedoc/Sør-Frankrike)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> til alle dere møter. Etter 18:00: «Bonsoir». «Au revoir» når dere går.</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. «L'addition, s'il vous plaît» — regningen kommer ikke uoppfordret. Aldri «Garçon!».</li>
<li><strong>Tipsing</strong>: Service er inkludert. 1–5 EUR ekstra eller bare runde opp.</li>
<li><strong>Sørfransk avslappethet</strong>: I Languedoc er rytmen langsommere enn i Paris. Lange lunsjer (12:00–14:30) er normen, ettermiddagen er ofte stille (mange butikker stenger 13:00–15:00). Ikke stress — gli inn i tempoet.</li>
<li><strong>Cassoulet-region</strong>: Dere er i hjertet av cassoulet-landet (and, pølse, hvite bønner). Den serveres treg og tung — IKKE bestill mye annet ved siden av. Et glass lokal Corbières- eller Minervois-rødvin er perfekt makker.</li>
<li><strong>Engelsk</strong>: Variabelt utenfor turistsenteret. I Carcassonne (turistmagnet): bra. I Narbonne: jevnt over greit.</li>
<li><strong>Fransk-forsøk</strong>: Sørfranskmenn har en varm aksent og er mer overbærende med fransk-feil enn pariserne. «Bonjour, parlez-vous anglais?» åpner alle dører.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:00, middag 19:30–22:00. Mange kjøkken stenger mellom — fredag kveld er normalt godt åpent.</li>
</ul>`
    },
    {
      type: "gem",
      title: "Espelette — den røde landsbyen",
      content: `<p>Rett etter grensen inn i Frankrike, 30 min fra San Sebastián via D918. Hele landsbyen er dekorert med tråder av tørkende røde peperfrukter (piment d'Espelette) på hvite fasader med røde skodder. Espelette-pepper har AOC-status (som vin!). Selv uten pepper-festivalen i oktober er dette en av de mest fotogene landsbyene i hele Baskerland. Kjøp piment d'Espelette i pulverform — fantastisk krydder å ta med hjem!</p>`,
      detour: "Rett langs veien",
      duration: "20–30 min",
      cost: "Gratis",
    },
    {
      type: "practical",
      title: "Lang kjøredag — smart pauseplanlegging",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Aire de Port Lauragais</strong> (ca. 40 min før Carcassonne): Ikke en vanlig rasteplass — informasjonssenter for Canal du Midi med restaurant og utsikt ned på kanalen. Gå ned til vannet, se slusene, platan-alléen. UNESCO-historie + ordentlig mat.</li>
<li><strong>Ankomst Carcassonne</strong>: Ta avkjøring 23 fra A61 og kjør inn via Pont Vieux for det klassiske postkortet-motivet. Parker P2 (Porte d'Aude-siden) — roligere og lettere tilgang.</li>
<li><strong>Narbonne Canal de la Robine</strong>: Kveldsvandring langs kanalen etter en 490 km kjøredag. Pont des Marchands er en av få bebodde broer i Frankrike — som Ponte Vecchio i liten skala.</li>
</ul>`
    },
  ],
};
