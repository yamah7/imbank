import { useId, type SelectHTMLAttributes } from 'react'
import fieldStyles from './Field.module.css'
import styles from './Select.module.css'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  hint?: string
  options: SelectOption[]
}

function Select({ label, hint, id, options, ...props }: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <div className={fieldStyles.field}>
      <label className={fieldStyles.label} htmlFor={selectId}>
        {label}
      </label>
      <div className={styles.wrapper}>
        <select id={selectId} className={`${fieldStyles.control} ${styles.select}`} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg className={styles.chevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {hint && <span className={fieldStyles.hint}>{hint}</span>}
    </div>
  )
}

export default Select
