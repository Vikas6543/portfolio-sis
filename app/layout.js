import "./globals.css";
import { Caveat, Playfair_Display } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${caveat.variable} ${playfair.variable} bg-black text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
