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





<DynamicBackground rows={12} cols={12} /> {/* Add this line */}




      <header className=" sticky top-0 z-40 border-b border-b-muted block bg-slate-50 opacity-95 shadow-lg ">
        <div className="container max-w-7xl py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
            <BotIcon className="w-6 h-6" />
            <h1 className="md:text-xl text-base font-semibold text-black  px-4 md:px-6">AI Image and Video Generators</h1>
          <nav className=" flex flex-row items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="./blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Blog
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



      <h1 className="   md:text-5xl text-center w-5/6 h-3/6 text-base font-semibold text-white  my-3 md:my-4 px-4 md:px-6">Discover Top AI Visual Tools.</h1>


















































      <main className="container  md:max-w-screen-2xl	 max-w-4xl px-2 md:px-6 pb-12 flex-1">

      <div className="    mx-auto"> {/* Add this wrapper */}

        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 md:gap-4 ">





        <Link  href="https://app.photoai.me/?via=aiimageandvideogenerators" className="  block bg-slate-50 opacity-95 shadow-lg  " prefetch={false}>

        <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                
                <div>
                  <CardTitle  >PhotoAI</CardTitle>
                  <CardDescription>
                  Boost your profile picture on Tinder, LinkedIn, Twitter, Instagram or elsewhere with photoai.me

Upload photos of yourself and get new stunning AI photos! With photoai.me, you can generate AI images for as low as 20 cents per picture. Try it out.  
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/photoai_1.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="/photoai_2.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter>
             

                 
            </CardFooter>
          </Card>
          </Link>
















          <Link href="https://www.imagine.art/?ref=mwe1nji" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="  ">
            <CardHeader>
              <div className="flex items-center gap-4">     
                <div>
                  <CardTitle>Imagine AI Art Generator</CardTitle>
                  <CardDescription>
                  Create AI Art and turn your imaginations into reality with Imagine's AI Art Generator and produce stunning visuals to cover up your artistic thoughts.

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
  <div className="grid grid-cols-2 gap-4">
    <video
      src="https://cdn2.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"

    >
      Your browser does not support the video tag.
    </video>
    <video
      src="https://cdn2.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-video.webm"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>

















    <Link href="https://writesonic.com/photosonic-ai-art-generator" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className=" ">
            <CardHeader>
              <div className="flex items-center gap-4">     
                <div>
                  <CardTitle>Writesonic </CardTitle>
                  <CardDescription>
                  Create something that has never been seen before. Let Writesonic’s AI art generator be your paintbrush. It's time to say goodbye to stock image hunting and awaiting new creatives for weeks.

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-2 gap-4">
 
                <img
                  src="./writesonic_1.webp "
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="./writesonic_2.webp"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover rounded-md"
                />
            </div>
          </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>



















          <Link href="https://dreamstudio.ai/" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">     
                <div>
                  <CardTitle>DreamStudio </CardTitle>
                  <CardDescription>
                  Start generating the
                  images of your dreams.

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-2 gap-4">
 
                <img
                  src="./dreamstudio_1.jfif"
                  width={300}
                  height={300}
                  alt="dreamstudio_1"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="./dreamstudio_2.jfif"
                  width={300}
                  height={300}
                  alt="dreamstudio_1"
                  className="aspect-square object-cover rounded-md"
                />
            </div>
          </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>


























          <Link href="https://lumalabs.ai/dream-machine" className="block bg-slate-50 opacity-95 shadow-lg " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
       
                <div>
                  <CardTitle>Dream Machine</CardTitle>
                  <CardDescription>
                  Dream Machine is an AI model that makes high quality, realistic videos fast from text and images.
                  It is capable of generating physically accurate, consistent and eventful shots. Available to everyone now!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
             
             
              <img
                  src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*8-R5XPmVZyV9ZMTjhUm_RQ.gif"
                  width={300}
                  height={300}
                  alt="dreamstudio_1"
                  className="aspect-square object-cover rounded-md"
                />

 


<video
      src="https://cdn-luma.com/public/lumalabs.ai/june-12-launch-dream-machine-high-res/assets/dream-machine/featured/videos/2.webm"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
      Your browser does not support the video tag.
    </video>

 
              </div>
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
          </Link>



   




          <Link href="https://www.midjourney.com/home" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>

          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">                 
                <div>
                  <CardTitle>Midjourney</CardTitle>
                  <CardDescription>
                    An AI-powered image generation tool that creates unique and imaginative images from text prompts.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src=" ./dj_1.jpg   "
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover rounded-md shadow-lg"
                />
                <img
                  src="./dj_2.jpg "
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover rounded-md shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter>  
            </CardFooter>
          </Card>
          </Link>

















          <Link href="https://app.runwayml.com/login" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="  ">
            <CardHeader>
              <div className="flex items-center gap-4">     
                <div>
                  <CardTitle>Runway AI Gen-3 Alpha</CardTitle>
                  <CardDescription>
                  Produce hyper-realistic AI videos from text, image or video prompts. A new frontier for high-fidelity, controllable video generation.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
  <div className="grid grid-cols-2 gap-4">
    <video
      src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/gen-3-alpha/carousel-01/gen-3-alpha-output-002.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"

    >
      Your browser does not support the video tag.
    </video>
    <video
      src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/gen-3-alpha/homepage/carousel/gen-3-alpha-output-003.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>














          <Link href="https://www.deepbrain.io/features/ai-video-generator" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="  ">
            <CardHeader>
              <div className="flex items-center gap-4">     
                <div>
                              <CardTitle>DeepBrain AI</CardTitle>
                              <CardDescription>
                              Save time and money by turning any text into high quality videos in minutes. No cameras, mics, or actors needed.


</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img
                  src=" https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/660d14a6d88b2b2db8e26809_006.png"
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover rounded-md shadow-lg"
                />
                <img
                  src="https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/660d14a67022cce110e967ee_001.png"
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover rounded-md shadow-lg"
                />
              </div>
</CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>















          <Link href="https://openai.com/index/dall-e-3/" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>

          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
     
                <div>
                  <CardTitle>DALL-E 3</CardTitle>
                  <CardDescription>
                    A powerful AI model that can create unique images from text descriptions.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.ctfassets.net/kftzwdyauwt9/As8KNbCDwnOSNYCPHRPOR/5cd4506d01ddc8b772cdb206327b0985/hero-still-life-desktop.jpg?w=640&q=80&fm=webp"
                  width={300}
                  height={300}
                  alt="DALL-E 2"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="https://images.ctfassets.net/kftzwdyauwt9/5JZsznv2kZBJhcntpSLEL9/fbe72de7edaceb8a44176170312ccf2a/picnic-cherry-tree.jpeg?w=1080&q=90&fm=webp"
                  width={300}
                  height={300}
                  alt="DALL-E 2"
                  className="aspect-square object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter>
 
 
            </CardFooter>
          </Card>

          </Link>




















          <Link href="https://lumalabs.ai/dream-machine" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>Pictory AI</CardTitle>
                  <CardDescription>
                  Enterprise Teams Create highly engaging videos in minutes using the power of AI. No video editing experience required. Get Started For Free!
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/pictory.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="/pictory.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>































          <Link href="https://www.videofast.app/" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>VideoFast </CardTitle>
                  <CardDescription>
                  Video Fast is an online video generation tool to create high-quality videos with AI-generated avatars and voices in minutes
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://framerusercontent.com/images/rbCdOqlduGxFDJRA1VMw6QJx0s.gif"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="https://framerusercontent.com/images/YR0QoptQ9rYXwm2co5MkWmSsgUg.gif"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover rounded-md"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>

















          <Link href="https://www.videofast.app/" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>OpusClip  </CardTitle>
                  <CardDescription>
                  OpusClip is a generative AI video tool that repurposes long videos into shorts in one click. Powered by     OPENAI                

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <video
      src="https://ext.cdn.opus.pro/corp-it/landing-page/desktop_update.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"

    >
      Your browser does not support the video tag.
    </video>
    <video
      src="https://assets-global.website-files.com/6388604483b03a9ecb34d695/65bb7ef012f2fd3fed4c1231_OpusClip%20Video%203-transcode.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>






















          <Link href="https://virbo.wondershare.com/" className="block bg-slate-50 opacity-95 shadow-lg" prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>          Wondershare Virbo
                  </CardTitle>
                  <CardDescription>
                  Generate Engaging AI Videos in Minutes! Convert text into expert spokesperson videos in 460+ voices and languages with ease.
             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <video
      src="https://virbo.wondershare.com/assets/video/homepage2024/banner-video.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"

    >
      Your browser does not support the video tag.
    </video>
    <video
      src="https://virbo.wondershare.com/assets/video/homepage2024/education-training.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover rounded-md"
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>















































        </div>


        </div>


      </main>





      <footer className=" border-t border-t-muted bg-slate-50 opacity-95 shadow-lg">
        <div className="container max-w-7xl py-6 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BotIcon className="w-6 h-6" />
            <span className="text-sm font-medium">AI Image Generators</span>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="./privacy" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Privacy
            </Link>
 
            <Link href="./terms" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Terms
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
 