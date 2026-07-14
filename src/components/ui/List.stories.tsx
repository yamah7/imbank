import type { Meta, StoryObj } from '@storybook/react-vite'
import List from './List'
import Badge from './Badge'

const meta = {
  title: 'UI/List',
  component: List,
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: null },
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <List>
        <List.Item title="Notifications" description="Manage push and email alerts" onClick={() => {}} />
        <List.Item title="Billing history" description="View past invoices and receipts" onClick={() => {}} />
        <List.Item
          title="Workspace"
          description="3 projects · 12 members"
          trailing={<Badge variant="accent">Pro</Badge>}
        />
      </List>
    </div>
  ),
}
