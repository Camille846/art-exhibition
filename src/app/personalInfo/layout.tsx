import { BookingProvider } from '@/context/BookingContext';

export default function PersonalInfoLayout({
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