import { CalendarIcon } from '../../components/icons'
import { ClassRankingRow } from '../../components/ui/ClassRankingRow'
import { CollectiveScoreBanner } from '../../components/ui/CollectiveScoreBanner'
import { aluno } from '../../mocks/aluno'
import { placarTurmas, proximoQuizColetivo } from '../../mocks/duelos'

export function Duelos() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <CollectiveScoreBanner
        titulo={`Força Coletiva do ${aluno.turma.replace('ano ', '')}!`}
        descricao="Toda sessão concluída por você soma pontos para a nossa sala no ranking escolar."
      />

      <div className="flex items-center gap-2 rounded-2xl bg-success-green/10 px-4 py-3 text-sm font-medium text-success-green-text">
        <CalendarIcon className="h-4 w-4 shrink-0" />
        Próximo quiz coletivo: {proximoQuizColetivo}
      </div>

      <section className="rounded-2xl bg-white p-2 shadow-sm">
        <h2 className="px-2 pt-2 pb-1 text-base font-semibold text-text-dark">
          Placar das Turmas (8º ano)
        </h2>
        <div className="flex flex-col gap-1 p-1">
          {placarTurmas.map((item, index) => (
            <ClassRankingRow
              key={item.turma}
              posicao={index + 1}
              turma={item.turma}
              pontos={item.pontos}
              isMinhaSala={item.turma === aluno.turma}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
