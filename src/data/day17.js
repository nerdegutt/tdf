// DAG 17
export const day17 = {
  day: 17,
  date: "29. mai",
  weekday: "Fredag",
  from: "Hameln",
  to: "Kiel (Color Line-ferja)",
  km: 302,
  hours: 3.5,
  nights: 0,
  subtitle: "Til Kiel og om bord på Color Line",
  description: "Hameln til Kiel for å rekke Color Line-ferja kl 14:00. Overnatting om bord, ankomst Oslo lørdag morgen.",
  intro: "Siste etappe på kontinentet er en ren transportdag: 300 km opp gjennom Niedersachsen og Schleswig-Holstein til Kiel, der Color Line-ferja Color Magic legger fra kai kl 14:00. Innsjekk kl 13:00 senest. Det betyr avreise fra Hameln senest kl 09:00 — heller før. Underveis kjører dere forbi Hannover og Hamburg, men det er ingen tid til stopp dersom ferja skal rekkes med god margin. Festmiddag og overnatting om bord, ankomst Oslo lørdag kl 10:00.",
  coords: { lat: 54.3233, lng: 10.1394 },
  stops: [],
  trivia: [
    "Color Magic er ett av verdens største cruiseferger med 1 250 lugarer, 16 dekk og plass til 2 750 passasjerer. Den ble bygget i Finland i 2007 og var i en periode verdens største ferge.",
    "Kieler Woche er verdens største seilregatta — over 2 000 båter og 3 millioner besøkende hver juni. Den startet i 1882 som en oppvisning for keiser Wilhelm II.",
    "Kielerkanalen (Nord-Ostsee-Kanal) er verdens mest trafikkerte kunstige vannvei — flere skip enn Suez og Panama til sammen. 98 km mellom Nordsjøen og Østersjøen, åpnet av keiser Wilhelm II i 1895.",
  ],
  sections: [
    {
      type: "practical",
      title: "Kritisk: rekke Color Line-ferja",
      bookingWarning: "Color Magic legger fra kai presis kl 14:00. Innsjekk senest kl 13:00. Bilkø ved sjekk-inn kan ta tid.",
      bookingUrl: "https://www.colorline.no/",
      content: `<ul>
<li><strong>Avreise fra Hameln senest kl 09:00</strong> — helst tidligere. 300 km via A7/A23/A215, normalt 3,5 t, men køkjøring rundt Hamburg er regelen, ikke unntaket. Regn med 4 t med pauser.</li>
<li><strong>Innsjekk kl 13:00</strong> (1 time før avgang) på Color Line-terminalen, Norwegenkai 1, Kiel. Hold billett og pass klart.</li>
<li><strong>Avgang kl 14:00 fredag</strong>, ankomst Oslo (Hjortnes) lørdag kl 10:00.</li>
<li>Color Line har full restaurant- og barservice om bord. Lugar bør være forhåndsbestilt — fredager i mai er populært.</li>
<li>Hvis dere er foran skjema: lunsj i Kiel sentrum (15 min fra terminalen) eller en titt på Laboe-monumentet på den andre siden av fjorden.</li>
</ul>`
    },
    {
      type: "sights",
      highlight: true,
      summary: "Tysk marinetradisjon ved Østersjøkysten — Kielerkanalen, Laboe-monumentet og en av Tysklands viktigste havner. Kort opphold før ferja.",
      title: "Kiel — om dere har tid",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Kiellinie</strong>: 3 km lang promenade langs Kielfjorden, fra sentrum mot Düsternbrook. Fin gå- eller sykkeltur hvis dere har en time å avse.</li>
<li><strong>Laboe Marine-Ehrenmal</strong>: 72 meter høy minnetårn for falne sjømenn. På østsiden av fjorden, 30 min med bil. Inkluderer ubåten <em>U-995</em> som museum — den eneste bevarte Type VII-ubåten i verden.</li>
<li><strong>Holstenstraße</strong>: Kiels handlegate. Praktisk for en rask lunsj eller kaffe før ferja.</li>
<li><strong>Schifffahrtsmuseum</strong> ved den gamle fiskehallen i havna — kompakt, fokuserer på Kiels maritime historie.</li>
</ul>
<p>💡 Realistisk: dere har tid til en rask lunsj og kanskje en titt mot fjorden. Resten av Kiel får dere kanskje på en annen tur.</p>`
    },
    {
      type: "history",
      title: "Historie",
      bookingWarning: null,
      bookingUrl: null,
      references: [
        { type: "book", title: "Das Boot", author: "Lothar-Günther Buchheim", relevance: "Romanen som ble film — basert på forfatterens egne erfaringer på en tysk ubåt under WWII. Ubåtene ble operert ut fra blant annet Kiel." },
      ],
      content: `<ul>
<li><strong>Kielerkanalen (Nord-Ostsee-Kanal)</strong>: Åpnet i 1895 av keiser Wilhelm II for å gi den tyske marinen en strategisk snarvei mellom Nordsjøen og Østersjøen — uten å måtte runde Danmark. Den er fortsatt verdens mest trafikkerte kunstige vannvei, med over 30 000 skipspasseringer i året.</li>
<li><strong>Kielerverftet — keiserens marine</strong>: Wilhelm II ville utfordre britisk sjømakt og bygget en av verdens største krigsflåter ut fra blant annet Kiel. Det var det tyske flåteopprøret i Kiel 3. november 1918 som tente novemberrevolusjonen og endte første verdenskrig.</li>
<li><strong>Kiel og ubåtene</strong>: I begge verdenskriger var Kiel hovedbase for den tyske ubåtflåten. Byen ble derfor bombet hardere enn nesten noen annen tysk by — over 80 % av sentrum ble jevnet med jorda. Det er derfor Kiel i dag ser nokså moderne ut sammenlignet med Lübeck eller Hameln.</li>
<li><strong>Kieler Woche</strong>: Verdens største seilbåtbegivenhet, hver juni siden 1882. Det startet som en mønstring for keiseren og er i dag en av Europas største folkefester.</li>
<li><strong>Color Line og norsk-tysk handel</strong>: Linja Kiel–Oslo har gått siden 1961, opprinnelig under navnet Jahre Line. Color Line overtok i 1990. Det er fortsatt den korteste sjøveien mellom Tyskland og Sør-Norge, og en av Europas best trafikkerte ferjelinjer.</li>
</ul>`
    },
    {
      type: "food",
      title: "Mat: lunsj i Kiel + festmiddag om bord",
      bookingWarning: "Restaurantene om bord på Color Magic — book i forveien på colorline.no, særlig signaturrestauranten.",
      bookingUrl: "https://www.colorline.no/",
      content: `<ul>
<li><strong>Lunsj i Kiel (før innsjekk)</strong>: Bryggepuben <strong>Kiel Brauerei</strong> ved sentrum gjør egne øl og solid tysk pubmat. Rask servering, gangavstand fra havna.</li>
<li><strong>Fischbrötchen</strong> i havna — det klassiske: sild eller reker i rundstykke. Ta én før dere går om bord; det er Nord-Tyskland i et håndgrep.</li>
<li><strong>Festmiddag om bord</strong>: Color Magic har flere restauranter. <strong>Grand Buffet</strong> er klassikeren — sjømat, kjøtt, oster — og det er passende avslutning på 17 dager på veien.</li>
<li><strong>Bar Aqua</strong> eller <strong>Observation Lounge</strong> på øverste dekk: god whisky og utsikt over Kielfjorden mens dere glir ut.</li>
</ul>
<p>🍺 Avgang kl 14:00 betyr at dere går ut Kielfjorden på dagen, langs Laboe og marineverftet — sett dere ute på dekk med et glass.</p>`
    },
    {
      type: "practical",
      title: "Om bord på Color Magic",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Lugar</strong>: Bestill innvendig eller utvendig — vinduslugar med havutsikt anbefales på siste kveld.</li>
<li><strong>Bilen</strong>: Parkeres på bildekk. Husk å notere dekk og rad. Bildekket er stengt under overfart.</li>
<li><strong>Wi-Fi</strong>: Tilgjengelig, men begrenset hastighet over åpent hav. Tax-free-butikker er åpne første timene.</li>
<li><strong>Ankomst Oslo</strong>: Hjortnes-terminalen kl 10:00 lørdag. Bilkø ut av båten tar 20–30 min. Deretter kort kjøretur hjem (se dag 18).</li>
</ul>`
    },
  ],
};
