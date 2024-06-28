import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Image and Video Generators",
  description: "AI Image and Video Generators is a directory to discover the best tools to create stunning visuals using AI",
  twitter: {
    card: 'app',
    title: 'AI Image and Video Generators',
    description: 'AI Image and Video Generators is a directory to discover the best tools to create stunning visuals using AI',
    siteId: '1467726470533754812',
    creator: '@AI Image and Video Generators',
    creatorId: '1467726470533754812',
    images: {
      url: 'opengraph-image.JPG',
      alt: 'AI Image and Video Generators Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
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
