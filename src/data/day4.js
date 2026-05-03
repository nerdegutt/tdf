// DAG 4
export const day4 = {
  day: 4,
  date: "16. mai",
  weekday: "Lørdag",
  from: "Rouen",
  to: "Rouen",
  km: 0,
  nights: 0,
  subtitle: "Heldagsutforskning",
  description: "Heldag i Rouen — bindingsverkshus, Jeanne d'Arc-spor, katedralen som inspirerte Monet og en av Europas best bevarte middelalderbyer.",
  intro: "Rouen er en av Frankrikes best bevarte middelalderbyer, med bindingsverkshus, gotiske kirker og smale gater som har overlevd århundrer. I dag har dere en hel dag til å utforske vikinghovedstaden som ble grunnlagt av Gange-Rolf, gå i Jeanne d'Arcs fotspor og oppdage makabre benhus, astronomiske klokker og en katedral som fascinerte Monet.",
  coords: { lat: 49.44, lng: 1.10 },
  stops: [],
  trivia: [
    "Rollo (Gange-Rolf) var ifølge norrøne kilder så stor at ingen hest kunne bære ham — derav navnet «Gange-Rolf» (Rolf som går). Han ble begravet med både et kors og et vikingsverd.",
    "Gustave Flaubert vokste opp i Rouen med utsikt til obduksjonssalen fra soverommet — faren var sjefkirurg på Hôtel-Dieu.",
    "Richard Løvehjertes hjerte havnet i Rouen fordi han elsket Normandie mest. Praksisen med å dele opp kongelige lik het «divisio corporis».",
  ],
  sections: [
    {
      type: "sights",
      title: "Severdigheter i Rouen",
      highlight: true,
      summary: "Vikingenes maktsentrum i 300 år — fra Rollos dåp til Richard Løvehjertes hjerte. Monet malte katedralen 30+ ganger, og Jeanne d'Arc ble brent her i 1431.",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'film', title: 'Jeanne d\'Arcs lidelse og død', year: 1928, relevance: 'Basert på rettsprotokollene fra Rouen 1431 — dere står på plassen der hun ble brent. Filmen ble gjenfunnet i Oslo!' },
        { type: 'book', title: 'Madame Bovary', author: 'Gustave Flaubert', relevance: 'Satt i Normandie av Rouen-fødte Flaubert — den berømte drosjescenen foregår i gatene dere går i.' },
        { type: 'book', title: 'Flauberts papegøye', author: 'Julian Barnes', relevance: 'En litterær detektivjakt gjennom Flauberts Rouen — perfekt følgesvenn mens dere utforsker byen hans.' },
      ],
      content: `<ul>
<li><strong>Cathédrale Notre-Dame de Rouen</strong>: Monet malte den 30+ ganger. Olav den Hellige ble døpt her (1014). Richard Løvehjertes hjerte er gravlagt her. Bygget 1030–1506. <a href="https://www.cathedrale-rouen.net/" target="_blank" rel="noopener">cathedrale-rouen.net</a></li>
<li><strong>Place du Vieux-Marché</strong>: Plassen der Jeanne d'Arc ble brent 30. mai 1431. Kors markerer bålplassen.</li>
<li><strong>Gros-Horloge</strong>: Astronomisk klokke fra 1389 på en bue over gaten. <a href="https://www.groshorloge.fr/" target="_blank" rel="noopener">groshorloge.fr</a></li>
<li><strong>Rollo-statuen</strong>: Grunnlegger av Normandie, forfader til Vilhelm Erobreren.</li>
<li><strong>Abbée Saint-Ouen</strong> (Rouen Abbey): Praktfull gotisk kirke. <strong>Spektakulær på kveldstid med belysning.</strong></li>
<li><strong>Aître Saint-Maclou</strong>: Middelaldersk benhus med makaber utsmykning (hodeskaller i træverk). Bygget etter Svartedauden. <a href="https://www.aitresaintmaclou.fr/" target="_blank" rel="noopener">aitresaintmaclou.fr</a></li>
<li><strong>Historial Jeanne d'Arc</strong>: Interaktivt museum i det gamle erkebispedømmet. <a href="https://www.historial-jeannedarc.fr/" target="_blank" rel="noopener">historial-jeannedarc.fr</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'film', title: 'Jeanne d\'Arcs lidelse og død (Dreyer)', year: 1928, relevance: 'Dreyers nærbilder av Jeanne er filmet som om dere sitter i rettssalen i Rouen — og filmen ble funnet igjen i Oslo.' },
        { type: 'book', title: 'Madame Bovary', author: 'Gustave Flaubert', relevance: 'Flaubert vokste opp med utsikt til obduksjonssalen fra soverommet — Rouen formet hele hans forfatterskap.' },
      ],
      content: `<ul>
<li><strong>Rollo</strong>, vikingen som grunnla Normandie i 911, var sannsynligvis norsk (fra Møre) eller dansk. Han fikk landområdet av den franske kongen Karl den Enfoldige i bytte mot at han sluttet å plyndre Paris. Avtalen ble kjent som <strong>Saint-Clair-sur-Epte-traktaten</strong>. Rollo lot seg døpe, men ifølge sagaen ga han gaver til både kristne og norrøne guder – bare for å være på den sikre siden.</li>
<li><strong>Jeanne d'Arc</strong> ble brent som kjetter i 1431, bare 19 år gammel. Under rettsaken ble hun bl.a. anklaget for å bære mannsklær – noe som ifølge kirkeretten var en alvorlig synd. Hun ble fullstendig rehabilitert i 1456 og helgenforklart i 1920.</li>
<li><strong>Richard Løvehjertes hjerte</strong> ble funnet igjen i katedralen i 2013 av arkeologer. Analyser viste at det var balsamert med kvikksølv, mynte og frankinsens. Resten av kroppen hans er begravet ved Fontevraud-abbediet i Loire-dalen.</li>
<li>Claude Monet malte Rouen-katedralen <strong>mer enn 30 ganger</strong> mellom 1892–94, alltid fra samme vinkel men til ulike tider på dagen. Serien er blant hans mest berømte verk og henger spredt på museer verden over.</li>
<li><strong>Aître Saint-Maclou</strong> ble bygget som massegrav og benhus under Svartedauden (1348), som drepte anslagsvis 75% av Rouens befolkning. Utskjæringene av hodeskaller, korslagte knokler og graveredskap i treverk er uhyggelig detaljerte.</li>
<li>Rouen var viktig for vikingene: Byen ble først plyndret i 841 og ble Normandies hovedstad. Navnet «Normandie» kommer fra «nordmennene» – dere er på hjemmebane!</li>
<li><strong>Gange-Rolf i dybden</strong>: Rollo var trolig sønn av Rognvald Eysteinsson, jarl av Møre. Da han lot seg døpe i 911, tok han navnet Robert — men ble begravet i katedralen med både et kors og et vikingsverd. Saint-Clair-sur-Epte-traktaten var et av middelalderens smarteste diplomatiske trekk: Karl den Enfoldige ga Rollo Normandie MOT at vikingene sluttet å plyndre Paris. Det fungerte — men etterkommerne (Vilhelm Erobreren) endte opp med å erobre England i stedet.</li>
<li><strong>Gustave Flaubert</strong> ble født i Rouen i 1821. «Madame Bovary» (1857) er satt i Normandie, og den berømte drosjescenen — der drosjen kjører rundt og rundt i Rouens gater — var så skandaløs at den førte til rettssak. Flaubert ble frikjent, men Rouens rykte som «kjedelig provinsby» var sementert for alltid.</li>
<li><strong>Dreyers mesterfilm</strong>: «Jeanne d'Arcs lidelse og død» (1928) er basert på de faktiske rettsprotokollene fra Rouen 1431 — og alle kopier ble antatt tapt til en komplett versjon ble funnet i et sykehus i <strong>Oslo</strong> i 1981. En norsk kobling til Rouens viktigste historie.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Fotomuligheter",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Katedralen i morgenlys (sørfasaden) – prøv å gjenskape Monets perspektiv. <a href="https://www.google.com/search?tbm=isch&q=rouen+cathedral+monet+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Gros-Horloge: Best på formiddagen. <a href="https://www.google.com/search?tbm=isch&q=gros+horloge+rouen+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Bindingsverkshusene i Rue Saint-Romain og Rue Eau de Robec. <a href="https://www.google.com/search?tbm=isch&q=rue+eau+de+robec+rouen" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Abbée Saint-Ouen på kvelden med belysning – magisk. <a href="https://www.google.com/search?tbm=isch&q=abbatiale+saint+ouen+rouen+night" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Aître Saint-Maclou: De makabre dekorasjonene er helt unike motiver. <a href="https://www.google.com/search?tbm=isch&q=aitre+saint+maclou+rouen+skulls" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Rouen (kosekveld!)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.lacouronne-rouen.fr/" target="_blank" rel="noopener">La Couronne</a></strong> – Frankrikes eldste vertshus (1345!). Julia Child spiste sitt første franske måltid her 1948. Canard à la Rouennaise er signaturretten. Julia Child-meny 68 EUR. <em>Ca. 50–85 EUR/pers.</em></li>
<li><strong><a href="https://www.rotomagus.eu/en/" target="_blank" rel="noopener">Rotomagus</a></strong> – Grillrestaurant med modnet kjøtt i Mibrasa-kullgrill. Black Angus, Blonde de Galicia. 4.6/5. Terrasse ved Saint-Maclou. <em>Ca. 30–50 EUR/pers.</em></li>
<li><strong>Auberge Saint-Maclou</strong> – 50+ år institusjon, ny energi fra 2022. Lam fra Mont-Saint-Michel, 110+ viner. Billigere enn forventet! <em>Ca. 20–30 EUR/pers.</em></li>
</ul>
<p>💡 La Couronne er kvelden for å kose seg! Historien er inkludert i prisen. Bestill lokal normandisk cider til maten!</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Frankrike (Normandie)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> til alle dere møter — kelnere, butikkansatte, hotellresepsjon. Etter 18:00: «Bonsoir». «Au revoir» når dere går.</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. Aldri «Garçon!» — bruk øyekontakt eller «Excusez-moi». «L'addition, s'il vous plaît» = regningen — den kommer ikke uoppfordret.</li>
<li><strong>Tipsing</strong>: Service er inkludert (15 %, lovpålagt). 1–5 EUR ekstra for god service er rikelig — bare å runde opp er greit.</li>
<li><strong>Normandie-tradisjoner</strong>: <strong>Cidre</strong> er like normalt som vin med måltider — bestill det til crêpes eller fisk. <strong>Calvados</strong> som digestif etter middagen er klassisk («un calva, s'il vous plaît»). «Trou normand» er en gammel skikk: et lite glass calvados midt i måltidet for å «åpne magen» til neste rett.</li>
<li><strong>Engelsk</strong>: Yngre = bra, eldre = variabelt. Rouen er turistby — greit dekket.</li>
<li><strong>Fransk-forsøk</strong>: Selv et dårlig «Merci, c'était délicieux» (takk, det var godt) får et ekte smil tilbake.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:00, middag fra 19:30. Mange restauranter stenger mellom måltidene.</li>
<li><strong>Mat tar tid</strong>: Service er bevisst rolig — det er en kvalitet, ikke et problem.</li>
</ul>`
    },
  ],
};
