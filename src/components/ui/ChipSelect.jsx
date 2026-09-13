export function ChipSelect({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              isActive ? 'bg-brand-purple-dark text-white' : 'bg-brand-lilac text-brand-purple-dark'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
