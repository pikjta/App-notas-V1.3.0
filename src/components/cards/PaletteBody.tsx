import { useApp } from '../../App';
import { formatColor, inkOn } from '../../lib/graphics';
import type { PaletteCard } from '../../lib/model';
import { useState } from 'react';
import { ColorPicker } from '../ColorPicker';
import { t } from '../../i18n';

export function PaletteBody({ card }: { card: PaletteCard }) {
  const { state, dispatch, copy, goTo } = useApp();
  const [picker, setPicker] = useState<number | 'add' | null>(null);
  const set = (patch: Partial<PaletteCard>) => dispatch({ t: 'patchCard', id: card.id, patch });
  const source = card.source ? state.cards.find((c) => c.id === card.source && !c.trashed) : null;
  return (
    <div className="palette">
      <div className="row">
        <div className="seg">{(['hex', 'rgb', 'hsl'] as const).map((f) => <button key={f} className={card.fmt === f ? 'on' : ''} onClick={() => set({ fmt: f })}>{f.toUpperCase()}</button>)}</div>
        <span className="grow" />
        <button className="tool small-btn" disabled={!card.colors.length} onClick={() => copy(card.colors.map((c) => formatColor(c, card.fmt)).join('\n'), t('card.palette.copiedAll'))}>{t('card.palette.copyAll')}</button>
      </div>
      <div className="swatch-grid">
        {card.colors.map((c, i) => (
          <div key={i} className="sw">
            <button className="sw-main" style={{ background: c, color: inkOn(c) }} title={t('card.palette.clickCopy')} onClick={() => copy(formatColor(c, card.fmt), t('card.palette.copied', { color: formatColor(c, card.fmt) }))}>
              <span>{formatColor(c, card.fmt)}</span>
            </button>
            <button className="sw-act" title={t('card.palette.change')} aria-label={t('card.palette.change')} onClick={() => setPicker(i)}>✎</button>
            <button className="sw-act right" aria-label={t('card.palette.remove')} title={t('card.palette.remove')} onClick={() => set({ colors: card.colors.filter((_, k) => k !== i) })}>×</button>
          </div>
        ))}
        <button className="sw-add" title={t('card.palette.add')} aria-label={t('card.palette.add')} onClick={() => setPicker('add')}>+</button>
      </div>
      {picker !== null && (
        <ColorPicker title={t('card.palette.change')} current={picker === 'add' ? null : card.colors[picker]} fallback="#2F6690" onClose={() => setPicker(null)}
          onPick={(hex) => {
            if (hex) set({ colors: picker === 'add' ? [...card.colors, hex] : card.colors.map((x, k) => (k === picker ? hex : x)) });
            setPicker(null);
          }} />
      )}
      {source && <button className="link small" onClick={() => goTo(source.project, source.id)}>{t('card.palette.from', { name: source.title || t('card.image.fallback') })}</button>}
    </div>
  );
}
