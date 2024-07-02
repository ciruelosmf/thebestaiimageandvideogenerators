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
            Welcome to AI Image and Video Generators, a curated directory born from a simple yet crucial question: "Which AI image generator is truly the best?"
          </p>
          <p className="mb-4">
            In today's rapidly evolving AI landscape, answering this question has become increasingly challenging. The market is flooded with numerous powerful tools, each offering unique features and capabilities. This abundance of choice, while exciting, can often lead to decision paralysis for users.
          </p>
          <p className="mb-4">
            That's where we come in. We've taken on the task of meticulously researching, testing, and listing the cream of the crop in AI visual generation tools. Our goal is to simplify your search and help you find the perfect AI companion for your creative or business needs.
          </p>
          <p className="mb-4">
            Through our journey, we've discovered that these AI tools are more than just novelties—they're powerful allies in solving real-world business problems. From creating stunning marketing visuals to prototyping complex designs, the applications are vast and growing by the day.
          </p>
          <p className="mb-4">
            By concentrating the best AI tools in one accessible platform, we aim to cut through the noise of the AI boom. We provide a focused, curated selection that allows you to compare and choose with confidence, saving you time and ensuring you harness the full potential of AI in your projects.
          </p>
          <p className="mb-4">
            Our directory is designed to be your compass in the exciting world of AI-generated visuals. We're committed to staying at the forefront of this technology, continually updating our listings to reflect the latest and greatest in AI visual generation.
          </p>
 
          <p className="font-semibold mb-12">
            The AI Image and Video Generators Team
          </p>
          <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>

</div  >
  );
}
 