import { ReviewSuggestionCard } from '../../components/ui/ReviewSuggestionCard'
import { useToast } from '../../context/useToast'
import { trilhaRevisao } from '../../mocks/trilha'

const SESSAO_EM_VIDEO_MSG = 'Essa interação é demonstrada no vídeo da sessão ao vivo.'

export function Trilha() {
  const showToast = useToast()

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      {trilhaRevisao.map((sugestao) => (
        <ReviewSuggestionCard
          key={sugestao.id}
          motivo={sugestao.motivo}
          tom={sugestao.tom}
          topico={sugestao.topico}
          materia={sugestao.materia}
          onPraticar={() => showToast(SESSAO_EM_VIDEO_MSG)}
        />
      ))}
    </div>
  )
}
