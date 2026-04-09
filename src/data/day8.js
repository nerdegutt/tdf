// DAG 8
export const day8 = {
  day: 8,
  date: "20. mai",
  weekday: "Onsdag",
  from: "La Rochelle",
  to: "San Sebastián",
  km: 431,
  nights: 2,
  subtitle: "Inn i Baskerland!",
  intro: "San Sebastián — eller Donostia på baskisk — er en kystby med 190 000 innbyggere ved Biscayabukta, omgitt av grønne åser. Byen regnes som et av Europas fremste matdestinasjoner, med flere Michelin-stjerner per innbygger enn noe annet sted i verden. La Concha-stranden er konsekvent rangert blant Europas vakreste.",
  coords: { lat: 43.32, lng: -1.98 },
  stops: [
    { name: "Bordeaux", lat: 44.84, lng: -0.58, type: "city" },
    { name: "Biarritz", lat: 43.48, lng: -1.56, type: "city" },
  ],
  trivia: [
    "Bordeaux var Frankrikes nødhovedstad TRE ganger — 1870, 1914 og 1940. De Gaulle fløy det siste flyet fra Bordeaux til London 17. juni 1940.",
    "Bordeaux-vin var skattefri i England i 300 år takket være Eleanor av Aquitaine — opptil 1000 skip eskorterte årlige vinflåter over kanalen.",
    "Bajonetten ble oppfunnet i Bayonne — baskiske bønder stakk knivene sine i geværløpene da de gikk tom for ammunisjon.",
  ],
  sections: [
    {
      type: "sights",
      title: "Mulige stopp på veien",
      highlight: true,
      summary: "Bordeaux med verdens største reflekterende basseng, elegant Biarritz og den baskiske fiskerlandsbyen der Ludvig XIV giftet seg.",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Fiesta (The Sun Also Rises)", author: "Ernest Hemingway", relevance: "Hemingway skrev om Baskerland, San Fermín og tyrefektingskulturen — dere kjører inn i landskapet hans fra Biarritz til San Sebastián." },
        { type: "book", title: "Essais", author: "Michel de Montaigne", relevance: "Montaigne var fra slottet sitt nær Bordeaux — essayene hans er formet av Aquitaine-landskapet dere passerer gjennom." },
      ],
      content: `<ul>
<li><strong>Bordeaux</strong> (ca. halvveis): Verdensarvlistet havneområde. Place de la Bourse med <strong>Miroir d'Eau</strong> (verdens største reflekterende basseng). Stopp for lunsj + 1 times vandring. <a href="https://www.bordeaux-tourisme.com/" target="_blank" rel="noopener">bordeaux-tourisme.com</a></li>
<li><strong>Biarritz</strong> (1t før San Seb.): Elegant badeby. Rocher de la Vierge – statue på klippe med gangbro.</li>
<li><strong>Saint-Jean-de-Luz</strong> (30 min før San Seb.): Sjarmerende baskisk fiskerlandsby. Ludvig XIV giftet seg her 1660.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Bordeaux</strong> var engelsk i 300 år (1154–1453)! Englands Plantagenet-konger styrte Aquitaine, og Bordeaux var deres viktigste franske by. Vinhandelen med England blomstret – «claret» (rødvin fra Bordeaux) ble nasjonaldrikken i England og er det til dels fortsatt.</li>
<li><strong>Miroir d'Eau</strong> i Bordeaux (2006) bruker bare 2 cm vann over granittflater, men skaper en perfekt speiling av Place de la Bourse. Det tømmes med jevne mellomrom og erstattes av tåke – designet av Michel Corajoud.</li>
<li><strong>Biarritz</strong> ble et fashionabelt feriested da keiserinne Eugénie (Napoleon IIIs kone) begynte å feriere her på 1850-tallet. Byens berømte Hôtel du Palais er det tidligere keiserpaaret.</li>
<li><strong>Saint-Jean-de-Luz</strong>: Kirken Église Saint-Jean-Baptiste er der Ludvig XIV giftet seg med den spanske prinsessen Maria Teresa i 1660. Døren kongen gikk gjennom ble deretter <strong>murt igjen</strong> – og er det fortsatt.</li>
<li><strong>Eleanor av Aquitaine</strong> (1152): Bordeaux-vinen ble «engelsk» da Eleanor giftet seg med Henrik II Plantagenet og brakte hele Aquitaine som medgift. I 300 år var Bordeaux-vin skattefri i England — den engelske flåten eskorterte årlige vinflåter med opptil 1000 skip. Etter Hundreårskrigens slutt (1453) ble «claret» et luksusprodukt i stedet for hverdagsdrikke.</li>
<li><strong>Castillon 1453</strong>: Hundreårskrigens SISTE slag fant sted 50 km øst for Bordeaux. General Talbot, 80 år gammel, ble drept av en kanonkule — første gang artilleri avgjorde et stort europeisk slag. Bordeaux falt tre måneder senere, og 300 års engelsk styre var over.</li>
<li><strong>Baskisk hvalfangst</strong>: Saint-Jean-de-Luz var en av Europas viktigste hvalfangerhavner på 1500–1600-tallet. Baskerne fulgte hvalene over Atlanterhavet og nådde Newfoundland lenge før Columbus — arkeologiske funn i Red Bay, Labrador (Canada) bekrefter dette.</li>
<li><strong>Pyreneerfreden</strong> (1659) ble undertegnet i Saint-Jean-de-Luz — den avsluttet krigen mellom Frankrike og Spania og trakk den grensen som fortsatt gjelder. Ludvig XIVs bryllup med Maria Teresa VAR selve freden — en politisk allianse forkledd som romantikk.</li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i San Sebastián (2 netter: 20.–21. mai)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://sansebayhotel.com/?lang=en" target="_blank" rel="noopener">Hotel SANSEbay</a></strong> – 9.6/10 Booking! Boutique 2017, havutsikt, robotparkering i bygget (!). <em>Ca. 98–150 EUR/rom/natt.</em></li>
<li><strong><a href="https://pensiongaribai.com/en/" target="_blank" rel="noopener">Pensión Garibai</a></strong> – Moderne (2016), 12 rom, 1 min til Parte Vieja. NB: Mai-priser kan være høyere. <em>Ca. 80–150 EUR/rom/natt.</em></li>
<li><strong><a href="https://pensiongoiko.com/" target="_blank" rel="noopener">Pensión Goiko</a></strong> – Midt i Parte Vieja. Billigst. Gatestøy fra barer om natten. <em>Ca. 60–90 EUR/rom/natt.</em></li>
</ul>
<p>🅿️ SANSEbay har robotparkering i bygget – sjelden i sentrum! Varsle hotellet om bilen i forkant.</p>`
    },
    {
      type: "food",
      title: "Middag – Pintxos-runde!",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>La Cuchara de San Telmo</strong> – Legendarisk! Alt lages fresh fra tavle. Oksekinnet, sopprisotto med blekk. <strong>Kun kontant!</strong> Forvent kø – kom tidlig. Santa Korda Kalea 4, Parte Vieja. <em>Ca. 20–30 EUR/pers.</em></li>
<li><strong><a href="https://www.restaurantegandarias.com/en/" target="_blank" rel="noopener">Gandarias</a></strong> – Institusjon. Fantastisk txuletón (baskisk biff) og ibérico. Pintxos-bar + restaurant. Kjøkken 11–24. <em>Ca. 35–55 EUR/pers (restaurant).</em></li>
<li><strong><a href="https://www.bodegadonostiarra.com/en/" target="_blank" rel="noopener">Bodega Donostiarra</a></strong> – Vinkjeller siden 1924 i roligere Gros-bydelen. Pintxos 2 EUR stk, ferske på bestilling. <em>Ca. 20–30 EUR/pers.</em></li>
</ul>
<p>🍷 Start med pintxos-runde i Parte Vieja! Noen biter på hver bar, del opp kvelden.</p>`
    },
    {
      type: "gem",
      title: "Bayonne — Frankrikes sjokoladehovedstad",
      content: `<p>Rett på ruten mellom Bordeaux og San Sebastián. Jødiske sjokolademakere bosatte seg her på 1600-tallet etter å ha blitt fordrevet fra Spania. <strong>Cazenave</strong> (Place du Reduit) har servert varm sjokolade siden 1854 — tykk som pudding. Gamlebyen har karakteristiske rød-og-grønne skodder, gotisk katedral, og <strong>Halles de Bayonne</strong> der dere kan kjøpe fersk-skåret Jambon de Bayonne. Bayonne ga også verden bajonetten — baskiske bønder stakk knivene sine i geværløpene da de gikk tom for ammunisjon.</p>`,
      detour: "Rett på ruten",
      duration: "30–45 min",
      cost: "Gratis (+ sjokoladehandel)",
    },
  ],
};
