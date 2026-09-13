import { useContext } from 'react'
import { HumorContext } from './humor-context'

export function useHumor() {
  const context = useContext(HumorContext)
  if (!context) {
    throw new Error('useHumor deve ser usado dentro de um HumorProvider')
  }
  return context
}
