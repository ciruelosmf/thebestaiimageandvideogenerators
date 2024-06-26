import React from 'react';
import Script from "next/script";
export default function Blog() {
  return (




    <article className="bg-white p-6 rounded-lg shadow">
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
  <h1 class="text-3xl font-bold mb-6 text-gray-800">Terms of Service</h1>
  
  <div class="space-y-6 text-gray-600">
    <p class="leading-relaxed">
      Welcome to AI Image and Video Generators. By accessing or using our website (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.
    </p>
    
    <section>
      <h2 class="text-xl font-semibold mb-2 text-gray-700">1. Use of the Site</h2>
      <p class="leading-relaxed">
        You may use our Site only for lawful purposes and in accordance with these Terms. You agree not to use our Site:
      </p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
        <li>To impersonate or attempt to impersonate AI Image and Video Generators, a company employee, another user, or any other person or entity.
          
        </li>
      </ul>
    </section>
    
     
    




    <section>
      <h2 class="text-xl font-semibold mb-2 text-gray-700">Affiliate Disclosure</h2>
      <p class="leading-relaxed">
      Intellectual Property
The Site and its entire contents, features, and functionality are owned by AI Image and Video Generators and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
Third-Party Links
Our Site may contain links to third-party websites or services that are not owned or controlled by AI Image and Video Generators. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
Affiliate Disclosure
Our Site participates in affiliate marketing programs. This means we may earn commissions for purchases made through links on our Site to merchant websites. These links do not increase the purchase price for you.
Disclaimer of Warranties
Your use of the Site is at your sole risk. The Site is provided on an "AS IS" and "AS AVAILABLE" basis. AI Image and Video Generators expressly disclaims all warranties of any kind, whether express or implied.
      
      </p>
    </section>












    <section>
      <h2 class="text-xl font-semibold mb-2 text-gray-700">Contact Us</h2>
      <p class="leading-relaxed">
        If you have any questions about these Terms, please contact us at 
        <a href="mailto:aiimageandvideogenerators@gmail.com" class="text-blue-600 hover:underline">aiimageandvideogenerators@gmail.com</a>.
      </p>
    </section>
    
    <p class="font-medium">
      By using our Site, you acknowledge that you have read and understood these Terms and agree to be bound by them.
    </p>
  </div>
</div>
    </article>
  );
}
