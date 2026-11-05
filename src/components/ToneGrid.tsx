// Cuadrícula de tonos (1.3.0): 12 matices × 5 intensidades y una fila de grises. Sirve para elegir un color libre
// sin abrir el selector completo. `ColorRow` la junta con los colores de siempre en una sola línea.
import { useState } from 'react';
import { useApp } from '../App';
import { t } from '../i18n';
import { TONES } from '../lib/tones';
import { normalizeColorIcon } from '../lib/icons';
import { Icon } from './Icon';

export function ToneGrid({ value, onPick }: { value: string | null; onPick: (hex: string) => void }) {
  const cur = value?.toUpperCase() ?? null;
  return (
    <div className="tone-grid" role="group" aria-label={t('ui.tone.grid')}>
      {TONES.flat().map((hex) => (
        <button key={hex} type="button" className={'tone' + (cur === hex ? ' on' : '')} style={{ background: hex }} title={hex} aria-label={hex} aria-pressed={cur === hex} onClick={() => onPick(hex)} />
      ))}
    </div>
  );
}

/**
 * Colores de siempre en una línea y, al final, el botón de la paleta (con el icono de color de la app) que abre la
 * cuadrícula de tonos debajo. `current` es el id del color o un «#RRGGBB» libre.
 */
export function ColorRow<K extends string>({ ids, current, bg, name, onPick }: { ids: K[]; current: string; bg: (k: K) => string; name: (k: K) => string; onPick: (v: K | string) => void }) {
  const { state } = useApp();
  const free = current.startsWith('#');
  const [open, setOpen] = useState(free);
  return (
    <>
      <div className="swatch-row one-line">
        {ids.map((k) => <button key={k} className={'swatch' + (current === k ? ' on' : '')} title={name(k)} aria-label={name(k)} aria-pressed={current === k} style={{ background: bg(k) }} onClick={() => onPick(k)} />)}
        <button type="button" className={'swatch tone-open' + (free ? ' on' : '')} title={t('ui.tone.open')} aria-label={t('ui.tone.open')} aria-expanded={open} style={free ? { background: current } : undefined} onClick={() => setOpen(!open)}>
          <Icon name={normalizeColorIcon(state.settings.colorIcon)} size={13} />
        </button>
      </div>
      {open && <ToneGrid value={free ? current : null} onPick={onPick} />}
    </>
  );
}
