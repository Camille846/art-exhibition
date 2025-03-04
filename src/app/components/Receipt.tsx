import {FaArrowRightLong} from "react-icons/fa6";

interface TicketType {
    name: string
    description: string
    price: number
    quantity: number
}

interface ReceiptProps {
    selectedDate?: Date
    tickets: TicketType[]
    onNextStep: () => void
}

export function Receipt({ selectedDate = new Date(), tickets = [], onNextStep }: ReceiptProps) {
    const total = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0)
    const hasTickets = tickets.some((ticket) => ticket.quantity > 0)

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

            <button
                className="flex items-center justify-between px-6 font-bold text-xl w-full py-3 px-4 mt-4 rounded-sm transition-colors border-2 border-secondary cursor-pointer bg-navBg bg-secondary text-black hover:bg-navBg hover:text-secondary hover:border-secondary"
                onClick={onNextStep}
            >
                Next
                <FaArrowRightLong />
            </button>
        </>
    )
}

export default Receipt