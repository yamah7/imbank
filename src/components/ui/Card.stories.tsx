import type { Meta, StoryObj } from '@storybook/react-vite'
import Card from './Card'
import Badge from './Badge'
import Button from '../form/Button'

const meta = {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: { children: null },
  render: () => (
    <Card style={{ maxWidth: 320 }}>
      <Card.Body>
        <Card.Title>Monthly active users</Card.Title>
        <Card.Description>24,801 users this month.</Card.Description>
      </Card.Body>
    </Card>
  ),
}

export const WithHeaderAndFooter: Story = {
  args: { children: null },
  render: () => (
    <Card interactive style={{ maxWidth: 320 }}>
      <Card.Header>
        <Card.Title>Pro plan</Card.Title>
        <Badge variant="accent">Popular</Badge>
      </Card.Header>
      <Card.Body>
        <Card.Description>Unlimited projects, priority support, and advanced analytics.</Card.Description>
      </Card.Body>
      <Card.Footer>
        <strong>$12/mo</strong>
        <Button variant="primary">Upgrade</Button>
      </Card.Footer>
    </Card>
  ),
}
