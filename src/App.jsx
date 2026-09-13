import { useState } from 'react'
import { AppShell } from './components/layout/AppShell'
import { BottomNav } from './components/layout/BottomNav'
import { Header } from './components/layout/Header'
import { ProfileSwitcher } from './components/layout/ProfileSwitcher'
import { NavigationProvider } from './context/NavigationContext'
import { ToastProvider } from './context/ToastContext'
import { profileOrder, profiles } from './profiles'

function App() {
  const [profileId, setProfileId] = useState('aluno')
  const [activeTab, setActiveTab] = useState(profiles.aluno.defaultTab)

  const profile = profiles[profileId]
  const page = profile.pages[activeTab] ?? profile.pages[profile.defaultTab]
  const { Component } = page

  function selectProfile(id) {
    setProfileId(id)
    setActiveTab(profiles[id].defaultTab)
  }

  function selectTab(id) {
    if (profile.pages[id]) setActiveTab(id)
  }

  return (
    <ToastProvider>
      <NavigationProvider navigate={selectTab}>
        <AppShell>
          <Header
            title={page.title}
            subtitle={page.subtitle}
            actionSlot={
              profileId === 'aluno' &&
              activeTab === 'home' && (
                <button
                  type="button"
                  aria-label="Check-in de humor"
                  onClick={() => setActiveTab('humor')}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lilac text-lg"
                >
                  🙂
                </button>
              )
            }
            avatarSlot={
              <ProfileSwitcher
                profiles={profileOrder.map((id) => profiles[id])}
                activeProfileId={profileId}
                avatarLabel={profile.avatarLabel}
                onSelect={selectProfile}
              />
            }
          />
          <Component />
          <BottomNav
            items={profile.navItems}
            activeId={page.navActiveId ?? activeTab}
            onSelect={selectTab}
          />
        </AppShell>
      </NavigationProvider>
    </ToastProvider>
  )
}

export default App
