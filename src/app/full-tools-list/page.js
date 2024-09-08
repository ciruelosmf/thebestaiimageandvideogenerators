"use client"

import React from 'react';
import Script from "next/script";
import Link from "next/link"
import DynamicBackground from '@/components/DynamicBackground'; // Make sure to create this file
import urls from './urls'; // Import the URLs array




export default function Blog() {
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





      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
             
            <h2 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">AI Image and Video Generators - AI directory</h2>
          <nav className=" flex flex-row items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Gallery
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Blog
            </Link>
            <Link href="/prompts" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Prompts
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Contact
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
          <li  className="text-2xl mb-4" key={index}>
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
