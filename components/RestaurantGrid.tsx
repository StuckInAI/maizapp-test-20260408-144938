'use client';
import { restaurants, Restaurant } from '@/lib/data';
import RestaurantCard from './RestaurantCard';

interface Props {
  title: string;
  subtitle: string;
  filter: string;
}

export default function RestaurantGrid({ title, subtitle, filter }: Props) {
  const filtered: Restaurant[] = (() => {
    switch (filter) {
      case 'top': return restaurants.filter(r => r.featured);
      case 'trending': return restaurants.filter(r => r.trending);
      case 'reviewed': return restaurants.filter(r => r.mostReviewed);
      case 'dinner': return restaurants.filter(r => r.dinner);
      case 'brunch': return restaurants.filter(r => r.brunch);
      default: return restaurants;
    }
  })();

  if (filtered.length === 0) return null;

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: 24 }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: 4 }}>{title}</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{subtitle}</p>
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
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          View All →
        </button>
      </div>
      <div className="grid-4">
        {filtered.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
