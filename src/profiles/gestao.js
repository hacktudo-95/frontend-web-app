import { BookOpenIcon, GridIcon, UsersIcon } from '../components/icons'
import { coordenacao } from '../mocks/painelInstitucional'
import { BaseDeConhecimento } from '../pages/gestao/BaseDeConhecimento'
import { OrientacaoEducacional } from '../pages/gestao/OrientacaoEducacional'
import { PainelInstitucional } from '../pages/gestao/PainelInstitucional'

export const gestaoProfile = {
  id: 'gestao',
  label: 'Gestão',
  avatarLabel: 'F',
  defaultTab: 'painel',
  navItems: [
    { id: 'painel', label: 'Painel', Icon: GridIcon },
    { id: 'orientacao', label: 'Orientação', Icon: UsersIcon },
    { id: 'base', label: 'Base', Icon: BookOpenIcon },
  ],
  pages: {
    painel: {
      title: `Olá, Coord. ${coordenacao.nome}👋`,
      subtitle: `${coordenacao.painel} • ${coordenacao.escola}`,
      Component: PainelInstitucional,
    },
    orientacao: {
      title: 'Orientação Educacional',
      subtitle: 'Painel de Apoio e Clima Escolar',
      Component: OrientacaoEducacional,
    },
    base: {
      title: 'Base de Conhecimento',
      subtitle: 'Alinhamento e Curadoria Pedagógica',
      Component: BaseDeConhecimento,
    },
  },
}
