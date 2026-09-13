import { useState } from 'react'
import { MoodHistoryStrip } from '../../components/ui/MoodHistoryStrip'
import { MoodPicker } from '../../components/ui/MoodPicker'
import { aluno } from '../../mocks/aluno'
import { estadosDeHumor, historicoUltimosDias, mensagemPorEstado } from '../../mocks/humor'

export function CheckinHumor() {
  const [estadoSelecionadoId, setEstadoSelecionadoId] = useState('bem')

  const diasComHoje = [
    ...historicoUltimosDias,
    { dia: 'Hoje', estadoId: estadoSelecionadoId, isHoje: true },
  ]

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-dark">
          Como você está se sentindo hoje?
        </h2>

        <MoodPicker
          estados={estadosDeHumor}
          selecionadoId={estadoSelecionadoId}
          onSelecionar={setEstadoSelecionadoId}
        />

        {estadoSelecionadoId && (
          <p className="mt-4 text-sm italic text-text-gray">
            "{mensagemPorEstado[estadoSelecionadoId].replace('Maitê', aluno.nome)}"
          </p>
        )}
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-dark">
          Histórico dos últimos 7 dias
        </h2>
        <MoodHistoryStrip dias={diasComHoje} estados={estadosDeHumor} />
      </section>
    </div>
  )
}
