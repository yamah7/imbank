import type { Meta, StoryObj } from '@storybook/react-vite'
import Textarea from './Textarea'

const meta = {
  title: 'Form/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Bio', placeholder: 'Tell us a little about yourself' },
}

export const WithHint: Story = {
  args: { label: 'Bio', placeholder: 'Tell us a little about yourself', hint: '0/160' },
}
