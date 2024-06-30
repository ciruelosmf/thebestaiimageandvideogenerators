import React from 'react';
import Script from "next/script";
import Link from "next/link"



export default function Blog() {
  return (




    < div>
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
    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">About Us</h1>
    <div className="prose prose-lg mx-auto">
      <p className="mb-4">
        Welcome to AI Image and Video Generators - your go-to resource for exploring the cutting-edge world of AI-powered visual content creation.
      </p>
      <p className="mb-4">
        In today's fast-paced digital landscape, the ability to create stunning, unique visuals quickly and efficiently is more valuable than ever. That's where we come in. Our mission is to curate and showcase the best AI tools available for generating images and videos, making it easier for creators, marketers, and innovators to harness the power of artificial intelligence in their visual projects.
      </p>
      <p className="mb-4">
        Whether you're a professional designer looking to streamline your workflow, a content creator seeking to push the boundaries of imagination, or a curious enthusiast eager to explore the possibilities of AI-generated art, our platform offers a comprehensive guide to the most powerful and user-friendly tools in the market.
      </p>
      <p className="mb-4">
        From text-to-image generators that bring your wildest ideas to life, to AI-powered video creation tools that revolutionize the way we tell stories, we cover it all. Our team of tech enthusiasts and AI experts constantly scours the internet to bring you up-to-date information on the latest advancements in AI visual generation.
      </p>
      <p className="mb-4">
        We believe that AI is not just a tool, but a collaborator in the creative process. By providing easy access to these groundbreaking technologies, we aim to democratize visual content creation and inspire a new wave of digital artistry.
      </p>
      <p className="mb-4">
        Join us on this exciting journey as we explore the intersection of artificial intelligence and human creativity. Discover, experiment, and create with AI Image and Video Generators - where your imagination is the only limit.
      </p>
      <p className="mb-4">
        Stay innovative, stay creative!
      </p>
      <p className="font-semibold mb-12">
        The AI Image and Video Generators Team
      </p>
      <Link href="/" className="text-sm font-medium hover:text-primary " prefetch={false}>
              Go to Homepage
            </Link>

    </div>
  </div>
</section>

</div  >
  );
}
