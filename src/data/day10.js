// DAG 10
export const day10 = {
  day: 10,
  date: "22. mai",
  weekday: "Fredag",
  from: "San Sebastián",
  to: "Carcassonne",
  km: 432,
  hours: 4.5,
  nights: 1,
  subtitle: "Til Europas best bevarte middelalderby",
  description: "San Sebastián til Carcassonne — Europas best bevarte middelalderby med doble ringmurer og 52 tårn, katarenes siste bastion og Viollet-le-Ducs mesterverk.",
  intro: "Carcassonne er Europas best bevarte middelalderby — doble ringmurer, 52 tårn og en silhuett som ser ut som den er løftet rett ut av et eventyrbilde. La Cité (gamlebyen oppe på høyden) er UNESCO-listet og helt fri for biler innenfor murene. Byen var katarenes siste bastion under det albigensiske korstoget på 1200-tallet, og ble «reddet» fra rivning og restaurert til sin nåværende form av Viollet-le-Duc på 1800-tallet. Etter 4,5 timers kjøring fra Baskerland ankommer dere midt på ettermiddagen — perfekt timing for å gå rundt på murene før solnedgangen tegner gull på steinene.",
  coords: { lat: 43.21, lng: 2.35 },
  stops: [],
  trivia: [
    "Ifølge legenden lurte Dame Carcas Karl den Store ved å skyte en kornfylt gris over muren — han ga opp, og da hun ringte i bjellene: «Carcas sonne!» (derav bynavnet).",
    "Ved beleiringen av Béziers i 1209 sa pavens legat angivelig «Drep dem alle, Gud vil kjenne sine egne» — dere kjører rett gjennom katarkrigens kjerneområde på vei inn til Carcassonne.",
    "Robin Hood: Prince of Thieves (1991) brukte Carcassonne som filmkulisse — de doble ringmurene dere ser er de samme som i filmen.",
  ],
  sections: [
    {
      type: "sights",
      title: "La Cité — Europas best bevarte middelalderby",
      highlight: true,
      summary: "Doble ringmurer, 52 tårn og en bilfri middelalderby på høyden. Katarenes siste bastion og Viollet-le-Ducs mesterverk — UNESCO-listet.",
      bookingWarning: "Château Comtal og rempartene — tidsluker i høysesong.",
      bookingUrl: "https://www.remparts-carcassonne.fr/",
      references: [
        { type: "book", title: "Labyrinth", author: "Kate Mosse", relevance: "Satt i Carcassonne med handling i katar-tiden og nåtiden — murene og gatene i boken er de samme dere går i." },
        { type: "book", title: "The Perfect Heresy", author: "Stephen O'Shea", relevance: "Dekker det albigensiske korstoget som knuste katarene — Carcassonne var et av de viktigste åstedene." },
        { type: "film", title: "Robin Hood: Prince of Thieves", year: 1991, relevance: "Carcassonne ble brukt som filmkulisse — de doble ringmurene dere ser er de samme som i filmen." },
      ],
      content: `<ul>
<li><strong>Doble ringmurer og 52 tårn.</strong> UNESCO. Bilfri innenfor murene.</li>
<li><strong>Château Comtal</strong>: Festningen inne i festningen. Museum og utsikt fra murene. <a href="https://www.remparts-carcassonne.fr/" target="_blank" rel="noopener">remparts-carcassonne.fr</a></li>
<li><strong>Basilique Saints-Nazaire</strong>: Gotisk/romansk kirke med fantastiske glassmalerier — særlig i kveldsslyset.</li>
<li><strong>Listen mellom murene</strong>: Gå hele veien rundt mellom indre og ytre ringmur — bilfri stille bortsett fra vinden.</li>
<li><strong>Dame Carcas-legenden</strong>: En byste står ved Porte Narbonnaise. Ifølge legenden lurte hun Karl den Store ved å skyte en kornfylt gris over muren.</li>
<li><a href="https://www.tourisme-carcassonne.fr/" target="_blank" rel="noopener">tourisme-carcassonne.fr</a></li>
</ul>
<p>💡 Best opplevelse: gå inn gjennom <strong>Porte Narbonnaise</strong> (hovedporten) ved ankomst, og kom ut gjennom <strong>Porte d'Aude</strong> ned mot nedre by. Den siste gir det klassiske postkortet-motivet av borgen sett nedenfra.</p>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Carcassonne og katarene</strong>: Byen var et senter for katarismen — en kristen «kjettersk» bevegelse på 1100–1200-tallet. Pave Innocens III utlyste det <strong>albigensiske korstoget</strong> (1209) for å utrydde dem. Carcassonne falt i 1209 etter en to ukers beleiring. Lederen Simon de Montfort ble den nye herren.</li>
<li>Under beleiringen av Carcassonne i 1209 sa pavens legat angivelig de berømte ordene: <em>«Drep dem alle, Gud vil kjenne sine egne»</em> — da han ble spurt hvordan man skulle skille katarer fra katolikker. (Sitatet er muligens apokryft, men det har blitt stående.) De fleste historikere tror sitatet egentlig stammer fra Béziers-massakren noen uker tidligere.</li>
<li><strong>Viollet-le-Duc</strong> sin restaurering av Carcassonne (1853–79) er kontroversiell blant historikere. Han la til skifertakene med spisse tårn, som gir borgen sitt eventyr-aktige utseende. Opprinnelig hadde tårnene flate terracotta-tak i sørfransk stil. Noen mener han «Disneyfiserte» borgen — men uten ham hadde den trolig blitt revet.</li>
<li><strong>Katarene — hva de egentlig trodde</strong>: Katarismen var en dualistisk religion som mente den materielle verden var skapt av en ond gud. Kroppen var et fengsel, og den katolske kirken — med rikdom og palasser — var djevelens verk. De hadde egne prester (<em>parfaits</em>), levde i fattigdom, og praktiserte en enkel dødsrite kalt <em>consolamentum</em>. I Languedoc var de fleste adelsfamiliene katar-sympatisører.</li>
<li><strong>Béziers-massakren (22. juli 1209)</strong>: Dere kjører forbi massakrens åsted på vei inn til Carcassonne. Anslagsvis 15 000–20 000 mennesker ble slaktet — katarer OG katolikker. Folk søkte tilflukt i katedralene, men korsfarerne brente dem med alle inni. Béziers falt på én dag.</li>
<li><strong>Montségur og katarismens slutt</strong>: I 1244 falt Montségur — den siste katarfestningen i Pyreneene — etter 10 måneders beleiring. 215 katarer som nektet å konvertere ble brent levende på et stort bål i bunnen av fjellet. Det var slutten på katarismen som åpen bevegelse, men ikke som idé — den lever videre i Languedocs identitet.</li>
<li><strong>Hvorfor Carcassonne sto</strong>: Strategisk sett kontrollerte byen Aude-dalen — den eneste lave passasjen mellom Atlanterhavet og Middelhavet mellom Pyreneene og Massif Central. Den som holdt Carcassonne, holdt veien mellom Spania og resten av Frankrike. Det er grunnen til at den ble bygget så enormt — og grunnen til at den aldri ble forlatt.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Fra <strong>Pont Vieux</strong> over Aude-elva: hele borgen på høyden — det klassiske ikonet. Best i kveldsslyset. <a href="https://www.google.com/search?tbm=isch&q=carcassonne+pont+vieux+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>«Listen» mellom de doble murene — tidløst. <a href="https://www.google.com/search?tbm=isch&q=carcassonne+lices+double+walls" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Porte Narbonnaise: Hovedporten med to massive tårn. <a href="https://www.google.com/search?tbm=isch&q=porte+narbonnaise+carcassonne" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li><strong>Carcassonne om natten</strong>: Hele borgen er flomlyst etter mørkets frembrudd — gå opp til Pont Vieux igjen etter middag. <a href="https://www.google.com/search?tbm=isch&q=carcassonne+night+illuminated" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Carcassonne",
      bookingWarning: "La Cité — book tidlig hvis dere vil sove innenfor murene.",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.hoteldelacite.com/" target="_blank" rel="noopener">Hôtel de la Cité</a></strong> — Inne i selve La Cité, mot Basilique Saint-Nazaire. MGallery-luksus, gastronomisk restaurant La Barbacane. Magisk om kvelden når dagsturistene har dratt. <em>Ca. 280–450 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-donjon.fr/en/" target="_blank" rel="noopener">Best Western Hôtel Le Donjon</a></strong> — Inne i La Cité, sjarmerende, eget Restaurant Comte Roger. Mer overkommelig enn Hôtel de la Cité. Parkering rett utenfor murene. <em>Ca. 130–220 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotelespacecite.com/" target="_blank" rel="noopener">Hôtel Espace Cité</a></strong> — Nedre by, 10 min gåtur fra La Cité. Moderne, gratis parkering, best verdi. <em>Ca. 75–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hoteldupontvieux.com/" target="_blank" rel="noopener">Hôtel du Pont Vieux</a></strong> — Ved den gamle broen i nedre by. Postkortmotivet av La Cité fra terrassen. <em>Ca. 85–130 EUR/rom/natt.</em></li>
</ul>
<p>🏰 Beste opplevelse: sov innenfor murene (Le Donjon eller Hôtel de la Cité). Etter kl. 19 går dagsturistene, og La Cité tilhører dere.</p>`
    },
    {
      type: "food",
      title: "Middag i Carcassonne",
      bookingWarning: "Reserver — La Cité er populært fredagskveld i mai.",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.lamarquiere.com/" target="_blank" rel="noopener">La Marquière</a></strong> — Inne i La Cité, klassisk fransk kjøkken, solid cassoulet av and og griseribbe i lokal stil. Skjermet hage. 4,5/5. <em>Ca. 35–55 EUR/pers.</em></li>
<li><strong><a href="https://www.comteroger.com/" target="_blank" rel="noopener">Restaurant Comte Roger</a></strong> — Hôtel Le Donjon, inne i La Cité. Moderne sørfransk meny, fin patio. Reservasjon anbefales. <em>Ca. 40–60 EUR/pers.</em></li>
<li><strong>Auberge des Lices</strong> — Mellom de doble murene. Cassoulet, magret de canard, lokale Minervois- og Corbières-viner. Rustikt og personlig. <em>Ca. 30–45 EUR/pers.</em></li>
<li><strong>La Barbacane</strong> (Hôtel de la Cité) — 1 Michelin-stjerne. Reserveres for den store anledningen. <em>Meny fra 95 EUR/pers.</em></li>
</ul>
<p>🍷 Dere er midt i <strong>cassoulet-landet</strong> — and, pølse, hvite bønner, lavt og lenge bakt. Den serveres treg og tung; ikke bestill mye annet ved siden av. Lokal Corbières- eller Minervois-rødvin er perfekt makker.</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Frankrike (Languedoc)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> til alle dere møter. Etter 18:00: «Bonsoir». «Au revoir» når dere går.</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. «L'addition, s'il vous plaît» — regningen kommer ikke uoppfordret. Aldri «Garçon!».</li>
<li><strong>Tipsing</strong>: Service er inkludert. 1–5 EUR ekstra eller bare runde opp.</li>
<li><strong>Sørfransk avslappethet</strong>: I Languedoc er rytmen langsommere enn i Paris. Lange lunsjer (12:00–14:30) er normen, ettermiddagen er ofte stille (mange butikker stenger 13:00–15:00). Ikke stress — gli inn i tempoet.</li>
<li><strong>Cassoulet-region</strong>: Dere er i hjertet av cassoulet-landet (and, pølse, hvite bønner). Den serveres treg og tung — IKKE bestill mye annet ved siden av. Et glass lokal Corbières- eller Minervois-rødvin er perfekt makker.</li>
<li><strong>Engelsk</strong>: I La Cité (turistmagnet): bra. I nedre by: variabelt.</li>
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
      title: "Smart pauseplanlegging og ankomst Carcassonne",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Aire de Port Lauragais</strong> (ca. 40 min før Carcassonne på A61): Ikke en vanlig rasteplass — informasjonssenter for Canal du Midi med restaurant og utsikt ned på kanalen. Gå ned til vannet, se slusene, platan-alléen. UNESCO-historie + ordentlig mat.</li>
<li><strong>Ankomst Carcassonne</strong>: Ta avkjøring 23 fra A61. For det klassiske postkort-motivet: kjør først over <strong>Pont Vieux</strong> i nedre by og se La Cité på høyden før dere kjører opp.</li>
<li><strong>Parkering</strong>: Parker P2 (Porte d'Aude-siden) — roligere og lettere tilgang. Eller la bilen stå på hotellet i nedre by og gå opp (10–15 min, fin oppstigning).</li>
<li><strong>Tidspunkt</strong>: La Cité tømmes for dagsturister etter kl. 18. Kvelden er den magiske tiden — flomlys, stille gater, lavt sluk for foto.</li>
</ul>`
    },
  ],
};
