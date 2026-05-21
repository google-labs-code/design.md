import React, { useState } from 'react'

const c = {
  surface: '#0b1326',
  'on-surface': '#dae2fd',
  'on-surface-variant': '#c4c7c8',
  primary: '#ffffff',
  'on-primary': '#2f3131',
  'primary-container': '#e2e2e2',
  'on-primary-container': '#636565',
  'primary-fixed-dim': '#c6c6c7',
  secondary: '#adc9eb',
  'on-secondary': '#14324e',
  'secondary-container': '#304b68',
  'on-secondary-container': '#9fbbdd',
  tertiary: '#ffffff',
  'on-tertiary': '#620040',
  'tertiary-container': '#ffd8e7',
  'on-tertiary-container': '#ab3779',
  error: '#ffb4ab',
  background: '#0b1326',
  'on-background': '#dae2fd',
}

const font = 'Inter, sans-serif'

const bgGradient = 'radial-gradient(ellipse at 30% 20%, #7e22ce 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #1e3a8a 0%, transparent 50%), radial-gradient(ellipse at 90% 10%, #db2777 0%, transparent 40%), linear-gradient(135deg, #0b1326 0%, #1e1040 100%)'

const glass = (alpha = 0.1, blur = 20): React.CSSProperties => ({
  background: `rgba(255,255,255,${alpha})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
})

const locations = ['San Francisco', 'New York', 'London', 'Tokyo', 'Sydney']

const hourly = [
  { time: '9AM', temp: 17, icon: '⛅' },
  { time: '12PM', temp: 20, icon: '☀️' },
  { time: '3PM', temp: 22, icon: '🌤' },
  { time: '6PM', temp: 19, icon: '🌥' },
  { time: '9PM', temp: 15, icon: '🌙' },
  { time: '12AM', temp: 13, icon: '🌑' },
]

const weekly = [
  { day: 'Mon', high: 22, low: 14, icon: '☀️' },
  { day: 'Tue', high: 20, low: 13, icon: '⛅' },
  { day: 'Wed', high: 16, low: 11, icon: '🌧' },
  { day: 'Thu', high: 18, low: 12, icon: '🌦' },
  { day: 'Fri', high: 24, low: 15, icon: '☀️' },
  { day: 'Sat', high: 25, low: 16, icon: '☀️' },
  { day: 'Sun', high: 21, low: 14, icon: '🌤' },
]

const metrics = [
  { label: 'HUMIDITY', value: '68%', icon: '💧' },
  { label: 'WIND', value: '14 km/h', icon: '💨' },
  { label: 'UV INDEX', value: '5 · Mod', icon: '🌡' },
  { label: 'PRESSURE', value: '1013 hPa', icon: '🌐' },
  { label: 'VISIBILITY', value: '16 km', icon: '👁' },
  { label: 'DEW POINT', value: '14°C', icon: '🌿' },
]

export default function AtmosphericGlass() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('San Francisco')
  const [unit, setUnit] = useState<'C' | 'F'>('C')

  const toF = (c: number) => Math.round(c * 9 / 5 + 32)
  const display = (v: number) => unit === 'C' ? `${v}°` : `${toF(v)}°`

  return (
    <div style={{
      background: bgGradient,
      minHeight: '100vh',
      fontFamily: font,
      color: c['on-background'],
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
        opacity: 0.6,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'] }}>
            ATMOSPHERIC
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setUnit('C')}
              style={{
                ...glass(unit === 'C' ? 0.2 : 0.05, 10),
                color: c.primary, border: 'none',
                fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em',
                padding: '6px 14px', borderRadius: 24, cursor: 'pointer',
              }}
            >°C</button>
            <button
              onClick={() => setUnit('F')}
              style={{
                ...glass(unit === 'F' ? 0.2 : 0.05, 10),
                color: c.primary, border: '1px solid rgba(255,255,255,0.2)',
                fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em',
                padding: '6px 14px', borderRadius: 24, cursor: 'pointer',
              }}
            >°F</button>
          </div>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 32 }}>
          <span style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', opacity: 0.4, fontSize: 15 }}>🔍</span>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search location…"
            style={{
              width: '100%',
              ...glass(0.1, 20),
              color: c.primary,
              fontFamily: font,
              fontSize: 15,
              padding: '16px 20px 16px 48px',
              borderRadius: 24,
              outline: 'none',
            }}
          />
          {searchQuery && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
              ...glass(0.15, 30),
              borderRadius: 16, overflow: 'hidden', zIndex: 10,
            }}>
              {locations.filter(l => l.toLowerCase().includes(searchQuery.toLowerCase())).map(l => (
                <div
                  key={l}
                  onClick={() => { setSelectedLocation(l); setSearchQuery('') }}
                  style={{
                    padding: '12px 20px', cursor: 'pointer',
                    fontSize: 14, color: c.primary,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, marginBottom: 20 }}>
          {/* Big display */}
          <div style={{ ...glass(0.1, 20), borderRadius: 24, padding: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'], marginBottom: 8 }}>
              {selectedLocation.toUpperCase()}
            </div>
            <div style={{
              fontSize: 84, fontWeight: 700, lineHeight: '90px', letterSpacing: '-0.04em',
              color: c.primary, textShadow: '0 2px 20px rgba(255,255,255,0.15)',
              marginBottom: 8,
            }}>
              {unit === 'C' ? '20°' : '68°'}
            </div>
            <div style={{ fontSize: 18, color: c['on-surface-variant'], marginBottom: 24 }}>
              Partly Cloudy
            </div>
            <div style={{ display: 'flex', gap: 12, fontSize: 13, color: c['on-surface-variant'] }}>
              <span>H: {unit === 'C' ? '24°' : '75°'}</span>
              <span>L: {unit === 'C' ? '13°' : '55°'}</span>
              <span>Feels like {unit === 'C' ? '18°' : '64°'}</span>
            </div>
          </div>

          {/* Weekly */}
          <div style={{ ...glass(0.1, 20), borderRadius: 24, padding: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'], marginBottom: 16 }}>
              7-DAY FORECAST
            </div>
            {weekly.map(d => (
              <div key={d.day} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 10px', borderRadius: 10,
                transition: 'background 0.15s', cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontSize: 13, color: c['on-surface-variant'], width: 36 }}>{d.day}</span>
                <span style={{ fontSize: 18 }}>{d.icon}</span>
                <span style={{ fontSize: 13, color: c.primary }}>{display(d.high)}</span>
                <span style={{ fontSize: 13, color: c['on-surface-variant'] }}>{display(d.low)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly */}
        <div style={{ ...glass(0.08, 20), borderRadius: 20, padding: '20px 24px', marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'], marginBottom: 16 }}>
            HOURLY FORECAST
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {hourly.map(h => (
              <div key={h.time} style={{
                flex: 1, ...glass(0.1, 10), borderRadius: 14,
                padding: '14px 0', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'] }}>{h.time}</span>
                <span style={{ fontSize: 22 }}>{h.icon}</span>
                <span style={{ fontSize: 15, fontWeight: 500, color: c.primary }}>{display(h.temp)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
          {metrics.map(m => (
            <div key={m.label} style={{ ...glass(0.1, 20), borderRadius: 16, padding: '18px 20px' }}>
              <div style={{ fontSize: 18, marginBottom: 8 }}>{m.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: c['on-surface-variant'], marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 18, fontWeight: 500, color: c.primary }}>{m.value}</div>
            </div>
          ))}
        </div>

        {/* Action row */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={{
            ...glass(0.15, 20),
            color: c['on-primary'],
            background: c.primary,
            fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em',
            padding: '14px 28px', borderRadius: 24, cursor: 'pointer', border: 'none',
          }}>
            Set as default
          </button>
          <button style={{
            ...glass(0.05, 20),
            color: c.primary,
            fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em',
            padding: '14px 28px', borderRadius: 24, cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Add to favourites
          </button>
          <button style={{
            ...glass(0.05, 20),
            color: c.primary,
            fontFamily: font, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em',
            padding: '14px 28px', borderRadius: 24, cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
