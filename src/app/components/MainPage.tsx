'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

function MainPage() {
    const slideImages = [
        {
            src: "/slide1.png",
            alt: "A close-up oil painting of a young woman with fair skin, wearing a blue and yellow turban and a large pearl earring. She gazes over her shoulder toward the viewer with wide eyes and slightly parted lips. The dark background contrasts with the soft light illuminating her face, enhancing her delicate features",
            room: "Room 15",
            title: "Girl with a Pearl Earring",
            artist: "Johannes Vermeer, 1665",
            description: "Often referred to as the \"Mona Lisa of the North,\" Girl with a Pearl Earring is one of the most celebrated paintings of the Dutch Golden Age. This captivating portrait by Johannes Vermeer depicts a young woman in exotic clothing, her head turned toward the viewer, lips slightly parted, and eyes filled with an enigmatic expression. ",
        },
        {
            src: "/slide2.png",
            alt: "A large-scale oil painting depicting a group of armed militiamen, led by Captain Frans Banning Cocq dressed in black with a red sash. The soldiers are captured in motion, some holding weapons while others engage in conversation. A young girl in a golden dress stands out among the darkly clad figures. Strong contrasts of light and shadow create depth and movement in the scene.",
            room: "Room 12",
            title: "The Night Watch",
            artist: "Rembrandt van Rijn, 1642",
            description: " Unlike traditional static group portraits, Rembrandt infuses movement and emotion into the scene, with figures captured mid-step, banners waving, and light dramatically highlighting key subjects. The play of chiaroscuro—Rembrandt’s masterful use of light and shadow—creates depth and energy, drawing the viewer into the bustling world of 17th-century Amsterdam. The painting’s monumental size and innovative composition make it a defining work of Dutch Golden Age art.",
        },
        {
            src: "/slide3.png",
            alt: "A Baroque oil painting showing a group of men in 17th-century attire gathered around a dissecting table. Dr. Nicolaes Tulp, dressed in black with a white collar, demonstrates the anatomy of a corpse’s arm while the observers lean in with focused expressions. A large open book rests nearby, and dramatic lighting highlights the figures and the pale body against a dark background.",
            room: "Room 8",
            title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
            artist: "Rembrandt van Rijn, 1632",
            description: "This striking work by Rembrandt van Rijn captures a moment of scientific inquiry and education in 17th-century Amsterdam. Rembrandt’s dramatic use of light focuses on the doctor’s meticulous gestures and the rapt expressions of the observers, emphasizing both the intellectual curiosity and the solemn nature of the scene.",
        },
        {
            src: "/slide4.png",
            alt: "A lively oil painting showing a multi-generational Dutch family gathered around a table, engaged in music, drinking, and laughter. An elderly man sings while a child mimics him on a small pipe. Scattered objects like an overturned glass and a peeled lemon suggest indulgence. Expressive faces and vibrant colors add energy to the scene, conveying a moral lesson about how children imitate their elders.",
            room: "Room 4",
            title: "As the Old Sing, So Pipe the Young",
            artist: "Jan Steen, 1665",
            description: "Steen masterfully captures the chaotic yet warm atmosphere with rich details, expressive faces, and a vibrant color palette. Scattered objects, such as a half-peeled lemon and an overturned glass, hint at the fleeting pleasures of indulgence and the underlying message about parental influence. This engaging composition not only delights viewers with its liveliness but also serves as a cautionary tale about the responsibilities of upbringing.",
        },
        {
            src: "/slide5.png",
            alt: "A Baroque oil painting featuring mythological nymphs with flowing hair and soft, glowing skin, elegantly filling a large cornucopia with an abundance of fruits and flowers. The figures are surrounded by lush greenery, with a detailed landscape in the background. Warm, rich colors and dramatic lighting enhance the sense of opulence and natural beauty.",
            room: "Room 9",
            title: "Nymphs Filling the Cornucopia",
            artist: "Jan Brueghel the Elder & Peter Paul Rubens, 1615",
            description: "This Baroque masterpiece depicts mythological nymphs gracefully arranging an overflowing cornucopia, symbolizing prosperity and fertility. Rubens’ mastery in painting dynamic, voluptuous figures is evident in the nymphs’ soft, luminous skin and expressive poses, while Brueghel’s meticulous attention to detail shines in the rich floral and fruit elements. The scene is framed by lush foliage and a serene landscape, reinforcing the theme of nature’s bounty.",
        },
    ];

    const [selectedImage, setSelectedImage] = useState(slideImages[0]);

    return (
        <div
            className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedImage.src})` }}
        >
            <div className="absolute inset-0 bg-[#D9D9D94D] "></div>
            <div className="relative z-10 flex items-center justify-between mx-60 2xl:mx-96 gap-10">
                <div className="flex-2 shadow-2xl w-1/2 h-[500px] 2xl:h-[700px]">
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
                <div className="w-1/2 flex-2 flex-col gap-5">
                    <div
                        className="h-[50vh] w-full">
                        {selectedImage && (
                            <div className="flex flex-col gap-2">
                                <span
                                    className="text-secondary italic font-medium">On view in {selectedImage.room} until March 31, 2025</span>
                                <h1 className="font-abril text-white text-5xl 2xl:text-7xl">{selectedImage.title}</h1>
                                <p className="text-secondary">{selectedImage.artist}</p>
                                <p className="text-white mt-2 2xl:mt-4 text-xs 2xl:text-sm font-semibold">
                                    {selectedImage.description}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-5 mt-5 2xl:mt-10">
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
                    <div className="mt-5 2xl:mt-10 flex gap-2">
                        {slideImages.map((image, index) => (
                            <div key={index}
                                 className="w-[150px] h-[100px] shadow-2xl cursor-pointer border-2 border-white"
                                 onClick={() => setSelectedImage(image)}>
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