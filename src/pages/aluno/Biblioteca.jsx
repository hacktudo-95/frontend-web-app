import { useState } from 'react'
import { SubjectCard } from '../../components/ui/SubjectCard'
import { materias } from '../../mocks/biblioteca'

export function Biblioteca() {
  const [materiaExpandidaId, setMateriaExpandidaId] = useState(materias[0]?.id ?? null)

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      {materias.map((materia) => (
        <SubjectCard
          key={materia.id}
          materia={materia}
          expandido={materiaExpandidaId === materia.id}
          onToggle={() =>
            setMateriaExpandidaId((atual) => (atual === materia.id ? null : materia.id))
          }
        />
      ))}
    </div>
  )
}
