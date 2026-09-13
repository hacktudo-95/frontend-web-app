export function Header({ title, subtitle, avatarSlot }) {
  return (
    <header className="flex items-center justify-between px-6 pt-4 pb-2">
      <div>
        <h1 className="text-xl font-semibold text-text-dark">{title}</h1>
        <p className="text-sm text-text-gray-2">{subtitle}</p>
      </div>
      {avatarSlot}
    </header>
  )
}
