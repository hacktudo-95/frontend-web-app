export function Header({ title, subtitle, actionSlot, avatarSlot }) {
  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-2">
      <div>
        <h1 className="text-xl font-semibold text-text-dark">{title}</h1>
        <p className="text-sm text-text-gray-2">{subtitle}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {actionSlot}
        {avatarSlot}
      </div>
    </header>
  )
}
