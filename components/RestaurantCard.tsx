'use client';
import Link from 'next/link';
import { Restaurant } from '@/lib/data';

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="card" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {restaurant.discount && (
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: 'var(--primary)',
            color: 'white',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: 11,
            fontWeight: 700,
          }}>
            {restaurant.discount}
          </div>
        )}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 'var(--radius-full)',
          padding: '4px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          fontWeight: 700,
          boxShadow: 'var(--shadow-sm)',
        }}>
          <span className="star">★</span>
          <span>{restaurant.rating}</span>
        </div>
      </div>

      <div style={{ padding: '16px 16px 18px' }}>
        <div className="flex-between" style={{ marginBottom: 6 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>{restaurant.name}</h3>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>{restaurant.priceRange}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{restaurant.cuisine}</span>
          <span style={{ color: 'var(--border)', fontSize: 10 }}>•</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{restaurant.reviewCount.toLocaleString()} reviews</span>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
          {restaurant.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              padding: '2px 8px',
              fontSize: 11,
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-between" style={{ marginBottom: 14, fontSize: 12 }}>
          <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            🕐 {restaurant.deliveryTime}
          </span>
          <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            🛵 {restaurant.deliveryFee} delivery
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <Link
            href={`/restaurant/${restaurant.id}`}
            style={{
              flex: 1,
              background: 'var(--primary)',
              color: 'white',
              textAlign: 'center',
              padding: '9px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: 13,
              fontWeight: 700,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary)')}
          >
            Order Now
          </Link>
          <Link
            href={`/reservation/${restaurant.id}`}
            style={{
              flex: 1,
              background: 'transparent',
              color: 'var(--primary)',
              textAlign: 'center',
              padding: '9px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: 13,
              fontWeight: 700,
              border: '1.5px solid var(--primary)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
          >
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
}
