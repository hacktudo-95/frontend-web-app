export function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="flex gap-1 rounded-xl bg-brand-lilac/60 p-1">
      {options.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-white text-brand-purple-dark shadow-sm'
                : 'text-text-gray-2'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
