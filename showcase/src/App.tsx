import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import PawsAndPaths from './pages/PawsAndPaths'
import AtmosphericGlass from './pages/AtmosphericGlass'
import TotalityFestival from './pages/TotalityFestival'

const themes = [
  { path: '/', label: 'Paws & Paths', sub: 'Pet services · Material 3' },
  { path: '/atmospheric-glass', label: 'Atmospheric Glass', sub: 'Weather app · Glassmorphism' },
  { path: '/totality-festival', label: 'Totality Festival', sub: 'Event brand · Cosmic premium' },
]

export default function App() {
  const { pathname } = useLocation()

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'Inter, sans-serif', background: '#111' }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        flexShrink: 0,
        background: '#0e0e0e',
        borderRight: '1px solid #222',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
      }}>
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #222' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase', marginBottom: 6 }}>design.md</div>
          <div style={{ fontSize: 13, color: '#888' }}>Showcase</div>
        </div>
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {themes.map(t => (
            <NavLink
              key={t.path}
              to={t.path}
              end
              style={({ isActive }) => ({
                display: 'block',
                padding: '10px 20px',
                textDecoration: 'none',
                background: isActive ? '#1a1a1a' : 'transparent',
                borderLeft: isActive ? '2px solid #fff' : '2px solid transparent',
                transition: 'all 0.15s',
              })}
            >
              <div style={{ fontSize: 13, color: pathname === t.path ? '#fff' : '#999', fontWeight: 500, marginBottom: 2 }}>{t.label}</div>
              <div style={{ fontSize: 11, color: '#555' }}>{t.sub}</div>
            </NavLink>
          ))}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #222' }}>
          <div style={{ fontSize: 11, color: '#444' }}>v0.1.1 · Apache 2.0</div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<PawsAndPaths />} />
          <Route path="/atmospheric-glass" element={<AtmosphericGlass />} />
          <Route path="/totality-festival" element={<TotalityFestival />} />
        </Routes>
      </main>
    </div>
  )
}
