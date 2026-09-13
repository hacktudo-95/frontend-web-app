import { useState } from 'react'
import { AppShell } from './components/layout/AppShell'
import { BottomNav } from './components/layout/BottomNav'
import { Header } from './components/layout/Header'
import { ProfileSwitcher } from './components/layout/ProfileSwitcher'
import { HumorProvider } from './context/HumorContext'
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
      <HumorProvider>
        <NavigationProvider navigate={selectTab}>
          <AppShell>
            <Header
              title={page.title}
              subtitle={page.subtitle}
              avatarSlot={
                <ProfileSwitcher
                  profiles={profileOrder.map((id) => profiles[id])}
                  activeProfileId={profileId}
                  avatarLabel={profile.avatarLabel}
                  onSelect={selectProfile}
                />
              }
            />
            <main className="flex flex-1 flex-col px-6 pb-8">
              <Component />
            </main>
            <BottomNav
              items={profile.navItems}
              activeId={page.navActiveId ?? activeTab}
              onSelect={selectTab}
            />
          </AppShell>
        </NavigationProvider>
      </HumorProvider>
    </ToastProvider>
  )
}

export default App
