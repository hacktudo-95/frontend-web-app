export function RadioOptionCard({ titulo, descricao, selecionado, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selecionado}
      className={`flex w-full items-center justify-between rounded-2xl border bg-white p-3.5 text-left shadow-sm ${
        selecionado ? 'border-brand-purple' : 'border-transparent'
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-text-dark">{titulo}</p>
        <p className="mt-0.5 text-xs text-text-gray-2">{descricao}</p>
      </div>
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
          selecionado ? 'border-brand-purple' : 'border-brand-lilac-light'
        }`}
      >
        {selecionado && <span className="h-2 w-2 rounded-full bg-brand-purple" />}
      </span>
    </button>
  )
}
