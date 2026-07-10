import type { ReactNode } from 'react'
import styles from './Table.module.css'

export interface TableColumn<T> {
  key: string
  header: string
  align?: 'left' | 'right' | 'center'
  render: (row: T) => ReactNode
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  keyField: (row: T) => string
}

function Table<T>({ columns, data, keyField }: TableProps<T>) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={styles[`align-${column.align ?? 'left'}`]}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={keyField(row)}>
              {columns.map((column) => (
                <td key={column.key} className={styles[`align-${column.align ?? 'left'}`]}>
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
