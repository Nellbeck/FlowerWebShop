/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  };
  
  export default nextConfig;
  
