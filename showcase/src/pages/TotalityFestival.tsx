import React, { useState } from 'react'

const c = {
  surface: '#121318',
  'surface-dim': '#121318',
  'surface-bright': '#38393f',
  'surface-container-lowest': '#0d0e13',
  'surface-container-low': '#1a1b21',
  'surface-container': '#1e1f25',
  'surface-container-high': '#292a2f',
  'surface-container-highest': '#34343a',
  'on-surface': '#e3e1e9',
  'on-surface-variant': '#d0c6ab',
  outline: '#999077',
  'outline-variant': '#4d4732',
  'surface-tint': '#e9c400',
  primary: '#fff6df',
  'on-primary': '#3a3000',
  'primary-container': '#ffd700',
  'on-primary-container': '#705e00',
  'primary-fixed': '#ffe16d',
  'primary-fixed-dim': '#e9c400',
  secondary: '#bdf4ff',
  'on-secondary': '#00363d',
  'secondary-container': '#00e3fd',
  'on-secondary-container': '#00616d',
  tertiary: '#fcf3ff',
  'on-tertiary': '#3b2754',
  'tertiary-container': '#e7d1ff',
  'on-tertiary-container': '#6b5586',
  error: '#ffb4ab',
  background: '#121318',
  'on-background': '#e3e1e9',
}

const heading = 'Space Grotesk, Inter, sans-serif'
const body = 'Inter, sans-serif'

const bgGradient = 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(233,196,0,0.18) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 50%, #0d0e13 40%, #0d0e1a 100%)'

const glassCard = (alpha = 0.15): React.CSSProperties => ({
  background: `rgba(52,52,58,${alpha})`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
})

const lineupActs = [
  { name: 'SOLARIS ECHO', time: 'SAT 10:00PM', stage: 'Main Stage', genre: 'Electronic', featured: true },
  { name: 'CORONA BOREALIS', time: 'SAT 8:30PM', stage: 'Main Stage', genre: 'Ambient', featured: false },
  { name: 'UMBRA', time: 'SUN 11:00PM', stage: 'Eclipse Stage', genre: 'Techno', featured: true },
  { name: 'DIAMOND RING', time: 'SAT 6:00PM', stage: 'Eclipse Stage', genre: 'Indie', featured: false },
  { name: 'PENUMBRA', time: 'FRI 9:00PM', stage: 'Void Stage', genre: 'Experimental', featured: false },
]

const tickets = [
  { tier: 'General', price: 149, perks: ['3-day access', 'Camping', 'Shuttle'], color: c.secondary, on: c['on-secondary'] },
  { tier: 'Eclipse VIP', price: 349, perks: ['All General perks', 'VIP lounge', 'Viewing platform', 'Merch pack'], color: c['primary-container'], on: c['on-primary-container'], featured: true },
  { tier: 'Totality', price: 799, perks: ['All VIP perks', 'Backstage access', 'Artist meet & greet', 'Private viewing'], color: c['tertiary-container'], on: c['on-tertiary-container'] },
]

const schedule = [
  { day: 'FRI', events: [
    { time: '4:00PM', act: 'Gates open', stage: '' },
    { time: '7:00PM', act: 'PENUMBRA', stage: 'Void Stage' },
    { time: '9:30PM', act: 'LIMINAL SKY', stage: 'Eclipse Stage' },
  ]},
  { day: 'SAT', events: [
    { time: '2:00PM', act: 'PARTIAL PHASE begins', stage: '— Astronomical event —' },
    { time: '6:00PM', act: 'DIAMOND RING', stage: 'Eclipse Stage' },
    { time: '8:30PM', act: 'CORONA BOREALIS', stage: 'Main Stage' },
    { time: '10:00PM', act: 'SOLARIS ECHO', stage: 'Main Stage' },
  ]},
  { day: 'SUN', events: [
    { time: '1:17PM', act: '🌑 TOTALITY — 4 min 28 sec', stage: '— Solar eclipse —' },
    { time: '9:00PM', act: 'CHROMOSPHERE', stage: 'Main Stage' },
    { time: '11:00PM', act: 'UMBRA', stage: 'Eclipse Stage' },
  ]},
]

export default function TotalityFestival() {
  const [activeDay, setActiveDay] = useState('SAT')
  const [qty, setQty] = useState<Record<string, number>>({ General: 0, 'Eclipse VIP': 0, Totality: 0 })

  const currentSchedule = schedule.find(s => s.day === activeDay)!

  return (
    <div style={{ background: bgGradient, minHeight: '100vh', fontFamily: body, color: c['on-surface'], position: 'relative' }}>

      {/* Decorative glow ring */}
      <div style={{
        position: 'fixed', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233,196,0,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Nav */}
        <nav style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 40px',
          borderBottom: `1px solid ${c['outline-variant']}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🌑</span>
            <span style={{ fontFamily: heading, fontSize: 18, fontWeight: 700, color: c.primary, letterSpacing: '-0.02em' }}>
              TOTALITY
            </span>
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: 14, fontFamily: heading, letterSpacing: '0.1em' }}>
            {['LINEUP', 'SCHEDULE', 'INFO', 'TICKETS'].map(t => (
              <a key={t} href="#" style={{ color: c['on-surface-variant'], textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = c.primary)}
                onMouseLeave={e => (e.currentTarget.style.color = c['on-surface-variant'])}
              >{t}</a>
            ))}
          </div>
          <button style={{
            fontFamily: heading, fontSize: 14, fontWeight: 500,
            letterSpacing: '0.1em',
            background: c.primary, color: c['on-primary'],
            border: 'none', borderRadius: 8, padding: '10px 20px', cursor: 'pointer',
          }}>GET TICKETS</button>
        </nav>

        {/* Hero */}
        <div style={{ padding: '80px 40px 64px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: c['tertiary-container'], color: c['on-tertiary-container'],
            fontFamily: heading, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
            padding: '4px 14px', borderRadius: 9999, marginBottom: 24,
          }}>AUGUST 22–24 · JOSHUA TREE, CA</div>

          <h1 style={{
            fontFamily: heading, fontSize: 72, fontWeight: 700,
            lineHeight: '80px', letterSpacing: '-0.04em',
            color: c.primary,
            textShadow: `0 0 60px rgba(233,196,0,0.25)`,
            marginBottom: 24,
          }}>
            TOTALITY<br />FESTIVAL
          </h1>

          <p style={{ fontSize: 18, color: c['on-surface-variant'], lineHeight: '28px', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            Three days of music, art, and a once-in-a-generation solar eclipse. Witness the diamond ring effect live.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button style={{
              fontFamily: heading, fontSize: 14, fontWeight: 500, letterSpacing: '0.1em',
              background: c.primary, color: c['on-primary'],
              border: 'none', borderRadius: 8, padding: '14px 32px', height: 48, cursor: 'pointer',
              boxShadow: `0 0 32px rgba(233,196,0,0.3)`,
            }}>SECURE YOUR SPOT</button>
            <button style={{
              fontFamily: heading, fontSize: 14, fontWeight: 500, letterSpacing: '0.1em',
              background: 'transparent', color: c.secondary,
              border: `1px solid ${c.secondary}`, borderRadius: 8, padding: '14px 32px', height: 48, cursor: 'pointer',
            }}>VIEW LINEUP</button>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 64px' }}>

          {/* Lineup */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: heading, fontSize: 32, fontWeight: 600, color: c.primary, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Lineup
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {lineupActs.map(act => (
                <div key={act.name} style={{
                  ...glassCard(act.featured ? 0.2 : 0.12),
                  borderRadius: 12,
                  padding: '20px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  ...(act.featured ? { border: `1px solid rgba(233,196,0,0.2)` } : {}),
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(56,57,63,0.4)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px rgba(0,227,253,0.1)`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = `rgba(52,52,58,${act.featured ? 0.2 : 0.12})`
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontFamily: heading, fontSize: act.featured ? 22 : 18, fontWeight: 600, color: act.featured ? c.primary : c['on-surface'], letterSpacing: act.featured ? '-0.02em' : 0, marginBottom: 6 }}>
                        {act.name}
                      </div>
                      <div style={{ fontSize: 13, color: c['on-surface-variant'] }}>{act.time} · {act.stage}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                      <span style={{
                        background: c['tertiary-container'], color: c['on-tertiary-container'],
                        fontFamily: heading, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
                        padding: '2px 8px', borderRadius: 9999,
                      }}>{act.genre}</span>
                      {act.featured && <span style={{
                        background: c['primary-container'], color: c['on-primary-container'],
                        fontFamily: heading, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
                        padding: '2px 8px', borderRadius: 9999,
                      }}>HEADLINER</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: heading, fontSize: 32, fontWeight: 600, color: c.primary, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Schedule
            </h2>
            {/* Day tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              {schedule.map(s => (
                <button key={s.day} onClick={() => setActiveDay(s.day)} style={{
                  fontFamily: heading, fontSize: 14, fontWeight: 500, letterSpacing: '0.1em',
                  background: activeDay === s.day ? c.primary : 'transparent',
                  color: activeDay === s.day ? c['on-primary'] : c['on-surface-variant'],
                  border: `1px solid ${activeDay === s.day ? 'transparent' : c['outline-variant']}`,
                  borderRadius: 8, padding: '8px 20px', cursor: 'pointer',
                  transition: 'all 0.15s',
                }}>
                  {s.day}
                </button>
              ))}
            </div>
            <div style={{ ...glassCard(0.15), borderRadius: 16, overflow: 'hidden' }}>
              {currentSchedule.events.map((ev, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '16px 24px',
                  borderBottom: i < currentSchedule.events.length - 1 ? `1px solid ${c['outline-variant']}` : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = c['surface-container-high'])}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{ fontFamily: heading, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', color: c['on-surface-variant'], width: 70, flexShrink: 0 }}>{ev.time}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: heading, fontSize: 15, fontWeight: 600, color: ev.act.startsWith('🌑') ? c.primary : c['on-surface'] }}>
                      {ev.act}
                    </div>
                    {ev.stage && <div style={{ fontSize: 12, color: c['on-surface-variant'], marginTop: 2 }}>{ev.stage}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tickets */}
          <section>
            <h2 style={{ fontFamily: heading, fontSize: 32, fontWeight: 600, color: c.primary, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Tickets
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {tickets.map(t => (
                <div key={t.tier} style={{
                  ...glassCard(t.featured ? 0.2 : 0.12),
                  borderRadius: 12,
                  padding: 24,
                  ...(t.featured ? { border: `1px solid rgba(233,196,0,0.25)`, boxShadow: `0 0 40px rgba(233,196,0,0.1)` } : {}),
                  display: 'flex', flexDirection: 'column', gap: 0,
                }}>
                  <div style={{ fontFamily: heading, fontSize: 14, fontWeight: 500, letterSpacing: '0.1em', color: c['on-surface-variant'], marginBottom: 8 }}>
                    {t.tier.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: heading, fontSize: 36, fontWeight: 700, color: t.featured ? c.primary : c['on-surface'], letterSpacing: '-0.02em', marginBottom: 20 }}>
                    ${t.price}
                  </div>
                  <ul style={{ listStyle: 'none', marginBottom: 24, flex: 1 }}>
                    {t.perks.map(p => (
                      <li key={p} style={{ fontSize: 13, color: c['on-surface-variant'], padding: '4px 0', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: c['primary-fixed-dim'] }}>✦</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <button onClick={() => setQty(q => ({ ...q, [t.tier]: Math.max(0, q[t.tier] - 1) }))} style={{
                      width: 32, height: 32, borderRadius: 8, border: `1px solid ${c['outline-variant']}`,
                      background: 'transparent', color: c['on-surface'], fontSize: 16, cursor: 'pointer', fontFamily: heading,
                    }}>−</button>
                    <span style={{ fontFamily: heading, fontSize: 15, color: c['on-surface'], width: 24, textAlign: 'center' }}>{qty[t.tier]}</span>
                    <button onClick={() => setQty(q => ({ ...q, [t.tier]: q[t.tier] + 1 }))} style={{
                      width: 32, height: 32, borderRadius: 8, border: `1px solid ${c['outline-variant']}`,
                      background: 'transparent', color: c['on-surface'], fontSize: 16, cursor: 'pointer', fontFamily: heading,
                    }}>+</button>
                  </div>
                  <button style={{
                    fontFamily: heading, fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
                    background: t.featured ? c.primary : 'transparent',
                    color: t.featured ? c['on-primary'] : c.secondary,
                    border: `1px solid ${t.featured ? 'transparent' : c.secondary}`,
                    borderRadius: 8, padding: '12px 0', cursor: 'pointer', width: '100%',
                    ...(t.featured ? { boxShadow: `0 0 20px rgba(233,196,0,0.2)` } : {}),
                  }}>
                    {qty[t.tier] > 0 ? `ADD ${qty[t.tier]} TO CART` : 'SELECT'}
                  </button>
                </div>
              ))}
            </div>

            {/* Cart summary */}
            {Object.values(qty).some(v => v > 0) && (
              <div style={{
                ...glassCard(0.15),
                borderRadius: 12, padding: '20px 24px',
                marginTop: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ fontFamily: heading, color: c['on-surface-variant'], fontSize: 14 }}>
                  {tickets.filter(t => qty[t.tier] > 0).map(t => `${qty[t.tier]}× ${t.tier}`).join(', ')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ fontFamily: heading, fontSize: 20, fontWeight: 700, color: c.primary }}>
                    ${tickets.reduce((sum, t) => sum + t.price * qty[t.tier], 0)}
                  </div>
                  <button style={{
                    fontFamily: heading, fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
                    background: c.primary, color: c['on-primary'],
                    border: 'none', borderRadius: 8, padding: '12px 24px', cursor: 'pointer',
                  }}>CHECKOUT</button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
