import { CheckCircleIcon, HelpCircleIcon, LockIcon } from '../icons'

const STATUS_CONFIG = {
  concluido: {
    Icon: CheckCircleIcon,
    iconClassName: 'text-success-green-text',
    label: 'Concluído',
    pillClassName: 'bg-success-green/15 text-success-green-text',
  },
  liberado: {
    Icon: HelpCircleIcon,
    iconClassName: 'text-brand-purple',
    label: 'Liberado',
    pillClassName: 'bg-brand-lilac text-brand-purple-dark',
  },
  bloqueado: {
    Icon: LockIcon,
    iconClassName: 'text-text-light-gray',
    label: 'Bloqueado',
    pillClassName: 'bg-app-bg text-text-light-gray',
  },
}

export function TopicRow({ nome, status }) {
  const config = STATUS_CONFIG[status]
  const isBloqueado = status === 'bloqueado'

  return (
    <div className="flex items-center justify-between py-2.5">
      <div
        className={`flex items-center gap-2 text-sm font-medium ${
          isBloqueado ? 'text-text-light-gray' : 'text-text-dark'
        }`}
      >
        <config.Icon className={`h-4 w-4 shrink-0 ${config.iconClassName}`} />
        {nome}
      </div>
      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${config.pillClassName}`}
      >
        {config.label}
      </span>
    </div>
  )
}
