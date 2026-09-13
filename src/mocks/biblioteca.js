export const materias = [
  {
    id: 'biologia',
    nome: 'Biologia',
    progresso: 68,
    totalTopicos: 12,
    topicos: [
      {
        nome: 'Introdução à Citologia',
        status: 'concluido',
        materiais: [
          { tipo: 'slide', titulo: 'Slide da aula' },
          { tipo: 'transcricao', titulo: 'Transcrição da aula' },
        ],
      },
      {
        nome: 'Divisão Celular e Mitose',
        status: 'liberado',
        materiais: [
          { tipo: 'foto', titulo: 'Foto do quadro' },
          { tipo: 'audio', titulo: 'Áudio explicativo' },
        ],
      },
      { nome: 'Genética e Hereditariedade', status: 'bloqueado' },
    ],
  },
  {
    id: 'matematica',
    nome: 'Matemática',
    progresso: 54,
    totalTopicos: 10,
    topicos: [
      {
        nome: 'Equações do 1º Grau',
        status: 'concluido',
        materiais: [
          { tipo: 'slide', titulo: 'Slide da aula' },
          { tipo: 'audio', titulo: 'Áudio explicativo' },
        ],
      },
      {
        nome: 'Razão e Proporção',
        status: 'liberado',
        materiais: [{ tipo: 'foto', titulo: 'Foto do quadro' }],
      },
      { nome: 'Estatística Básica', status: 'bloqueado' },
    ],
  },
  {
    id: 'historia',
    nome: 'História',
    progresso: 80,
    totalTopicos: 9,
    topicos: [
      {
        nome: 'Revolução Industrial',
        status: 'concluido',
        materiais: [
          { tipo: 'transcricao', titulo: 'Transcrição da aula' },
          { tipo: 'slide', titulo: 'Slide da aula' },
        ],
      },
      {
        nome: 'Absolutismo na Europa',
        status: 'liberado',
        materiais: [{ tipo: 'audio', titulo: 'Áudio explicativo' }],
      },
      { nome: 'Guerra Fria', status: 'bloqueado' },
    ],
  },
  {
    id: 'portugues',
    nome: 'Português',
    progresso: 73,
    totalTopicos: 8,
    topicos: [
      {
        nome: 'Figuras de Linguagem',
        status: 'concluido',
        materiais: [{ tipo: 'slide', titulo: 'Slide da aula' }],
      },
      {
        nome: 'Predicativo do Sujeito',
        status: 'liberado',
        materiais: [
          { tipo: 'audio', titulo: 'Áudio explicativo' },
          { tipo: 'transcricao', titulo: 'Transcrição da aula' },
        ],
      },
      { nome: 'Análise Sintática Avançada', status: 'bloqueado' },
    ],
  },
  {
    id: 'geografia',
    nome: 'Geografia',
    progresso: 61,
    totalTopicos: 7,
    topicos: [
      {
        nome: 'Climas do Brasil',
        status: 'concluido',
        materiais: [{ tipo: 'foto', titulo: 'Foto do quadro' }],
      },
      {
        nome: 'Relevo e Hidrografia',
        status: 'liberado',
        materiais: [{ tipo: 'slide', titulo: 'Slide da aula' }],
      },
      { nome: 'Geopolítica Global', status: 'bloqueado' },
    ],
  },
  {
    id: 'ciencias',
    nome: 'Ciências',
    progresso: 77,
    totalTopicos: 11,
    topicos: [
      {
        nome: 'Cadeia Alimentar',
        status: 'concluido',
        materiais: [
          { tipo: 'slide', titulo: 'Slide da aula' },
          { tipo: 'audio', titulo: 'Áudio explicativo' },
        ],
      },
      {
        nome: 'Sistema Solar',
        status: 'liberado',
        materiais: [{ tipo: 'foto', titulo: 'Foto do quadro' }],
      },
      { nome: 'Genética Molecular', status: 'bloqueado' },
    ],
  },
]
