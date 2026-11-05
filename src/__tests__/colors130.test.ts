import { describe, expect, it } from 'vitest';
import { BOARD_COLOR_IDS, CARD_THEME_IDS, DEFAULT_THEME, SIDE_COLOR_IDS, boardPalette, cardPalette, cardVars, isHexColor, normalizeBoardColor, normalizeCardTheme, normalizeSide, normalizeTheme, sidePalette, sideVars } from '../lib/appearance';
import { TONES } from '../lib/tones';
import { ICON_KEYS } from '../lib/icons';

const ratio = (a: string, b: string) => {
  const lum = (h: string) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }).reduce((s, c, i) => s + c * [0.2126, 0.7152, 0.0722][i], 0); };
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

describe('1.3.0: más colores y color libre', () => {
  it('hay 12 colores de tablero, de tarjeta y de barra, con los de siempre primero', () => {
    expect(BOARD_COLOR_IDS).toHaveLength(12);
    expect(CARD_THEME_IDS).toHaveLength(12);
    expect(SIDE_COLOR_IDS).toHaveLength(12);
    expect(BOARD_COLOR_IDS.slice(0, 7)).toEqual(['papel', 'hueso', 'arena', 'niebla', 'lavanda', 'noche', 'abismo']);
    expect(CARD_THEME_IDS.slice(0, 7)).toEqual(['papel', 'blanco', 'crema', 'menta', 'cielo', 'grafito', 'marino']);
    expect(SIDE_COLOR_IDS.slice(0, 7)).toEqual(['papel', 'salvia', 'arcilla', 'ocre', 'tinta', 'cobalto', 'bosque']);
  });
  it('un color libre se guarda en mayúsculas y el resto cae en el de siempre', () => {
    expect(isHexColor('#a1b2c3')).toBe(true);
    expect(isHexColor('a1b2c3')).toBe(false);
    expect(normalizeBoardColor('#a1b2c3')).toBe('#A1B2C3');
    expect(normalizeBoardColor('salviaclaro')).toBe('salviaclaro');
    expect(normalizeBoardColor('salvia')).toBe('niebla');
    expect(normalizeBoardColor('pizarra')).toBe('abismo');
    expect(normalizeCardTheme('#102030')).toBe('#102030');
    expect(normalizeCardTheme('no-existe')).toBe('papel');
    expect(normalizeSide({ color: '#fedcba' }).color).toBe('#FEDCBA');
    expect(normalizeSide({ color: 'no-existe' as never }).color).toBe('tinta');
    expect(normalizeTheme({ board: '#112233', card: '#FFEEDD' })).toMatchObject({ board: '#112233', card: '#FFEEDD' });
  });
  it('el texto se lee (4,5 : 1) sobre cualquier tono de la cuadrícula', () => {
    for (const hex of TONES.flat()) {
      expect(ratio(boardPalette(hex as never).bg, boardPalette(hex as never).ink), hex).toBeGreaterThanOrEqual(4.5);
      expect(ratio(cardPalette(hex as never).bg, cardPalette(hex as never).ink), hex).toBeGreaterThanOrEqual(4.5);
      expect(cardVars(null, { ...DEFAULT_THEME, card: hex as never })['--card-bg']).toBe(hex);
      expect(sideVars({ color: hex as never, texture: 'liso' })['--side-bg']).toBe(hex);
    }
    expect(sidePalette('#112233' as never).bg).toBe('#112233');
  });
  it('la cuadrícula tiene 12 columnas × 6 filas', () => {
    expect(TONES).toHaveLength(6);
    expect(TONES.every((r) => r.length === 12)).toBe(true);
  });
  it('hay más de 21 iconos, así que el selector tiene varias páginas', () => {
    expect(ICON_KEYS.length).toBeGreaterThan(21);
  });
});
