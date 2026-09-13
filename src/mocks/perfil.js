import { conquistasRecentes } from './aluno'
import { materias } from './biblioteca'

export const aproveitamentoPorMateria = materias
  .slice(0, 4)
  .map(({ nome, progresso }) => ({ nome, progresso }))

export const conquistasBloqueadas = [
  { id: 'maratonista', titulo: 'Maratonista' },
  { id: 'mestre-ia', titulo: 'Mestre de IA' },
  { id: 'parceiro', titulo: 'Parceiro' },
]

export const quadroDeConquistas = [
  ...conquistasRecentes.map((conquista) => ({ ...conquista, desbloqueada: true })),
  ...conquistasBloqueadas.map((conquista) => ({ ...conquista, desbloqueada: false })),
]

export const sessoesRecentes = [
  {
    id: 'recente-citologia-avancada',
    titulo: 'Sessão: Citologia Avançada',
    quando: 'Ontem',
    dominioResultado: 'Consolidado',
  },
]
