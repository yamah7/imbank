import { useId, type InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Checkbox({ label, id, ...props }: CheckboxProps) {
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <label className={styles.row} htmlFor={checkboxId}>
      <span className={styles.box}>
        <input id={checkboxId} type="checkbox" className={styles.input} {...props} />
        <svg className={styles.check} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}

export default Checkbox
