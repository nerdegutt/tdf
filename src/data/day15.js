// DAG 15
export const day15 = {
  day: 15,
  date: "27. mai",
  weekday: "Onsdag",
  from: "Trier",
  to: "Trier",
  km: 0,
  nights: 0,
  subtitle: "Heldag / Mosel-dagstur",
  description: "Mosel-dagstur fra Trier — bratte vinmarker, Bernkastel-Kues, Cochem og Riesling fra et av Europas mest pittoreske vinlandskap.",
  intro: "Mosel-dalen er et av Europas mest pittoreske vinlandskap, med bratte vinmarker som stuper ned mot den sakte buktende elven. Romerne plantet de første vinrankene her for nesten 2000 år siden, og Rieslingen fra disse hellingene regnes blant verdens beste. Bernkastel-Kues og Cochem er dalens to perler — bindingsverkshus, eventyrborger og vinsmaking.",
  coords: { lat: 49.75, lng: 6.64 },
  stops: [
    { name: "Bernkastel-Kues", lat: 49.92, lng: 7.07, type: "city" },
    { name: "Cochem", lat: 50.15, lng: 7.17, type: "city" },
  ],
  trivia: [
    "General Patton sendte dette telegrammet da han inntok Trier i mars 1945: «Have taken Trier with two divisions. Do you want me to give it back?» — etter at hovedkvarteret hadde sagt at det ville kreve fire divisjoner.",
    "Cusanusstiftet i Bernkastel-Kues er en av verdens eldste fungerende stiftelser (grunnlagt 1458) — den har servert vin fra sine egne vinmarker i over 560 år. Å drikke vin i kjelleren er å drikke i en institusjon eldre enn boktrykkerkunsten.",
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
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "I, Claudius", author: "Robert Graves", relevance: "Keiser Claudius ble født i Lyon (dag 13) og styrte fra Roma — romerne som plantet Mosels vinranker handlet på hans ordre." },
        { type: "film", title: "Barbarians (Netflix)", year: 2020, relevance: "Skildrer Teutoburgerwald-slaget der Romerrikets ekspansjon stoppet — grensen de trakk forklarer hvorfor Mosel ble romersk men Hamburg aldri ble det." },
      ],
      content: `<ul>
<li><strong>Mosel-vinene</strong> har vært berømt siden romertiden. Den romerske poeten Ausonius skrev diktet «Mosella» (ca. 370 e.Kr.) der han skildrer elvedalen, vinmarkene og det gode livet – det er en av de eldste skriftlige kildene om vinproduksjon i Tyskland.</li>
<li><strong>Bernkastel-Kues</strong> er fødebyen til <strong>Nikolaus Cusanus</strong> (1401–64), en av senmiddelalderens viktigste filosofer, matematikere og kardinaler. Han foreslo at jorden dreide rundt solen 100 år før Kopernikus. Hospitalet han grunnla (St.-Nikolaus-Hospital/Cusanusstift) fungerer fortsatt og har en historisk vinbar.</li>
<li>Vinmarkene langs Mosel er blant <strong>verdens bratteste</strong> – med helninger på opptil 65 grader. Alt arbeidet må gjøres for hånd. Calmont-vinmarken mellom Bremm og Eller er den bratteste i Europa.</li>
<li><strong>Cochem</strong> sin Reichsburg ble fullstendig ødelagt av franske tropper under <strong>Pfälziske arvefølgekrig</strong> (1689) og lå i ruiner i nesten 200 år. Den ble gjenoppbygd i ny-gotisk stil av den berlinske forretningsmannen Louis Ravené i 1868–77.</li>
<li><strong>Romerne brakte vinen til Mosel</strong>: De første vinrankene ble plantet av romerske legionærer på 100-tallet e.Kr. — trolig brakte de Elbling-druen (en av verdens eldste druesorter, fortsatt dyrket langs Mosel) fra Italia. Ved Neumagen-Dhron (halvveis til Bernkastel) ble det i 1884 funnet en romersk steinskulptur av en vinbåt — det eldste fysiske beviset på vinhandel langs Mosel, fra ca. 220 e.Kr.</li>
<li><strong>Trier under WWII</strong>: Byen ble bombet gjentatte ganger, men de romerske monumentene overlevde nesten uskadd. Konstantinbasilikaen BRANT (interiøret ble totalskadd i 1944), men de 1700 år gamle murene stod. Under de alliertes innmarsj i mars 1945 sendte general Patton sitt berømte telegram etter å ha tatt byen med bare to divisjoner.</li>
<li><strong>Burg Eltz</strong> (20 min fra Cochem): En av Tysklands mest spektakulære borger — og en av de FÅ som aldri ble ødelagt. Den har vært i SAMME families eie i over 850 år (33 generasjoner). Tre familiegreiner eide hver sin fløy og levde der samtidig — et middelaldersk «timeshare». Borgen stod på den tyske 500-markseddelen.</li>
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
    {
      type: "gem",
      title: "Burg Eltz — aldri ødelagt, 850 år i samme familie",
      content: `<p>Gjemt i en dal ved en sideelv til Mosel. En av Tysklands mest autentiske middelalderborger — <strong>aldri erobret eller ødelagt</strong>, hverken av Ludvig XIV (som ødela alt annet i Rhindalen i 1689) eller av WWII-bombingen. Tre tårn, tre familier, én delt borggård. Interiøret er originalt middelalder. Visuelt magisk — borgen ser ut som den stiger opp av skogen. Stod på den gamle 500 D-Mark-seddelen.</p>`,
      detour: "20 min fra Cochem",
      duration: "2 timer (inkl. kjøring og guidet tur)",
      cost: "Ca. 12 EUR",
    },
    {
      type: "food",
      title: "Middag i Trier (kveld 2)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.kistetrier.de/" target="_blank" rel="noopener">Kartoffel Restaurant Kiste</a></strong> – Trier-institusjon! Kreative potettrettet + tyske klassikere. 340 plasser. #15 TripAdvisor. Åpent daglig 11–23. <em>Ca. 15–25 EUR/pers.</em></li>
<li><strong><a href="https://www.brauhaus-trier.de/" target="_blank" rel="noopener">Altes Brauhaus Trier</a></strong> – Gammelt bryggeri, blodpølse med surkål, svineribbe, Biergarten. Åpent ti–fr fra 17:00. <em>Ca. 18–30 EUR/pers.</em></li>
<li><strong><a href="https://www.schlemmereule.com/" target="_blank" rel="noopener">Schlemmereule</a></strong> – Fine dining, 3-retters 69 EUR. #9 i Trier, Travelers' Choice. Splurge-alternativet! <em>Ca. 50–70 EUR/pers.</em></li>
</ul>`
    },
  ],
};
