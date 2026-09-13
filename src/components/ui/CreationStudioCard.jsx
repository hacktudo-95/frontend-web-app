import { EyeIcon, PlusIcon } from '../icons'

export function CreationStudioCard({
  icon,
  titulo,
  coautoria,
  exemploTitulo,
  exemploDescricao,
  onAbrirExemplo,
  onCriarNovo,
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-purple-dark">
          {icon}
          {titulo}
        </div>
        <span className="rounded-full bg-brand-lilac px-2.5 py-1 text-xs font-medium text-brand-purple-dark">
          {coautoria}
        </span>
      </div>

      <h3 className="text-base font-semibold text-text-dark">{exemploTitulo}</h3>
      <p className="mt-1 text-sm text-text-gray">{exemploDescricao}</p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={onAbrirExemplo}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-brand-lilac bg-white py-2.5 text-sm font-semibold text-text-dark"
        >
          <EyeIcon className="h-4 w-4" />
          Abrir Exemplo
        </button>
        <button
          type="button"
          onClick={onCriarNovo}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-purple-dark py-2.5 text-sm font-semibold text-white"
        >
          <PlusIcon className="h-4 w-4" />
          Criar Novo
        </button>
      </div>
    </div>
  )
}
