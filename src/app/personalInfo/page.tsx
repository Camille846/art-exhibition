"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Receipt from "@/app/components/Receipt";
import ProgressIndicator from "@/app/components/progressIndicator";
import NavBar from "@/app/components/NavBar";
import { useBooking } from "@/context/BookingContext";
import Button from "@/app/components/Button";

function PersonalInfo() {
    const router = useRouter();
    const { setCurrentStep, personalInfo, setPersonalInfo } = useBooking()

    useEffect(() => {
        setCurrentStep(3)
    }, [setCurrentStep])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/confirmation");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        })
        console.log(`Input changed: ${name} = ${value}`);
    };


    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar />

            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <h1 className="text-5xl font-bold mb-2">Get tickets</h1>
                <p className="text-gray-400 border-b border-grey pb-4 mb-6">Opening hours: weekdays until 5:30 p.m.</p>

                <ProgressIndicator />

                <div className="mt-8 grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl mb-6 font-abril">Your personal information</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="block text-sm text-gray-400">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={personalInfo.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-grey py-2 focus:outline-none focus:border-secondary transition-colors"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="block text-sm text-gray-400">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={personalInfo.lastName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-b border-grey py-2 focus:outline-none focus:border-secondary transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="country" className="block text-sm text-gray-400">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={personalInfo.country}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border-b border-grey py-2 focus:outline-none focus:border-secondary transition-colors"
                                    required
                                >
                                    <option value="" disabled>
                                        Select a country
                                    </option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm text-gray-400">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={personalInfo.email}
                                    onChange={handleInputChange}
                                    className="w-full border-b border-grey py-2 focus:outline-none focus:border-secondary transition-colors"
                                    required
                                />
                            </div>
                        </form>
                    </div>

                    <div>
                        <Receipt  />
                        <Button buttonText="Buy Tickets" destination="/confirmation" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;