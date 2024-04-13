"use client";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ResponsiveNav from "@/components/common/NavBar/ResponsiveNav";
import { useState } from "react";
import { LoadingContext } from "@/lib/global/context/context";

const lora = Lora({ subsets: ["latin"] });
// 
// "use server"
// export const metadata: Metadata = {
//   title: {
//     default: 'Home | Ecommerce',
//     template: "%s | Ecommerce"
//   },
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  function updateLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <LoadingContext.Provider value={{ loading, setter: updateLoading }}>
      <html lang="en">
        <body className={lora.className}>
          <ResponsiveNav />
          <NextTopLoader />
          {children}</body>
      </html>
    </LoadingContext.Provider>
  );
}
