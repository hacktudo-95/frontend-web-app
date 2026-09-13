import { InfoCircleIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { TeacherSessionCard } from '../../components/ui/TeacherSessionCard'
import { TurmaSummaryCard } from '../../components/ui/TurmaSummaryCard'
import { useToast } from '../../context/useToast'
import { alertaLacunaCritica, sessoesDeHoje, turmasDoProfessor } from '../../mocks/professor'

const SESSAO_EM_VIDEO_MSG = 'Essa interação é demonstrada no vídeo da sessão ao vivo.'

export function DashboardProfessor() {
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <Banner icon={<InfoCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />}>
        {alertaLacunaCritica.turma} tem lacuna crítica em {alertaLacunaCritica.topico} (
        {alertaLacunaCritica.percentual}%)
      </Banner>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Suas turmas</h2>
        <div className="flex gap-3">
          {turmasDoProfessor.map((turma) => (
            <TurmaSummaryCard
              key={turma.id}
              nome={turma.nome}
              totalAlunos={turma.totalAlunos}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Sessões de hoje</h2>
        <div className="flex flex-col gap-3">
          {sessoesDeHoje.map((sessao) => (
            <TeacherSessionCard
              key={sessao.id}
              materia={sessao.materia}
              turma={sessao.turma}
              horario={sessao.horario}
              topico={sessao.topico}
              status={sessao.status}
            />
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={() => showToast(SESSAO_EM_VIDEO_MSG)}
        className="rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
      >
        Abrir sessão em sala agora
      </button>
    </div>
  )
}
