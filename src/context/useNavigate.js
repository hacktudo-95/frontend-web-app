import { useContext } from 'react'
import { NavigationContext } from './navigation-context'

export function useNavigate() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigate deve ser usado dentro de um NavigationProvider')
  }
  return context
}
