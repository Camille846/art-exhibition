'use client'
import { useBooking } from "@/context/BookingContext";
import Button from "@/app/components/Button";
import { usePathname } from "next/navigation";

export function Receipt() {
    const { selectedDate, tickets } = useBooking()
    const total = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0)
    const hasTickets = tickets.some((ticket) => ticket.quantity > 0)
    const pathname = usePathname()

    if (!hasTickets) {
        return null
    }

    return (
        <>
            <div className="w-full max-w-sm border-4 border-secondary p-6 rounded-sm">
                <h2 className="text-2xl mb-4 font-abril">
                    Your tickets for
                    <br />
                    {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </h2>

                <div className="space-y-2 mb-6">
                    {tickets.map(
                        (ticket) =>
                            ticket.quantity > 0 && (
                                <div key={ticket.name} className="flex justify-between">
                                    <span>
                                        {ticket.name}
                                        <span className="text-gray-400 ml-2 text-xs">
                                            {ticket.quantity}x ${ticket.price}
                                        </span>
                                    </span>
                                    <span>${ticket.price * ticket.quantity}</span>
                                </div>
                            ),
                    )}

                    <div className="border-t border-grey my-4" />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-secondary">${total}</span>
                    </div>
                </div>
            </div>
            {hasTickets && pathname !== "/personalInfo" && (
                <Button buttonText="Next" destination="/personalInfo" />
            )}
        </>
    )
}

export default Receipt