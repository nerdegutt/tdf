// DAG 18
export const day18 = {
  day: 18,
  date: "30. mai",
  weekday: "Lørdag",
  from: "Puttgarden",
  to: "Rakkestad 🏠",
  km: 688,
  nights: 0,
  subtitle: "Hjem!",
  intro: "Siste etappe: ferjen over Fehmarnbelt, gjennom Danmark og Sverige, og hjem til Rakkestad. 18 dager, 7 land og over 6000 kilometer med europeisk historie, mat og landskap. Nå gjenstår bare å fordøye inntrykkene — og kanskje allerede begynne å planlegge neste tur.",
  coords: { lat: 59.43, lng: 11.35 },
  stops: [],
  trivia: [
    "Dere har nå kjørt gjennom landskapene til minst 40 Nobelprisvinnere i litteratur — fra Thomas Mann (Lübeck) via Hemingway (Baskerland) og Camus (Luberon) til Günter Grass (Lübeck igjen). Ikke verst for en 18-dagers biltur.",
    "Fra Narbonne (118 f.Kr.) til Teutoburgerwald (9 e.Kr.) har dere sporet Romerrikets utbredelse gjennom Gallia og dets kollaps mot germanerne. 127 år med romersk ekspansjon komprimert til 18 dagers biltur.",
    "Dere startet i Lübeck (dag 1, Hansaens hovedstad) og avslutter i Puttgarden — langs den SAME ruten som hanseatiske kjøpmenn brakte varer til Bergen. Full sirkel.",
  ],
  sections: [
    {
      type: "practical",
      title: "Hjemreise",
      bookingWarning: null,
      bookingUrl: null,
      content: `<p>Tidlig ferje Rødby–Puttgarden, deretter nordover gjennom Danmark og Sverige.</p>
<ul>
<li>Tidlig start! Ferja går hyppig – sjekk <a href="https://www.scandlines.com/" target="_blank" rel="noopener">scandlines.com</a>.</li>
<li>Ca. 7–8 timers kjøring inkl. ferje og pauser.</li>
<li>Supercharger-stopp underveis i Danmark og Sverige.</li>
<li>Avreise senest kl. 10–11 for å være hjemme innen sen kveld.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Travels with Charley", author: "John Steinbeck", relevance: "Steinbecks klassiske biltur-bok speiler reisen deres — to karer, én bil, og et kontinent som åpenbarer seg mil for mil." },
        { type: "book", title: "A Time of Gifts", author: "Patrick Leigh Fermor", relevance: "Fermor gikk tvers gjennom Europa i 1933 — boken fanger den samme følelsen av å oppdage kontinentets lag på lag med historie." },
        { type: "film", title: "The Grand Budapest Hotel", year: 2014, relevance: "Wes Andersons kjærlighetsbrev til gammel europeisk kultur og reiseromantikk — en perfekt avrunding etter 18 dager på veien." },
      ],
      content: `<ul>
<li><strong>Fuglefluktslinjen</strong> (Rødby–Puttgarden) kan snart bli erstattet av <strong>Fehmarnbelt-tunnelen</strong> – en 18 km lang senketunnel som blir verdens lengste kombinerte vei- og jernbanetunnel. Byggestart var 2021, planlagt åpning rundt 2029. Den vil gjøre ferjen overflødig.</li>
<li><strong>Øresundsbroen</strong> (om dere kjører den veien) er 7 845 meter lang og ble åpnet i 2000. Den er delvis bro, delvis tunnel – midtdelen er en kunstig øy (Peberholm) der broen dykker ned i en tunnel for å ikke forstyrre flytrafikken til Kastrup.</li>
<li>Dere har nå kjørt gjennom landområder som har vært kontrollert av <strong>romerne, vikingene, frankerne, normannerne, baskerne, katarene, englenderne, burgunderne, habsburgerne, Napoleon, Det tyske keiserriket, og to verdenskrigene</strong>. Ca. 3000 år med europeisk historie på 18 dager. Ikke verst.</li>
<li><strong>Den romerske veien — full sirkel</strong>: Köln/Colonia (dag 2) → Narbonne (dag 10) → Pont du Gard/Nîmes (dag 11) → Orange (dag 13) → Lyon/Lugdunum (dag 13, Gallias hovedstad) → Trier (dag 14–15, den sene keiserresidensen) → Teutoburgerwald (dag 16-trivia, der ekspansjonen stoppet). Fra den første romerske kolonien i Gallia til grensen der alt tok slutt.</li>
<li><strong>Hansaforbundets rute</strong>: Lübeck (dag 1, Hansaens hovedstad) → Köln (dag 2) → Hameln/Weser (dag 16) → Hamburg (dag 17, medgrunnlegger). Bryggen i Bergen — hjemme i Norge — er det fjerde kontoret. Dere har fulgt handelsrutene fra Østersjøen til Nordsjøen.</li>
<li><strong>Den norske tråden — hva dere har oppdaget</strong>: Rollo fra Møre grunnla Normandie (dag 4). Hanseatene kontrollerte norsk handel i 400 år (dag 1, 17). Waterloo og Wienkongressen ga oss 17. mai — men også unionen med Sverige (dag 3). Metternich i Koblenz (dag 16) bestemte Norges skjebne. Marx i Trier (dag 14) inspirerte norsk arbeiderbevegelse. Dere har ikke reist GJENNOM Europa — dere har reist gjennom NORGES historie, bare sett utenfra.</li>
<li><strong>Hva som overlever</strong>: Romerske veier (Via Domitia). Pont du Gard. Mosel-vinranker plantet av legionærer. Vikingetikk som ble normannisk lov. Hanseatisk handel som ble nordeuropeisk økonomi. Cistersiensisk vinkultur som ble burgunderviner. Det som overlever er ikke makt — det er infrastruktur, kunnskap og tradisjon.</li>
</ul>`
    },
  ],
};
