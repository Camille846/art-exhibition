import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ButtonProps {
    onClick?: () => void;
    buttonText: string;
    href: string;
}

export function Button({ onClick, buttonText, href }: ButtonProps) {
    return (
        <Link href={href} legacyBehavior>
            <button
                className="flex items-center justify-between px-6 font-bold text-xl w-full py-3 px-4 mt-4 rounded-sm transition-colors border-2 border-secondary cursor-pointer bg-navBg bg-secondary text-black hover:bg-navBg hover:text-secondary hover:border-secondary"
                onClick={onClick}
            >
                {buttonText}
                <FaArrowRightLong />
            </button>
        </Link>
    );
}

export default Button;