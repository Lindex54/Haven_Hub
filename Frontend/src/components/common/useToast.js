import { useContext } from 'react'
import ToastContext from './toastContext'

function useToast() {
  const value = useContext(ToastContext)

  if (!value) {
    throw new Error('useToast must be used within ToastProvider')
  }

  return value
}

export default useToast
