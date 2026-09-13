export function SymbolicAttachmentButton({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lilac text-brand-purple-dark">
        {icon}
      </span>
      <span className="text-xs font-medium text-text-dark">{label}</span>
    </button>
  )
}
