"use client"
import Image from "next/image";
/**
 * v0 by Vercel.
 
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import DynamicBackground from '@/components/DynamicBackground'; // Make sure to create this file
import Script from "next/script";
import Head from 'next/head';
import { Tweet } from 'react-tweet'
import { useState, useEffect } from 'react';
 



export default function Component() {

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






    <div className="  relative min-h-screen flex flex-col items-center">

      <Head>
 
        <meta property="og:title" content="AI Image and Video Generators" />
        <meta
          property="og:description"
          content="AI Image and Video Generator is a directory to discover the best tools to create stunning visuals using AI"
        />
        <meta
          property="og:image"
          content="https://www.aiimageandvideogenerators.xyz/writesonic_1.webp"
        />
      </Head>


<Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          
});
         `}
      </Script>





<DynamicBackground rows={8} cols={12} /> {/* Add this line */}




    {/* Streamlined Header */}
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-slate-700 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container max-w-7xl py-3 px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BotIcon className="w-6 h-6 text-white" />
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
          </nav>
        </div>
      </header>



      <h1 className="   md:text-5xl text-center w-5/6 h-3/6 text-base font-semibold text-white  my-3 md:my-4 px-4 md:px-6">Twitter Generative AI Gallery</h1>


















































      <main className="container  md:max-w-screen-7xl	 max-w-fit px-2 md:px-6 pb-12 flex-1">

      <div className="    mx-auto"> {/* Add this wrapper */}



      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">



      
      <div className="">
    <Tweet id="1894822930552627426" />
  </div>




      <div className="">
    <Tweet id="1892585851218993651" />
  </div>




  <div className="">
    <Tweet id="1892227794240717298" />
  </div>





  <div className="">
    <Tweet id="1892277720723423315" />
  </div>




      <div className="">
    <Tweet id="1874746828899655894" />
  </div>



      <div className="">
    <Tweet id="1874875362020122741" />
  </div>


      <div className="">
    <Tweet id="1874627041934602410" />
  </div>


 
  <div className="">
    <Tweet id="1849489556996858023" />
  </div>
  <div className="">
    <Tweet id="1851843021207187888" />
  </div>

  <div className="">
    <Tweet id="1857069782043890175" />
  </div>


  <div className="">
    <Tweet id="1874122969439756329" />
  </div>

  <div className="">
    <Tweet id="1870497804617150926" />
  </div>

  <div className="">
    <Tweet id="1872614428598014298" />
  </div>

  <div className="">
    <Tweet id="1824382973858234465" />
  </div>








  
</div>














        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-5  ">



         


 
 






  <Link  href="https://app.photoai.me/?via=aiimageandvideogenerators" className="         " prefetch={false}>
<Card className="  block      p-1 "> 
                        <div className="flex items-center gap-1">                            
                            <div>
                            <CardTitle  >PhotoAI</CardTitle>
                            </div>
                        </div>                    
                        
                        <div className="grid grid-cols-2 gap-1">
                            <img
                            src="/photoai_3.JPG"
                            width={300}
                            height={300}
                            alt="photoai_3"
                            className="  object-cover  shadow-lg"    />
                            <img
                            src="/photoai_2.webp"
                            width={300}
                            height={300}
                            alt="photoai_2"
                            className="  object-cover  shadow-lg"   />
                        </div>        
  </Card>
  </Link>














  <Link  href="https://lumalabs.ai/dream-machine" className="         " prefetch={false}>
<Card className="  block     p-1 "> 
                        <div className="flex items-center gap-1">                            
                            <div>
                            <CardTitle  >Luma Dream Machine</CardTitle>
                            </div>
                        </div>                    
                        
                        <div className="grid grid-cols-2 gap-1">

                        <video
                                src="https://cdn-luma.com/public/lumalabs.ai/june-12-launch-dream-machine-high-res/assets/dream-machine/featured/videos/5.webm"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"

                                >
                                Luma Dream Machine
                                </video>
                                <video
                                src="https://cdn-luma.com/public/lumalabs.ai/june-12-launch-dream-machine-high-res/assets/dream-machine/featured/videos/6.webm"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                    preload="metadata"
                                >
                                Luma Dream Machine
                        </video>


                        </div>        
  </Card>
  </Link>











  <Link  href="https://app.leonardo.ai/?via=aiimageandvideogenerators" className="         " prefetch={false}>
<Card className="  block     p-1 "> 
                        <div className="flex items-center gap-1">                            
                            <div>
                            <CardTitle  >Leonardo.Ai</CardTitle>
                            </div>
                        </div>                    
                        
                        <div className="grid grid-cols-2 gap-1">

                        <video
                                src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/cat-space-med-1.mp4"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"

                                >
                                Leonardo.Ai
                                </video>
                                <video
                                src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Image_gen_email__.webm"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                    preload="metadata"
                                >
                                Leonardo.Ai
                        </video>


                        </div>        
  </Card>
  </Link>
















  <Link  href=" https://www.basedlabs.ai/?via=aiimageandvideogenerators" className="         " prefetch={false}>
<Card className="  block     p-1 "> 
                        <div className="flex items-center gap-1">                            
                            <div>
                            <CardTitle  >BasedLabs</CardTitle>
                            </div>
                        </div>                    
                        
                        <div className="grid grid-cols-2 gap-1">

                        <video
                                src="https://cdn.basedlabs.ai/2d245b40-490b-11ef-b2e9-3bd1b01acac4.mp4"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"

                                > BasedLabs
                                </video>
                                <video
                                src="https://cdn.basedlabs.ai/9c7f8ea0-3a98-11ef-9d9b-e54cf96b531b.mp4"
                                width={300}
                                height={300}
                                className="aspect-square object-cover  shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                    preload="metadata"
                                >BasedLabs
                                </video>
                                


                        </div>        
  </Card>
  </Link>


































        </div>


        </div>


      </main>





{/* Footer - Redesigned */}
<footer className="bg-slate-900 border-t border-white/10 py-12 text-white">
        <div className="container max-w-7xl px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BotIcon className="w-6 h-6" />
                <span className="text-lg font-bold">AI Image & Video Generators</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted resource for finding the best AI tools to unleash your creative potential.
              </p>
              <div className="flex gap-4">
                <Link href="https://x.com/bestaigeneratrs" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <TwitterIcon className="w-5 h-5" />
                </Link>
                <Link href="https://www.youtube.com/@AIImageandVideoGenerators" className="text-gray-400 hover:text-white" aria-label="YouTube">
                  <YouTubeIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Home</Link></li>
                <li><Link href="./gallery" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Gallery</Link></li>
                <li><Link href="./full-tools-list" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Tools Directory</Link></li>
                <li><Link href="./blog" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Blog</Link></li>
                <li><Link href="./prompts" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Prompts</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="./about" className="text-gray-400 hover:text-white text-sm" prefetch={false}>About Us</Link></li>
                <li><Link href="./contact" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Contact</Link></li>
                <li><Link href="https://t.me/tate_chess_bot" className="text-gray-400 border py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>PLAY Tate Telegram Chess Game</Link></li>
                <li><Link href="https://www.toolify.ai/" className="text-gray-400 hover:text-white text-sm" prefetch={false}>More AI Tools</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="./privacy" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Privacy Policy</Link></li>
                <li><Link href="./terms" className="text-gray-400 hover:text-white text-sm" prefetch={false}>Terms of Service</Link></li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="https://imagify.gumroad.com/l/xuhxv" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition text-sm"
                  prefetch={false}
                  onClick={() => trackConversion('list-tool-footer', 'footer', 'conversion')}
                >
                  List Your Tool
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 AI Image & Video Generators. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Built with ❤️ for AI creators and enthusiasts</p>
          </div>
        </div>
      </footer>


      
    </div>
  )
}
 





function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
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

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function YouTubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}


