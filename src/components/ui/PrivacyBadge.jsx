import { LockIcon } from '../icons'

export function PrivacyBadge({ label = 'Privado' }) {
  return (
    <span className="flex items-center gap-1 text-xs font-medium text-text-light-gray">
      <LockIcon className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}
