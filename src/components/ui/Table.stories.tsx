import type { Meta, StoryObj } from '@storybook/react-vite'
import Table, { type TableColumn } from './Table'
import Badge from './Badge'

interface Member {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'invited' | 'suspended'
}

const MEMBERS: Member[] = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'Owner', status: 'active' },
  { id: '2', name: 'Alex Kim', email: 'alex@example.com', role: 'Admin', status: 'active' },
  { id: '3', name: 'Sam Park', email: 'sam@example.com', role: 'Member', status: 'invited' },
  { id: '4', name: 'Rin Cho', email: 'rin@example.com', role: 'Member', status: 'suspended' },
]

const STATUS_VARIANT: Record<Member['status'], 'success' | 'warning' | 'danger'> = {
  active: 'success',
  invited: 'warning',
  suspended: 'danger',
}

const columns: TableColumn<Member>[] = [
  { key: 'name', header: 'Name', render: (row) => row.name },
  { key: 'email', header: 'Email', render: (row) => row.email },
  { key: 'role', header: 'Role', render: (row) => row.role },
  {
    key: 'status',
    header: 'Status',
    align: 'right',
    render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>,
  },
]

const meta = {
  title: 'UI/Table',
  component: Table<Member>,
} satisfies Meta<typeof Table<Member>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { columns, data: MEMBERS, keyField: (row) => row.id },
}
