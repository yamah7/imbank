import { useState } from 'react'
import Input from '../components/form/Input'
import Textarea from '../components/form/Textarea'
import Select from '../components/form/Select'
import Checkbox from '../components/form/Checkbox'
import RadioGroup from '../components/form/RadioGroup'
import Switch from '../components/form/Switch'
import Button from '../components/form/Button'
import styles from './FormElements.module.css'

const COUNTRY_OPTIONS = [
  { value: 'kr', label: 'South Korea' },
  { value: 'us', label: 'United States' },
  { value: 'jp', label: 'Japan' },
  { value: 'de', label: 'Germany' },
]

const PLAN_OPTIONS = [
  { value: 'free', label: 'Free', description: 'For personal projects' },
  { value: 'pro', label: 'Pro', description: 'For growing teams — $12/mo' },
  { value: 'team', label: 'Team', description: 'For organizations — $29/mo' },
]

function FormElements() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [country, setCountry] = useState('kr')
  const [plan, setPlan] = useState('pro')
  const [agreed, setAgreed] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1>Form Elements</h1>
        <p>A set of reusable form components with a shared, modern design language.</p>
      </div>

      <form
        className={styles.card}
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className={styles.row}>
          <Input label="Name" placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)} />
          <Input
            label="Email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Textarea
          label="Bio"
          placeholder="Tell us a little about yourself"
          hint={`${bio.length}/160`}
          maxLength={160}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <Select label="Country" options={COUNTRY_OPTIONS} value={country} onChange={(e) => setCountry(e.target.value)} />

        <RadioGroup label="Plan" name="plan" options={PLAN_OPTIONS} value={plan} onChange={setPlan} />

        <hr className={styles.divider} />

        <Switch
          label="Email notifications"
          description="Get notified about account activity"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />

        <Checkbox label="I agree to the Terms of Service" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />

        <div className={styles.actions}>
          <Button type="button" variant="ghost" onClick={() => setSubmitted(false)}>
            Reset
          </Button>
          <Button type="submit" variant="primary" disabled={!agreed}>
            Create account
          </Button>
        </div>
      </form>

      {submitted && (
        <div className={styles.summary}>
          <h2>Submitted values</h2>
          <pre>
            {JSON.stringify(
              { name, email, password: '•'.repeat(password.length), bio, country, plan, agreed, notifications },
              null,
              2,
            )}
          </pre>
        </div>
      )}

      <div className={styles.componentsGrid}>
        <section>
          <h2>Buttons</h2>
          <div className={styles.buttonRow}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FormElements
