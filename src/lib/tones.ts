// Tonos de la cuadrícula de colores (1.3.0): 12 matices × 5 intensidades y una fila de grises.
import { hsbToHex } from './color';

const HUES = [0, 28, 48, 75, 120, 160, 185, 210, 235, 265, 295, 330];
/** [saturación, brillo] de cada fila, de más claro a más oscuro. */
const ROWS: [number, number][] = [[28, 100], [55, 96], [85, 92], [85, 68], [70, 42]];
const GRAYS = [100, 88, 76, 64, 52, 42, 32, 24, 16, 10, 5, 0];

export const TONES: string[][] = [
  ...ROWS.map(([s, b]) => HUES.map((h) => hsbToHex([h, s, b]))),
  GRAYS.map((b) => hsbToHex([0, 0, b])),
];
