// DAG 14
export const day14 = {
  day: 14,
  date: "26. mai",
  weekday: "Tirsdag",
  from: "Dijon",
  to: "Trier",
  km: 548,
  nights: 1,
  subtitle: "Gjennom Alsace til Tysklands eldste by",
  intro: "Trier ble grunnlagt av romerne som Augusta Treverorum i 16 f.Kr. og er Tysklands eldste by. Under keiser Konstantin var den hovedstad for hele det nordvestlige Romerriket, og monumentene fra den tiden — Porta Nigra, Konstantinbasilikaen og keiserbadene — gjør byen til en åpen bok i romersk historie. Karl Marx ble født her i 1818.",
  coords: { lat: 49.75, lng: 6.64 },
  stops: [
    { name: "Riquewihr", lat: 48.17, lng: 7.30, type: "city" },
  ],
  trivia: [
    "Under WWII ble ca. 130 000 unge alsatiske menn tvangsrekruttert til Wehrmacht og Waffen-SS — kalt «Malgré-nous» (mot vår vilje). Mange døde ved Stalingrad. Etter krigen ble de stigmatisert i Frankrike og ignorert i Tyskland.",
    "Trier var ikke bare en provins — under Diokletians tetrarkireform (293 e.Kr.) ble byen hovedstad for HELE det nordvestlige Romerriket, inkludert Gallia, Britannia og Hispania. Keiser Konstantin residerte her før han flyttet til Konstantinopel.",
    "Mosels fattige vinbønder inspirerte den unge Marx direkte: som 24-årig journalist skrev han artikler om deres elendige kår — hans første konfrontasjon med materiell fattigdom, som formet overgangen fra filosofi til politisk økonomi.",
  ],
  sections: [
    {
      type: "sights",
      highlight: true,
      summary: "Intakt 1500-tallsby som inspirerte Disneys «Skjønnheten og Udyret». Velg to landsbyer, ikke fire — Riquewihr + Eguisheim er den optimale kombinasjonen.",
      title: "Stopp: Riquewihr, Alsace (ca. halvveis)",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "film", title: "La Belle et la Bête", year: 1946, relevance: "Cocteaus eventyrfilm inspirerte Disneys versjon — og Riquewihr var forbildet for Belles landsby. Dere går i kulissene." },
        { type: "book", title: "A Childhood Under the Nazis", author: "Tomi Ungerer", relevance: "Ungerer vokste opp i Strasbourg/Alsace under okkupasjonen — hans beretning gir ansikt til «Malgré-nous»-tragedien dere leser om her." },
      ],
      content: `<ul>
<li>Intakt by fra 1500-tallet. «Les Plus Beaux Villages de France». Ca. 1500 innb.</li>
<li>Bindingsverkshus i alle farger langs brosteinsgatene.</li>
<li><strong>Dolder-tårnet</strong>: Bytårnet fra 1291.</li>
<li>Overlevde begge verdenskrigene nesten uskadd.</li>
<li>Fun fact: Inspirasjon for landsbyen i Disneys «Skjønnheten og Udyret»!</li>
<li><a href="https://www.riquewihr.fr/" target="_blank" rel="noopener">riquewihr.fr</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Riquewihr</strong> skiftet mellom fransk og tysk kontroll <strong>fem ganger</strong> mellom 1871 og 1945 (tysk 1871, fransk 1918, tysk 1940, fransk 1944, endelig fransk 1945). Innbyggerne snakker fortsatt alsatisk, en alemannisk dialekt nærmere tysk enn fransk.</li>
<li>At byen overlevde begge verdenskrigene nesten uskadd er bemerkelsesverdig – Alsace var en av de hardest rammede regionene. Teorien er at generaler på begge sider hadde drukket Riquewihr-vin og ville bevare vinmarkene.</li>
<li><strong>Trier</strong> ble grunnlagt av romerne som <strong>Augusta Treverorum</strong> i 16 f.Kr. – det gjør den eldre enn London (43 e.Kr.) og over 1000 år eldre enn Berlin. Byen hevder å være grunnlagt enda tidligere, med en legendarisk opprinnelse 1300 år før Roma.</li>
<li><strong>Porta Nigra</strong> («Den svarte porten») fikk sitt navn fra middelalderen, da steinene hadde mørknet av vær og vind. I middelalderen bodde det en gresk eneboer (Simeon) i tårnet – etter hans død ble porten omgjort til en kirke. Napoleon beordret kirken fjernet og restaurerte den til sin romerske form.</li>
<li><strong>Konstantinbasilikaen</strong> i Trier er det største sammenhengende rommet som har overlevd fra antikken – 67 meter langt, 27 meter bredt og 33 meter høyt. Da den ble bygget (ca. 310), var veggene dekket av marmor og gulvet hadde gulvvarme via et <strong>hypocaust</strong>-system (romersk sentralvarme).</li>
<li><strong>Karl Marx</strong> ble født i Trier i 1818 i et helt ordinært middelklassehjem. Huset er nå museum. Kina donerte en 5,5 meter høy bronsestatue av Marx til byen i 2018 – noe som skapte betydelig lokal debatt.</li>
<li><strong>Alsace — Europas mest omstridte grenseland</strong>: Alsace var tysk i over 800 år (del av Det hellige romerske rike) før Frankrike annekterte det gradvis på 1600-tallet. Mellom 1871 og 1945 byttet det mellom Frankrike og Tyskland fire ganger — og hver gang ble befolkningen tvunget til å skifte språk, nasjonalitet og lojalitet. Malgré-nous-historien (130 000 tvangsrekrutterte) er det mest hjerteskjærende kapittelet.</li>
<li><strong>Trier — det vestlige Romerrikets fire hovedsteder</strong>: Under Diokletians tetrarkireform ble Romerriket delt i fire, og Trier ble hovedstad for Gallia, Britannia og Hispania. I sin storhetstid (300-tallet) hadde byen ca. 80 000 innbyggere — større enn London på den tiden. Det var i Trier Konstantin konverterte til kristendommen — beslutningen som forandret verden.</li>
<li><strong>Trierer Dom — Jesu kappe</strong>: Katedralen påstår å oppbevare Den hellige kappe — kappen Jesus angivelig bar før korsfestelsen. Den vises ekstremt sjelden (sist i 2012), og millioner av pilegrimer strømmer til. Under domen er det fire lag med bygningsrester: romernes palass, den første kristne kirken (326), den karolingiske utbyggingen og den nåværende katedralen.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto i Riquewihr",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Hovedgaten med Dolder-tårnet i bakgrunnen – eventyrbok. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+dolder+tower+main+street+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Bindingsverkshus med blomsterkasser – mai = vårblomstring! 🌸 <a href="https://www.google.com/search?tbm=isch&q=riquewihr+half+timbered+houses+flowers" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Vinmarkene rundt byen med Riesling-druer. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+vineyards+alsace+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Detaljer: Gamle skilt, dørhåndtak, vinduer. Perfekt for nærbilder. <a href="https://www.google.com/search?tbm=isch&q=riquewihr+details+signs+doors+alsace" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "food",
      title: "Mat/drikke i Riquewihr",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>VIN:</strong> Hjertet av Alsace-vinruten. Riesling, Gewürztraminer, Pinot Gris. Smak hos en vigneron!</li>
<li><strong>Tarte flambée</strong> (Flammekueche): Alsatisk «pizza» med crème fraîche, løk og bacon. Må prøves!</li>
<li><strong>Au Tire-Bouchon</strong>: Tradisjonell winstub midt i sentrum.</li>
</ul>`
    },
    {
      type: "sights",
      highlight: true,
      summary: "Romerrikets nordlige hovedstad — alle monumentene ligger innen gangavstand. Fra Porta Nigra til Konstantins tronsal: 2000 år komprimert til én ettermiddag.",
      title: "Trier – Tysklands eldste by",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Karl Marx: Greatness and Illusion", author: "Gareth Stedman Jones", relevance: "Marx ble født i Trier — boken gir kontekst til fødehuset dere besøker og Mosels fattige vinbønder som formet hans tenkning." },
        { type: "film", title: "Gladiator", year: 2000, relevance: "Triers Porta Nigra, amfiteater og keiserbad er fra nøyaktig samme periode som filmens Roma — den romerske stormakten i kompakt format." },
      ],
      content: `<ul>
<li><strong>Porta Nigra</strong>: Romerrikets best bevarte byport nord for Alpene. Ca. 170 e.Kr. UNESCO. <a href="https://www.trier-info.de/" target="_blank" rel="noopener">trier-info.de</a></li>
<li><strong>Trierer Dom</strong>: Tysklands eldste katedral. Bygget fra år 326 e.Kr. på keiser Konstantins tid.</li>
<li><strong>Konstantinbasilikaen</strong> (Aula Palatina): Romersk tronsal fra ca. 310 e.Kr. Verdens største bevarte rom fra antikken.</li>
<li><strong>Kaiserthermen</strong>: Ruiner av keiserbad fra 300-tallet. Intakte underjordiske kanaler.</li>
<li><strong>Amphitheater</strong>: For 20.000 tilskuere. Ca. 100 e.Kr.</li>
<li><strong>Karl Marx' fødehus</strong>: Museum. Født 1818.</li>
<li><strong>Hauptmarkt</strong>: Middelaldersk markedsplass.</li>
</ul>`
    },
    {
      type: "gem",
      title: "Eguisheim — Frankrikes favorittlandsby",
      content: `<p>15 min sør for Riquewihr. Hele landsbyen er bygget i konsentriske ringer rundt et sentralt slott-torg — man går innover i spiraler gjennom smale gater med bindingsverkshus i bonbon-farger. Kåret til Frankrikes favorittlandsby i 2013. Like vakker som Riquewihr, men en brøkdel av besøkende. Fantastiske fotomotiver i de smale spiralgatene med blomsterkasser.</p>`,
      detour: "15 min fra Riquewihr",
      duration: "30–45 min",
      cost: "Gratis",
    },
    {
      type: "accommodation",
      title: "Overnatting i Trier (2 netter: 26.–27. mai)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://hotel-anteporta.de/" target="_blank" rel="noopener">Ante Porta Das Stadthotel</a></strong> – Moderne 2010, 37 rom, 9.1/10 beliggenhet. Sikker parkering med kameraovervåking 10 EUR/dag. <em>Ca. 78–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-paulin-trier.de/" target="_blank" rel="noopener">Hotel Paulin</a></strong> – Familiedrevet, <strong>gratis parkering!</strong> Renhet 9.0, personale 9.4. NB: Resepsjon stenger kl. 18. <em>Ca. 82–114 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotel-porta-nigra.de/" target="_blank" rel="noopener">Hotel Porta Nigra</a></strong> – Rett ved Porta Nigra! 24 rom. Parkering overfor 10 EUR/natt. Ingen AC. <em>Ca. 65–100 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Trier (kveld 1)",
      bookingWarning: "Zum Domstein: Motstridende info om stenging des 2025. Ring +49 651 74490 og bekreft! Hvis stengt, er Weinstube Kesselstatt førstevalg.",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.weinstube-kesselstatt.de/" target="_blank" rel="noopener">Weinstube Kesselstatt</a></strong> – Vingårdstaverne fra 1349! 675 års vinhistorie. Egne Mosel-Riesling. 4.7/5 OpenTable. Sommerhage med utsikt mot dom. <em>Ca. 20–35 EUR/pers.</em></li>
<li><strong><a href="https://domstein.de/?lang=en" target="_blank" rel="noopener">Zum Domstein</a></strong> – Romerske oppskrifter fra Apicius! Verdens største private samling av romersk glass. <em>Ca. 20–35 EUR/pers.</em></li>
<li><strong><a href="https://www.weinwirtschaft-fw.de/" target="_blank" rel="noopener">Weinwirtschaft Friedrich-Wilhelm</a></strong> – Der Karl Marx tok eksamen i 1835! Regional mat med middelhavspreg. Egen Riesling fra 1561. <em>Ca. 25–40 EUR/pers.</em></li>
</ul>`
    },
  ],
};
