import { Didact_Gothic } from "next/font/google";
import "./globals.css";

const didact_gothic = Didact_Gothic({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Silent Scream",
  description: "Lovecraftian Stealth Horror Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/silentscreamfav.png" sizes="any" />
      </head>
      <body className={didact_gothic.className}>{children}</body>
    </html>
  );
}
