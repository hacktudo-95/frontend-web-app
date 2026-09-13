import { AwardIcon, PlayIcon } from '../icons'

const STATUS_CONFIG = {
  disponivel: {
    label: 'Disponível',
    pillClassName: 'bg-success-green/15 text-success-green-text',
  },
  concluida: {
    label: 'Concluída',
    pillClassName: 'bg-brand-lilac text-brand-purple-dark',
  },
  expirada: {
    label: 'Expirada',
    pillClassName: 'bg-error-red/10 text-error-red',
  },
}

export function SessionCard({
  materia,
  duracaoMin,
  topico,
  status,
  dominioResultado,
  prazoLabel,
  onPraticar,
}) {
  const config = STATUS_CONFIG[status]

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-purple-dark">
          {materia} • {duracaoMin} min
        </span>
        <div className="flex shrink-0 items-center gap-1.5">
          {prazoLabel && (
            <span className="rounded-full bg-state-thinking/15 px-2.5 py-1 text-xs font-medium text-state-thinking">
              {prazoLabel}
            </span>
          )}
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${config.pillClassName}`}
          >
            {config.label}
          </span>
        </div>
      </div>

      <h3 className="text-base font-semibold text-text-dark">{topico}</h3>

      {status === 'disponivel' && (
        <button
          type="button"
          onClick={onPraticar}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
        >
          <PlayIcon className="h-4 w-4" />
          Praticar agora
        </button>
      )}

      {status === 'concluida' && dominioResultado && (
        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-success-green-text">
          <AwardIcon className="h-4 w-4" />
          Selo de Domínio: {dominioResultado}
        </div>
      )}
    </div>
  )
}
