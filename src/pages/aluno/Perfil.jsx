import { AchievementGridItem } from '../../components/ui/AchievementGridItem'
import { ProfileHeaderCard } from '../../components/ui/ProfileHeaderCard'
import { RecentSessionRow } from '../../components/ui/RecentSessionRow'
import { SubjectMasteryRow } from '../../components/ui/SubjectMasteryRow'
import { aluno } from '../../mocks/aluno'
import {
  aproveitamentoPorMateria,
  quadroDeConquistas,
  sessoesRecentes,
} from '../../mocks/perfil'

export function Perfil() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <ProfileHeaderCard nome={aluno.nome} turma={aluno.turma} escola={aluno.escola} />

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-dark">
          Aproveitamento por Matéria
        </h2>
        <div className="flex flex-col gap-3">
          {aproveitamentoPorMateria.map((materia) => (
            <SubjectMasteryRow
              key={materia.nome}
              nome={materia.nome}
              progresso={materia.progresso}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-dark">Quadro de Conquistas</h2>
        <div className="grid grid-cols-2 gap-2">
          {quadroDeConquistas.map((conquista) => (
            <AchievementGridItem
              key={conquista.id}
              titulo={conquista.titulo}
              icon={conquista.icon}
              desbloqueada={conquista.desbloqueada}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-dark">Sessões Recentes</h2>
        <div className="flex flex-col gap-3">
          {sessoesRecentes.map((sessao) => (
            <RecentSessionRow
              key={sessao.id}
              titulo={sessao.titulo}
              quando={sessao.quando}
              dominioResultado={sessao.dominioResultado}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
