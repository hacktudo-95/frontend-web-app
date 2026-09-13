import { useState } from 'react'
import { InfoCircleIcon } from '../../components/icons'
import { Banner } from '../../components/ui/Banner'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { SessionCard } from '../../components/ui/SessionCard'
import { useToast } from '../../context/useToast'
import { sessoesEmSala, sessoesMissoesCasa } from '../../mocks/sessoes'

const TABS = [
  { value: 'sala', label: 'Em sala' },
  { value: 'casa', label: 'Missões de casa' },
]

const SESSOES_POR_TAB = {
  sala: sessoesEmSala,
  casa: sessoesMissoesCasa,
}

const SESSAO_EM_VIDEO_MSG = 'Essa interação é demonstrada no vídeo da sessão ao vivo.'

export function Sessoes() {
  const [tabAtiva, setTabAtiva] = useState('sala')
  const showToast = useToast()
  const sessoes = SESSOES_POR_TAB[tabAtiva]

  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pb-6">
      <Banner icon={<InfoCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />}>
        {SESSAO_EM_VIDEO_MSG}
      </Banner>

      <SegmentedControl options={TABS} value={tabAtiva} onChange={setTabAtiva} />

      {sessoes.map((sessao) => (
        <SessionCard
          key={sessao.id}
          materia={sessao.materia}
          duracaoMin={sessao.duracaoMin}
          topico={sessao.topico}
          status={sessao.status}
          dominioResultado={sessao.dominioResultado}
          prazoLabel={sessao.prazoLabel}
          onPraticar={() => showToast(SESSAO_EM_VIDEO_MSG)}
        />
      ))}
    </div>
  )
}
