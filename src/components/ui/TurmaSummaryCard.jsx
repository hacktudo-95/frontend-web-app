export function TurmaSummaryCard({ nome, totalAlunos }) {
  return (
    <div className="flex-1 rounded-xl bg-white p-3 text-center shadow-sm">
      <p className="text-sm font-semibold text-brand-purple-dark">{nome}</p>
      <p className="mt-1 text-xs text-text-gray-2">{totalAlunos} alunos</p>
    </div>
  )
}
