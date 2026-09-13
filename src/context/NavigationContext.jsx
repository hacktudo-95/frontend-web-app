import { NavigationContext } from './navigation-context'

export function NavigationProvider({ navigate, children }) {
  return (
    <NavigationContext.Provider value={navigate}>{children}</NavigationContext.Provider>
  )
}
