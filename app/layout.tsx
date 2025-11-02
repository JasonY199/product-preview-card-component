import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["500", "700"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Preview",
  description: "A Frontend Mentor project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${fraunces.variable} antialiased md:min-h-screen flex items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
