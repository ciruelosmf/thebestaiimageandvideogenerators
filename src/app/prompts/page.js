"use client"


import React from 'react';
import Script from "next/script";
import Link from "next/link"
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





    <div className="relative min-h-screen flex flex-col items-center  bg-gradient-to-b from-red-100 to-blue-300">




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


      <section className=" bg-gradient-to-b from-red-100 to-blue-300 py-16">






        

      <header className=" sticky top-0 z-40   block    ">
        <div className="container max-w-7xl py-1 px-1 md:px-6 flex items-center justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 ">
 
            <h1 className={`border-2  md:text-xl text-base font-semibold text-blue-500  px-2 md:px-6 ${isScrolled ? 'bg-black text-blue-100' : 'bg-transparent'} transition-colors duration-300`}>AI Image and Video Generators - AI directory</h1>
          <nav className={`flex flex-row flex-wrap items-center justify-center gap-2 text-blue-500 p-1    md:text-xl text-base font-semibold text-white  px-2 md:p-2 ${isScrolled ? 'bg-black text-blue-100' : 'bg-transparent'} transition-colors duration-300`} >
            <Link href="/" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Home
            </Link>
            <Link href="./gallery" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
            Twitter Generative AI Gallery
            </Link>
            <Link href="./full-tools-list" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Full List of Tools
            </Link>


            <Link href="./blog" className="text-xs  md:text-sm font-medium  hover:bg-red-900 border-2 p-1" prefetch={false}>
              Blog
            </Link>
            <Link href="./prompts" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              Prompts
            </Link>
            <Link href="./about" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              About
            </Link>
            <Link href="./contact" className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" prefetch={false}>
              Contact 
            </Link>





                      <Link href="https://imagify.gumroad.com/l/xuhxv" className="text-sm font-medium hover:text-primary hover:bg-red-900   border-2 p-1" prefetch={false}>
              List your Tool 
            </Link>


 
             <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://x.com/bestaigeneratrs">
              X
            </Link>

            <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://www.youtube.com/@AIImageandVideoGenerators">
              YouTube
            </Link>

            <Link className="text-xs  md:text-sm font-medium hover:text-primary hover:bg-red-900 border-2 p-1" href="https://www.toolify.ai/">
            Discover more AI Tools
            </Link>


          </nav>
          </div> 
        </div>    
      </header>





      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 my-8">Discover Prompts to Ignite Your AI Creations</h1>
        <div className="prose prose-lg mx-auto">

















        <hr className="my-8 border-t my-4 border-gray-800" />




        Over-the-shoulder dynamic: The camera follows a woman as she plays a handheld game with intense focus, surrounded by flashing arcade lights. Immersive, gaming-focused, and energetic.


        <hr className="my-8 border-t my-4 border-gray-800" />



        Cinematic sweeping camera: The camera glides through a foggy village as a giant, glowing-eyed creature looms over rooftops. The ground shakes as it reaches down. Ominous clouds reflect its eerie glow. Dark fantasy


        <hr className="my-8 border-t my-4 border-gray-800" />




        A slow dolly-in camera follows a woman with pigtails holding a baseball bat as she walks down a dimly lit hallway. The lighting shifts to a menacing red, creating a tense, noir-style atmosphere with echoing footsteps adding suspense.


        <hr className="my-8 border-t my-4 border-gray-800" />



        A fierce, edgy woman with platinum blonde hair and dark, smudged makeup, aiming a handgun directly at the viewer | piercing stare, punk-inspired piercings, intense close-up | cinematic lighting with a cold, desaturated color palette, cyberpunk atmosphere



        <hr className="my-8 border-t my-4 border-gray-800" />



        zombiefied woman dressed in black with small horns on her head, standing against a pastel pink wall | heavy makeup with a dark, gothic aesthetic | photographed in a 80s retro Kodachrome film style, soft grain and vintage color tones



        <hr className="my-8 border-t my-4 border-gray-800" />



        An African American woman in a cozy, oversized knitted sweater and matching beanie, holding a cup of coffee while sitting on a rustic wooden porch | snowy beach in the background | relaxed winter atmosphere, photorealistic style



        <hr className="my-8 border-t my-4 border-gray-800" />



        A serene woman dressed in a delicate pink hanfu, sitting under blooming cherry blossoms, holding a dark, gothic metal guitar with intricate, spiked designs | peaceful and harmonious atmosphere with a striking contrast from the edgy guitar | soft, pastel lighting




        <hr className="my-8 border-t my-4 border-gray-800" />





        A woman with long white hair, dressed in a luxurious white fur coat, riding a woolly deer through a snow-covered historical city square | Paris architecture in the background | realistic winter atmosphere | photorealistic style





        <hr className="my-8 border-t my-4 border-gray-800" />




        A majestic white tiger humanoid warrior dressed in ornate, traditional robes, standing confidently in a historical setting | detailed fur, intense gaze, intricate fabric textures, cinematic atmosphere, ethereal lighting | photorealistic | studio lighting


        <hr className="my-8 border-t my-4 border-gray-800" />




        A sleek, black sports car speeding through a snowy mountain road at night, leaving vibrant neon light trails in its wake | futuristic design, dynamic motion, cyberpunk aesthetic, snow falling gently, intense atmosphere | photorealistic | cinematic lighting



        <hr className="my-8 border-t my-4 border-gray-800" />




        An aerial view of a modern city along a river at dawn, with warm sunlight reflecting off skyscrapers and calm waters | realistic texture, soft gradients, serene atmosphere, subtle haze | shot on a DJI drone | photorealistic | dawn lighting


        <hr className="my-8 border-t my-4 border-gray-800" />




        serene portrait of a young blonde woman lying on grass, surrounded by daisies, with soft sunlight casting gentle shadows | natural beauty, delicate freckles, realistic texture, ethereal mood | shot on Canon EOS R5 | photorealistic | golden hour lighting


        <hr className="my-8 border-t my-4 border-gray-800" />



        A captivating scene featuring a rain of electric blue fire and a vortex of soft pink water, with the silhouette of a panda in the middle, shot on Olympus OM-D E-M1X, displaying a photorealistic, volumetric, and dynamic appearance



        <hr className="my-8 border-t my-4 border-gray-800" />




        black afro geisha wearing headphones | pink smoke background | stock photo | uhd; cross-processing | colorized | japanese house in the background


        <hr className="my-8 border-t my-4 border-gray-800" />




        blonde elf woman as a world of warcraft character | wearing USA armor | MMORPG mobile screenshot | toxic desert village in the background | purple sky | cartoonish low-poly quality


        <hr className="my-8 border-t my-4 border-gray-800" />




        A terror clown partying hard at a tropical party in a luxury yatch | Polaroid hangover | blurred crowd in the background



        <hr className="my-8 border-t my-4 border-gray-800" />



        <p className="mb-12">
        <h2 className="text-lg font-bold  text-gray-900 mb-2"> Create mind maps with Claude 3.5 Sonnet</h2>

Claude 3.5 Sonnet can generate detailed mind maps of video shot types and elements, which can significantly improve your prompts for AI video generation with other AI tools like Runway Gen-3 or Luma Dream Machine.

Step-by-step:

Head over to Claude AI.

Use the following prompt: "I am using a video generator. Please give me a map of all the different types of shots and things I can enter for my prompt."

Explore the map and craft detailed prompts to use for AI video generator tools!

source: the rundown AI
          </p>




          <hr className="my-8 border-t my-4 border-gray-800" />








          <p className="mb-12">
          Chibi [SUBJECT], [COLOR PALLETE], 3d model vinyl toy, white background, front perspective, minimalistic, OC renderer, C4D
          </p>
 
          <hr className="my-8 border-t my-4 border-gray-800" />


          <p className="mb-12">

          edwardian beauty, sepia, layered textures and patterns, black mountain college, bloomsbury group, dotted, object portraiture specialist, elegantly formal


          </p>

          <hr className="my-8 border-t my-4 border-gray-800" />

          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


          </p>


          <hr className="my-8 border-t my-4 border-gray-800" />


          <p className="mb-12">

          3 panels page about a fight between a gigantic irish mage redhead woman wearing a medieval outfit AND a black Dragon with amber eyes, near village with buildings burning. fireball magic, scared villagers are running (she is also colosal). boom sfx, comic style


          </p>



          <hr className="my-8 border-t my-4 border-gray-800" />




          <p className="mb-12">

          intrinsic stunning cyberpunk goddess beauty, parts and wires, sparks and crystals, tri color, symmetrical, perfection, 2583, bokeh effects, rule of thirds, perfect composition, Hollywood, Spielberg


          </p>

          <hr className="my-8 border-t my-4 border-gray-800" />



          <p className="mb-12">

          Render an Atmospheric, cinematic cityscape at golden hour, dramatic lighting silhouetting grand architecture against a textured sky. Use unique perspective, framed by natural elements, reflecting urban grandeur blended with nature's tranquil beauty. A true visual feast.


          </p>



          <hr className="my-8 border-t my-4 border-gray-800" />


          <p className="mb-12">

          A digital illustration of a male figure rendered in a minimalist and geometric style, with a focus on flat 2D shapes and solid colors. The subject is depicted in a three-quarter view, characterized by clean lines and a reduced color palette. He wears a Panama hat and round sunglasses, paired with a light-colored suit that simplifies the form into basic shapes without any shadows or texture. The background is a single warm, solid color that complements the figure. The overall design is sleek and stylish, capturing the essence of the subject with minimal visual elements, evoking a modern, iconographic art style.


          </p>


          <hr className="my-8 border-t my-4 border-gray-800" />



          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


          </p>


          <hr className="my-8 border-t my-4 border-gray-800" />



          <p className="mb-12">

          A stained glass window with vibrant colors and the sun peeking through, there’s a depiction of a biblical era man holding up a computer chip


          </p>



          <hr className="my-8 border-t my-4 border-gray-800" />






































          <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>

</div  >
</div  >

  );
}
 