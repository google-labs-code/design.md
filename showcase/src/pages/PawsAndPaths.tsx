const c = {
  surface: '#f9f9ff',
  'surface-dim': '#d3daea',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f0f3ff',
  'surface-container': '#e7eefe',
  'surface-container-high': '#e2e8f8',
  'surface-container-highest': '#dce2f3',
  'on-surface': '#151c27',
  'on-surface-variant': '#534434',
  outline: '#867461',
  'outline-variant': '#d8c3ad',
  primary: '#855300',
  'on-primary': '#ffffff',
  'primary-container': '#f59e0b',
  'on-primary-container': '#613b00',
  'inverse-primary': '#ffb95f',
  secondary: '#0058be',
  'on-secondary': '#ffffff',
  'secondary-container': '#2170e4',
  'on-secondary-container': '#fefcff',
  tertiary: '#00658b',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#1abdff',
  'on-tertiary-container': '#004966',
  error: '#ba1a1a',
  'on-error': '#ffffff',
  'error-container': '#ffdad6',
  'on-error-container': '#93000a',
  background: '#f9f9ff',
  'on-background': '#151c27',
}

const font = 'Plus Jakarta Sans, sans-serif'

const walkers = [
  { name: 'Jordan Mills', rating: 4.9, walks: 312, avatar: '🧑', available: true, badge: 'Top Rated' },
  { name: 'Priya Sharma', rating: 4.8, walks: 204, avatar: '👩', available: true, badge: 'Certified' },
  { name: 'Sam O\'Brien', rating: 4.7, walks: 88, avatar: '🧔', available: false, badge: 'New' },
]

const pets = [
  { name: 'Mochi', breed: 'Shiba Inu', age: '3 yrs', status: 'On walk', emoji: '🐕' },
  { name: 'Biscuit', breed: 'Labrador', age: '5 yrs', status: 'At home', emoji: '🐶' },
  { name: 'Luna', breed: 'Husky', age: '2 yrs', status: 'Scheduled', emoji: '🐺' },
]

const stats = [
  { label: 'Total walks', value: '142', icon: '🐾' },
  { label: 'This month', value: '18', icon: '📅' },
  { label: 'Avg duration', value: '38m', icon: '⏱' },
  { label: 'Distance', value: '74km', icon: '📍' },
]

function Btn({ children, variant = 'primary', style }: { children: React.ReactNode, variant?: 'primary' | 'secondary' | 'ghost', style?: React.CSSProperties }) {
  const base: React.CSSProperties = {
    fontFamily: font,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0.01em',
    padding: '10px 20px',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  }
  const vars: Record<string, React.CSSProperties> = {
    primary: { background: c.primary, color: c['on-primary'] },
    secondary: { background: c.secondary, color: c['on-secondary'] },
    ghost: { background: c['surface-container-high'], color: c['on-surface'] },
  }
  return <button style={{ ...base, ...vars[variant], ...style }}>{children}</button>
}

function Badge({ children, color = 'tertiary' }: { children: React.ReactNode, color?: string }) {
  const map: Record<string, [string, string]> = {
    tertiary: [c['tertiary-container'], c['on-tertiary-container']],
    error: [c['error-container'], c['on-error-container']],
    primary: [c['primary-container'], c['on-primary-container']],
  }
  const [bg, fg] = map[color] || map.tertiary
  return (
    <span style={{
      background: bg, color: fg,
      fontSize: 12, fontWeight: 500, lineHeight: '16px',
      padding: '2px 8px', borderRadius: 9999,
      fontFamily: font,
    }}>{children}</span>
  )
}

function Card({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
  return (
    <div style={{
      background: c['surface-container-lowest'],
      borderRadius: 24,
      padding: 24,
      boxShadow: `0 4px 24px rgba(133,83,0,0.06)`,
      ...style,
    }}>{children}</div>
  )
}

function StatCard({ label, value, icon }: { label: string, value: string, icon: string }) {
  return (
    <div style={{
      background: c['secondary-container'],
      color: c['on-secondary-container'],
      borderRadius: 12,
      padding: '16px 20px',
      fontFamily: font,
    }}>
      <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, fontWeight: 500, marginTop: 4, opacity: 0.8 }}>{label}</div>
    </div>
  )
}

import React, { useState } from 'react'

export default function PawsAndPaths() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState<'profile' | 'walkers' | 'bookings'>('profile')

  return (
    <div style={{ background: c.background, minHeight: '100vh', fontFamily: font, color: c['on-surface'] }}>
      {/* Top nav */}
      <nav style={{
        background: c['surface-container-lowest'],
        borderBottom: `1px solid ${c['outline-variant']}`,
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 24 }}>🐾</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: c.primary }}>Paws & Paths</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ghost">Messages</Btn>
          <Btn variant="primary">+ Book a Walk</Btn>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px' }}>
        {/* Hero row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          {/* Profile card */}
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{
                width: 64, height: 64, borderRadius: 9999,
                background: c['primary-container'],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28,
              }}>🧑‍💼</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>Alex Johnson</div>
                <div style={{ fontSize: 14, color: c['on-surface-variant'], marginTop: 2 }}>San Francisco, CA</div>
                <Badge color="tertiary" >Premium Member</Badge>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {stats.map(s => <StatCard key={s.label} {...s} />)}
            </div>
          </Card>

          {/* Pet list */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>My Pets</div>
              <Btn variant="ghost" style={{ padding: '6px 14px', fontSize: 13 }}>+ Add pet</Btn>
            </div>
            {pets.map(pet => (
              <div key={pet.name} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 10px', borderRadius: 12,
                transition: 'background 0.15s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = c['surface-container-high'])}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ fontSize: 32 }}>{pet.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{pet.name}</div>
                  <div style={{ fontSize: 13, color: c['on-surface-variant'] }}>{pet.breed} · {pet.age}</div>
                </div>
                <Badge color={pet.status === 'On walk' ? 'primary' : pet.status === 'Scheduled' ? 'tertiary' : 'error'}>
                  {pet.status}
                </Badge>
              </div>
            ))}
          </Card>
        </div>

        {/* Search + walkers */}
        <Card style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>Find a Walker</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn variant="ghost" style={{ padding: '6px 14px', fontSize: 13 }}>Filter</Btn>
              <Btn variant="ghost" style={{ padding: '6px 14px', fontSize: 13 }}>Map view</Btn>
            </div>
          </div>
          {/* Input */}
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.4, fontSize: 16 }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search walkers by name or area…"
              style={{
                width: '100%',
                background: c['surface-container-low'],
                color: c['on-surface'],
                fontSize: 16,
                fontFamily: font,
                padding: '12px 14px 12px 42px',
                borderRadius: 8,
                border: `1px solid ${c['outline-variant']}`,
                outline: 'none',
              }}
            />
          </div>
          {/* Walker list */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {walkers.filter(w => w.name.toLowerCase().includes(search.toLowerCase())).map(w => (
              <div key={w.name} style={{
                background: c['surface-container-low'],
                borderRadius: 16,
                padding: 16,
                border: `1px solid ${c['outline-variant']}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 9999,
                    background: c['surface-container-highest'],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22,
                  }}>{w.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{w.name}</div>
                    <div style={{ fontSize: 12, color: c['on-surface-variant'] }}>{w.walks} walks</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, color: c['on-surface-variant'] }}>⭐ {w.rating}</span>
                  <Badge color={w.available ? 'tertiary' : 'error'}>{w.available ? 'Available' : 'Busy'}</Badge>
                </div>
                <Badge color="primary">{w.badge}</Badge>
                <div style={{ marginTop: 12 }}>
                  <Btn variant="primary" style={{ width: '100%', justifyContent: 'center', padding: '8px 0', fontSize: 13 }}>
                    Book now
                  </Btn>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Booking form */}
        <Card>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Schedule a Walk</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {['Date', 'Start time', 'Duration', 'Pet'].map(label => (
              <div key={label}>
                <label style={{ fontSize: 12, fontWeight: 600, color: c['on-surface-variant'], display: 'block', marginBottom: 6, letterSpacing: '0.01em' }}>{label}</label>
                <input
                  placeholder={label === 'Duration' ? '30 – 90 min' : label === 'Pet' ? 'Select pet…' : ''}
                  type={label === 'Date' ? 'date' : label === 'Start time' ? 'time' : 'text'}
                  style={{
                    width: '100%',
                    background: c['surface-container-low'],
                    color: c['on-surface'],
                    fontFamily: font,
                    fontSize: 15,
                    padding: '11px 14px',
                    borderRadius: 8,
                    border: `1px solid ${c['outline-variant']}`,
                    outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: c['on-surface-variant'], display: 'block', marginBottom: 6 }}>Special instructions</label>
            <textarea
              placeholder="Any notes for the walker…"
              rows={3}
              style={{
                width: '100%', resize: 'vertical',
                background: c['surface-container-low'],
                color: c['on-surface'],
                fontFamily: font,
                fontSize: 15,
                padding: '11px 14px',
                borderRadius: 8,
                border: `1px solid ${c['outline-variant']}`,
                outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <Btn variant="primary">Confirm booking</Btn>
            <Btn variant="secondary">Save as draft</Btn>
            <Btn variant="ghost">Cancel</Btn>
          </div>
        </Card>
      </div>
    </div>
  )
}
