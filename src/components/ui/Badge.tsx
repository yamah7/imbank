import type { ReactNode } from 'react'
import styles from './Badge.module.css'

type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'danger'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
}

function Badge({ variant = 'neutral', children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
}

export default Badge
