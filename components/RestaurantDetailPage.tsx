'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { restaurants, menuItems, menuCategories, MenuItem, CartItem } from '@/lib/data';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  id: string;
}

export default function RestaurantDetailPage({ id }: Props) {
  const router = useRouter();
  const restaurant = restaurants.find(r => r.id === id) || restaurants[0];
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredMenu = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(c => c.id === id ? { ...c, quantity: c.quantity - 1 } : c);
      }
      return prev.filter(c => c.id !== id);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('restaurant', JSON.stringify(restaurant));
    }
    router.push('/checkout');
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <h1 style={{ fontSize: 36, fontWeight: 800, color: 'white', marginBottom: 8 }}>{restaurant.name}</h1>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                  <span>⭐ {restaurant.rating} ({restaurant.reviewCount.toLocaleString()} reviews)</span>
                  <span>🍽️ {restaurant.cuisine}</span>
                  <span>💰 {restaurant.priceRange}</span>
                  <span>🕐 {restaurant.deliveryTime}</span>
                </div>
              </div>
              <Link
                href={`/reservation/${restaurant.id}`}
                style={{
                  background: 'white',
                  color: 'var(--primary)',
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Reserve Table
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>
          {/* Menu */}
          <div>
            {/* Info bar */}
            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '16px 20px',
              marginBottom: 24,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              fontSize: 13,
              color: 'var(--text-secondary)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <span>📍 {restaurant.address}</span>
              <span>📞 {restaurant.phone}</span>
              <span>🕐 {restaurant.openHours}</span>
            </div>

            <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.6 }}>
              {restaurant.description}
            </p>

            {/* Categories */}
            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginBottom: 24 }} className="scrollbar-hide">
              {menuCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: activeCategory === cat ? 'none' : '1.5px solid var(--border)',
                    background: activeCategory === cat ? 'var(--primary)' : 'white',
                    color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div style={{ display: 'grid', gap: 16 }}>
              {filteredMenu.map(item => {
                const cartItem = cart.find(c => c.id === item.id);
                return (
                  <div key={item.id} style={{
                    background: 'white',
                    borderRadius: 'var(--radius-lg)',
                    padding: 16,
                    display: 'flex',
                    gap: 16,
                    boxShadow: 'var(--shadow-sm)',
                    alignItems: 'center',
                  }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                      />
                      {item.popular && (
                        <div style={{
                          position: 'absolute', top: -6, left: -6,
                          background: 'var(--accent)',
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 7px',
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#333',
                        }}>Popular</div>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>{item.name}</h4>
                      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>{item.description}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 17, fontWeight: 800, color: 'var(--primary)' }}>${item.price.toFixed(2)}</span>
                        {cartItem ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              style={{
                                width: 30, height: 30,
                                borderRadius: '50%',
                                border: '1.5px solid var(--primary)',
                                background: 'white',
                                color: 'var(--primary)',
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                              }}
                            >−</button>
                            <span style={{ fontWeight: 700, fontSize: 15 }}>{cartItem.quantity}</span>
                            <button
                              onClick={() => addToCart(item)}
                              style={{
                                width: 30, height: 30,
                                borderRadius: '50%',
                                border: 'none',
                                background: 'var(--primary)',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                              }}
                            >+</button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            style={{
                              background: 'var(--primary)',
                              color: 'white',
                              border: 'none',
                              borderRadius: 'var(--radius-full)',
                              padding: '7px 16px',
                              fontSize: 13,
                              fontWeight: 700,
                              cursor: 'pointer',
                            }}
                          >Add +</button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart */}
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            padding: 24,
            position: 'sticky',
            top: 88,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Your Order</h3>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
                <p style={{ fontSize: 14 }}>Your cart is empty</p>
                <p style={{ fontSize: 12, marginTop: 4 }}>Add items from the menu</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>x{item.quantity}</p>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>
                    <span>Subtotal</span><span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>
                    <span>Delivery</span><span>{restaurant.deliveryFee}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, marginTop: 10 }}>
                    <span>Total</span>
                    <span style={{ color: 'var(--primary)' }}>${(cartTotal + parseFloat(restaurant.deliveryFee.replace('$', ''))).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '14px',
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary)')}
                >
                  Checkout ({cartCount} items)
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
