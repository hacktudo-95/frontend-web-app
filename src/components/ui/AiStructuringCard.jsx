import { SparklesIcon } from '../icons'

export function AiStructuringCard({ titulo, topicos, onAprovar, onAjustar }) {
  return (
    <div className="rounded-2xl border border-brand-purple/30 bg-brand-lilac/40 p-4">
      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-purple-dark">
        <SparklesIcon className="h-4 w-4" />
        Dora está estruturando o conteúdo…
      </div>

      <p className="text-sm font-semibold text-text-dark">Material: {titulo}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-gray">
        {topicos.map((topico, index) => (
          <li key={topico}>
            Tópico {index + 1}: {topico}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={onAprovar}
          className="flex-1 rounded-xl bg-brand-purple-dark py-2.5 text-sm font-semibold text-white"
        >
          Aprovar e Liberar
        </button>
        <button
          type="button"
          onClick={onAjustar}
          className="flex-1 rounded-xl border border-brand-purple/40 bg-white py-2.5 text-sm font-semibold text-brand-purple-dark"
        >
          Ajustar Tópicos
        </button>
      </div>
    </div>
  )
}
