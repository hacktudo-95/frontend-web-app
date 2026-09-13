import { InterdisciplinaryProposalCard } from '../../components/ui/InterdisciplinaryProposalCard'
import { useToast } from '../../context/useToast'
import { conexaoResumo, propostasInterdisciplinares } from '../../mocks/interdisciplinar'

const TOM_TEXTO = {
  verde: 'text-success-green-text',
  roxo: 'text-brand-purple',
  rosa: 'text-live-pink',
}

export function ConexoesInterdisciplinares() {
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-gray-2">
          Conexão do 8° ano
        </p>
        <p className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
          {conexaoResumo.map((item, index) => (
            <span key={item.texto} className="flex items-center gap-1.5">
              <span className={TOM_TEXTO[item.tom]}>{item.texto}</span>
              {index < conexaoResumo.length - 1 && (
                <span className="text-text-light-gray">↔</span>
              )}
            </span>
          ))}
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">
          Propostas Interdisciplinares Dora
        </h2>
        <div className="flex flex-col gap-3">
          {propostasInterdisciplinares.map((proposta) => (
            <InterdisciplinaryProposalCard
              key={proposta.id}
              materias={proposta.materias}
              recomendado={proposta.recomendado}
              titulo={proposta.titulo}
              descricao={proposta.descricao}
              onExplorar={() =>
                showToast('Exploração de projeto interdisciplinar ilustrativa neste protótipo.')
              }
            />
          ))}
        </div>
      </section>
    </div>
  )
}
