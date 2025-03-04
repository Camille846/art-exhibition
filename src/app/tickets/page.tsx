'use client';
import React, { useState } from 'react';
import NavBar from "@/app/components/NavBar";
import Calendar from "@/app/components/Calendar";
import ProgressIndicator from "@/app/components/progressIndicator";
import SelectTickets from "@/app/components/SelectTickets";
import Receipt from "@/app/components/Receipt";

interface TicketType {
    name: string
    description: string
    price: number
    quantity: number
}

export default function TicketsPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [tickets, setTickets] = useState<TicketType[]>([
        { name: "Adult", description: "18 to 59 years old", price: 30, quantity: 0 },
        { name: "Child", description: "13 and under with adult", price: 0, quantity: 0 },
        { name: "Senior", description: "60 and over with ID", price: 15, quantity: 0 },
        { name: "Student", description: "With student ID", price: 15, quantity: 0 },
    ]);
    const [currentStep, setCurrentStep] = useState(1);

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
        setCurrentStep(2);
    };

    const handleNextStep = () => {
        setCurrentStep(3);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-black text-white">
                <div className="max-w-7xl mx-auto p-4 md:p-8">
                    <h1 className="text-5xl mb-2 font-abril">Get tickets</h1>
                    <p className="text-gray-400 pb-4 mb-3 mt-3">Opening hours: weekdays until 5:30p.m.</p>
                    <div className="w-full h-[1px] bg-[#F5F5F5B2]"></div>

                    <ProgressIndicator currentStep={currentStep} />

                    <div className="mt-8 grid lg:grid-cols-3 gap-8">
                        <div>
                            <h2 className="text-3xl mb-2 font-abril">Select date</h2>
                            <p className="text-gray-400 mb-6">Select a day for your visit</p>
                            <Calendar selectedDate={selectedDate} onSelectDate={handleSelectDate} />
                        </div>

                        <div>
                            <SelectTickets selectedDate={selectedDate} onTicketChange={setTickets} />
                        </div>

                        <div>
                            <Receipt selectedDate={selectedDate} tickets={tickets} onNextStep={handleNextStep} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}