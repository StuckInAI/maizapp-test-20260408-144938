'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push('/restaurant/1');
    }
  };

  const popularSearches = ['Pizza', 'Sushi', 'Burgers', 'Indian', 'Brunch', 'Italian'];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      padding: '80px 0 100px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(232,87,42,0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 200, height: 200,
        background: 'radial-gradient(circle, rgba(255,209,102,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(232,87,42,0.15)',
            border: '1px solid rgba(232,87,42,0.3)',
            borderRadius: 'var(--radius-full)',
            padding: '6px 16px',
            marginBottom: 24,
          }}>
            <span style={{ fontSize: 14 }}>🔥</span>
            <span style={{ color: '#ff9f7a', fontSize: 13, fontWeight: 600 }}>500+ restaurants near you</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: 20,
            letterSpacing: '-1px',
          }}>
            Discover & Order
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, var(--primary-light), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Amazing Food
            </span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 36,
            lineHeight: 1.6,
          }}>
            Find the best restaurants, order delicious meals, and
            reserve tables — all in one place.
          </p>

          <form onSubmit={handleSearch} style={{ marginBottom: 24 }}>
            <div style={{
              display: 'flex',
              background: 'white',
              borderRadius: 'var(--radius-full)',
              padding: '6px 6px 6px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              maxWidth: 620,
              margin: '0 auto',
            }}>
              <span style={{ fontSize: 18, marginRight: 12, display: 'flex', alignItems: 'center' }}>🔍</span>
              <input
                type="text"
                placeholder="Search restaurants, cuisines, dishes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: 16,
                  color: 'var(--text-primary)',
                  background: 'transparent',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: '12px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Search
              </button>
            </div>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Popular:</span>
            {popularSearches.map(term => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--radius-full)',
                  padding: '5px 14px',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,87,42,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              >
                {term}
              </button>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 48,
            marginTop: 48,
            flexWrap: 'wrap',
          }}>
            {[['500+', 'Restaurants'], ['50K+', 'Happy Customers'], ['4.8★', 'Average Rating']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>{num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
