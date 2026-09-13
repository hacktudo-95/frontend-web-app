export function StudentGapRow({ nome }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="font-medium text-text-dark">{nome}</span>
      <span className="text-error-red">Abaixo da média</span>
    </div>
  )
}
