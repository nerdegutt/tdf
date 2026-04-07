// DAG 7
export const day7 = {
  day: 7,
  date: "19. mai",
  weekday: "Tirsdag",
  from: "Mont Saint-Michel",
  to: "La Rochelle",
  km: 330,
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
      title: "Overnatting i La Rochelle",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.un-hotel-sur-le-port.com/" target="_blank" rel="noopener">Un Hôtel sur le Port</a></strong> – 10 rom rett ved Vieux Port. Nyrenovert i maritim stil. <em>Ca. 80–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://la-rochelle-centre.kyriad.com/en-us/" target="_blank" rel="noopener">Kyriad La Rochelle Centre</a></strong> – Parkering på hotellet! <em>Ca. 58–80 EUR/rom/natt.</em></li>
<li><strong><a href="https://all.accor.com/hotel/0638/index.en.shtml" target="_blank" rel="noopener">Ibis La Rochelle Vieux Port</a></strong> – Pålitelig kjede, 79 rom, 24/7 bar. <em>Ca. 78+ EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i La Rochelle",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.lafleurdesel-larochelle.com/" target="_blank" rel="noopener">La Fleur de Sel</a></strong> – Bistronomisk, 100% hjemmelaget. 4.4/5, 4010 anmeldelser. Over 100 viner. Godt kjøttutvalg. <em>Ca. 30–40 EUR/pers.</em></li>
<li><strong><a href="https://laboussole-larochelle.fr/" target="_blank" rel="noopener">La Boussole</a></strong> – Asiatisk-fransk fusjon. Wok-retter med lam, curries, burgere. Fast meny 28–32 EUR. <em>Ca. 30–40 EUR/pers.</em></li>
<li><strong><a href="https://www.barandre.com/en/" target="_blank" rel="noopener">Bar André</a></strong> – Institusjon siden 1947, MOF-kokk. Best for sjømat. Dyrere enn antatt, delte anmeldelser nylig. <em>Ca. 50–70 EUR/pers.</em></li>
</ul>
<p>💡 La Fleur de Sel er det tryggeste og beste valget. La Boussole for noe annerledes.</p>`
    },
  ],
};
