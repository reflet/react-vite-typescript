import { Routes, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'

function App() {
  const location = useLocation()

  return (
    <div>
      {/* ナビゲーションバー */}
      <nav style={{
        backgroundColor: '#333',
        padding: '15px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '20px'
        }}>
          <Link
            to="/"
            style={{
              padding: '8px 16px',
              backgroundColor: location.pathname === '/' ? '#646cff' : 'transparent',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: location.pathname === '/' ? '600' : '400',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ホーム
          </Link>
          <Link
            to="/lp"
            style={{
              padding: '8px 16px',
              backgroundColor: location.pathname === '/lp' ? '#646cff' : 'transparent',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: location.pathname === '/lp' ? '600' : '400',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            LPページ
          </Link>
          <Link
            to="/contact"
            style={{
              padding: '8px 16px',
              backgroundColor: location.pathname === '/contact' ? '#646cff' : 'transparent',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: location.pathname === '/contact' ? '600' : '400',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            お問い合わせ
          </Link>
        </div>
      </nav>

      {/* ページコンテンツ */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lp" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
