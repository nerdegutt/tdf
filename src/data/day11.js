// DAG 11
export const day11 = {
  day: 11,
  date: "23. mai",
  weekday: "Lørdag",
  from: "Narbonne",
  to: "Avignon",
  km: 195,
  nights: 2,
  subtitle: "Kort kjøring med et av turens høydepunkter",
  coords: { lat: 43.95, lng: 4.81 },
  stops: [
    { name: "Pont du Gard", lat: 43.95, lng: 4.54, type: "sight" },
  ],
  sections: [
    {
      type: "sights",
      title: "Stopp: Pont du Gard (30 min vest for Avignon)",
      bookingWarning: "Parkering bør bestilles i høysesong.",
      bookingUrl: "https://www.pontdugard.fr/",
      content: `<ul>
<li><strong>Romersk akvedukt fra ca. år 50 e.Kr.</strong> UNESCO. 49 meter høy, tre nivåer.</li>
<li>Bygget for å føre vann 50 km fra Uzès til Nîmes. <strong>Helt uten mørtel – steinene er bare stablet!</strong></li>
<li>2000 år gammel og fortsatt stående. Museum på stedet. Regn 2–3 timer.</li>
</ul>`
    },
    {
      type: "history",
      title: "Historisk trivia for Bjørn Erik",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong>Pont du Gard</strong> ble bygget uten mørtel – steinblokkene (noen veier opptil 6 tonn) ble kuttet så presist at de holdes på plass av ren friksjon og tyngdekraft. Etter 2000 år står den fortsatt.</li>
<li>Akvedukten den var del av førte vann <strong>50 km</strong> fra Uzès til Nîmes, med et fall på bare <strong>17 meter</strong> over hele strekningen – det er en gradient på 34 cm per kilometer. Romersk ingeniørkunst på sitt ypperste.</li>
<li>I middelalderen ble Pont du Gard brukt som <strong>bro for fotgjengere og kjøretøy</strong>. Steinene på den andre etasjen er slitt av hundrevis av år med trafikk.</li>
<li>Det er fortsatt synlige <strong>numre og merker</strong> hugget inn i steinene av de romerske arbeiderne – antakelig for å holde styr på hvilke steiner som skulle hvor under byggingen. Et slags 2000 år gammelt IKEA-system.</li>
</ul>`
    },
    {
      type: "photo",
      title: "Foto",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li>Fra elvebredden nedenfra: Akvedukten speilet i Gardon-elven. Morgen best. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+reflection+gardon+river+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Fra stien på høyre bredd: Alle tre nivåer synlige. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+three+levels+photography" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
<li>Nærbilder av steinene uten mørtel – fascinerende teksturer. <a href="https://www.google.com/search?tbm=isch&q=pont+du+gard+stone+detail+close+up" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a></li>
</ul>`
    },
    {
      type: "accommodation",
      title: "Overnatting i Avignon (2 netter: 23.–24. mai)",
      bookingWarning: null,
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://en.hotel-magnan.com/" target="_blank" rel="noopener">Hôtel Le Magnan</a></strong> – Intra-muros, sjarmerende patio. Parkering 14–15 EUR/dag (offentlig koster 28–35!). <em>Ca. 59–89 EUR/rom/natt.</em></li>
<li><strong><a href="https://www.hoteldegarlande.com/en/" target="_blank" rel="noopener">Hôtel de Garlande</a></strong> – 1700-talls boutique i bilfri sone, 14 rom. 8.9/10. "Et av våre favoritthoteller i Europa." Vanskelig bilparkering. <em>Ca. 90–130 EUR/rom/natt.</em></li>
<li><strong><a href="https://hotel-mignon.com/en_gb/" target="_blank" rel="noopener">Hôtel Mignon</a></strong> – Bygning fra 1300-tallet, 16 rom, nær Pont d'Avignon. Små rom og bad. <em>Ca. 75–110 EUR/rom/natt.</em></li>
</ul>
<p>🅿️ Le Magnan: parkering til halv pris av offentlig – det opplagte valget med bil!</p>`
    },
    {
      type: "food",
      title: "Middag i Avignon (kveld 1)",
      bookingWarning: "Fou de Fafa: Kun 10 bord – reserver!",
      bookingUrl: null,
      content: `<ul>
<li><strong><a href="https://www.restaurantfoudefafa.com" target="_blank" rel="noopener">Fou de Fafa</a></strong> – Intim bistro, kun 10 bord! Alt hjemmelaget. Anka med bringebærsaus, svinekjøtt med ratatouille. 3-retters 43 EUR. 4.7–4.8/5. <strong>Reserver!</strong> <em>Ca. 40–50 EUR/pers.</em></li>
<li><strong><a href="http://www.restaurant-agape-avignon.com/fr/" target="_blank" rel="noopener">L'Agape</a></strong> – Bib Gourmand. Terrasse på sjarmerende plass med platantrær. Kreativ men jordnær. <em>Ca. 35–50 EUR/pers.</em></li>
<li><strong>Avenio</strong> – Vinbar og bistro i sentrum. Lokale Rhône-viner, tapas og franske småretter. Populær blant lokale. Place des Corps Saints. <em>Ca. 20–35 EUR/pers.</em></li>
</ul>`
    },
  ],
};
