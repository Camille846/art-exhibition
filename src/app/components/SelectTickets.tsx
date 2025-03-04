"use client"

import { FaMinus,FaPlus} from "react-icons/fa6";
import { useBooking } from "@/context/BookingContext";

export function SelectTickets() {
    const { tickets, setTickets } = useBooking()

    const updateTicketQuantity = (index: number, increment: boolean) => {
        const newTickets = [...tickets]
        if (increment) {
            newTickets[index].quantity += 1
        } else if (newTickets[index].quantity > 0) {
            newTickets[index].quantity -= 1
        }
        setTickets(newTickets)
    }

    return (
        <div className="w-full">
            <h2 className="text-3xl mb-2 font-abril">Select tickets</h2>
            <p className="text-gray-400 mb-6">Tickets include admission to all galleries and special exhibitions.</p>

            <div className="space-y-4">
                {tickets.map((ticket, index) => (
                    <div key={ticket.name} className="flex items-center justify-between p-4 bg-navBg rounded-lg">
                        <div>
                            <h3 className="font-semibold">{ticket.name}</h3>
                            <p className="text-sm text-gray-400">{ticket.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => updateTicketQuantity(index, false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-secondary hover:bg-navBg hover:text-white bg-secondary text-black cursor-pointer"
                            >
                                <FaMinus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{ticket.quantity}</span>
                            <button
                                onClick={() => updateTicketQuantity(index, true)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-secondary hover:bg-navBg hover:text-white bg-secondary text-black cursor-pointer"
                                aria-label={`Increase ${ticket.name} quantity`}
                            >
                                <FaPlus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectTickets