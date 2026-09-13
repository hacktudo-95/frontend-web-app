import { MicIcon, PlayIcon } from '../icons'

export function MissionCard({ missao, onPraticar }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-purple-dark">
          <MicIcon className="h-4 w-4" />
          MISSÃO DE CASA PENDENTE
        </div>
        <span className="rounded-full bg-state-thinking/15 px-2.5 py-1 text-xs font-medium text-state-thinking">
          {missao.prazoLabel}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-text-dark">{missao.topico}</h2>
      <p className="mt-1 text-sm text-text-gray">{missao.descricao}</p>

      <button
        type="button"
        onClick={onPraticar}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
      >
        <PlayIcon className="h-4 w-4" />
        Conversar com a Dora ({missao.duracaoMin} min)
      </button>
    </div>
  )
}
