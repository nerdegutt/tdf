// DAG 16
export const day16 = {
  day: 16,
  date: "28. mai",
  weekday: "Torsdag",
  from: "Trier",
  to: "Hameln",
  km: 481,
  hours: 5,
  nights: 1,
  subtitle: "Langs Mosel- og Rhin-dalene",
  intro: "Hameln er eventyrbyen der legenden om Rottefangeren har preget gatene siden 1284. Byen har Tysklands fineste samling av Weserrenessanse-arkitektur — overdådige steinfasader fra 1500- og 1600-tallet langs smale brosteinsbelagte gater. Med bare 60 000 innbyggere er den overraskende sjarmerende og perfekt for en kveldsvandring.",
  coords: { lat: 52.10, lng: 9.36 },
  stops: [
    { name: "Koblenz", lat: 50.36, lng: 7.60, type: "city" },
  ],
  trivia: [
    "Klemens von Metternich — arkitekten bak Wienkongressen som «ga» Norge til Sverige i 1814 — ble født i Koblenz i 1773. Dere står altså på fødestedet til mannen som bestemte Norges skjebne.",
    "I år 9 e.Kr. ble tre romerske legioner (ca. 20 000 soldater) tilintetgjort av germanske styrker under høvding Arminius i Teutoburgerwald, 45 min fra Hameln. Det er DETTE som forklarer hvorfor Köln og Trier ble romerske byer — men Hamburg og Hameln aldri ble det. Keiser Augustus slo hodet mot veggen og ropte: «Varus, gi meg tilbake mine legioner!»",
    "I Hameln er det den dag i dag forbudt å spille musikk i Bungelosenstrasse — gaten barna angivelig ble ført gjennom av Rottefangeren i 1284.",
  ],
  sections: [
    {
      type: "sights",
      highlight: true,
      summary: "Der Mosel møter Rhinen — kabelbane over elven til Europas mest befestede punkt (3000 år!). Kjør Mosel-veien hit, ikke motorveien.",
      title: "Anbefalt stopp: Koblenz (ca. 2t fra Trier)",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Loreley (dikt)", author: "Heinrich Heine", relevance: "Heines udødelige dikt om sirenen ved Loreley-klippen — dere kjører forbi den langs Rhinen mellom Koblenz og Bingen." },
      ],
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
      highlight: true,
      summary: "Rottefangerens by med Europas fineste Weserrenessanse-arkitektur. Perfekt for kveldsvandring etter en lang kjøredag.",
      title: "Hameln (Hamelin) – Rottefangerbyen",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Barnas og hjemmets eventyr", author: "Brødrene Grimm", relevance: "Rottefangeren av Hameln er et av Grimms mest kjente eventyr — dere vandrer i gatene der 130 barn angivelig forsvant i 1284." },
      ],
      content: `<ul>
<li>Legenden om Rottefangeren (1284). Bindingsverkshus fra Weserrenessansen (1500–1600-tallet).</li>
<li><strong>Rattenfängerhaus</strong>: Bygning fra 1602 med innskrift om legenden.</li>
<li>Kompakt gammel by – perfekt for kveldsvandring.</li>
<li><a href="https://www.hameln.de/" target="_blank" rel="noopener">hameln.de</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Deutsches Eck</strong> i Koblenz: Monumentet for keiser Wilhelm I ble reist i 1897, ødelagt i WWII, og gjenoppbygd først i 1993. I mellomtiden sto bare sokkelen – med et fransk flagg plantet på toppen under okkupasjonen som en spesiell provokasjon.</li>
<li><strong>Rhindalen</strong> mellom Koblenz og Bingen er fullt av borger fordi Rhin-grevene krevde <strong>bompenger</strong> av alle skip som passerte. Hver borg kontrollerte en del av elven. Loreley-klippen (nær St. Goar) er berømt for sagnet om en sirene som lokket sjømenn i døden med sin sang – Heinrich Heine skrev et berømt dikt om det.</li>
<li><strong>Rottefangeren av Hameln</strong>: Den eldste skriftlige kilden er fra 1384 – en innskrift i Hameln som sier at 130 barn forsvant 26. juni 1284. Ingen rotter nevnes i de tidligste versjonene! Moderne historikere tror legenden kan referere til unge mennesker som emigrerte til Øst-Europa under den tyske Ostsiedlung-koloniseringen, eller til barn som døde i en epidemi.</li>
<li><strong>Weserrenessansen</strong> (arkitekturstilen i Hameln) er en unik nordtysk variant av renessansearkitekturen fra ca. 1520–1620. Kjennetegnes av overdådige steinornamenterte gavler med volutter og pyramider. Hameln har Tysklands fineste samling.</li>
<li><strong>Ehrenbreitstein — 3000 år befestning</strong>: Festningen over Koblenz er et av de eldste kontinuerlig befestede stedene i Europa — fra bronsealderen via romersk garnison til prøyssisk superfestning (1817–28, den nest største i Europa etter Gibraltar). Napoleon sprengte den forrige festningen etter at den hadde motstått franskmennene i 10 år. Fra toppen forstår man HVORFOR Koblenz har vært strategisk viktig i 3000 år: to store elver møtes her.</li>
<li><strong>Metternich — født i Koblenz</strong>: Klemens von Metternich, den mest innflytelsesrike europeiske statsmannen mellom Napoleon og Bismarck, ble født her i 1773. Han var arkitekten bak Wienkongressen (1814–15) som redesignet Europa etter Napoleons fall. For to nordmenn: Metternichs Wienkongress var den som «ga» Norge til Sverige.</li>
<li><strong>Teutoburgerwald (45 min fra Hameln)</strong>: I år 9 e.Kr. ble tre romerske legioner under general Varus tilintetgjort av germanske styrker. Slaget stoppet romersk ekspansjon østover for godt — Rhinen forble grensen. Det er dette som forklarer hvorfor Köln (dag 2) og Trier (dag 14–15) ble romerske byer mens Hamburg og Hameln aldri ble det. Hermannsdenkmal, en 53 meter høy statue av Arminius, troner på en ås nær Detmold.</li>
<li><strong>Loreley-klippen</strong> (mellom Koblenz og Bingen): Den snevre passasjen forsterker elvelyden slik at det høres ut som en stemme. Hundrevis av båter har forlist her. Heinrich Heine udødeliggjorde sagnet om sirenen i 1824 — og diktet ble så populært at nazistene ikke turte forby det, men trykket det som «Forfatter ukjent». Les diktet høyt i bilen!</li>
</ul>`
    },
    {
      type: "gem",
      title: "Beilstein — Mosels Tornerose",
      content: `<p>Halvveis mellom Cochem og Koblenz langs Mosel-veien. En bitte liten vinlandsby (ca. 140 innbyggere) der tiden stoppet på 1600-tallet. Ruinene av <strong>Burg Metternich</strong> (ja, DEN Metternich-familien) troner over landsbyen. Ingen suvenirbutikker. Ingen turistbusser. Bare stein, vin og stillhet.</p>`,
      detour: "Rett på Mosel-veien",
      duration: "15–20 min",
      cost: "Gratis",
    },
    {
      type: "accommodation",
      title: "Overnatting i Hameln",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.hotel-hameln.de/en/" target="_blank" rel="noopener">Hotel An der Altstadt</a></strong> – 8.6/10, familiedrevet fra 1901. <strong>Gratis parkering + frokost inkludert!</strong> Best value. Service 9.8! <em>Ca. 69–126 EUR/rom/natt.</em></li>
<li><strong>Altstadtpension Hameln</strong> – 9.0/10 Booking! #1 B&B. Rolig sidegate. Personale 9.7. Sjekk parkeringsmuligheter. <em>Ca. 86–91 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotel-zur-boerse.de/en/" target="_blank" rel="noopener">Hotel zur Börse</a></strong> – Midt i gamlebyen, 43 rom. Parkeringshus overfor 12,50 EUR/dag. <em>Ca. 82–130 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Hameln",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.gaststaette-reichsadler.de/" target="_blank" rel="noopener">Gaststätte Reichsadler</a></strong> – Eldste pub i Hameln. Rumpsteak som angivelig slo 80 GBP-steak i London! 4.5/5, 1900 anmeldelser. Litt utenfor sentrum (Klutviertel). <em>Ca. 15–25 EUR/pers.</em></li>
<li><strong>India Haus im Rattenfängerhaus</strong> – Det ikoniske bygget fra 1602 er nå indisk restaurant (siden 2021). 4.6/5 med 4800+ anmeldelser. Åpent daglig. Opplevelsen er like mye bygningen som maten! <em>Ca. 15–25 EUR/pers.</em></li>
<li><strong><a href="https://www.rattenkrug.de/" target="_blank" rel="noopener">Paulaner im Rattenkrug</a></strong> – Hamelns eldste vertshus (200+ år). Schweinshaxe, sprø schnitzel, Paulaner fra fat. Åpent torsdag fra kl. 12. <em>Ca. 20–30 EUR/pers.</em></li>
</ul>
<p>🐀 Rattenfängerhaus er like mye opplevelse som middag – uansett om det er tysk eller indisk!</p>`
    },
  ],
};
