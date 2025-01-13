"use client";

import Image from "next/image";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY == 0) {
                header?.classList.add("!bg-opacity-10");
            } else {
                header?.classList.remove("!bg-opacity-10");
            }
        });

        if (window.scrollY == 0) {
            header?.classList.add("!bg-opacity-10");
        } else {
            header?.classList.remove("!bg-opacity-10");
        }
    }, []);

    return (
        <header
            id="header"
            className="transition-all h-20 bg-blue-900 w-full flex justify-between fixed font-poppins"
        >
            <div className="my-auto ml-12 float-start flex space-x-5">
                <Image
                    alt="hockey-logo"
                    src="/hockey.png"
                    width={600}
                    height={600}
                    className="!w-16 aspect-square rounded-full m-auto"
                />
                <h1 className="font-bold text-white text-3xl m-auto">
                    FIVE HOCKEY
                </h1>
            </div>
            <ul className="my-auto mr-12 float-end flex space-x-5 list-none">
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about">
                    <li>Tentang</li>
                </a>
                <a href="#join">
                    <li>Join!</li>
                </a>
            </ul>
        </header>
    );
};

export default Header;
