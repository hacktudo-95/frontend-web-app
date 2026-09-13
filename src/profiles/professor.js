import {
  AlertTriangleIcon,
  BookOpenIcon,
  HomeIcon,
  MicIcon,
  TargetIcon,
} from '../components/icons'
import { professor } from '../mocks/professor'
import { AnexarConteudo } from '../pages/professor/AnexarConteudo'
import { ConexoesInterdisciplinares } from '../pages/professor/ConexoesInterdisciplinares'
import { DashboardProfessor } from '../pages/professor/DashboardProfessor'
import { MapaDeLacunas } from '../pages/professor/MapaDeLacunas'
import { NovaMissaoDeCasa } from '../pages/professor/NovaMissaoDeCasa'
import { NovaSessaoEmSala } from '../pages/professor/NovaSessaoEmSala'

export const professorProfile = {
  id: 'professor',
  label: 'Professor',
  avatarLabel: 'R',
  defaultTab: 'home',
  navItems: [
    { id: 'home', label: 'Home', Icon: HomeIcon },
    { id: 'conteudos', label: 'Conteúdos', Icon: BookOpenIcon },
    { id: 'sessoes', label: 'Sessões', Icon: MicIcon },
    { id: 'missoes', label: 'Missões', Icon: TargetIcon },
    { id: 'lacunas', label: 'Lacunas', Icon: AlertTriangleIcon },
  ],
  pages: {
    home: {
      title: `Olá, Prof. ${professor.nome}👋`,
      subtitle: `${professor.escola} • ${professor.painel}`,
      Component: DashboardProfessor,
    },
    conteudos: {
      title: 'Anexar conteúdo',
      subtitle: 'Alimente a IA Dora com seus materiais',
      Component: AnexarConteudo,
    },
    interdisciplinar: {
      title: 'Conexões interdisciplinares',
      subtitle: 'Trabalhe conteúdos cruzados de forma nativa',
      Component: ConexoesInterdisciplinares,
      navActiveId: 'conteudos',
    },
    sessoes: {
      title: 'Nova sessão em sala',
      subtitle: 'Configure a dinâmica para a aula de hoje',
      Component: NovaSessaoEmSala,
    },
    missoes: {
      title: 'Nova missão de casa',
      subtitle: 'Crie atividades extraclasse assistidas',
      Component: NovaMissaoDeCasa,
    },
    lacunas: {
      title: 'Mapa de lacunas — 8º B',
      subtitle: 'Consolidado de conceitos críticos',
      Component: MapaDeLacunas,
    },
  },
}
