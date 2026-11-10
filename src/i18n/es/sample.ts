// Datos de ejemplo de un cuaderno nuevo (lib/sample.ts): tareas, tarjetas, notas, eventos, Tabla PM de ejemplo. Claves con prefijo «sam.».
// Los textos son datos que se crean una vez en el idioma elegido y después son del usuario.
//
// Convención de claves:
//   sam.folder.<id>, sam.proj.<id>             carpetas y tareas principales (home, p1…p5, journal)
//   sam.card.<id>.title / .body / .head* / ... tarjetas (hN = Inicio, kN = resto); checklists: sam.card.<id>.i.<idItem>
//   sam.row.<pxN> / .sub<n> / .body            filas de la Tabla PM «Seguimiento del encargo»
//   sam.col.*, sam.mat.*                       columnas extra y tabla «Materiales»
//   sam.tag.*, sam.link.*, sam.daily.*, sam.event.*
// Enlaces [[…]] dentro de los Markdown: el destino se escribe con variables que sampleDocs rellena con el nombre
// traducido del elemento: {pN} tarea principal, {kN} tarjeta, {pxN} fila (p. ej. [[{p5}/{k20}/{px5}|pintado del mural]]).
// Hay que conservar esas variables tal cual en cada idioma; solo se traduce el alias tras «|».
export const sample = {
  // Carpetas y tareas principales
  'sam.folder.f1': 'Casa y vida',
  'sam.folder.f2': 'Aprendizaje',
  'sam.proj.home': 'Mi espacio',
  'sam.proj.p1': 'Mudanza',
  'sam.proj.p2': 'Curso de fotografía',
  'sam.proj.p3': 'Casa · semana',
  'sam.proj.p5': 'Encargo · Mural Café Aurora',
  'sam.proj.journal': 'Diario',

  // Mi espacio
  'sam.card.h1.title': 'Bienvenida',
  'sam.card.h2.title': 'Hoy',
  'sam.card.h3.title': 'Mis tareas principales',
  'sam.card.h4.title': 'Próximos 7 días',
  'sam.card.h5.title': 'Esta semana',
  'sam.card.h5.i.hw1': 'Llamar a la inmobiliaria',
  'sam.card.h5.i.hw2': 'Salida de fotografía a la hora dorada',
  'sam.card.h5.i.hw3': 'Regar las plantas',

  // Mudanza de octubre
  'sam.card.k1.title': 'Cajas y embalaje',
  'sam.card.k1.i.g1': 'Comprar material',
  'sam.card.k1.i.a1': 'Conseguir 30 cajas',
  'sam.card.k1.i.a2': 'Cinta y rotuladores',
  'sam.card.k1.i.g2': 'Empaquetar',
  'sam.card.k1.i.a3': 'Libros',
  'sam.card.k1.i.a4': 'Cocina',
  'sam.card.k1.i.a6': 'Ropa de invierno',
  'sam.card.k1.i.a5': 'Etiquetar por habitación',
  'sam.card.k2.title': 'Llamar a la inmobiliaria',
  'sam.card.k3.title': 'Presupuesto',
  'sam.card.k3.head1': 'Concepto',
  'sam.card.k3.head2': 'Importe',
  'sam.card.k3.head3': 'Estado',
  'sam.card.k3.t1.c1': 'Camión',
  'sam.card.k3.t1.c3': 'Reservado',
  'sam.card.k3.t2.c1': 'Cajas',
  'sam.card.k3.t2.c3': 'Pagado',
  'sam.card.k3.t3.c1': 'Limpieza',
  'sam.card.k3.t3.c3': 'Pendiente',
  'sam.card.k4.title': 'Trámites',
  'sam.card.k4.i.b1': 'Cambiar dirección en el banco',
  'sam.card.k4.i.b2': 'Dar de alta la luz',
  'sam.card.k4.i.b3': 'Avisar al trabajo',
  'sam.card.k5.title': 'Para no olvidar',

  // Curso de fotografía
  'sam.card.k6.title': 'Módulo 3 · Luz natural',
  'sam.card.k6.i.c1': 'Ver la clase grabada',
  'sam.card.k6.i.c2': 'Leer apuntes',
  'sam.card.k6.i.c3': 'Salida a la hora dorada',
  'sam.card.k7.title': 'Entregar ejercicio',

  // Casa · semana
  'sam.card.k8.title': 'Compra',
  'sam.card.k8.i.d1': 'Fruta',
  'sam.card.k8.i.d2': 'Café',
  'sam.card.k8.i.d3': 'Detergente',
  'sam.card.k8.i.d4': 'Pan',
  'sam.card.k9.title': 'Regar las plantas',
  'sam.card.k12.title': 'Pagar el recibo del agua',


  // Encargo · Mural Café Aurora: tarjetas, flechas, etiquetas globales
  'sam.card.k20.title': 'Seguimiento del encargo',
  'sam.card.k21.title': 'Brief',
  'sam.card.k22.title': 'Materiales',
  'sam.card.k23.title': 'Referencia · amanecer',
  'sam.card.k23.file': 'boceto-amanecer.svg',
  'sam.card.k24.title': 'Paleta · amanecer',
  'sam.card.k25.title': 'Composición rápida',
  'sam.link.ln1': 'contexto',
  'sam.link.ln2': 'paleta',
  'sam.link.ln3': 'idea',
  // 1.3.0: bienvenida con guía, tarjeta de Ideas, apuntes del curso y elementos extra de las listas
  'sam.card.h1.body': '## Te damos la bienvenida a OMNIA\nEsta es tu página de inicio. Todo lo que ves son **tarjetas**: muévelas, cambia su tamaño, bórralas o crea las tuyas con «Añadir tarjeta».\n\n### Primeros pasos\n- [ ] Apunta las metas del mes en la tarjeta *Ideas*\n- [ ] Crea tu primera tarea principal en la barra lateral\n- [ ] Escribe `[[ ]]` en una nota para enlazar con otra tarjeta\n- [ ] Activa la campana de un recordatorio para que te avise\n- [ ] Cambia el aspecto con «Personalizar tablero»\n\n### Ejemplos para explorar\n- **Listas y recordatorios:** [[{p1}|Mudanza]] y [[{p3}|Casa · semana]]\n- **Tabla PM:** [[{p5}/{k20}|seguimiento de un encargo]], con estados, fórmulas y cronología\n- **Diario:** una nota por día, que puedes enlazar desde cualquier tarjeta\n- **Calendario:** cumpleaños y citas, con repeticiones\n\n> Todo se guarda en tu equipo. Activa las copias automáticas y, si quieres, una contraseña en Ajustes.',
  'sam.card.h6.title': 'Ideas',
  'sam.card.h6.body': '## Ideas sueltas\nUn rincón para lo que aún no tiene sitio. Cuando una idea madure, conviértela en tarea.\n\n- [ ] Un álbum con las mejores fotos del año\n- [ ] Aprender a revelar película en casa\n- [ ] Escapada de fin de semana a la sierra\n- [ ] Cocinar una receta nueva cada domingo\n\n> Truco: enlaza una idea con su tarea escribiendo `[[ ]]`, por ejemplo [[{p2}|Curso de fotografía]]. #ideas',
  'sam.card.k15.title': 'Apuntes · Luz natural',
  'sam.card.k15.body': '### Lo que he aprendido\n- **Hora dorada:** la hora tras el amanecer y la previa al ocaso; luz cálida y suave.\n- **Hora azul:** justo después del ocaso, con tonos fríos.\n- **Luz dura** (mediodía): sombras marcadas; busca sombra abierta.\n\n### Para el ejercicio\n- [ ] Elegir un motivo y fotografiarlo a tres horas distintas\n- [ ] Comparar el histograma de cada toma\n- [ ] Escribir una frase por foto\n\n> Relacionado: [[{p2}/{k7}|entrega del ejercicio]] #fotografía',
  'sam.card.k6.i.c4': 'Practicar el triángulo de exposición',
  'sam.card.k6.i.c5': 'Subir la mejor foto al foro del curso',
  'sam.card.k8.i.d5': 'Huevos',
  'sam.card.k8.i.d6': 'Verduras',
  'sam.tag.tg1': 'Ilustración',
  'sam.tag.tg2': 'Pintura',
  'sam.tag.tg3': 'Cliente',
  'sam.tag.tg4': 'Urgente',
  'sam.tag.tg5': 'Digital',

  // Tabla PM de ejemplo: filas (nombres, subtareas) y columnas añadidas a la plantilla
  'sam.row.px1': 'Reunión inicial y contrato',
  'sam.row.px2': 'Bocetos de composición',
  'sam.row.px2.sub1': 'Miniatura A · horizonte bajo',
  'sam.row.px2.sub2': 'Miniatura B · árbol en primer plano',
  'sam.row.px2.sub3': 'Miniatura C · vista cenital',
  'sam.row.px3': 'Paleta de color y pruebas de material',
  'sam.row.px4': 'Presentación al cliente',
  'sam.row.px5': 'Pintado del mural',
  'sam.row.px6': 'Barniz, limpieza y fotos finales',
  'sam.row.px7': 'Informe de avance al cliente',
  'sam.row.px0': 'Visita al local (primera idea)',
  'sam.col.time': 'Tiempo',
  'sam.col.refs': 'Referencias',
  'sam.col.materials': 'Materiales',
  'sam.col.matCost': 'Coste materiales',
  'sam.col.eurHour': '€ / hora',
  'sam.col.margin': 'Margen',

  // Tabla PM «Materiales» (tarjeta k22)
  'sam.mat.col.name': 'Material',
  'sam.mat.col.cost': 'Coste',
  'sam.mat.col.supplier': 'Proveedor',
  'sam.mat.col.bought': 'Comprado',
  'sam.mat.sup.mo1': 'Bellas Artes Sol',
  'sam.mat.sup.mo2': 'Ferretería Pino',
  'sam.mat.mt1': 'Pintura acrílica de exterior',
  'sam.mat.mt2': 'Barniz protector UV',
  'sam.mat.mt3': 'Pinceles y rodillos',
  'sam.mat.mt4': 'Andamio (alquiler 3 semanas)',
  'sam.mat.mt5': 'Cinta y plásticos de protección',

  // Diario y calendario
  'sam.daily.title': 'Nota del día',
  'sam.event.m1.title': 'Llevar el coche al taller',
  'sam.event.e1.title': 'Cumpleaños de Carlos',
  'sam.event.e1.note': 'Le gustan los vinilos',
  'sam.event.e2.title': 'Cumpleaños de Ana',
  'sam.event.e2.note': 'Comprar flores',
  'sam.event.e3.title': 'Cumpleaños de mamá',
  'sam.event.e3.note': 'Comida familiar a las 14:00',
  'sam.event.e4.title': 'Llamar a Leo por su cumple',

  // Notas largas (Markdown). Los enlaces [[…]] usan variables con el nombre real del destino: {pN} = tarea principal, {kN} = tarjeta, {pxN} = fila de la Tabla PM; el alias tras «|» sí se traduce
  'sam.card.k5.body': '### Llaves\nLas **llaves del trastero** están en el cajón de la entrada.\n\n- [ ] Avisar al portero *24 h antes* para el ascensor\n- [x] Reservar el camión\n\n> Ver también [[{p3}/{k8}|la lista de la compra]] #mudanza',
  'sam.card.k21.body': '### Café Aurora\nMural de **6 × 3 m** en la pared del fondo.\n\n- Paleta cálida, tema *amanecer en la sierra*\n- Entrega antes del **{due}**\n\n> Abre la tabla con el botón **Abrir tabla** o con doble clic en su franja superior.\n\nPróximo paso: [[{p5}/{k20}/{px5}|pintado del mural]]',
  'sam.row.px2.body': '## Objetivo\nTres propuestas de composición para el mural, con **luz de amanecer** y la sierra al fondo.\n\n- [x] Fotos de referencia del local\n- [x] Tres miniaturas\n- [ ] Elegir la definitiva con el cliente\n\n> Ver el brief en [[{p5}/{k21}|Brief del café]]',

  // Notas del Diario (los enlaces [[…]] siguen la misma convención de variables)
  'sam.daily.d1.body': '## Plan del día\n- [x] Llamar a Café Aurora para medir la pared\n- [x] Fotos del local con luz de tarde\n\n## Notas\nLa pared norte recibe sol directo hasta las 14 h: conviene barniz con filtro UV.\nVer [[{p5}/{k20}/{px6}|barniz y fotos]].',
  'sam.daily.d2.body': '## Plan del día\n- [x] Tres miniaturas de composición\n- [ ] Elegir paleta definitiva\n\n## Ideas y bocetos\nProbar la paleta del [[{p5}/{k24}|amanecer]] con un azul más frío en la sierra.',
  'sam.daily.d3.body': '## Plan del día\n- [ ] Enviar bocetos al cliente\n- [ ] Pedir presupuesto del andamio\n\n## Notas\nRepasar el [[{p5}/{k21}|brief]] antes de la reunión del jueves.',

} as const;
