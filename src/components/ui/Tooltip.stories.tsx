import type { Meta, StoryObj } from '@storybook/react-vite'
import Tooltip from './Tooltip'
import Button from '../form/Button'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip content',
    children: <Button variant="ghost">Trigger</Button>,
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  render: () => (
    <Tooltip content="Shown above the trigger" placement="top">
      <Button variant="ghost">Top</Button>
    </Tooltip>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Shown below the trigger" placement="bottom">
      <Button variant="ghost">Bottom</Button>
    </Tooltip>
  ),
}

export const Left: Story = {
  render: () => (
    <Tooltip content="Shown to the left" placement="left">
      <Button variant="ghost">Left</Button>
    </Tooltip>
  ),
}

export const Right: Story = {
  render: () => (
    <Tooltip content="Shown to the right" placement="right">
      <Button variant="ghost">Right</Button>
    </Tooltip>
  ),
}
