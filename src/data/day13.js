// DAG 13
export const day13 = {
  day: 13,
  date: "25. mai",
  weekday: "Mandag",
  from: "Avignon",
  to: "Dijon",
  km: 422,
  nights: 1,
  subtitle: "Obligatorisk matstopp i Lyon!",
  alert: "<strong>Andre pinsedag (25. mai)</strong> — offentlig fridag i Frankrike. Les Halles Paul Bocuse stenger kl. 13:00. Mange mindre butikker holder stengt, men de fleste restauranter og severdigheter har åpent.",
  intro: "Dijon var hovedstaden i det mektige hertugdømmet Burgund, som på 1400-tallet rivaliserte med Frankrike selv. I dag er byen kjent for sennep, vinruter og en av Frankrikes best bevarte middelalderbyer. Palais des Ducs, der hertugene residerte, huser nå et av landets fineste kunstmuseer.",
  coords: { lat: 47.32, lng: 5.04 },
  stops: [
    { name: "Orange", lat: 44.14, lng: 4.81, type: "sight" },
    { name: "Lyon", lat: 45.76, lng: 4.83, type: "city" },
  ],
  trivia: [
    "Lyon (Lugdunum) var HOVEDSTADEN i romersk Gallia — den nest viktigste byen i det vestlige Romerriket etter Roma selv. Alt det romerske dere har sett på turen (Köln, Narbonne, Pont du Gard, Nîmes) ble administrert herfra.",
    "Lyons silkearbeidere (canutene) gjorde opprør i 1831 under mottoet «Lev av arbeidet eller dø i kamp» — det første store arbeideropprøret i industrihistorien. Det inspirerte direkte Karl Marx, hvis fødehus dere besøker i morgen i Trier.",
    "Hertugene av Burgund i Dijon var på 1400-tallet RIKERE enn den franske kongen. Da Karl den Dristige falt ved Nancy i 1477, ble liket funnet halvspist av ulver — og datteren hans giftet seg inn i Habsburg-familien, som dermed overtok halve Europa.",
  ],
  sections: [
    {
      type: "sights",
      highlight: true,
      summary: "Gallias gamle hovedstad — traboules, Fourvière-utsikt og galloromanske teatre.",
      title: "Stopp: Lyon – Frankrikes gastronomiske hovedstad (2–3 timer)",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "film", title: "Lumière!", year: 2017, relevance: "Brødrene Lumière oppfant filmen i Lyon — dokumentaren viser de tidligste opptakene, mange filmet i gatene dere går i." },
        { type: "film", title: "Hotel Terminus: Klaus Barbie", year: 1988, relevance: "Dokumentar om «Slakteren fra Lyon» som styrte Gestapo herfra — traboule-passasjene dere ser ble brukt av motstandsfolk som flyktet fra ham." },
      ],
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
      highlight: true,
      summary: "Hertugenes palass, uglelykke og Frankrikes sennepshovedstad — der Burgunds mektige rike hadde sitt sete.",
      title: "Dijon – Sennepsbyen",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Wine Myths and Reality", author: "Benjamin Lewin", relevance: "Forklarer terroir-begrepet og burgunderviner — perfekt bakgrunn for vinsmaking i Beaune og langs Côte d\'Or." },
      ],
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
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Lyons traboules</strong>: De hemmelige passasjene gjennom bygninger i Vieux Lyon ble opprinnelig brukt av silkearbeidere for å transportere varer under tak (silke tåler ikke regn). Under WWII brukte den franske motstandsbevegelsen dem til å flykte fra Gestapo – det var umulig for tyskerne å kontrollere det labyrintiske nettverket.</li>
<li>Lyon var hovedsetet for <strong>Gestapo i Frankrike</strong>. Den beryktede Klaus Barbie («Slakteren fra Lyon») opererte herfra. Han ble først dømt for krigsforbrytelser i 1987 – etter å ha gjemt seg i Bolivia i årevis med CIA-hjelp.</li>
<li><strong>Paul Bocuse</strong>, Lyons store kokk, drev Restaurant Paul Bocuse med tre Michelin-stjerner i <strong>55 sammenhengende år</strong> (1965–2020) – en verdensrekord. Han regnes som grunnleggeren av «nouvelle cuisine».</li>
<li><strong>Dijonsennep</strong> ble berømt fordi man i 1856 begynte å bruke <strong>verjuice</strong> (saften fra umodne druer) i stedet for eddik – noe som ga en mildere, mer aromatisk sennep. Maille har laget sennep i Dijon siden 1747.</li>
<li><strong>Époisses-osten</strong> er så illeluktende at den angivelig er <strong>forbudt på offentlig transport i Frankrike</strong>. Napoleon elsket den.</li>
<li><strong>Lyon som Gallias hovedstad</strong>: Lugdunum ble grunnlagt i 43 f.Kr. av en av Caesars generaler. Keiser Claudius (født i Lyon i 10 f.Kr.) holdt herfra sin berømte tale der han argumenterte for at gallere burde få sete i det romerske senatet — bronsetavlen med talen er utstilt på Musée de la Civilisation Gallo-Romaine på Fourvière-høyden.</li>
<li><strong>Jean Moulin og motstandsbevegelsen</strong>: Lyon var HOVEDKVARTERET for hele den franske motstandsbevegelsen. De Gaulles utsending Jean Moulin samlet motstandsgruppene her i 1943, men ble forrådt, arrestert av Barbie i forstaden Caluire, torturert i tre uker uten å gi fra seg et eneste navn, og døde under transport til Tyskland. Han er Frankrikes største motstandshelt.</li>
<li><strong>Fourvière-basilikaen</strong> ble bygget 1872–96 som takk for at Lyon ble spart under den prøyssisk-franske krigen. Stilen er bevisst overdådig — en triumfalistisk proklamasjon av katolsk tro mot en stadig mer sekulær republikk. Den kostet dobbelt så mye som Paris-operaen.</li>
<li><strong>Burgunds rike — mektigere enn Frankrike</strong>: Under Filip den Gode og Karl den Dristige kontrollerte hertugdømmet Burgund, Flandern, Brabant, Holland og Luxembourg — dere har allerede kjørt gjennom deres territorium i Belgia (dag 3). Filip den Gode grunnla Den gylne vlies' orden (1430), og hoffet i Dijon var Europas mest raffinerte. Hadde Karl den Dristige overlevd Nancy, ville det kanskje eksistert et «Burgund» i dag i stedet for Belgia og Nederland.</li>
<li><strong>Cistercienserne og vintradisjonen</strong>: Burgunds verdensberømte viner ble systematisert av cisterciensermunker fra Cîteaux (20 min fra Dijon) — de SAMME cistercienserne som grunnla Sénanque (dag 12). Munkene smakte på jorden, studerte dreneringen og oppfant begrepet <strong>terroir</strong>. I 2015 ble Burgunderveienes «climats» UNESCO-listet. En flaske Romanée-Conti koster typisk 10 000–25 000 EUR.</li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Dijon",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://hoteldeshalles-dijon.com/en/hotel-2/" target="_blank" rel="noopener">Hôtel des Halles</a></strong> – 8.4/10 Booking, 37 rom, 200m fra Les Halles. Parkering 820 fot unna, 11 EUR/dag. 1 frokost kjøpt = 1 gratis! <em>Ca. 75–100 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotel-lejacquemart.fr/eng/" target="_blank" rel="noopener">Hôtel Le Jacquemart</a></strong> – 1740-bygning, renovert 2024, 8.5/10. Parkering 300m unna (10 EUR/dag). Ingen heis. <em>Ca. 65–100 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-bb.com/en/hotel/dijon-centre" target="_blank" rel="noopener">B&B Hotel Dijon Centre</a></strong> – Billigst. Twin-rom. Utsjekk kl. 12. <em>Ca. 60–92 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "gem",
      title: "Orange — det eneste komplette romerske teateret i Europa",
      content: `<p>25 min nord for Avignon, rett på A7 (0 min omvei). Det romerske teateret har en <strong>komplett scenevegg</strong> — 37 meter høy, den eneste i Europa som fortsatt står intakt. Rommer 9 000 tilskuere. UNESCO. Ludvig XIV sa da han så veggen: «Det er den vakreste muren i mitt kongerike.» Et direkte supplement til Pont du Gard og Nîmes (dag 11).</p>`,
      detour: "Rett på A7, 0 min omvei",
      duration: "30 min",
      cost: "Ca. 11 EUR",
    },
    {
      type: "food",
      title: "Middag i Dijon",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.lepreauxclercs.fr/" target="_blank" rel="noopener">Le Pré aux Clercs</a></strong> – Georges Blanc-signert brasserie overfor Hertugens palass. Meny 39 EUR, plat du jour 16 EUR. Åpent 7/7 – sikreste valg! <em>Ca. 25–50 EUR/pers.</em></li>
<li><strong><a href="https://www.le-coin-cache.fr/" target="_blank" rel="noopener">Le Coin Caché</a></strong> – Intim bistro, 50 plasser. Kveldsmeny 50 EUR. Åpent man–fre. <em>Ca. 40–55 EUR/pers.</em></li>
<li><strong>Parapluie</strong> – Michelin-utvalgt overraskelsesmeny! 4.7/5, 850 anmeldelser. Åpent man–fre. Rue Monge 74. <em>Ca. 35–50 EUR/pers.</em></li>
</ul>
<p>💡 Le Pré aux Clercs er åpent 7/7 (bekreftet på lepreauxclercs.fr). Le Coin Caché og Parapluie er åpne man–fre iht. flere kilder.</p>`
    },
  ],
};
