const STATUS_CONFIG = {
  bom_ritmo: { label: 'Bom Ritmo', className: 'bg-success-green/15 text-success-green-text' },
  atencao: { label: 'Atenção', className: 'bg-state-thinking/15 text-state-thinking' },
}

export function TurmaPerformanceCard({ turma, status, participacao, dominio }) {
  const config = STATUS_CONFIG[status]

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-dark">{turma}</h3>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${config.className}`}>
          {config.label}
        </span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-text-gray-2">Participação</p>
          <p className="text-base font-semibold text-text-dark">{participacao}%</p>
        </div>
        <div>
          <p className="text-xs text-text-gray-2">Domínio de Conteúdo</p>
          <p className="text-base font-semibold text-text-dark">{dominio}%</p>
        </div>
      </div>
    </div>
  )
}
