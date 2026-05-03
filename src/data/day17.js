// DAG 17
export const day17 = {
  day: 17,
  date: "29. mai",
  weekday: "Fredag",
  from: "Hameln",
  to: "Puttgarden",
  km: 358,
  hours: 4,
  nights: 1,
  subtitle: "Siste dag på kontinentet",
  description: "Hameln til Puttgarden via Hamburg — verdens største lagerkompleks Speicherstadt og Elbphilharmonie i Tysklands havnemetropol.",
  intro: "Hamburg er Tysklands nest største by og Europas tredje største havn, med en stolt hansetradisjon som strekker seg tilbake til 1241. Speicherstadt — verdens største sammenhengende lagerkompleks — er UNESCO-listet og vitner om byens rolle som handelsmetropol. Elbphilharmonie, åpnet i 2017, har allerede blitt byens nye landemerke.",
  coords: { lat: 54.37, lng: 11.00 },
  stops: [
    { name: "Hamburg", lat: 53.55, lng: 9.99, type: "city" },
  ],
  trivia: [
    "Hansaforbundet ble dannet da Lübeck og Hamburg inngikk en allianse i 1241. Dere har nå besøkt BEGGE grunnlegger-byene — Lübeck på dag 1, Hamburg i dag. Full sirkel. Bryggen i Bergen — hjemme i Norge — er det fjerde kontoret i dette nettverket.",
    "«Reeperbahn» betyr bokstavelig «repmakerbanen» — her ble tauet for seilskip laget (man trengte lange, rette gater for å tvinne tau). Taumakerindustrien tiltrakk sjøfolk, sjøfolk tiltrakk kroer og bordeller. Beatles spilte i de SAMME lokalene som sjømenn hadde drukket i siden 1700-tallet.",
    "Mellom 1850 og 1939 emigrerte ca. 5 millioner europeere via Hamburg til Amerika. Mange norske emigranter tok toget fra Christiania til Hamburg og derfra båten over. Transitt-hallene (BallinStadt) er bevart som museum — 15 min fra Speicherstadt.",
  ],
  sections: [
    {
      type: "sights",
      highlight: true,
      summary: "Hansaens medgrunnlegger og Norges søsterby — fra Speicherstadt til Elbphilharmonie. Sirkelen fra Lübeck (dag 1) sluttes her.",
      title: "Anbefalt stopp: Hamburg (2–3 timer)",
      bookingWarning: "Miniatur Wunderland – selger ofte ut! Elbphilharmonie Plaza – gratis, men tidsluker.",
      bookingUrl: "https://www.miniatur-wunderland.com/",
      references: [
        { type: "book", title: "Blikktromma", author: "Günter Grass", relevance: "Grass er fra Danzig men bodde i Nord-Tyskland — romanen fanger den samme nordtyske mentaliteten dere møter fra Hamburg til Lübeck." },
        { type: "book", title: "Buddenbrooks", author: "Thomas Mann", relevance: "Mann vokste opp i Lübeck (dag 1) og ferierte i Travemünde nær Hamburg — Hansaens handelsverden som binder dag 1 og 17 sammen." },
        { type: "film", title: "Backbeat (Beatles i Hamburg)", year: 1994, relevance: "Filmen viser Beatles' tidlige år på Reeperbahn — klubbene der de spilte 800 timer ligger i gatene dere kan besøke." },
      ],
      content: `<ul>
<li><strong>Speicherstadt</strong> (UNESCO): Verdens største lagerhusdistrikt. Røde mursteinsbygninger langs kanaler. <a href="https://www.hamburg-travel.com/" target="_blank" rel="noopener">hamburg-travel.com</a></li>
<li><strong>Miniatur Wunderland</strong>: Verdens største modelljernbane. Selv for 55-åringer. I Speicherstadt.</li>
<li><strong>Elbphilharmonie</strong>: Spektakulært konserthus. Gratis tilgang til utsiktsplattformen (Plaza).</li>
<li><strong>Landungsbrücken</strong>: Havnepromenaden.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Speicherstadt</strong> ble bygget 1885–1927 ved at et helt boligområde med 20 000 innbyggere ble <strong>revet og tvangsfraflyttet</strong> for å bygge lagerhusene. Området lagret kaffe, te, tobakk, krydder og orientalske tepper – og var tollfritt (Freihafen) helt til 2003.</li>
<li><strong>Hamburg</strong> er teknisk sett en <strong>bystat</strong> (Freie und Hansestadt Hamburg) og har aldri hatt en borg eller et kongelig palass. Byen har vært stolt uavhengig siden middelalderen – en ekte handelsrepublikk.</li>
<li><strong>The Beatles</strong> spilte over 800 timer i Hamburg-klubber (1960–62) før de ble berømte. John Lennon sa senere: <em>«I might have been born in Liverpool, but I grew up in Hamburg.»</em> Klubbene lå i Reeperbahn-området.</li>
<li><strong>Hamburgers</strong> har sannsynligvis IKKE opphavet i Hamburg, men det er en populær teori. Det som trolig skjedde var at tyske emigranter fra Hamburg tok med seg «Frikadellen» (kjøttkaker) til Amerika, hvor de ble satt i brød.</li>
<li><strong>Elbphilharmonie</strong> tok 10 år å bygge (2007–2017) og kostet <strong>866 millioner euro</strong> – nesten 12 ganger det opprinnelige budsjettet på 77 millioner. Bygningen er 110 meter høy og inneholder 10 000 akustikkpaneler som alle er unike.</li>
<li><strong>Hansaforbundets fulle sirkel</strong>: Lübeck og Hamburg grunnla Hansaforbundet i 1241 for å beskytte handelen mellom Østersjøen og Nordsjøen. Dere sov nær Lübeck dag 1 og besøker Hamburg i dag — dere har bokstavelig talt besøkt begge grunnlegger-byene som første og siste stopp. Speicherstadt er det siste kapittelet i hanseatisk tradisjon: lagerhusene ble bygget for de SAMME varene Hansaen handlet — kaffe, te, krydder, tobakk. Fra Lübecks middelalderske lagerhus til Hamburgs 1800-talls Speicherstadt: 650 år handelshistorie.</li>
<li><strong>Bergen-kontoret — den norske koblingen</strong>: Hansaforbundets fire «kontorer» var London, Brugge, Novgorod og BERGEN. Bryggen i Bergen — Norges mest ikoniske bygningsrekke — er et hanseatisk handelskontor bygget av og for tyske kjøpmenn. Tørrfisk fra Nord-Norge ble eksportert via Bergen til Hamburg og videre til resten av Europa. Når dere står i Speicherstadt og ser lagerhusene, står dere i Bergens søsterby.</li>
<li><strong>Operation Gomorrha (1943)</strong>: I juli 1943 gjennomførte RAF og USAAF den mest ødeleggende bombeserien mot noen tysk by under WWII. En ildstorm med temperaturer opp mot 800 grader og vindstyrker opp mot 240 km/t drepte over 37 000 sivile på én natt i bydelen Hammerbrook. Speicherstadt overlevde relativt intakt — det er en av grunnene til at det er UNESCO-listet.</li>
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
      title: "Middag – Siste ordentlige middag!",
      bookingWarning: "Dat ole Aalhus: Reserver!",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://aalhus.de/" target="_blank" rel="noopener">Dat ole Aalhus</a></strong> – Kåret til et av Tysklands beste fiskrestauranter av Der Feinschmecker! All fisk beinfri. Reetdekt bindingsverkshus på Fehmarn. 20 min fra Heiligenhafen. <strong>Reserver!</strong> <em>Ca. 30–40 EUR/pers.</em></li>
<li><strong><a href="https://www.seeteufel.eu/" target="_blank" rel="noopener">Seeteufel</a></strong> – Sjømat og regionalt, eierkok med personlig service. Bekreftet åpent fredager fra 17:00. 4.6/5 Google. <em>Ca. 25–40 EUR/pers.</em></li>
<li><strong><a href="https://www.beachmotel-hhf.de/en/gastro/holyharbour-cafe-grill" target="_blank" rel="noopener">HOLYHARBOUR Café & Grill</a></strong> – Casual grill på strandpromenaden med solnedgang. Spareribs, fisk, burgere. Egne gårdsingredienser. <em>Ca. 20–35 EUR/pers.</em></li>
</ul>
<p>💡 Dat ole Aalhus er det klart beste valget – verdt 20 min kjøretur til Fehmarn.</p>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Heiligenhafen (15 min fra Puttgarden-fergen, siste natt!)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://hotelstadthamburg.net/en/" target="_blank" rel="noopener">Hotel Stadt Hamburg</a></strong> – 8.4/10, #1 B&B, 1850-hotell, gratis parkering, frokost inkl. <em>Ca. 93–140 EUR/rom/natt.</em></li>
<li><strong><a href="http://deutsches-haus-heiligenhafen.de/" target="_blank" rel="noopener">Hotel Deutsches Haus</a></strong> – Budsjettvalg, frokost inkl., gratis parkering. 7.9/10. <em>Ca. 60–90 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.bretterbude-hhf.de/en" target="_blank" rel="noopener">Bretterbude</a></strong> – Surferhotell med stil. Strandpromenaden. Frokost 21,90 EUR/pers ekstra. <em>Ca. 90–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://wissers-hotel.de/" target="_blank" rel="noopener">Wissers Hotel</a></strong> – Burg auf Fehmarn, ca. 10 min fra Puttgarden-fergen. Rimelig og helt greit.</li>
</ul>`
    },
  ],
};
