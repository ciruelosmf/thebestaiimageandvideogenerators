import Link from 'next/link'
import Head from 'next/head'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <Head>
        <title>404 - Page Not Found - AI Image and Video Generator - www.aiimageandvideogenerators.xyz/</title>
        <meta name="description" content="The page you're looking for doesn't exist. - AI Image and Video Generator - https://www.aiimageandvideogenerators.xyz/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <h2 className="text-base font-semibold mb-6">AI Image and Video Generator</h2>
        <h2 className="text-base font-semibold mb-6">www.aiimageandvideogenerators.xyz</h2>


        <p className="text-xl mb-8">
          Oops! The page you're looking for doesn't existt.
        </p>
        <Link 
          href="https://www.aiimageandvideogenerators.xyz/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go back to homepage
        </Link>
      </main>
    </div>
  )
}