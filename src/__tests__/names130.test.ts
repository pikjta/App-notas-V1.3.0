import { describe, expect, it } from 'vitest';
import { setLang } from '../i18n';
import { buildGraph } from '../lib/graph';
import { fromDocs, starterDocs } from '../lib/model';
import { emptyState, reduce, search, searchIndex } from '../lib/store';
import type { State } from '../lib/store';

const loaded = (): State => reduce(emptyState, { t: 'load', ...fromDocs(starterDocs('es')) }).state;

describe('1.3.0: projectName() también en el grafo y la búsqueda', () => {
  it('el nodo y el resultado de Inicio salen en el idioma actual y los datos no cambian', () => {
    const s = loaded();
    expect(s.projects.find((p) => p.home)?.name).toBe('Inicio');
    setLang('fr');
    const node = buildGraph(s).nodes.find((n) => n.kind === 'project' && n.project === 'home');
    expect(node?.label).toBe('Accueil');
    const hit = search(searchIndex(s), 'accueil').find((h) => h.project === 'home' && !h.card);
    expect(hit?.text).toBe('Accueil');
    // la nota de bienvenida muestra la ruta con el nombre en el idioma actual
    expect(searchIndex(s).some((h) => h.where.startsWith('Accueil'))).toBe(true);
    expect(s.projects.find((p) => p.home)?.name).toBe('Inicio');
    setLang('es');
  });
  it('un nombre propio se respeta', () => {
    const s = loaded();
    const t = reduce(s, { t: 'patchProject', id: 'home', patch: { name: 'Mi estudio' } }).state;
    setLang('fr');
    expect(buildGraph(t).nodes.find((n) => n.project === 'home' && n.kind === 'project')?.label).toBe('Mi estudio');
    setLang('es');
  });
});
