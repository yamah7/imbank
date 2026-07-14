import type { Meta, StoryObj } from '@storybook/react-vite'
import LoanAccountCard from './LoanAccountCard'

const ROWS = [
  { label: '신규일자', value: '2025.05.12' },
  { label: '만기일자', value: '2029.12.31' },
  { label: '상환일', value: '2025.06.12' },
  { label: '대출잔액', value: '19,890,000원' },
]

const meta = {
  title: 'Banking/LoanAccountCard',
  component: LoanAccountCard,
  args: {
    title: 'IM직장인간편신용대출(통장)',
    accountNumber: '00000-00000-00000',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoanAccountCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithBadge: Story = {
  args: { badge: '레이블', sections: [ROWS] },
}

export const MultipleSections: Story = {
  args: { sections: [ROWS, ROWS] },
}
