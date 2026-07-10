import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const variantClass = styles[variant]
  const combined = className ? `${styles.button} ${variantClass} ${className}` : `${styles.button} ${variantClass}`

  return <button type="button" className={combined} {...props} />
}

export default Button
