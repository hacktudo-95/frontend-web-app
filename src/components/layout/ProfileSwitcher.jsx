import { useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '../icons'

export function ProfileSwitcher({ profiles, activeProfileId, avatarLabel, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Trocar de perfil"
        aria-expanded={isOpen}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-lilac font-semibold text-brand-purple-dark"
      >
        {avatarLabel}
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-brand-purple-dark shadow">
          <ChevronDownIcon className="h-3 w-3" />
        </span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar seletor de perfil"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-10 cursor-default"
          />
          <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl bg-white py-1 shadow-lg">
            {profiles.map((profile) => {
              const isActive = profile.id === activeProfileId
              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => {
                    onSelect(profile.id)
                    setIsOpen(false)
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                    isActive ? 'font-semibold text-brand-purple-dark' : 'text-text-dark'
                  }`}
                >
                  {profile.label}
                  {isActive && <CheckIcon className="h-4 w-4" />}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
