import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
  children: ReactNode
}

function Card({ interactive, className, children, ...props }: CardProps) {
  const combined = [styles.card, interactive && styles.interactive, className].filter(Boolean).join(' ')

  return (
    <div className={combined} {...props}>
      {children}
    </div>
  )
}

function CardMedia(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div className={styles.media}>
      <img {...props} />
    </div>
  )
}

function CardHeader({ children }: { children: ReactNode }) {
  return <div className={styles.header}>{children}</div>
}

function CardBody({ children }: { children: ReactNode }) {
  return <div className={styles.body}>{children}</div>
}

function CardFooter({ children }: { children: ReactNode }) {
  return <div className={styles.footer}>{children}</div>
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className={styles.title}>{children}</h3>
}

function CardDescription({ children }: { children: ReactNode }) {
  return <p className={styles.description}>{children}</p>
}

Card.Media = CardMedia
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Description = CardDescription

export default Card
