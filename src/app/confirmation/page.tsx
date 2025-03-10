'use client';
import React from 'react';
import NavBar from "@/app/components/NavBar";
import { useQRCode } from 'next-qrcode';
import { useBooking } from "@/context/BookingContext";

export default function ConfirmationPage() {
    const { Canvas } = useQRCode();
    const { tickets, selectedDate, personalInfo } = useBooking();
    const ticketTypes = tickets.filter(ticket => ticket.quantity > 0);

    const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`.trim()

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-black text-white">
                <div className="mx-4 my-4 lg:my-0 lg:mx-32 p-4 md:p-8">
                    <h1 className="text-xl lg:text-5xl my-2 font-abril w-full">Your ticket</h1>
                    <div className="w-full h-[1px] bg-[#F5F5F5B2]"></div>

                    <div className="relative z-10 bg-[url('/confirmed.png')] bg-cover bg-center bg-no-repeat w-full h-screen mt-10 flex justify-center items-center">
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="w-full h-full shadow-2xl shadow-black flex items-center justify-center">
                            <div className="absolute z-20 flex flex-col bg-navBg p-8 rounded-xl max-w-[500px] gap-2 mt-24 mb-20">
                                <img src={'/confirmed.png'} alt="confirmed" className="w-full 2xl:h-[300px] h-[150px] rounded-lg mb-4  object-cover object-center" />

                                {/* Dados do Ingresso */}
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-secondary font-abril text-xl 2xl:text-4xl">{selectedDate.toLocaleDateString("en-US", { day: "2-digit" })}</span>
                                        <div className="flex flex-col border-l border-white pl-2">
                                            <span className="text-white font-abril text-md">{selectedDate.toLocaleDateString("en-US", { month: "long" })}</span>
                                            <span className="text-white font-abril text-md">{selectedDate.toLocaleDateString("en-US", { year: "numeric" })}</span>
                                        </div>
                                    </div>
                                    <div>
                                        {ticketTypes.map((ticket) => (
                                            <div key={ticket.name} className="flex justify-end">
                                                <div className="text-right text-grey font-medium 2xl:text-lg text-base">
                                                    <span className="block">{ticket.name} x {ticket.quantity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <h1 className="text-2xl 2xl:text-5xl text-secondary font-abril">Art Exhibition</h1>
                                <p className="font-bold text-lg text-white">{fullName}</p>
                                <p className="text-gray-400 text-xs">Tickets include admission to all galleries and special exhibitions.</p>

                                <div className="w-full h-[1px] border-2 border-dashed border-grey my-2"></div>
                                        <div
                                            style={{height: "auto", margin: "0", width: "100%", display: "flex", justifyContent: "center"}}
                                        >
                                            <Canvas
                                                text={'https://github.com/Camille846'}
                                                options={{
                                                    errorCorrectionLevel: 'M',
                                                    margin: 3,
                                                    scale: 4,
                                                    width: 200,
                                                    color: {
                                                        dark: '#E8DA54',
                                                        light: '#212121',
                                                    },
                                                }}
                                            />
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

