'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { mainPageData } from "../data/mainPageData";

function MainPage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const handleWheel = (event: WheelEvent) => {
        event.preventDefault(); // Prevent default scroll behavior

        const delta = Math.sign(event.deltaY);
        let newIndex = selectedImageIndex + delta;

        if (newIndex < 0) {
            newIndex = mainPageData.length - 1;
        } else if (newIndex >= mainPageData.length) {
            newIndex = 0;
        }

        setSelectedImageIndex(newIndex);
    };


    useEffect(() => {
        const container = imageContainerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel);
            return () => {
                if (container) {
                    container.removeEventListener('wheel', handleWheel);
                }
            };
        }
    }, [selectedImageIndex]);

    const selectedImage = mainPageData[selectedImageIndex];

    return (
        <div
            className="relative flex flex-col items-center justify-center lg:h-[calc(100vh-64px)] bg-no-repeat bg-cover bg-center lg:my-0 mx:0 h-screen"
            style={{ backgroundImage: `url(${selectedImage.src})` }}
        >
            <div className="absolute inset-0 bg-[#D9D9D94D]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between mx-5 lg:mx-60 2xl:mx-96 gap-10 mt-32 lg:mt-0">
                <div className="flex-2 shadow-2xl w-[300px] lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] 2xl:h-[700px]">
                    <div className="w-full h-full flex items-center justify-center shadow-2xl shadow-black">
                        <Image
                            src={selectedImage.src}
                            className="w-full h-full object-cover"
                            width={400}
                            height={700}
                            alt="logo"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex-2 flex-col gap-5 h-full">
                    <div className="lg:h-[50vh] w-full h-auto mb-9">
                        {selectedImage && (
                            <div className="flex flex-col gap-2">
                                <span
                                    className="text-secondary italic font-medium">On view in {selectedImage.room} until March 31, 2025</span>
                                <h1 className="font-abril text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl">{selectedImage.title}</h1>
                                <p className="text-secondary">{selectedImage.artist}</p>
                                <p className="text-white mt-2 sm:mt-4 text-xs md:text-sm font-semibold">
                                    {selectedImage.description}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-5 2xl:mt-10">
                        <button
                            className="bg-secondary text-black font-semibold px-4 rounded-md hover:opacity-80 cursor-pointer">visit
                            now
                        </button>
                        <button
                            className="text-white font-semibold px-4 py-2 rounded-md border-2 border-white flex gap-2 items-center hover:opacity-80 cursor-pointer">
                            discover more
                            <FaArrowRightLong/>
                        </button>
                    </div>
                    <div
                        className="mt-5 2xl:mt-10 flex gap-2 lg:flex-row max-md:grid max-md:grid-cols-3 max-md:mb-20"
                        ref={imageContainerRef}>
                        {mainPageData.map((image, index) => (
                            <div key={index}
                                 className={`w-[100px] sm:w-[150px] h-[75px] sm:h-[100px] shadow-2xl cursor-pointer border-2 ${selectedImageIndex === index ? 'border-secondary' : 'border-white'}`}
                                 onClick={() => setSelectedImageIndex(index)}
                            >
                                <Image
                                    src={image.src}
                                    className="w-full h-full object-cover"
                                    width={150}
                                    height={700}
                                    alt={image.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;