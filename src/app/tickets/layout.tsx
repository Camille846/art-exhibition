import { BookingProvider } from '@/context/BookingContext';
import Receipt from "@/app/components/Receipt";

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