import type { Meta, StoryObj } from '@storybook/react-vite'
import Select from './Select'

const meta = {
  title: 'Form/Select',
  component: Select,
  args: {
    options: [
      { value: 'kr', label: 'South Korea' },
      { value: 'us', label: 'United States' },
      { value: 'jp', label: 'Japan' },
      { value: 'de', label: 'Germany' },
    ],
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Country', defaultValue: 'kr' },
}
