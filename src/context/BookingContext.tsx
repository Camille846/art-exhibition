"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface TicketType {
    name: string
    description: string
    price: number
    quantity: number
}

interface BookingContextType {
    selectedDate: Date
    setSelectedDate: (date: Date) => void
    tickets: TicketType[]
    setTickets: (tickets: TicketType[]) => void
    currentStep: number
    setCurrentStep: (step: number) => void
    formData: {
        firstName: string;
        lastName: string;
        country: string;
        email: string;
    };
}

const defaultTickets: TicketType[] = [
    { name: "Adult", description: "18 to 59 years old", price: 30, quantity: 0 },
    { name: "Child", description: "13 and under with adult", price: 0, quantity: 0 },
    { name: "Senior", description: "60 and over with ID", price: 15, quantity: 0 },
    { name: "Student", description: "With student ID", price: 15, quantity: 0 },
]

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 2, 1))
    const [tickets, setTickets] = useState<TicketType[]>(defaultTickets)
    const [currentStep, setCurrentStep] = useState(1)

    return (
        <BookingContext.Provider
            value={{
                selectedDate,
                setSelectedDate,
                tickets,
                setTickets,
                currentStep,
                setCurrentStep,
                formData: {
                    firstName: "",
                    lastName: "",
                    country: "",
                    email: "",
                },
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export function useBooking() {
    const context = useContext(BookingContext)
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider")
    }
    return context
}

