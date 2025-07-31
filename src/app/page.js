"use client"
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Script from "next/script";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { CSPostHogProvider } from './providers'
import { Tweet } from 'react-tweet'
import { tools } from './tools';
import ToolCard from '../components/ToolCard';



// Improved analytics tracking function with additional parameters
const trackConversion = (id, location, action = 'click') => {
  posthog.capture(`conversion_${action}`, {
    element_id: id,
    location: location,
    description: `${action} on ${id} in ${location}`,
    timestamp: new Date().toISOString()
  });
};

export default function Component() {

    // You can add filtering and sorting logic here
  // For example, to show featured tools first:
  const sortedTools = [...tools].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });


  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <Head>
        <meta property="og:title" content="✨ AI Image & Video Generators | Top Tools for 2025" />
        <meta
          property="og:description"
          content="Discover the best AI tools to create stunning visuals and videos instantly. Save time and money with these powerful AI image generators."
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
          </nav>
        </div>
      </header>

      {/* Hero Section - New Addition */}
      <section className="py-4 md:py-10 md:pb-4 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
          Crush Your Creative Limits
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Slay the Design Dragon </span>
          </h2>


 
 
          <p className="text-lg md:text-xl text-gray-300 mb-18 md:mb-12 max-w-2xl mx-auto">
          Check out our curated list of AI Generators below:
          </p>
        </div>


 


 




<div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-6 px-4">
  <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 w-full max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white dark:bg-gray-900">
    <Link href="https://app.outlier.ai/expert/referrals/link/KoTQGM5EbKFijK6v3ja8s0zhhCk">
      <Image
        src="/as.jpg"
        width={300}
        height={300}
        alt="RenderNet character example"
        className="w-48 h-48 object-cover rounded border-4 border-transparent animate-borderTrail cursor-pointer"
        loading="lazy"
      />
    </Link>
    
    <Link href="https://app.outlier.ai/expert/referrals/link/KoTQGM5EbKFijK6v3ja8s0zhhCk">
      <button className="relative overflow-hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        <span className="relative z-10 text-sm md:text-base">
          Looking for an AI side hustle? This platform pays you to work on interesting AI projects, from coding challenges to data analysis. Pass a qualification test and start earning on your own schedule making data labeling. Use my referral link to get started!
        </span>
        <span className="absolute inset-0 rounded border-4 border-transparent animate-borderTrail"></span>
      </button>
    </Link>
  </div>
           
  <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 w-full max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white dark:bg-gray-900">
    <Link href="https://try.elevenlabs.io/yf672nrp61q2">
      <Image
        src="/veo3_3.JPG"
        width={300}
        height={300}
        alt="RenderNet character example"
        className="w-48 h-48 object-cover rounded border-4 border-transparent animate-borderTrail cursor-pointer"
        loading="lazy"
      />
    </Link>
    
    <Link href="https://try.elevenlabs.io/yf672nrp61q2">
      <button className="relative overflow-hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        <span className="relative z-10 text-sm md:text-base">
          Create your AI voice clone from just a few minutes of audio with @elevenlabsio. No more need to record multiple takes to get the audio for your content right. The best thing? Your clone can even speak almost 30 languages!
        </span>
        <span className="absolute inset-0 rounded border-4 border-transparent animate-borderTrail"></span>
      </button>
    </Link>
  </div>
          
  <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 w-full max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white dark:bg-gray-900">
    <Link href="https://www.genfoo.com">
      <Image
        src="/genfoo.jpg"
        width={300}
        height={300}
        alt="RenderNet character example"
        className="w-48 h-48 object-cover rounded border-4 border-transparent animate-borderTrail cursor-pointer"
        loading="lazy"
      />
    </Link>
    
    <Link href="https://www.genfoo.com">
      <button className="relative overflow-hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        <span className="relative z-10 text-sm md:text-base">
          Try GenFoo, cooler AI interfaces to chat with
        </span>
        <span className="absolute inset-0 rounded border-4 border-transparent animate-borderTrail"></span>
      </button>
    </Link>
  </div>
</div>



 
 
 


      </section>

      {/* Main Content */}
      <main id="tools-section" className="container max-w-7xl px-4 md:px-6 pt-8 pb-16 flex-1 mx-auto">

        {/* Tool Category Tabs 
        <div className="mb-10">
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-4">
            {['all', 'image', 'video', 'character', 'animation'].map((tab) => (
              <Button 
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={`${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-transparent text-white border-white/30'} whitespace-nowrap px-6 py-2 rounded-full font-medium capitalize`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Tools' : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Generators`}
              </Button>
            ))}
          </div>
        </div>*/}
















        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {/* PhotoAI Card - improved for conversion */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:bg-slate-700 transition-all duration-600">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-red-500">Photo AI</CardTitle>
                <span className="px-2 py-1 bg-purple-600 text-xs font-semibold text-white rounded-full">Amazing experience  </span>
              </div>
              <CardDescription className="text-gray-300 mt-2">
                Generate photorealistic images of people with AI. Save time and money on expensive photo shoots.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <Image
                    src="/photoaicom_1.jpg"
                    width={300}
                    height={300}
                    alt="PhotoAI generated portrait"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                  <Image
                    src="/photoaicom_2.jpg"
                    width={300}
                    height={300}
                    alt="PhotoAI generated portrait"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Portrait</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Photorealistic</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Professional</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-gradient-to-r from-red-400 to-green-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-md"
                onClick={() => trackConversion('photoai-cta', 'card-footer', 'conversion')}
              >
                <Link 
                  href="https://app.photoai.me/?via=aiimageandvideogenerators" 
                  className="w-full text-center" 
                  prefetch={false}
                >
                  Try PhotoAI Now →
                </Link>
              </Button>
            </CardFooter>
          </Card>


















          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:bg-slate-700 transition-all duration-600">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-red-500">faceless.video</CardTitle>
                <span className="px-2 py-1 bg-purple-600 text-xs font-semibold text-white rounded-full">Passive income  </span>
              </div>
              <CardDescription className="text-gray-300 mt-2">
              Create Faceless Accounts in One Click, Share in Youtube/TikTok.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <Image
                    src="/faceless_1.JPG"
                    width={300}
                    height={300}
                    alt="faceless.video examples"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                  <Image
                    src="/faceless_2.JPG"
                    width={300}
                    height={300}
                    alt="faceless.video work flow"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">TikTok/Youtube</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Text-to-Video</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Marketing</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-gradient-to-r from-red-400 to-green-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-md"
                onClick={() => trackConversion('photoai-cta', 'card-footer', 'conversion')}
              >
                <Link 
                  href="https://faceless.video/?ref=aiimageandvideo" 
                  className="w-full text-center" 
                  prefetch={false}
                >
                  Try faceless.video →
                </Link>
              </Button>
            </CardFooter>
          </Card>













          {/* Imagine AI Card */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:bg-slate-700 transition-all duration-600">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-red-500">Imagine AI Art</CardTitle>
                <span className="px-2 py-1 bg-green-600 text-xs font-semibold rounded-full text-white">Very creative</span>
              </div>
              <CardDescription className="text-gray-300 mt-2">
                Turn your imagination into stunning visual art with advanced AI technology.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <video
                    src="https://cdn2.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <video
                    src="https://cdn2.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-video.webm"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Art</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Creative</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Text-to-Image</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-2 rounded-md"
                onClick={() => trackConversion('imagineai-cta', 'card-footer', 'conversion')}
              >
                <Link 
                  href="https://www.imagine.art/?ref=mwe1nji" 
                  className="w-full text-center" 
                  prefetch={false}
                >
                  Create with Imagine AI →
                </Link>
              </Button>
            </CardFooter>
          </Card>



























        {sortedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} trackConversion={trackConversion} />
        ))}




















          {/* RenderNet Card */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:bg-slate-700 transition-all duration-600">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-red-500">RenderNet</CardTitle>
                <span className="px-2 py-1 bg-blue-600 text-xs font-semibold rounded-full">Characters</span>
              </div>
              <CardDescription className="text-gray-300 mt-2">
                Create consistent AI characters with precise control over poses, expressions, and more.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <Image
                    src="/rendernet_1.jpg"
                    width={300}
                    height={300}
                    alt="RenderNet character example"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                  <Image
                    src="/rendernet_2.jpg"
                    width={300}
                    height={300}
                    alt="RenderNet character example"
                    className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
                    loading="lazy" 
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Characters</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Consistency</span>
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full">Pose Control</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-gradient-to-r from-blue-100 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-2 rounded-md"
                onClick={() => trackConversion('rendernet-cta', 'card-footer', 'conversion')}
              >
                <Link 
                  href="https://rendernet.ai/" 
                  className="w-full text-center" 
                  prefetch={false}
                >
                  Try RenderNet →
                </Link>
              </Button>
            </CardFooter>
          </Card>

















        </div>












<div className="flex justify-center">
  <div className="flex flex-col items-center justify-center gap-2 py-12 px-4 w-full max-w-sm rounded-lg   transition duration-300    ">
    
    <Link href="https://www.genfoo.com">
      <Image
        src="/genfoo.jpg"
        width={300}
        height={300}
        alt="RenderNet character example"
        className="w-48 h-48 object-cover rounded border-4 border-transparent animate-borderTrail cursor-pointer"
        loading="lazy"
      />
    </Link>

    <Link href="https://www.genfoo.com">
      <button className="relative overflow-hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        <span className="relative z-10 text-sm md:text-base">
          Try GenFoo, cooler AI interfaces to chat with
        </span>
        <span className="absolute inset-0 rounded border-4 border-transparent animate-borderTrail"></span>
      </button>
    </Link>

  </div>
</div>













        {/* Testimonials Section - New Addition */}
        <section className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">AI Fan Art</h2>          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">







          <div className="">
    <Tweet id="1900965091014545753" />
  </div>




          <div className="">
    <Tweet id="1900594304034222535" />
  </div>






      <div className="">
    <Tweet id="1897296618157957238" />
  </div>




          <div className="">
    <Tweet id="1894822930552627426" />
  </div>



            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <Tweet id="1894415836980678792" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <Tweet id="1894095021093040268" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <Tweet id="1892585851218993651" />
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
 





          </div>
        </section>

        {/* Newsletter Section - New Addition */}
        <section className="mt-16 py-12 px-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with AI Image Trends</h2>
            <p className="text-gray-300 mb-6">Get weekly tips, prompts, and news about the latest AI image generation tools.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-md hover:from-purple-700 hover:to-pink-700"
                onClick={() => trackConversion('newsletter-signup', 'newsletter-section', 'signup')}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Banner - New Addition */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 border border-white/10 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to List Your AI Tool?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Reach thousands of potential users looking for AI image and video generation solutions.</p>
            
            <Button 
              className="bg-white text-purple-900 font-bold px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition"
              onClick={() => trackConversion('list-tool-banner', 'cta-banner', 'conversion')}
            >
              <Link href="https://imagify.gumroad.com/l/xuhxv" prefetch={false}>
                List Your Tool Now
              </Link>
            </Button>
          </div>
        </section>
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

                
                <li><Link href="https://www.genfoo.com" className="text-gray-400   py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>Try GenFoo, cooler AI interfaces </Link></li>


                <li><Link href="https://www.aiimageandvideogenerators.xyz/introducing-new-xyz-video-generator-with-veo-3-tech" className="text-gray-400   py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>Introducing New XYZ Video Generator with Veo 3 tech </Link></li>

                <li><Link href="https://rocketcatcher69.vercel.app" className="text-gray-400   py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>Play RocketCatcher69</Link></li>

                <li><Link href="https://t.me/tate_chess_bot" className="text-gray-400 border py-2 px-1 border-green-400 hover:text-white text-sm" prefetch={false}>Play Tate Telegram Chess Game</Link></li>
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