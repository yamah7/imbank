import { useId } from 'react'
import fieldStyles from './Field.module.css'
import styles from './RadioGroup.module.css'

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface RadioGroupProps {
  label: string
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
}

function RadioGroup({ label, name, options, value, onChange }: RadioGroupProps) {
  const groupId = useId()

  return (
    <div className={fieldStyles.field} role="radiogroup" aria-labelledby={groupId}>
      <span className={fieldStyles.label} id={groupId}>
        {label}
      </span>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.option}>
            <span className={styles.radio}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className={styles.input}
              />
              <span className={styles.dot} />
            </span>
            <span className={styles.text}>
              <span className={styles.optionLabel}>{option.label}</span>
              {option.description && <span className={styles.optionDescription}>{option.description}</span>}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
