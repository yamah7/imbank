import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Modal from './Modal'
import Button from '../form/Button'

const meta = {
  title: 'UI/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: { open: false, onClose: () => {}, children: null },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open info modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} title="What's new">
          <p>This release adds rounded lists, tables, cards, and a loan account card component.</p>
        </Modal>
      </>
    )
  },
}

export const ConfirmDelete: Story = {
  args: { open: false, onClose: () => {}, children: null },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete workspace
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete workspace"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </>
          }
        >
          <p>This will permanently delete the workspace and all its projects. This action cannot be undone.</p>
        </Modal>
      </>
    )
  },
}
