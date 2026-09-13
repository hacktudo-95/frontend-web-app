import { useState } from 'react'
import { SubjectCard } from '../../components/ui/SubjectCard'
import { useToast } from '../../context/useToast'
import { materias } from '../../mocks/biblioteca'

const MATERIAL_ILUSTRATIVO_MSG = 'Visualização ilustrativa — sem conteúdo real neste protótipo.'

export function Biblioteca() {
  const [materiaExpandidaId, setMateriaExpandidaId] = useState(materias[0]?.id ?? null)
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3">
      {materias.map((materia) => (
        <SubjectCard
          key={materia.id}
          materia={materia}
          expandido={materiaExpandidaId === materia.id}
          onToggle={() =>
            setMateriaExpandidaId((atual) => (atual === materia.id ? null : materia.id))
          }
          onAbrirMaterial={() => showToast(MATERIAL_ILUSTRATIVO_MSG)}
        />
      ))}
    </div>
  )
}
