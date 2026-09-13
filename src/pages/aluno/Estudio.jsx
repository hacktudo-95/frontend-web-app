import { FileTextIcon, GridIcon, HeadphonesIcon } from '../../components/icons'
import { CreationStudioCard } from '../../components/ui/CreationStudioCard'
import { useToast } from '../../context/useToast'
import { estudioCriacoes } from '../../mocks/estudio'

const ICONS_POR_TIPO = {
  podcast: HeadphonesIcon,
  mapa_mental: GridIcon,
  mini_aula: FileTextIcon,
}

const EXEMPLO_ILUSTRATIVO_MSG = 'Exemplo ilustrativo — sem conteúdo real neste protótipo.'
const CRIACAO_ILUSTRATIVA_MSG = 'Fluxo de criação ilustrativo — sem produção real neste protótipo.'

export function Estudio() {
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      {estudioCriacoes.map((criacao) => {
        const Icon = ICONS_POR_TIPO[criacao.tipo]
        return (
          <CreationStudioCard
            key={criacao.id}
            icon={<Icon className="h-4 w-4" />}
            titulo={criacao.titulo}
            coautoria={criacao.coautoria}
            exemploTitulo={criacao.exemploTitulo}
            exemploDescricao={criacao.exemploDescricao}
            onAbrirExemplo={() => showToast(EXEMPLO_ILUSTRATIVO_MSG)}
            onCriarNovo={() => showToast(CRIACAO_ILUSTRATIVA_MSG)}
          />
        )
      })}
    </div>
  )
}
