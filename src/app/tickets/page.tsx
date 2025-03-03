'use client';
import React from "react";
import NavBar from "@/app/components/NavBar";
import Calendar from "@/app/components/Calendar";
import ProgressIndicator from "@/app/components/progressIndicator";

export default function TicketsPage() {
    return (
        <>
            <NavBar/>
            <div className="mx-[90px] my-20">
                <div>
                    <h1 className="font-abril text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl">
                        Get tickets
                    </h1>
                    <p className="text-[#F5F5F5B2] my-5">
                        Opening hours: weekdays until 5:30p.m.
                    </p>
                    <div className="w-full h-1 bg-[#F5F5F5B2] mt-2"></div>
                    <ProgressIndicator currentStep={1} />
                    </div>
                    <div className={"mt-14 mb-20"}>
                        <h2 className="font-abril text-white text-lg sm:text-4xl">
                            Select date
                        </h2>
                        <p className="text-[#F5F5F5B2] mt-5">
                            Select a day for your visit.
                        </p>
                    </div>
                    <Calendar />
            </div>
        </>
    );
}