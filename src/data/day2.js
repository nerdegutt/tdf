// DAG 2
export const day2 = {
  day: 2,
  date: "14. mai",
  weekday: "Torsdag",
  from: "Puttgarden",
  to: "Leuven",
  km: 718,
  hours: 7,
  nights: 1,
  subtitle: "Kjøredag til Leuven — ærverdig flamsk universitetsby",
  description: "Fra Puttgarden til Leuven — en av Europas eldste universitetsbyer (1425), hjemby for Stella Artois, og et av Flanderns vakreste sentrum med et rådhus så pyntet at Victor Hugo kalte det et juvelskrin.",
  alert: "<strong>Kristi himmelfartsdag (14. mai)</strong> — offentlig fridag i Belgia (Onze-Lieve-Heer-Hemelvaart). Mange butikker stengt, men kafeer og restauranter rundt Oude Markt og Grote Markt holder åpent. Universitetsbiblioteket og kirkene er tilgjengelige med redusert åpningstid.",
  intro: "Leuven er Flanderns akademiske hjerte: rundt 100 000 innbyggere hvorav 60 000 er studenter ved KU Leuven, Belgias eldste universitet (grunnlagt 1425). Byen er Stella Artois' fødeby — bryggeriet ligger fortsatt midt i sentrum — og rommer Oude Markt, kjent som «den lengste baren i Europa» med 40+ utesteder rygg mot rygg. Et perfekt stopp på vei mot Frankrike: kompakt sentrum, gangavstand til alt, og kort vei til Waterloo morgenen etter.",
  coords: { lat: 50.8798, lng: 4.7005 },
  stops: [],
  trivia: [
    "Stella Artois har vært brygget i Leuven kontinuerlig siden 1366 — eldre enn både Norge som union og Belgia som stat (1830).",
    "Universitetsbiblioteket i Leuven er det eneste i verden som er blitt brent ned to ganger av samme land i samme århundre — tyskerne i 1914 og igjen i 1940.",
    "Oude Markt kalles «Europas lengste bar» fordi rundt 40 puber ligger vegg-i-vegg uten et eneste avbrudd.",
  ],
  sections: [
    {
      type: "sights",
      title: "Severdigheter i Leuven",
      highlight: true,
      summary: "Det 600 år gamle rådhuset på Grote Markt er dekket av 236 statuer — en gotisk bløtkake i stein som overlevde to verdenskriger nesten urørt.",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Stadhuis (Rådhuset) — fasaden</strong>: Sengotisk mesterverk fra 1448–1469 med 236 statuer i fasaden — en av Europas mest utsmykkede sekulære bygninger. Victor Hugo beskrev det som «un vrai bijou». Statuene ble for øvrig først satt på plass på 1800-tallet; i 400 år sto nisjene tomme. <strong>NB: bygningen er stengt for innvendige besøk under restaurering fra november 2024 til 2029</strong> — men selve fasaden mot Grote Markt er hovedseverdigheten uansett. <a href="https://www.visitleuven.be/en/town-hall" target="_blank" rel="noopener">visitleuven.be/town-hall</a></li>
<li><strong>KU Leuven Universitetsbibliotek og biblioteket­tårnet</strong>: Bygget med amerikanske donasjoner etter at tyskerne brente det ned i 1914 — og brente det ned igjen i 1940. Klatre 300 trinn opp i tårnet (63-klokkers carillon) for byens beste utsikt. Billett ca. 8 EUR, åpent daglig. <a href="https://www.visitleuven.be/en/university-library" target="_blank" rel="noopener">visitleuven.be/university-library</a></li>
<li><strong>Groot Begijnhof</strong> (UNESCO): Et helt minisamfunn av 1200-tallets begijnhuis — bedehus for ugifte religiøse kvinner som ikke var nonner. 13 hektar med brostein, broer og hageanlegg, eid av universitetet siden 1962. Gratis å vandre rundt i. <a href="https://www.visitleuven.be/en/great-beguinage" target="_blank" rel="noopener">visitleuven.be/great-beguinage</a></li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto i Leuven",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Stadhuis fra Grote Markt — det klassiske motivet, særlig i lavt kveldslys når statuene kaster lange skygger. <a href="https://www.google.com/search?tbm=isch&q=leuven+stadhuis+town+hall+golden+hour" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Oude Markt om kvelden — «Europas lengste bar», utebord langs hele plassen med gylden belysning og folkeliv. <a href="https://www.google.com/search?tbm=isch&q=leuven+oude+markt+evening+terraces" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Groot Begijnhof — brosteinsgater, små broer over Dijle-elva og rød murstein i kveldslys. <a href="https://www.google.com/search?tbm=isch&q=groot+begijnhof+leuven+cobblestones+bridge" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'Het verdriet van België (The Sorrow of Belgium)', author: 'Hugo Claus', year: 1983, relevance: 'Flandersk mesterverk om en katolsk familie under nazi-okkupasjonen — gir kontekst for Leuvens kompliserte forhold til både Tyskland og fransk Belgia.' },
        { type: 'book', title: 'Lof der Zotheid (In Praise of Folly)', author: 'Erasmus', year: 1511, relevance: 'Skrevet av en av Leuvens mest berømte tenkere — Erasmus underviste ved KU Leuven og skrev en del av sine humanistiske verker i byen.' },
        { type: 'film', title: 'Daens', year: 1992, relevance: 'Oscar-nominert flamsk film om presten Adolf Daens og arbeiderkampen — fanger den katolske og språkpolitiske spenningen som har formet Flandern Leuven ligger midt i.' },
      ],
      content: `<ul>
<li><strong>KU Leuven (1425)</strong> er kontinental-Europas eldste fortsatt aktive katolske universitet, grunnlagt med pavebrev fra Martin V. Erasmus av Rotterdam underviste her på 1500-tallet, og Gerardus Mercator (han med kartprojeksjonen) studerte her i 1530-årene. Universitetet ble splittet i 1968 etter en bitter språkstrid — den fransktalende delen ble flyttet ut og fikk en helt ny by, Louvain-la-Neuve, sør for Brussel.</li>
<li><strong>Bibliotek-tragedien (1914)</strong>: Da tyske styrker okkuperte Leuven i august 1914, brente de ned universitetsbiblioteket med 300 000 bøker og 1000 middelalderske manuskripter — en hendelse som vakte verdensvid forargelse og ble brukt i alliert propaganda om «tyske barbarer». Biblioteket ble bygget opp igjen med amerikanske donasjoner i 1928. I mai 1940 brente tyskerne det ned <em>på nytt</em>, og 900 000 bøker gikk tapt.</li>
<li><strong>Stella Artois</strong> har røtter tilbake til <em>Den Hoorn</em>-bryggeriet, dokumentert i Leuven i 1366 — eldre enn de fleste europeiske nasjonalstater. «Stella» (stjerne) ble lansert som julebrygg i 1926; «Artois» var etternavnet til mesterbryggeren som kjøpte Den Hoorn i 1717. Bryggeriet ligger fortsatt i sentrum, ved jernbanestasjonen, og er nå hovedkvarter for AB InBev — verdens største ølkonsern.</li>
<li><strong>Slaget ved Leuven (891)</strong>: Kong Arnulf av Kärnten knuste en vikinghær her i september 891 — et av få store nederlag for nordboerne på 800-tallet. Slaget regnes som starten på vikingtidens tilbakegang i de Lave land. Hyggelig detalj for to nordmenn på rundtur: byen feiret nylig 1100-årsjubileet for da forfedrene fikk juling.</li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Leuven",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://all.accor.com/hotel/6682/index.en.shtml" target="_blank" rel="noopener">ibis budget Leuven Centrum</a></strong> – Billigst. Rett ved Leuven sentralstasjon, ca. 10 min gange til Grote Markt. Enkle, moderne rom — null fjas, men varmt og rent. Parkering i Q-Park ved stasjonen (samme bygg/like ved), ca. 15–18 EUR/døgn. <em>Ca. 65–90 EUR/rom/natt.</em></li>
<li><strong><a href="https://all.accor.com/hotel/1457/index.en.shtml" target="_blank" rel="noopener">Ibis Leuven Centrum</a></strong> – Steget over budsjett. Brusselsestraat, ca. 7 min gange til Grote Markt. Standard Ibis-rom, men beliggenheten er gull. Parkering i Q-Park Ladeuze (300 m unna), ca. 18 EUR/døgn. <em>Ca. 95–130 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.radissonhotels.com/en-us/hotels/park-inn-leuven" target="_blank" rel="noopener">Park Inn by Radisson Leuven</a></strong> – Ved sentralstasjonen, ca. 10–12 min gange til Grote Markt. 3-stjerners kjede, romslige rom, eget treningsrom. Innendørs offentlig parkering rett ved hotellet, ca. 20 EUR/døgn. <em>Ca. 100–140 EUR/rom/natt.</em></li>
</ul>
<p>💡 Alle tre ligger nær stasjonen — gangavstand til Grote Markt/Oude Markt er 7–12 min, og dere slipper å lete etter parkering inne i den bilfrie kjernen.</p>`
    },
    {
      type: "food",
      title: "Middag i Leuven",
      bookingWarning: "Improvisio og Zarza krever reservasjon, særlig på Kristi himmelfartsdag. Domus tar walk-in, men kom før 21:00.",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.domusleuven.be/" target="_blank" rel="noopener">Domus</a></strong> – Eget mikrobryggeri midt i sentrum (Tiensestraat 8), hjemmebrygget Nostradomus-øl rett fra tanken og solid flamsk mat: stoofvlees (storfegryte i mørk øl), vol-au-vent, ribbenstek. Klassisk Leuven-stemning, mørke trepaneler, lokalt klientell. Åpent til 23:00 torsdager. <em>Ca. 20–30 EUR/pers.</em></li>
<li><strong>Brasserie Improvisio</strong> (Brusselsestraat 63b) – Restaurert bygg fra 1735 i gårdsrommet til Romaanse Poort, gammel klosterapotek-bygning. Fransk-belgisk kjøkken: blåskjell, kalvekinn i mørk øl, og en kotelett som av og til er kåret til Belgias beste. <em>Ca. 30–40 EUR/pers.</em></li>
<li><strong><a href="https://www.zarza.be/" target="_blank" rel="noopener">Zarza</a></strong> – Bondgenotenlaan 92. Belgisk-mediterransk fine-dining-light med renovert byhage som spisestue om sommeren. God vinliste, sesongmeny, listet i både Michelin Guide og Gault&Millau. Roligere alternativ etter en lang kjøredag. <em>Ca. 45–60 EUR/pers à la carte.</em></li>
</ul>
<p>💡 Med sen torsdagsankomst på fridag: Domus er tryggeste valg — autentisk, sjelden helt fullt, og dere drikker øl bryggemester laget 30 meter unna. Etterpå: én Stella på Oude Markt.</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Tyskland (på veien) og Flandern (Leuven)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Hilsen i Tyskland (på veien)</strong>: «Guten Tag», «Hallo», «Tschüss». På bensinstasjoner og raststätter er en kort «Hallo» nok. Tyskerne er direkte, ikke uhøflige.</li>
<li><strong>Språket i Leuven — VIKTIG</strong>: Leuven ligger i <strong>Flandern</strong> og er <strong>nederlandsktalende</strong>, ikke fransk. Å bestille en øl med «Bonjour, une bière s'il vous plaît» kan oppfattes som direkte uhøflig — det er en gammel språkpolitisk sak. Bruk engelsk, eller bedre: «<strong>Dag</strong>» eller «<strong>Goeiendag</strong>» som hilsen, «<strong>Dank u wel</strong>» for takk, «<strong>Een pintje, alstublieft</strong>» (én pils, takk) på pub.</li>
<li><strong>«Een pintje»</strong>: I Flandern bestiller man ikke «en øl», man bestiller «en pintje» (uttales <em>pin-sje</em>) — 25 cl pils, alltid. Be om «een Stella» og dere får akkurat det, hjemme på fabrikken.</li>
<li><strong>Ølkultur</strong>: Belgisk øl er en alvorlig sak. Hver øltype har sitt eget glass — Stella i karaffel-pokal, Leffe i kalk, trappistøl i kjegleglass. Aldri be om «en blond» — vær spesifikk på navn. Trappistøl (Westmalle, Westvleteren, Chimay) er ikke ferieøl; det er 8–11 % og slår hardt.</li>
<li><strong>Restaurantkultur</strong>: Vent på å bli vist til bord — flamlendere setter seg sjelden selv. Brød kommer ikke automatisk; bestilles ofte separat. Frites serveres med <strong>mayonnaise</strong>, ikke ketchup.</li>
<li><strong>Tipsing</strong>: 5–10 % er pent, men ikke obligatorisk — service er inkludert. Rund opp eller legg igjen et par euro. Aldri den amerikanske 20 %-en.</li>
<li><strong>Forskjell fra fransk Belgia</strong>: I Wallonia og Brussel virker fransk; i Flandern ikke. Leuven er like nederlandsk som Amsterdam, kulturelt sett. Si aldri «Belgia snakker fransk» til en flamlender med mindre dere vil ha en 30-minutters forelesning til middag.</li>
<li><strong>Engelsk</strong>: Veldig bra i Leuven — universitetsby med 60 000 studenter, mange internasjonale. Trygt fallback hvis nederlandsk ikke flyter.</li>
</ul>`
    },
  ],
};
