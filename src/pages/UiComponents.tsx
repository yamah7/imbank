import { useState } from 'react'
import Heading from '../components/ui/Heading'
import Badge from '../components/ui/Badge'
import List from '../components/ui/List'
import Table, { type TableColumn } from '../components/ui/Table'
import Card from '../components/ui/Card'
import Modal from '../components/ui/Modal'
import Dropdown from '../components/ui/Dropdown'
import Tooltip from '../components/ui/Tooltip'
import { useToast } from '../components/ui/ToastProvider'
import Button from '../components/form/Button'
import LoanAccountCard from '../components/banking/LoanAccountCard'
import forestSlide from '../assets/carousel/slide-4.svg'
import styles from './UiComponents.module.css'

const LOAN_ROWS_A = [
  { label: '신규일자', value: '2025.05.12' },
  { label: '만기일자', value: '2029.12.31' },
  { label: '상환일', value: '2025.06.12' },
  { label: '대출잔액', value: '19,890,000원' },
]

interface Member {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'invited' | 'suspended'
}

const MEMBERS: Member[] = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'Owner', status: 'active' },
  { id: '2', name: 'Alex Kim', email: 'alex@example.com', role: 'Admin', status: 'active' },
  { id: '3', name: 'Sam Park', email: 'sam@example.com', role: 'Member', status: 'invited' },
  { id: '4', name: 'Rin Cho', email: 'rin@example.com', role: 'Member', status: 'suspended' },
]

const STATUS_VARIANT: Record<Member['status'], 'success' | 'warning' | 'danger'> = {
  active: 'success',
  invited: 'warning',
  suspended: 'danger',
}

const columns: TableColumn<Member>[] = [
  { key: 'name', header: 'Name', render: (row) => row.name },
  { key: 'email', header: 'Email', render: (row) => row.email },
  { key: 'role', header: 'Role', render: (row) => row.role },
  {
    key: 'status',
    header: 'Status',
    align: 'right',
    render: (row) => <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>,
  },
]

function Icon({ path }: { path: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={path} />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function KebabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  )
}

const SORT_OPTIONS = ['Newest', 'Oldest', 'Most popular']

function UiComponents() {
  const [infoOpen, setInfoOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Newest')
  const { showToast } = useToast()

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1>UI Components</h1>
        <p>Headings, badges, rounded lists, and tables for everyday layouts.</p>
      </div>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Headings</span>
        <div className={styles.headingStack}>
          <div className={styles.headingRow}>
            <span>xl3</span>
            <Heading size="xl3">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>xl2</span>
            <Heading size="xl2">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>xl</span>
            <Heading size="xl">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>lg</span>
            <Heading size="lg">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>md</span>
            <Heading size="md">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>sm</span>
            <Heading size="sm">The quick brown fox</Heading>
          </div>
          <div className={styles.headingRow}>
            <span>xs</span>
            <Heading size="xs">The quick brown fox</Heading>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Badges</span>
        <div className={styles.badgeRow}>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="danger">Suspended</Badge>
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Rounded list</span>
        <List>
          <List.Item
            leading={<Icon path="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />}
            title="Notifications"
            description="Manage push and email alerts"
            trailing={<ChevronIcon />}
            onClick={() => {}}
          />
          <List.Item
            leading={<Icon path="M12 8v4l3 3M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />}
            title="Billing history"
            description="View past invoices and receipts"
            trailing={<ChevronIcon />}
            onClick={() => {}}
          />
          <List.Item
            leading={<Icon path="M4 4h16v16H4z M4 9h16 M9 4v16" />}
            title="Workspace"
            description="3 projects · 12 members"
            trailing={<Badge variant="accent">Pro</Badge>}
          />
        </List>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Table</span>
        <Table columns={columns} data={MEMBERS} keyField={(row) => row.id} />
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Cards</span>
        <div className={styles.cardGrid}>
          <Card interactive>
            <Card.Media src={forestSlide} alt="Forest trail" />
            <Card.Body>
              <Card.Title>Weekend hiking guide</Card.Title>
              <Card.Description>Five trails worth the early alarm, ranked by view-to-effort ratio.</Card.Description>
            </Card.Body>
            <Card.Footer>
              <span className={styles.cardMeta}>By Rin Cho · Jul 3</span>
              <Badge variant="accent">Travel</Badge>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Body>
              <span className={styles.cardEyebrow}>Monthly active users</span>
              <Heading as="h3" size="xl2">
                24,801
              </Heading>
              <Badge variant="success">+12.4% vs last month</Badge>
            </Card.Body>
          </Card>

          <Card interactive>
            <Card.Header>
              <Card.Title>Pro plan</Card.Title>
              <Badge variant="accent">Popular</Badge>
            </Card.Header>
            <Card.Body>
              <Card.Description>Unlimited projects, priority support, and advanced analytics.</Card.Description>
            </Card.Body>
            <Card.Footer>
              <Heading as="h4" size="lg">
                $12/mo
              </Heading>
              <Button variant="primary">Upgrade</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Loan account card</span>
        <div className={styles.stack}>
          <LoanAccountCard
            title="IM직장인간편신용대출(통장)"
            accountNumber="00000-00000-00000"
            badge="레이블"
            sections={[LOAN_ROWS_A]}
          />
          <LoanAccountCard
            title="IM직장인간편신용대출(통장)"
            accountNumber="00000-00000-00000"
            sections={[LOAN_ROWS_A, LOAN_ROWS_A]}
          />
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Dropdown</span>
        <div className={styles.buttonRow}>
          <Dropdown
            label={`Sort: ${sortBy}`}
            items={SORT_OPTIONS.map((option) => ({
              label: option,
              onClick: () => setSortBy(option),
              icon: option === sortBy ? <CheckIcon /> : undefined,
            }))}
          />
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
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Tooltip</span>
        <div className={styles.buttonRow}>
          <Tooltip content="Shown above the trigger" placement="top">
            <Button variant="ghost">Top</Button>
          </Tooltip>
          <Tooltip content="Shown below the trigger" placement="bottom">
            <Button variant="ghost">Bottom</Button>
          </Tooltip>
          <Tooltip content="Shown to the left" placement="left">
            <Button variant="ghost">Left</Button>
          </Tooltip>
          <Tooltip content="Shown to the right" placement="right">
            <Button variant="ghost">Right</Button>
          </Tooltip>
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Toast</span>
        <div className={styles.buttonRow}>
          <Button
            variant="secondary"
            onClick={() =>
              showToast({ variant: 'success', title: '완료', description: '요청하신 작업이 정상적으로 처리되었습니다.' })
            }
          >
            완료
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              showToast({ variant: 'error', title: '실패', description: '요청을 처리하지 못했습니다. 다시 시도해 주세요.' })
            }
          >
            실패
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              showToast({ variant: 'info', title: '정보', description: '새로운 업데이트를 확인할 수 있습니다.' })
            }
          >
            정보
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              showToast({ variant: 'warning', title: '주의', description: '입력하신 정보를 다시 한 번 확인해 주세요.' })
            }
          >
            주의
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Modal</span>
        <div className={styles.buttonRow}>
          <Button variant="secondary" onClick={() => setInfoOpen(true)}>
            Open info modal
          </Button>
          <Button variant="danger" onClick={() => setConfirmOpen(true)}>
            Delete workspace
          </Button>
        </div>
      </section>

      <Modal open={infoOpen} onClose={() => setInfoOpen(false)} title="What's new">
        <p>
          This release adds rounded lists, tables, cards, and a loan account card component — all sharing the
          same design tokens.
        </p>
      </Modal>

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Delete workspace"
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setConfirmOpen(false)}>
              Delete
            </Button>
          </>
        }
      >
        <p>This will permanently delete the workspace and all its projects. This action cannot be undone.</p>
      </Modal>
    </div>
  )
}

export default UiComponents
