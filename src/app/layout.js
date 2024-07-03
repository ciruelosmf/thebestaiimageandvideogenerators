import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Image and Video Generators",
  description: "AI Image and Video Generators is a directory to discover the best tools to create stunning visuals using AI",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
});
         `}
      </Script>

          </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
