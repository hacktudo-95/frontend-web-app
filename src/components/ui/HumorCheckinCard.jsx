import { SmileIcon } from '../icons'
import { useHumor } from '../../context/useHumor'
import { useToast } from '../../context/useToast'
import { aluno } from '../../mocks/aluno'
import { estadosDeHumor, mensagemPorEstado } from '../../mocks/humor'
import { MoodPicker } from './MoodPicker'

export function HumorCheckinCard() {
  const { humorHoje, registrarHumor } = useHumor()
  const showToast = useToast()

  function handleSelecionar(estadoId) {
    registrarHumor(estadoId)
    showToast(mensagemPorEstado[estadoId].replace('Maitê', aluno.nome))
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-purple-dark">
        <SmileIcon className="h-4 w-4" />
        Check-in de Humor
      </div>
      <h2 className="text-base font-semibold text-text-dark">Como você está se sentindo hoje?</h2>

      <div className="mt-2">
        <MoodPicker
          estados={estadosDeHumor}
          selecionadoId={humorHoje}
          onSelecionar={handleSelecionar}
        />
      </div>
    </div>
  )
}
