import { ProgressBar } from './ProgressBar'

export function SubjectMasteryRow({ nome, progresso }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-text-dark">{nome}</span>
        <span className="font-semibold text-brand-purple-dark">{progresso}%</span>
      </div>
      <ProgressBar percentual={progresso} />
    </div>
  )
}
