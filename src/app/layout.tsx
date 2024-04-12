import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rex Helicoides",
  description: "Helicoides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
