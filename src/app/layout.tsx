import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import MdNavbar from "@/components/navbar/mdNavbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tecknolife",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        
          <Navbar />
          <MdNavbar />
        

        {children}
        <Footer />
      </body>
    </html>
  );
}
