import type { Part } from '../es/index';
import type { sample as Es } from '../es/sample';

export const sample: Part<typeof Es> = {
  // Pastas e tarefas principais
  'sam.folder.f1': 'Casa e vida',
  'sam.folder.f2': 'Aprendizagem',
  'sam.proj.home': 'O meu espaço',
  'sam.proj.p1': 'Mudança',
  'sam.proj.p2': 'Curso de fotografia',
  'sam.proj.p3': 'Casa · semana',
  'sam.proj.p5': 'Encomenda · Mural Café Aurora',
  'sam.proj.journal': 'Diário',

  // O meu espaço
  'sam.card.h1.title': 'Boas-vindas',
  'sam.card.h2.title': 'Hoje',
  'sam.card.h3.title': 'As minhas tarefas principais',
  'sam.card.h4.title': 'Próximos 7 dias',
  'sam.card.h5.title': 'Esta semana',
  'sam.card.h5.i.hw1': 'Ligar à imobiliária',
  'sam.card.h5.i.hw2': 'Saída de fotografia à hora dourada',
  'sam.card.h5.i.hw3': 'Regar as plantas',

  // Mudança de outubro
  'sam.card.k1.title': 'Caixas e embalagem',
  'sam.card.k1.i.g1': 'Comprar material',
  'sam.card.k1.i.a1': 'Arranjar 30 caixas',
  'sam.card.k1.i.a2': 'Fita-cola e marcadores',
  'sam.card.k1.i.g2': 'Embalar',
  'sam.card.k1.i.a3': 'Livros',
  'sam.card.k1.i.a4': 'Cozinha',
  'sam.card.k1.i.a6': 'Roupa de inverno',
  'sam.card.k1.i.a5': 'Etiquetar por divisão',
  'sam.card.k2.title': 'Ligar à imobiliária',
  'sam.card.k3.title': 'Orçamento',
  'sam.card.k3.head1': 'Conceito',
  'sam.card.k3.head2': 'Valor',
  'sam.card.k3.head3': 'Estado',
  'sam.card.k3.t1.c1': 'Camião',
  'sam.card.k3.t1.c3': 'Reservado',
  'sam.card.k3.t2.c1': 'Caixas',
  'sam.card.k3.t2.c3': 'Pago',
  'sam.card.k3.t3.c1': 'Limpeza',
  'sam.card.k3.t3.c3': 'Pendente',
  'sam.card.k4.title': 'Burocracias',
  'sam.card.k4.i.b1': 'Mudar a morada no banco',
  'sam.card.k4.i.b2': 'Ativar a eletricidade',
  'sam.card.k4.i.b3': 'Avisar o trabalho',
  'sam.card.k5.title': 'Para não esquecer',

  // Curso de fotografia
  'sam.card.k6.title': 'Módulo 3 · Luz natural',
  'sam.card.k6.i.c1': 'Ver a aula gravada',
  'sam.card.k6.i.c2': 'Ler os apontamentos',
  'sam.card.k6.i.c3': 'Saída à hora dourada',
  'sam.card.k7.title': 'Entregar o exercício',

  // Casa · semana
  'sam.card.k8.title': 'Compras',
  'sam.card.k8.i.d1': 'Fruta',
  'sam.card.k8.i.d2': 'Café',
  'sam.card.k8.i.d3': 'Detergente',
  'sam.card.k8.i.d4': 'Pão',
  'sam.card.k9.title': 'Regar as plantas',
  'sam.card.k12.title': 'Pagar a conta da água',


  // Encomenda · Mural Café Aurora: cartões, setas, etiquetas globais
  'sam.card.k20.title': 'Acompanhamento da encomenda',
  'sam.card.k21.title': 'Brief',
  'sam.card.k22.title': 'Materiais',
  'sam.card.k23.title': 'Referência · amanhecer',
  'sam.card.k23.file': 'esboco-amanhecer.svg',
  'sam.card.k24.title': 'Paleta · amanhecer',
  'sam.card.k25.title': 'Composição rápida',
  'sam.link.ln1': 'contexto',
  'sam.link.ln2': 'paleta',
  'sam.link.ln3': 'ideia',
  // 1.3.0: guia de boas-vindas, cartão de Ideias, apontamentos do curso e itens extra das listas
  'sam.card.h1.body': '## Bem-vindo ao OMNIA\nEsta é a sua página inicial. Tudo o que vê são **cartões**: mova-os, mude o tamanho, apague-os ou crie os seus com «Adicionar cartão».\n\n### Primeiros passos\n- [ ] Anotar os objetivos do mês no cartão *Ideias*\n- [ ] Criar a sua primeira tarefa principal na barra lateral\n- [ ] Escrever `[[ ]]` numa nota para ligar a outro cartão\n- [ ] Ativar o sino de um lembrete para ser avisado\n- [ ] Mudar o aspeto com «Personalizar quadro»\n\n### Exemplos para explorar\n- **Listas e lembretes:** [[{p1}|Mudança]] e [[{p3}|Casa · semana]]\n- **Tabela PM:** [[{p5}/{k20}|acompanhamento de uma encomenda]], com estados, fórmulas e cronologia\n- **Diário:** uma nota por dia, que pode ligar a partir de qualquer cartão\n- **Calendário:** aniversários e compromissos, com repetições\n\n> Tudo fica guardado no seu computador. Ative as cópias automáticas e, se quiser, uma palavra-passe, nas Definições.',
  'sam.card.h6.title': 'Ideias',
  'sam.card.h6.body': '## Ideias soltas\nUm canto para o que ainda não tem lugar. Quando uma ideia amadurecer, transforme-a em tarefa.\n\n- [ ] Um álbum com as melhores fotos do ano\n- [ ] Aprender a revelar rolo em casa\n- [ ] Escapadinha de fim de semana à serra\n- [ ] Cozinhar uma receita nova todos os domingos\n\n> Dica: ligue uma ideia à sua tarefa escrevendo `[[ ]]`, por exemplo [[{p2}|Curso de fotografia]]. #ideias',
  'sam.card.k15.title': 'Apontamentos · Luz natural',
  'sam.card.k15.body': '### O que aprendi\n- **Hora dourada:** a hora depois do nascer do sol e a anterior ao pôr do sol; luz quente e suave.\n- **Hora azul:** logo após o pôr do sol, com tons frios.\n- **Luz dura** (meio-dia): sombras marcadas; procure sombra aberta.\n\n### Para o exercício\n- [ ] Escolher um motivo e fotografá-lo a três horas diferentes\n- [ ] Comparar o histograma de cada fotografia\n- [ ] Escrever uma frase por foto\n\n> Relacionado: [[{p2}/{k7}|entrega do exercício]] #fotografia',
  'sam.card.k6.i.c4': 'Praticar o triângulo de exposição',
  'sam.card.k6.i.c5': 'Publicar a melhor foto no fórum do curso',
  'sam.card.k8.i.d5': 'Ovos',
  'sam.card.k8.i.d6': 'Legumes',
  'sam.tag.tg1': 'Ilustração',
  'sam.tag.tg2': 'Pintura',
  'sam.tag.tg3': 'Cliente',
  'sam.tag.tg4': 'Urgente',
  'sam.tag.tg5': 'Digital',

  // Tabela PM de exemplo
  'sam.row.px1': 'Reunião inicial e contrato',
  'sam.row.px2': 'Esboços de composição',
  'sam.row.px2.sub1': 'Miniatura A · horizonte baixo',
  'sam.row.px2.sub2': 'Miniatura B · árvore em primeiro plano',
  'sam.row.px2.sub3': 'Miniatura C · vista zenital',
  'sam.row.px3': 'Paleta de cores e testes de material',
  'sam.row.px4': 'Apresentação ao cliente',
  'sam.row.px5': 'Pintura do mural',
  'sam.row.px6': 'Verniz, limpeza e fotos finais',
  'sam.row.px7': 'Relatório de progresso ao cliente',
  'sam.row.px0': 'Visita ao espaço (primeira ideia)',
  'sam.col.time': 'Tempo',
  'sam.col.refs': 'Referências',
  'sam.col.materials': 'Materiais',
  'sam.col.matCost': 'Custo dos materiais',
  'sam.col.eurHour': '€ / hora',
  'sam.col.margin': 'Margem',

  // Tabela PM «Materiais» (cartão k22)
  'sam.mat.col.name': 'Material',
  'sam.mat.col.cost': 'Custo',
  'sam.mat.col.supplier': 'Fornecedor',
  'sam.mat.col.bought': 'Comprado',
  'sam.mat.sup.mo1': 'Belas Artes Sol',
  'sam.mat.sup.mo2': 'Ferragens Pinho',
  'sam.mat.mt1': 'Tinta acrílica de exterior',
  'sam.mat.mt2': 'Verniz protetor UV',
  'sam.mat.mt3': 'Pincéis e rolos',
  'sam.mat.mt4': 'Andaime (aluguer 3 semanas)',
  'sam.mat.mt5': 'Fita-cola e plásticos de proteção',

  // Diário e calendário
  'sam.daily.title': 'Nota diária',
  'sam.event.m1.title': 'Levar o carro à oficina',
  'sam.event.e1.title': 'Aniversário do Carlos',
  'sam.event.e1.note': 'Gosta de vinis',
  'sam.event.e2.title': 'Aniversário da Ana',
  'sam.event.e2.note': 'Comprar flores',
  'sam.event.e3.title': 'Aniversário da mãe',
  'sam.event.e3.note': 'Almoço de família às 14:00',
  'sam.event.e4.title': 'Ligar ao Leo pelo aniversário',

  // Notas longas (Markdown)
  'sam.card.k5.body': '### Chaves\nAs **chaves da arrecadação** estão na gaveta da entrada.\n\n- [ ] Avisar o porteiro *24 h antes* por causa do elevador\n- [x] Reservar o camião\n\n> Ver também [[{p3}/{k8}|a lista de compras]] #mudança',
  'sam.card.k21.body': '### Café Aurora\nMural de **6 × 3 m** na parede do fundo.\n\n- Paleta quente, tema *amanhecer na serra*\n- Entrega antes de **{due}**\n\n> Abra a tabela com o botão **Abrir tabela** ou com duplo clique na faixa superior.\n\nPróximo passo: [[{p5}/{k20}/{px5}|pintura do mural]]',
  'sam.row.px2.body': '## Objetivo\nTrês propostas de composição para o mural, com **luz de amanhecer** e a serra ao fundo.\n\n- [x] Fotos de referência do espaço\n- [x] Três miniaturas\n- [ ] Escolher a definitiva com o cliente\n\n> Ver o brief em [[{p5}/{k21}|Brief do café]]',

  // Notas do Diário
  'sam.daily.d1.body': '## Plano do dia\n- [x] Ligar ao Café Aurora para medir a parede\n- [x] Fotos do espaço com luz da tarde\n\n## Notas\nA parede norte recebe sol direto até às 14 h: convém verniz com filtro UV.\nVer [[{p5}/{k20}/{px6}|verniz e fotos]].',
  'sam.daily.d2.body': '## Plano do dia\n- [x] Três miniaturas de composição\n- [ ] Escolher a paleta definitiva\n\n## Ideias e esboços\nExperimentar a paleta do [[{p5}/{k24}|amanhecer]] com um azul mais frio na serra.',
  'sam.daily.d3.body': '## Plano do dia\n- [ ] Enviar esboços ao cliente\n- [ ] Pedir orçamento do andaime\n\n## Notas\nRever o [[{p5}/{k21}|brief]] antes da reunião de quinta-feira.',

};
