import {BookingProvider} from "@/context/BookingContext";

export default function ConfirmationLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    return <BookingProvider>
        {children}
    </BookingProvider>
}