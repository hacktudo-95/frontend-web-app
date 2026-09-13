import { ACHIEVEMENT_ICONS_BY_TYPE } from './achievementIcons'

export function AchievementBadge({ titulo, icon }) {
  const { Icon, className } = ACHIEVEMENT_ICONS_BY_TYPE[icon] ?? ACHIEVEMENT_ICONS_BY_TYPE.award

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-brand-lilac bg-white px-3 py-1.5 text-xs font-medium text-text-medium">
      <Icon className={`h-3.5 w-3.5 ${className}`} />
      {titulo}
    </div>
  )
}
