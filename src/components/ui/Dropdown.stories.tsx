import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Dropdown from './Dropdown'

function KebabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  )
}

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Sort', items: [] },
  render: () => {
    const [sortBy, setSortBy] = useState('Newest')
    const options = ['Newest', 'Oldest', 'Most popular']
    return (
      <Dropdown
        label={`Sort: ${sortBy}`}
        items={options.map((option) => ({ label: option, onClick: () => setSortBy(option) }))}
      />
    )
  },
}

export const IconVariant: Story = {
  args: { label: 'Actions', items: [] },
  render: () => (
    <Dropdown
      label={<KebabIcon />}
      variant="icon"
      align="right"
      items={[
        { label: 'Edit', onClick: () => {} },
        { label: 'Duplicate', onClick: () => {} },
        { separator: true },
        { label: 'Delete', danger: true, onClick: () => {} },
      ]}
    />
  ),
}
