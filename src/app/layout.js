import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Monaco-style monospace for everything — headers, body, labels, nav
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Kerrick Truong",
  description: "Computer Science student — systems & web.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={geistMono.variable}
      >
        {children}
      </body>
    </html>
  );
}
