import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfSans = localFont({
  src: "./fonts/SFNS.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const sfMono = localFont({
  src: "./fonts/SFNSMono.ttf",
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diagnostico Eugenio",
  description: "Deck ejecutivo web para FloxIA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sfSans.variable} ${sfMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
