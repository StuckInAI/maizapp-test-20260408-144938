import RestaurantDetailPage from '@/components/RestaurantDetailPage';

export default function RestaurantPage({ params }: { params: { id: string } }) {
  return <RestaurantDetailPage id={params.id} />;
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}
