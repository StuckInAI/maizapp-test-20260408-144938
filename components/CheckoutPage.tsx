'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartItem, Restaurant } from '@/lib/data';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    paymentMethod: 'card',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      const savedRestaurant = localStorage.getItem('restaurant');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedRestaurant) setRestaurant(JSON.parse(savedRestaurant));
    }
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = restaurant ? parseFloat(restaurant.deliveryFee.replace('$', '')) : 0;
  const total = cartTotal + deliveryFee;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
      localStorage.removeItem('restaurant');
    }
  };

  if (orderPlaced) {
    return (
      <div>
        <Navbar />
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: 480 }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>🎉</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Order Placed!</h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 8 }}>
              Your order has been confirmed and will be delivered in {restaurant?.deliveryTime}.
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>
              You will receive a confirmation email shortly.
            </p>
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
      <div className="container" style={{ padding: '32px 24px', minHeight: '70vh' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Checkout</h1>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {['Delivery Details', 'Payment', 'Review'].map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28,
                borderRadius: '50%',
                background: step > i + 1 ? 'var(--success)' : step === i + 1 ? 'var(--primary)' : 'var(--border)',
                color: step >= i + 1 ? 'white' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: step === i + 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>{s}</span>
              {i < 2 && <div style={{ width: 40, height: 2, background: step > i + 1 ? 'var(--success)' : 'var(--border)' }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>
          <div>
            {step === 1 && (
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Delivery Details</h3>
                <div style={{ display: 'grid', gap: 16 }}>
                  {[['name', 'Full Name', 'text'], ['email', 'Email Address', 'email'], ['phone', 'Phone Number', 'tel'], ['address', 'Delivery Address', 'text']].map(([field, label, type]) => (
                    <div key={field}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>{label}</label>
                      <input
                        type={type}
                        value={form[field as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                        style={{
                          width: '100%',
                          border: '1.5px solid var(--border)',
                          borderRadius: 'var(--radius-md)',
                          padding: '12px 16px',
                          fontSize: 15,
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="btn-primary"
                  style={{ marginTop: 24, width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Payment Method</h3>
                <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                  {['card', 'cash'].map(method => (
                    <button
                      key={method}
                      onClick={() => setForm(prev => ({ ...prev, paymentMethod: method }))}
                      style={{
                        flex: 1,
                        padding: '14px',
                        borderRadius: 'var(--radius-md)',
                        border: form.paymentMethod === method ? '2px solid var(--primary)' : '1.5px solid var(--border)',
                        background: form.paymentMethod === method ? 'rgba(232,87,42,0.05)' : 'white',
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: 'pointer',
                        color: form.paymentMethod === method ? 'var(--primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {method === 'card' ? '💳 Credit Card' : '💵 Cash on Delivery'}
                    </button>
                  ))}
                </div>

                {form.paymentMethod === 'card' && (
                  <div style={{ display: 'grid', gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={form.cardNumber}
                        onChange={e => setForm(prev => ({ ...prev, cardNumber: e.target.value }))}
                        style={{ width: '100%', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: 15, boxSizing: 'border-box' }}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={form.expiry}
                          onChange={e => setForm(prev => ({ ...prev, expiry: e.target.value }))}
                          style={{ width: '100%', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: 15, boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={form.cvv}
                          onChange={e => setForm(prev => ({ ...prev, cvv: e.target.value }))}
                          style={{ width: '100%', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: 15, boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                  <button onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>Back</button>
                  <button onClick={() => setStep(3)} className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>Review Order</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Review Your Order</h3>
                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 12 }}>ITEMS</h4>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 14 }}>
                      <span>{item.name} x{item.quantity}</span>
                      <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 6, color: 'var(--text-muted)' }}>
                    <span>Subtotal</span><span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 6, color: 'var(--text-muted)' }}>
                    <span>Delivery</span><span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 800, marginTop: 10 }}>
                    <span>Total</span><span style={{ color: 'var(--primary)' }}>${total.toFixed(2)}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setStep(2)} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>Back</button>
                  <button onClick={handlePlaceOrder} className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>Place Order</button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 88 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Order Summary</h3>
            {restaurant && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, padding: '12px', background: 'var(--background)', borderRadius: 'var(--radius-md)' }}>
                <img src={restaurant.image} alt={restaurant.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14 }}>{restaurant.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{restaurant.cuisine}</p>
                </div>
              </div>
            )}
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                <span style={{ color: 'var(--text-secondary)' }}>{item.name} x{item.quantity}</span>
                <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 16 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
