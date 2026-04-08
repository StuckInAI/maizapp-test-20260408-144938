'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38,
              height: 38,
              background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}>
              🌽
            </div>
            <span style={{
              fontSize: 24,
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.5px',
            }}>
              Maiz
            </span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links">
            <Link href="/" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 15, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Discover
            </Link>
            <Link href="/" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 15, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Deals
            </Link>
            <Link href="/" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 15, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Cuisines
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={{
              background: 'transparent',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 18px',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              Sign In
            </button>
            <button className="btn-primary" style={{ padding: '8px 18px', fontSize: 14 }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
