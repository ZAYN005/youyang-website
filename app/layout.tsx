import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Youyang Intelligent Control",
  description: "AI Vision Systems and Intelligent Control Solutions",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}