// DAG 1
export const day1 = {
  day: 1,
  date: "13. mai",
  weekday: "Onsdag",
  from: "Rakkestad",
  to: "Puttgarden-området",
  km: 733,
  hours: 8,
  nights: 1,
  subtitle: "Langkjøring",
  description: "Første etappe: 733 km fra Rakkestad via Øresundsbroen og tvers gjennom Danmark til Puttgarden i Nord-Tyskland.",
  intro: "Første etappe er en ren transportdag: 733 km fra Rakkestad via Øresundsbroen og tvers gjennom Danmark til Puttgarden-området i Nord-Tyskland. Underveis passerer dere Fehmarn, øya der Jimi Hendrix holdt sin siste konsert, og den historiske Hansabyen Lübeck med sine gotiske teglsteinsspir. Kvelden tilbringes i kystbyen Heiligenhafen ved Østersjøen.",
  coords: { lat: 54.37, lng: 11.00 },
  stops: [
    { name: "Øresundsbroen", lat: 55.57, lng: 12.85, type: "photo" },
  ],
  trivia: [
    "Holstentor i Lübeck sto på den gamle 50-Mark-seddelen — Tysklands nest mest gjenkjennelige byport etter Brandenburger Tor.",
    "I Marienkirche i Lübeck ligger to knuste kirkeklokker på gulvet — de falt gjennom tårnet under britisk bombing palmesøndag 1942, og er bevisst beholdt som krigsminne der de landet.",
    "Fehmarnbelt var et av den kalde krigens mest overvåkede havområder — NATO og Warszawapakten overvåket all skipstrafikk mellom Rødby og Puttgarden.",
  ],
  sections: [
    {
      type: "photo",
      title: "Fotostopp",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Øresundsbroen (hvis den ruten): Spektakulær i ettermiddagslys. <a href="https://www.google.com/search?tbm=isch&q=%C3%B8resundsbroen+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Danske øyer: Flatt jordbrukslandskap i maisolen.</li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Heiligenhafen (15 min fra Puttgarden-fergen)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="http://deutsches-haus-heiligenhafen.de/" target="_blank" rel="noopener">Hotel Deutsches Haus</a></strong> – Sentrum, 8 rom, frokost inkludert, gratis parkering. 7.9/10 Booking. <em>Ca. 70–85 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotelstadthamburg.net/en/" target="_blank" rel="noopener">Hotel Stadt Hamburg</a></strong> – Sjarmerende 1850-hotell, renovert, frokost inkl., gratis parkering (1 plass/rom). #1 B&B i Heiligenhafen. 8.4/10. <em>Ca. 93–140 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.bretterbude-hhf.de/en" target="_blank" rel="noopener">Bretterbude</a></strong> – Surfer/skater-temahotell på strandpromenaden, 81 rom. Frokost 21,90 EUR/pers ekstra. <em>Ca. 90–110 EUR/rom/natt.</em></li>
<li><strong><a href="https://wissers-hotel.de/" target="_blank" rel="noopener">Wissers Hotel</a></strong> – Burg auf Fehmarn, ca. 10 min fra Puttgarden-fergen. Rimelig og helt greit.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: 'book', title: 'Buddenbrooks', author: 'Thomas Mann', relevance: 'Manns mesterverk er satt i nettopp Lübeck — dere går gjennom de samme gatene som familien Buddenbrook.' },
        { type: 'film', title: 'Nosferatu', year: 1922, relevance: 'Murnaus vampyrklassiker brukte Lübecks Salzspeicher som kulisse — bygningene står der fortsatt.' },
      ],
      content: `<ul>
<li><strong>Lübeck</strong> var hovedstaden i Hansaforbundet – middelalderens mektigste handelsnettverk som dominerte Østersjøen og Nordsjøen fra 1200- til 1600-tallet. Byen har hele 5 kirker med gotiske teglsteinsspir synlige i silhuetten.</li>
<li><strong>Fehmarn</strong> (øya Puttgarden ligger på) var stedet der Jimi Hendrix holdt sin siste konsert, 6. september 1970 – 12 dager før han døde. Det står et minnesmerke på øya.</li>
<li>Rødby–Puttgarden-ferja er en del av den historiske <strong>Fuglefluktslinjen</strong> (Vogelfluglinie), jernbane- og veiruten mellom Skandinavia og Sentral-Europa som har vært i bruk siden 1963.</li>
<li><strong>Holstentor</strong> (byporten fra 1464) er et av Tysklands mest ikoniske monumenter. I Lübeck bodde også nobelprisvinnerne Thomas Mann og Günter Grass — byen har Europas høyeste tetthet av nobelprismottakere per innbygger.</li>
</ul>`
    },
    {
      type: "food",
      title: "Middag i Heiligenhafen",
      bookingWarning: "Zum Alten Salzspeicher: Rapporter om kvalitetsfall etter mulig eierskifte — ha backup.",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.bretterbude-hhf.de/en/gastro/restaurant-strandschuppen" target="_blank" rel="noopener">Strandschuppen</a></strong> – Casual med havutsikt, internasjonalt kjøkken med kjøtt- og grillretter. Del av Bretterbude-hotellet. <em>Ca. 20–35 EUR/pers.</em></li>
<li><strong><a href="https://www.salzspeicher.com/" target="_blank" rel="noopener">Zum Alten Salzspeicher</a></strong> – Steak og pannekaker i historisk saltspeicher fra 1587. Rustikk sjarm. <em>Ca. 20–35 EUR/pers.</em></li>
<li><strong>Treffpunkt Fischhalle</strong> – Prisvinnende fisk rett fra havnen. Lokalt favorittsted. <em>Ca. 15–25 EUR/pers.</em></li>
</ul>
<p>💡 Dere ankommer onsdag – de fleste restauranter bør være åpne. NB: Mange stenger tirsdager, så dette hadde vært verre én dag tidligere!</p>`
    },
    {
      type: "customs",
      title: "Lokale skikker — Tyskland",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Hilsen</strong>: «Guten Tag» (formell, hele dagen) eller «Hallo» (avslappet). <strong>I Nord-Tyskland brukes «Moin» døgnet rundt</strong> — ja, også om kvelden! «Moin Moin» oppfattes som litt prateete; én «Moin» er normen. Si «Tschüss» eller «Auf Wiedersehen» når dere går.</li>
<li><strong>På restaurant</strong>: Hils kelneren med «Moin» eller «Guten Tag» når dere kommer inn. Sett dere selv hvis det ikke står «Bitte warten» (vent her). «Die Rechnung, bitte» = regningen, takk.</li>
<li><strong>Tipsing</strong>: 5–10 %. <strong>Viktig</strong>: Si totalbeløpet inkludert tips når dere betaler («Achtzehn» = 18 EUR), IKKE legg igjen mynt på bordet etterpå.</li>
<li><strong>Kontant er konge</strong>: Mange tyske restauranter, brauhaus og bakerier tar fortsatt KUN kontant («Nur Bargeld»). Sjekk skiltet før dere setter dere — ha alltid sedler i lomma.</li>
<li><strong>Engelsk</strong>: De fleste under 50 i byer snakker bra engelsk. På landet og hos eldre kan det variere. «Sprechen Sie Englisch?» er en høflig overgang.</li>
<li><strong>Tysk-forsøk</strong>: Settes pris på selv når det er dårlig. «Bitte» (vær så snill / vær så god) og «Danke» går langt. Nordtyskere er litt mer reserverte enn sørtyskere — ikke ta direktheten personlig.</li>
<li><strong>Punktlighet</strong>: Forventes. Kom på tiden til reservasjoner.</li>
</ul>`
    },
  ],
};
