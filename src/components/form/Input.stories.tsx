import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from './Input'

const meta = {
  title: 'Form/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: { label: 'Name', placeholder: 'Jane Doe' },
}

export const Email: Story = {
  args: { label: 'Email', type: 'email', placeholder: 'jane@example.com' },
}

export const Password: Story = {
  args: { label: 'Password', type: 'password', placeholder: 'At least 8 characters' },
}

export const WithHint: Story = {
  args: { label: 'Username', placeholder: 'jane', hint: 'Must be unique' },
}
