'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { restaurants, timeSlots } from '@/lib/data';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  id: string;
}

export default function ReservationPage({ id }: Props) {
  const router = useRouter();
  const restaurant = restaurants.find(r => r.id === id) || restaurants[0];
  const [reserved, setReserved] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
  };

  if (reserved) {
    return (
      <div>
        <Navbar />
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 480 }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>🍽️</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Reservation Confirmed!</h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8 }}>
              Your table at <strong>{restaurant.name}</strong> is confirmed.
            </p>
            <div style={{
              background: 'var(--background)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              marginBottom: 28,
              textAlign: 'left',
              fontSize: 14,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: 'var(--text-muted)' }}>Date</span>
                <span style={{ fontWeight: 600 }}>{form.date}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: 'var(--text-muted)' }}>Time</span>
                <span style={{ fontWeight: 600 }}>{form.time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Guests</span>
                <span style={{ fontWeight: 600 }}>{form.guests} people</span>
              </div>
            </div>
            <button
              onClick={() => router.push('/')}
              className="btn-primary"
              style={{ fontSize: 15, padding: '14px 32px' }}
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
          display: 'flex', alignItems: 'flex-end', padding: 24,
        }}>
          <div className="container">
            <h1 style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>Reserve at {restaurant.name}</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 4 }}>{restaurant.address}</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px', minHeight: '50vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Your Details</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[['name', 'Full Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone Number', 'tel']].map(([field, label, type]) => (
                  <div key={field}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>{label}</label>
                    <input
                      required
                      type={type}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                      style={{
                        width: '100%',
                        border: '1.5px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 16px',
                        fontSize: 15,
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Reservation Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Date</label>
                  <input
                    required
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={e => setForm(prev => ({ ...prev, date: e.target.value }))}
                    style={{
                      width: '100%',
                      border: '1.5px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 16px',
                      fontSize: 15,
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Guests</label>
                  <select
                    value={form.guests}
                    onChange={e => setForm(prev => ({ ...prev, guests: e.target.value }))}
                    style={{
                      width: '100%',
                      border: '1.5px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '12px 16px',
                      fontSize: 15,
                      boxSizing: 'border-box',
                      background: 'white',
                    }}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 10 }}>Select Time</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, time: slot }))}
                      style={{
                        padding: '9px 16px',
                        borderRadius: 'var(--radius-full)',
                        border: form.time === slot ? 'none' : '1.5px solid var(--border)',
                        background: form.time === slot ? 'var(--primary)' : 'white',
                        color: form.time === slot ? 'white' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: 13,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Special Requests</h3>
              <textarea
                value={form.specialRequests}
                onChange={e => setForm(prev => ({ ...prev, specialRequests: e.target.value }))}
                placeholder="Any dietary requirements, seating preferences, or special occasions..."
                rows={4}
                style={{
                  width: '100%',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                  fontSize: 15,
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 16 }}
            >
              Confirm Reservation
            </button>
          </form>

          {/* Restaurant Info */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 88 }}>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 16 }} />
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{restaurant.name}</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>{restaurant.cuisine} • {restaurant.priceRange}</p>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span>⭐ {restaurant.rating} ({restaurant.reviewCount.toLocaleString()} reviews)</span>
              <span>📍 {restaurant.address}</span>
              <span>📞 {restaurant.phone}</span>
              <span>🕐 {restaurant.openHours}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
