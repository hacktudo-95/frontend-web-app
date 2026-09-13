export const estadosDeHumor = [
  { id: 'otimo', emoji: '😄', label: 'Ótimo', tom: 'positivo' },
  { id: 'bem', emoji: '🙂', label: 'Bem', tom: 'positivo' },
  { id: 'normal', emoji: '😐', label: 'Normal', tom: 'neutro' },
  { id: 'cansado', emoji: '😕', label: 'Cansado', tom: 'baixo' },
  { id: 'frustrado', emoji: '😣', label: 'Frustrado', tom: 'baixo' },
]

export const mensagemPorEstado = {
  otimo: 'Que ótimo, Maitê! Vamos aproveitar essa energia para praticar um pouco?',
  bem: 'Fico feliz que você esteja se sentindo bem, Maitê! Pronta para exercitar a mente um pouquinho?',
  normal: 'Tudo bem, Maitê. Um dia normal também é um bom dia para praticar um pouco.',
  cansado: 'Entendido, Maitê. Que tal algo mais leve por hoje?',
  frustrado: 'Sinto muito, Maitê. Sem pressão hoje — estamos aqui quando você quiser.',
}

export const historicoUltimosDias = [
  { dia: 'Ter', estadoId: 'bem' },
  { dia: 'Qua', estadoId: 'bem' },
  { dia: 'Qui', estadoId: 'normal' },
  { dia: 'Sex', estadoId: 'bem' },
  { dia: 'Sáb', estadoId: null },
  { dia: 'Dom', estadoId: null },
]
