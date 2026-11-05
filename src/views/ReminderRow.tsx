import { useApp } from '../App';
import { t } from '../i18n';
import { Icon } from '../components/Icon';
import type { ReminderItem } from '../lib/agenda';
import { whenLabel } from '../lib/agenda';
import { projectName } from '../lib/model';

export function ReminderRow({ it, late }: { it: ReminderItem; late?: boolean }) {
  const { dispatch, goTo } = useApp();
  const c = it.card;
  return (
    <div className="rem-row">
      <span className="dot" style={{ background: it.project.color }} />
      <div className="rem-main">
        <span className="rem-title">{c.title || c.note || t('cal.row.untitled')}</span>
        <span className="small muted">{projectName(it.project)}{c.title && c.note ? ' · ' + c.note : ''}</span>
      </div>
      <span className={'rem-at' + (late ? ' late' : '')}>{whenLabel(it.at)}</span>
      <button className="bell" title={t('cal.row.toggleBell')} aria-label={t('cal.row.toggleBell')} aria-pressed={c.bell}
        onClick={() => dispatch({ t: 'patchCard', id: c.id, patch: { bell: !c.bell } })}><Icon name="bell" size={16} className={c.bell ? '' : 'bell-off'} /></button>
      <button className="tool small-btn" onClick={() => goTo(it.project.id, c.id)}>{t('cal.open')}</button>
    </div>
  );
}
