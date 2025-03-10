'use client';
import React, { useEffect, useState } from 'react';
import NavBar from "@/app/components/NavBar";
import Calendar from "@/app/components/Calendar";
import ProgressIndicator from "@/app/components/progressIndicator";
import SelectTickets from "@/app/components/SelectTickets";
import Receipt from "@/app/components/Receipt";
import PersonalInfoComponent from "@/app/components/personal-info";
import { useBooking } from "@/context/BookingContext";

export default function TicketsPage() {
    const { setCurrentStep } = useBooking();
    const [step, setStep] = useState(1);

    useEffect(() => {
        setCurrentStep(step);
    }, [setCurrentStep, step]);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-black text-white">
                <div className="max-w-7xl mx-auto p-4 md:p-8">
                    <h1 className="text-5xl mb-2 font-abril">Get tickets</h1>
                    <p className="text-gray-400 pb-4 mb-3 mt-3">Opening hours: weekdays until 5:30p.m.</p>
                    <div className="w-full h-[1px] bg-[#F5F5F5B2]"></div>

                    <ProgressIndicator />

                    {step === 1 && (
                        <div className="mt-8 grid lg:grid-cols-3 gap-8">
                            <div>
                                <h2 className="text-3xl mb-2 font-abril">Select date</h2>
                                <p className="text-gray-400 mb-6">Select a day for your visit</p>
                                <Calendar />
                            </div>

                            <div>
                                <SelectTickets />
                            </div>

                            <div>
                                <Receipt onNext={handleNextStep} step={step} />
                            </div>
                        </div>
                    )}

                    {step === 2 && <PersonalInfoComponent />}
                </div>
            </div>
        </>
    );
}