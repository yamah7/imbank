import type { ElementType, ReactNode } from 'react'
import styles from './Heading.module.css'

type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3'
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps {
  as?: HeadingTag
  size?: HeadingSize
  children: ReactNode
  className?: string
}

const DEFAULT_SIZE_BY_TAG: Record<HeadingTag, HeadingSize> = {
  h1: 'xl3',
  h2: 'xl2',
  h3: 'xl',
  h4: 'lg',
  h5: 'md',
  h6: 'sm',
}

function Heading({ as, size, children, className }: HeadingProps) {
  const Tag: ElementType = as ?? 'h2'
  const resolvedSize = size ?? DEFAULT_SIZE_BY_TAG[Tag as HeadingTag]
  const combined = className ? `${styles.heading} ${styles[resolvedSize]} ${className}` : `${styles.heading} ${styles[resolvedSize]}`

  return <Tag className={combined}>{children}</Tag>
}

export default Heading
