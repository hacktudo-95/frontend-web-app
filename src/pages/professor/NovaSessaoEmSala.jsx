import { useState } from 'react'
import { FieldRow } from '../../components/ui/FieldRow'
import { HintNote } from '../../components/ui/HintNote'
import { RadioOptionCard } from '../../components/ui/RadioOptionCard'
import { useToast } from '../../context/useToast'
import { configuracaoBasica, formatosDinamica } from '../../mocks/novaSessao'

export function NovaSessaoEmSala() {
  const [formatoId, setFormatoId] = useState(formatosDinamica[0].id)
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Configurações Básicas</h2>
        <div className="flex flex-col gap-2">
          <FieldRow label="Turma" value={configuracaoBasica.turma} />
          <FieldRow label="Assunto / Biblioteca" value={configuracaoBasica.assunto} />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Formato da dinâmica</h2>
        <div className="flex flex-col gap-2">
          {formatosDinamica.map((formato) => (
            <RadioOptionCard
              key={formato.id}
              titulo={formato.titulo}
              descricao={formato.descricao}
              selecionado={formatoId === formato.id}
              onSelect={() => setFormatoId(formato.id)}
            />
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={() =>
          showToast(`Sessão liberada para a turma ${configuracaoBasica.turma} (mock).`)
        }
        className="rounded-xl bg-brand-purple-dark py-3 text-sm font-semibold text-white"
      >
        Liberar sessão para a turma
      </button>

      <HintNote>
        Ao liberar, os alunos verão a sessão na aba "Em Sala" imediatamente.
      </HintNote>
    </div>
  )
}
