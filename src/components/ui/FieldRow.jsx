export function FieldRow({ label, value, action }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-text-gray-2">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-text-dark">{value}</p>
      </div>
      {action}
    </div>
  )
}
