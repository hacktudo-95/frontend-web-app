import { CameraIcon, ChevronDownIcon, EditIcon, LockIcon, MicIcon } from '../../components/icons'
import { AiStructuringCard } from '../../components/ui/AiStructuringCard'
import { FieldRow } from '../../components/ui/FieldRow'
import { SymbolicAttachmentButton } from '../../components/ui/SymbolicAttachmentButton'
import { useNavigate } from '../../context/useNavigate'
import { useToast } from '../../context/useToast'
import { materialEmRevisao, opcoesDeAnexo, turmaSelecionada } from '../../mocks/anexarConteudo'

const ICONS_POR_TIPO = {
  camera: CameraIcon,
  edit: EditIcon,
  mic: MicIcon,
}

const ANEXO_SIMBOLICO_MSG = 'Anexação simbólica — sem upload real neste protótipo.'

export function AnexarConteudo() {
  const showToast = useToast()
  const navigate = useNavigate()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <FieldRow
        label="Turma selecionada"
        value={turmaSelecionada}
        action={
          <button
            type="button"
            onClick={() => showToast('Troca de turma ilustrativa neste protótipo.')}
            className="flex items-center gap-1 text-sm font-semibold text-brand-purple-dark"
          >
            Alterar
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        }
      />

      <section>
        <h2 className="mb-3 text-base font-semibold text-text-dark">Anexar novo material</h2>
        <div className="flex gap-2">
          {opcoesDeAnexo.map((opcao) => {
            const Icon = ICONS_POR_TIPO[opcao.icon]
            return (
              <SymbolicAttachmentButton
                key={opcao.id}
                icon={<Icon className="h-4 w-4" />}
                label={opcao.label}
                onClick={() => showToast(ANEXO_SIMBOLICO_MSG)}
              />
            )
          })}
        </div>
      </section>

      <AiStructuringCard
        titulo={materialEmRevisao.titulo}
        topicos={materialEmRevisao.topicos}
        onAprovar={() =>
          showToast(`Conteúdo aprovado e liberado para a turma ${turmaSelecionada} (mock).`)
        }
        onAjustar={() => showToast('Edição de tópicos ilustrativa neste protótipo.')}
      />

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-text-gray-2">
        <LockIcon className="h-3.5 w-3.5" />
        Conteúdo vinculado exclusivamente à turma {turmaSelecionada}
      </p>

      <button
        type="button"
        onClick={() => navigate('interdisciplinar')}
        className="text-sm font-semibold text-brand-purple-dark"
      >
        Ver conexões interdisciplinares →
      </button>
    </div>
  )
}
