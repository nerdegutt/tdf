// DAG 3
export const day3 = {
  day: 3,
  date: "15. mai",
  weekday: "Fredag",
  from: "Köln",
  to: "Rouen",
  km: 549,
  hours: 6,
  nights: 2,
  subtitle: "Lang kjøredag med historisk stopp",
  description: "Köln til Rouen via Waterloo-slagmarken. Normandies vikinghovedstad med Jeanne d'Arc-historie og Monets katedral.",
  intro: "Rouen er Normandies hovedstad med nesten 500 000 innbyggere i storbyregionen, grunnlagt som vikinghovedstad av Rollo (Gange-Rolf) i 911. Byen er uløselig knyttet til Jeanne d'Arc, som ble brent på bålet her i 1431, og til Monet, som malte katedralen over 30 ganger. Underveis stopper dere ved Waterloo — slagmarken der Napoleons skjebne ble beseglet i 1815.",
  coords: { lat: 49.44, lng: 1.10 },
  stops: [
    { name: "Waterloo", lat: 50.71, lng: 4.41, type: "sight" },
  ],
  trivia: [
    "Nathan Rothschild fikk angivelig beskjeden om Napoleons nederlag før alle andre via privat budbringer — og tjente en formue på London-børsen. Historien er trolig overdrevet, men for god til å utelate.",
    "Etter Waterloo ble tenner trukket fra de falne soldatene og solgt som «Waterloo teeth» til tannprotesemakere i hele Europa — ettertraktet fordi de kom fra unge, friske menn.",
  ],
  sections: [
    {
      type: "sights",
      title: "Anbefalt stopp: Waterloo, Belgia (2–3 timer)",
      highlight: true,
      summary: "Her endte Napoleons hundredagersregime 18. juni 1815 — og indirekte ble Norges skjebne beseglet. Wienkongressen som Waterloo bekreftet, ga Norge til Sverige.",
      bookingWarning: "Mémorial de Waterloo – tidsluker anbefales.",
      bookingUrl: "https://www.waterloo1815.be/",
      content: `<ul>
<li><strong>Butte du Lion</strong> (Løvehøyden): 226 trinn, panoramautsikt over slagmarken. Bygget 1820–26.</li>
<li><strong>Mémorial de Waterloo</strong>: Moderne interaktivt museum med 4D-kino av slaget.</li>
<li><strong>Hougoumont Farm</strong>: Den befestede gården – nøkkelen til Wellingtons forsvar. Restaurert.</li>
<li>Her endte Napoleons hundredagersregime 18. juni 1815.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Panorama fra Butte du Lion – hele slagmarken. <a href="https://www.google.com/search?tbm=isch&q=butte+du+lion+waterloo+panorama" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Hougoumont: Atmosfæriske gamle gårdsbygninger. <a href="https://www.google.com/search?tbm=isch&q=hougoumont+farm+waterloo" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'Waterloo', author: 'Bernard Cornwell', relevance: 'Time-for-time-skildring av slaget — les den før dere står på Butte du Lion og ser utover slagmarken.' },
        { type: 'film', title: 'Waterloo', year: 1970, relevance: 'Gjenskaper slaget med 15 000 statister på nøyaktig det terrenget dere ser fra Løvehøyden.' },
        { type: 'book', title: 'Les Misérables (Waterloo-kapitlene)', author: 'Victor Hugo', relevance: 'Hugo besøkte slagmarken og skrev 60 sider om den «hule veien» — landskapet han beskriver er rett foran dere.' },
        { type: 'film', title: 'Napoleon', year: 2023, relevance: 'Ridley Scotts Waterloo-sekvens gir et visuelt inntrykk av kaoset som utspilte seg akkurat her.' },
      ],
      content: `<ul>
<li><strong>Waterloo-myter:</strong> Napoleon hadde faktisk hemoroider under slaget, noe som kan ha gjort at han ikke red ut for å rekognosere terrenget personlig om morgenen. Historikere diskuterer fortsatt om dette påvirket utfallet.</li>
<li><strong>Butte du Lion</strong> ble bygget av Kong Willem I av Nederland for å markere stedet der hans sønn, Prinsen av Oranien, ble såret. Wellington var rasende – han mente haugen ødela terrenget han hadde kjempet på: <em>«They have altered my field of battle!»</em></li>
<li>Slaget varte bare <strong>én dag</strong> (18. juni 1815) men kostet anslagsvis 50 000 døde og sårede – totalt fra begge sider. Det var et av de blodigste enkeltslagene i europeisk historie til da.</li>
<li><strong>Den norske koblingen</strong>: Wienkongressen (1814–15), som Waterloo bekreftet, var den som «ga» Norge til Sverige. For to nordmenn er Waterloo indirekte grunnen til unionen med Sverige — og dermed også grunnen til at vi feirer 17. mai (dag 5!). Grunnloven av 1814 var Norges svar på å bli en brikke i etterspillet etter Napoleon.</li>
<li><strong>Blüchers ankomst</strong>: Feltmarskalk Blücher, 72 år gammel, hadde blitt ridd ned av kavaleri to dager før og lå knust under hesten sin. Han kom til Waterloo med kroppen full av smerter, angivelig holdt oppe av snaps og hvitløksomslag. Uten hans ankomst kl. 19:30 hadde Wellington trolig tapt.</li>
<li><strong>Victor Hugo</strong> besøkte Waterloo-slagmarken i 1861 og brukte hele Bok II av Del 2 i <em>Les Misérables</em> (nesten 60 sider) på å beskrive slaget. Hans beskrivelse av den «hule veien» der fransk kavaleri raste ned i en skjult skrent er blitt ikonisk.</li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Rouen (2 netter: 15.–16. mai)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.hotel-de-la-cathedrale.fr/" target="_blank" rel="noopener">Hôtel de la Cathédrale</a></strong> – Middelaldergate rett ved katedralen, 26 rom, 1600-tallsfasade. 9.6/10 beliggenhet. <em>Ca. 80–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotelcardinal.fr/en/" target="_blank" rel="noopener">Hôtel Cardinal</a></strong> – Utsikt til katedralen fra ALLE rom! 15 rom, boutique. 9.7/10 beliggenhet. Ingen heis. <em>Ca. 85–120 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hotel-bb.com/en/hotel/rouen-centre-rive-droite" target="_blank" rel="noopener">B&B Hotel Rouen Centre Rive Droite</a></strong> – Billigst. Privat parkering 9,50 EUR/dag – viktig med bil! <em>Ca. 60–85 EUR/rom/natt.</em></li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Rouen (sen ankomst – noe enkelt)",
      bookingWarning: "M. Patachon: Motstridende info om åpningstider — ring og bekreft!",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://m-patachon.fr" target="_blank" rel="noopener">M. Patachon</a></strong> – Kåret til Normandies beste burger! To kompiser som åpnet i 2024. Hjemmelagde gourmetburgere med lokale råvarer. <em>Ca. 15–20 EUR/pers.</em></li>
<li><strong>Holy Moly Gourmet Burger</strong> – Biff fra lokale gårder, brød fra bakeriet ved siden av. Åpent 7/7 til 23:00 – trygt ved sen ankomst! 38 Rue de la République. <em>Ca. 11–20 EUR/pers.</em></li>
<li><strong><a href="https://www.rotomagus.eu/en/" target="_blank" rel="noopener">Rotomagus</a></strong> – Grillrestaurant med modnet kjøtt i Mibrasa-kullgrill. Terrasse ved Saint-Maclou. Åpent man–lør, middag til 22:00. <em>Ca. 30–50 EUR/pers.</em></li>
</ul>
<p>💡 Dere ankommer fredag kveld. Holy Moly er tryggest ved sen ankomst (åpent til 23). Ring M. Patachon for å bekrefte middagstider.</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Belgia (Waterloo) og Frankrike (Rouen)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<p><strong>Belgia (Vallonia, Waterloo)</strong></p>
<ul>
<li>Waterloo ligger i fransktalende Vallonia — fransk høflighet gjelder. «Bonjour madame/monsieur» når dere går inn et sted, «Merci, au revoir» når dere går.</li>
<li>Tipsing: Service er inkludert, men det er vanlig å runde opp eller legge igjen 5 % for god service.</li>
<li>Engelsk: Bra på Waterloo-museet og turistsentre.</li>
</ul>
<p><strong>Frankrike (Rouen og resten av Frankrike-oppholdet)</strong></p>
<ul>
<li><strong>«Bonjour» er hellig</strong>: Si «Bonjour madame» eller «Bonjour monsieur» til alle dere møter — kelnere, butikkansatte, hotellresepsjon. Hopper dere over hilsenen, blir dere oppfattet som uhøflige turister. Etter 18:00: «Bonsoir».</li>
<li><strong>På restaurant</strong>: Vent på å bli vist til bordet — sett dere ikke selv. Si «Bonsoir» til kelneren. «L'addition, s'il vous plaît» = regningen, takk.</li>
<li><strong>Aldri rop «Garçon!»</strong> — det er gammeldags og nedlatende. Bruk øyekontakt eller «Excusez-moi, monsieur/madame».</li>
<li><strong>Tipsing</strong>: Service er <em>alltid</em> inkludert i prisen (15 %, lovpålagt). Det er normalt å legge igjen 1–5 EUR ekstra for godt arbeid — ikke 15–20 % som i USA. Bare å runde opp er helt OK.</li>
<li><strong>Engelsk</strong>: Variert. «Bonjour, parlez-vous anglais?» er den magiske overgangen — å spørre på fransk først endrer hele tonen.</li>
<li><strong>Fransk-forsøk</strong>: ABSOLUTT verdt det, selv om det er dårlig. «Merci», «S'il vous plaît», «Pardon» er minimum.</li>
<li><strong>Mattider</strong>: Lunsj 12:00–14:00, middag 19:30–22:00. Kjøkken stenger mellom — ikke regn med varm mat kl. 16.</li>
<li><strong>Mat tar tid</strong>: Servicen er ikke treg, den er bevisst rolig. Be eksplisitt om regningen — den kommer ikke uoppfordret.</li>
</ul>`
    },
  ],
};
