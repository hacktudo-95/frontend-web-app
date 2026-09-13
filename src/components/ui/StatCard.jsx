export function StatCard({ icon, label, value, hint, iconClassName = '' }) {
  return (
    <div className="flex-1 rounded-2xl bg-white p-4 shadow-sm">
      <div
        className={`mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${iconClassName}`}
      >
        {icon}
        {label}
      </div>
      <p className="text-2xl font-bold text-text-dark">{value}</p>
      <p className="text-xs text-text-gray-2">{hint}</p>
    </div>
  )
}
