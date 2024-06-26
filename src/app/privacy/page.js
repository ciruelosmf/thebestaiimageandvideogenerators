import React from 'react';
import Script from "next/script";
import { Divide } from 'lucide-react';
export default function Blog() {
  return (



    <div> 
     
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




      <div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
  
  <div class="space-y-6 text-gray-600">
    <p class="leading-relaxed">
      This Privacy Policy describes how AI Image and Video Generators ("we", "us", or "our") collects, uses, and shares information about you when you use our website (the "Site"). By using the Site, you agree to the collection, use, and sharing of your information as described in this policy.
    </p>
    
    <section>
      <h2 class="text-xl font-semibold mb-2 text-gray-700">Information We Collect</h2>
      <p class="leading-relaxed">
        We do collect information using Google Analytics.
      </p>
      <p class="leading-relaxed mt-2">
      Google Analytics automatically collects certain information about your device and how you interact with our Site, including your IP address, browser type, operating system, referring URLs, and information about your usage of our Site.
      </p>
    </section>
    
 
    
    <section>
      <h2 class="text-xl font-semibold mb-2 text-gray-700">Contact Us</h2>
      <p class="leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us at 
        <a href="mailto:aiimageandvideogenerators@gmail.com" class="text-blue-600 hover:underline">aiimageandvideogenerators@gmail.com</a>.
      </p>
    </section>
  </div>
</div>

</div>
  );
}
