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





      <header className=" sticky top-0 z-40   block    ">
        <div className="container max-w-7xl py-1 px-1 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
 
            <h1 className={`border-2  md:text-xl text-base font-semibold text-white  px-2 md:px-6 ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>AI Image and Video Generators - AI directory</h1>
          <nav className={`flex flex-row flex-wrap items-center justify-center gap-2 text-white p-1    md:text-xl text-base font-semibold text-white  px-2 md:p-2 ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`} >
            <Link href="/" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Home
            </Link>
            <Link href="./gallery" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
            Twitter Generative AI Gallery
            </Link>
            <Link href="./full-tools-list" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Full List of Tools
            </Link>


            <Link href="./blog" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Blog
            </Link>
            <Link href="./prompts" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              Prompts
            </Link>
            <Link href="./about" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              About
            </Link>
            <Link href="./contact" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              Contact 
            </Link>


            <Link href="https://t.me/tate_chess_bot" className="text-xs border-lime-400 md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              Play Tate Telegram Chess Game 
            </Link>




                      <Link href="https://imagify.gumroad.com/l/xuhxv" className="text-sm font-medium hover:text-primary hover:bg-red-900   border-2 p-1" prefetch={false}>
              List your Tool 
            </Link>


 
             <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://x.com/bestaigeneratrs">
              X
            </Link>

            <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://www.youtube.com/@AIImageandVideoGenerators">
              YouTube
            </Link>

            <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://www.toolify.ai/">
            Discover more AI Tools
            </Link>


          </nav>
          </div> 
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
