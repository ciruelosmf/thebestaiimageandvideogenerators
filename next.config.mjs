// next.config.mjs (it's good practice to use the .mjs extension for ESM)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The `remotePatterns` array is the single source of truth.
    remotePatterns: [
      // This is the pattern you already had for 'wanxai'
      {
        protocol: 'https',
        hostname: 'cdn.wanxai.com',
        port: '',
        pathname: '/**', 
      },
      // This is the converted pattern for 'images.ctfassets.net'
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      // This is the converted pattern for 'framerusercontent.com'
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;