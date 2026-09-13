const STATUS_CONFIG = {
  ativa: {
    label: 'Ativa',
    pillClassName: 'bg-success-green/15 text-success-green-text',
  },
  agendada: {
    label: 'Agendada',
    pillClassName: 'bg-brand-lilac text-brand-purple-dark',
  },
}

export function TeacherSessionCard({ materia, turma, horario, topico, status }) {
  const config = STATUS_CONFIG[status]

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-purple-dark">
          {materia} • {turma} • {horario}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${config.pillClassName}`}
        >
          {config.label}
        </span>
      </div>
      <h3 className="text-base font-semibold text-text-dark">{topico}</h3>
    </div>
  )
}
