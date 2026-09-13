export function ProgressBar({ percentual, className = '', fillClassName = 'bg-brand-purple' }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-brand-lilac ${className}`}>
      <div
        className={`h-full rounded-full ${fillClassName}`}
        style={{ width: `${percentual}%` }}
      />
    </div>
  )
}
