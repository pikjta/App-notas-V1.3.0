import { describe, expect, it } from 'vitest';
// @ts-ignore el proyecto no incluye los tipos de Node; Vitest sí corre en Node
import { readFileSync } from 'node:fs';
import { setLang } from '../i18n';
import { AMBIENTS, AMBIENT_IDS, boardPalette, cardPalette, TEXTURES, TEXTURE_IDS, normalizeTexture } from '../lib/appearance';

const css = readFileSync(new URL('../styles/app.css', import.meta.url), 'utf8');

describe('1.3.0: 24 texturas y 12 ambientes', () => {
  it('hay 24 texturas y las 7 de siempre conservan su sitio', () => {
    expect(TEXTURE_IDS).toHaveLength(24);
    expect(new Set(TEXTURE_IDS).size).toBe(24);
    expect(TEXTURE_IDS.slice(0, 7)).toEqual(['liso', 'puntos', 'cuadricula', 'cuaderno', 'lienzo', 'diagonal', 'acuarela']);
  });
  it('cada textura nueva tiene su regla para tablero, tarjetas, barra lateral y miniatura', () => {
    for (const id of TEXTURE_IDS.slice(7)) {
      for (const sel of [`.board.tex-${id}`, `.card.ctex-${id}`, `.side.tex-${id}`, `.tex-chip.tex-${id}`]) {
        expect(css.includes(sel), sel).toBe(true);
      }
    }
  });
  it('cada textura tiene nombre en los 6 idiomas', () => {
    for (const lang of ['es', 'en', 'fr', 'pt', 'it', 'de'] as const) {
      setLang(lang);
      for (const id of TEXTURE_IDS) expect(TEXTURES[id], `${lang}:${id}`).not.toMatch(/^set\./);
    }
    setLang('es');
  });
  it('las texturas guardadas se reconocen y una desconocida cae en «liso»', () => {
    expect(normalizeTexture('kraft')).toBe('kraft');
    expect(normalizeTexture('rayas')).toBe('cuaderno');
    expect(normalizeTexture('no-existe')).toBe('liso');
  });
  it('hay 12 ambientes y cada uno usa colores y texturas que existen', () => {
    expect(AMBIENT_IDS).toHaveLength(12);
    for (const id of AMBIENT_IDS) {
      const th = AMBIENTS[id].theme;
      expect(boardPalette(th.board), id).toBeTruthy();
      expect(cardPalette(th.card), id).toBeTruthy();
      expect(TEXTURE_IDS, id).toContain(th.texture);
      expect(TEXTURE_IDS, id).toContain(th.cardTexture);
    }
  });
});
