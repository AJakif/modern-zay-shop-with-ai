import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '700', '900'], // Added missing weights
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Zay Shop eCommerce HTML CSS Template", // Match original title exactly
  description: "Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap. This template is 100% free provided by TemplateMo website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto antialiased`} // Removed default text-lg font-light
      >
          {children}
      </body>
    </html>
  );
}