export function BottomNav({ items, activeId, onSelect }) {
  return (
    <nav className="sticky bottom-0 border-t border-brand-lilac bg-white px-4 pt-2 pb-3">
      <ul className="flex items-center justify-between">
        {items.map(({ id, label, Icon }) => {
          const isActive = id === activeId
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => onSelect?.(id)}
                className={`flex w-full flex-col items-center gap-1 text-xs ${
                  isActive ? 'text-brand-purple' : 'text-text-light-gray'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
