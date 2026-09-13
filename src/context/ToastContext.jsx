import { useCallback, useRef, useState } from 'react'
import { ToastContext } from './toast-context'

let nextId = 0

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timeoutRef = useRef(null)

  const showToast = useCallback((message) => {
    clearTimeout(timeoutRef.current)
    const id = nextId++
    setToast({ id, message })
    timeoutRef.current = setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current))
    }, 3000)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4">
          <div className="pointer-events-auto rounded-xl bg-text-dark px-4 py-3 text-sm text-white shadow-lg">
            {toast.message}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}
