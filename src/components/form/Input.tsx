import { useId, useState, type InputHTMLAttributes } from 'react'
import fieldStyles from './Field.module.css'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hint?: string
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.3 21.3 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.3 21.3 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function Input({ label, hint, id, type = 'text', ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const isPassword = type === 'password'
  const [visible, setVisible] = useState(false)

  return (
    <div className={fieldStyles.field}>
      <label className={fieldStyles.label} htmlFor={inputId}>
        {label}
      </label>
      <div className={styles.wrapper}>
        <input
          id={inputId}
          type={isPassword ? (visible ? 'text' : 'password') : type}
          className={
            isPassword
              ? `${fieldStyles.control} ${styles.input} ${styles.hasToggle}`
              : `${fieldStyles.control} ${styles.input}`
          }
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            <EyeIcon open={visible} />
          </button>
        )}
      </div>
      {hint && <span className={fieldStyles.hint}>{hint}</span>}
    </div>
  )
}

export default Input
