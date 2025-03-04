import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import React from "react";

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText: string;
    destination?: string;
}

export function Button({ onClick, buttonText, destination }: ButtonProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (onClick) {
            onClick(e);
        }

        if (destination) {
            router.push(destination);
        }

    };

    return (

        <button
            className="flex items-center justify-between px-6 font-bold text-xl w-full py-3 mt-4 rounded-sm transition-colors border-2 border-secondary cursor-pointer bg-navBg bg-secondary text-black hover:bg-navBg hover:text-secondary hover:border-secondary"
            onClick={handleClick}
        >
            {buttonText}
            <FaArrowRightLong />
        </button>

    );
}

export default Button;