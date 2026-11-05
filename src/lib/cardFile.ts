// Exportar e importar una tarjeta como archivo .json (1.3.0).
// El archivo lleva la tarjeta y sus imágenes. Al importar se crea una tarjeta nueva en el tablero abierto, igual que al pegar (acción `pasteCard`).
// La marca del archivo es propia de las tarjetas; no tiene relación con las copias de seguridad (`app: "cuaderno"`).
import { assetsOfCard, canCopyCard } from './cardClip';
import type { CardClip } from './cardClip';
import type { Asset, Card, CardType } from './model';

export const CARD_FILE_APP = 'omnia-card';
export const CARD_FILE_VERSION = 1;

const TYPES: CardType[] = ['note', 'check', 'reminder', 'table', 'image', 'sketch', 'palette', 'pm', 'widget'];

/** Texto del archivo de una tarjeta. Devuelve null si esa tarjeta no se puede exportar (widgets y notas del Diario). */
export function cardFileText(card: Card, assets: Record<string, Asset>, now: number = Date.now()): string | null {
  if (!canCopyCard(card)) return null;
  return JSON.stringify({ app: CARD_FILE_APP, v: CARD_FILE_VERSION, exportedAt: now, card, assets: assetsOfCard(card, assets) });
}

/** Nombre sugerido para el archivo: el título de la tarjeta, sin caracteres que den problemas en un nombre de archivo. */
export function cardFileName(card: Card, fallback: string): string {
  const base = (card.title || '').normalize('NFC').replace(/[\\/:*?"<>|\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
  return (base || fallback) + '.json';
}

/** Lee el archivo de una tarjeta. Devuelve null si no es uno válido (otro JSON, una copia de seguridad, texto roto…). */
export function parseCardFile(text: string): CardClip | null {
  let o: unknown;
  try { o = JSON.parse(text); } catch { return null; }
  if (!o || typeof o !== 'object') return null;
  const f = o as { app?: unknown; v?: unknown; card?: unknown; assets?: unknown };
  if (f.app !== CARD_FILE_APP || typeof f.v !== 'number' || f.v > CARD_FILE_VERSION) return null;
  const card = f.card as Card | undefined;
  if (!card || typeof card !== 'object' || !TYPES.includes(card.type) || !canCopyCard(card)) return null;
  const list = Array.isArray(f.assets) ? f.assets : [];
  // Solo imágenes bien formadas; el identificador se sustituye dentro del texto de la tarjeta al pegar, así que no puede ser demasiado corto.
  const assets = list.filter((a): a is Asset => !!a && typeof a === 'object'
    && typeof (a as Asset).id === 'string' && /^[\w-]{3,}$/.test((a as Asset).id)
    && typeof (a as Asset).mime === 'string' && typeof (a as Asset).data === 'string' && (a as Asset).data.startsWith('data:image/'));
  return { card, assets };
}
