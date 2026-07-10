import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.css'

type ToastVariant = 'success' | 'error' | 'info' | 'warning'

interface ToastOptions {
  variant?: ToastVariant
  title: string
  description?: string
  duration?: number
}

interface ToastItem {
  id: number
  variant: ToastVariant
  title: string
  description?: string
}

interface ToastContextValue {
  showToast: (options: ToastOptions) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

function SuccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-5 5M9.5 9.5l5 5" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="8" r="0.25" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86 1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.72 0Z" />
      <path d="M12 9v4" />
      <circle cx="12" cy="16.5" r="0.25" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const ICONS: Record<ToastVariant, ComponentType> = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon,
}

let idCounter = 0

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const timeouts = useRef(new Map<number, ReturnType<typeof setTimeout>>())

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
    const timeout = timeouts.current.get(id)
    if (timeout) {
      clearTimeout(timeout)
      timeouts.current.delete(id)
    }
  }, [])

  const showToast = useCallback(
    ({ variant = 'info', title, description, duration = 4000 }: ToastOptions) => {
      const id = ++idCounter
      setToasts((prev) => [...prev, { id, variant, title, description }])
      if (duration > 0) {
        timeouts.current.set(
          id,
          setTimeout(() => removeToast(id), duration),
        )
      }
    },
    [removeToast],
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className={styles.container}>
          {toasts.map((toast) => {
            const Icon = ICONS[toast.variant]
            return (
              <div key={toast.id} className={`${styles.toast} ${styles[toast.variant]}`} role="status">
                <span className={styles.icon}>
                  <Icon />
                </span>
                <div className={styles.text}>
                  <p className={styles.title}>{toast.title}</p>
                  {toast.description && <p className={styles.description}>{toast.description}</p>}
                </div>
                <button
                  type="button"
                  className={styles.close}
                  onClick={() => removeToast(toast.id)}
                  aria-label="Dismiss"
                >
                  <CloseIcon />
                </button>
              </div>
            )
          })}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}
