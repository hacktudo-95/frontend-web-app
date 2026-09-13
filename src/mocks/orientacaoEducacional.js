export const humorMedioTurmas = {
  tagGeral: 'Estável Geral',
  xLabels: ['D7', 'D5', 'D3', 'Hoje'],
  series: [
    { id: '8a', label: '8º A', tom: 'roxo', valores: [62, 58, 55, 57] },
    { id: '8b', label: '8º B', tom: 'laranja', valores: [70, 60, 52, 50] },
    { id: '8c', label: '8º C', tom: 'verde', valores: [75, 74, 76, 78] },
  ],
}

export const alertasDeTendencia = [
  {
    id: '8b-bem-estar',
    descricao:
      '8º B: tendência de queda no bem-estar nas últimas 2 semanas — considerar conversa com a turma',
  },
  {
    id: '8a-humor',
    descricao:
      '8º A: 3 alunos com padrão de humor abaixo da média — acompanhamento sugerido',
  },
]

export const sugestaoDora =
  'Que tal agendar uma breve roda de conversa com o 8º B? A IA de escuta ativa sinalizou um padrão linguístico de maior ansiedade acadêmica nesta turma.'
