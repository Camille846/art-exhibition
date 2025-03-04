'use client';
import React from "react";
import NavBar from "@/app/components/NavBar";
import { collectionsData } from "../data/collectionsData";
import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";

export default function CollectionsPage() {
    return (
        <>
        <NavBar/>
        <div className="mx-[90px] my-20">
            <div>
                <h1 className="font-abril text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl">Discover more
                    about our exhibition</h1>
                <div className="w-full h-1 bg-[#F5F5F5B2] mt-2"></div>
                <p className="text-white mt-5">
                    Find out more about our collection and the artists behind the works. Our art exhibition is open
                    to the public and we welcome you to visit our gallery.
                </p>
            </div>
            <Link href={"/tickets"} legacyBehavior>
                <div className="grid grid-cols-3 gap-5 mt-10 collection-grid">
                    {collectionsData.map((collection, index) => (
                        <div className="tile relative" key={index}>
                             <img src={collection.src} alt={collection.alt} className="w-full h-full object-cover"/>
                            <div className="absolute inset-x-0 bg-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-start p-4 lg:h-[200px] bottom-0">
                                <h2 className="text-black font-abril text-2xl">{collection.title}</h2>
                                <p className="text-black mt-2">{collection.artist}</p>
                            <div className="flex items-center justify-end text-right w-full gap-3 mt-5 hover:opacity-75 transition-opacity duration-300">
                                    <a
                                        className="text-blue italic font-semibold mt-2"
                                        href={`/tickets`}
                                    >
                                        On view in {collection.room}
                                    </a>
                                    <FaArrowRightLong className="text-blue mt-1"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
</>
);
}