import type { Meta, StoryObj } from '@storybook/react-vite'
import Badge from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'accent', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = { args: { variant: 'neutral', children: 'Neutral' } }
export const Accent: Story = { args: { variant: 'accent', children: 'Accent' } }
export const Success: Story = { args: { variant: 'success', children: 'Active' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Pending' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Suspended' } }
