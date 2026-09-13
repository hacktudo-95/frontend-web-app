import { UsersIcon } from '../icons'

export function CollectiveScoreBanner({ titulo, descricao }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purple-secondary p-4 text-white shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
        <UsersIcon className="h-5 w-5" />
      </span>
      <div>
        <h2 className="text-base font-semibold">{titulo}</h2>
        <p className="mt-1 text-sm text-white/85">{descricao}</p>
      </div>
    </div>
  )
}
