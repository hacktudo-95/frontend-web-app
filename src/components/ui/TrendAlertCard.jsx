import { AlertTriangleIcon } from '../icons'

export function TrendAlertCard({ descricao }) {
  return (
    <div className="flex gap-2 rounded-2xl bg-white p-3.5 shadow-sm">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-state-thinking/15 text-state-thinking">
        <AlertTriangleIcon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-semibold text-text-dark">Alerta de Tendência</p>
        <p className="mt-0.5 text-sm text-text-gray">{descricao}</p>
      </div>
    </div>
  )
}
