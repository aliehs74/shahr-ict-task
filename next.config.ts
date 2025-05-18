/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
      protocol : 'https',
      hostname : 'fakestoreapi.com',
      pathname : '/**'  
      }
      ], // اضافه کردن دامین مجاز
  },
};

export default nextConfig;