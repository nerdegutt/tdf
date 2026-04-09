# QA: Dato- og ukedagsfeil i research-filer

Kvalitetssikring utfort 2026-04-08.

## Bakgrunn

Research-agentene har basert seg pa tdf.md som hadde feil ukedager for dag 1-17 (forskjovet en dag for tidlig). Dag 18 var korrekt.

### Korrigerte datoer og ukedager

| Dag | Dato | RIKTIG ukedag | FEIL ukedag (brukt i research) |
|-----|------|---------------|-------------------------------|
| 1 | 13. mai | Onsdag | Tirsdag |
| 2 | 14. mai | Torsdag | Onsdag |
| 3 | 15. mai | Fredag | Torsdag |
| 4 | 16. mai | Lordag | Fredag |
| 5 | 17. mai | Sondag | Lordag |
| 6 | 18. mai | Mandag | Sondag |
| 7 | 19. mai | Tirsdag | Mandag |
| 8 | 20. mai | Onsdag | Tirsdag |
| 9 | 21. mai | Torsdag | Onsdag |
| 10 | 22. mai | Fredag | Torsdag |
| 11 | 23. mai | Lordag | Fredag |
| 12 | 24. mai | Sondag | Lordag |
| 13 | 25. mai | Mandag (Andre pinsedag!) | Sondag |
| 14 | 26. mai | Tirsdag | Mandag |
| 15 | 27. mai | Onsdag | Tirsdag |
| 16 | 28. mai | Torsdag | Onsdag |
| 17 | 29. mai | Fredag | Torsdag |
| 18 | 30. mai | Lordag | Lordag (korrekt) |

### Relevante helligdager

- **Kristi himmelfartsdag**: 14. mai (torsdag) = dag 2
- **Andre pinsedag (Pfingstmontag)**: 25. mai (mandag) = dag 13
- Pinse 1. dag: 24. mai (sondag) = dag 12
- Lokale helligdager: Andre pinsedag er helligdag i Tyskland, Frankrike og Belgia

---

## BOLK 1

---

### bolk1-historiker.md

**Ingen direkte ukedagsreferanser funnet.** Historikeren refererer til dagnummer og datoer, men bruker ikke ukedager i sine anbefalinger. Ingen markedsdager, apningstider eller ukedagsspesifikke arrangementer omtales. Ingen helligdagsadvarsler.

**Vurdering:** Ingen feil a flagge. Innholdet er upavirket av ukedagsforskyvningen.

---

### bolk1-reiseblogger.md

#### FUNN 1: Dag 1 — Lubeck markedsdag
- **Hva som ble sagt:** "Onsdager og loerdager er det marked paa Marktplatz. Dag 1 er tirsdag, saa det treffer dessverre ikke. Men om dere overnatter i Lubeck, faar dere onsdag morgen!"
- **Feil ukedag brukt:** Tirsdag (13. mai)
- **Riktig ukedag:** Onsdag (13. mai)
- **Konsekvens:** Markedet pa Marktplatz er faktisk pa onsdager og lordager. Dag 1 ER en onsdag, sa de TREFFER onsdagsmarkedet! Dette er en positiv korreksjon — de far markedsbesok pa dag 1 allerede.
- **Korrigert anbefaling:** "Dag 1 er onsdag — dere treffer onsdagsmarkedet paa Marktplatz! Perfekt for et raskt stopp om dere overnatter i Lubeck."

#### FUNN 2: Dag 3 — Waterloo besokstidspunkt
- **Hva som ble sagt:** "15. mai er en torsdag — relativt rolig paa slagmarken. Unngaa helger om mulig (men dere er der paa torsdag, perfekt!)."
- **Feil ukedag brukt:** Torsdag (15. mai)
- **Riktig ukedag:** Fredag (15. mai)
- **Konsekvens:** Minimal. Fredag er ogsa relativt rolig pa slagmarken sammenlignet med helger. Anbefalingen holder i praksis.
- **Korrigert anbefaling:** "15. mai er en fredag — fortsatt relativt rolig pa slagmarken. Unnga helger om mulig (dere er der pa fredag, godt valg!)."

#### FUNN 3: Dag 3 — Normandie-ankomst
- **Hva som ble sagt:** "Naar dere ankommer Rouen paa kvelden 15. mai, er byen i full vaarblomst."
- **Feil ukedag brukt:** Implisitt torsdag
- **Riktig ukedag:** Fredag
- **Konsekvens:** Ingen praktisk konsekvens. Vaerbasert observasjon, ikke ukedagsavhengig.

#### FUNN 4: Dag 4 — Rouen fredagsmarked (VIKTIG)
- **Hva som ble sagt:** "Dag 4 er fredag (16. mai). Place du Vieux-Marche har marked paa fredager ogsaa! Perfekt for aa skaffe lunsj."
- **Feil ukedag brukt:** Fredag (16. mai)
- **Riktig ukedag:** Lordag (16. mai)
- **Konsekvens:** MODERAT. Place du Vieux-Marche har marked pa flere dager. Lordagsmarked er ofte STORRE og bedre enn fredagsmarked. Anbefalingen om marked holder, men begrunnelsen er feil. Sjekk spesifikt om lordag er markedsdag her — det er det typisk i franske byer.
- **Korrigert anbefaling:** "Dag 4 er lordag (16. mai). Place du Vieux-Marche har typisk marked ogsaa pa lordager. Sjekk lokale markedsdager — lordagsmarkeder i franske byer er ofte de STORSTE og beste. Perfekt for aa skaffe lunsj."

#### FUNN 5: Dag 4 — Mai-spesifikt "Fredagsmarked"
- **Hva som ble sagt:** "Fredagsmarked: 16. mai er fredag — perfekt for marked paa Place du Vieux-Marche."
- **Feil ukedag brukt:** Fredag
- **Riktig ukedag:** Lordag
- **Konsekvens:** Samme som funn 4. Lordagsmarked er vanligvis enda bedre enn fredagsmarked.
- **Korrigert anbefaling:** "Lordagsmarked: 16. mai er lordag — franske lordagsmarkeder er typisk de storste og beste. Sjekk om Place du Vieux-Marche har lordagsmarked."

#### FUNN 6: Dag 5 — Bayeux lordagsmarked (KRITISK FEIL)
- **Hva som ble sagt:** "JACKPOT! 17. mai 2026 er lordag, og Bayeux har sitt ukentlige marked paa Place Saint-Patrice hver lordag kl. 07:30-14:30. Dette er et av Normandies beste markeder [...] Dere faar 17. mai + normandisk matmarked = perfekt kombinasjon!"
- **Feil ukedag brukt:** Lordag (17. mai)
- **Riktig ukedag:** Sondag (17. mai)
- **Konsekvens:** KRITISK. Bayeux lordagsmarked er pa LORDAGER. Dag 5 er en SONDAG. De treffer IKKE lordagsmarkedet. Hele anbefalingen om piknik med markedsvarer faller bort med mindre det finnes et sondagsmarked. Sondager i franske smaabyer har ofte begrenset mattilbud.
- **Korrigert anbefaling:** "17. mai 2026 er SONDAG. Bayeux' ukentlige marked pa Place Saint-Patrice er pa lordager og treffer dessverre IKKE. Sjekk om det finnes sondagsapne bakerier og delikatessebutikker for 17. mai-piknik. Alternativt: kjop inn fra butikker i Bayeux sentrum. NB: Mange franske butikker er stengt pa sondager — planlegg piknik-innkjop kvelden for (lordag 16. mai i Rouen) eller tidlig sondag morgen."

#### FUNN 7: Dag 5 — Mai-spesifikt "Lordagsmarked"
- **Hva som ble sagt:** "Bayeux-marked 17. mai: Lordag = markedsdag. Dette er turens store lykketreff!"
- **Feil ukedag brukt:** Lordag
- **Riktig ukedag:** Sondag
- **Konsekvens:** KRITISK. Samme som funn 6. Ikke noe lykketreff — de MISSER markedet.
- **Korrigert anbefaling:** "17. mai er sondag. Bayeux lordagsmarked treffer IKKE. Lordagsmarkedet pa Place Saint-Patrice var dagen for (16. mai) da de var i Rouen. Planlegg innkjop for 17. mai-piknik pa forskudd."

#### FUNN 8: Dag 6 — Sondag 18. mai
- **Hva som ble sagt:** "Sondag 18. mai: Det er sondag — noen restauranter paa fastlandet kan vaere stengt eller har redusert meny. BESTILL BORD i forveien."
- **Feil ukedag brukt:** Sondag (18. mai)
- **Riktig ukedag:** Mandag (18. mai)
- **Konsekvens:** VIKTIG. Mandager er VERRE enn sondager for restauranter i Frankrike. Mange franske restauranter har "jour de fermeture" (fast hviledag) pa mandager. Sondagsadvarsel er UNDERDREVET — mandagsadvarsel er enda mer kritisk.
- **Korrigert anbefaling:** "Mandag 18. mai: MANGE franske restauranter holder STENGT pa mandager (jour de fermeture). Bade pa fjellet og pa fastlandet kan valgmulighetene vaere svart begrenset. BESTILL BORD pa forhaand, og sjekk at restauranten faktisk er apen pa mandag! La Mere Poulard (pa fjellet) er normalt apen daglig, men fastlandsrestaurantene kan vaere stengt."

#### FUNN 9: Dag 6 — Villedieu-les-Poeles tirsdagsmarked
- **Hva som ble sagt:** "Tirsdager er markedsdag her, saa det treffer dessverre ikke sondag 18. mai."
- **Feil ukedag brukt:** Sondag (18. mai)
- **Riktig ukedag:** Mandag (18. mai)
- **Konsekvens:** Lav. De treffer uansett ikke tirsdagsmarkedet, verken pa sondag eller mandag. Men klokkestoperiet kan ha andre apningstider pa mandag vs. sondag.
- **Korrigert anbefaling:** "Tirsdager er markedsdag her, saa det treffer ikke mandag 18. mai. Klokkestoperiet (Fonderie Cornille-Havard) er normalt apent pa mandager i mai-sesongen — men sjekk apningstider for sikkerhets skyld, da noen attraksjoner i Frankrike stenger pa mandager."

#### FUNN 10: Dag 6 — Turister i mai
- **Hva som ble sagt:** "Helger (dere er der sondag) er travlere enn ukedager."
- **Feil ukedag brukt:** Sondag (18. mai)
- **Riktig ukedag:** Mandag (18. mai)
- **Konsekvens:** Positiv korreksjon. Mandag er en UKEDAG, sa det vil vaere ROLIGERE enn helgen. Bedre for a unnga folkemengder pa Mont Saint-Michel.
- **Korrigert anbefaling:** "Mandag er roligere enn helg pa Mont Saint-Michel — bra for dere! Men PASS PA: Noen tjenester (restauranter, butikker) kan ha mandagsstengt."

---

### bolk1-bibliofil.md

**Ingen direkte ukedagsreferanser funnet.** Bibliofilen diskuterer boker, filmer og forfattere uten a referere til spesifikke ukedager eller apningstider. Ingen markedsdager eller ukedagsspesifikke anbefalinger.

**Vurdering:** Ingen feil a flagge. Innholdet er upavirket av ukedagsforskyvningen.

---

## BOLK 2

---

### bolk2-historiker.md

**Ingen direkte ukedagsreferanser funnet.** Historikeren bruker dagnummer og historiske datoer, men refererer aldri til hvilken ukedag de reisende er pa et sted. Ingen praktiske anbefalinger knyttet til apningstider eller markedsdager.

**Vurdering:** Ingen feil a flagge. Innholdet er upavirket av ukedagsforskyvningen.

---

### bolk2-reiseblogger.md

#### FUNN 11: Dag 7 — Mandag 19. mai, apningstider
- **Hva som ble sagt:** "Mandag 19. mai: Visse butikker i Nantes kan ha reduserte aaapningstider paa mandager. Les Machines er normalt AAPENT paa mandager i mai-sesongen — men dobbeltsjekk!"
- **Feil ukedag brukt:** Mandag (19. mai)
- **Riktig ukedag:** Tirsdag (19. mai)
- **Konsekvens:** VIKTIG. Tirsdager er en vanlig ukedag uten spesielle stengninger. Mandags-advarselen er UNODVENDIG — tirsdager er normalt uproblematiske for butikker og attraksjoner.
- **Korrigert anbefaling:** "Tirsdag 19. mai: Vanlig ukedag — alle butikker og attraksjoner i Nantes er apne med normale apningstider. Les Machines er apent. Ingen spesielle bekymringer."

#### FUNN 12: Dag 7 — La Rochelle, Marche Central tirsdagsavreise
- **Hva som ble sagt:** "Dag 8 (avreise fra La Rochelle) er tirsdag 20. mai. [...] Dere er der mandag kveld og tirsdag morgen."
- **Feil ukedag brukt:** Avreise tirsdag 20. mai; ankomst La Rochelle mandag 19. mai
- **Riktig ukedag:** Avreise onsdag 20. mai; ankomst tirsdag 19. mai
- **Konsekvens:** MODERAT. Marche Central er apent daglig, sa dette pavirker ikke markedstilgangen direkte. Men informasjonen om at "tirsdager er vanlige markedsdager, ikke de store" og at "onsdag og lordag" er best stemmer — og de MISSER onsdag fordi de reiser da.
- **Korrigert anbefaling:** "Dag 8 (avreise fra La Rochelle) er ONSDAG 20. mai. Dere er der tirsdag kveld og onsdag morgen. Marche Central er apent hver morgen. BONUS: Onsdag er en av de GODE markedsdagene — markedet utvider seg ut i gatene. Ta en rask tur innom for morgenens onsdag morgen for dere reiser!"

#### FUNN 13: Dag 8 — Bordeaux Marche des Capucins tirsdagsmarked
- **Hva som ble sagt:** "Dag 8 er tirsdag — markedet er aapent! [...] Aapent tirsdager fra 06:00 til 13:00."
- **Feil ukedag brukt:** Tirsdag (20. mai)
- **Riktig ukedag:** Onsdag (20. mai)
- **Konsekvens:** LAV. Marche des Capucins er apent tirsdag til sondag. Onsdag er ogsa en god dag. Anbefalingen holder.
- **Korrigert anbefaling:** "Dag 8 er onsdag — Marche des Capucins er apent (apent tirs-son). Perfekt for frokost med osters og hvitvin."

#### FUNN 14: Dag 9 — Pintxo-pote onsdagskveld (VIKTIG)
- **Hva som ble sagt:** "Dag 9 er onsdag 21. mai. Onsdag kveld har noen barer i Parte Vieja og rundt Calle Reyes Catolicos (sentrum) pintxo-pote. TORSDAG er den store kvelden i Gros (langs Calle Zabaleta)."
- **Feil ukedag brukt:** Onsdag (21. mai)
- **Riktig ukedag:** Torsdag (21. mai)
- **Konsekvens:** VIKTIG POSITIV ENDRING! Dag 9 er faktisk TORSDAG. Torsdag er beskrevet som "den store kvelden" for pintxo-pote i Gros. De treffer altsa den BESTE pintxo-pote-kvelden, ikke den lavmelte onsdagsversjonen!
- **Korrigert anbefaling:** "Dag 9 er TORSDAG 21. mai — JACKPOT! Torsdag kveld er den STORE pintxo-pote-kvelden i Gros (langs Calle Zabaleta). Grupper av venner hopper fra bar til bar fra kl. 19:00. Dere treffer den absolutt beste kvelden for dette ritualet! Kryss Zurriola-broen og folg lokale."

#### FUNN 15: Dag 9 — Bretxa-markedet onsdag
- **Hva som ble sagt:** "Onsdag (dag 9) er en vanlig markedsdag."
- **Feil ukedag brukt:** Onsdag
- **Riktig ukedag:** Torsdag
- **Konsekvens:** LAV. Bretxa-markedet er apent mandag-lordag. Torsdag er like bra som onsdag.
- **Korrigert anbefaling:** "Torsdag (dag 9) er en vanlig markedsdag. Bretxa-markedet er apent (man-lor)."

#### FUNN 16: Dag 9 — Solnedgang fra Monte Igueldo
- **Hva som ble sagt:** "Solnedgang i San Sebastian 21. mai er ca. kl. 21:30."
- **Ingen ukedagsfeil her** — solnedgangstid er datobasert, ikke ukedagsbasert. Korrekt.

#### FUNN 17: Dag 9 — Mai-spesifikt "Onsdag 21. mai"
- **Hva som ble sagt:** "Onsdag 21. mai i San Sebastian: Utendorslivet er i full gang."
- **Feil ukedag brukt:** Onsdag
- **Riktig ukedag:** Torsdag
- **Konsekvens:** Minimal. Utendorsliv er ikke ukedagsavhengig i mai.

#### FUNN 18: Dag 9 — Pintxo-pote onsdag
- **Hva som ble sagt:** "Pintxo-pote onsdag: Noen barer i Parte Vieja og sentrum. Torsdag ville vaert bedre (Gros), men dere reiser da."
- **Feil ukedag brukt:** Onsdag (heldag) + at de reiser torsdag
- **Riktig ukedag:** Torsdag (heldag) + de reiser FREDAG
- **Konsekvens:** VIKTIG. De reiser IKKE pa torsdag. De er der hele torsdagen og kvelden! De far den STORE pintxo-pote-kvelden i Gros. Se funn 14.
- **Korrigert anbefaling:** Se funn 14. De treffer torsdagens pintxo-pote i Gros, som er den beste.

#### FUNN 19: Dag 10 — Torsdag i Carcassonne
- **Hva som ble sagt:** "Dere ankommer paa en torsdag i mai. Det er hoysesong-light."
- **Feil ukedag brukt:** Torsdag (22. mai)
- **Riktig ukedag:** Fredag (22. mai)
- **Konsekvens:** Minimal. Fredag er ogsa en ukedag med moderate folkemengder.
- **Korrigert anbefaling:** "Dere ankommer paa en fredag i mai. Det er hoysesong-light."

#### FUNN 20: Dag 10 — Narbonne Les Halles torsdag
- **Hva som ble sagt:** "Torsdag er vanlig markedsdag. Aapent fra tidlig morgen til lunsj. Dere ankommer sent paa dagen, saa bruk heller FREDAG morgen (dag 11, for avreise) for Les Halles!"
- **Feil ukedag brukt:** Ankommer torsdag (dag 10), fredag morgen (dag 11)
- **Riktig ukedag:** Ankommer fredag (dag 10), LORDAG morgen (dag 11)
- **Konsekvens:** MODERAT. Les Halles er apent daglig, sa fredag kveld er ogsa bra. Men LORDAGS morgen (dag 11) ville vaere en enda bedre markedsdag enn fredagen som ble anbefalt. Lordager er typisk de beste markedsdagene.
- **Korrigert anbefaling:** "Dere ankommer Narbonne fredag kveld. Bruk LORDAG morgen (dag 11, for avreise) for Les Halles de Narbonne — lordag er typisk den beste markedsdagen!"

#### FUNN 21: Dag 11 — Fredag i Narbonne/Pont du Gard
- **Hva som ble sagt:** "Narbonne Les Halles — start dagen RIKTIG (fredag morgen!)"
- **Feil ukedag brukt:** Fredag (23. mai)
- **Riktig ukedag:** Lordag (23. mai)
- **Konsekvens:** POSITIV ENDRING. Lordag morgen pa Les Halles de Narbonne er enda bedre enn fredag. Lordager har typisk det bredeste utvalget og mest aktivitet.
- **Korrigert anbefaling:** "Narbonne Les Halles — start dagen RIKTIG (LORDAG morgen!) Lordag er den ALLER beste dagen pa franske matmarkeder — bredest utvalg, mest stemning."

#### FUNN 22: Dag 11 — Uzes lordagsmarked
- **Hva som ble sagt:** "Dag 11 er fredag — dessverre IKKE lordagsmarked."
- **Feil ukedag brukt:** Fredag (23. mai)
- **Riktig ukedag:** Lordag (23. mai)
- **Konsekvens:** VIKTIG POSITIV ENDRING! Dag 11 ER en lordag. Uzes har lordagsmarked! De treffer det!
- **Korrigert anbefaling:** "Dag 11 er LORDAG — dere TREFFER lordagsmarkedet i Uzes! Place aux Herbes er da fylt med lokale produsenter — ost, olivenolje, frukt, blomster. Perfekt stopp pa vei fra Pont du Gard til Avignon."

#### FUNN 23: Dag 11 — Fredag 23. mai i Avignon
- **Hva som ble sagt:** "Fredag 23. mai: Avignon har begynt aa vaakne for sommersesongen."
- **Feil ukedag brukt:** Fredag
- **Riktig ukedag:** Lordag
- **Konsekvens:** LAV for denne spesifikke observasjonen. Lordag i Avignon er minst like livlig.

#### FUNN 24: Dag 12 — Lordag 24. mai / Les Halles Avignon (KRITISK FEIL)
- **Hva som ble sagt:** "LYKKETREFF! Dag 12 er lordag 24. mai. Les Halles d'Avignon har 40 mathandlere [...] MEN — paa lordager kl. 11:00 holder en gjestekokk demonstrasjon."
- **Feil ukedag brukt:** Lordag (24. mai)
- **Riktig ukedag:** Sondag (24. mai)
- **Konsekvens:** KRITISK. Dag 12 er SONDAG, ikke lordag. Les Halles d'Avignon er apent tirsdag-sondag, sa de far markedet pa sondag. MEN: Lordags-kokkeshowet kl. 11:00 er kun pa LORDAGER. De treffer IKKE kokkeshowet. Hele "LYKKETREFF!"-rammen er feil.
- **Korrigert anbefaling:** "Dag 12 er SONDAG 24. mai. Les Halles d'Avignon er apent (tirs-son), sa dere far markedsbesok. Men lordagskokkeshowet (La Petite Cuisine) kl. 11:00 var GAAR (lordag = dag 11 kveld/ankomst Avignon). Sondag er fortsatt en god dag pa Les Halles, men det er noe roligere enn lordager. MERK: Det er PINSESONDAG — noen tjenester kan vaere pavirket."

#### FUNN 25: Dag 12 — Lordag 24. mai generelt
- **Hva som ble sagt:** "Lordag 24. mai: Les Halles i Avignon er paa sitt BESTE. Kokkeshowet kl. 11:00 er en bonus."
- **Feil ukedag brukt:** Lordag
- **Riktig ukedag:** Sondag (PINSESONDAG)
- **Konsekvens:** KRITISK. Se funn 24. I tillegg: 24. mai 2026 er PINSESONDAG. I Frankrike er pinse (Pentecote) en viktig hoytid. Noen butikker og tjenester kan ha endrede apningstider. Positivt: Les Halles er normalt apent pa sondager.
- **Korrigert anbefaling:** "Sondag 24. mai (PINSESONDAG): Les Halles er apent (tirs-son). Noen butikker i sentrum kan ha sondags-/helligdagsstenging. Restauranter er normalt apne."

#### FUNN 26: Dag 12 — Gordes markedsdag
- **Hva som ble sagt:** "Gordes: Nei (tirsdag)" [i markedstabellen, dag 12 = lordag]
- **Feil ukedag brukt:** Lordag (dag 12 i tabellen)
- **Riktig ukedag:** Sondag
- **Konsekvens:** LAV. De treffer uansett ikke Gordes' tirsdagsmarked, verken pa lordag eller sondag.

#### FUNN 27: Markedstabell dag 7-12 (SYSTEMATISK FEIL)
Hele markedstabellen i bolk2-reiseblogger har feil ukedager:

| Dag | Dato | Oppgitt ukedag | RIKTIG ukedag | Konsekvens |
|-----|------|---------------|---------------|------------|
| 7 | 19. mai | Mandag | **Tirsdag** | Mandagsadvarsler unodvendige |
| 7 | 19. mai | Mandag | **Tirsdag** | La Rochelle Marche Central: ok begge dager |
| 8 | 20. mai | Tirsdag | **Onsdag** | Bordeaux Capucins: apent begge dager |
| 9 | 21. mai | Onsdag | **Torsdag** | Bretxa: apent begge dager |
| 10 | 22. mai | Torsdag | **Fredag** | Narbonne Les Halles: apent begge dager |
| 11 | 23. mai | Fredag | **Lordag** | Narbonne: BEDRE dag! Avignon: ogsa bra |
| 12 | 24. mai | Lordag | **Sondag** | Avignon kokkeshowet TREFFER IKKE |
| 12 | 24. mai | Lordag | **Sondag** | Gordes: treffer uansett ikke tirsdagsmarked |
| 12 | 24. mai | Lordag | **Sondag** | Roussillon: treffer uansett ikke torsdagsmarked |

---

### bolk2-bibliofil.md

**Ingen direkte ukedagsreferanser funnet.** Bibliofilen diskuterer boker, filmer og forfattere uten ukedagsavhengige anbefalinger.

**Vurdering:** Ingen feil a flagge. Innholdet er upavirket av ukedagsforskyvningen.

---

## BOLK 3

---

### bolk3-historiker.md

**Ingen direkte ukedagsreferanser funnet.** Historikeren refererer til dagnummer og historiske hendelser, ikke ukedager. Ingen praktiske anbefalinger om apningstider eller markedsdager.

**Vurdering:** Ingen feil a flagge. Innholdet er upavirket av ukedagsforskyvningen.

---

### bolk3-reiseblogger.md

#### FUNN 28: Dag 13 — Sondag 25. mai / Les Halles Paul Bocuse (VIKTIG FORSKYVNING)
- **Hva som ble sagt:** "VIKTIG: Dag 13 er SONDAG 25. mai. Les Halles Paul Bocuse er aapent paa sondager, men stenger kl. 13:00."
- **Feil ukedag brukt:** Sondag (25. mai)
- **Riktig ukedag:** Mandag (25. mai) — OBS: Andre pinsedag!
- **Konsekvens:** KRITISK. Les Halles Paul Bocuse er typisk STENGT pa mandager. Apningstider er tirsdag-lordag + sondag til 13:00, men mandager er normalt hviledag. IMIDLERTID: 25. mai 2026 er ANDRE PINSEDAG (Lundi de Pentecote), som er offentlig helligdag i Frankrike. Pa helligdager i mai-sesongen kan Les Halles ha spesielle apningstider — de kan vaere apne fordi det er helligdag/turistsesong, eller de kan vaere stengt fordi det er mandag. DETTE MA SJEKKES SPESIFIKT.
- **Korrigert anbefaling:** "Dag 13 er MANDAG 25. mai — ANDRE PINSEDAG (Lundi de Pentecote). Les Halles Paul Bocuse er normalt STENGT pa mandager, men det er helligdag og mai-sesong. SJEKK SPESIFIKT om de holder apent pa andre pinsedag! Hvis stengt: Brasserie Georges (alltid apent, ogsa helligdager) er backup for lunsj i Lyon."

#### FUNN 29: Dag 13 — Sondag, bouchon-stenging
- **Hva som ble sagt:** "Lyon: Sondag er IKKE bouchon-dag. De fleste bouchons lyonnais holder STENGT paa sondag."
- **Feil ukedag brukt:** Sondag
- **Riktig ukedag:** Mandag (andre pinsedag)
- **Konsekvens:** VIKTIG. Bouchons stenger oftest pa SONDAGER OG MANDAGER. Pa mandag er situasjonen minst like ille som pa sondag — kanskje verre. Men andre pinsedag kan pavirke positivt: noen restauranter holder apent pa helligdager.
- **Korrigert anbefaling:** "Mandag (andre pinsedag) er en av de vanskeligste dagene for restauranter i Lyon. De fleste bouchons har MANDAG som fast hviledag. Men andre pinsedag er helligdag — noen kan holde apent. Daniel et Denise og Brasserie Georges er tryggere kort. SJEKK OG BOOK PA FORHAND."

#### FUNN 30: Dag 13 — Butikker stengt sondag
- **Hva som ble sagt:** "Sondag 25. mai: Mange butikker i Lyon og Dijon er STENGT."
- **Feil ukedag brukt:** Sondag
- **Riktig ukedag:** Mandag (andre pinsedag)
- **Konsekvens:** MODERAT. Pa andre pinsedag i Frankrike er de fleste butikker stengt (som pa sondager). Advarselen holder i praksis — men grunnen er helligdag, ikke sondag.
- **Korrigert anbefaling:** "Mandag 25. mai (ANDRE PINSEDAG): De fleste butikker er stengt (helligdag). Restauranter og severdigheter er normalt apne. Les Halles Paul Bocuse: SJEKK SPESIFIKT."

#### FUNN 31: Dag 13 — Beaune sondagsvinsmaking
- **Hva som ble sagt:** "Beaune: Hvis dere stopper: sondag er vinsmakingslukket paa mange domainer, men Hotel-Dieu og vinotekene i sentrum er aapne."
- **Feil ukedag brukt:** Sondag
- **Riktig ukedag:** Mandag (andre pinsedag)
- **Konsekvens:** MODERAT. Pa mandager er enda FLERE vinsmaker stengt enn pa sondager. Men andre pinsedag som helligdag kan bety at turistattraksjoner (Hotel-Dieu) er apne. Vinoteker i sentrum er normalt ogsa apne pa helligdager.
- **Korrigert anbefaling:** "Beaune pa mandag (andre pinsedag): De fleste vindomener er stengt mandager. Hotel-Dieu er normalt apent ogsa pa helligdager. Vinotekene i sentrum holder typisk apent. Ikke planlegg vingaardsbesok."

#### FUNN 32: Dag 13 — Dijon sondagskveld
- **Hva som ble sagt:** "Dijon: Sondag kveld: Sentrum er overraskende livlig paa sondagskvelder i mai."
- **Feil ukedag brukt:** Sondag
- **Riktig ukedag:** Mandag (andre pinsedag)
- **Konsekvens:** MODERAT. Mandagskvelder er normalt roligere enn sondagskvelder. Men andre pinsedag kan gi mer liv enn en vanlig mandag, da mange har fri.
- **Korrigert anbefaling:** "Dijon mandagskveld (andre pinsedag): Mange har fri, sa sentrum kan vaere livligere enn en vanlig mandag. Place du Bareuzai har uteservering — sjekk at restaurantene er apne (mange mandagslukkede steder kan holde apent pa helligdag)."

#### FUNN 33: Dag 14 — Mandag 26. mai / Andre pinsedag (FORSKYVNING)
- **Hva som ble sagt:** "Mandag 26. mai: VIKTIG — 26. mai 2026 er ANDRE PINSEDAG i mange europeiske land. I Tyskland er Pfingstmontag en offentlig helligdag!"
- **Feil ukedag brukt:** Mandag 26. mai
- **Riktig ukedag:** Tirsdag 26. mai
- **Konsekvens:** KRITISK. 26. mai 2026 er en TIRSDAG, IKKE andre pinsedag. Andre pinsedag er 25. mai (mandag) = dag 13, IKKE dag 14. Hele advarselen om Pfingstmontag er plassert pa FEIL DAG. Dag 14 er en helt vanlig tirsdag uten helligdagsutfordringer.
- **Tillegg:** Andre pinsedag (25. mai) treffer dag 13 (Avignon -> Dijon via Lyon), IKKE dag 14 (Dijon -> Trier via Riquewihr). Alle helligdagsadvarslene for Riquewihr/Alsace er derfor FEILPLASSERT.
- **Korrigert anbefaling:** "Tirsdag 26. mai: Vanlig ukedag. Ingen helligdag. Butikker, restauranter og severdigheter i Alsace har normale apningstider. Winstubs i Riquewihr bor vaere apne (sjekk for sikkerhets skyld — noen sma restauranter har mandag-tirsdag som hviledag). MERK: Andre pinsedag var GAAR (mandag 25. mai, dag 13) — det er dag 13 som pavirkes av helligdagen."

#### FUNN 34: Dag 14 — Tarte flambee mandagsproblem
- **Hva som ble sagt:** "Dag 14 er mandag. Mange av de tradisjonelle winstubs [...] er STENGT paa mandager."
- **Feil ukedag brukt:** Mandag
- **Riktig ukedag:** Tirsdag
- **Konsekvens:** VIKTIG. Tirsdager er generelt uproblematiske for winstubs. Mandags-advarselen er unodvendig. Au Tire-Bouchon og andre winstubs i Riquewihr bor vaere apne pa tirsdag.
- **Korrigert anbefaling:** "Dag 14 er tirsdag — de aller fleste winstubs er apne. Au Tire-Bouchon i Riquewihr bor vaere uproblematisk. Sjekk likevel for sikkerhets skyld."

#### FUNN 35: Dag 14 — Helligdagsturister i Riquewihr
- **Hva som ble sagt:** "Riquewihr kan vaere MER beskt enn vanlig pga. helligdagsturister. Overraskende nok kan dette vaere bra for tarte flambee — winstubs som ellers lukker paa mandager holder aapent paa helligdager."
- **Feil ukedag brukt:** Mandag/helligdag
- **Riktig ukedag:** Tirsdag (vanlig ukedag)
- **Konsekvens:** Hele premisset faller bort. Det er ingen helligdag pa dag 14. Normal tirsdagstrafikk.
- **Korrigert anbefaling:** "Tirsdag i mai: Moderat turisttrykk i Riquewihr. Roligere enn helg, men butikkene er apne. Gode forhold for besok."

#### FUNN 36: Dag 14 — Andre pinsedag oppsummering
- **Hva som ble sagt (nederst i filen):** "Andre pinsedag (Pfingstmontag) er helligdag i Tyskland, Frankrike og mange andre europeiske land. Dag 14 (Dijon -> Trier) faller paa denne dagen."
- **Feil:** HELE denne seksjonen er feilplassert. Andre pinsedag er 25. mai = dag 13.
- **Korrigert anbefaling:** "Andre pinsedag (25. mai) faller pa DAG 13 (Avignon -> Dijon via Lyon), IKKE dag 14. Se dag 13-anbefalinger for helligdagskonsekvenser."

#### FUNN 37: Dag 15 — Tirsdag 27. mai
- **Hva som ble sagt:** "Tirsdag 27. mai i Trier: Vanlig ukedag — alle severdigheter aapne, moderat turisttrykk. Perfekt."
- **Feil ukedag brukt:** Tirsdag
- **Riktig ukedag:** Onsdag
- **Konsekvens:** Minimal. Onsdag er ogsa en vanlig ukedag. Samme konklusjon.
- **Korrigert anbefaling:** "Onsdag 27. mai i Trier: Vanlig ukedag — alle severdigheter apne, moderat turisttrykk. Perfekt."

#### FUNN 38: Dag 15 — Trier Hauptmarkt tirsdagsmarked
- **Hva som ble sagt (i markedstabellen):** "Tirsdag/torsdag er markedsdager! AAPENT!"
- **Feil ukedag brukt:** Tirsdag (dag 15)
- **Riktig ukedag:** Onsdag (dag 15)
- **Konsekvens:** VIKTIG. Hvis Hauptmarkt-markedet er pa tirsdager og torsdager, treffer de det IKKE pa onsdag. De MISSER markedet.
- **Korrigert anbefaling:** "Dag 15 er onsdag. Hvis Trier Hauptmarkt har marked pa tirsdager og torsdager, treffer dere det dessverre IKKE. Sjekk om det finnes onsdagsmarked eller bruk heller dagligvarebutikker/bakeri for innkjop."

#### FUNN 39: Dag 16 — Onsdag 28. mai
- **Hva som ble sagt:** "Onsdag 28. mai: Vanlig ukedag — alt aapent."
- **Feil ukedag brukt:** Onsdag
- **Riktig ukedag:** Torsdag
- **Konsekvens:** Minimal. Torsdag er ogsa en vanlig ukedag. Samme konklusjon.
- **Korrigert anbefaling:** "Torsdag 28. mai: Vanlig ukedag — alt apent."

#### FUNN 40: Dag 16 — Hameln sondagsteater
- **Hva som ble sagt:** "Hameln i mai: Om sondager (ikke i dag) er det rottefanger-teater i sentrum. Onsdag er stille og fin."
- **Feil ukedag brukt:** Onsdag (dag 16)
- **Riktig ukedag:** Torsdag (dag 16)
- **Konsekvens:** Minimal. Sondagsteater er uansett irrelevant. Torsdag er ogsa en rolig ukedag.
- **Korrigert anbefaling:** "Hameln i mai: Rottefanger-teateret er pa sondager (ikke i dag). Torsdag er rolig og fin."

#### FUNN 41: Dag 17 — Torsdag 29. mai / Kristi himmelfartsdag-sjekk
- **Hva som ble sagt:** "Torsdag 29. mai: KRISTI HIMMELFARTSDAG (Christi Himmelfahrt) er en bevegelig helligdag. I 2026 faller den 14. mai, saa dette er IKKE relevant for dag 17."
- **Feil ukedag brukt:** Torsdag (29. mai)
- **Riktig ukedag:** Fredag (29. mai)
- **Konsekvens:** LAV. Konklusjonen er korrekt — Kristi himmelfartsdag er 14. mai og pavirker ikke dag 17. Men ukedagen er feil.
- **Korrigert anbefaling:** "Fredag 29. mai: Vanlig ukedag. Kristi himmelfartsdag var 14. mai (dag 2) og er ikke relevant her."
- **TILLEGG — UOPPDAGET HELLIGDAG:** Kristi himmelfartsdag 14. mai treffer DAG 2 (Puttgarden -> Duisburg/Moers via Koln). Dette er en helligdag i Tyskland! Konsekvenser: Mange butikker STENGT, men Kolnerdomen og restauranter er apne. Fruh am Dom kan vaere ekstra travelt. DETTE ER IKKE FLAGGET I NOEN AV RESEARCH-FILENE.

#### FUNN 42: Dag 17 — Hamburg Fischmarkt sondag
- **Hva som ble sagt:** "Hamburgs legendariske Fischmarkt er SONDAGS-eksklusive (05:00-09:30). Dag 17 er torsdag. INGEN Fischmarkt."
- **Feil ukedag brukt:** Torsdag (dag 17)
- **Riktig ukedag:** Fredag (dag 17)
- **Konsekvens:** Minimal. De treffer uansett ikke sondags-Fischmarkt.
- **Korrigert anbefaling:** "Dag 17 er fredag. Fischmarkt er kun pa sondager — treffer ikke."

#### FUNN 43: Dag 17 — Isemarkt
- **Hva som ble sagt (i markedstabellen):** "Isemarkt (Europas lengste gatemarked, under U-Bahn-skinnene!) tirs+fre. Treffer IKKE torsdag."
- **Feil ukedag brukt:** Torsdag (dag 17)
- **Riktig ukedag:** Fredag (dag 17)
- **Konsekvens:** VIKTIG POSITIV ENDRING! Isemarkt er pa tirsdager og FREDAGER. Dag 17 ER en fredag! De TREFFER Isemarkt!
- **Korrigert anbefaling:** "Dag 17 er FREDAG — dere TREFFER Isemarkt! Europas lengste gatemarked (600 meter under U-Bahn-skinnene i Eppendorf). Apent fredag 08:30-14:00. Fantastisk for ferskt brod, fisk, blomster og frukt. Verdt et raskt besok om timeplanen tillater det."

#### FUNN 44: Markedstabell dag 13-18 (SYSTEMATISK FEIL)
Hele markedstabellen i bolk3-reiseblogger har feil ukedager:

| Dag | Dato | Oppgitt ukedag | RIKTIG ukedag | Konsekvens |
|-----|------|---------------|---------------|------------|
| 13 | 25. mai | Sondag | **Mandag (2. pinsedag!)** | Les Halles kan vaere STENGT (mandag) |
| 13 | 25. mai | Sondag | **Mandag (2. pinsedag!)** | Dijon: uansett ikke markedsdag |
| 14 | 26. mai | Mandag (2. pinsedag!) | **Tirsdag** | Ingen helligdag! Vanlig dag |
| 15 | 27. mai | Tirsdag | **Onsdag** | Trier: MISTER tirsdags-/torsdagsmarkedet |
| 16 | 28. mai | Onsdag | **Torsdag** | Koblenz/Hameln: OK |
| 16 | 28. mai | Onsdag | **Torsdag** | Hameln: OK |
| 17 | 29. mai | Torsdag | **Fredag** | Isemarkt TREFFER! (fredag) |
| 18 | 30. mai | Lordag | **Lordag** | Korrekt |

---

### bolk3-bibliofil.md

#### FUNN 45: Dag 16 — Hameln rottefangerspill
- **Hva som ble sagt:** "Dere er der en onsdag (28. mai), saa dere faar det ikke med dere" [rottefanger-spillet pa sondager]
- **Feil ukedag brukt:** Onsdag
- **Riktig ukedag:** Torsdag
- **Konsekvens:** Minimal. De treffer uansett ikke sondagsspillet.
- **Korrigert anbefaling:** "Dere er der en torsdag (28. mai), sa dere far det ikke med dere."

Bortsett fra dette har bibliofilen ingen ukedagsavhengige anbefalinger.

---

## OPPSUMMERING: KRITISKE FUNN

### Feil som ENDRER planlegging (MA HANDLES)

| # | Dag | Fil | Problem | Konsekvens |
|---|-----|-----|---------|------------|
| 6-7 | 5 | bolk1-reiseblogger | Bayeux lordagsmarked "JACKPOT" | De er der SONDAG — lordagsmarkedet treffer IKKE |
| 8 | 6 | bolk1-reiseblogger | "Sondag"-advarsler for restauranter | Det er MANDAG — enda verre for restauranter i Frankrike |
| 24-25 | 12 | bolk2-reiseblogger | Les Halles Avignon "lordags-SHOW" | Det er SONDAG — lordags-kokkeshowet treffer IKKE |
| 28-29 | 13 | bolk3-reiseblogger | Les Halles Paul Bocuse "sondagsapent" | Det er MANDAG (2. pinsedag) — kan vaere STENGT |
| 33-36 | 14 | bolk3-reiseblogger | Andre pinsedag-advarsler for Alsace | FEIL DAG — 2. pinsedag er dag 13, ikke dag 14 |

### Feil som gir BEDRE muligheter (positive overraskelser)

| # | Dag | Fil | Oppdagelse |
|---|-----|-----|-----------|
| 1 | 1 | bolk1-reiseblogger | Lubeck onsdagsmarked TREFFER (var oppgitt som "misser") |
| 14 | 9 | bolk2-reiseblogger | Pintxo-pote TORSDAG i Gros = den BESTE kvelden |
| 22 | 11 | bolk2-reiseblogger | Uzes lordagsmarked TREFFER (var oppgitt som "misser") |
| 43 | 17 | bolk3-reiseblogger | Isemarkt i Hamburg TREFFER (fredag, var oppgitt som "misser") |

### UOPPDAGET HELLIGDAG

**Kristi himmelfartsdag 14. mai = Dag 2 (Puttgarden -> Koln -> Duisburg/Moers)**

Ingen av research-filene flagget at dag 2 treffer Kristi himmelfartsdag (Christi Himmelfahrt) i Tyskland. Konsekvenser:
- Mange butikker i Tyskland STENGT
- Kolnerdomen, restauranter og turistattraksjoner er normalt apne
- Fruh am Dom og andre restauranter kan vaere ekstra TRAVLE (helligdag = mange har fri)
- Sjokolademuseet, romansk-germansk museum osv. normalt apne
- Motorveiene kan vaere TRAVLERE enn vanlig (langhelg-trafikk, mange tysker tar fri torsdag-sondag)
- **Viktig:** Fredag 15. mai (dag 3) blir en "Bruckentag" (brodag) der mange tar fri. Motorveiene mellom Duisburg og Belgia kan ha okt trafikk dag 3 morgen pga. langhelg-reisende.

### PINSE-PAVIRKNING (dag 12-13)

Pinse 2026:
- **1. pinsedag (Pfingstsonntag):** Sondag 24. mai = dag 12 (Avignon/Gordes)
- **2. pinsedag (Pfingstmontag):** Mandag 25. mai = dag 13 (Avignon -> Dijon via Lyon)

Dag 12 (pinsesondag): Normalt apent i Frankrike (sondag uansett), men noen steder kan ha spesiell helligdagsstemning.

Dag 13 (andre pinsedag): VIKTIG — helligdag i bade Frankrike og Tyskland (selv om Frankrike siden 2005 har hatt en "journee de solidarite" der noen jobber). I praksis: de fleste butikker stengt, restauranter apne, attraksjoner apne. Les Halles Paul Bocuse MA SJEKKES.

---

## FULLSTENDIG FUNN-OVERSIKT SORTERT ETTER DAG

| Dag | Riktig | Feil | Antall funn | Alvorlighet |
|-----|--------|------|-------------|-------------|
| 1 | Onsdag | Tirsdag | 1 | Positiv (treffer marked) |
| 2 | Torsdag | Onsdag | 0 (men uoppdaget helligdag!) | HELLIGDAG |
| 3 | Fredag | Torsdag | 1 | Lav |
| 4 | Lordag | Fredag | 2 | Moderat (markedsdag) |
| 5 | Sondag | Lordag | 2 | KRITISK (markedet treffer IKKE) |
| 6 | Mandag | Sondag | 3 | KRITISK (restaurant-stenging verre) |
| 7 | Tirsdag | Mandag | 1 | Moderat (mandagsadvarsler unodvendige) |
| 8 | Onsdag | Tirsdag | 2 | Lav-moderat |
| 9 | Torsdag | Onsdag | 4 | VIKTIG POSITIV (pintxo-pote!) |
| 10 | Fredag | Torsdag | 2 | Lav |
| 11 | Lordag | Fredag | 3 | VIKTIG POSITIV (Uzes marked!) |
| 12 | Sondag | Lordag | 3 | KRITISK (kokkeshowet treffer ikke) |
| 13 | Mandag | Sondag | 5 | KRITISK (Les Halles kan vaere stengt) |
| 14 | Tirsdag | Mandag | 4 | KRITISK (feilplassert helligdag) |
| 15 | Onsdag | Tirsdag | 2 | Moderat (markedsdag-miss) |
| 16 | Torsdag | Onsdag | 2 | Lav |
| 17 | Fredag | Torsdag | 3 | VIKTIG POSITIV (Isemarkt!) |
| 18 | Lordag | Lordag | 0 | Korrekt |

**Totalt:** 45 funn + 1 uoppdaget helligdag (Kristi himmelfartsdag dag 2).
