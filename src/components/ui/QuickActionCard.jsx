export function QuickActionCard({ icon, title, subtitle, iconBgClassName, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-start gap-2 rounded-2xl bg-white p-4 text-left shadow-sm"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBgClassName}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-text-dark">{title}</span>
      <span className="text-xs text-text-gray-2">{subtitle}</span>
    </button>
  )
}
