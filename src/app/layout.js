import localFont from "next/font/local";
import "./globals.css";

import { Press_Start_2P } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";

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
      <body
        className={`${pressStart.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
        <Script
          src="https://umami.t31k.cloud/script.js"
          data-website-id="6a3c11d8-2508-41bd-9bb5-28396e7f136a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
