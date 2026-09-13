import { BookOpenIcon, HomeIcon, MicIcon, UserIcon, WandIcon } from '../components/icons'
import { aluno } from '../mocks/aluno'
import { Biblioteca } from '../pages/aluno/Biblioteca'
import { CheckinHumor } from '../pages/aluno/CheckinHumor'
import { Duelos } from '../pages/aluno/Duelos'
import { Estudio } from '../pages/aluno/Estudio'
import { Home } from '../pages/aluno/Home'
import { Perfil } from '../pages/aluno/Perfil'
import { Sessoes } from '../pages/aluno/Sessoes'
import { Trilha } from '../pages/aluno/Trilha'

export const alunoProfile = {
  id: 'aluno',
  label: 'Aluno',
  avatarLabel: 'M',
  defaultTab: 'home',
  navItems: [
    { id: 'home', label: 'Home', Icon: HomeIcon },
    { id: 'biblioteca', label: 'Biblioteca', Icon: BookOpenIcon },
    { id: 'sessoes', label: 'Sessões', Icon: MicIcon },
    { id: 'estudio', label: 'Estúdio', Icon: WandIcon },
    { id: 'perfil', label: 'Perfil', Icon: UserIcon },
  ],
  pages: {
    home: {
      title: `Oi, ${aluno.nome} 👋`,
      subtitle: `${aluno.turma} • ${aluno.escola}`,
      Component: Home,
    },
    biblioteca: {
      title: 'Biblioteca',
      subtitle: 'Seus materiais de estudo e progresso',
      Component: Biblioteca,
    },
    sessoes: {
      title: 'Sessões de Prática',
      subtitle: 'Fale com a IA Dora para consolidar o conteúdo',
      Component: Sessoes,
    },
    estudio: {
      title: 'Estúdio de Criação',
      subtitle: 'Transforme seu aprendizado em materiais autorais ricos',
      Component: Estudio,
    },
    humor: {
      title: 'Diário de Humor',
      subtitle: 'Maiêutica se importa com o seu bem-estar',
      Component: CheckinHumor,
      navActiveId: 'home',
    },
    trilha: {
      title: 'Trilha de Revisão',
      subtitle: 'Recomendações da Dora baseadas nas suas conversas',
      Component: Trilha,
      navActiveId: 'home',
    },
    duelos: {
      title: 'Duelos entre Turmas',
      subtitle: 'Esforço coletivo e aprendizado compartilhado',
      Component: Duelos,
      navActiveId: 'home',
    },
    perfil: {
      title: 'Seu Perfil',
      subtitle: 'Acompanhe sua caminhada educacional',
      Component: Perfil,
    },
  },
}
