import { LightbulbIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { ConceptMasteryCard } from '../../components/ui/ConceptMasteryCard'
import { PrivacyBadge } from '../../components/ui/PrivacyBadge'
import { StudentGapRow } from '../../components/ui/StudentGapRow'
import { alunosComLacunas, statusDominioGeral, sugestaoAtividade } from '../../mocks/mapaLacunas'

export function MapaDeLacunas() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Status de Domínio Geral</h2>
        <div className="flex flex-col gap-2">
          {statusDominioGeral.map((item) => (
            <ConceptMasteryCard
              key={item.conceito}
              conceito={item.conceito}
              percentual={item.percentual}
              tom={item.tom}
              emAlerta={item.emAlerta}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-dark">Alunos com lacunas em Frações</h2>
          <PrivacyBadge />
        </div>
        <div className="divide-y divide-app-bg">
          {alunosComLacunas.map((nome) => (
            <StudentGapRow key={nome} nome={nome} />
          ))}
        </div>
      </section>

      <Banner
        tom="amber"
        titulo="Sugestão de Atividade"
        icon={<LightbulbIcon className="mt-0.5 h-4 w-4 shrink-0" />}
      >
        {sugestaoAtividade}
      </Banner>
    </div>
  )
}
