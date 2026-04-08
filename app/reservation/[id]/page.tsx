import ReservationPage from '@/components/ReservationPage';

export default function Reservation({ params }: { params: { id: string } }) {
  return <ReservationPage id={params.id} />;
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
