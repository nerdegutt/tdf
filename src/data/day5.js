// DAG 5
export const day5 = {
  day: 5,
  date: "17. mai",
  weekday: "Søndag",
  from: "Rouen",
  to: "Bayeux",
  km: 220,
  hours: 2,
  nights: 1,
  subtitle: "🇳🇴 Gratulerer med dagen!",
  description: "17. mai i Bayeux og på D-dagskysten. Verdensberømt 1000 år gammelt tapet, Omaha Beach og American Cemetery — på selveste nasjonaldagen.",
  alert: [
    "<strong>Bayeux-tapetet er stengt</strong> for renovering fra sept 2025 til okt 2027. Museet kan ikke besøkes. Resten av Bayeux sentrum og D-dagskysten er upåvirket.",
    "<strong>17. mai er søndag</strong> — mange franske restauranter holder stengt. Restaurantene nedenfor er bekreftet søndagsåpne, men ring og bekreft på forhånd!",
  ],
  intro: "Bayeux er en sjarmerende middelalderby med 14 000 innbyggere, en av de første som ble frigjort etter D-dagen og nesten helt uskadd av krigen. Byen er mest kjent for det 70 meter lange Bayeux-tapetet fra 1070 — verdens mest berømte broderi. Ettermiddagen brukes på D-dagskysten: Omaha Beach, American Cemetery og Pointe du Hoc, bare 20 minutter unna.",
  coords: { lat: 49.28, lng: -0.70 },
  stops: [
    { name: "Omaha Beach", lat: 49.37, lng: -0.87, type: "sight" },
    { name: "Pointe du Hoc", lat: 49.40, lng: -0.99, type: "sight" },
    { name: "Arromanches", lat: 49.34, lng: -0.62, type: "sight" },
  ],
  trivia: [
    "Normandie betyr «nordmennenes land» — å feire 17. mai her er å stå i et land grunnlagt av nordmenn, og feire en grunnlov som ble til fordi Napoleons imperium falt (Waterloo, dag 3).",
    "Bayeux-tapetets nedre bord inneholder erotiske scener, inkludert en naken mann med tydelig ereksjon — uvanlig i kirkelig kunst fra 1070-tallet.",
    "Halleys komet er avbildet i Bayeux-tapetet — en av de tidligste kjente avbildningene. Angelsakserne tolket den som et dårlig varsel.",
  ],
  sections: [
    {
      type: "sights",
      title: "Bayeux sentrum",
      highlight: true,
      summary: "70 meter broderi fra 1070 som forteller vikingenes erobring av England — pluss en av de best bevarte middelalderbyene i Normandie. NB: Tapetet er stengt for renovering til okt 2027.",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'The Norman Conquest', author: 'Marc Morris', relevance: 'Dekker nøyaktig hendelsene som Bayeux-tapetet skildrer — bakgrunnen for broderiet dere (normalt) kan se her.' },
      ],
      content: `<ul>
<li><strong>Bayeux-tapetet</strong> (Musée de la Tapisserie): 70 meter langt broderi fra ca. 1070 – Vilhelm Erobrerens invasjon av England 1066. UNESCO Memory of the World. ⚠️ Stengt for renovering sept 2025 – okt 2027.</li>
<li><strong>Cathédrale Notre-Dame de Bayeux</strong>: Gotisk/romansk. Krypten fra 1000-tallet.</li>
<li><strong>TIGER-tanken</strong>: Ved Museum of the Battle of Normandy – en sjelden overlevende.</li>
<li><strong>Museum of the Battle of Normandy</strong>: Grundig D-dags-museum. <a href="https://www.memorial-caen.fr/" target="_blank" rel="noopener">memorial-caen.fr</a></li>
<li><strong>Bayeux britisk krigskirkegård</strong>: Største britiske WWII-kirkegård i Frankrike. 4648 graver.</li>
</ul>`
    },
    {
      type: "sights",
      title: "Ettermiddag: D-dagskysten (ca. 20 min kjøring)",
      highlight: true,
      summary: "Strendene der verdenshistorien ble endret 6. juni 1944. 9 387 hvite kors på American Cemetery, Rangers-klatringen ved Pointe du Hoc, og restene av Mulberry Harbour ved Arromanches.",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'D-Day', author: 'Antony Beevor', relevance: 'Detaljrik skildring av D-dagen — dekker nøyaktig strendene og klippene dere besøker ved Omaha og Pointe du Hoc.' },
        { type: 'book', title: 'Band of Brothers', author: 'Stephen Ambrose', relevance: 'Easy Companys historie starter med luftlandingen ved Normandie — Pointe du Hoc og Omaha er en del av deres operasjonsområde.' },
        { type: 'film', title: 'Saving Private Ryan', year: 1998, relevance: 'Åpningsscenen gjenskaper landgangen på Omaha Beach — stranden dere står på er den samme.' },
      ],
      content: `<ul>
<li><strong>Omaha Beach</strong>: Stranden der amerikanske styrker gikk i land 6. juni 1944.</li>
<li><strong>Colleville-sur-Mer (American Cemetery)</strong>: 9387 hvite kors på klippen over Omaha Beach. Dypt gripende. <a href="https://www.abmc.gov/normandy" target="_blank" rel="noopener">abmc.gov/normandy</a></li>
<li><strong>Pointe du Hoc</strong>: Klippen der US Rangers klatret opp. Kratere fra bombingen intakte.</li>
<li><strong>Longues-sur-Mer batteri</strong>: Tyske kanonstillinger med intakte kanoner.</li>
<li><strong>Arromanches — Mulberry Harbour</strong>: Restene av den kunstige havnen de allierte bygget for å forsyne invasjonsstyrkene. Over 400 betongelementer, hver så stor som en boligblokk, ble slept over Kanalen. Betongrester stikker fortsatt opp av havet. Churchill foreslo ideen med et berømt notat: <em>«Piers for use on beaches. They must float up and down with the tide. Don't argue the matter.»</em> <a href="https://www.google.com/search?tbm=isch&q=arromanches+mulberry+harbour+remains" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'The Longest Day', author: 'Cornelius Ryan', relevance: 'Den første store D-dags-boken, bygget på intervjuer med veteraner — mange av scenene utspiller seg på strendene dere nettopp har gått på.' },
        { type: 'film', title: 'Band of Brothers (HBO)', year: 2001, relevance: 'Følger fallskjermjegerne gjennom Normandie etter landgangen — landskapet i serien er det samme dere kjører gjennom.' },
      ],
      content: `<ul>
<li><strong>Bayeux-tapetet</strong> er egentlig ikke et teppe, men et <strong>broderi</strong> – 70 meter langt og bare 50 cm høyt. Det er trolig laget i England (Canterbury) på bestilling av biskop Odo av Bayeux, Vilhelm Erobrerens halvbror. Tapetet inneholder 623 mennesker, 202 hester, 55 hunder og 505 andre dyr.</li>
<li>Bayeux var en av de første franske byene som ble frigjort på D-dagen – den 7. juni 1944, bare én dag etter landgangen. Den unngikk nesten all krigsskade, noe som gjør gamlebyen uvanlig intakt.</li>
<li><strong>Omaha Beach</strong> var kodenavn. De fem D-dagsstrendene ble oppkalt etter amerikanske og britiske kodenavn: Utah, Omaha (amerikanske), Gold, Juno (kanadisk), Sword (britisk).</li>
<li>Ved <strong>Pointe du Hoc</strong> klatret 225 Rangers opp 30 meter høye klipper med tau og stiger under intens ild. Etter to dager med kamp var bare 90 mann stridsdyktige.</li>
<li><strong>American Cemetery</strong>: Alle korsene er laget av italiensk Lasa-marmor. De er orientert slik at de «ser» vestover mot Amerika. Det eneste unntaket er Brig. Gen. Theodore Roosevelt Jr.s kors – som ser mot sine menn, østover.</li>
<li>Været nesten stoppet D-dagen: Eisenhower utsatte invasjonen med én dag pga. storm. Meteorolog James Stagg identifiserte et kort værvindu 6. juni. Hadde det blitt utsatt igjen, ville neste mulige dato vært <strong>19. juni</strong> – da det kom en voldsom storm som ville gjort invasjonen umulig.</li>
<li><strong>Bayeux-tapetets skjulte detaljer</strong>: En enigmatisk scene viser en geistlig som tar på en kvinne kalt «Aelfgyva» — ingen vet hvem hun er eller hva scenen betyr. Det er middelalderens største uløste mysterium innen kunsthistorie. Tapetets slutt er dessuten skadet/tapt — vi vet ikke hva de siste scenene viste.</li>
<li><strong>Mulberry Harbour ved Arromanches</strong>: To enorme kunstige havner ble slept over Kanalen i deler. Den ene (ved Omaha) ble ødelagt av stormen 19.–22. juni, men den andre (ved Arromanches/Gold Beach) forsynte opptil 9 000 tonn materiell per dag i 10 måneder. Et av historiens mest imponerende logistikkprosjekter.</li>
<li><strong>17. mai i Normandie</strong>: Det er en dyp ironi i å feire nasjonaldagen her. Norges grunnlov av 1814 var et direkte resultat av Napoleonskrigene — og Waterloo (dag 3) bekreftet ordningen. Samtidig betyr «Normandie» bokstavelig talt «nordmennenes land». Olav den Hellige ble døpt i Rouen-katedralen (dag 4). Uten vikingenes tilstedeværelse i Normandie hadde norsk historie vært fundamentalt annerledes.</li>
<li><strong>Robert Capa</strong>, den legendariske krigsfotografen, gikk i land med første bølge på Omaha Beach og tok 106 bilder. Bare 11 overlevde — de ble ødelagt i et mørkeromuhell hos LIFE-magasinet. De gjenværende bildene, kjent som «The Magnificent Eleven», er blant de mest ikoniske krigsbildene noensinne.</li>
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
      title: "Overnatting i Bayeux",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://hotel-bayeux-reinemathilde.fr/en/" target="_blank" rel="noopener">Hôtel Reine Mathilde</a></strong> – Sentrum, 150m fra katedralen, 32 rom, restaurant. Best verdi. <em>Ca. 70–90 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotellebayeux.com/en/" target="_blank" rel="noopener">Hôtel Le Bayeux</a></strong> – Historisk normannisk vertshus, bar. Ingen AC, tynne vegger. <em>Ca. 75–100 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-churchill.fr/eng/" target="_blank" rel="noopener">Hôtel Churchill</a></strong> – 46 rom, AC, 24h resepsjon, 8.4/10, 9.6 beliggenhet. <em>Ca. 90–130 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "17. mai-middag i Bayeux 🇳🇴",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Le Pommier</strong> – Raffinert normannisk kjøkken i historisk steinbygning nær katedralen. Sesongmeny, calvados-aperitiff. Åpent søndager (18:30–21:00). Stengt onsdager. Rue des Cuisiniers 38–40. Tlf: 02 31 21 52 10. <em>Ca. 30–45 EUR/pers.</em></li>
<li><strong><a href="https://lanormande-bayeux.fr/" target="_blank" rel="noopener">La Normande</a></strong> – Tradisjonell normannisk mat, østers, fisk, biff. Åpent søndag kveld april–oktober (18:30–20:45). «Menu La Normande» 36 EUR. Rue Saint-Jean 46. <em>Ca. 30–50 EUR/pers.</em></li>
<li><strong><a href="https://www.la-table-du-terroir.com/" target="_blank" rel="noopener">La Table du Terroir</a></strong> – Normannisk husmannskost, to terrasser nær katedralen. Åpent søndag kveld (18:00–21:30). Rimeligst alternativ. Rue Saint-Jean 42. <em>Ca. 20–35 EUR/pers.</em></li>
</ul>`
    },
  ],
};
