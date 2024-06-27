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
    siteId: '1467726470533754880',
    creator: '@AI Image and Video Generators',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://www.aiimageandvideogenerators.xyz/writesonic_1.webp',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
