'use client';
import Link from 'next/link';

const trendingDishes = [
  { id: 1, name: 'Truffle Risotto', restaurant: 'La Piazza', price: '$28', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&q=80', emoji: '🍚' },
  { id: 2, name: 'Dragon Roll', restaurant: 'Sakura Garden', price: '$22', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=300&q=80', emoji: '🍱' },
  { id: 3, name: 'Smash Burger', restaurant: 'The Burger Lab', price: '$16', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80', emoji: '🍔' },
  { id: 4, name: 'Chicken Tikka', restaurant: 'Spice Route', price: '$19', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80', emoji: '🍗' },
  { id: 5, name: 'Eggs Benedict', restaurant: 'Morning Glory', price: '$15', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300&q=80', emoji: '🥚' },
  { id: 6, name: 'Fish Tacos', restaurant: 'Taco Fiesta', price: '$13', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80', emoji: '🌮' },
];

export default function TrendingSection() {
  return (
    <section style={{ padding: '52px 0', background: 'var(--background)' }}>
      <div className="container">
        <div className="flex-between" style={{ marginBottom: 28 }}>
          <div>
            <h2 className="section-title">Trending Dishes</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>What food lovers are ordering right now</p>
          </div>
          <button style={{
            background: 'transparent',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-full)',
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}>View All →</button>
        </div>

        <div style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          paddingBottom: 8,
        }} className="scrollbar-hide">
          {trendingDishes.map(dish => (
            <Link
              key={dish.id}
              href="/restaurant/1"
              style={{
                minWidth: 200,
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                display: 'block',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ height: 130, overflow: 'hidden', position: 'relative' }}>
                <img src={dish.image} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'white',
                  borderRadius: 'var(--radius-full)',
                  width: 32, height: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, boxShadow: 'var(--shadow-sm)',
                }}>
                  {dish.emoji}
                </div>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{dish.name}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{dish.restaurant}</p>
                <div className="flex-between">
                  <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>{dish.price}</span>
                  <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>🔥 Trending</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
