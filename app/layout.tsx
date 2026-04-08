import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maiz - Discover, Order & Reserve',
  description: 'Discover great restaurants, order delicious food, and reserve tables seamlessly with Maiz.',
  keywords: 'restaurant, food delivery, table reservation, dining',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
