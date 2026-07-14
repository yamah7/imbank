import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import RadioGroup from './RadioGroup'

const meta = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  args: {
    label: 'Plan',
    name: 'plan',
    options: [
      { value: 'free', label: 'Free', description: 'For personal projects' },
      { value: 'pro', label: 'Pro', description: 'For growing teams — $12/mo' },
      { value: 'team', label: 'Team', description: 'For organizations — $29/mo' },
    ],
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 'pro', onChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
}
