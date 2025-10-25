import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovoSans = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Smxxthly",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitSans.className} ${ovoSans.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
