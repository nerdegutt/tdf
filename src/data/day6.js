// DAG 6
export const day6 = {
  day: 6,
  date: "18. mai",
  weekday: "Mandag",
  from: "Bayeux",
  to: "Mont Saint-Michel",
  km: 128,
  hours: 2,
  nights: 1,
  subtitle: "Kort kjøring til et av verdens mest ikoniske steder",
  intro: "Mont Saint-Michel er en tidevannsøy med et benediktinerabdedi fra 708 e.Kr., reisende seg 80 meter over bukta der Normandie møter Bretagne. Ved høyvann er den omgitt av hav; ved lavvann kan du gå til fots over sanden. UNESCO-listen siden 1979, og et av Frankrikes mest besøkte steder med over 2,5 millioner turister årlig.",
  coords: { lat: 48.64, lng: -1.51 },
  stops: [],
  trivia: [
    "Middelaldersk ordtak: «Avant d'aller au Mont, fais ton testament» — Før du drar til fjellet, skriv testamentet ditt. Hundrevis av pilegrimer druknet i kvikksanden og tidevannet.",
    "Det finnes en påstått usynlig linje — «St. Michael's Ley Line» — som forbinder hellige steder viet erkeengelen Mikael fra Irland (Skellig Michael) via Cornwall, Mont Saint-Michel, til Monte Gargano i Italia. Pseudovitenskap? Kanskje. Men stedene ligger bemerkelsesverdig på linje.",
    "Disneys Rapunzel-film (Tangled) er visuelt inspirert av Mont Saint-Michel — designerne reiste hit for research.",
  ],
  sections: [
    {
      type: "sights",
      title: "Mont Saint-Michel",
      highlight: true,
      summary: "Benediktinerabdedi fra 708 e.Kr. på en tidevannsøy — aldri erobret under Hundreårskrigen. Europas største tidevannsforskjell (opptil 15 m) og et intellektuelt kraftsenter i middelalderen.",
      bookingWarning: "Abbediet – kan bli lange køer.",
      bookingUrl: "https://www.abbaye-mont-saint-michel.fr/",
      references: [
        { type: 'book', title: 'Rosens navn', author: 'Umberto Eco', relevance: 'Ecos klosterkrim fanger atmosfæren i et middelaldersk benediktinerabdedi — nøyaktig det dere opplever inne i Mont Saint-Michel.' },
        { type: 'book', title: 'Mont-Saint-Michel and Chartres', author: 'Henry Adams', relevance: 'Adams bruker Mont Saint-Michel som utgangspunkt for å forstå middelalderens åndsliv — skrevet om akkurat dette stedet.' },
        { type: 'film', title: 'To the Wonder', year: 2012, relevance: 'Malick filmet drømmende scener på Mont Saint-Michel — dere kjenner igjen gangveien, sanden og silhuetten.' },
      ],
      content: `<ul>
<li><strong>Abbediet</strong>: Benediktinerabdedi grunnlagt 708 e.Kr. UNESCO. <a href="https://www.ot-montsaintmichel.com/" target="_blank" rel="noopener">ot-montsaintmichel.com</a></li>
<li><strong>La Merveille</strong> («Underet»): 1200-talls gotisk klosterbygg. Riddersalen, refektoriet, korsgang.</li>
<li><strong>Befestningene</strong>: Aldri erobret under Hundreårskrigen (1337–1453).</li>
<li><strong>Grande Rue</strong>: Bratt middelaldergate opp mot abbediet.</li>
<li><strong>Tidevannet</strong>: Europas størst tidevannsforskjell (opptil 15m). Sjekk <a href="https://www.maree.info/" target="_blank" rel="noopener">maree.info</a>!</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'Rosens navn', author: 'Umberto Eco', relevance: 'Scriptorium, munkeliv og middelaldersk lærdom — alt som skildres i romanen utspilte seg i klostre som Mont Saint-Michel.' },
      ],
      content: `<ul>
<li>Ifølge legenden beordret <strong>erkeengelen Mikael</strong> biskop Aubert av Avranches til å bygge et kapell på klippen i 708. Aubert ignorerte det to ganger – til engelen brente et hull i hodeskallen hans med fingeren. Auberts hodeskalle (med hull!) oppbevares i Saint-Gervais-kirken i Avranches.</li>
<li>Under <strong>Hundreårskrigen</strong> holdt en garnison på bare <strong>119 riddere</strong> Mont Saint-Michel mot engelske beleiringer i over 30 år. Den ble aldri tatt – den eneste plassen i Normandie som ikke falt.</li>
<li>Tidevannet ved Mont Saint-Michel kan komme inn med en hastighet som tilsvarer en <strong>galopperende hest</strong> (ifølge lokal tradisjon). Moderne målinger viser ca. 6 km/t, men det er likevel nok til å overraske folk som vandrer på sanden.</li>
<li>Mont Saint-Michel ble brukt som <strong>fengsel</strong> under den franske revolusjonen og frem til 1863. Kallenavnet var «Bastille des Mers» (Havets Bastille). Victor Hugo kampanjerte for å gjenåpne det som monument.</li>
<li>Den nye gangbroen (2014) er designet for å la tidevannet flyte fritt rundt fjellet igjen, etter at den gamle demningen hadde ført til tilslamming. Målet er at Mont Saint-Michel skal bli en ekte øy igjen ved høyvann.</li>
<li><strong>Tombelaine</strong>: Den lille øya synlig fra Mont Saint-Michel var strategisk viktig under Hundreårskrigen. Engelskmennene okkuperte Tombelaine og brukte den som base for å beleire fjellet — men lyktes aldri. Dere kan SE øya engelskmennene satt på mens de forgjeves prøvde å ta abbediet. Den er nå et fuglereservat uten adgang.</li>
<li><strong>Scriptorium og bokproduksjon</strong>: Mont Saint-Michels scriptorium var et av middelalderens viktigste sentre for manuskriptproduksjon — munkene kopierte og bevarte kunnskap gjennom hele middelalderen. Under revolusjonen reddet en lokal bibliotekar over 200 middelalderske manuskripter fra å bli brent. Originalene finnes nå i Scriptorial d'Avranches (15 min unna).</li>
</ul>`
    },
    {
      type: "photo",
      title: "Fotomuligheter",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Klassisk oversiktsfoto fra fastlandet i gylden time. 🌅 <a href="https://www.google.com/search?tbm=isch&q=mont+saint+michel+golden+hour+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Ved lavvann: Gå ut på sanden (følg merkede stier!) for unike vinkler. <a href="https://www.google.com/search?tbm=isch&q=mont+saint+michel+low+tide+sand" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Fra gangveien/broen: Gjenspeiling i vannet. <a href="https://www.google.com/search?tbm=isch&q=mont+saint+michel+bridge+reflection" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Kveldsfoto: Opplyst om kvelden – spektakulært. <a href="https://www.google.com/search?tbm=isch&q=mont+saint+michel+night+illuminated" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Innenfra: Korsgangen i La Merveille med doble søyler. <a href="https://www.google.com/search?tbm=isch&q=mont+saint+michel+cloister+la+merveille" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Pontorson (9 km fra Mont Saint-Michel)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://all.accor.com/hotel/B261/index.en.shtml" target="_blank" rel="noopener">ibis Pontorson</a></strong> – Moderne (2018), 78 rom. Supercharger-lading tilgjengelig. <em>Ca. 65–85 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-montgomery.com/en/home/" target="_blank" rel="noopener">Best Western Hotel Montgomery</a></strong> – Herregård fra 1526, #1 i Pontorson. <em>Ca. 70–90 EUR/rom/natt.</em></li>
<li><strong><a href="http://legrillon-pontorson.com/" target="_blank" rel="noopener">Hôtel Le Grillon</a></strong> – Budsjettvalg med restaurant (crêpes, grillmat). Fra 47 EUR! <em>Ca. 47–70 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag ved Mont Saint-Michel",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.restaurantfermesaintmichel.com/" target="_blank" rel="noopener">La Ferme Saint-Michel</a></strong> – Gammel poldergård, lammeskulder stekt i brødbakerovn! "La Ferme"-meny 29 EUR for 3 retter. Gratis parkering + shuttle. <em>Ca. 26–40 EUR/pers.</em></li>
<li><strong><a href="https://restaurants.le-mont-saint-michel.com/en/our-restaurants/le-pre-sale/" target="_blank" rel="noopener">Le Pré Salé</a></strong> – Pré-salé lam fra saltengene i bukta. Grillede lammekotelletter med hvitløkskrem. Ikke på selve øya. <em>Ca. 45–60 EUR/pers.</em></li>
<li><strong><a href="https://www.hotel-mont-saintmichel.fr/en/restaurant.html" target="_blank" rel="noopener">Restaurant Duguesclin</a></strong> – INNE PÅ Mont Saint-Michel. Utsikt over bukta! "Maître Restaurateur"-tittel. Dyrere, men unik opplevelse. <em>Ca. 40–60 EUR/pers.</em></li>
</ul>
<p>🐑 Pré-salé-lam er obligatorisk! Lam som beiter på saltengene i bukta. Unngå La Mère Poulard (overpriset omelettshow).</p>`
    },
    {
      type: "gem",
      title: "Villedieu-les-Poêles — klokkestøperbyen",
      content: `<p>Halvveis mellom Bayeux og Mont Saint-Michel, rett langs ruten. En middelalderby kjent for kobbersmiing og et <strong>arbeidende klokkestøperi</strong> (Fonderie de Cloches Cornille-Havard) der store kirkeklokker støpes for hele verden. Man kan se hele prosessen. Klokkehåndverket har vart her siden 1100-tallet, grunnlagt av johannitterordenen.</p>`,
      detour: "Rett på ruten",
      duration: "30–45 min",
      cost: "Ca. 7 EUR",
    },
  ],
};
