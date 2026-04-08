import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#1a1a2e',
      color: 'rgba(255,255,255,0.7)',
      padding: '60px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 24 }}>🌽</span>
              <span style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Maiz</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Discover great restaurants, order delicious food, and reserve tables — all in one place.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['📘', '🐦', '📸', '▶️'].map((icon, i) => (
                <button key={i} style={{
                  width: 36, height: 36,
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: 16,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,87,42,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Explore</h4>
            {['Discover Restaurants', 'Deals & Offers', 'Cuisines', 'Trending', 'Most Reviewed'].map(item => (
              <Link key={item} href="/" style={{ display: 'block', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {item}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Services</h4>
            {['Food Delivery', 'Table Reservation', 'Dine-in', 'Pickup', 'Catering'].map(item => (
              <Link key={item} href="/" style={{ display: 'block', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {item}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Support</h4>
            {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <Link key={item} href="/" style={{ display: 'block', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 13,
        }}>
          <span>© 2024 Maiz. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <span>🌍 English</span>
            <span>💳 USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
