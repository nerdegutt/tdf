// DAG 5
export const day5 = {
  day: 5,
  date: "17. mai",
  weekday: "Søndag",
  from: "Rouen",
  to: "Colleville-sur-Mer (Omaha Beach)",
  km: 180,
  hours: 2,
  nights: 1,
  subtitle: "🇳🇴 Gratulerer med dagen! D-dagskysten på nasjonaldagen",
  description: "17. mai på D-dagskysten. Rett ut til Omaha Beach, American Cemetery og Pointe du Hoc — overnatting steinkast fra de mest ikoniske strendene i Vest-Europa.",
  alert: [
    "<strong>Bayeux-tapetet er stengt</strong> for renovering fra sept 2025 til okt 2027 — derfor droppes Bayeux som mellomstopp, og dere kjører rett ut til kysten.",
    "<strong>17. mai er søndag</strong> — mange franske restauranter holder stengt. Restaurantene nedenfor er bekreftet søndagsåpne, men ring og bekreft på forhånd!",
  ],
  intro: "D-dagskysten på 17. mai er en sterkere koreografi enn noe annet på turen. Dere kjører rett fra Rouen ut til Colleville-sur-Mer der American Cemetery troner på klippen over Omaha Beach — 9 387 hvite kors orientert mot Amerika. På selveste nasjonaldagen vandrer dere mellom Pointe du Hoc, Omaha, Longues-sur-Mer og Arromanches: stedene der verdenshistorien snudde 6. juni 1944. Hotellene ligger i landsbyene like ved — Vierville, Colleville, Port-en-Bessin — så dere kan ta kveldsstemningen ved minnesmerket og spise normannisk søndagsmiddag uten å kjøre videre.",
  coords: { lat: 49.357, lng: -0.854 },
  stops: [
    { name: "Pointe du Hoc", lat: 49.40, lng: -0.99, type: "sight" },
    { name: "Omaha Beach", lat: 49.37, lng: -0.87, type: "sight" },
    { name: "American Cemetery", lat: 49.36, lng: -0.85, type: "sight" },
    { name: "Arromanches", lat: 49.34, lng: -0.62, type: "sight" },
  ],
  trivia: [
    "Normandie betyr «nordmennenes land» — å feire 17. mai her er å stå i et land grunnlagt av nordmenn, og feire en grunnlov som ble til fordi Napoleons imperium falt (Waterloo, dag 3).",
    "Robert Capa gikk i land med første bølge på Omaha og tok 106 bilder. Bare 11 overlevde et mørkeromuhell hos LIFE — «The Magnificent Eleven» er blant de mest ikoniske krigsbildene noensinne.",
    "Værsystemet nesten stoppet D-dagen: Eisenhower utsatte invasjonen med én dag pga. storm. Hadde Stagg ikke funnet det korte værvinduet 6. juni, ville neste mulige dato vært 19. juni — da en voldsom storm gjorde Mulberry-havna ved Omaha ubrukelig.",
  ],
  sections: [
    {
      type: "sights",
      title: "D-dagskysten (15–30 min mellom hver stopp)",
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
<li><strong>Colleville-sur-Mer (American Cemetery)</strong>: 9 387 hvite kors på klippen over Omaha Beach. Dypt gripende. Flaggheising og taps hver dag. <a href="https://www.abmc.gov/normandy" target="_blank" rel="noopener">abmc.gov/normandy</a></li>
<li><strong>Omaha Beach</strong>: Stranden der amerikanske styrker gikk i land 6. juni 1944. Gå ned til vannet — det er ingen avgift, ingen kø, bare sand og hav.</li>
<li><strong>Pointe du Hoc</strong>: Klippen der US Rangers klatret opp. Kratere fra bombingen intakte. ~15 min vest for Colleville.</li>
<li><strong>Longues-sur-Mer batteri</strong>: Tyske kanonstillinger med intakte kanoner. Mellom Colleville og Arromanches.</li>
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
<li><strong>Omaha Beach</strong> var kodenavn. De fem D-dagsstrendene ble oppkalt etter amerikanske og britiske kodenavn: Utah, Omaha (amerikanske), Gold, Juno (kanadisk), Sword (britisk). Omaha ble den blodigste — 2 400 amerikanske tap på første dag.</li>
<li>Ved <strong>Pointe du Hoc</strong> klatret 225 Rangers opp 30 meter høye klipper med tau og stiger under intens ild. Etter to dager med kamp var bare 90 mann stridsdyktige.</li>
<li><strong>American Cemetery</strong>: Alle korsene er laget av italiensk Lasa-marmor. De er orientert slik at de «ser» vestover mot Amerika. Det eneste unntaket er Brig. Gen. Theodore Roosevelt Jr.s kors — som ser mot sine menn, østover.</li>
<li>Været nesten stoppet D-dagen: Eisenhower utsatte invasjonen med én dag pga. storm. Meteorolog James Stagg identifiserte et kort værvindu 6. juni. Hadde det blitt utsatt igjen, ville neste mulige dato vært <strong>19. juni</strong> — da det kom en voldsom storm som ville gjort invasjonen umulig.</li>
<li><strong>Mulberry Harbour ved Arromanches</strong>: To enorme kunstige havner ble slept over Kanalen i deler. Den ene (ved Omaha) ble ødelagt av stormen 19.–22. juni, men den andre (ved Arromanches/Gold Beach) forsynte opptil 9 000 tonn materiell per dag i 10 måneder. Et av historiens mest imponerende logistikkprosjekter.</li>
<li><strong>17. mai i Normandie</strong>: Det er en dyp ironi i å feire nasjonaldagen her. Norges grunnlov av 1814 var et direkte resultat av Napoleonskrigene — og Waterloo (dag 3) bekreftet ordningen. Samtidig betyr «Normandie» bokstavelig talt «nordmennenes land». Olav den Hellige ble døpt i Rouen-katedralen (dag 4). Uten vikingenes tilstedeværelse i Normandie hadde norsk historie vært fundamentalt annerledes.</li>
<li><strong>Robert Capa</strong>, den legendariske krigsfotografen, gikk i land med første bølge på Omaha Beach og tok 106 bilder. Bare 11 overlevde — de ble ødelagt i et mørkeromuhell hos LIFE-magasinet. De gjenværende bildene, kjent som «The Magnificent Eleven», er blant de mest ikoniske krigsbildene noensinne.</li>
<li><strong>Bayeux</strong> (forbikjørt i dag): Byen ble frigjort 7. juni 1944, bare én dag etter landgangen — og unngikk nesten all krigsskade. Det 70 meter lange Bayeux-tapetet fra 1070 ville normalt vært et hovedstopp, men museet er stengt for renovering til okt 2027.</li>
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
      title: "Overnatting på D-dagskysten",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.hotel-omaha-beach.com/" target="_blank" rel="noopener">Hôtel du Casino — Omaha Beach</a></strong> – Vierville-sur-Mer, rett ved Omaha. Familiedrevet, havutsikt, restaurant. Vest-enden av stranden. <em>Ca. 90–140 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.lasapiniere.fr/" target="_blank" rel="noopener">La Sapinière</a></strong> – Saint-Laurent-sur-Mer, 5 min fra American Cemetery. Strandhotell med restaurant. Nesten alle gjester her er D-dag-pilegrimmer. <em>Ca. 100–150 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.mercure.com/" target="_blank" rel="noopener">Mercure Omaha Beach</a></strong> – Port-en-Bessin, 10 min øst for American Cemetery. Større hotell, golfbane, restaurant. Praktisk for dem som vil ha komfort etter en tung dag. <em>Ca. 110–170 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotellecheneau.com/" target="_blank" rel="noopener">Le Chêneau</a></strong> – B&B i Vierville. Lite og personlig. <em>Ca. 80–110 EUR/rom/natt.</em></li>
</ul>
<p>💡 Anbefaling: hotell i Vierville eller Saint-Laurent-sur-Mer gir gangavstand til Omaha-stranden ved soloppgang dagen etter — sterk avslutning på 17. mai-besøket.</p>`
    },
    {
      type: "food",
      title: "17. mai-middag på D-dagskysten 🇳🇴",
      bookingWarning: "17. mai er søndag — ring og bekreft åpningstider!",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.hotel-omaha-beach.com/restaurant/" target="_blank" rel="noopener">Restaurant L'Omaha</a></strong> (Hôtel du Casino, Vierville) – Klassisk normannisk meny rett ved stranden. Sjømat, calvados-aperitiff, havutsikt. <em>Ca. 30–45 EUR/pers.</em></li>
<li><strong>La Sapinière</strong> – Saint-Laurent-sur-Mer. Bistro med solid normannisk husmannskost, fisk og kjøtt. Søndag-bekreftet sesongåpent. <em>Ca. 25–40 EUR/pers.</em></li>
<li><strong><a href="https://www.le-bayeux.fr/" target="_blank" rel="noopener">L'Estaminet du Mémorial</a></strong> – Like ved American Cemetery i Colleville. Enkel meny, lyst lokale, populær blant veteraner og besøkende. <em>Ca. 20–30 EUR/pers.</em></li>
</ul>
<p>🍻 Tips: en <strong>café-calva</strong> (kaffe med et lite glass calvados) etter middag er normannisk tradisjon — passende avslutning på en intens 17. mai.</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Frankrike (Normandie)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>«Bonjour madame/monsieur»</strong> til alle dere møter. Etter 18:00: «Bonsoir». «Au revoir» når dere går. Landsbyene langs D-dagskysten er små — folk merker når dere er høflige.</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet. «L'addition, s'il vous plaît» — regningen kommer ikke uoppfordret.</li>
<li><strong>Tipsing</strong>: Service er inkludert. 1–5 EUR ekstra for god service — eller bare runde opp.</li>
<li><strong>Normandie-tradisjoner</strong>: <strong>Cidre</strong> serveres med crêpes, fisk og kjøtt — i Normandie er det like vanlig som vin. <strong>Calvados</strong> som digestif etter middag («un calva»). På D-dagskysten serverer mange kafeer kaffe med en liten calva ved siden av — kalt «café-calva».</li>
<li><strong>Søndagsmiddag (17. mai)</strong>: Søndager stenger mange franske restauranter — derfor er listene over verifisert. Ring og bekreft åpningstider.</li>
<li><strong>Engelsk</strong>: D-dagskysten er turistsentra med veteraner og pårørende — engelsk er bra på de fleste hoteller og restauranter.</li>
<li><strong>Fransk-forsøk</strong>: Selv et dårlig forsøk endrer dynamikken. «C'était très bon, merci» (det var veldig godt, takk) er gull.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:00, middag fra 19:30. Kjøkken stenger ofte 14:00–19:00.</li>
</ul>`
    },
  ],
};
