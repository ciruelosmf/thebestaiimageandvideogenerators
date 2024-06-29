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





<DynamicBackground rows={24} cols={8} /> {/* Add this line */}




      <header className=" sticky top-0 z-40 border-b border-b-muted">
        <div className="container max-w-7xl py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <BotIcon className="w-6 h-6" />
            <h1 className="md:text-xl text-base font-semibold text-amber-300  px-4 md:px-6">AI Image and Video Generators</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="./blog" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
            
          </Button>
        </div>
      </header>





















































      <main className="container   px-2 md:px-6 py-12 flex-1">

      <div className="max-w-8xl  mx-auto"> {/* Add this wrapper */}

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
                  src="https://framerusercontent.com/images/DwlkJh0JL9ULdOk3P8Prepp67Q.jpg?scale-down-to=2048"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="https://framerusercontent.com/images/bMB6nEwEWMvW06qGOkcFWFvlMA.jpg?scale-down-to=2048"
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
                  src="/luma_1.JPG"
                  width={300}
                  height={300}
                  alt="Luma Labs Dream Machine"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="/luma_2.JPG"
                  width={300}
                  height={300}
                  alt="Luma Labs Dream Machine"
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
                  <CardTitle     >
                  
                    Midjourney
              
                    
                    </CardTitle>
                  <CardDescription>
                    An AI-powered image generation tool that creates unique and imaginative images from text prompts.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Midjourney"
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
                  <CardTitle>DALL-E 2</CardTitle>
                  <CardDescription>
                    A powerful AI model that can create unique images from text descriptions.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="DALL-E 2"
                  className="aspect-square object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
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
                  Enterprise Teams

Create highly engaging videos in minutes using the power of AI. No video editing experience required. Get Started For Free!
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





















































































        </div>


        </div>


      </main>





      <footer className=" border-t border-t-muted">
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

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
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


function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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


function PaletteIcon(props) {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function PencilIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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


function WandIcon(props) {
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
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}