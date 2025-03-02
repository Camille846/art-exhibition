"use client";

import Link from "next/link";
import type React from "react";
import { FaGrip, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className="md:sticky md:top-0 md:shadow-none z-20">
            {/* DESKTOP */}
            <div className="hidden lg:block animate-in fade-in zoom-in px-2 z-50 bg-navBg py-3">
                <div className="flex justify-between mx-[41px] items-center">
                    <div className="flex items-center gap-[40px] select-none">
                        <Link
                            href="/"
                            legacyBehavior
                            className="scroll-mt-[80px] transition-all duration-300 ease-in-out"
                        >
                                <a
                                    className={`text-white font-medium font-abril px-4 py-2 cursor-pointer flex items-center gap-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                                >
                                    Art Exhibition
                                </a>
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/collections" legacyBehavior>
                            <a>
                                <p
                                    className={`text-white hover:text-secondary px-4 py-2 cursor-pointer flex items-center gap-2 hover:font-bold font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                                >
                                    Our collection
                                </p>
                            </a>
                        </Link>
                        <a
                            href="/tickets"
                        >
                            <p
                                className={`bg-secondary text-black rounded-md px-4 py-2 cursor-pointer flex items-center gap-2 hover:font-bold font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}
                            >
                                Tickets
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div
                className={`block lg:hidden shadow-sm  fixed top-0 w-full z-[999] animate-in fade-in zoom-in  ${
                    menu ? "py-2" : ""
                } `}
            >
                <div className="flex justify-between mx-[10px]">
                    <div className="flex justify-center items-center text-center gap-[40px]">
                        {menu ? (
                            <FaXmark
                                className="cursor-pointer animate-in fade-in zoom-in text-[2rem]"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <FaGrip
                                className="cursor-pointer animate-in fade-in zoom-in text-[2rem]"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </div>
                {menu ? (
                    <div className="lg:my-8 select-none animate-in slide-in-from-right text-center max-lg:h-[100vh] max-md:p-0 max-lg:p-10 max-lg:bg-bg  max-lg:text-white max-lg:font-bold max-md:text-[1rem] max-lg:text-[2rem]">
                        <div className="flex flex-col gap-8 mt-4 mx-4  max-md:border-t max-md:border-[#0005370d] max-md:pb-4">
                            <Link href={"/"} legacyBehavior>
                                <a onClick={closeMenu}>
                                    <p
                                        className={
                                            "font-semibold cursor-pointer active:mt-4"
                                        }
                                    >
                                        Home
                                    </p>
                                </a>
                            </Link>
                            <Link href={"/collection"} legacyBehavior>
                                <a onClick={closeMenu}>
                                    <p
                                        className={
                                            "font-semibold cursor-pointer"
                                        }
                                    >
                                        Our collection
                                    </p>
                                </a>
                            </Link>
                            <Link href={"/tickets"} legacyBehavior>
                                <a onClick={closeMenu}>
                                    <p
                                        className={
                                            "font-semibold cursor-pointer"
                                        }
                                    >
                                        Tickets
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default NavBar;