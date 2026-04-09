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
  intro: "La Rochelle er en av Atlanterhavskystens vakreste havnebyer, med 75 000 innbyggere og en gammel havn flankert av middelaldertårn. Byen var hugenottenes siste bastion i Frankrike — beleiret og knust av Richelieu i 1628 — og bærer fortsatt preg av sin dramatiske historie i de overdekkede buegangene og de monumentale havneforsvarsverkene.",
  coords: { lat: 46.16, lng: -1.15 },
  stops: [
    { name: "Fougères", lat: 48.35, lng: -1.20, type: "sight" },
    { name: "Nantes", lat: 47.22, lng: -1.55, type: "city" },
  ],
  trivia: [
    "Nantes-ediktet ble signert i 1598 i den SAMME borgen dere besøker — og hugenottflyktningene havnet helt til Rakkestad i Østfold!",
    "Richelieus demning over La Rochelles havn var inspirert av Aleksander den Stores beleiring av Tyros i 332 f.Kr.",
    "Gilles de Rais, Jeanne d'Arcs nærmeste våpenbror fra dag 4, ble henrettet på Place du Bouffay i Nantes i 1440 — anklaget for å ha drept over 100 barn.",
  ],
  sections: [
    {
      type: "sights",
      title: "Anbefalt stopp: Nantes (1–2 timer)",
      highlight: true,
      summary: "Borgen der Nantes-ediktet ble signert, Jules Vernes gigantiske mekaniske elefant, og en overdekt handlegate fra 1843.",
      bookingWarning: "Les Machines de l'Île – elefantturen kan selge ut!",
      bookingUrl: "https://www.lesmachines-nantes.fr/",
      references: [
        { type: "book", title: "Tjue tusen mil under havet", author: "Jules Verne", relevance: "Verne ble født i Nantes — havnebyen inspirerte eventyrlysten som gjennomsyrer alle bøkene hans. Les Machines-elefanten er en hyllest til ham." },
        { type: "film", title: "Lola", year: 1961, relevance: "Jacques Demys debutfilm er satt i Nantes, med scener fra Passage Pommeraye som dere besøker." },
      ],
      content: `<ul>
<li><strong>Château des Ducs de Bretagne</strong>: Massiv borg fra 1400-tallet. Gratis borggård og voller. <a href="https://www.chateaunantes.fr/" target="_blank" rel="noopener">chateaunantes.fr</a></li>
<li><strong>Les Machines de l'Île</strong>: Gigantiske mekaniske dyr – bl.a. en 12m høy elefant som GÅR! Inspirert av Jules Verne (født i Nantes). Perfekt fotoobjekt.</li>
<li><strong>Passage Pommeraye</strong>: Overdekt handlegate fra 1843. Vakker arkitektur. Brukt som location i Jacques Demys film <em>Lola</em> (1961).</li>
</ul>`
    },
    {
      type: "sights",
      title: "La Rochelle",
      highlight: true,
      summary: "Ikoniske havnetårn fra 1300-tallet, hugenottenes siste bastion og Richelieus brutale beleiring — dag 7 er hugenottenes dag.",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "De tre musketerer", author: "Alexandre Dumas", relevance: "Beleiringen av La Rochelle er et sentralt plottpoeng — d'Artagnan og musketérene kjemper ved de samme havnetårnene dere ser." },
      ],
      content: `<ul>
<li><strong>Vieux Port</strong>: De ikoniske havnetårnene Tour Saint-Nicolas og Tour de la Chaîne. 1300-tallet. <a href="https://www.larochelle-tourisme.com/" target="_blank" rel="noopener">larochelle-tourisme.com</a></li>
<li><strong>Tour de la Lanterne</strong>: Fyrtårn og fengsel fra 1445. Fangegraffiti på veggene.</li>
<li><strong>Arkadene</strong>: Overdekkede bueganger langs hovedgatene.</li>
<li><strong>Historie:</strong> Richelieus beleiring av hugenottene 1627–28.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Nantes-ediktet</strong> (1598): Henrik IV signerte her det berømte ediktet som ga hugenottene (franske protestanter) religionsfrihet. Det ble opphevet av Ludvig XIV i 1685, noe som førte til masseflukten av franske protestanter til hele Europa (inkludert noen til Norge).</li>
<li><strong>Jules Verne</strong> ble født i Nantes i 1828. Han rømte hjemmefra som 11-åring for å bli sjømann – faren hentet ham igjen. Opplevelsene fra havnebyen inspirerte ham til å skrive science fiction.</li>
<li><strong>La Rochelle-beleiringen</strong> (1627–28) er en av historiens mest brutale: Kardinal Richelieu bygde en 1,4 km lang steindemning tvers over havnen for å sulte ut hugenottene. Av byens 27 000 innbyggere overlevde bare ca. 5 000. Alexandre Dumas beskrev beleiringen i «De tre musketerer».</li>
<li>La Rochelle var en av de viktigste <strong>slavehamnene</strong> i Frankrike. Byen var sentral i trekantshandelen på 1700-tallet. Musée du Nouveau Monde dokumenterer denne historien.</li>
<li>Havnetårnene i La Rochelle ble koblet sammen med en massiv <strong>kjetting</strong> som kunne strekkes over havneåpningen for å stenge ute fiendtlige skip. Tour de la Chaîne (Kjedetårnet) har navn etter denne.</li>
<li><strong>Hugenottenes dag</strong>: Dag 7 er en komplett fortelling om religionsfrihet — dere starter ved borgen der Nantes-ediktet ble signert (1598, religionsfrihet gitt) og ender i La Rochelle (1628, religionsfrihet knust). Henrik IV, som signerte ediktet, var selv født protestant og konverterte med ordene <em>«Paris vaut bien une messe»</em> (Paris er verdt en messe).</li>
<li><strong>Hugenottflyktningene til Østfold</strong>: Da Ludvig XIV opphevet Nantes-ediktet i 1685, flyktet 200 000–400 000 hugenotter fra Frankrike. Noen endte i Norge — det finnes etterkommere av franske hugenotter i Østfold og rundt Fredrikshald (Halden). For to karer fra Rakkestad er dette slektsnær historie!</li>
<li><strong>Richelieus demning</strong> var inspirert av Aleksander den Stores beleiring av Tyros (332 f.Kr.). En komplett steinmolo med tårnfestninger ble bygget midt i Atlanterhavet på bare fem måneder. England sendte en flåte under hertugen av Buckingham for å bryte beleiringen, men den ble slått tilbake ved Île de Ré — en fiasko som bidro til den engelske borgerkrigen.</li>
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
    {
      type: "gem",
      title: "Fougères — Frankrikes største middelalderborg",
      content: `<p>Ca. 45 min fra Mont Saint-Michel, rett på ruten. Festningen ligger uvanlig nok i en dalbunn (de fleste borger er på høyder) fordi den beskytter et vadested over elven Nançon. 13 tårn og tre konsentriske ringmurer. Fougères var grensefestningen mellom Bretagne og Frankrike — den bretonske uavhengighetens siste bastion. Borgen falt til franske styrker i 1488, begynnelsen på slutten for det uavhengige Bretagne. Balzac brukte den som setting i romanen <em>Les Chouans</em>.</p>`,
      detour: "Rett på ruten",
      duration: "30–40 min",
      cost: "Ca. 10 EUR",
    },
  ],
};
