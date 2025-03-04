'use client';
import React from 'react';
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
	currentStep: number
	onStepClick?: (step: number) => void
}

function ProgressIndicator({currentStep, onStepClick}: ProgressIndicatorProps) {
   const steps = [
	   {id: 1, step: 'Select date'},
	   {id: 2, step: 'Select tickets'},
	   {id: 3, step: 'Personal info'}
   ]

	return (
		<div className="flex items-center justify-end text-sm mt-2">
			{steps.map((step, index) => (
				<div key={step.id} className="flex items-center">
					<button
						onClick={() => onStepClick?.(step.id)}
						className={cn(
							"mr-1 hover:text-yellow-400 transition-colors cursor-pointer",
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