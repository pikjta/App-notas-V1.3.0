import type { Part } from '../es/index';
import type { sample as Es } from '../es/sample';

export const sample: Part<typeof Es> = {
  // Dossiers et tâches principales
  'sam.folder.f1': 'Maison et vie',
  'sam.folder.f2': 'Apprentissage',
  'sam.proj.home': 'Mon espace',
  'sam.proj.p1': 'Déménagement',
  'sam.proj.p2': 'Cours de photographie',
  'sam.proj.p3': 'Maison · semaine',
  'sam.proj.p5': 'Commande · Fresque Café Aurora',
  'sam.proj.journal': 'Journal',

  // Mon espace
  'sam.card.h1.title': 'Bienvenue',
  'sam.card.h2.title': 'Aujourd’hui',
  'sam.card.h3.title': 'Mes tâches principales',
  'sam.card.h4.title': '7 prochains jours',
  'sam.card.h5.title': 'Cette semaine',
  'sam.card.h5.i.hw1': 'Appeler l’agence immobilière',
  'sam.card.h5.i.hw2': 'Sortie photo à l’heure dorée',
  'sam.card.h5.i.hw3': 'Arroser les plantes',

  // Déménagement d’octobre
  'sam.card.k1.title': 'Cartons et emballage',
  'sam.card.k1.i.g1': 'Acheter le matériel',
  'sam.card.k1.i.a1': 'Trouver 30 cartons',
  'sam.card.k1.i.a2': 'Ruban adhésif et feutres',
  'sam.card.k1.i.g2': 'Emballer',
  'sam.card.k1.i.a3': 'Livres',
  'sam.card.k1.i.a4': 'Cuisine',
  'sam.card.k1.i.a6': 'Vêtements d’hiver',
  'sam.card.k1.i.a5': 'Étiqueter par pièce',
  'sam.card.k2.title': 'Appeler l’agence immobilière',
  'sam.card.k3.title': 'Budget',
  'sam.card.k3.head1': 'Poste',
  'sam.card.k3.head2': 'Montant',
  'sam.card.k3.head3': 'Statut',
  'sam.card.k3.t1.c1': 'Camion',
  'sam.card.k3.t1.c3': 'Réservé',
  'sam.card.k3.t2.c1': 'Cartons',
  'sam.card.k3.t2.c3': 'Payé',
  'sam.card.k3.t3.c1': 'Ménage',
  'sam.card.k3.t3.c3': 'En attente',
  'sam.card.k4.title': 'Démarches',
  'sam.card.k4.i.b1': 'Changer l’adresse à la banque',
  'sam.card.k4.i.b2': 'Souscrire un contrat d’électricité',
  'sam.card.k4.i.b3': 'Prévenir mon employeur',
  'sam.card.k5.title': 'À ne pas oublier',

  // Cours de photographie
  'sam.card.k6.title': 'Module 3 · Lumière naturelle',
  'sam.card.k6.i.c1': 'Regarder le cours enregistré',
  'sam.card.k6.i.c2': 'Relire les notes',
  'sam.card.k6.i.c3': 'Sortie à l’heure dorée',
  'sam.card.k7.title': 'Rendre l’exercice',

  // Maison · semaine
  'sam.card.k8.title': 'Courses',
  'sam.card.k8.i.d1': 'Fruits',
  'sam.card.k8.i.d2': 'Café',
  'sam.card.k8.i.d3': 'Lessive',
  'sam.card.k8.i.d4': 'Pain',
  'sam.card.k9.title': 'Arroser les plantes',
  'sam.card.k12.title': 'Payer la facture d’eau',


  // Commande · Fresque Café Aurora
  'sam.card.k20.title': 'Suivi de la commande',
  'sam.card.k21.title': 'Brief',
  'sam.card.k22.title': 'Matériaux',
  'sam.card.k23.title': 'Référence · aube',
  'sam.card.k23.file': 'croquis-aube.svg',
  'sam.card.k24.title': 'Palette · aube',
  'sam.card.k25.title': 'Composition rapide',
  'sam.link.ln1': 'contexte',
  'sam.link.ln2': 'palette',
  'sam.link.ln3': 'idée',
  // 1.3.0 : guide de bienvenue, carte Idées, notes du cours et éléments de liste en plus
  'sam.card.h1.body': '## Bienvenue dans OMNIA\nVoici votre page d’accueil. Tout ce que vous voyez, ce sont des **cartes** : déplacez-les, redimensionnez-les, supprimez-les ou créez les vôtres avec « Ajouter une carte ».\n\n### Premiers pas\n- [ ] Notez les objectifs du mois dans la carte *Idées*\n- [ ] Créez votre première tâche principale dans la barre latérale\n- [ ] Tapez `[[ ]]` dans une note pour la lier à une autre carte\n- [ ] Activez la cloche d’un rappel pour être prévenu\n- [ ] Changez l’apparence avec « Personnaliser le tableau »\n\n### Des exemples à explorer\n- **Listes et rappels :** [[{p1}|Déménagement]] et [[{p3}|Maison · semaine]]\n- **Tableau PM :** [[{p5}/{k20}|suivi d’une commande]], avec statuts, formules et chronologie\n- **Journal :** une note par jour, que vous pouvez lier depuis n’importe quelle carte\n- **Calendrier :** anniversaires et rendez-vous, avec répétitions\n\n> Tout est enregistré sur votre ordinateur. Activez les sauvegardes automatiques, et un mot de passe si vous le souhaitez, dans les Paramètres.',
  'sam.card.h6.title': 'Idées',
  'sam.card.h6.body': '## Idées en vrac\nUn coin pour ce qui n’a pas encore sa place. Quand une idée mûrit, transformez-la en tâche.\n\n- [ ] Un album des plus belles photos de l’année\n- [ ] Apprendre à développer une pellicule à la maison\n- [ ] Week-end à la montagne\n- [ ] Cuisiner une nouvelle recette chaque dimanche\n\n> Astuce : liez une idée à sa tâche en tapant `[[ ]]`, par exemple [[{p2}|Cours de photographie]]. #idées',
  'sam.card.k15.title': 'Notes · Lumière naturelle',
  'sam.card.k15.body': '### Ce que j’ai appris\n- **Heure dorée :** l’heure après le lever du soleil et celle avant son coucher ; lumière chaude et douce.\n- **Heure bleue :** juste après le coucher du soleil, avec des tons froids.\n- **Lumière dure** (midi) : ombres marquées ; cherchez l’ombre ouverte.\n\n### Pour l’exercice\n- [ ] Choisir un sujet et le photographier à trois heures différentes\n- [ ] Comparer l’histogramme de chaque prise\n- [ ] Écrire une phrase par photo\n\n> Lié : [[{p2}/{k7}|remise de l’exercice]] #photographie',
  'sam.card.k6.i.c4': 'S’exercer avec le triangle d’exposition',
  'sam.card.k6.i.c5': 'Publier la meilleure photo sur le forum du cours',
  'sam.card.k8.i.d5': 'Œufs',
  'sam.card.k8.i.d6': 'Légumes',
  'sam.tag.tg1': 'Illustration',
  'sam.tag.tg2': 'Peinture',
  'sam.tag.tg3': 'Client',
  'sam.tag.tg4': 'Urgent',
  'sam.tag.tg5': 'Numérique',

  // Tableau PM d’exemple
  'sam.row.px1': 'Réunion initiale et contrat',
  'sam.row.px2': 'Croquis de composition',
  'sam.row.px2.sub1': 'Vignette A · horizon bas',
  'sam.row.px2.sub2': 'Vignette B · arbre au premier plan',
  'sam.row.px2.sub3': 'Vignette C · vue plongeante',
  'sam.row.px3': 'Palette de couleurs et essais de matériaux',
  'sam.row.px4': 'Présentation au client',
  'sam.row.px5': 'Peinture de la fresque',
  'sam.row.px6': 'Vernis, nettoyage et photos finales',
  'sam.row.px7': 'Rapport d’avancement au client',
  'sam.row.px0': 'Visite du local (première idée)',
  'sam.col.time': 'Temps',
  'sam.col.refs': 'Références',
  'sam.col.materials': 'Matériaux',
  'sam.col.matCost': 'Coût matériaux',
  'sam.col.eurHour': '€ / heure',
  'sam.col.margin': 'Marge',

  // Tableau PM « Matériaux »
  'sam.mat.col.name': 'Matériau',
  'sam.mat.col.cost': 'Coût',
  'sam.mat.col.supplier': 'Fournisseur',
  'sam.mat.col.bought': 'Acheté',
  'sam.mat.sup.mo1': 'Beaux-Arts Sol',
  'sam.mat.sup.mo2': 'Quincaillerie Pino',
  'sam.mat.mt1': 'Peinture acrylique d’extérieur',
  'sam.mat.mt2': 'Vernis de protection anti-UV',
  'sam.mat.mt3': 'Pinceaux et rouleaux',
  'sam.mat.mt4': 'Échafaudage (location 3 semaines)',
  'sam.mat.mt5': 'Ruban et bâches de protection',

  // Journal et calendrier
  'sam.daily.title': 'Note du jour',
  'sam.event.m1.title': 'Emmener la voiture au garage',
  'sam.event.e1.title': 'Anniversaire de Carlos',
  'sam.event.e1.note': 'Il aime les vinyles',
  'sam.event.e2.title': 'Anniversaire d’Ana',
  'sam.event.e2.note': 'Acheter des fleurs',
  'sam.event.e3.title': 'Anniversaire de Maman',
  'sam.event.e3.note': 'Repas de famille à 14:00',
  'sam.event.e4.title': 'Appeler Leo pour son anniversaire',

  // Notes longues (Markdown)
  'sam.card.k5.body': '### Clés\nLes **clés de la cave** sont dans le tiroir de l’entrée.\n\n- [ ] Prévenir le gardien *24 h avant* pour l’ascenseur\n- [x] Réserver le camion\n\n> Voir aussi [[{p3}/{k8}|la liste de courses]] #déménagement',
  'sam.card.k21.body': '### Café Aurora\nFresque de **6 × 3 m** sur le mur du fond.\n\n- Palette chaude, thème *aube sur la sierra*\n- Livraison avant le **{due}**\n\n> Ouvrez le tableau avec le bouton **Ouvrir le tableau** ou en double-cliquant sur sa bande supérieure.\n\nProchaine étape : [[{p5}/{k20}/{px5}|peinture de la fresque]]',
  'sam.row.px2.body': '## Objectif\nTrois propositions de composition pour la fresque, avec une **lumière d’aube** et la sierra au fond.\n\n- [x] Photos de référence du local\n- [x] Trois vignettes\n- [ ] Choisir la version définitive avec le client\n\n> Voir le brief dans [[{p5}/{k21}|Brief du café]]',

  // Notes du Journal
  'sam.daily.d1.body': '## Programme du jour\n- [x] Appeler Café Aurora pour mesurer le mur\n- [x] Photos du local en lumière de fin de journée\n\n## Notes\nLe mur nord reçoit le soleil direct jusqu’à 14 h : mieux vaut un vernis avec filtre UV.\nVoir [[{p5}/{k20}/{px6}|vernis et photos]].',
  'sam.daily.d2.body': '## Programme du jour\n- [x] Trois vignettes de composition\n- [ ] Choisir la palette définitive\n\n## Idées et croquis\nEssayer la palette de l’[[{p5}/{k24}|aube]] avec un bleu plus froid sur la sierra.',
  'sam.daily.d3.body': '## Programme du jour\n- [ ] Envoyer les croquis au client\n- [ ] Demander un devis pour l’échafaudage\n\n## Notes\nRelire le [[{p5}/{k21}|brief]] avant la réunion de jeudi.',

};
