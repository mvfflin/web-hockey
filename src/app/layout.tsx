import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/Header";
import ogImage from "../assets/opengraph-image.png";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    keywords: [
        "Hockey",
        "Five Hockey",
        "FIVE HOCKEY",
        "HOCKEY 5",
        "SMAN 5",
        "HOCKEY SMAN 5",
    ],
    creator: "Fatihul Ihsan R.",
    publisher: "FIVE HOCKEY",
    title: {
        default: "FIVE HOCKEY",
        template: "%s | FIVE HOCKEY",
    },
    description: "Website official FIVE HOCKEY SMAN 5 Kota Bekasi",
    openGraph: {
        type: "website",
        title: "FIVE HOCKEY",
        description:
            "Website official ekstrakurikuler Hockey, FIVE HOCKEY dari SMAN 5 Kota Bekasi",
        countryName: "Indonesia",
        locale: "id-ID",
        images: [
            {
                url: ogImage.src,
            },
        ],
        siteName: "hockey.mvffin.my.id",
        url: "https://hockey.mvffin.my.id",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
