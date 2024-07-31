
    "use client"

    import React from 'react';
    import Script from "next/script";
    import Link from "next/link"
    import DynamicBackground from '@/components/DynamicBackground';

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

            <DynamicBackground rows={3} cols={3} />

            {/* ... (rest of the component code) ... */}



            




      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
             
            <h1 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">AI Image and Video Generators - AI directory</h1>
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










    <section className=" text-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12">
            Exploring Free AI Image Generators: Midjourney and DALL-E 
            </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            What is an AI Image Generator?       
            </h2>

            <p className="mb-4">
            AI image generators are advanced tools that utilize artificial intelligence to create images based on textual descriptions. These tools leverage deep learning algorithms to interpret user inputs and generate visuals that match the given prompts. With the rise of AI technology, many platforms have emerged, offering users the ability to create stunning artwork without needing traditional artistic skills.     
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Midjourney: A Leading AI Image Generator   
            </h2>

            <p className="mb-4">
            Midjourney is a popular AI image generator known for its unique approach to creating visuals. By utilizing a specialized algorithm, Midjourney excels at producing artistic and imaginative images that often have a dream-like quality. Users can input various prompts, and the tool will generate multiple variations, allowing for creativity and exploration. The platform is accessible through Discord, making it easy for users to engage with the community and share their creations. 
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            DALL-E: The AI Powerhouse  
            </h2>

            <p className="mb-4">
            DALL-E, developed by OpenAI, is another prominent AI image generator that has gained significant attention. This tool uses a version of the GPT-3 model to create images from textual descriptions, showcasing its ability to understand and visualize complex prompts. DALL-E is particularly known for its versatility, allowing users to generate anything from realistic images to surrealistic interpretations. The tool has been used in various applications, from marketing to creative arts, highlighting its potential in diverse fields.
            </p>

            {/* ... (rest of the component code) ... */}








          <h2 className="text-3xl font-semibold mt-24 mb-4"> 

          Leonardo.Ai

          </h2>

          <p class="mb-4 text-2xl ">

                  With Leonardo.Ai, you can unlock your creative potential, crafting unique AI-driven art for galleries,
portfolios, digital displays, social media showcases, or personal projects. 
</p>
        
          
        <Link href="     https://app.leonardo.ai/?via=aiimageandvideogenerators" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 

        <div className="grid grid-cols-2 gap-4 mb-12">
                <img
                    src="            https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/04/AI-Video-of-alien-in-Las-vegas.gif"
                    width={300}
                    height={300}
                    alt="Leonardo.Ai
"
                    className="aspect-square object-cover  shadow-lg"
                  />
                  <img
                    src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/03/retro-Anime-landscape-snow-covered-AI-art-768x439.jpg"
                    width={300}
                    height={300}
                    alt="Leonardo.Ai
"
                    className="aspect-square object-cover  shadow-lg"
                  />
            </div>
 
            <span class="font-bold text-2xl text-red-300   ">    
            
            Go to Leonardo.Ai website
            
            </span>
         

              </Link>


 
 
              </div>
     
    </section>







        </div>
    );
    }
    