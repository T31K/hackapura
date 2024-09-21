import localFont from "next/font/local";
import "./globals.css";

import { Press_Start_2P } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Hackapura",
  description:
    "A community-run group of indie makers / coders / designers / hardware hackers who build their own independent apps/startups, meeting up every Thursday for weekly co-working (and demos) in Singapore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${pressStart.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
