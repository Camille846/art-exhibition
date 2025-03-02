import type { Metadata } from "next";
import { Abril_Fatface, Poppins } from "next/font/google";
import "./globals.css";

const titleFont = Abril_Fatface({
  variable: "--font-abril-fatface",
  weight: ['400'],
  style: ["normal"],
  subsets: ["latin"],
});

const defaultFont = Poppins({
  variable: "--font-poppins",
    weight: ['400', '500', '600', '700'],
    style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Art Exhibition",
  description: "Developed by Camille Gomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.variable} ${defaultFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
