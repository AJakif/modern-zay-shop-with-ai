import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Zay Shop - Modern eCommerce Template",
  description: "A modern eCommerce template built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, interactive components, and beautiful UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto antialiased text-lg font-light`}
      >
          {children}
      </body>
    </html>
  );
}