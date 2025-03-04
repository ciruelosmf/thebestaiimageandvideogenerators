"use client"

import React from 'react';
import Script from "next/script";
import Link from "next/link"
import DynamicBackground from '@/components/DynamicBackground'; // Make sure to create this file
import urls from './urls'; // Import the URLs array
import { useState, useEffect } from 'react';




export default function Blog() {


      const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (




    < div className="  relative min-h-screen flex flex-col items-center">

            <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
});
         `}
      </Script>

 
      <DynamicBackground rows={6} cols={6} /> {/* Add this line */}





      <header className={`sticky top-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-slate-700 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container max-w-7xl py-3 px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
 
            <h1 className="text-lg md:text-xl font-bold text-white">AI Image & Video Generators</h1>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Desktop navigation - simplified */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white hover:text-purple-300 transition" prefetch={false}>
              Home
            </Link>
            <Link href="./gallery" className="text-sm font-medium text-white hover:text-purple-300 transition" prefetch={false}>
              Gallery
            </Link>
            <Link href="./full-tools-list" className="text-sm font-medium text-white hover:text-purple-300 transition" prefetch={false}>
            Full List of Tools
            </Link>

 
            <Link href="./blog" className="text-sm font-medium text-white hover:text-purple-300 transition" prefetch={false}>
              Blog
            </Link>
            
            {/* Primary CTA Button */}
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition"
              onClick={() => trackConversion('list-your-tool-header', 'header-nav')}
            >
              <Link href="https://imagify.gumroad.com/l/xuhxv" prefetch={false}>
                List Your Tool
              </Link>
            </Button>


           <Link href="https://t.me/tate_chess_bot" className="text-gray-100 border py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>PLAY Tate Telegram Chess Game</Link>
          </nav>
        </div>
      </header>



    <section className=" py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">


      <h1 className="text-3xl font-bold text-center text-slate-50 mb-12">Full list of Tools</h1>
        
 
      <ul className="text-xl font-medium text-left text-slate-50 ">
        {urls.map((url, index) => (
          <li  className="text-2xl mb-8" key={index}>
                        <Link href={url} className="font-medium hover:text-primary" target="_blank" rel="noopener noreferrer" prefetch={false}>
                        {url}
            </Link>

            

          </li>
        ))}
      </ul>
 














      </div>
    </section>





    </div>
  );
}
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}