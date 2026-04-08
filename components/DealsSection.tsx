'use client';
import Link from 'next/link';

const deals = [
  {
    id: '1',
    title: 'Free Delivery Weekend',
    subtitle: 'On orders over $30',
    description: 'Enjoy free delivery from hundreds of restaurants this weekend only!',
    badge: 'Limited Time',
    gradient: 'linear-gradient(135deg, #e8572a, #ff9a44)',
    emoji: '🛵',
    cta: 'Order Now',
  },
  {
    id: '2',
    title: '20% Off First Order',
    subtitle: 'New customer exclusive',
    description: 'Welcome to Maiz! Enjoy 20% off your first order at any restaurant.',
    badge: 'New Users',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    emoji: '🎉',
    cta: 'Claim Deal',
  },
  {
    id: '3',
    title: 'Reserve & Save',
    subtitle: 'Table reservation perks',
    description: 'Book a table and get exclusive discounts on your dining experience.',
    badge: 'Dine-in',
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    emoji: '🍽️',
    cta: 'Reserve Now',
  },
];

export default function DealsSection() {
  return (
    <section style={{ padding: '52px 0', background: 'var(--background)' }}>
      <div className="container">
        <div style={{ marginBottom: 28 }}>
          <h2 className="section-title">Deals & Offers</h2>
          <p className="section-subtitle">Exclusive offers just for you</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {deals.map(deal => (
            <div
              key={deal.id}
              style={{
                background: deal.gradient,
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div style={{
                position: 'absolute', top: -20, right: -20,
                fontSize: 80, opacity: 0.15,
              }}>
                {deal.emoji}
              </div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.25)',
                borderRadius: 'var(--radius-full)',
                padding: '3px 12px',
                fontSize: 11,
                fontWeight: 700,
                color: 'white',
                marginBottom: 14,
                backdropFilter: 'blur(4px)',
              }}>
                {deal.badge}
              </span>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{deal.emoji}</div>
              <h3 style={{ fontSize: 21, fontWeight: 800, color: 'white', marginBottom: 4 }}>{deal.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 8, fontWeight: 600 }}>{deal.subtitle}</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 20, lineHeight: 1.5 }}>{deal.description}</p>
              <Link
                href={deal.id === '3' ? '/reservation/1' : '/restaurant/1'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'white',
                  color: '#333',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 13,
                  fontWeight: 700,
                  transition: 'all 0.2s',
                }}
              >
                {deal.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
