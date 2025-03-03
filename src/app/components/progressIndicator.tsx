'use client';
import React from 'react';
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
	currentStep: number
}

function ProgressIndicator({currentStep}: ProgressIndicatorProps) {
   const steps = [
	   {id: 1, step: 'Select date'},
	   {id: 2, step: 'Select tickets'},
	   {id: 3, step: 'Personal info'}
   ]

	return (
		<div className="flex justify-end items-center text-sm mt-5">
			{steps.map((step, index) => (
				<div key={step.id} className={'flex items-center gap-1'}>
					<span className={cn(
						"mr-1",
						currentStep === step.id? 'text-white': 'text-[#F5F5F5B2]')}
					>
						{step.step}
					</span>
					{index !== steps.length - 1 && <span className={"mx-2 text-[#F5F5F5B2]"}>{'>'}</span>}
				</div>
			))}
		</div>
	)
}

export default ProgressIndicator;