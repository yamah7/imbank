import styles from './LoanAccountCard.module.css'

export interface LoanInfoRow {
  label: string
  value: string
}

interface LoanAccountCardProps {
  title: string
  accountNumber: string
  badge?: string
  sections: LoanInfoRow[][]
}

function LoanAccountCard({ title, accountNumber, badge, sections }: LoanAccountCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.accountNumber}>{accountNumber}</p>
        </div>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <hr className={styles.divider} />

      {sections.map((rows, index) => (
        <div className={styles.section} key={index}>
          {rows.map((row) => (
            <div className={styles.row} key={row.label}>
              <span className={styles.label}>{row.label}</span>
              <span className={styles.value}>{row.value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default LoanAccountCard
