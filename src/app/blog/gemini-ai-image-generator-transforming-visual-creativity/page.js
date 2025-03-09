
    "use client"

    import React from 'react';
    import Script from "next/script";
    import Link from "next/link"
    import DynamicBackground from '@/components/DynamicBackground';
    import Image from "next/image";
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

    import { Button } from "@/components/ui/button"
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



            




{/* Streamlined Header */}
<header className={`sticky top-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-slate-700 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container max-w-7xl mx-auto py-3 px-4 md:px-6 flex items-center justify-between">
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










    <section className=" text-gray-100 py-16 bg-gradient-to-b from-purple-600/90 via-pink-600/90 to-red-600/90  shadow rounded rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12">
            Gemini + ImageFX: Google's powerful Image Generator Combo
            </h1>


      <div className=" flex justify-center      mb-2">
         <Image
             src="/blog/gemini-ai-image-generator-transforming-visual-creativity/1.jpg"
             width={800}
             height={800}
             alt="Gemini + ImageFX"
             className=" object-cover my-12 shadow-lg"
           />
         </div>



            <h2 className="text-2xl font-semibold mt-8 mb-4">
            What is Gemini AI Image Generator?       
            </h2>

            <p className="mb-4">
            Gemini 2.0 Generator is an innovative multimodal large language model. It is designed to understand various types of information like audio, video, text, images abd computer code.     
            </p>


            <div className="grid grid-cols-2 gap-4 mt-12">
               <Link href="https://gemini.google.com/app" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
               <span class="font-bold text-2xl text-red-300   ">Visit Gemini</span>
                </Link>
          </div>


            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Features of Gemini AI Image Generator   
            </h2>

            <p className="mb-4">
            Gemini is very good at understanding conversations and contexts. It is designed to have very connectino with many informatic tools. 
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Practical Application of Gemini for AI Image Generation
            </h2>

            <p className="mb-4">
            You must use Gemini as a your assistant to write the bolg post. It must be your personal brainstorming partner. Your initial idea can be improved when you feed it to Gemini and ask it to create or extend and fix the intial prompt. SO you will have a better description of your desired visual outcome. 
            </p>

            {/* ... (rest of the component code) ... */}



            <h2 className="text-2xl font-semibold mt-16 mb-4">
            What is ImageFX Image Generator? 
            </h2>

            <p className="mb-4">
            Google has developed one of the best visual generator in the field. ImageFX is the tool that will convert your ideas into incredible creations. A vey simple too witth prompt input and a few parameters to choose.
            </p>


            <div className="grid grid-cols-2 gap-4 mt-12">
               <Link href="https://labs.google/fx/tools/image-fx" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
               <span class="font-bold text-2xl text-red-300   ">Visit ImageFX Image Generator</span>
                </Link>
          </div>


            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Last Step
            </h2>

            <p className="mb-4">
            Your prompt now can be inserted into ImageFX to create the image. 
            </p>


            <div className=" flex justify-center mb-2">
         <Image
             src="/blog/gemini-ai-image-generator-transforming-visual-creativity/2.jpg"
             width={800}
             height={800}
             alt="Perchance AI"
             className=" object-cover my-12 shadow-lg"
           />
         </div>



         <hr className="my-48 border-t  border-gray-300" />


          <h2 className="text-3xl font-semibold mt-24 mb-4"> 

          Leonardo.Ai

          </h2>

          <p class="mb-4 text-2xl ">

                  With Leonardo.Ai, you can unlock your creative potential, crafting unique AI-driven art for galleries,
portfolios, digital displays, social media showcases, or personal projects. 
</p>
        
          
        <Link href="https://app.leonardo.ai/?via=aiimageandvideogenerators" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 

        <div className="grid grid-cols-2 gap-4 mb-12">
                <img
                    src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/04/AI-Video-of-alien-in-Las-vegas.gif"
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


 
              
                        <div className="grid grid-cols-2 gap-4 mt-12">
               <Link href="https://www.aiimageandvideogenerators.xyz/blog" className="ftext-xl font-medium hover:text-primary  " prefetch={false}> 
               <span class="font-bold text-2xl text-red-300   ">Visit our Blog for the latest news and insights on AI!</span>
                </Link>
          </div>



 
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