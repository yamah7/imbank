import type { Meta, StoryObj } from '@storybook/react-vite'
import Switch from './Switch'

const meta = {
  title: 'Form/Switch',
  component: Switch,
  args: {
    label: 'Email notifications',
    description: 'Get notified about account activity',
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}

export const On: Story = {
  args: { defaultChecked: true },
}
