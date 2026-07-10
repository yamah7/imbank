import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react'
import styles from './Dropdown.module.css'

export interface DropdownItem {
  label?: ReactNode
  onClick?: () => void
  icon?: ReactNode
  danger?: boolean
  disabled?: boolean
  separator?: boolean
}

interface DropdownProps {
  label: ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
  variant?: 'default' | 'icon'
}

function Dropdown({ label, items, align = 'left', variant = 'default' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const firstItem = menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')
    firstItem?.focus()
  }, [open])

  const focusSibling = (current: HTMLElement, direction: 1 | -1) => {
    const menuItems = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not(:disabled)') ?? [],
    )
    const index = menuItems.indexOf(current as HTMLButtonElement)
    const nextIndex = (index + direction + menuItems.length) % menuItems.length
    menuItems[nextIndex]?.focus()
  }

  const handleItemKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusSibling(e.currentTarget, 1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusSibling(e.currentTarget, -1)
    }
  }

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <button
        type="button"
        ref={triggerRef}
        className={variant === 'icon' ? styles.iconTrigger : styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        {variant === 'default' && (
          <svg className={styles.chevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className={`${styles.menu} ${align === 'right' ? styles.alignRight : styles.alignLeft}`}
          role="menu"
          ref={menuRef}
        >
          {items.map((item, index) =>
            item.separator ? (
              <div key={index} className={styles.separator} role="separator" />
            ) : (
              <button
                key={index}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                className={item.danger ? `${styles.item} ${styles.danger}` : styles.item}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                  triggerRef.current?.focus()
                }}
                onKeyDown={handleItemKeyDown}
              >
                {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                {item.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown
