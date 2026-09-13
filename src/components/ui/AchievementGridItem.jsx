import { LockIcon } from '../icons'
import { ACHIEVEMENT_ICONS_BY_TYPE } from './achievementIcons'

export function AchievementGridItem({ titulo, icon, desbloqueada }) {
  if (!desbloqueada) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-dashed border-brand-lilac-light px-3 py-2.5 text-sm font-medium text-text-light-gray">
        <LockIcon className="h-4 w-4 shrink-0" />
        {titulo}
      </div>
    )
  }

  const { Icon, className } = ACHIEVEMENT_ICONS_BY_TYPE[icon] ?? ACHIEVEMENT_ICONS_BY_TYPE.award

  return (
    <div className="flex items-center gap-2 rounded-xl bg-brand-lilac/60 px-3 py-2.5 text-sm font-medium text-text-dark">
      <Icon className={`h-4 w-4 shrink-0 ${className}`} />
      {titulo}
    </div>
  )
}
