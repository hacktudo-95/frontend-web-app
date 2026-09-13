export function InterdisciplinaryProposalCard({
  materias,
  recomendado,
  titulo,
  descricao,
  onExplorar,
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-purple-dark">
          {materias}
        </span>
        {recomendado && (
          <span className="shrink-0 text-xs font-semibold text-success-green-text">
            Recomendado
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-text-dark">{titulo}</h3>
      <p className="mt-1 text-sm text-text-gray">{descricao}</p>

      <button
        type="button"
        onClick={onExplorar}
        className="mt-3 w-full rounded-xl bg-brand-lilac py-2.5 text-sm font-semibold text-brand-purple-dark"
      >
        Explorar Projeto Interdisciplinar
      </button>
    </div>
  )
}
