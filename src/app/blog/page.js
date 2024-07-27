"use client"

import React from 'react';
import Script from "next/script";
import Link from "next/link"
import DynamicBackground from '@/components/DynamicBackground'; // Make sure to create this file




export default function Blog() {
  return (




    <div className=" ">
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

 
      <DynamicBackground rows={3} cols={5} /> {/* Add this line */}



    <section className=" py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-slate-50 mb-12">AI Image and Video Generators</h1>
        
        <h1 className="text-3xl font-bold text-center text-slate-50 mb-12">Blog Posts</h1>
        <ul className="space-y-6">








        <li>
            <Link href="/blog/best-ai-headshot-app" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
            The Best AI Headshot Generator
            </Link>
          </li>




        <li>
            <Link href="/blog/best-ai-video-generators" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
            The best AI video generators
            </Link>
          </li>




          <li>
            <Link href="/blog/best-ai-image-generators" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
            The best AI image generators
            </Link>
          </li>






          <li>
            <Link href="/blog/ai-video-creation-tools-future-visual-content" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
            Top AI Video Creation Tools: The Future of Visual Content
            </Link>
          </li>




        <li>
            <Link href="/blog/guide-creating-marketing-campaign-using-AI-tools" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
              From Concept to Creation: A Step-by-Step Guide to Creating a Marketing Campaign Using AI Visual Tools
            </Link>
          </li>




          <li>
            <Link href="/blog/ai-generated-videos-content-creation" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
            How AI-Generated Videos Are Revolutionizing Content Creations
            </Link>
          </li>









          <li>
            <Link href="/blog/top-ai-image-generation-tools-2024" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
              Top 10 AI Image Generation Tools for 2024: A Comprehensive Comparison
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-generated-videos-content-creation" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
              How AI-Generated Videos Are Revolutionizing Content Creation
            </Link>
          </li>
          <li>
            <Link href="/blog/mastering-ai-visual-prompts" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
              Mastering Prompts: Tips and Tricks for Getting the Best Results from AI Visual Generators
            </Link>
          </li>
          <li>
            <Link href="/blog/ethics-ai-generated-visuals" className="text-xl font-semibold text-slate-50 hover:text-blue-800">
              The Ethics of AI-Generated Visuals: Copyright, Authenticity, and Future Regulations
            </Link>
          </li>


 













        </ul>








       <div className="mt-12">
          <Link href="/" className="text-sm font-medium text-slate-50 hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>















      </div>
    </section>





    </div>
  );
}
