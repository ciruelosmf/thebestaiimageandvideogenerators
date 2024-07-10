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
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Discover Prompts to Ignite Your AI Creations</h1>
        <div className="prose prose-lg mx-auto">














        <p className="mb-12">
        <h2 className="text-lg font-bold  text-gray-900 mb-2"> Create mind maps with Claude 3.5 Sonnet</h2>

Claude 3.5 Sonnet can generate detailed mind maps of video shot types and elements, which can significantly improve your prompts for AI video generation with other AI tools like Runway Gen-3 or Luma Dream Machine.

Step-by-step:

Head over to Claude AI.

Use the following prompt: "I am using a video generator. Please give me a map of all the different types of shots and things I can enter for my prompt."

Explore the map and craft detailed prompts to use for AI video generator tools!

source: the rundown AI
          </p>




<div class="divide-y divide-dashed">
  <div>-</div>
 
</div>







          <p className="mb-12">
          Chibi [SUBJECT], [COLOR PALLETE], 3d model vinyl toy, white background, front perspective, minimalistic, OC renderer, C4D
          </p>
 


          <p className="mb-12">

          edwardian beauty, sepia, layered textures and patterns, black mountain college, bloomsbury group, dotted, object portraiture specialist, elegantly formal


          </p>

          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


          </p>




          <p className="mb-12">

          3 panels page about a fight between a gigantic irish mage redhead woman wearing a medieval outfit AND a black Dragon with amber eyes, near village with buildings burning. fireball magic, scared villagers are running (she is also colosal). boom sfx, comic style


          </p>







          <p className="mb-12">

          intrinsic stunning cyberpunk goddess beauty, parts and wires, sparks and crystals, tri color, symmetrical, perfection, 2583, bokeh effects, rule of thirds, perfect composition, Hollywood, Spielberg


          </p>




          <p className="mb-12">

          Render an Atmospheric, cinematic cityscape at golden hour, dramatic lighting silhouetting grand architecture against a textured sky. Use unique perspective, framed by natural elements, reflecting urban grandeur blended with nature's tranquil beauty. A true visual feast.


          </p>





          <p className="mb-12">

          A digital illustration of a male figure rendered in a minimalist and geometric style, with a focus on flat 2D shapes and solid colors. The subject is depicted in a three-quarter view, characterized by clean lines and a reduced color palette. He wears a Panama hat and round sunglasses, paired with a light-colored suit that simplifies the form into basic shapes without any shadows or texture. The background is a single warm, solid color that complements the figure. The overall design is sleek and stylish, capturing the essence of the subject with minimal visual elements, evoking a modern, iconographic art style.


          </p>





          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


          </p>





          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


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
 