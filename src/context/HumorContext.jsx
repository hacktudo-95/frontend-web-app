import { useState } from 'react'
import { HumorContext } from './humor-context'

export function HumorProvider({ children }) {
  const [humorHoje, setHumorHoje] = useState('bem')

  return (
    <HumorContext.Provider value={{ humorHoje, registrarHumor: setHumorHoje }}>
      {children}
    </HumorContext.Provider>
  )
}
