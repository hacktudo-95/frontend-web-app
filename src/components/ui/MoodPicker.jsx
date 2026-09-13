export function MoodPicker({ estados, selecionadoId, onSelecionar }) {
  return (
    <div className="flex justify-between">
      {estados.map((estado) => {
        const isSelecionado = estado.id === selecionadoId
        return (
          <button
            key={estado.id}
            type="button"
            onClick={() => onSelecionar(estado.id)}
            aria-pressed={isSelecionado}
            className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 ${
              isSelecionado ? 'bg-brand-lilac' : ''
            }`}
          >
            <span className="text-2xl">{estado.emoji}</span>
            <span className="text-xs font-medium text-text-gray-2">{estado.label}</span>
          </button>
        )
      })}
    </div>
  )
}
