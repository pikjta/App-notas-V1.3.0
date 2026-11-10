import type { Part } from '../es/index';
import type { sample as Es } from '../es/sample';

export const sample: Part<typeof Es> = {
  // Folders and main tasks
  'sam.folder.f1': 'Home and life',
  'sam.folder.f2': 'Learning',
  'sam.proj.home': 'My space',
  'sam.proj.p1': 'Moving house',
  'sam.proj.p2': 'Photography course',
  'sam.proj.p3': 'Home · this week',
  'sam.proj.p5': 'Commission · Café Aurora mural',
  'sam.proj.journal': 'Journal',

  // My space
  'sam.card.h1.title': 'Welcome',
  'sam.card.h2.title': 'Today',
  'sam.card.h3.title': 'My main tasks',
  'sam.card.h4.title': 'Next 7 days',
  'sam.card.h5.title': 'This week',
  'sam.card.h5.i.hw1': 'Call the estate agent',
  'sam.card.h5.i.hw2': 'Golden hour photo outing',
  'sam.card.h5.i.hw3': 'Water the plants',

  // October move
  'sam.card.k1.title': 'Boxes and packing',
  'sam.card.k1.i.g1': 'Buy supplies',
  'sam.card.k1.i.a1': 'Get 30 boxes',
  'sam.card.k1.i.a2': 'Tape and marker pens',
  'sam.card.k1.i.g2': 'Pack',
  'sam.card.k1.i.a3': 'Books',
  'sam.card.k1.i.a4': 'Kitchen',
  'sam.card.k1.i.a6': 'Winter clothes',
  'sam.card.k1.i.a5': 'Label by room',
  'sam.card.k2.title': 'Call the estate agent',
  'sam.card.k3.title': 'Budget',
  'sam.card.k3.head1': 'Item',
  'sam.card.k3.head2': 'Amount',
  'sam.card.k3.head3': 'Status',
  'sam.card.k3.t1.c1': 'Van',
  'sam.card.k3.t1.c3': 'Booked',
  'sam.card.k3.t2.c1': 'Boxes',
  'sam.card.k3.t2.c3': 'Paid',
  'sam.card.k3.t3.c1': 'Cleaning',
  'sam.card.k3.t3.c3': 'Pending',
  'sam.card.k4.title': 'Paperwork',
  'sam.card.k4.i.b1': 'Change address at the bank',
  'sam.card.k4.i.b2': 'Set up the electricity account',
  'sam.card.k4.i.b3': 'Tell work',
  'sam.card.k5.title': 'Don’t forget',

  // Photography course
  'sam.card.k6.title': 'Module 3 · Natural light',
  'sam.card.k6.i.c1': 'Watch the recorded class',
  'sam.card.k6.i.c2': 'Read the notes',
  'sam.card.k6.i.c3': 'Golden hour outing',
  'sam.card.k7.title': 'Hand in the exercise',

  // Home · this week
  'sam.card.k8.title': 'Shopping',
  'sam.card.k8.i.d1': 'Fruit',
  'sam.card.k8.i.d2': 'Coffee',
  'sam.card.k8.i.d3': 'Washing-up liquid',
  'sam.card.k8.i.d4': 'Bread',
  'sam.card.k9.title': 'Water the plants',
  'sam.card.k12.title': 'Pay the water bill',


  // Commission · Café Aurora mural
  'sam.card.k20.title': 'Commission tracking',
  'sam.card.k21.title': 'Brief',
  'sam.card.k22.title': 'Materials',
  'sam.card.k23.title': 'Reference · sunrise',
  'sam.card.k23.file': 'sunrise-sketch.svg',
  'sam.card.k24.title': 'Palette · sunrise',
  'sam.card.k25.title': 'Quick composition',
  'sam.link.ln1': 'context',
  'sam.link.ln2': 'palette',
  'sam.link.ln3': 'idea',
  // 1.3.0: welcome guide, Ideas card, course notes and extra list items
  'sam.card.h1.body': '## Welcome to OMNIA\nThis is your home page. Everything you see is a **card**: move them, resize them, delete them, or create your own with “Add card”.\n\n### First steps\n- [ ] Jot down this month’s goals in the *Ideas* card\n- [ ] Create your first main task in the sidebar\n- [ ] Type `[[ ]]` in a note to link to another card\n- [ ] Turn on the bell on a reminder so it alerts you\n- [ ] Change the look with “Customise board”\n\n### Examples to explore\n- **Lists and reminders:** [[{p1}|Moving house]] and [[{p3}|Home · week]]\n- **PM table:** [[{p5}/{k20}|tracking a commission]], with statuses, formulas and a timeline\n- **Journal:** one note per day, which you can link from any card\n- **Calendar:** birthdays and appointments, with repeats\n\n> Everything is saved on your computer. Turn on automatic backups, and a password if you want one, in Settings.',
  'sam.card.h6.title': 'Ideas',
  'sam.card.h6.body': '## Loose ideas\nA corner for whatever has no place yet. When an idea matures, turn it into a task.\n\n- [ ] An album with the best photos of the year\n- [ ] Learn to develop film at home\n- [ ] Weekend getaway to the mountains\n- [ ] Cook a new recipe every Sunday\n\n> Tip: link an idea to its task by typing `[[ ]]`, for example [[{p2}|Photography course]]. #ideas',
  'sam.card.k15.title': 'Notes · Natural light',
  'sam.card.k15.body': '### What I have learned\n- **Golden hour:** the hour after sunrise and the one before sunset; warm, soft light.\n- **Blue hour:** just after sunset, with cool tones.\n- **Hard light** (midday): strong shadows; look for open shade.\n\n### For the exercise\n- [ ] Pick a subject and photograph it at three different times\n- [ ] Compare the histogram of each shot\n- [ ] Write one sentence per photo\n\n> Related: [[{p2}/{k7}|exercise submission]] #photography',
  'sam.card.k6.i.c4': 'Practise the exposure triangle',
  'sam.card.k6.i.c5': 'Post the best photo on the course forum',
  'sam.card.k8.i.d5': 'Eggs',
  'sam.card.k8.i.d6': 'Vegetables',
  'sam.tag.tg1': 'Illustration',
  'sam.tag.tg2': 'Painting',
  'sam.tag.tg3': 'Client',
  'sam.tag.tg4': 'Urgent',
  'sam.tag.tg5': 'Digital',

  // Sample PM Table
  'sam.row.px1': 'Kick-off meeting and contract',
  'sam.row.px2': 'Composition sketches',
  'sam.row.px2.sub1': 'Thumbnail A · low horizon',
  'sam.row.px2.sub2': 'Thumbnail B · tree in the foreground',
  'sam.row.px2.sub3': 'Thumbnail C · bird’s-eye view',
  'sam.row.px3': 'Colour palette and material tests',
  'sam.row.px4': 'Client presentation',
  'sam.row.px5': 'Painting the mural',
  'sam.row.px6': 'Varnish, clean-up and final photos',
  'sam.row.px7': 'Progress report to the client',
  'sam.row.px0': 'Site visit (first idea)',
  'sam.col.time': 'Time',
  'sam.col.refs': 'References',
  'sam.col.materials': 'Materials',
  'sam.col.matCost': 'Materials cost',
  'sam.col.eurHour': '€ / hour',
  'sam.col.margin': 'Margin',

  // PM Table “Materials”
  'sam.mat.col.name': 'Material',
  'sam.mat.col.cost': 'Cost',
  'sam.mat.col.supplier': 'Supplier',
  'sam.mat.col.bought': 'Bought',
  'sam.mat.sup.mo1': 'Sol Art Supplies',
  'sam.mat.sup.mo2': 'Pino Hardware',
  'sam.mat.mt1': 'Exterior acrylic paint',
  'sam.mat.mt2': 'UV protective varnish',
  'sam.mat.mt3': 'Brushes and rollers',
  'sam.mat.mt4': 'Scaffolding (3 weeks’ hire)',
  'sam.mat.mt5': 'Tape and protective sheeting',

  // Journal and calendar
  'sam.daily.title': 'Daily note',
  'sam.event.m1.title': 'Take the car to the garage',
  'sam.event.e1.title': 'Carlos’s birthday',
  'sam.event.e1.note': 'He likes vinyl records',
  'sam.event.e2.title': 'Ana’s birthday',
  'sam.event.e2.note': 'Buy flowers',
  'sam.event.e3.title': 'Mum’s birthday',
  'sam.event.e3.note': 'Family lunch at 14:00',
  'sam.event.e4.title': 'Call Leo for his birthday',

  // Long notes (Markdown)
  'sam.card.k5.body': '### Keys\nThe **storage room keys** are in the drawer by the front door.\n\n- [ ] Tell the concierge *24 h ahead* about the lift\n- [x] Book the van\n\n> See also [[{p3}/{k8}|the shopping list]] #move',
  'sam.card.k21.body': '### Café Aurora\n**6 × 3 m** mural on the back wall.\n\n- Warm palette, theme *sunrise in the mountains*\n- Delivery before **{due}**\n\n> Open the table with the **Open table** button or by double-clicking its top strip.\n\nNext step: [[{p5}/{k20}/{px5}|painting the mural]]',
  'sam.row.px2.body': '## Goal\nThree composition proposals for the mural, with **sunrise light** and the mountains in the background.\n\n- [x] Reference photos of the premises\n- [x] Three thumbnails\n- [ ] Choose the final one with the client\n\n> See the brief in [[{p5}/{k21}|Café brief]]',

  // Journal notes
  'sam.daily.d1.body': '## Plan for the day\n- [x] Call Café Aurora to measure the wall\n- [x] Photos of the premises in afternoon light\n\n## Notes\nThe north wall gets direct sun until 14:00: a varnish with a UV filter is a good idea.\nSee [[{p5}/{k20}/{px6}|varnish and photos]].',
  'sam.daily.d2.body': '## Plan for the day\n- [x] Three composition thumbnails\n- [ ] Choose the final palette\n\n## Ideas and sketches\nTry the [[{p5}/{k24}|sunrise]] palette with a cooler blue for the mountains.',
  'sam.daily.d3.body': '## Plan for the day\n- [ ] Send sketches to the client\n- [ ] Ask for a quote for the scaffolding\n\n## Notes\nGo over the [[{p5}/{k21}|brief]] before Thursday’s meeting.',

};
