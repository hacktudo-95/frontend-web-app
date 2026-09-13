import { useState } from 'react'
import { PlusIcon, ShieldIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { ChipSelect } from '../../components/ui/ChipSelect'
import { MaterialRow } from '../../components/ui/MaterialRow'
import { useToast } from '../../context/useToast'
import { materiaisDaTurma, turmasDisponiveis } from '../../mocks/baseDeConhecimento'

export function BaseDeConhecimento() {
  const [turmaId, setTurmaId] = useState(turmasDisponiveis[0].id)
  const showToast = useToast()
  const turma = turmasDisponiveis.find((t) => t.id === turmaId)

  return (
    <div className="flex flex-1 flex-col gap-3">
      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-gray-2">
          Turma selecionada
        </h2>
        <ChipSelect
          options={turmasDisponiveis.map((t) => ({ value: t.id, label: t.nome }))}
          value={turmaId}
          onChange={setTurmaId}
        />
      </section>

      <Banner tom="verde" icon={<ShieldIcon className="mt-0.5 h-4 w-4 shrink-0" />}>
        Esta é a fonte única de verdade da Dora para a turma {turma.nome} — apenas materiais
        aprovados são usados pela IA
      </Banner>

      <button
        type="button"
        onClick={() => showToast('Anexação simbólica — sem upload real neste protótipo.')}
        className="flex items-center justify-center gap-2 rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
      >
        <PlusIcon className="h-4 w-4" />
        Anexar novo material
      </button>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Materiais da Turma</h2>
        <div className="flex flex-col gap-2">
          {materiaisDaTurma.map((material) => (
            <MaterialRow
              key={material.id}
              icon={material.icon}
              titulo={material.titulo}
              subtitulo={material.subtitulo}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
