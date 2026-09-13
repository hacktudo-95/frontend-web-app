export function ProfileHeaderCard({ nome, turma, escola }) {
  const iniciais = nome.charAt(0).toUpperCase()

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-lilac text-xl font-semibold text-brand-purple-dark">
        {iniciais}
      </div>
      <div>
        <h2 className="text-base font-semibold text-text-dark">{nome}</h2>
        <p className="text-sm text-text-gray-2">
          {turma} • {escola}
        </p>
      </div>
    </div>
  )
}
