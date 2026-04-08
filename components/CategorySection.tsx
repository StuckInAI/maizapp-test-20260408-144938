'use client';
import { useRouter } from 'next/navigation';

const categories = [
  { icon: '🍕', label: 'Pizza', color: '#ff6b6b' },
  { icon: '🍣', label: 'Sushi', color: '#4ecdc4' },
  { icon: '🍔', label: 'Burgers', color: '#ffe66d' },
  { icon: '🍛', label: 'Indian', color: '#ff8c42' },
  { icon: '🌮', label: 'Mexican', color: '#a8e6cf' },
  { icon: '🍝', label: 'Italian', color: '#ff6b9d' },
  { icon: '🥗', label: 'Salads', color: '#c3f0ca' },
  { icon: '☕', label: 'Brunch', color: '#b8c0ff' },
  { icon: '🍜', label: 'Asian', color: '#ffd93d' },
  { icon: '🥩', label: 'BBQ', color: '#ff4757' },
];

export default function CategorySection() {
  const router = useRouter();

  return (
    <section style={{ padding: '52px 0 36px', background: 'white' }}>
      <div className="container">
        <div style={{ marginBottom: 28 }}>
          <h2 className="section-title">Browse by Cuisine</h2>
          <p className="section-subtitle">Find your favorite type of food</p>
        </div>
        <div style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          paddingBottom: 8,
        }} className="scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.label}
              onClick={() => router.push('/restaurant/1')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                minWidth: 90,
                padding: '16px 12px',
                background: 'var(--background)',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(232,87,42,0.05)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--background)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: cat.color + '22',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
              }}>
                {cat.icon}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
