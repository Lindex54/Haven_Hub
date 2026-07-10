import { useMemo, useState } from 'react'
import ToastContext from './toastContext'

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const api = useMemo(
    () => ({
      showToast(message, type = 'info') {
        const id = crypto.randomUUID()
        setToasts((current) => [...current, { id, message, type }])

        window.setTimeout(() => {
          setToasts((current) => current.filter((toast) => toast.id !== id))
        }, 2800)
      },
    }),
    [],
  )

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-4 right-4 z-[80] flex w-full max-w-sm flex-col gap-3 px-4"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-card border px-4 py-3 text-sm shadow-card ${
              toast.type === 'success'
                ? 'border-primary/20 bg-surface text-text-main'
                : 'border-lake-blue/20 bg-surface text-text-main'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
