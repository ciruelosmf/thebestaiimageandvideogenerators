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
 



export default function Component() {
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




      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50  ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
            <BotIcon className="w-6 h-6" />
            <h1 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">AI Image and Video Generators</h1>
          <nav className=" flex flex-row items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="./gallery" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Gallery
            </Link>
            <Link href="./blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Blog
            </Link>
            <Link href="./prompts" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Prompts
            </Link>
            <Link href="./about" className="text-sm font-medium hover:text-primary" prefetch={false}>
              About
            </Link>
            <Link href="./contact" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Contact
            </Link>
          </nav>
          </div>
 
        </div>


        

      </header>



      <h1 className="   md:text-5xl text-center w-5/6 h-3/6 text-base font-semibold text-white  my-3 md:my-4 px-4 md:px-6">Gallery of AI art made by our listed tools</h1>


















































      <main className="container  md:max-w-screen-7xl	 max-w-fit px-2 md:px-6 pb-12 flex-1">

      <div className="    mx-auto"> {/* Add this wrapper */}

        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-5  ">



 
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just tested <a href="https://twitter.com/Kling_ai?ref_src=twsrc%5Etfw">@Kling_ai</a> AI for meme creation and… it&#39;s 100% out of control! You won’t believe the results. 😱🔥 Check out these 7 crazy examples I’ve made. You’re not ready for this! 😂👇 <a href="https://t.co/yU0MWJzrdg">pic.twitter.com/yU0MWJzrdg</a></p>&mdash; Pierrick Chevallier | IA (@CharaspowerAI) <a href="https://twitter.com/CharaspowerAI/status/1849489556996858023?ref_src=twsrc%5Etfw">October 24, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ghost judge chooses the winning 
    worm cake in the zombie bake-off 🔊 on <a href="https://t.co/52UXaEMfIy">pic.twitter.com/52UXaEMfIy</a>
    </p>&mdash; PAM (@Heartwords3) <a href="https://twitter.com/Heartwords3/status/1851843021207187888?ref_src=twsrc%5Etfw">October 31, 2024</a>
  </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>









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





      <footer className=" border-t border-t-muted bg-slate-50 ">
        <div className="container max-w-7xl py-6 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BotIcon className="w-6 h-6" />
            <span className="text-sm font-medium px-4 ">AI Image and Video Generators</span>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="./privacy" className="hover:text-gray-700 transition-colors   " prefetch={false}>
              Privacy
            </Link>
 
            <Link href="./terms" className="hover:text-gray-700 transition-colors " prefetch={false}>
            Terms
            </Link>
 

            <Link className="hover:text-gray-700 transition-colors" href="https://x.com/bestaigeneratrs">
              X
            </Link>

            <Link className="hover:text-gray-700 transition-colors" href="https://x.com/bestaigeneratrs">
              YouTube
            </Link>



          </nav>

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
 