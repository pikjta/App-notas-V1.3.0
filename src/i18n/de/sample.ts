import type { Part } from '../es/index';
import type { sample as Es } from '../es/sample';

export const sample: Part<typeof Es> = {
  // Carpetas y tareas principales
  'sam.folder.f1': 'Haus und Leben',
  'sam.folder.f2': 'Lernen',
  'sam.proj.home': 'Mein Bereich',
  'sam.proj.p1': 'Umzug',
  'sam.proj.p2': 'Fotokurs',
  'sam.proj.p3': 'Zuhause · Woche',
  'sam.proj.p5': 'Auftrag · Wandbild Café Aurora',
  'sam.proj.journal': 'Tagebuch',

  // Mi espacio
  'sam.card.h1.title': 'Willkommen',
  'sam.card.h2.title': 'Heute',
  'sam.card.h3.title': 'Meine Hauptaufgaben',
  'sam.card.h4.title': 'Nächste 7 Tage',
  'sam.card.h5.title': 'Diese Woche',
  'sam.card.h5.i.hw1': 'Maklerbüro anrufen',
  'sam.card.h5.i.hw2': 'Fotoausflug zur goldenen Stunde',
  'sam.card.h5.i.hw3': 'Pflanzen gießen',

  // Mudanza de octubre
  'sam.card.k1.title': 'Kartons und Verpackung',
  'sam.card.k1.i.g1': 'Material besorgen',
  'sam.card.k1.i.a1': '30 Kartons auftreiben',
  'sam.card.k1.i.a2': 'Klebeband und Marker',
  'sam.card.k1.i.g2': 'Packen',
  'sam.card.k1.i.a3': 'Bücher',
  'sam.card.k1.i.a4': 'Küche',
  'sam.card.k1.i.a6': 'Winterkleidung',
  'sam.card.k1.i.a5': 'Nach Zimmern beschriften',
  'sam.card.k2.title': 'Maklerbüro anrufen',
  'sam.card.k3.title': 'Budget',
  'sam.card.k3.head1': 'Posten',
  'sam.card.k3.head2': 'Betrag',
  'sam.card.k3.head3': 'Status',
  'sam.card.k3.t1.c1': 'Transporter',
  'sam.card.k3.t1.c3': 'Reserviert',
  'sam.card.k3.t2.c1': 'Kartons',
  'sam.card.k3.t2.c3': 'Bezahlt',
  'sam.card.k3.t3.c1': 'Reinigung',
  'sam.card.k3.t3.c3': 'Offen',
  'sam.card.k4.title': 'Behördengänge und Co.',
  'sam.card.k4.i.b1': 'Adresse bei der Bank ändern',
  'sam.card.k4.i.b2': 'Strom anmelden',
  'sam.card.k4.i.b3': 'Den Arbeitgeber informieren',
  'sam.card.k5.title': 'Nicht vergessen',

  // Curso de fotografía
  'sam.card.k6.title': 'Modul 3 · Natürliches Licht',
  'sam.card.k6.i.c1': 'Aufgezeichnete Lektion ansehen',
  'sam.card.k6.i.c2': 'Mitschrift lesen',
  'sam.card.k6.i.c3': 'Ausflug zur goldenen Stunde',
  'sam.card.k7.title': 'Übung abgeben',

  // Casa · semana
  'sam.card.k8.title': 'Einkauf',
  'sam.card.k8.i.d1': 'Obst',
  'sam.card.k8.i.d2': 'Kaffee',
  'sam.card.k8.i.d3': 'Spülmittel',
  'sam.card.k8.i.d4': 'Brot',
  'sam.card.k9.title': 'Pflanzen gießen',
  'sam.card.k12.title': 'Wasserrechnung bezahlen',


  // Encargo · Mural Café Aurora: tarjetas, flechas, etiquetas globales
  'sam.card.k20.title': 'Auftragsverfolgung',
  'sam.card.k21.title': 'Briefing',
  'sam.card.k22.title': 'Materialien',
  'sam.card.k23.title': 'Referenz · Morgenrot',
  'sam.card.k23.file': 'skizze-morgenrot.svg',
  'sam.card.k24.title': 'Palette · Morgenrot',
  'sam.card.k25.title': 'Schnelle Komposition',
  'sam.link.ln1': 'Kontext',
  'sam.link.ln2': 'Palette',
  'sam.link.ln3': 'Idee',
  // 1.3.0: Willkommensanleitung, Ideen-Karte, Kursnotizen und zusätzliche Listeneinträge
  'sam.card.h1.body': '## Willkommen bei OMNIA\nDas ist deine Startseite. Alles, was du siehst, sind **Karten**: Verschiebe sie, ändere ihre Größe, lösche sie oder erstelle mit „Karte hinzufügen“ eigene.\n\n### Erste Schritte\n- [ ] Die Ziele des Monats in der Karte *Ideen* festhalten\n- [ ] Deine erste Hauptaufgabe in der Seitenleiste anlegen\n- [ ] `[[ ]]` in eine Notiz schreiben, um eine andere Karte zu verknüpfen\n- [ ] Bei einer Erinnerung die Glocke einschalten, damit sie dich benachrichtigt\n- [ ] Das Aussehen über „Board anpassen“ ändern\n\n### Beispiele zum Erkunden\n- **Listen und Erinnerungen:** [[{p1}|Umzug]] und [[{p3}|Haus · Woche]]\n- **PM-Tabelle:** [[{p5}/{k20}|Auftragsverfolgung]], mit Status, Formeln und Zeitachse\n- **Tagebuch:** eine Notiz pro Tag, von jeder Karte aus verlinkbar\n- **Kalender:** Geburtstage und Termine, mit Wiederholungen\n\n> Alles wird auf deinem Computer gespeichert. Aktiviere in den Einstellungen die automatischen Backups und, wenn du möchtest, ein Passwort.',
  'sam.card.h6.title': 'Ideen',
  'sam.card.h6.body': '## Lose Ideen\nEine Ecke für alles, was noch keinen Platz hat. Wenn eine Idee reift, mach daraus eine Aufgabe.\n\n- [ ] Ein Album mit den besten Fotos des Jahres\n- [ ] Lernen, einen Film zu Hause zu entwickeln\n- [ ] Wochenendausflug ins Gebirge\n- [ ] Jeden Sonntag ein neues Rezept kochen\n\n> Tipp: Verknüpfe eine Idee mit ihrer Aufgabe, indem du `[[ ]]` schreibst, zum Beispiel [[{p2}|Fotografiekurs]]. #ideen',
  'sam.card.k15.title': 'Notizen · Natürliches Licht',
  'sam.card.k15.body': '### Was ich gelernt habe\n- **Goldene Stunde:** die Stunde nach Sonnenaufgang und die vor Sonnenuntergang; warmes, weiches Licht.\n- **Blaue Stunde:** direkt nach Sonnenuntergang, mit kühlen Tönen.\n- **Hartes Licht** (Mittag): starke Schatten; such offenen Schatten.\n\n### Für die Übung\n- [ ] Ein Motiv wählen und zu drei verschiedenen Zeiten fotografieren\n- [ ] Das Histogramm jeder Aufnahme vergleichen\n- [ ] Einen Satz pro Foto schreiben\n\n> Verwandt: [[{p2}/{k7}|Abgabe der Übung]] #fotografie',
  'sam.card.k6.i.c4': 'Das Belichtungsdreieck üben',
  'sam.card.k6.i.c5': 'Das beste Foto im Kursforum posten',
  'sam.card.k8.i.d5': 'Eier',
  'sam.card.k8.i.d6': 'Gemüse',
  'sam.tag.tg1': 'Illustration',
  'sam.tag.tg2': 'Malerei',
  'sam.tag.tg3': 'Kunde',
  'sam.tag.tg4': 'Dringend',
  'sam.tag.tg5': 'Digital',

  // Tabla PM de ejemplo: filas (nombres, subtareas) y columnas añadidas a la plantilla
  'sam.row.px1': 'Erstgespräch und Vertrag',
  'sam.row.px2': 'Kompositionsskizzen',
  'sam.row.px2.sub1': 'Thumbnail A · tiefer Horizont',
  'sam.row.px2.sub2': 'Thumbnail B · Baum im Vordergrund',
  'sam.row.px2.sub3': 'Thumbnail C · Vogelperspektive',
  'sam.row.px3': 'Farbpalette und Materialtests',
  'sam.row.px4': 'Präsentation beim Kunden',
  'sam.row.px5': 'Wand bemalen',
  'sam.row.px6': 'Lack, Reinigung und Abschlussfotos',
  'sam.row.px7': 'Fortschrittsbericht an den Kunden',
  'sam.row.px0': 'Ortsbesichtigung (erste Idee)',
  'sam.col.time': 'Zeit',
  'sam.col.refs': 'Referenzen',
  'sam.col.materials': 'Materialien',
  'sam.col.matCost': 'Materialkosten',
  'sam.col.eurHour': '€ / Stunde',
  'sam.col.margin': 'Marge',

  // Tabla PM «Materiales» (tarjeta k22)
  'sam.mat.col.name': 'Material',
  'sam.mat.col.cost': 'Kosten',
  'sam.mat.col.supplier': 'Lieferant',
  'sam.mat.col.bought': 'Gekauft',
  'sam.mat.sup.mo1': 'Künstlerbedarf Sol',
  'sam.mat.sup.mo2': 'Baumarkt Pino',
  'sam.mat.mt1': 'Acrylfarbe für außen',
  'sam.mat.mt2': 'UV-Schutzlack',
  'sam.mat.mt3': 'Pinsel und Rollen',
  'sam.mat.mt4': 'Gerüst (Miete für 3 Wochen)',
  'sam.mat.mt5': 'Abdeckband und Schutzfolie',

  // Diario y calendario
  'sam.daily.title': 'Tagesnotiz',
  'sam.event.m1.title': 'Auto in die Werkstatt bringen',
  'sam.event.e1.title': 'Carlos’ Geburtstag',
  'sam.event.e1.note': 'Er mag Schallplatten',
  'sam.event.e2.title': 'Anas Geburtstag',
  'sam.event.e2.note': 'Blumen kaufen',
  'sam.event.e3.title': 'Mamas Geburtstag',
  'sam.event.e3.note': 'Familienessen um 14:00 Uhr',
  'sam.event.e4.title': 'Leo zum Geburtstag anrufen',

  // Notas largas (Markdown)
  'sam.card.k5.body': '### Schlüssel\nDie **Kellerschlüssel** liegen in der Schublade im Flur.\n\n- [ ] Den Hausmeister *24 Std. vorher* wegen des Aufzugs informieren\n- [x] Den Transporter reservieren\n\n> Siehe auch [[{p3}/{k8}|die Einkaufsliste]] #umzug',
  'sam.card.k21.body': '### Café Aurora\nWandbild von **6 × 3 m** an der hinteren Wand.\n\n- Warme Palette, Thema *Morgenrot im Gebirge*\n- Abgabe vor dem **{due}**\n\n> Öffne die Tabelle mit dem Button **Tabelle öffnen** oder per Doppelklick auf den oberen Streifen.\n\nNächster Schritt: [[{p5}/{k20}/{px5}|Wand bemalen]]',
  'sam.row.px2.body': '## Ziel\nDrei Kompositionsvorschläge für das Wandbild, mit **Morgenlicht** und dem Gebirge im Hintergrund.\n\n- [x] Referenzfotos vom Lokal\n- [x] Drei Thumbnails\n- [ ] Die endgültige Variante mit dem Kunden auswählen\n\n> Siehe das Briefing unter [[{p5}/{k21}|Briefing des Cafés]]',

  // Notas del Diario
  'sam.daily.d1.body': '## Tagesplan\n- [x] Café Aurora anrufen, um die Wand zu vermessen\n- [x] Fotos vom Lokal bei Nachmittagslicht\n\n## Notizen\nDie Nordwand bekommt bis 14 Uhr direkte Sonne: Ein Lack mit UV-Filter ist sinnvoll.\nSiehe [[{p5}/{k20}/{px6}|Lack und Fotos]].',
  'sam.daily.d2.body': '## Tagesplan\n- [x] Drei Kompositions-Thumbnails\n- [ ] Endgültige Palette auswählen\n\n## Ideen und Skizzen\nDie Palette vom [[{p5}/{k24}|Morgenrot]] mit einem kühleren Blau im Gebirge ausprobieren.',
  'sam.daily.d3.body': '## Tagesplan\n- [ ] Skizzen an den Kunden schicken\n- [ ] Angebot für das Gerüst anfordern\n\n## Notizen\nDas [[{p5}/{k21}|Briefing]] vor dem Termin am Donnerstag durchgehen.',

};
