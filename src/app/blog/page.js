import React from 'react';
import Script from "next/script";
import Link from "next/link"




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

 

    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Image and Video Generators</h1>
        
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Blog Posts</h1>
        <ul className="space-y-6">
          <li>
            <Link href="/blog/posts/top-ai-image-generation-tools-2024" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              Top 10 AI Image Generation Tools for 2024: A Comprehensive Comparison
            </Link>
          </li>
          <li>
            <Link href="/blog/posts/ai-generated-videos-content-creation" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              How AI-Generated Videos Are Revolutionizing Content Creation
            </Link>
          </li>
          <li>
            <Link href="/blog/mastering-ai-visual-prompts" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              Mastering Prompts: Tips and Tricks for Getting the Best Results from AI Visual Generators
            </Link>
          </li>
          <li>
            <Link href="/blog/posts/ethics-ai-generated-visuals" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              The Ethics of AI-Generated Visuals: Copyright, Authenticity, and Future Regulations
            </Link>
          </li>
          <li>
            <Link href="/blog/posts/guide-creating-marketing-campaign-using-AI-tools" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              From Concept to Creation: A Step-by-Step Guide to Creating a Marketing Campaign Using AI Visual Tools
            </Link>
          </li>
        </ul>
        <div className="mt-12">
          <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>





    </div>
  );
}
