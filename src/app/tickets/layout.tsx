import { BookingProvider } from '@/context/BookingContext';

export default function TicketsLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <BookingProvider>
            {children}
        </BookingProvider>
    )
}