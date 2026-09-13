import { ProgressBar } from './ProgressBar'

const TOM_FILL = {
  verde: 'bg-success-green',
  laranja: 'bg-state-thinking',
  roxo: 'bg-brand-purple',
}

export function ConceptMasteryCard({ conceito, percentual, tom, emAlerta }) {
  return (
    <div
      className={`rounded-2xl bg-white p-3.5 shadow-sm ${
        emAlerta ? 'border border-state-thinking' : ''
      }`}
    >
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-text-dark">{conceito}</span>
        <span className="font-semibold text-text-dark">{percentual}%</span>
      </div>
      <ProgressBar percentual={percentual} fillClassName={TOM_FILL[tom]} />
    </div>
  )
}
