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



      <h1 className="   md:text-5xl text-center w-5/6 h-3/6 text-base font-semibold text-white  my-3 md:my-4 px-4 md:px-6">Discover Top AI Visual Tools.</h1>


















































      <main className="container  md:max-w-screen-7xl	 max-w-fit px-2 md:px-6 pb-12 flex-1">

      <div className="    mx-auto"> {/* Add this wrapper */}

        <div className="grid grid-cols-1  md:grid-cols-5 gap-8 md:gap-5  ">





        <Link  href="https://app.photoai.me/?via=aiimageandvideogenerators" className="  block      " prefetch={false}>

        <Card className="  block      ">
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
                  className="  object-cover  shadow-lg"
                />
                <img
                  src="/photoai_2.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="  object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter>
             

                 
            </CardFooter>
          </Card>
          </Link>
















          <Link href="https://www.imagine.art/?ref=mwe1nji" className="block  " prefetch={false}>
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
      className="aspect-square object-cover  shadow-lg"
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
      className="aspect-square object-cover  shadow-lg"
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


























          <Link href="       https://app.artisse.ai/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Artisse AI
                  </CardTitle>
                  <CardDescription>
                  Redefine Photography. Stunning photos in minutes. Effortless creativity for any purpose with personal AI photos.
             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">


              <video
     src="https://artisse.ai/wp-content/uploads/2024/06/Web-Hero-Animation.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover   "
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
          </video>

          <video
     src="https://artisse.ai/wp-content/uploads/2024/06/Actual-photo.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover  "
      autoPlay
      muted
      loop
      playsInline
           preload="metadata"
    >
          </video>
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>











































          <Link href="       https://fliki.ai/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Fliki 
                  </CardTitle>
                  <CardDescription>
                  Fliki helps you create audio and video content at scale with the power of generative AI.


             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">


              <img
                  src="          https://cdn.fliki.ai/image/page/6311d2bb7719d50f37562296/65f4622e06d2650204d20b2d.jpg "
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="https://cdn.fliki.ai/image/page/6311d2bb7719d50f37562296/65f2f0c54768a6979a0548b5.jpg"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>














 




          <Link href="       https://fliki.ai/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Leonardo.Ai
 
                  </CardTitle>
                  <CardDescription>
                  With Leonardo.Ai, you can unlock your creative potential, crafting unique AI-driven art for galleries,
portfolios, digital displays, social media showcases, or personal projects. 


             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">


              <img
                  src="           https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/04/AI-Video-of-alien-in-Las-vegas.gif "
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/03/retro-Anime-landscape-snow-covered-AI-art-768x439.jpg"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>

























         <Link href="     https://www.headshotpro.com/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         HeadshotPro 
 
                  </CardTitle>
                  <CardDescription>
                  Get professional business headshots in minutes with our AI-photographer. Upload photos, pick your styles & receive 120+ headshots.


             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">


              <img
                  src="           https://storage.googleapis.com/headshothq/style/1333086c-268e-46c4-ad23-6210942d84ec.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20240720%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240720T020158Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=26c545b0bb640933eb5e84af2016b12a8f75333ad67534f095cbb445fabf1cd713373567120a78aa09046e6e9fb0752ad92b744bf6e63c686f6e9c9c09ecb9a42623dbce2cc37e658475e953f69ef446e6799a06085eed24678f0a7952293ff4532b9ce781d5b502863951c30c9c4f60328546ddc5fb63c5e8c0cca0ed9f2499a4e6ce672f0ce041367feecfb2d72809aa8ff780b7c25b98223befe3b47bc6cd197f7f601eb03142486f1225dec0873174d0c5ed6219338b1166f92d336fd9afa51fab611028c807a3443e546d96363c0016b5513353667b433cbc1aba4c17638d43c06b059b3528699434320681a24e83ae2701be6ca574a76e2e4b298ae26f"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="https://storage.googleapis.com/postcrafts-public-content/headshotpro/reviews/6662d6c81667a62d19833d5e-6662e42adcb33e12239f19ab-thumbnail.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20240720%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240720T020217Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=0e6701450cda6d9307097d5cdbfdf05350a223252116370154f2956a02fba011507635f0f47b02693fbfac7c0134252e4cb24f4f08b05ed43a9a71e2451f8843ce4241f55ef7a2964c28f1dd28c5990b7927e527054f9d38e88db1deca36ac979b4857ceb05f24f0e6a655b6a9648cc4abc701a22a021b03e5b80d93e0e5ce0c941a148a098be81d722b0784ae4c0049494291de3511d0382e4119e645e6404905b0ad8eb01bd79acd7793242b6dd632945826454d83087546c5905a4e5a274d6751dd33e63821fe00acafaccec6ab642683db6bf65aec0b63e58ce479c547a2fe1b12158e71c7d930fcee1a395fc0935701fb2e3d31011d852c06877c071674"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>




























    <Link href="https://writesonic.com/photosonic-ai-art-generator" className="block  " prefetch={false}>
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
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="./writesonic_2.webp"
                  width={300}
                  height={300}
                  alt="Writesonic"
                  className="aspect-square object-cover  shadow-lg"
                />
            </div>
          </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>



















          <Link href="https://dreamstudio.ai/" className="block   " prefetch={false}>
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
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="./dreamstudio_2.jfif"
                  width={300}
                  height={300}
                  alt="dreamstudio_1"
                  className="aspect-square object-cover  shadow-lg"
                />
            </div>
          </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>


























          <Link href="https://lumalabs.ai/dream-machine" className="block   " prefetch={false}>
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
                  className="aspect-square object-cover  shadow-lg"
                />

 


<video
      src="https://cdn-luma.com/public/lumalabs.ai/june-12-launch-dream-machine-high-res/assets/dream-machine/featured/videos/2.webm"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
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



   




          <Link href="https://www.midjourney.com/home" className="block  " prefetch={false}>

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
                  className="aspect-square object-cover "
                />
                <img
                  src="./dj_2.jpg "
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover"
                />
              </div>
            </CardContent>
            <CardFooter>  
            </CardFooter>
          </Card>
          </Link>

















          <Link href="https://app.runwayml.com/login" className="block  " prefetch={false}>
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
      className="aspect-square object-cover  shadow-lg"
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
      className="aspect-square object-cover  shadow-lg"
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














          <Link href="https://www.deepbrain.io/features/ai-video-generator" className="block  " prefetch={false}>
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
                  className="aspect-square object-cover  shadow-lg shadow-lg"
                />
                <img
                  src="https://cdn.prod.website-files.com/63da3362f67ed6f71c9489c1/660d14a67022cce110e967ee_001.png"
                  width={300}
                  height={300}
                  alt="Midjourney"
                  className="aspect-square object-cover  shadow-lg shadow-lg"
                />
              </div>
</CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>















          <Link href="https://openai.com/index/dall-e-3/" className="block  " prefetch={false}>

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
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="https://images.ctfassets.net/kftzwdyauwt9/5JZsznv2kZBJhcntpSLEL9/fbe72de7edaceb8a44176170312ccf2a/picnic-cherry-tree.jpeg?w=1080&q=90&fm=webp"
                  width={300}
                  height={300}
                  alt="DALL-E 2"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter>
 
 
            </CardFooter>
          </Card>

          </Link>




















          <Link href="https://lumalabs.ai/dream-machine" className="block  " prefetch={false}>
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
                  src="/pictory.JPG"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="/pictory.JPG"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>































          <Link href="https://www.videofast.app/" className="block  " prefetch={false}>
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
                  className="aspect-square object-cover  shadow-lg"
                />
                <img
                  src="https://framerusercontent.com/images/YR0QoptQ9rYXwm2co5MkWmSsgUg.gif"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>

















          <Link href="https://www.opus.pro/" className="block  " prefetch={false}>
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
      className="aspect-square object-cover  shadow-lg"
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
      className="aspect-square object-cover  shadow-lg"
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






















          <Link href="https://virbo.wondershare.com/" className="block  " prefetch={false}>
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
      src="https://virbo.wondershare.com/assets/video/homepage2024/step1-video.mp4"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
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
      className="aspect-square object-cover  shadow-lg"
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









   







          <Link href="       https://collov.ai/" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Collov AI
                  </CardTitle>
                  <CardDescription>
                  collov.ai uses artificial intelligence to transforms your interior aspirations into stunning, visionary design renderings, merging convenience with aesthetics. You’ll love the Collov way.
             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img

      src="https://collov.ai/img/interior.2df65ae7.jpg"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
 

      />
      
     
    <img
                  src="https://d17axom7zrjq3q.cloudfront.net/20230901/7e2c925c-fb7e-48f9-9001-7296343f4bd3.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>

 










          <Link href="       https://interiorai.com/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Interior AI
                  </CardTitle>
                  <CardDescription>
                  Redesign your interior in seconds using AI.
                  Save money and use AI to redesign your interior from your laptop or phone instead of hiring an expensive interior designer
             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img

      src="https://interiorai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1536,quality=75/https://r2-us-west.interiorai.com/1707042290-620e079153d29aea78df57c4da248a9d-1.png"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
 

      />
      
     
    <img
                  src="https://customer-ecy0wgmn1dow5gsd.cloudflarestream.com/af09f55d3aa552d2c07713031191f363/thumbnails/thumbnail.jpg?time=&height=600"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>
























          <Link href="       https://www.basedlabs.ai/?via=aiimageandvideogenerators" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         BasedLabs AI
                  </CardTitle>
                  <CardDescription>
                  From AI anime art, AI image generation, and AI image extending. BasedLabs offers a lot of based AI tools to help you do more.


             

                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <video
      src="https://cdn.basedlabs.ai/a3960a51-6463-4271-b8fa-4c830a5df9a1
"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"

    >
      Your browser does not support the video tag.
    </video>
    <video
      src="
          
          https://cdn.basedlabs.ai/8cf57d10-2598-11ef-91c0-6b7a39e8938f.mp4
"
      width={300}
      height={300}
      className="aspect-square object-cover  shadow-lg"
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




























          <Link href="      https://www.midjourney.com/home" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Midjourney 
                  </CardTitle>
                  <CardDescription>
                  No matter what type of AI art you create, Midjourney can do it.         
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img
                  src="https://cdn.midjourney.com/6b8dda59-8d2a-4b9f-a3ef-3a3abea3f1a4/0_1_640_N.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />

                  <img
                  src="https://cdn.midjourney.com/c30cc361-2e2e-4f3d-a2c5-a8856dae5f4e/0_1_640_N.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>



























          <Link href="       https://magnific.ai/" className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         Magnific 
                  </CardTitle>
                  <CardDescription>
                  The most advanced AI tech to achieve insanely high-res upscaling. Not only upscale, enhance & transform! Magnific can reimagine as many details as you wish guided by your own prompt and parameters!           
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img
                  src="https://magnific.ai/magnific-highres2low.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />

                  <img
                  src="https://magnific.ai/ilu8low.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>





































          <Link href="        https://cgdream.ai/   " className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         CGDream AI Image Generator 
                  </CardTitle>
                  <CardDescription>
                  Take full control of your visuals with our AI image generator, creating stunning images with various customization options, filters, and 3D controls.          
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img
                  src="https://cdn.prod.website-files.com/668281ece7b010ab6b0d2eac/6691549e18a22e39ee6ad5e3_hero-img.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />

                  <img
                  src="https://cdn.prod.website-files.com/668281ece7b010ab6b0d2eac/668fe73923d765b325136a8e_hamster%202.jpg"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter> 
            </CardFooter>
          </Card>
          </Link>






























          <Link href="       https://rendernet.ai/   " className="block  " prefetch={false}>
          <Card className="">
            <CardHeader>
              <div className="flex items-center gap-4">
 
                <div>
                  <CardTitle>         RenderNet 
                  </CardTitle>
                  <CardDescription>
                  Create AI characters with complete control and consistency. Create your own character! Generate exact poses. Get the same face. Change anything in any image.


          
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
              <img
                  src="https://rendernet.ai/images/second-p-1080.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
                />

                  <img
                  src="https://rendernet.ai/images/TrueTouch-landing-page-p-1080.webp"
                  width={300}
                  height={300}
                  alt="Imagen"
                  className="aspect-square object-cover  shadow-lg"
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





      <footer className=" border-t border-t-muted bg-slate-50 ">
        <div className="container max-w-7xl py-6 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BotIcon className="w-6 h-6" />
            <span className="text-sm font-medium px-4 ">AI Image and Video Generators</span>
          </div>

          <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="hover:text-gray-700 transition-colors   " prefetch={false}>
              Home
            </Link>

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
 