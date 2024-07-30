
    "use client"

    import React from 'react';
    import Script from "next/script";
    import Link from "next/link"
    import DynamicBackground from '@/components/DynamicBackground';

    export default function Blog() {
    return (
        <div className="relative min-h-screen flex flex-col items-center">
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
                `}
            </Script>

            <DynamicBackground rows={3} cols={3} />

            {/* ... (rest of the component code) ... */}

            <h1 className="text-4xl font-bold text-center mb-12">
            My Blog Post 
            </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            Section 1       
            </h2>

            <p className="mb-4">
            Content 1     
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Section 2   
            </h2>

            <p className="mb-4">
            Content 2 
            </p>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
            Section 3  
            </h2>

            <p className="mb-4">
            Content 3
            </p>

            {/* ... (rest of the component code) ... */}

        </div>
    );
    }
    