export function MiniStatTile({ icon, label, valor, hint }) {
  return (
    <div className="flex-1 rounded-xl bg-white p-3 shadow-sm">
      <div className="mb-1 flex items-center gap-1 text-xs font-medium text-text-gray-2">
        {icon}
        {label}
      </div>
      <p className="text-lg font-bold text-text-dark">{valor}</p>
      <p className="text-[11px] text-text-gray-2">{hint}</p>
    </div>
  )
}
