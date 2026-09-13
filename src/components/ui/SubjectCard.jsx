import { ProgressBar } from './ProgressBar'
import { TopicRow } from './TopicRow'

export function SubjectCard({ materia, expandido, onToggle, onAbrirMaterial }) {
  const temTopicos = materia.topicos.length > 0

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <button
        type="button"
        onClick={temTopicos ? onToggle : undefined}
        className="flex w-full flex-col gap-2 text-left"
        aria-expanded={temTopicos ? expandido : undefined}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-brand-purple-dark">
            {materia.nome}
          </h2>
          <span className="text-base font-semibold text-brand-purple-dark">
            {materia.progresso}%
          </span>
        </div>
        {materia.totalTopicos && (
          <p className="-mt-1 text-xs text-text-gray-2">
            {materia.totalTopicos} tópicos divididos
          </p>
        )}
        <ProgressBar percentual={materia.progresso} />
      </button>

      {expandido && temTopicos && (
        <div className="mt-2 divide-y divide-app-bg border-t border-app-bg">
          {materia.topicos.map((topico) => (
            <TopicRow
              key={topico.nome}
              nome={topico.nome}
              status={topico.status}
              materiais={topico.materiais}
              onAbrirMaterial={onAbrirMaterial}
            />
          ))}
        </div>
      )}
    </div>
  )
}
