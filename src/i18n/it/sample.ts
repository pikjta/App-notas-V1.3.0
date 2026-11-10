import type { Part } from '../es/index';
import type { sample as Es } from '../es/sample';

export const sample: Part<typeof Es> = {
  // Cartelle e attività principali
  'sam.folder.f1': 'Casa e vita',
  'sam.folder.f2': 'Apprendimento',
  'sam.proj.home': 'Il mio spazio',
  'sam.proj.p1': 'Trasloco',
  'sam.proj.p2': 'Corso di fotografia',
  'sam.proj.p3': 'Casa · settimana',
  'sam.proj.p5': 'Incarico · Murale Café Aurora',
  'sam.proj.journal': 'Diario',

  // Il mio spazio
  'sam.card.h1.title': 'Benvenuto',
  'sam.card.h2.title': 'Oggi',
  'sam.card.h3.title': 'Le mie attività principali',
  'sam.card.h4.title': 'Prossimi 7 giorni',
  'sam.card.h5.title': 'Questa settimana',
  'sam.card.h5.i.hw1': 'Chiamare l’agenzia immobiliare',
  'sam.card.h5.i.hw2': 'Uscita fotografica all’ora d’oro',
  'sam.card.h5.i.hw3': 'Annaffiare le piante',

  // Trasloco di ottobre
  'sam.card.k1.title': 'Scatoloni e imballaggio',
  'sam.card.k1.i.g1': 'Comprare il materiale',
  'sam.card.k1.i.a1': 'Procurarsi 30 scatoloni',
  'sam.card.k1.i.a2': 'Nastro e pennarelli',
  'sam.card.k1.i.g2': 'Impacchettare',
  'sam.card.k1.i.a3': 'Libri',
  'sam.card.k1.i.a4': 'Cucina',
  'sam.card.k1.i.a6': 'Abiti invernali',
  'sam.card.k1.i.a5': 'Etichettare per stanza',
  'sam.card.k2.title': 'Chiamare l’agenzia immobiliare',
  'sam.card.k3.title': 'Preventivo',
  'sam.card.k3.head1': 'Voce',
  'sam.card.k3.head2': 'Importo',
  'sam.card.k3.head3': 'Stato',
  'sam.card.k3.t1.c1': 'Camion',
  'sam.card.k3.t1.c3': 'Prenotato',
  'sam.card.k3.t2.c1': 'Scatoloni',
  'sam.card.k3.t2.c3': 'Pagato',
  'sam.card.k3.t3.c1': 'Pulizie',
  'sam.card.k3.t3.c3': 'In sospeso',
  'sam.card.k4.title': 'Pratiche',
  'sam.card.k4.i.b1': 'Cambiare indirizzo in banca',
  'sam.card.k4.i.b2': 'Attivare la luce',
  'sam.card.k4.i.b3': 'Avvisare il lavoro',
  'sam.card.k5.title': 'Da non dimenticare',

  // Corso di fotografia
  'sam.card.k6.title': 'Modulo 3 · Luce naturale',
  'sam.card.k6.i.c1': 'Guardare la lezione registrata',
  'sam.card.k6.i.c2': 'Leggere gli appunti',
  'sam.card.k6.i.c3': 'Uscita all’ora d’oro',
  'sam.card.k7.title': 'Consegnare l’esercizio',

  // Casa · settimana
  'sam.card.k8.title': 'Spesa',
  'sam.card.k8.i.d1': 'Frutta',
  'sam.card.k8.i.d2': 'Caffè',
  'sam.card.k8.i.d3': 'Detersivo',
  'sam.card.k8.i.d4': 'Pane',
  'sam.card.k9.title': 'Annaffiare le piante',
  'sam.card.k12.title': 'Pagare la bolletta dell’acqua',


  // Incarico · Murale Café Aurora
  'sam.card.k20.title': 'Monitoraggio dell’incarico',
  'sam.card.k21.title': 'Brief',
  'sam.card.k22.title': 'Materiali',
  'sam.card.k23.title': 'Riferimento · alba',
  'sam.card.k23.file': 'bozzetto-alba.svg',
  'sam.card.k24.title': 'Tavolozza · alba',
  'sam.card.k25.title': 'Composizione rapida',
  'sam.link.ln1': 'contesto',
  'sam.link.ln2': 'tavolozza',
  'sam.link.ln3': 'idea',
  // 1.3.0: guida di benvenuto, scheda Idee, appunti del corso ed elementi extra delle liste
  'sam.card.h1.body': '## Benvenuto in OMNIA\nQuesta è la tua pagina iniziale. Tutto ciò che vedi sono **schede**: sposta, ridimensiona, elimina o crea le tue con «Aggiungi scheda».\n\n### Primi passi\n- [ ] Annota gli obiettivi del mese nella scheda *Idee*\n- [ ] Crea la tua prima attività principale nella barra laterale\n- [ ] Scrivi `[[ ]]` in una nota per collegarla a un’altra scheda\n- [ ] Attiva la campanella di un promemoria per essere avvisato\n- [ ] Cambia l’aspetto con «Personalizza lavagna»\n\n### Esempi da esplorare\n- **Elenchi e promemoria:** [[{p1}|Trasloco]] e [[{p3}|Casa · settimana]]\n- **Tabella PM:** [[{p5}/{k20}|monitoraggio di un incarico]], con stati, formule e cronologia\n- **Diario:** una nota al giorno, collegabile da qualsiasi scheda\n- **Calendario:** compleanni e appuntamenti, con ripetizioni\n\n> Tutto è salvato sul tuo computer. Attiva i backup automatici e, se vuoi, una password, nelle Impostazioni.',
  'sam.card.h6.title': 'Idee',
  'sam.card.h6.body': '## Idee sparse\nUn angolo per ciò che non ha ancora un posto. Quando un’idea matura, trasformala in attività.\n\n- [ ] Un album con le foto più belle dell’anno\n- [ ] Imparare a sviluppare la pellicola a casa\n- [ ] Gita di fine settimana in montagna\n- [ ] Cucinare una ricetta nuova ogni domenica\n\n> Suggerimento: collega un’idea alla sua attività scrivendo `[[ ]]`, ad esempio [[{p2}|Corso di fotografia]]. #idee',
  'sam.card.k15.title': 'Appunti · Luce naturale',
  'sam.card.k15.body': '### Cosa ho imparato\n- **Ora d’oro:** l’ora dopo l’alba e quella prima del tramonto; luce calda e morbida.\n- **Ora blu:** subito dopo il tramonto, con toni freddi.\n- **Luce dura** (mezzogiorno): ombre marcate; cerca l’ombra aperta.\n\n### Per l’esercizio\n- [ ] Scegliere un soggetto e fotografarlo a tre ore diverse\n- [ ] Confrontare l’istogramma di ogni scatto\n- [ ] Scrivere una frase per foto\n\n> Correlato: [[{p2}/{k7}|consegna dell’esercizio]] #fotografia',
  'sam.card.k6.i.c4': 'Esercitarsi con il triangolo dell’esposizione',
  'sam.card.k6.i.c5': 'Pubblicare la foto migliore sul forum del corso',
  'sam.card.k8.i.d5': 'Uova',
  'sam.card.k8.i.d6': 'Verdure',
  'sam.tag.tg1': 'Illustrazione',
  'sam.tag.tg2': 'Pittura',
  'sam.tag.tg3': 'Cliente',
  'sam.tag.tg4': 'Urgente',
  'sam.tag.tg5': 'Digitale',

  // Tabella PM di esempio
  'sam.row.px1': 'Incontro iniziale e contratto',
  'sam.row.px2': 'Bozzetti di composizione',
  'sam.row.px2.sub1': 'Miniatura A · orizzonte basso',
  'sam.row.px2.sub2': 'Miniatura B · albero in primo piano',
  'sam.row.px2.sub3': 'Miniatura C · vista dall’alto',
  'sam.row.px3': 'Tavolozza dei colori e prove dei materiali',
  'sam.row.px4': 'Presentazione al cliente',
  'sam.row.px5': 'Pittura del murale',
  'sam.row.px6': 'Vernice protettiva, pulizia e foto finali',
  'sam.row.px7': 'Report di avanzamento al cliente',
  'sam.row.px0': 'Sopralluogo al locale (prima idea)',
  'sam.col.time': 'Tempo',
  'sam.col.refs': 'Riferimenti',
  'sam.col.materials': 'Materiali',
  'sam.col.matCost': 'Costo materiali',
  'sam.col.eurHour': '€ / ora',
  'sam.col.margin': 'Margine',

  // Tabella PM «Materiali»
  'sam.mat.col.name': 'Materiale',
  'sam.mat.col.cost': 'Costo',
  'sam.mat.col.supplier': 'Fornitore',
  'sam.mat.col.bought': 'Acquistato',
  'sam.mat.sup.mo1': 'Belle Arti Sol',
  'sam.mat.sup.mo2': 'Ferramenta Pino',
  'sam.mat.mt1': 'Pittura acrilica per esterni',
  'sam.mat.mt2': 'Vernice protettiva UV',
  'sam.mat.mt3': 'Pennelli e rulli',
  'sam.mat.mt4': 'Ponteggio (noleggio 3 settimane)',
  'sam.mat.mt5': 'Nastro e teli di protezione',

  // Diario e calendario
  'sam.daily.title': 'Nota del giorno',
  'sam.event.m1.title': 'Portare l’auto dal meccanico',
  'sam.event.e1.title': 'Compleanno di Carlos',
  'sam.event.e1.note': 'Gli piacciono i vinili',
  'sam.event.e2.title': 'Compleanno di Ana',
  'sam.event.e2.note': 'Comprare dei fiori',
  'sam.event.e3.title': 'Compleanno della mamma',
  'sam.event.e3.note': 'Pranzo di famiglia alle 14:00',
  'sam.event.e4.title': 'Chiamare Leo per il compleanno',

  // Note lunghe (Markdown)
  'sam.card.k5.body': '### Chiavi\nLe **chiavi della cantina** sono nel cassetto dell’ingresso.\n\n- [ ] Avvisare il portiere *24 h prima* per l’ascensore\n- [x] Prenotare il camion\n\n> Vedi anche [[{p3}/{k8}|la lista della spesa]] #trasloco',
  'sam.card.k21.body': '### Café Aurora\nMurale di **6 × 3 m** sulla parete di fondo.\n\n- Tavolozza calda, tema *alba in montagna*\n- Consegna entro il **{due}**\n\n> Apri la tabella con il pulsante **Apri tabella** o con un doppio clic sulla fascia superiore.\n\nProssimo passo: [[{p5}/{k20}/{px5}|pittura del murale]]',
  'sam.row.px2.body': '## Obiettivo\nTre proposte di composizione per il murale, con **luce dell’alba** e la montagna sullo sfondo.\n\n- [x] Foto di riferimento del locale\n- [x] Tre miniature\n- [ ] Scegliere quella definitiva con il cliente\n\n> Vedi il brief in [[{p5}/{k21}|Brief del caffè]]',

  // Note del Diario
  'sam.daily.d1.body': '## Programma del giorno\n- [x] Chiamare Café Aurora per misurare la parete\n- [x] Foto del locale con la luce del pomeriggio\n\n## Note\nLa parete nord riceve il sole diretto fino alle 14: conviene una vernice con filtro UV.\nVedi [[{p5}/{k20}/{px6}|vernice e foto]].',
  'sam.daily.d2.body': '## Programma del giorno\n- [x] Tre miniature di composizione\n- [ ] Scegliere la tavolozza definitiva\n\n## Idee e bozzetti\nProvare la tavolozza dell’[[{p5}/{k24}|alba]] con un azzurro più freddo sulla montagna.',
  'sam.daily.d3.body': '## Programma del giorno\n- [ ] Inviare i bozzetti al cliente\n- [ ] Chiedere il preventivo del ponteggio\n\n## Note\nRipassare il [[{p5}/{k21}|brief]] prima della riunione di giovedì.',

};
