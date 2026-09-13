import { useState } from 'react'
import { LightbulbIcon, UsersIcon, UserIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { FieldRow } from '../../components/ui/FieldRow'
import { IconOptionCard } from '../../components/ui/IconOptionCard'
import { useToast } from '../../context/useToast'
import {
  assuntoPrincipal,
  dicaEquidade,
  formatosDesafio,
  prazoLimite,
  recompensa,
} from '../../mocks/novaMissao'

const ICONS_POR_FORMATO = {
  individual: UserIcon,
  colaborativo: UsersIcon,
}

export function NovaMissaoDeCasa() {
  const [formatoId, setFormatoId] = useState(formatosDesafio[0].id)
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3">
      <FieldRow label="Assunto principal" value={assuntoPrincipal} />

      <div className="flex gap-2">
        <FieldRow label="Prazo limite" value={prazoLimite} />
        <FieldRow
          label="Recompensa"
          value={<span className="text-state-thinking">{recompensa}</span>}
        />
      </div>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Formato do Desafio</h2>
        <div className="flex gap-2">
          {formatosDesafio.map((formato) => {
            const Icon = ICONS_POR_FORMATO[formato.id]
            return (
              <IconOptionCard
                key={formato.id}
                icon={<Icon className="h-5 w-5" />}
                titulo={formato.titulo}
                descricao={formato.descricao}
                selecionado={formatoId === formato.id}
                onSelect={() => setFormatoId(formato.id)}
              />
            )
          })}
        </div>
      </section>

      <Banner
        tom="verde"
        titulo="Dica de Equidade"
        icon={<LightbulbIcon className="mt-0.5 h-4 w-4 shrink-0" />}
      >
        {dicaEquidade}
      </Banner>

      <button
        type="button"
        onClick={() => showToast('Missão atribuída para a turma 8º B (mock).')}
        className="rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
      >
        Atribuir missão para 8º B
      </button>
    </div>
  )
}
