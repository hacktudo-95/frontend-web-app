const defaultProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export function FlameIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.4 0 2.5-1.1 2.5-2.5 0-1.7-1.5-2.5-1.5-4.5 2.5 1 4 3.5 4 6a5 5 0 0 1-10 0c0-2 1-3.5 2.5-5-.3 1.5 0 2.5 0 3.5Z" />
    </svg>
  )
}

export function TrendingUpIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M3 17l6-6 4 4 7-8" />
      <path d="M14 7h6v6" />
    </svg>
  )
}

export function MicIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  )
}

export function PlayIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7Z" />
    </svg>
  )
}

export function HeadphonesIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M3 13a9 9 0 0 1 18 0" />
      <rect x="3" y="13" width="4" height="7" rx="1.5" />
      <rect x="17" y="13" width="4" height="7" rx="1.5" />
    </svg>
  )
}

export function AlertTriangleIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

export function SparklesIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  )
}

export function UsersIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.5 19a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14.5 19a4.5 4.5 0 0 1 6.9-3.8" />
    </svg>
  )
}

export function AwardIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" />
    </svg>
  )
}

export function CheckCircleIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  )
}

export function MessageSquareIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 4h16v12H8l-4 4Z" />
    </svg>
  )
}

export function HomeIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
    </svg>
  )
}

export function BookOpenIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 6c-1.5-1.3-4-2-8-2v14c4 0 6.5.7 8 2 1.5-1.3 4-2 8-2V4c-4 0-6.5.7-8 2Z" />
      <path d="M12 6v14" />
    </svg>
  )
}

export function WandIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 20 16 8" />
      <path d="M14 4h.01M19 6h.01M17 9h.01M6 15h.01" />
    </svg>
  )
}

export function LockIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

export function HelpCircleIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 1.7-2.4 3.5" />
      <path d="M12 17h.01" />
    </svg>
  )
}

export function PuzzleIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M9 4h3.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5H17a2 2 0 0 1 2 2v2.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 1.5 1.5V21H5v-3.5A1.5 1.5 0 0 1 6.5 16h1a1.5 1.5 0 0 0 0-3h-1A1.5 1.5 0 0 1 5 11.5V9a2 2 0 0 1 2-2h1.5A1.5 1.5 0 0 0 10 5.5v-1A1.5 1.5 0 0 1 9 4Z" />
    </svg>
  )
}

export function HeartIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 20s-7-4.4-9.3-8.8C1.3 8.3 3 5 6.3 5c1.9 0 3.3 1 4 2.4C11 6 12.4 5 14.3 5c3.3 0 5 3.3 3.6 6.2C15.6 15.6 12 20 12 20Z" />
    </svg>
  )
}

export function ShieldIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 3.5 5 6v5.5c0 4.2 3 7.4 7 9 4-1.6 7-4.8 7-9V6Z" />
      <path d="m9.5 12 2 2 3.5-4" />
    </svg>
  )
}

export function ClipboardIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  )
}

export function PaperclipIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M8 12.5V7a4 4 0 0 1 8 0v8a2.5 2.5 0 0 1-5 0V8" />
    </svg>
  )
}

export function CameraIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 8h3l2-2h6l2 2h3v11H4Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </svg>
  )
}

export function EditIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 15.5V20h4.5L20 8.5l-4.5-4.5Z" />
      <path d="m13.5 6 4.5 4.5" />
    </svg>
  )
}

export function LightbulbIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
    </svg>
  )
}

export function ChevronDownIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function CheckIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  )
}

export function TargetIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </svg>
  )
}

export function GridIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  )
}

export function FileTextIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M7 3h7l4 4v14H7Z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 13h5M9.5 16.5h5" />
    </svg>
  )
}

export function EyeIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function PlusIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function CalendarIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </svg>
  )
}

export function CompassIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1.8 4.9-4.9 1.8 1.8-4.9 4.9-1.8Z" />
    </svg>
  )
}

export function InfoCircleIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01" />
      <path d="M11 12h1v5h1" />
    </svg>
  )
}

export function UserIcon({ className }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  )
}
