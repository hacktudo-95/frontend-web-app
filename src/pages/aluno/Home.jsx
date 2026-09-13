import { AchievementBadge } from '../../components/ui/AchievementBadge'
import { MissionCard } from '../../components/ui/MissionCard'
import { QuickActionCard } from '../../components/ui/QuickActionCard'
import { StatCard } from '../../components/ui/StatCard'
import { useNavigate } from '../../context/useNavigate'
import { useToast } from '../../context/useToast'
import {
  AlertTriangleIcon,
  FlameIcon,
  HeadphonesIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
} from '../../components/icons'
import { aluno, conquistasRecentes, missaoPendente } from '../../mocks/aluno'

const SESSAO_EM_VIDEO_MSG = 'Essa interação é demonstrada no vídeo da sessão ao vivo.'

export function Home() {
  const showToast = useToast()
  const navigate = useNavigate()

  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pb-6">
      <section className="flex gap-3">
        <StatCard
          icon={<FlameIcon className="h-4 w-4" />}
          label="Prática"
          value={`${aluno.streakDias} dias`}
          hint="seguidos praticando!"
          iconClassName="text-state-thinking"
        />
        <StatCard
          icon={<TrendingUpIcon className="h-4 w-4" />}
          label="Domínio"
          value={`${aluno.dominioGeral}%`}
          hint="Média de aproveitamento"
          iconClassName="text-brand-purple"
        />
      </section>

      <MissionCard
        missao={missaoPendente}
        onPraticar={() => showToast(SESSAO_EM_VIDEO_MSG)}
      />

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Ações rápidas</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickActionCard
            icon={<HeadphonesIcon className="h-4 w-4 text-brand-purple-dark" />}
            iconBgClassName="bg-brand-lilac"
            title="Praticar agora"
            subtitle="Iniciar conversa de revisão"
            onClick={() => showToast(SESSAO_EM_VIDEO_MSG)}
          />
          <QuickActionCard
            icon={<AlertTriangleIcon className="h-4 w-4 text-state-error" />}
            iconBgClassName="bg-state-error/10"
            title="Ver lacunas"
            subtitle="2 tópicos para reforçar"
            onClick={() => navigate('trilha')}
          />
          <QuickActionCard
            icon={<SparklesIcon className="h-4 w-4 text-success-green-text" />}
            iconBgClassName="bg-success-green/10"
            title="Estúdio de Criação"
            subtitle="Gerar podcasts e mapas"
            onClick={() => navigate('estudio')}
          />
          <QuickActionCard
            icon={<UsersIcon className="h-4 w-4 text-state-thinking" />}
            iconBgClassName="bg-state-thinking/10"
            title="Duelos coletivos"
            subtitle="Jogar com o 8º ano B"
            onClick={() => navigate('duelos')}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Conquistas recentes</h2>
        <div className="flex flex-wrap gap-2">
          {conquistasRecentes.map((conquista) => (
            <AchievementBadge key={conquista.id} titulo={conquista.titulo} icon={conquista.icon} />
          ))}
        </div>
      </section>
    </div>
  )
}
