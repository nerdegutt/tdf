export const tripMeta = {
  title: "Tour de France 2026",
  subtitle: "Reiseguide",
  dates: "13.–30. mai 2026",
  travelers: "Erlend & Bjørn Erik",
  totalKm: 5500,
  totalDays: 18,
  countries: 7,
  route: "Rakkestad → Tyskland → Belgia → Normandie → Bretagne → Atlanterhavskysten → Baskerland → Languedoc → Provence → Burgund → Alsace → Mosel → Hjem"
};

export const bookingOverview = [
  { what: "Ferje Rødby–Puttgarden", where: "Dag 1 + 18", why: "Billigere forhåndsbestilt", url: "https://www.scandlines.com/" },
  { what: "Mémorial de Waterloo", where: "Dag 3", why: "Tidsluker, slipper kø", url: "https://www.waterloo1815.be/" },
  { what: "Bayeux-tapetet", where: "Dag 5", why: "Alltid populært, tidsluke anbefales", url: "https://www.bayeuxmuseum.com/" },
  { what: "Mont Saint-Michel abbediet", where: "Dag 6", why: "Kan bli lange køer", url: "https://www.abbaye-mont-saint-michel.fr/" },
  { what: "Les Machines de l'Île (Nantes)", where: "Dag 7", why: "Kan selge ut (elefantturen)", url: "https://www.lesmachines-nantes.fr/" },
  { what: "Bar Nestor txuleta (San Seb.)", where: "Dag 9", why: "Kun 2 biff per dag – bestill kl. 13!", url: null },
  { what: "Cité de Carcassonne + slottet", where: "Dag 10", why: "Tidsluker i høysesong", url: "https://www.remparts-carcassonne.fr/" },
  { what: "Pont du Gard", where: "Dag 11", why: "Parkering bør bestilles i høysesong", url: "https://www.pontdugard.fr/" },
  { what: "Palais des Papes (Avignon)", where: "Dag 11–12", why: "Alltid populært", url: "https://www.palais-des-papes.com/" },
  { what: "Sénanque-abbediet", where: "Dag 12", why: "Begrenset kapasitet", url: "https://www.senanque.fr/" },
  { what: "Miniatur Wunderland (Hamburg)", where: "Dag 17", why: "Selger ofte ut! Tidsluker.", url: "https://www.miniatur-wunderland.com/" },
  { what: "Elbphilharmonie Plaza", where: "Dag 17", why: "Gratis, men tidsluker", url: "https://www.elbphilharmonie.de/" },
];

export const top10 = {
  history: [
    "D-dagskysten og American Cemetery",
    "Mont Saint-Michel",
    "Carcassonne",
    "Pont du Gard",
    "Pavepalasset i Avignon",
    "Rouen-katedralen (Olav, Richard, Jeanne d'Arc)",
    "Porta Nigra og det romerske Trier",
    "Waterloo",
    "Bayeux-tapetet",
    "Kölnerdomen",
  ],
  photo: [
    "Mont Saint-Michel",
    "Gordes/Luberon",
    "Pont du Gard",
    "Riquewihr",
    "San Sebastián fra Monte Igueldo",
    "American Cemetery, Omaha Beach",
    "Carcassonne",
    "Roussillon",
    "Speicherstadt, Hamburg",
    "Rouen by night",
  ],
  food: [
    "Pintxos-runde i San Sebastián",
    "Bouchon-lunsj i Lyon",
    "Bœuf Bourguignon i Dijon",
    "Jamón ibérico de bellota i San Sebastián",
    "Grillet sjømat og biff i La Rochelle",
    "Tarte flambée i Riquewihr",
    "Pré-salé lamme ved Mont Saint-Michel",
    "Charolais-biff og jambon persillé i Dijon",
    "Charcuterie-runder på Les Halles-markeder (Lyon, Narbonne, Avignon)",
    "Schwarzwälder Schinken og Mosel-Riesling i Trier",
  ],
};

export const days = [
  // DAG 1
  {
    day: 1,
    date: "13. mai",
    weekday: "Tirsdag",
    from: "Rakkestad",
    to: "Puttgarden-området",
    km: 700,
    nights: 1,
    subtitle: "Langkjøring",
    coords: { lat: 54.37, lng: 11.00 },
    stops: [
      { name: "Øresundsbroen", lat: 55.57, lng: 12.85, type: "photo" },
    ],
    sections: [
      {
        type: "photo",
        title: "Fotostopp",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Øresundsbroen (hvis den ruten): Spektakulær i ettermiddagslys. <a href="https://www.google.com/search?tbm=isch&q=%C3%B8resundsbroen+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Danske øyer: Flatt jordbrukslandskap i maisolen.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Heiligenhafen</strong> (15 min sør for Puttgarden): Strandhotel Heiligenhafen – enkelt, rimelig.</li>
<li><strong>Lübeck</strong> (1t sør): Pen hansaby, flere valg. Hotel an der Marienkirche, Ringhotel Jensen.</li>
<li>Puttgarden selv har svært begrenset utvalg.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Lübeck</strong> var hovedstaden i Hansaforbundet – middelalderens mektigste handelsnettverk som dominerte Østersjøen og Nordsjøen fra 1200- til 1600-tallet. Byen har hele 5 kirker med gotiske teglsteinsspir synlige i silhuetten.</li>
<li><strong>Fehmarn</strong> (øya Puttgarden ligger på) var stedet der Jimi Hendrix holdt sin siste konsert, 6. september 1970 – 12 dager før han døde. Det står et minnesmerke på øya.</li>
<li>Rødby–Puttgarden-ferja er en del av den historiske <strong>Fuglefluktslinjen</strong> (Vogelfluglinie), jernbane- og veiruten mellom Skandinavia og Sentral-Europa som har vært i bruk siden 1963.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Lübeck: Schiffergesellschaft</strong> – Historisk sjømannsrestaurant fra 1535. Tysk husmannskost i autentiske omgivelser. <a href="https://www.schiffergesellschaft.com/" target="_blank" rel="noopener">schiffergesellschaft.com</a></li>
<li>Heiligenhafen: Enkel fisk på havna.</li>
</ul>`
      },
    ],
  },
  // DAG 2
  {
    day: 2,
    date: "14. mai",
    weekday: "Onsdag",
    from: "Puttgarden",
    to: "Duisburg/Moers",
    km: 530,
    nights: 1,
    subtitle: "Kjøredag med stopp i Köln",
    coords: { lat: 51.45, lng: 6.63 },
    stops: [
      { name: "Köln", lat: 50.94, lng: 6.96, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Köln (1–2 timer)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Kölnerdomen</strong> (UNESCO): En av verdens største gotiske katedraler. Byggestart 1248, ferdig 1880. De Hellige Tre Kongers relikvieskrin. <a href="https://www.koelner-dom.de/" target="_blank" rel="noopener">koelner-dom.de</a></li>
<li><strong>Altstadt</strong>: Gamlebyen langs Rhinen. Fargerike fasader og bryggerier.</li>
<li><strong>Hohenzollernbrücke</strong>: Gangbro med kjærlighetslåser. Flott utsikt til domen.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto i Köln",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Domen fra Hohenzollernbrücke – det klassiske motivet. <a href="https://www.google.com/search?tbm=isch&q=k%C3%B6lner+dom+hohenzollernbr%C3%BCcke+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Rhinen med Altstadt-fasadene. <a href="https://www.google.com/search?tbm=isch&q=k%C3%B6ln+altstadt+rhein+colorful+houses" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Triangelturm (høyre Rhin-side): Utsiktsplattform med panorama. <a href="https://www.google.com/search?tbm=isch&q=k%C3%B6ln+triangle+panorama+view" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Kölnerdomen</strong> sto ufullført i over 300 år. Da byggingen stoppet rundt 1560, sto det en primitiv kran på det uferdige sørtårnet – den ble stående som en del av byens silhuett helt til byggearbeidet ble gjenopptatt i 1842.</li>
<li>Köln ble grunnlagt av romerne som <strong>Colonia Claudia Ara Agrippinensium</strong> i år 50 e.Kr. – oppkalt etter keiserinne Agrippina den yngre, som var født her. Bynavnet «Köln» kommer direkte fra «Colonia».</li>
<li>Under WWII ble Köln bombet <strong>262 ganger</strong>. 95% av sentrum ble ødelagt. Kölnerdomen ble truffet 14 ganger, men sto fortsatt – delvis fordi de allierte brukte den som navigasjonspunkt og unngikk direkte angrep.</li>
<li><strong>Eau de Cologne</strong> (4711) ble oppfunnet her i 1709 av Giovanni Maria Farina. Butikken eksisterer fortsatt i Glockengasse.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting: Duisburg/Moers",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Van der Valk Hotel Moers</strong> (som dere har notert): Solid, god parkering. Perfekt for gjennomreise.</li>
<li>Alternativ: Hotel &amp; Restaurant Marjan, Duisburg.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Köln: Früh am Dom</strong> – Klassisk Kölsch-bryggeri ved domen. Prøv Kölsch-øl og Himmel un Ääd (blodpudding med eple/potetmos). <a href="https://www.frueh-am-dom.de/" target="_blank" rel="noopener">frueh-am-dom.de</a></li>
<li>Moers: Schiffchen Neukirchen-Vluyn – Tysk kjøkken, bra Schnitzel og biff.</li>
</ul>`
      },
    ],
  },
  // DAG 3
  {
    day: 3,
    date: "15. mai",
    weekday: "Torsdag",
    from: "Duisburg",
    to: "Rouen",
    km: 500,
    nights: 2,
    subtitle: "Lang kjøredag med historisk stopp",
    coords: { lat: 49.44, lng: 1.10 },
    stops: [
      { name: "Waterloo", lat: 50.71, lng: 4.41, type: "sight" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Waterloo, Belgia (2–3 timer)",
        bookingWarning: "Mémorial de Waterloo – tidsluker anbefales.",
        bookingUrl: "https://www.waterloo1815.be/",
        content: `<ul>
<li><strong>Butte du Lion</strong> (Løvehøyden): 226 trinn, panoramautsikt over slagmarken. Bygget 1820–26.</li>
<li><strong>Mémorial de Waterloo</strong>: Moderne interaktivt museum med 4D-kino av slaget.</li>
<li><strong>Hougoumont Farm</strong>: Den befestede gården – nøkkelen til Wellingtons forsvar. Restaurert.</li>
<li>For Bjørn Erik: Her endte Napoleons hundredagersregime 18. juni 1815.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Panorama fra Butte du Lion – hele slagmarken. <a href="https://www.google.com/search?tbm=isch&q=butte+du+lion+waterloo+panorama" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Hougoumont: Atmosfæriske gamle gårdsbygninger. <a href="https://www.google.com/search?tbm=isch&q=hougoumont+farm+waterloo" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Waterloo-myter:</strong> Napoleon hadde faktisk hemoroider under slaget, noe som kan ha gjort at han ikke red ut for å rekognosere terrenget personlig om morgenen. Historikere diskuterer fortsatt om dette påvirket utfallet.</li>
<li><strong>Butte du Lion</strong> ble bygget av Kong Willem I av Nederland for å markere stedet der hans sønn, Prinsen av Oranien, ble såret. Wellington var rasende – han mente haugen ødela terrenget han hadde kjempet på: <em>«They have altered my field of battle!»</em></li>
<li>Slaget varte bare <strong>én dag</strong> (18. juni 1815) men kostet anslagsvis 50 000 døde og sårede – totalt fra begge sider. Det var et av de blodigste enkeltslagene i europeisk historie til da.</li>
<li>Etter Waterloo ble enorme mengder tenner trukket fra de falne soldatene og solgt som <strong>«Waterloo teeth»</strong> til tannprotesemaker i hele Europa. De var svært ettertraktet fordi de kom fra unge, friske menn.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i Rouen (2 netter: 15.–16. mai)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Comfort Hotel Alba Rouen</strong> (som notert): Sentralt ved katedralen, parkeringsmuligheter.</li>
<li><strong>Hôtel de Bourgtheroulde</strong>: Mer eksklusivt, historisk bygning fra 1500-tallet. Sjekk pris – kan være verdt spleiselaget. <a href="https://www.hotel-bourgtheroulde.com/" target="_blank" rel="noopener">hotel-bourgtheroulde.com</a></li>
<li>Mercure Rouen Centre Cathédrale: Solid middelklasse.</li>
</ul>`
      },
    ],
  },
  // DAG 4
  {
    day: 4,
    date: "16. mai",
    weekday: "Fredag",
    from: "Rouen",
    to: "Rouen",
    km: 0,
    nights: 0,
    subtitle: "Heldagsutforskning",
    coords: { lat: 49.44, lng: 1.10 },
    stops: [],
    sections: [
      {
        type: "sights",
        title: "Severdigheter i Rouen",
        bookingWarning: null,
        bookingUrl: null,
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
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Rollo</strong>, vikingen som grunnla Normandie i 911, var sannsynligvis norsk (fra Møre) eller dansk. Han fikk landområdet av den franske kongen Karl den Enfoldige i bytte mot at han sluttet å plyndre Paris. Avtalen ble kjent som <strong>Saint-Clair-sur-Epte-traktaten</strong>. Rollo lot seg døpe, men ifølge sagaen ga han gaver til både kristne og norrøne guder – bare for å være på den sikre siden.</li>
<li><strong>Jeanne d'Arc</strong> ble brent som kjetter i 1431, bare 19 år gammel. Under rettsaken ble hun bl.a. anklaget for å bære mannsklær – noe som ifølge kirkeretten var en alvorlig synd. Hun ble fullstendig rehabilitert i 1456 og helgenforklart i 1920.</li>
<li><strong>Richard Løvehjertes hjerte</strong> ble funnet igjen i katedralen i 2013 av arkeologer. Analyser viste at det var balsamert med kvikksølv, mynte og frankinsens. Resten av kroppen hans er begravet ved Fontevraud-abbediet i Loire-dalen.</li>
<li>Claude Monet malte Rouen-katedralen <strong>mer enn 30 ganger</strong> mellom 1892–94, alltid fra samme vinkel men til ulike tider på dagen. Serien er blant hans mest berømte verk og henger spredt på museer verden over.</li>
<li><strong>Aître Saint-Maclou</strong> ble bygget som massegrav og benhus under Svartedauden (1348), som drepte anslagsvis 75% av Rouens befolkning. Utskjæringene av hodeskaller, korslagte knokler og graveredskap i treverk er uhyggelig detaljerte.</li>
<li>Rouen var viktig for vikingene: Byen ble først plyndret i 841 og ble Normandies hovedstad. Navnet «Normandie» kommer fra «nordmennene» – dere er på hjemmebane!</li>
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
        title: "Mat i Rouen",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Navio</strong> (som notert, 4.7 stjerner): Moderne fransk, fine priser. <a href="https://www.navio-restaurant.com/" target="_blank" rel="noopener">navio-restaurant.com</a></li>
<li><strong>Les Fils à Maman</strong> (som notert): «Mammas mat»-konsept. God verdi.</li>
<li><strong>La Couronne</strong>: Frankrikes eldste gjestgiveri (siden 1345!). Julia Child spiste sitt første franske måltid her. <a href="https://www.lacouronne.com.fr/" target="_blank" rel="noopener">lacouronne.com.fr</a></li>
<li><strong>Le Bistrot du Vieux Marché</strong>: God entrecote, rett ved Jeanne d'Arc-plassen. 🥩 <a href="https://www.google.com/search?q=le+bistrot+du+vieux+march%C3%A9+rouen" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>KJØTT-TIP:</strong> Normandie er kjent for fantastisk lamme og kalv. Prøv en côte de veau normande (kalvekotelett i kremsaus).</li>
<li><strong>SKINKE:</strong> Jambon de Bayonne selges overalt i Normandie – tørrsaltet skinke fra Baskerland som er Frankrikes svar på parmaskinke. Perfekt som apéro med et glass cider.</li>
<li><strong>DRIKKE:</strong> Normandisk cider og calvados (eplebrannvin). Prøv begge!</li>
</ul>`
      },
    ],
  },
  // DAG 5
  {
    day: 5,
    date: "17. mai",
    weekday: "Lørdag",
    from: "Rouen",
    to: "Bayeux",
    km: 140,
    nights: 1,
    subtitle: "🇳🇴 Gratulerer med dagen!",
    coords: { lat: 49.28, lng: -0.70 },
    stops: [
      { name: "Omaha Beach", lat: 49.37, lng: -0.87, type: "sight" },
      { name: "Pointe du Hoc", lat: 49.40, lng: -0.99, type: "sight" },
    ],
    sections: [
      {
        type: "sights",
        title: "Bayeux sentrum",
        bookingWarning: "Bayeux-tapetet – alltid populært, tidsluke anbefales sterkt!",
        bookingUrl: "https://www.bayeuxmuseum.com/",
        content: `<ul>
<li><strong>Bayeux-tapetet</strong> (Musée de la Tapisserie): 70 meter langt broderi fra ca. 1070 – Vilhelm Erobrerens invasjon av England 1066. UNESCO Memory of the World. Regn 1,5–2 timer.</li>
<li><strong>Cathédrale Notre-Dame de Bayeux</strong>: Gotisk/romansk. Krypten fra 1000-tallet.</li>
<li><strong>TIGER-tanken</strong>: Ved Museum of the Battle of Normandy – en sjelden overlevende.</li>
<li><strong>Museum of the Battle of Normandy</strong>: Grundig D-dags-museum. <a href="https://www.memorial-caen.fr/" target="_blank" rel="noopener">memorial-caen.fr</a></li>
<li><strong>Bayeux britisk krigskirkegård</strong>: Største britiske WWII-kirkegård i Frankrike. 4648 graver.</li>
</ul>`
      },
      {
        type: "sights",
        title: "Ettermiddag: D-dagskysten (ca. 20 min kjøring)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Omaha Beach</strong>: Stranden der amerikanske styrker gikk i land 6. juni 1944.</li>
<li><strong>Colleville-sur-Mer (American Cemetery)</strong>: 9387 hvite kors på klippen over Omaha Beach. Dypt gripende. <a href="https://www.abmc.gov/normandy" target="_blank" rel="noopener">abmc.gov/normandy</a></li>
<li><strong>Pointe du Hoc</strong>: Klippen der US Rangers klatret opp. Kratere fra bombingen intakte.</li>
<li><strong>Longues-sur-Mer batteri</strong>: Tyske kanonstillinger med intakte kanoner.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Bayeux-tapetet</strong> er egentlig ikke et teppe, men et <strong>broderi</strong> – 70 meter langt og bare 50 cm høyt. Det er trolig laget i England (Canterbury) på bestilling av biskop Odo av Bayeux, Vilhelm Erobrerens halvbror. Tapetet inneholder 623 mennesker, 202 hester, 55 hunder og 505 andre dyr.</li>
<li>Bayeux var en av de første franske byene som ble frigjort på D-dagen – den 7. juni 1944, bare én dag etter landgangen. Den unngikk nesten all krigsskade, noe som gjør gamlebyen uvanlig intakt.</li>
<li><strong>Omaha Beach</strong> var kodenavn. De fem D-dagsstrendene ble oppkalt etter amerikanske og britiske kodenavn: Utah, Omaha (amerikanske), Gold, Juno (kanadisk), Sword (britisk).</li>
<li>Ved <strong>Pointe du Hoc</strong> klatret 225 Rangers opp 30 meter høye klipper med tau og stiger under intens ild. Etter to dager med kamp var bare 90 mann stridsdyktige.</li>
<li><strong>American Cemetery</strong>: Alle korsene er laget av italiensk Lasa-marmor. De er orientert slik at de «ser» vestover mot Amerika. Det eneste unntaket er Brig. Gen. Theodore Roosevelt Jr.s kors – som ser mot sine menn, østover.</li>
<li>Været nesten stoppet D-dagen: Eisenhower utsatte invasjonen med én dag pga. storm. Meteorolog James Stagg identifiserte et kort værvindu 6. juni. Hadde det blitt utsatt igjen, ville neste mulige dato vært <strong>19. juni</strong> – da det kom en voldsom storm som ville gjort invasjonen umulig.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto på D-dagskysten",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>American Cemetery: Hvite kors i rekker mot havet – gylden time om kvelden. 🌅 <a href="https://www.google.com/search?tbm=isch&q=american+cemetery+normandy+colleville+sunset" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Omaha Beach ved lavvann: Enormt strandstrekke. Ved Arromanches: rester av «Mulberry harbour». <a href="https://www.google.com/search?tbm=isch&q=omaha+beach+normandy+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Pointe du Hoc: Kraterlandskapet med havutsikt. <a href="https://www.google.com/search?tbm=isch&q=pointe+du+hoc+craters+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Longues-sur-Mer: Kanonene mot himmel og hav. <a href="https://www.google.com/search?tbm=isch&q=longues+sur+mer+battery+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i Bayeux (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Le Quarante Neuf</strong> (som notert): Utenfor sentrum, delikat hotell+restaurant. Sjekk pris.</li>
<li><strong>Hôtel Reine Mathilde</strong>: Sentralt, sjarmerende, rimelig. Ved katedralen.</li>
<li>Le Moulin de la Galette: Både hotell og restaurant.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat i Bayeux",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Le Moulin de la Galette</strong> (notert): Galettes (bokhvetepannekaker). Perfekt lunsj.</li>
<li><strong>Le Quarante Neuf</strong> (notert): Sjekk middagsmenyene.</li>
<li><strong>La Rapiere</strong>: Tradisjonell normandisk i bindingsverksbygning fra 1400-tallet. <a href="https://www.google.com/search?q=la+rapiere+bayeux+restaurant" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>SKINKE:</strong> Se etter lokale charcuterier – andouille de Vire (røkt pølse) og rillettes er normandiske spesialiteter for kjøttelskere.</li>
<li><strong>🇳🇴 17. MAI-FEIRING:</strong> Kjøp normandisk cider og skål ved solnedgang over Omaha Beach!</li>
</ul>`
      },
    ],
  },
  // DAG 6
  {
    day: 6,
    date: "18. mai",
    weekday: "Søndag",
    from: "Bayeux",
    to: "Mont Saint-Michel",
    km: 130,
    nights: 1,
    subtitle: "Kort kjøring til et av verdens mest ikoniske steder",
    coords: { lat: 48.64, lng: -1.51 },
    stops: [],
    sections: [
      {
        type: "sights",
        title: "Mont Saint-Michel",
        bookingWarning: "Abbediet – kan bli lange køer.",
        bookingUrl: "https://www.abbaye-mont-saint-michel.fr/",
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
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Ifølge legenden beordret <strong>erkeengelen Mikael</strong> biskop Aubert av Avranches til å bygge et kapell på klippen i 708. Aubert ignorerte det to ganger – til engelen brente et hull i hodeskallen hans med fingeren. Auberts hodeskalle (med hull!) oppbevares i Saint-Gervais-kirken i Avranches.</li>
<li>Under <strong>Hundreårskrigen</strong> holdt en garnison på bare <strong>119 riddere</strong> Mont Saint-Michel mot engelske beleiringer i over 30 år. Den ble aldri tatt – den eneste plassen i Normandie som ikke falt.</li>
<li>Tidevannet ved Mont Saint-Michel kan komme inn med en hastighet som tilsvarer en <strong>galopperende hest</strong> (ifølge lokal tradisjon). Moderne målinger viser ca. 6 km/t, men det er likevel nok til å overraske folk som vandrer på sanden.</li>
<li>Mont Saint-Michel ble brukt som <strong>fengsel</strong> under den franske revolusjonen og frem til 1863. Kallenavnet var «Bastille des Mers» (Havets Bastille). Victor Hugo kampanjerte for å gjenåpne det som monument.</li>
<li>Den nye gangbroen (2014) er designet for å la tidevannet flyte fritt rundt fjellet igjen, etter at den gamle demningen hadde ført til tilslamming. Målet er at Mont Saint-Michel skal bli en ekte øy igjen ved høyvann.</li>
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
        title: "Overnatting (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Hotel Vert</strong> eller <strong>Hotel Saint-Aubert</strong> (som notert): På fastlandet, rimelige. Ta buss ut.</li>
<li>Les Prés Salés: Litt hyggeligere.</li>
<li><strong>TIPS:</strong> Sjekk inn, ta buss ut, tilbring ettermiddag OG kveld på fjellet. Avsett 3–4 timer totalt.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>La Mère Poulard</strong> (på fjellet): Legendarisk omelettrestaurant siden 1888. Berømt soufflé-omelett over åpen ild. Dyrt, men en opplevelse. <a href="https://www.merepoulard.com/" target="_blank" rel="noopener">merepoulard.com</a></li>
<li>På fastlandet: Enklere og rimeligere. Ferme Saint-Joseph.</li>
<li><strong>SPESIALITET:</strong> Pré-salé lamme – lam som har beitet på de salte engene. Helt unikt.</li>
</ul>`
      },
    ],
  },
  // DAG 7
  {
    day: 7,
    date: "19. mai",
    weekday: "Mandag",
    from: "Mont Saint-Michel",
    to: "La Rochelle",
    km: 320,
    nights: 1,
    subtitle: "Sørover langs Atlanterhavskysten",
    coords: { lat: 46.16, lng: -1.15 },
    stops: [
      { name: "Nantes", lat: 47.22, lng: -1.55, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Nantes (1–2 timer)",
        bookingWarning: "Les Machines de l'Île – elefantturen kan selge ut!",
        bookingUrl: "https://www.lesmachines-nantes.fr/",
        content: `<ul>
<li><strong>Château des Ducs de Bretagne</strong>: Massiv borg fra 1400-tallet. Gratis borggård og voller. <a href="https://www.chateaunantes.fr/" target="_blank" rel="noopener">chateaunantes.fr</a></li>
<li><strong>Les Machines de l'Île</strong>: Gigantiske mekaniske dyr – bl.a. en 12m høy elefant som GÅR! Inspirert av Jules Verne (født i Nantes). Perfekt fotoobjekt.</li>
<li><strong>Passage Pommeraye</strong>: Overdekt handlegate fra 1843. Vakker arkitektur.</li>
</ul>`
      },
      {
        type: "sights",
        title: "La Rochelle",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Vieux Port</strong>: De ikoniske havnetårnene Tour Saint-Nicolas og Tour de la Chaîne. 1300-tallet. <a href="https://www.larochelle-tourisme.com/" target="_blank" rel="noopener">larochelle-tourisme.com</a></li>
<li><strong>Tour de la Lanterne</strong>: Fyrtårn og fengsel fra 1445. Fangegraffiti på veggene.</li>
<li><strong>Arkadene</strong>: Overdekkede bueganger langs hovedgatene.</li>
<li><strong>Historie:</strong> Richelieus beleiring av hugenottene 1627–28.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Nantes-ediktet</strong> (1598): Henrik IV signerte her det berømte ediktet som ga hugenottene (franske protestanter) religionsfrihet. Det ble opphevet av Ludvig XIV i 1685, noe som førte til masseflukten av franske protestanter til hele Europa (inkludert noen til Norge).</li>
<li><strong>Jules Verne</strong> ble født i Nantes i 1828. Han rømte hjemmefra som 11-åring for å bli sjømann – faren hentet ham igjen. Opplevelsene fra havnebyen inspirerte ham til å skrive science fiction.</li>
<li><strong>La Rochelle-beleiringen</strong> (1627–28) er en av historiens mest brutale: Kardinal Richelieu bygde en 1,4 km lang steindemning tvers over havnen for å sulte ut hugenottene. Av byens 27 000 innbyggere overlevde bare ca. 5 000. Alexandre Dumas beskrev beleiringen i «De tre musketerer».</li>
<li>La Rochelle var en av de viktigste <strong>slavehamnene</strong> i Frankrike. Byen var sentral i trekantshandelen på 1700-tallet. Musée du Nouveau Monde dokumenterer denne historien.</li>
<li>Havnetårnene i La Rochelle ble koblet sammen med en massiv <strong>kjetting</strong> som kunne strekkes over havneåpningen for å stenge ute fiendtlige skip. Tour de la Chaîne (Kjedetårnet) har navn etter denne.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto i La Rochelle",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Havnetårnene ved solnedgang med refleksjoner. 🌅 <a href="https://www.google.com/search?tbm=isch&q=la+rochelle+towers+vieux+port+sunset" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Arkadene: Repeterende buer, lys og skygge. <a href="https://www.google.com/search?tbm=isch&q=la+rochelle+arcades+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Tour de la Lanterne: Fangegraffiti som unike motiver. <a href="https://www.google.com/search?tbm=isch&q=tour+de+la+lanterne+graffiti+prisoners" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>B&amp;B Hotel La Rochelle Centre</strong> (som notert): Budsjett, sentralt.</li>
<li>Hôtel Saint-Nicolas: Mer sjarm, nær havna.</li>
<li>Un Hôtel en Ville: Boutique i gamlebyen.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat i La Rochelle",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>SJØMAT:</strong> La Rochelle er sjømatby. Grillede gambas (store reker) og grillet fisk er utmerket – dere trenger ikke gå for østersfat om det ikke frister.</li>
<li><strong>Les Flots</strong>: Rett på havna, fantastisk sjømat. Grillet fisk og reker. <a href="https://www.les-flots.com/" target="_blank" rel="noopener">les-flots.com</a></li>
<li><strong>L'Entrepôt</strong>: Populært blant lokale. God biff og entrecote! 🥩 <a href="https://www.google.com/search?q=l%27entrep%C3%B4t+restaurant+la+rochelle" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>Marché Central</strong> (morgenmarked): Charcuterie, lokale kjøttprodukter, frukt og grønnsaker. Fantastisk for smaking og food-foto.</li>
</ul>`
      },
    ],
  },
  // DAG 8
  {
    day: 8,
    date: "20. mai",
    weekday: "Tirsdag",
    from: "La Rochelle",
    to: "San Sebastián",
    km: 420,
    nights: 2,
    subtitle: "Inn i Baskerland!",
    coords: { lat: 43.32, lng: -1.98 },
    stops: [
      { name: "Bordeaux", lat: 44.84, lng: -0.58, type: "city" },
      { name: "Biarritz", lat: 43.48, lng: -1.56, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Mulige stopp på veien",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Bordeaux</strong> (ca. halvveis): Verdensarvlistet havneområde. Place de la Bourse med <strong>Miroir d'Eau</strong> (verdens største reflekterende basseng). Stopp for lunsj + 1 times vandring. <a href="https://www.bordeaux-tourisme.com/" target="_blank" rel="noopener">bordeaux-tourisme.com</a></li>
<li><strong>Biarritz</strong> (1t før San Seb.): Elegant badeby. Rocher de la Vierge – statue på klippe med gangbro.</li>
<li><strong>Saint-Jean-de-Luz</strong> (30 min før San Seb.): Sjarmerende baskisk fiskerlandsby. Ludvig XIV giftet seg her 1660.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Bordeaux</strong> var engelsk i 300 år (1154–1453)! Englands Plantagenet-konger styrte Aquitaine, og Bordeaux var deres viktigste franske by. Vinhandelen med England blomstret – «claret» (rødvin fra Bordeaux) ble nasjonaldrikken i England og er det til dels fortsatt.</li>
<li><strong>Miroir d'Eau</strong> i Bordeaux (2006) bruker bare 2 cm vann over granittflater, men skaper en perfekt speiling av Place de la Bourse. Det tømmes med jevne mellomrom og erstattes av tåke – designet av Michel Corajoud.</li>
<li><strong>Biarritz</strong> ble et fashionabelt feriested da keiserinne Eugénie (Napoleon IIIs kone) begynte å feriere her på 1850-tallet. Byens berømte Hôtel du Palais er det tidligere keiserpaaret.</li>
<li><strong>Saint-Jean-de-Luz</strong>: Kirken Église Saint-Jean-Baptiste er der Ludvig XIV giftet seg med den spanske prinsessen Maria Teresa i 1660. Døren kongen gikk gjennom ble deretter <strong>murt igjen</strong> – og er det fortsatt.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i San Sebastián (2 netter: 20.–21. mai)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Pensión Bellas Artes</strong>: Sentralt i gamlebyen, rimelig. Book tidlig!</li>
<li><strong>Hotel Parma</strong>: Ved La Concha, god middelklasse. Noen rom med buktutsikt. <a href="https://www.hotelparma.com/" target="_blank" rel="noopener">hotelparma.com</a></li>
<li><strong>Pensión Edorta</strong>: I Parte Vieja, budsjett-vennlig.</li>
<li>⚠️ San Sebastián kan være dyrt. Pensiones gir best verdi.</li>
</ul>`
      },
    ],
  },
  // DAG 9
  {
    day: 9,
    date: "21. mai",
    weekday: "Onsdag",
    from: "San Sebastián",
    to: "San Sebastián",
    km: 0,
    nights: 0,
    subtitle: "Turens matmessige høydepunkt!",
    coords: { lat: 43.32, lng: -1.98 },
    stops: [],
    sections: [
      {
        type: "sights",
        title: "Severdigheter",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>La Concha-stranden</strong>: En av Europas vakreste bystrander.</li>
<li><strong>Parte Vieja</strong> (Gamlebyen): Trange gater fulle av pintxos-barer. Basílica de Santa María del Coro.</li>
<li><strong>Monte Urgull</strong>: Vandring til festningen Castillo de la Mota. Gratis, panoramautsikt.</li>
<li><strong>Monte Igueldo</strong>: Gammel kabelbane (1912) til toppen for DEN klassiske utsikten. <a href="https://www.monteigueldo.es/" target="_blank" rel="noopener">monteigueldo.es</a></li>
<li><strong>Peine del Viento</strong> (Vindkammene): Eduardo Chillidas skulpturer ved havets kant.</li>
<li><a href="https://www.sansebastianturismoa.eus/" target="_blank" rel="noopener">sansebastianturismoa.eus</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>San Sebastián ble brent ned</strong> nesten fullstendig 31. august 1813 av britiske og portugisiske tropper under Napoleonskrigene. Bare én gate i gamlebyen (Calle 31 de Agosto – oppkalt etter datoen) overlevde. Resten av Parte Vieja er gjenoppbygd.</li>
<li>Byen har <strong>flest Michelin-stjerner per kvadratmeter</strong> i verden. Bare i San Sebastián og omegn finnes det en håndfull tresstjerners-restauranter. Pintxos-kulturen har likevel holdt seg upretensiøs.</li>
<li><strong>Baskisk</strong> (Euskara) er et av Europas store mysterier. Det er ikke beslektet med noen andre kjente språk i verden – det er et såkalt «isolatspråk». Det kan ha overlevd fra før de indoeuropeiske folkevandringene, altså potensielt Europas eldste levende språk.</li>
<li><strong>Txuleta</strong> (baskisk T-bone/chuletón): Baskerne har en nesten religiøs tilnærming til biff. Kjøttet er fra eldre melkekyr (vaca vieja/rubia gallega), dry-aged i opptil 60 dager, og grilles over eikekull. Saltes kun med grovt havsalt. Ingen pinsettmat – bare respekt for råvaren.</li>
<li><strong>Pintxos-kulturen</strong> i San Sebastián startet i <strong>gastronomiske selskaper</strong> (sociedades gastronómicas) – private matklubber kun for menn som ble grunnlagt på 1800-tallet. Det finnes fortsatt over 100 slike klubber i byen.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto i San Sebastián",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Monte Igueldo: La Concha-bukta i gylden time = magi. 🌅 <a href="https://www.google.com/search?tbm=isch&q=monte+igueldo+la+concha+bay+sunset+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Pintxos-bardiskene: Fargerik mat = perfekt food-foto. <a href="https://www.google.com/search?tbm=isch&q=san+sebastian+pintxos+bar+food+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Peine del Viento: Skulpturer med bølger og sprøyt. <a href="https://www.google.com/search?tbm=isch&q=peine+del+viento+chillida+waves+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>La Concha fra strandpromenaden ved solnedgang. <a href="https://www.google.com/search?tbm=isch&q=la+concha+san+sebastian+sunset+promenade" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "food",
        title: "Mat – Turens høydepunkt! 🥇",
        bookingWarning: null,
        bookingUrl: null,
        content: `<h4>Pintxos-runde i Parte Vieja</h4>
<p>Gå fra bar til bar, 1–2 pintxos + glass txakoli (baskisk hvitvin) på hver:</p>
<ul>
<li><strong>La Cuchara de San Telmo</strong>: Kreative varmretter. Foie gras og biff-kinn er legendarisk. <a href="https://www.lacucharadesantelmo.com/" target="_blank" rel="noopener">lacucharadesantelmo.com</a></li>
<li><strong>Gandarias</strong>: Perfekt biff og tradisjonelle pintxos. 🥩 <a href="https://www.restaurantegandarias.com/" target="_blank" rel="noopener">restaurantegandarias.com</a></li>
<li><strong>Bar Nestor</strong>: Berømt txuleta (baskisk T-bone). ⚠️ <strong>Kun 2 stk per dag – bestill kl. 13!</strong></li>
<li><strong>A Fuego Negro</strong>: Moderne, kreative pintxos. Visuelt imponerende. <a href="https://www.afuegonegro.com/" target="_blank" rel="noopener">afuegonegro.com</a></li>
<li><strong>Borda Berri</strong>: Risotto-pintxos og iberisk skinke.</li>
</ul>
<h4>🍖 Skinke-paradis</h4>
<p>Baskerland og Nord-Spania er skinke-himmelriket. <strong>Jamón ibérico de bellota</strong> (eikenøttforet iberisk svin, lufttørket i 36+ måneder) er verdens fineste skinke. Dere finner den på nesten alle pintxos-barene, men for den beste opplevelsen: kjøp noen skiver fersk-skåret hos en lokal charcutería og spis med brød og txakoli. <strong>Jamón de Bayonne</strong> (fransk baskisk) er også utmerket – og mye rimeligere.</p>
<h4>🥩 Biff</h4>
<p>Baskisk txuleta (dry-aged, grillet over kull) er noe av det beste som finnes. Gandarias eller Elkano i Getaria (30 min unna) for fisk.</p>
<h4>Txakoli</h4>
<p>Lokal lett, perlende hvitvin som helles fra høyde. Obligatorisk.</p>`
      },
    ],
  },
  // DAG 10
  {
    day: 10,
    date: "22. mai",
    weekday: "Torsdag",
    from: "San Sebastián",
    to: "Narbonne",
    km: 490,
    nights: 1,
    subtitle: "Lang kjøredag med essensielt stopp",
    coords: { lat: 43.18, lng: 3.00 },
    stops: [
      { name: "Carcassonne", lat: 43.21, lng: 2.35, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Carcassonne (2–3 timer)",
        bookingWarning: "Château Comtal og rempartene – tidsluker i høysesong.",
        bookingUrl: "https://www.remparts-carcassonne.fr/",
        content: `<ul>
<li><strong>Europas best bevarte middelalderby.</strong> Doble ringmurer, 52 tårn. UNESCO. Bjørn Erik vil ELSKE dette.</li>
<li>Restaurert av Viollet-le-Duc på 1800-tallet. Gå rundt på murene.</li>
<li><strong>Comte-slottet</strong>: Festningen inne i festningen. Museum og utsikt.</li>
<li><strong>Basilique Saints-Nazaire</strong>: Gotisk/romansk kirke med fantastiske glassmalerier.</li>
<li><a href="https://www.tourism-carcassonne.co.uk/" target="_blank" rel="noopener">carcassonne-tourisme.com</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Carcassonne og katarene</strong>: Byen var et senter for katarismen – en kristen «kjettersk» bevegelse på 1100–1200-tallet. Pave Innocens III utlyste det <strong>albigensiske korstoget</strong> (1209) for å utrydde dem. Carcassonne falt i 1209 etter en to ukers beleiring. Lederen Simon de Montfort ble den nye herren.</li>
<li>Under beleiringen av Carcassonne i 1209 sa pavens legat angivelig de berømte ordene: <em>«Drep dem alle, Gud vil kjenne sine egne»</em> – da han ble spurt hvordan man skulle skille katarer fra katolikker. (Sitatet er muligens apokryft, men det har blitt stående.)</li>
<li><strong>Viollet-le-Duc</strong> sin restaurering av Carcassonne (1853–79) er kontroversiell blant historikere. Han la til skifertakene med spisse tårn, som gir borgen sitt eventyr-aktige utseende. Opprinnelig hadde tårnene flate terracotta-tak i sørfransk stil. Noen mener han «Disneyfiserte» borgen – men uten ham hadde den trolig blitt revet.</li>
<li><strong>Narbonne</strong> var den første romerske kolonien i Gallia, grunnlagt <strong>118 f.Kr.</strong> – altså eldre enn både Lyon og Paris som romerske byer. Byen var hovedstad i provinsen Gallia Narbonensis og en av de viktigste byene i det vestlige Romerriket.</li>
<li><strong>Via Domitia</strong> (synlig på torget i Narbonne) var den aller første romerske veien bygget i Gallia, anlagt av Gnaeus Domitius Ahenobarbus i 118 f.Kr. Den gikk fra Rhône til Spania – og dere kjører omtrent samme rute!</li>
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
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Cathédrale Saint-Just-et-Saint-Pasteur</strong>: Kun koret fullført, men Frankrikes TREDJE HØYESTE gotiske kor (41 m).</li>
<li><strong>Via Domitia</strong>: Eldste romerske veien i Gallia (118 f.Kr.) synlig på Place de l'Hôtel de Ville.</li>
<li><strong>Horreum</strong>: Underjordisk romersk kryptoportikus. <a href="https://www.narbonne-tourisme.com/" target="_blank" rel="noopener">narbonne-tourisme.com</a></li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i Narbonne (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Hôtel La Résidence: Sentralt, sjarmerende, rimelig.</li>
<li>Hôtel du Languedoc: Enkel, lav pris.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Les Halles de Narbonne</strong>: En av Frankrikes beste matmarkeder! Åpent til lunsj. Charcuterie-diskene her er fantastiske – prøv lokal tørrskinke og saucisson sec.</li>
<li><strong>La Table Saint Crescent</strong>: Utmerket lokal mat, Languedoc-viner. <a href="https://www.google.com/search?q=la+table+saint+crescent+narbonne" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>VIN:</strong> Languedoc = Frankrikes beste verdi-viner. Corbières, Minervois, Fitou.</li>
</ul>`
      },
    ],
  },
  // DAG 11
  {
    day: 11,
    date: "23. mai",
    weekday: "Fredag",
    from: "Narbonne",
    to: "Avignon",
    km: 180,
    nights: 2,
    subtitle: "Kort kjøring med et av turens høydepunkter",
    coords: { lat: 43.95, lng: 4.81 },
    stops: [
      { name: "Pont du Gard", lat: 43.95, lng: 4.54, type: "sight" },
    ],
    sections: [
      {
        type: "sights",
        title: "Stopp: Pont du Gard (30 min vest for Avignon)",
        bookingWarning: "Parkering bør bestilles i høysesong.",
        bookingUrl: "https://www.pontdugard.fr/",
        content: `<ul>
<li><strong>Romersk akvedukt fra ca. år 50 e.Kr.</strong> UNESCO. 49 meter høy, tre nivåer.</li>
<li>Bygget for å føre vann 50 km fra Uzès til Nîmes. <strong>Helt uten mørtel – steinene er bare stablet!</strong></li>
<li>2000 år gammel og fortsatt stående. Museum på stedet. Regn 2–3 timer.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Pont du Gard</strong> ble bygget uten mørtel – steinblokkene (noen veier opptil 6 tonn) ble kuttet så presist at de holdes på plass av ren friksjon og tyngdekraft. Etter 2000 år står den fortsatt.</li>
<li>Akvedukten den var del av førte vann <strong>50 km</strong> fra Uzès til Nîmes, med et fall på bare <strong>17 meter</strong> over hele strekningen – det er en gradient på 34 cm per kilometer. Romersk ingeniørkunst på sitt ypperste.</li>
<li>I middelalderen ble Pont du Gard brukt som <strong>bro for fotgjengere og kjøretøy</strong>. Steinene på den andre etasjen er slitt av hundrevis av år med trafikk.</li>
<li>Det er fortsatt synlige <strong>numre og merker</strong> hugget inn i steinene av de romerske arbeiderne – antakelig for å holde styr på hvilke steiner som skulle hvor under byggingen. Et slags 2000 år gammelt IKEA-system.</li>
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
<li><strong>Hôtel de l'Horloge</strong>: Sentralt på Place de l'Horloge, god middelklasse.</li>
<li><strong>Hôtel Cloître Saint-Louis</strong>: I et kloster fra 1500-tallet! Utrolig atmosfære. <a href="https://www.cloitre-saint-louis.com/" target="_blank" rel="noopener">cloitre-saint-louis.com</a></li>
<li><strong>Anbefaling: Bo i Avignon, kjør dagstur til Gordes.</strong></li>
</ul>`
      },
    ],
  },
  // DAG 12
  {
    day: 12,
    date: "24. mai",
    weekday: "Lørdag",
    from: "Avignon",
    to: "Gordes/Luberon (dagstur)",
    km: 90,
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
        title: "Mat i Avignon",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>L'Essentiel</strong>: Moderne provence-kjøkken, god verdi. Fin biff! 🥩 <a href="https://www.restaurantlessentiel.com/" target="_blank" rel="noopener">restaurantlessentiel.com</a></li>
<li><strong>Le Numero 75</strong>: Vakkert gammelt hus med hage. Avslappet fine dining. <a href="https://www.numero75.com/" target="_blank" rel="noopener">numero75.com</a></li>
<li><strong>Les Halles d'Avignon</strong> (matmarked): Lørdag formiddag! Fantastisk! Charcuterie fra Provence – se etter saucisson d'Arles (pølse med krydder og rødvin) og jambon cru de Provence.</li>
<li><strong>VINER:</strong> Châteauneuf-du-Pape er 20 min unna. Gigondas, Vacqueyras – alt innen rekkevidde. En god Châteauneuf med tørrskinke og brød = perfekt apéro.</li>
<li>Gordes: Les Cuisines du Château – lunsj med utsikt.</li>
</ul>`
      },
    ],
  },
  // DAG 13
  {
    day: 13,
    date: "25. mai",
    weekday: "Søndag",
    from: "Avignon",
    to: "Dijon",
    km: 430,
    nights: 1,
    subtitle: "Obligatorisk matstopp i Lyon!",
    coords: { lat: 47.32, lng: 5.04 },
    stops: [
      { name: "Lyon", lat: 45.76, lng: 4.83, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Stopp: Lyon – Frankrikes gastronomiske hovedstad (2–3 timer)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Vieux Lyon</strong> (UNESCO): Renessansebydel med <strong>traboules</strong> (hemmelige passasjer gjennom bygninger). <a href="https://www.lyon-france.com/" target="_blank" rel="noopener">lyon-france.com</a></li>
<li><strong>Basilique Notre-Dame de Fourvière</strong>: Toppen av åsen, fantastisk utsikt. Overdreven interiør – gull, mosaikk, marmor.</li>
<li><strong>Galloromanske teatre</strong>: Romerske ruiner på Fourvière-åsen. Gratis.</li>
<li><strong>Presqu'île</strong>: Halvøyen med Place Bellecour (Europas største fortausfrie torg).</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat i Lyon – VIKTIG!",
        bookingWarning: null,
        bookingUrl: null,
        content: `<p>Dette er verdens mathovedstad!</p>
<ul>
<li><strong>Bouchon Lyonnais</strong>: Tradisjonelle lokale restauranter. Se etter «Authentique Bouchon Lyonnais»-merket.</li>
<li><strong>Daniel et Denise</strong>: Berømt bouchon. Quenelle, tablier de sapeur, biff. <a href="https://www.danieletdenise.fr/" target="_blank" rel="noopener">danieletdenise.fr</a></li>
<li><strong>Les Halles de Lyon – Paul Bocuse</strong>: Frankrikes mest berømte mathall. Perfekt lunsj. Charcuterie-avdelingene her er i en egen liga – rosette de Lyon (tørket pølse), jambon persillé (skinke i persillégele) og saucisson brioché. <a href="https://www.halles-de-lyon-paulbocuse.com/" target="_blank" rel="noopener">halles-de-lyon-paulbocuse.com</a></li>
<li>Selv en rask lunsj i Lyon er verdt stoppet.</li>
</ul>`
      },
      {
        type: "sights",
        title: "Dijon – Sennepsbyen",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Palais des Ducs de Bourgogne</strong>: Hertugenes palass. Nå rådhus og kunstmuseum (gratis!).</li>
<li><strong>Tour Philippe le Bon</strong>: 316 trinn, 360° utsikt.</li>
<li><strong>Église Notre-Dame</strong>: Chouette-uglen i fasaden – klø den med venstre hånd for lykke.</li>
<li><strong>Dijons «uglesti»</strong>: Følg metallplatene i fortauet gjennom gamlebyen.</li>
<li><a href="https://www.destinationdijon.com/" target="_blank" rel="noopener">destinationdijon.com</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Lyons traboules</strong>: De hemmelige passasjene gjennom bygninger i Vieux Lyon ble opprinnelig brukt av silkearbeidere for å transportere varer under tak (silke tåler ikke regn). Under WWII brukte den franske motstandsbevegelsen dem til å flykte fra Gestapo – det var umulig for tyskerne å kontrollere det labyrintiske nettverket.</li>
<li>Lyon var hovedsetet for <strong>Gestapo i Frankrike</strong>. Den beryktede Klaus Barbie («Slakteren fra Lyon») opererte herfra. Han ble først dømt for krigsforbrytelser i 1987 – etter å ha gjemt seg i Bolivia i årevis med CIA-hjelp.</li>
<li><strong>Paul Bocuse</strong>, Lyons store kokk, drev Restaurant Paul Bocuse med tre Michelin-stjerner i <strong>55 sammenhengende år</strong> (1965–2020) – en verdensrekord. Han regnes som grunnleggeren av «nouvelle cuisine».</li>
<li><strong>Hertugene av Burgund</strong> (som regjerte fra Dijon) var på 1400-tallet blant Europas mektigste monarker – rikere enn den franske kongen. Filip den Gode og Karl den Dristige kontrollerte et rike som strakte seg fra Burgund til Nederland. Karl den Dristige døde i slaget ved Nancy i 1477, og det burgundiske riket ble oppløst.</li>
<li><strong>Dijonsennep</strong> ble berømt fordi man i 1856 begynte å bruke <strong>verjuice</strong> (saften fra umodne druer) i stedet for eddik – noe som ga en mildere, mer aromatisk sennep. Maille har laget sennep i Dijon siden 1747.</li>
<li><strong>Époisses-osten</strong> er så illeluktende at den angivelig er <strong>forbudt på offentlig transport i Frankrike</strong>. Napoleon elsket den.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i Dijon (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Hôtel Le Jacquemart</strong>: Sentralt, sjarmerende, rimelig.</li>
<li>Hôtel Wilson: Tidligere posthus, god pris.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat i Dijon",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Bœuf Bourguignon: DER det er laget.</strong> Sakte kokt okse i Burgunder-vin. OBLIGATORISK.</li>
<li><strong>La Maison des Cariatides</strong>: Klassisk i vakker 1600-tallsbygning. <a href="https://www.lamaisondescariatides.fr/" target="_blank" rel="noopener">lamaisondescariatides.fr</a></li>
<li><strong>DZ'envies</strong>: Moderne bistro, god verdi.</li>
<li><strong>Œufs en Meurette</strong>: Posjerte egg i rødvinssaus – klassisk.</li>
<li><strong>KJØTT:</strong> Burgund er biff-land. Charolais-fe (hvite kyr fra regionen) gir noe av Frankrikes beste storfekjøtt. Spør etter entrecôte de Charolais.</li>
<li><strong>SKINKE:</strong> Jambon persillé (skinke i persillégele) er Dijons signaturrett – finnes på nesten alle bouchons. Også verdt å prøve: saucisson de Morteau fra nabodistriktet Franche-Comté, røkt over gran- og einerbær.</li>
<li><strong>VIN:</strong> Burgund! Selv rimelige Village-viner er fantastiske.</li>
<li><strong>Maille-butikken</strong> (Rue de la Liberté): Sennep fra fat! Kjøp med hjem.</li>
</ul>`
      },
    ],
  },
  // DAG 14
  {
    day: 14,
    date: "26. mai",
    weekday: "Mandag",
    from: "Dijon",
    to: "Trier",
    km: 370,
    nights: 1,
    subtitle: "Gjennom Alsace til Tysklands eldste by",
    coords: { lat: 49.75, lng: 6.64 },
    stops: [
      { name: "Riquewihr", lat: 48.17, lng: 7.30, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Stopp: Riquewihr, Alsace (ca. halvveis)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Intakt by fra 1500-tallet. «Les Plus Beaux Villages de France». Ca. 1500 innb.</li>
<li>Bindingsverkshus i alle farger langs brosteinsgatene.</li>
<li><strong>Dolder-tårnet</strong>: Bytårnet fra 1291.</li>
<li>Overlevde begge verdenskrigene nesten uskadd.</li>
<li>Fun fact: Inspirasjon for landsbyen i Disneys «Skjønnheten og Udyret»!</li>
<li><a href="https://www.riquewihr.fr/" target="_blank" rel="noopener">riquewihr.fr</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Riquewihr</strong> skiftet mellom fransk og tysk kontroll <strong>fem ganger</strong> mellom 1871 og 1945 (tysk 1871, fransk 1918, tysk 1940, fransk 1944, endelig fransk 1945). Innbyggerne snakker fortsatt alsatisk, en alemannisk dialekt nærmere tysk enn fransk.</li>
<li>At byen overlevde begge verdenskrigene nesten uskadd er bemerkelsesverdig – Alsace var en av de hardest rammede regionene. Teorien er at generaler på begge sider hadde drukket Riquewihr-vin og ville bevare vinmarkene.</li>
<li><strong>Trier</strong> ble grunnlagt av romerne som <strong>Augusta Treverorum</strong> i 16 f.Kr. – det gjør den eldre enn London (43 e.Kr.) og over 1000 år eldre enn Berlin. Byen hevder å være grunnlagt enda tidligere, med en legendarisk opprinnelse 1300 år før Roma.</li>
<li><strong>Porta Nigra</strong> («Den svarte porten») fikk sitt navn fra middelalderen, da steinene hadde mørknet av vær og vind. I middelalderen bodde det en gresk eneboer (Simeon) i tårnet – etter hans død ble porten omgjort til en kirke. Napoleon beordret kirken fjernet og restaurerte den til sin romerske form.</li>
<li><strong>Konstantinbasilikaen</strong> i Trier er det største sammenhengende rommet som har overlevd fra antikken – 67 meter langt, 27 meter bredt og 33 meter høyt. Da den ble bygget (ca. 310), var veggene dekket av marmor og gulvet hadde gulvvarme via et <strong>hypocaust</strong>-system (romersk sentralvarme).</li>
<li><strong>Karl Marx</strong> ble født i Trier i 1818 i et helt ordinært middelklassehjem. Huset er nå museum. Kina donerte en 5,5 meter høy bronsestatue av Marx til byen i 2018 – noe som skapte betydelig lokal debatt.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto i Riquewihr",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Hovedgaten med Dolder-tårnet i bakgrunnen – eventyrbok. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+dolder+tower+main+street+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Bindingsverkshus med blomsterkasser – mai = vårblomstring! 🌸 <a href="https://www.google.com/search?tbm=isch&q=riquewihr+half+timbered+houses+flowers" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Vinmarkene rundt byen med Riesling-druer. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+vineyards+alsace+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Detaljer: Gamle skilt, dørhåndtak, vinduer. Perfekt for nærbilder. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+details+signs+doors+alsace" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "food",
        title: "Mat/drikke i Riquewihr",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>VIN:</strong> Hjertet av Alsace-vinruten. Riesling, Gewürztraminer, Pinot Gris. Smak hos en vigneron!</li>
<li><strong>Tarte flambée</strong> (Flammekueche): Alsatisk «pizza» med crème fraîche, løk og bacon. Må prøves!</li>
<li><strong>Au Tire-Bouchon</strong>: Tradisjonell winstub midt i sentrum.</li>
</ul>`
      },
      {
        type: "sights",
        title: "Trier – Tysklands eldste by",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Porta Nigra</strong>: Romerrikets best bevarte byport nord for Alpene. Ca. 170 e.Kr. UNESCO. <a href="https://www.trier-info.de/" target="_blank" rel="noopener">trier-info.de</a></li>
<li><strong>Trierer Dom</strong>: Tysklands eldste katedral. Bygget fra år 326 e.Kr. på keiser Konstantins tid.</li>
<li><strong>Konstantinbasilikaen</strong> (Aula Palatina): Romersk tronsal fra ca. 310 e.Kr. Verdens største bevarte rom fra antikken.</li>
<li><strong>Kaiserthermen</strong>: Ruiner av keiserbad fra 300-tallet. Intakte underjordiske kanaler.</li>
<li><strong>Amphitheater</strong>: For 20.000 tilskuere. Ca. 100 e.Kr.</li>
<li><strong>Karl Marx' fødehus</strong>: Museum. Født 1818.</li>
<li><strong>Hauptmarkt</strong>: Middelaldersk markedsplass.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting i Trier (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Hotel Deutscher Hof</strong>: Sentralt, rimelig. Nær Porta Nigra.</li>
<li>Hotel Petrisberg: Utenfor sentrum, utsikt, parkering.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat i Trier",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Zum Domstein</strong>: Ved domen. Serverer retter inspirert av antikke romerske oppskrifter! <a href="https://www.domstein.de/" target="_blank" rel="noopener">domstein.de</a></li>
<li><strong>Weinstube Kesselstatt</strong>: Vinbar. Mosel-Riesling er verdensklasse. <a href="https://www.google.com/search?q=weinstube+kesselstatt+trier" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>Kartoffel Restaurant Kiste</strong>: Alt basert på poteter. Overraskende bra! <a href="https://www.google.com/search?q=kartoffel+restaurant+kiste+trier" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>Biff: Becker's Restaurant</strong> – Utmerket kjøtt og Mosel-vin. 🥩 <a href="https://www.google.com/search?q=becker%27s+restaurant+trier" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>SKINKE:</strong> Dere er nå i tysk skinke-land. Schwarzwälder Schinken (Svarteskogen-skinke) er klassikeren – kaldrøkt over granved. Også verdt å lete etter Westfälischer Schinken og lokale Mosel-charcuterier.</li>
</ul>`
      },
    ],
  },
  // DAG 15
  {
    day: 15,
    date: "27. mai",
    weekday: "Tirsdag",
    from: "Trier",
    to: "Trier",
    km: 0,
    nights: 0,
    subtitle: "Heldag / Mosel-dagstur",
    coords: { lat: 49.75, lng: 6.64 },
    stops: [
      { name: "Bernkastel-Kues", lat: 49.92, lng: 7.07, type: "city" },
      { name: "Cochem", lat: 50.15, lng: 7.17, type: "city" },
    ],
    sections: [
      {
        type: "practical",
        title: "Forslag til dagen",
        bookingWarning: null,
        bookingUrl: null,
        content: `<h4>Alternativ A: Grundig Trier-dag</h4>
<ul>
<li>Formiddag: Porta Nigra, Domen, Liebfrauenkirche, Konstantinbasilikaen. Alt gangavstand.</li>
<li>Lunsj: Hauptmarkt-området.</li>
<li>Ettermiddag: Kaiserthermen, Amphitheater, evt. Karl Marx-huset.</li>
</ul>
<h4>Alternativ B: Mosel-dalen dagstur (anbefalt! 🍷)</h4>
<ul>
<li><strong>Bernkastel-Kues</strong> (50 min): En av Tysklands vakreste vinbyer. Bindingsverkshus, bratte vinmarker, Riesling-smaking. <a href="https://www.bernkastel.de/" target="_blank" rel="noopener">bernkastel.de</a></li>
<li><strong>Cochem</strong> (1,5t): Eventyrborg <strong>Reichsburg Cochem</strong> på åsrygg over Mosel. Fantastisk foto. <a href="https://www.cochem.de/" target="_blank" rel="noopener">cochem.de</a></li>
<li>Kjør langs Mosel-elven – noen av verdens bratteste vinmarker.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Mosel-vinene</strong> har vært berømt siden romertiden. Den romerske poeten Ausonius skrev diktet «Mosella» (ca. 370 e.Kr.) der han skildrer elvedalen, vinmarkene og det gode livet – det er en av de eldste skriftlige kildene om vinproduksjon i Tyskland.</li>
<li><strong>Bernkastel-Kues</strong> er fødebyen til <strong>Nikolaus Cusanus</strong> (1401–64), en av senmiddelalderens viktigste filosofer, matematikere og kardinaler. Han foreslo at jorden dreide rundt solen 100 år før Kopernikus. Hospitalet han grunnla (St.-Nikolaus-Hospital/Cusanusstift) fungerer fortsatt og har en historisk vinbar.</li>
<li>Vinmarkene langs Mosel er blant <strong>verdens bratteste</strong> – med helninger på opptil 65 grader. Alt arbeidet må gjøres for hånd. Calmont-vinmarken mellom Bremm og Eller er den bratteste i Europa.</li>
<li><strong>Cochem</strong> sin Reichsburg ble fullstendig ødelagt av franske tropper under <strong>Pfälziske arvefølgekrig</strong> (1689) og lå i ruiner i nesten 200 år. Den ble gjenoppbygd i ny-gotisk stil av den berlinske forretningsmannen Louis Ravené i 1868–77.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Porta Nigra i morgenlys. <a href="https://www.google.com/search?tbm=isch&q=porta+nigra+trier+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Konstantinbasilikaen innenfra: Det enorme rommet. <a href="https://www.google.com/search?tbm=isch&q=konstantinbasilika+trier+interior+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Bernkastel-Kues: Markedsplass med bindingsverkshus, bratte vinmarker. <a href="https://www.google.com/search?tbm=isch&q=bernkastel+kues+marktplatz+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Cochem: Reichsburg fra nede ved elven – postkortmotiv. <a href="https://www.google.com/search?tbm=isch&q=reichsburg+cochem+mosel+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
    ],
  },
  // DAG 16
  {
    day: 16,
    date: "28. mai",
    weekday: "Onsdag",
    from: "Trier",
    to: "Hameln",
    km: 420,
    nights: 1,
    subtitle: "Langs Mosel- og Rhin-dalene",
    coords: { lat: 52.10, lng: 9.36 },
    stops: [
      { name: "Koblenz", lat: 50.36, lng: 7.60, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Koblenz (ca. 2t fra Trier)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Deutsches Eck</strong>: Landtungen der Mosel møter Rhinen. Keiser Wilhelm I-monument. <a href="https://www.koblenz-touristik.de/" target="_blank" rel="noopener">koblenz-touristik.de</a></li>
<li><strong>Festung Ehrenbreitstein</strong>: Massiv festning. Kabelbane over Rhinen. Panoramautsikt.</li>
<li><strong>Rhindalen</strong> herfra og nordover er UNESCO-listet. Borger på begge sider hele veien.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Deutsches Eck ovenifra (Ehrenbreitstein/kabelbanen). <a href="https://www.google.com/search?tbm=isch&q=deutsches+eck+koblenz+aerial+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Kabelbanen over Rhinen – unike perspektiver. <a href="https://www.google.com/search?tbm=isch&q=koblenz+cable+car+rhine+ehrenbreitstein" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "sights",
        title: "Hameln (Hamelin) – Rottefangerbyen",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Legenden om Rottefangeren (1284). Bindingsverkshus fra Weserrenessansen (1500–1600-tallet).</li>
<li><strong>Rattenfängerhaus</strong>: Bygning fra 1602 med innskrift om legenden.</li>
<li>Kompakt gammel by – perfekt for kveldsvandring.</li>
<li><a href="https://www.hameln.de/" target="_blank" rel="noopener">hameln.de</a></li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Deutsches Eck</strong> i Koblenz: Monumentet for keiser Wilhelm I ble reist i 1897, ødelagt i WWII, og gjenoppbygd først i 1993. I mellomtiden sto bare sokkelen – med et fransk flagg plantet på toppen under okkupasjonen som en spesiell provokasjon.</li>
<li><strong>Rhindalen</strong> mellom Koblenz og Bingen er fullt av borger fordi Rhin-grevene krevde <strong>bompenger</strong> av alle skip som passerte. Hver borg kontrollerte en del av elven. Loreley-klippen (nær St. Goar) er berømt for sagnet om en sirene som lokket sjømenn i døden med sin sang – Heinrich Heine skrev et berømt dikt om det.</li>
<li><strong>Rottefangeren av Hameln</strong>: Den eldste skriftlige kilden er fra 1384 – en innskrift i Hameln som sier at 130 barn forsvant 26. juni 1284. Ingen rotter nevnes i de tidligste versjonene! Moderne historikere tror legenden kan referere til unge mennesker som emigrerte til Øst-Europa under den tyske Ostsiedlung-koloniseringen, eller til barn som døde i en epidemi.</li>
<li><strong>Bungelosenstrasse</strong> i Hameln er gaten barna angivelig ble ført gjennom. Den dag i dag er det <strong>forbudt å spille musikk</strong> i denne gaten.</li>
<li><strong>Weserrenessansen</strong> (arkitekturstilen i Hameln) er en unik nordtysk variant av renessansearkitekturen fra ca. 1520–1620. Kjennetegnes av overdådige steinornamenterte gavler med volutter og pyramider. Hameln har Tysklands fineste samling.</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Hotel Garni Christinenhof: Sjarmerende, sentralt, rimelig.</li>
<li>Hotel Stadt Hameln: I sentrum, god standard.</li>
</ul>`
      },
      {
        type: "food",
        title: "Mat",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Rattenkrug</strong>: Tradisjonell tysk med rottefanger-tema. <a href="https://www.google.com/search?q=rattenkrug+hameln+restaurant" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li>Pfannekuchen: Tysk kjøkken i Weserrenessanse-bygning.</li>
</ul>`
      },
    ],
  },
  // DAG 17
  {
    day: 17,
    date: "29. mai",
    weekday: "Torsdag",
    from: "Hameln",
    to: "Puttgarden",
    km: 400,
    nights: 1,
    subtitle: "Siste dag på kontinentet",
    coords: { lat: 54.37, lng: 11.00 },
    stops: [
      { name: "Hamburg", lat: 53.55, lng: 9.99, type: "city" },
    ],
    sections: [
      {
        type: "sights",
        title: "Anbefalt stopp: Hamburg (2–3 timer)",
        bookingWarning: "Miniatur Wunderland – selger ofte ut! Elbphilharmonie Plaza – gratis, men tidsluker.",
        bookingUrl: "https://www.miniatur-wunderland.com/",
        content: `<ul>
<li><strong>Speicherstadt</strong> (UNESCO): Verdens største lagerhusdistrikt. Røde mursteinsbygninger langs kanaler. <a href="https://www.hamburg-travel.com/" target="_blank" rel="noopener">hamburg-travel.com</a></li>
<li><strong>Miniatur Wunderland</strong>: Verdens største modelljernbane. Selv for 55-åringer. I Speicherstadt.</li>
<li><strong>Elbphilharmonie</strong>: Spektakulært konserthus. Gratis tilgang til utsiktsplattformen (Plaza).</li>
<li><strong>Landungsbrücken</strong>: Havnepromenaden.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Speicherstadt</strong> ble bygget 1885–1927 ved at et helt boligområde med 20 000 innbyggere ble <strong>revet og tvangsfraflyttet</strong> for å bygge lagerhusene. Området lagret kaffe, te, tobakk, krydder og orientalske tepper – og var tollfritt (Freihafen) helt til 2003.</li>
<li><strong>Hamburg</strong> er teknisk sett en <strong>bystat</strong> (Freie und Hansestadt Hamburg) og har aldri hatt en borg eller et kongelig palass. Byen har vært stolt uavhengig siden middelalderen – en ekte handelsrepublikk.</li>
<li><strong>The Beatles</strong> spilte over 800 timer i Hamburg-klubber (1960–62) før de ble berømte. John Lennon sa senere: <em>«I might have been born in Liverpool, but I grew up in Hamburg.»</em> Klubbene lå i Reeperbahn-området.</li>
<li><strong>Hamburgers</strong> har sannsynligvis IKKE opphavet i Hamburg, men det er en populær teori. Det som trolig skjedde var at tyske emigranter fra Hamburg tok med seg «Frikadellen» (kjøttkaker) til Amerika, hvor de ble satt i brød.</li>
<li><strong>Elbphilharmonie</strong> tok 10 år å bygge (2007–2017) og kostet <strong>866 millioner euro</strong> – nesten 12 ganger det opprinnelige budsjettet på 77 millioner. Bygningen er 110 meter høy og inneholder 10 000 akustikkpaneler som alle er unike.</li>
</ul>`
      },
      {
        type: "photo",
        title: "Foto",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Speicherstadt: Lagerhusene reflektert i kanalene – dag og kveld. <a href="https://www.google.com/search?tbm=isch&q=speicherstadt+hamburg+reflection+canals+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Elbphilharmonie: Dramatisk arkitektur. Fra Plaza: panorama over havna. <a href="https://www.google.com/search?tbm=isch&q=elbphilharmonie+hamburg+photography+architecture" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
      },
      {
        type: "food",
        title: "Mat – Siste ordentlige middag!",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Fischbrötchen</strong>: Hamburgs street food-klassiker. Fra bodene på havna.</li>
<li><strong>Brücke 10</strong>: Ved Landungsbrücken. Byens beste fischbrötchen ifølge mange. <a href="https://www.google.com/search?q=br%C3%BCcke+10+hamburg+fischbr%C3%B6tchen" target="_blank" rel="noopener" class="photo-search-link">🔍 Søk</a></li>
<li><strong>Bullerei</strong>: Tim Mälzers restaurant i Sternschanze. Kreativ mat, god biff. 🥩 <a href="https://www.bullerei.com/" target="_blank" rel="noopener">bullerei.com</a></li>
<li>Gjør det til noe fint – siste middag på turen!</li>
</ul>`
      },
      {
        type: "accommodation",
        title: "Overnatting (1 natt)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li>Heiligenhafen eller Lübeck (som på vei ned).</li>
</ul>`
      },
    ],
  },
  // DAG 18
  {
    day: 18,
    date: "30. mai",
    weekday: "Lørdag",
    from: "Puttgarden",
    to: "Rakkestad 🏠",
    km: 700,
    nights: 0,
    subtitle: "Hjem!",
    coords: { lat: 59.43, lng: 11.35 },
    stops: [],
    sections: [
      {
        type: "practical",
        title: "Hjemreise",
        bookingWarning: null,
        bookingUrl: null,
        content: `<p>Tidlig ferje Rødby–Puttgarden, deretter nordover gjennom Danmark og Sverige.</p>
<ul>
<li>Tidlig start! Ferja går hyppig – sjekk <a href="https://www.scandlines.com/" target="_blank" rel="noopener">scandlines.com</a>.</li>
<li>Ca. 7–8 timers kjøring inkl. ferje og pauser.</li>
<li>Supercharger-stopp underveis i Danmark og Sverige.</li>
<li>Avreise senest kl. 10–11 for å være hjemme innen sen kveld.</li>
</ul>`
      },
      {
        type: "history",
        title: "Historisk trivia for Bjørn Erik (siste dose!)",
        bookingWarning: null,
        bookingUrl: null,
        content: `<ul>
<li><strong>Fuglefluktslinjen</strong> (Rødby–Puttgarden) kan snart bli erstattet av <strong>Fehmarnbelt-tunnelen</strong> – en 18 km lang senketunnel som blir verdens lengste kombinerte vei- og jernbanetunnel. Byggestart var 2021, planlagt åpning rundt 2029. Den vil gjøre ferjen overflødig.</li>
<li><strong>Øresundsbroen</strong> (om dere kjører den veien) er 7 845 meter lang og ble åpnet i 2000. Den er delvis bro, delvis tunnel – midtdelen er en kunstig øy (Peberholm) der broen dykker ned i en tunnel for å ikke forstyrre flytrafikken til Kastrup.</li>
<li>Dere har nå kjørt gjennom landområder som har vært kontrollert av <strong>romerne, vikingene, frankerne, normannerne, baskerne, katarene, englenderne, burgunderne, habsburgerne, Napoleon, Det tyske keiserriket, og to verdenskrigene</strong>. Ca. 3000 år med europeisk historie på 18 dager. Ikke verst.</li>
</ul>`
      },
    ],
  },
];

// Unsplash-bilder for hver dag
const dayImages = {
  1:  { cdnBase: 'photo-1720607688322-4bebff5d541e', credit: 'Lars Portjanow', username: 'larsportjanow', photoId: 'BKCoJAU7rfE' },
  2:  { cdnBase: 'photo-1541791940715-e571aa1c3d32', credit: 'Lucas Carl', username: 'lucas_carl', photoId: '2mqqvfGVK8A' },
  3:  { cdnBase: 'photo-1643193839079-e6ee352d9043', credit: 'Andréa Villiers', username: 'lemondeavecandrea', photoId: '0bOVmBAUogM' },
  4:  { cdnBase: 'photo-1659640860300-d8803c5e1f1f', credit: 'Niels Bosman', username: 'niels_to', photoId: '64spGeJJC3U' },
  5:  { cdnBase: 'photo-1665764630018-fbd45d77b163', credit: 'Datingjungle', username: 'datingjungle', photoId: '8awEqnZDF80' },
  6:  { cdnBase: 'photo-1531250552633-528fe896fdd4', credit: 'Dan Wilding', username: 'danwilding', photoId: 'IQ1EuGwD-Lw' },
  7:  { cdnBase: 'photo-1587931693473-9598be66ae1c', credit: 'Guillaume QL', username: 'georges015', photoId: 'bMbRswbmIp0' },
  8:  { cdnBase: 'photo-1647526232039-6099babcca81', credit: 'Quick PS', username: 'quickps', photoId: 'ComgJww3q1U' },
  9:  { cdnBase: 'photo-1663845183777-136ef563e46b', credit: 'Hans-Jurgen Weinhardt', username: 'hansjuergen', photoId: '2BlPUNH2g7U' },
  10: { cdnBase: 'photo-1719396727280-1972257abe18', credit: 'Jametlene Reskp', username: 'reskp', photoId: 'HC9sjCsEJ6Q' },
  11: { cdnBase: 'photo-1562687598-40393b4d426b', credit: 'Xuan Nguyen', username: 'darthxuan', photoId: 'ricmOR_T2rM' },
  12: { cdnBase: 'photo-1722616588626-f1a6c231479f', credit: 'Bo Zhang', username: 'bozh_ntu', photoId: 'aqEV4eBXFDI' },
  13: { cdnBase: 'photo-1628316492043-567795b66ef5', credit: 'Peter Herrmann', username: 'tama66', photoId: 'EMNOVf_ITZQ' },
  14: { cdnBase: 'photo-1584999534798-5f4dc63b48db', credit: 'Vered Caspi', username: 'veredcc', photoId: 'unwoHpmX8sw' },
  15: { cdnBase: 'photo-1652881052438-2177e94c2f77', credit: 'Alexander Schimmeck', username: 'alschim', photoId: 'JqjS0ZP8TaQ' },
  16: { cdnBase: 'photo-1731742013335-1b2c2a852be4', credit: 'Wolfgang Weiser', username: 'hamburgmeinefreundin', photoId: 'WRerMBRYoyE' },
  17: { cdnBase: 'photo-1473615695634-d284ec918736', credit: 'Claudio Testa', username: 'claudiotesta', photoId: 'qpemSW6_1Z0' },
  18: { cdnBase: 'photo-1430000589629-f04107b5597c', credit: 'Vidar Kristiansen', username: 'vidar', photoId: 'qv5yb436qRI' },
};

const UTM = '?utm_source=tdf_reiseguide&utm_medium=referral';

days.forEach(d => {
  const img = dayImages[d.day];
  if (img) {
    d.image = {
      hero: `https://images.unsplash.com/${img.cdnBase}?w=1200&h=400&fit=crop&auto=format&q=80`,
      thumb: `https://images.unsplash.com/${img.cdnBase}?w=600&h=340&fit=crop&auto=format&q=80`,
      credit: img.credit,
      creditUrl: `https://unsplash.com/@${img.username}${UTM}`,
      photoUrl: `https://unsplash.com/photos/${img.photoId}${UTM}`,
    };
  }
});
