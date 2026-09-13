import { LightbulbIcon, LockIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { LineChartCard } from '../../components/ui/LineChartCard'
import { TrendAlertCard } from '../../components/ui/TrendAlertCard'
import { alertasDeTendencia, humorMedioTurmas, sugestaoDora } from '../../mocks/orientacaoEducacional'

export function OrientacaoEducacional() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <Banner tom="amber" icon={<LockIcon className="mt-0.5 h-4 w-4 shrink-0" />}>
        Dados individuais não são acessíveis neste painel — apenas tendências agregadas
      </Banner>

      <LineChartCard
        titulo="Humor Médio das Turmas (14 dias)"
        tagTexto={humorMedioTurmas.tagGeral}
        tagTom="roxo"
        xLabels={humorMedioTurmas.xLabels}
        series={humorMedioTurmas.series}
      />

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Acompanhamento Recomendado</h2>
        <div className="flex flex-col gap-2">
          {alertasDeTendencia.map((alerta) => (
            <TrendAlertCard key={alerta.id} descricao={alerta.descricao} />
          ))}
        </div>
      </section>

      <Banner
        tom="amber"
        titulo="Sugestão da Dora"
        icon={<LightbulbIcon className="mt-0.5 h-4 w-4 shrink-0" />}
      >
        {sugestaoDora}
      </Banner>
    </div>
  )
}
