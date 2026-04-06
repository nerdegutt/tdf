// DAG 13
export const day13 = {
  day: 13,
  date: "25. mai",
  weekday: "Søndag",
  from: "Avignon",
  to: "Dijon",
  km: 422,
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
      type: "food",
      title: "Middag i Dijon",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.lepreauxclercs.fr/" target="_blank" rel="noopener">Le Pré aux Clercs</a></strong> – Georges Blanc-signert brasserie overfor Hertugens palass. Meny 39 EUR, plat du jour 16 EUR. Åpent 7/7 – sikreste valg! <em>Ca. 25–50 EUR/pers.</em></li>
<li><strong><a href="https://www.le-coin-cache.fr/" target="_blank" rel="noopener">Le Coin Caché</a></strong> – Intim bistro, 50 plasser. Kveldsmeny 50 EUR. Normalt åpent man–fre – <strong>ring og sjekk for søndag!</strong> <em>Ca. 40–55 EUR/pers.</em></li>
<li><strong>Parapluie</strong> – Michelin-utvalgt overraskelsesmeny! 4.7/5, 850 anmeldelser. Normalt åpent man–fre – <strong>ring og sjekk for søndag!</strong> Rue Monge 74. <em>Ca. 35–50 EUR/pers.</em></li>
</ul>
<p>⚠️ Dag 13 er søndag. Le Coin Caché og Parapluie er normalt stengt lør–søn. <strong>Le Pré aux Clercs er det eneste sikre valget</strong> (åpent alle dager). Alternativ: L'Édito – åpent 7/7, plat du jour 16–18 EUR.</p>`
    },
  ],
};
