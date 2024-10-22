
"use client"

import React from 'react';
import Script from "next/script";
import Link from "next/link"
import DynamicBackground from '@/components/DynamicBackground';
import Image from "next/image";

export default function Blog() {
return (
    <div className="relative min-h-screen flex flex-col items-center">
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
            `}
        </Script>

        <DynamicBackground rows={7} cols={6} />

        {/* ... (rest of the component code) ... */}



        




  <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
    <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
      <div className="flex flex-wrap items-center justify-center gap-2 ">
         
        <h2 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">AI Image and Video Generators - AI directory</h2>
      <nav className=" flex flex-row items-center gap-4">
        <Link  href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
          Home
        </Link>
        <Link  href="/gallery" className="text-sm font-medium hover:text-primary" prefetch={false}>
          Gallery
        </Link>
        <Link  href="/blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
          Blog
        </Link>
        <Link  href="/prompts" className="text-sm font-medium hover:text-primary" prefetch={false}>
          Prompts
        </Link>
        <Link  href="/about" className="text-sm font-medium hover:text-primary" prefetch={false}>
          About
        </Link>
        <Link  href="/contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
          Contact
        </Link>
      </nav>
      </div>

    </div>


    

  </header>










<section className=" text-gray-100 py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">




        <h1 className="text-4xl font-bold text-center mb-12">
        PhotoAI - An advanced AI-powered photo generation tool
        </h1>


        <div className="  flex flex-wrap flex-col items-center justify-center gap-2 ">

        <Link  href="https://photoai.com/?via=aiimageandvideogenerators" className="text-xl font-medium hover:text-primary text-white mb-2" prefetch={false}>
          Go to PhotoAI 
        </Link>
        <div className="  mb-2">
        <Image
            src="/photoaicom_1.jpg"
            width={200}
            height={200}
            alt="PhotoAI"
            className="aspect-square object-cover  shadow-lg"
          />
        </div>
        </div>


        <hr className="my-8 border-t mt-12 border-gray-300" />

        <h2 className="text-3xl font-semibold mt-8 mb-4">
        High-Quality Image Generation   
        </h2>

        <p className="mb-4 text-xl">
        PhotoAI excels in producing detailed images, ranging from wide shots to extreme close-ups, with a focus on photorealism and character consistency. Users can generate images that closely resemble real-life scenarios, overcoming common issues found in other AI image generators, such as distorted faces or inconsistent character appearances.
        </p>


        <hr className="my-8 border-t mt-12 border-gray-300" />



        <h2 className="text-3xl font-semibold mt-8 mb-4">
        Custom AI Models   
        </h2>

        <p className="mb-4 text-xl">
        Users can create personalized AI models by uploading a small set of photos 
        (10 to 20) that represent various settings and styles. This process trains 
        the AI to recognize and replicate the user's unique characteristics, allowing 
        for infinite image generation tailored to their specifications</p>





           <hr className="my-8 border-t mt-12 border-gray-300" />






           <h2 className="text-3xl font-semibold mt-8 mb-4">
           Scene Design Flexibility   
        </h2>

        <p className="mb-4 text-xl">
        The application enables users to design entire photo shoots from their computers.
         By simply describing a scene or uploading clothing images,
          users can generate photographs of models in various outfits 
          and settings without the logistical challenges of traditional photography
          </p>


           <hr className="my-8 border-t mt-48 border-gray-300" />






      <h2 className="text-3xl font-semibold mt-24 mb-4"> The Best AI Headshot Generator</h2>

      <p class="mb-4 text-2xl ">
If you want AI headshots that'll make people wonder if you've got a twin working as a model, 
<span class="font-bold text-2xl text-red-300"> HeadshotPro</span> is your golden ticket. It's like having a personal photographer, stylist, and 
Photoshop wizard all rolled into one AI-powered package. Now that's what we call a head shot!
</p>
    
      
<Link href="https://www.headshotpro.com/?via=aiimageandvideogenerators" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 

<div className="grid grid-cols-2 gap-4 mb-12">
        <img
            src="/HeadshotPro_1.jpg"
            width={300}
            height={300}
            alt="HeadshotPro"
            className="aspect-square object-cover  shadow-lg"
          />
          <img
            src="/HeadshotPro_2.jpg"
            width={300}
            height={300}
            alt="HeadshotPro"
            className="aspect-square object-cover  shadow-lg"
          />
        </div>

        <span class="font-bold text-2xl text-red-300   ">    Go to HeadshotPro website</span>
     

          </Link>

      <div className="grid grid-cols-2 gap-4 mt-12">
           <Link href="https://www.aiimageandvideogenerators.xyz/" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
           <span class="font-bold text-2xl text-red-300   ">   Go to the Homepage and discover new tools like this one!</span>
            </Link>
      </div>






          </div>
 
</section>









<footer >
              <Link  href="https://www.aiimageandvideogenerators.xyz" className="bg-red-900 text-sm font-medium " prefetch={false}>


          <div className="grid text-center  bg-green-100 rounded-lg shadow-lg p-2 gap-4 mt-48 mb-2">
          <span class="font-bold text-sm text-slate-700   "> 
          <span class="font-bold text-2xl text-green-700   "> https://www.aiimageandvideogenerators.xyz  </span>

          and "aiimageandvideogenerators.xyz" are registered trademarks. 2024.


          </span>
          </div>

          </Link>
</footer>


    <Link  href="https://www.aiimageandvideogenerators.xyz/blog" className="text-xl font-medium hover:text-primary text-white mb-12" prefetch={false}>
          Go to Blog
        </Link>

    </div>

   
);
}
