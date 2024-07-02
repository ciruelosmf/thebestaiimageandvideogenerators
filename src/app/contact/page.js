import React from 'react';
import Script from "next/script";
import Link from "next/link"



export default function Blog() {
  return (




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


 
    <section className=" flex flex-col items-center justify-center   py-16">
      <div className=" ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Feel free to write to: aiimageandvideogenerators@gmail.com

        </h1>
        
      </div>

      <div className="mt-12">
          <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Go to Homepage
          </Link>
        </div>
    </section>

</div  >
  );
}
