import { CompassIcon, PlayIcon } from '../icons'

const TOM_CONFIG = {
  roxo: 'bg-brand-lilac text-brand-purple',
  verde: 'bg-state-listening/15 text-state-listening',
  laranja: 'bg-state-thinking/15 text-state-thinking',
  rosa: 'bg-live-pink/15 text-live-pink',
}

export function ReviewSuggestionCard({ motivo, tom, topico, materia, onPraticar }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${TOM_CONFIG[tom]}`}
        >
          <CompassIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-medium text-text-gray-2">{motivo}</span>
      </div>

      <h3 className="text-base font-semibold text-text-dark">{topico}</h3>

      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-full bg-brand-lilac px-2.5 py-1 text-xs font-medium text-brand-purple-dark">
          {materia}
        </span>
        <button
          type="button"
          onClick={onPraticar}
          className="flex items-center gap-1.5 rounded-full bg-brand-purple-dark px-4 py-2 text-sm font-semibold text-white"
        >
          <PlayIcon className="h-3.5 w-3.5" />
          Praticar
        </button>
      </div>
    </div>
  )
}
