import { useId, type InputHTMLAttributes } from 'react'
import styles from './Switch.module.css'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  description?: string
}

function Switch({ label, description, id, ...props }: SwitchProps) {
  const generatedId = useId()
  const switchId = id ?? generatedId

  return (
    <label className={styles.row} htmlFor={switchId}>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      <span className={styles.track}>
        <input id={switchId} type="checkbox" className={styles.input} {...props} />
        <span className={styles.thumb} />
      </span>
    </label>
  )
}

export default Switch
