import type { Meta, StoryObj } from '@storybook/react-vite'
import Checkbox from './Checkbox'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'I agree to the Terms of Service',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}
