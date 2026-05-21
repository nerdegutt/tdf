// DAG 18
export const day18 = {
  day: 18,
  date: "30. mai",
  weekday: "Lørdag",
  from: "Oslo",
  to: "Moss / Rakkestad 🏠",
  km: 81,
  hours: 1.5,
  nights: 0,
  subtitle: "Landing!",
  description: "Ankomst Oslo med Color Line kl 10:00. Kort kjøretur ned E6 — Moss av (Erlend), Rakkestad (Bjørn Erik). 18 dager og over 5500 km i bagasjen.",
  intro: "Color Magic legger til kai på Hjortnes kl 10:00. Etter litt kø ut av båten venter den korte veien hjem: E6 sørover, av i Moss for Erlend, videre til Rakkestad for Bjørn Erik. 18 dager, 7 land og en kontinents verdi med europeisk historie, mat og landskap er pakket vekk i bagasjerommet.",
  coords: { lat: 59.43, lng: 11.35 },
  stops: [
    { name: "Moss", lat: 59.4369, lng: 10.6597, type: "city" },
  ],
  trivia: [
    "Dere har nå kjørt gjennom landskapene til minst 40 Nobelprisvinnere i litteratur — fra Thomas Mann (Lübeck) via Hemingway (Baskerland) og Camus (Luberon) til Günter Grass (Lübeck igjen). Ikke verst for en 18-dagers biltur.",
    "Fra Pont du Gard (akvedukten til Nîmes, ca. år 50 e.Kr.) til Trier (keiserresidensen på 300-tallet) har dere sporet Romerrikets utbredelse gjennom Gallia. 250 år med romersk historie komprimert til 18 dagers biltur.",
  ],
  sections: [
    {
      type: "practical",
      title: "Hjemreise",
      bookingWarning: null,
      bookingUrl: null,
      content: `<p>Ankomst Hjortnes-terminalen kl 10:00. Bilkø ut av båten tar 20–30 min.</p>
<ul>
<li><strong>E18 ut av Oslo</strong>: Følg skilt mot E6 sør.</li>
<li><strong>E6 sørover</strong>: Moss av (Erlend), ca. 60 km / 50 min fra Hjortnes.</li>
<li><strong>Videre til Rakkestad</strong>: Bjørn Erik tar fylkesveien østover, ytterligere ca. 35 km / 30 min.</li>
<li>Hjemme tidlig ettermiddag. Vask bilen, last ut bagasjen, og legg beina på sofabordet.</li>
</ul>`
    },
    {
      type: "history",
      title: "Refleksjon",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Travels with Charley", author: "John Steinbeck", relevance: "Steinbecks klassiske biltur-bok speiler reisen deres — to karer, én bil, og et kontinent som åpenbarer seg mil for mil." },
      ],
      content: `<ul>
<li>Dere har kjørt gjennom landområder kontrollert av <strong>romerne, vikingene, frankerne, normannerne, baskerne, katarene, englenderne, burgunderne, habsburgerne, Napoleon, Det tyske keiserriket, og to verdenskrigene</strong>. Ca. 3000 år med europeisk historie på 18 dager.</li>
<li><strong>Den norske tråden</strong>: Rollo fra Møre grunnla Normandie (dag 4–5). Hanseatene kontrollerte norsk handel i 400 år (dag 1). Waterloo og Wienkongressen ga oss 17. mai — men også unionen med Sverige (dag 3, 16). Marx i Trier (dag 14) inspirerte norsk arbeiderbevegelse. Dere har ikke bare reist gjennom Europa — dere har reist gjennom NORGES historie, bare sett utenfra.</li>
<li><strong>Hva som overlever</strong>: Romerske veier. Pont du Gard. Mosel-vinranker plantet av legionærer. Vikingetikk som ble normannisk lov. Hanseatisk handel som ble nordeuropeisk økonomi. Cistersiensisk vinkultur som ble burgunderviner. Det som overlever er ikke makt — det er infrastruktur, kunnskap og tradisjon.</li>
</ul>`
    },
  ],
};
