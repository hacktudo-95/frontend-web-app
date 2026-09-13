import { CameraIcon, FileTextIcon, MessageSquareIcon, MicIcon } from '../icons'

const ICONS_POR_TIPO = {
  foto: CameraIcon,
  slide: FileTextIcon,
  audio: MicIcon,
  transcricao: MessageSquareIcon,
}

export function TopicMaterialChip({ tipo, titulo, onClick }) {
  const Icon = ICONS_POR_TIPO[tipo]

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-full bg-app-bg px-2.5 py-1 text-xs font-medium text-text-gray"
    >
      <Icon className="h-3.5 w-3.5 text-brand-purple-dark" />
      {titulo}
    </button>
  )
}
