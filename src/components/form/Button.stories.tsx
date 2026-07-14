import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta = {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
  },
  args: {
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost' },
}

export const Danger: Story = {
  args: { variant: 'danger' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
}
