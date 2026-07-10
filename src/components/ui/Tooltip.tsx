import { cloneElement, useEffect, useId, useRef, useState, type ReactElement, type ReactNode } from 'react'
import styles from './Tooltip.module.css'

type Placement = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  content: ReactNode
  placement?: Placement
  delay?: number
  children: ReactElement<{ 'aria-describedby'?: string }>
}

function Tooltip({ content, placement = 'top', delay = 200, children }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tooltipId = useId()

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setVisible(true), delay)
  }

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') hide()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible])

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    },
    [],
  )

  return (
    <span className={styles.wrapper} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {cloneElement(children, { 'aria-describedby': visible ? tooltipId : undefined })}
      {visible && (
        <span role="tooltip" id={tooltipId} className={`${styles.tooltip} ${styles[placement]}`}>
          {content}
          <span className={styles.arrow} />
        </span>
      )}
    </span>
  )
}

export default Tooltip
