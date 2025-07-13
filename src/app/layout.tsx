import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["300", "400", "600", "700", "800"],
// });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fallax",
  description:
    "Fallax is a modern phishing detection web app that helps users identify suspicious URLs before clicking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
