import { useId, type TextareaHTMLAttributes } from 'react'
import fieldStyles from './Field.module.css'
import styles from './Textarea.module.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  hint?: string
}

function Textarea({ label, hint, id, ...props }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId

  return (
    <div className={fieldStyles.field}>
      <label className={fieldStyles.label} htmlFor={textareaId}>
        {label}
      </label>
      <textarea id={textareaId} className={`${fieldStyles.control} ${styles.textarea}`} {...props} />
      {hint && <span className={fieldStyles.hint}>{hint}</span>}
    </div>
  )
}

export default Textarea
