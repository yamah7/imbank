import type { ReactNode } from 'react'
import styles from './List.module.css'

interface ListProps {
  children: ReactNode
}

function List({ children }: ListProps) {
  return <div className={styles.list}>{children}</div>
}

interface ListItemProps {
  leading?: ReactNode
  title: ReactNode
  description?: ReactNode
  trailing?: ReactNode
  onClick?: () => void
}

function ListItem({ leading, title, description, trailing, onClick }: ListItemProps) {
  const Tag = onClick ? 'button' : 'div'

  return (
    <Tag className={styles.item} onClick={onClick} type={onClick ? 'button' : undefined}>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </Tag>
  )
}

List.Item = ListItem

export default List
