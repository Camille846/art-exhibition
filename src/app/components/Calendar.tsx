'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type CalendarDate = {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
}

interface CalendarProps {
	selectedDate: Date;
	onSelectDate: (date: Date) => void;
}

function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
	const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2, 1));

	const getDaysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	}

	const getFirstDayOfMonth = (year: number, month: number) => {
		return new Date(year, month, 1).getDay();
	}

	const generateCalendarDaters = (): CalendarDate[] => {
		const year = currentMonth.getFullYear();
		const month = currentMonth.getMonth();
		const daysInMonth = getDaysInMonth(year, month);
		const firstDayOfMonth = getFirstDayOfMonth(year, month);

		const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
		const daysInPrevMonth = getDaysInMonth(year, month - 1);

		const calendarDates: CalendarDate[] = [];

		for (let i = firstDayIndex - 1; i >= 0; i--) {
			calendarDates.push({
				date: new Date(year, month - 1, daysInPrevMonth - i),
				isCurrentMonth: false,
				isToday: false,
				isSelected: false
			});
		}

		const today = new Date();
		for (let i = 1; i <= daysInMonth; i++) {
			const date = new Date(year, month, i);
			calendarDates.push({
				date,
				isCurrentMonth: true,
				isToday:
					date.getDate() === today.getDate() &&
					date.getMonth() === today.getMonth() &&
					date.getFullYear() === today.getFullYear(),
				isSelected:
					date.getDate() === selectedDate.getDate() &&
					date.getMonth() === selectedDate.getMonth() &&
					date.getFullYear() === selectedDate.getFullYear()
			});
		}

		const remainingDays = 42 - calendarDates.length;
		for (let i = 1; i <= remainingDays; i++) {
			const date = new Date(year, month + 1, i);
			calendarDates.push({
				date,
				isCurrentMonth: false,
				isToday: false,
				isSelected: false,
			});
		}

		return calendarDates;
	}

	const handlePrevMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
	}

	const handleNextMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
	}

	const handleSelectDate = (date: Date) => {
		onSelectDate(date);
	}

	const calendarDates = generateCalendarDaters();
	const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	const formatMonthYear = (date: Date) => {
		return date.toLocaleDateString("en-US", { month: 'long', year: 'numeric' }).toUpperCase();
	}

	const formatSeletectedDate = (date: Date) => {
		return date.toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });
	}

	return (
		<div className="w-full max-w-md bg-navBg rounded-xl p-6">
			<div className="p-3 rounded-lg">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-medium">{formatMonthYear(currentMonth)}</h3>
					<div className="flex space-x-2">
						<button className="p-1 rounded-full hover:bg-secondary text-white hover:text-black cursor-pointer" onClick={handlePrevMonth}>
							<FaChevronLeft className="h-5 w-5"/>
						</button>
						<button className="p-1 rounded-full hover:bg-secondary text-white hover:text-black cursor-pointer" onClick={handleNextMonth}>
							<FaChevronRight className="h-5 w-5"/>
						</button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-7 gap-1 mb-2 mt-8 items-center justify-center text-center">
				{weekdays.map((day) => (
					<div key={day} className="text-sm text-white font-medium">{day}</div>
				))}
			</div>
			<div className="grid grid-cols-7 gap-3">
				{calendarDates.map((calendarDate, index) => {
					const dayNumber = calendarDate.date.getDate();
					return (
						<button
							key={index}
							className={cn(
								"h-10 w-10 rounded-full flex items-center justify-center text-center text-sm cursor-pointer border-2 border-white border-solid",
								!calendarDate.isCurrentMonth && 'text-gray-400 border-[#5D5D6D] cursor-default',
								calendarDate.isSelected && 'bg-secondary text-black font-bold border-secondary',
								!calendarDate.isSelected && 'hover:bg-secondary hover:text-black hover:border-secondary',
							)}
							onClick={() => handleSelectDate(calendarDate.date)}
						>
							{dayNumber}
						</button>
					)
				})}
			</div>
			<div className="mt-6 text-secondary text-xl font-medium font-abril text-end">
				{formatSeletectedDate(selectedDate)}
			</div>
		</div>
	)
}

export default Calendar;