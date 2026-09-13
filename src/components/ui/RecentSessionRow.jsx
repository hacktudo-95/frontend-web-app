export function RecentSessionRow({ titulo, quando, dominioResultado }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-text-dark">{titulo}</p>
        <p className="text-xs text-text-gray-2">{quando}</p>
      </div>
      <span className="shrink-0 rounded-full bg-brand-lilac px-2.5 py-1 text-xs font-medium text-brand-purple-dark">
        {dominioResultado}
      </span>
    </div>
  )
}
