const COR_POR_TOM = {
  positivo: 'bg-success-green',
  neutro: 'bg-state-thinking',
  baixo: 'bg-error-red',
}

export function MoodHistoryStrip({ dias, estados }) {
  const tomPorEstadoId = Object.fromEntries(estados.map((e) => [e.id, e.tom]))

  return (
    <div className="flex justify-between">
      {dias.map(({ dia, estadoId, isHoje }) => (
        <div key={dia} className="flex flex-col items-center gap-2">
          <span
            className={`text-xs font-medium ${isHoje ? 'text-brand-purple-dark' : 'text-text-gray-2'}`}
          >
            {dia}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isHoje
                ? 'bg-brand-purple'
                : estadoId
                  ? COR_POR_TOM[tomPorEstadoId[estadoId]]
                  : 'border border-brand-lilac-light bg-transparent'
            }`}
          />
        </div>
      ))}
    </div>
  )
}
