import { ClipboardIcon, FileTextIcon, PaperclipIcon } from '../icons'

const ICONS_POR_TIPO = {
  fileText: FileTextIcon,
  clipboard: ClipboardIcon,
  paperclip: PaperclipIcon,
}

export function MaterialRow({ icon, titulo, subtitulo }) {
  const Icon = ICONS_POR_TIPO[icon]

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-lilac text-brand-purple-dark">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-text-dark">{titulo}</p>
        <p className="text-xs text-text-gray-2">{subtitulo}</p>
      </div>
      <span className="shrink-0 rounded-full bg-success-green/15 px-2.5 py-1 text-xs font-medium text-success-green-text">
        Dora Ativa
      </span>
    </div>
  )
}
