export function IconOptionCard({ icon, titulo, descricao, selecionado, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selecionado}
      className={`flex flex-1 flex-col items-start gap-1 rounded-2xl border bg-white p-3.5 text-left shadow-sm ${
        selecionado ? 'border-brand-purple' : 'border-transparent'
      }`}
    >
      <span className="text-brand-purple">{icon}</span>
      <span className="text-sm font-semibold text-text-dark">{titulo}</span>
      <span className="text-xs text-text-gray-2">{descricao}</span>
    </button>
  )
}
