import { describe, expect, it } from 'vitest';
import { memoryBackend } from '../lib/backend';
import { cardFileName, cardFileText, parseCardFile } from '../lib/cardFile';
import { fromDocs, starterDocs } from '../lib/model';
import type { Card, ImageCard } from '../lib/model';
import { emptyState, newCard, reduce } from '../lib/store';
import type { Action, State } from '../lib/store';

const loaded = (): State => reduce(emptyState, { t: 'load', ...fromDocs(starterDocs()) }).state;
const run = (s: State, ...as: Action[]) => as.reduce((acc, a) => reduce(acc, a).state, s);

describe('1.3.0: exportar e importar tarjetas', () => {
  it('exporta una nota y la importa como tarjeta nueva en otro tablero', () => {
    const n = { ...newCard('note', 'home'), title: 'Receta', body: 'hola' } as Card;
    let s = run(loaded(), { t: 'addCard', card: n }, { t: 'addProject', id: 'p1', name: 'Otro', color: '#0E7C7B' });
    const text = cardFileText(s.cards.find((c) => c.id === n.id)!, s.assets)!;
    const clip = parseCardFile(text)!;
    expect(clip).not.toBeNull();
    s = run(s, { t: 'pasteCard', id: 'importada', snap: clip.card, assets: clip.assets, project: 'p1' });
    const c = s.cards.find((x) => x.id === 'importada')!;
    expect(c.project).toBe('p1');
    expect(c.title).toBe('Receta');
    expect(c.type === 'note' && c.body).toBe('hola');
    expect(s.cards.find((x) => x.id === n.id)?.project).toBe('home');
  });

  it('lleva la imagen dentro del archivo y la duplica con un identificador nuevo', () => {
    const img = { ...newCard('image', 'home'), asset: 'as1', name: 'a.png' } as ImageCard;
    let s = run(loaded(), { t: 'addImage', card: img, asset: { id: 'as1', card: img.id, mime: 'image/png', data: 'data:image/png;base64,AAAA' } });
    const clip = parseCardFile(cardFileText(s.cards.find((c) => c.id === img.id)!, s.assets)!)!;
    expect(clip.assets).toHaveLength(1);
    s = run(s, { t: 'pasteCard', id: 'copia', snap: clip.card, assets: clip.assets, project: 'home' });
    const pasted = s.cards.find((c) => c.id === 'copia') as ImageCard;
    expect(pasted.asset).not.toBe('as1');
    expect(s.assets[pasted.asset!].data).toBe('data:image/png;base64,AAAA');
  });

  it('no exporta widgets ni notas del Diario', () => {
    const base = newCard('note', 'home') as Card;
    expect(cardFileText({ ...base, day: '2026-11-03' } as Card, {})).toBeNull();
    expect(cardFileText({ ...base, type: 'widget', widget: 'today' } as unknown as Card, {})).toBeNull();
  });

  it('rechaza archivos que no son una tarjeta', () => {
    expect(parseCardFile('no es json')).toBeNull();
    expect(parseCardFile('[]')).toBeNull();
    expect(parseCardFile(JSON.stringify({ app: 'cuaderno', docs: [] }))).toBeNull();
    expect(parseCardFile(JSON.stringify({ app: 'omnia-card', v: 99, card: newCard('note', 'home') }))).toBeNull();
    expect(parseCardFile(JSON.stringify({ app: 'omnia-card', v: 1, card: { type: 'otra' } }))).toBeNull();
    expect(parseCardFile(JSON.stringify({ app: 'omnia-card', v: 1, card: { ...newCard('note', 'home'), type: 'widget' } }))).toBeNull();
  });

  it('descarta imágenes mal formadas', () => {
    const f = { app: 'omnia-card', v: 1, card: newCard('note', 'home'), assets: [
      { id: 'ok_1234', card: 'x', mime: 'image/png', data: 'data:image/png;base64,AAAA' },
      { id: '', card: 'x', mime: 'image/png', data: 'data:image/png;base64,AAAA' },
      { id: 'mala_1', card: 'x', mime: 'text/html', data: '<script>' },
    ] };
    expect(parseCardFile(JSON.stringify(f))!.assets.map((a) => a.id)).toEqual(['ok_1234']);
  });

  it('el nombre del archivo sale del título', () => {
    expect(cardFileName({ ...newCard('note', 'home'), title: 'Plan: a/b?' } as Card, 'Sin título')).toBe('Plan a b.json');
    expect(cardFileName({ ...newCard('note', 'home'), title: '' } as Card, 'Sin título')).toBe('Sin título.json');
  });

  it('el almacén en memoria guarda y devuelve el archivo', async () => {
    const b = memoryBackend();
    expect(await b.openCard()).toBeNull();
    expect(await b.saveCard('x.json', '{"a":1}')).toBe(true);
    expect(await b.openCard()).toBe('{"a":1}');
  });
});
