import { SparklesIcon } from '../icons'

export function HintNote({ children }) {
  return (
    <div className="flex items-start justify-center gap-1.5 rounded-xl border border-dashed border-brand-lilac-light px-3 py-2.5 text-center text-xs text-text-gray-2">
      <SparklesIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-state-thinking" />
      <p>{children}</p>
    </div>
  )
}
