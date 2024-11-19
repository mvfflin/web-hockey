"use client";

import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("header");
        window.addEventListener("scroll", (ev) => {
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
                <img
                    src="/hockey.png"
                    className="w-16 aspect-square rounded-full m-auto"
                />
                <h1 className="font-bold text-white text-3xl m-auto">
                    FIVE HOCKEY
                </h1>
            </div>
            <ul className="my-auto mr-12 float-end flex space-x-5 list-none">
                <li>Home</li>
                <li>Tentang</li>
                <li>Kegiatan</li>
                <li>Pendaftaran</li>
            </ul>
        </header>
    );
};

export default Header;
