const TOM_CONFIG = {
  amber: 'bg-state-thinking/10 text-state-thinking',
  verde: 'bg-success-green/10 text-success-green-text',
}

export function Banner({ tom = 'amber', icon, titulo, children }) {
  return (
    <div className={`flex items-start gap-2 rounded-2xl p-3.5 text-sm ${TOM_CONFIG[tom]}`}>
      {icon}
      <div>
        {titulo && <p className="font-semibold">{titulo}</p>}
        <p className={titulo ? 'mt-0.5' : ''}>{children}</p>
      </div>
    </div>
  )
}
