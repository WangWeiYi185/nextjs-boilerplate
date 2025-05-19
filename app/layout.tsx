
"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Script
          src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.8/libs/cn/index.js"
          strategy="afterInteractive"
          onLoad={() => { console.log('Coze SDK loaded', window.CozeWebSDK); }}
        />
        {children}
      </body>
    </html>
  );
}
