import { CheckCircleIcon, HeartIcon, PuzzleIcon, TrendingUpIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { LineChartCard } from '../../components/ui/LineChartCard'
import { MiniStatTile } from '../../components/ui/MiniStatTile'
import { TurmaPerformanceCard } from '../../components/ui/TurmaPerformanceCard'
import {
  desempenhoPorTurma,
  metricasGerais,
  participacaoSemanal,
} from '../../mocks/painelInstitucional'

const ICONS_POR_METRICA = {
  trendingUp: TrendingUpIcon,
  puzzle: PuzzleIcon,
  heart: HeartIcon,
}

export function PainelInstitucional() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <Banner
        tom="verde"
        icon={<CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />}
      >
        Dados agregados — sem acesso a conversas ou transcrições individuais
      </Banner>

      <div className="flex gap-2">
        {metricasGerais.map((metrica) => {
          const Icon = ICONS_POR_METRICA[metrica.icon]
          return (
            <MiniStatTile
              key={metrica.id}
              icon={<Icon className="h-3.5 w-3.5" />}
              label={metrica.label}
              valor={metrica.valor}
              hint={metrica.variacao}
            />
          )
        })}
      </div>

      <LineChartCard
        titulo="Participação nas últimas 4 semanas"
        tagTexto={participacaoSemanal.tagGeral}
        tagTom="verde"
        xLabels={participacaoSemanal.pontos.map((p) => p.label)}
        series={[{ id: 'geral', tom: 'roxo', valores: participacaoSemanal.pontos.map((p) => p.valor) }]}
      />

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Desempenho por Turma</h2>
        <div className="flex flex-col gap-3">
          {desempenhoPorTurma.map((turma) => (
            <TurmaPerformanceCard
              key={turma.turma}
              turma={turma.turma}
              status={turma.status}
              participacao={turma.participacao}
              dominio={turma.dominio}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
