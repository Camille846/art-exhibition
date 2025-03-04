'use client';
import React from 'react';
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"
import { useBooking } from "@/context/BookingContext";

function ProgressIndicator() {
	const router = useRouter()
	const { currentStep } = useBooking()

	const steps = [
		{ id: 1, step: "select date", path: "/tickets" },
		{ id: 2, step: "select tickets", path: "/tickets" },
		{ id: 3, step: "personal info", path: "/personalInfo" },
	]

	const handleStepClick = (step: number, path: string) => {
		if (step <= currentStep) {
			router.push(path)
		}
	}

	return (
		<div className="flex items-center justify-end text-sm mt-2">
			{steps.map((step, index) => (
				<div key={step.id} className="flex items-center">
					<button
						onClick={() => handleStepClick(step.id, step.path)}
						className={cn(
							"mr-1 hover:text-secondary transition-colors cursor-pointer",
							currentStep === step.id ? "text-white" : "text-[#F5F5F5B2]",
							step.id > currentStep && "pointer-events-none",
						)}
					>
						{step.step}
					</button>
					{index < steps.length - 1 && <span className="mx-2 text-[#F5F5F5B2]">{">"}</span>}
				</div>
			))}
		</div>
)
}

export default ProgressIndicator;