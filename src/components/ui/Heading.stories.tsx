import type { Meta, StoryObj } from '@storybook/react-vite'
import Heading from './Heading'

const meta = {
  title: 'UI/Heading',
  component: Heading,
  args: {
    children: 'The quick brown fox',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3'],
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Xl3: Story = { args: { size: 'xl3' } }
export const Xl2: Story = { args: { size: 'xl2' } }
export const Xl: Story = { args: { size: 'xl' } }
export const Lg: Story = { args: { size: 'lg' } }
export const Md: Story = { args: { size: 'md' } }
export const Sm: Story = { args: { size: 'sm' } }
export const Xs: Story = { args: { size: 'xs' } }
