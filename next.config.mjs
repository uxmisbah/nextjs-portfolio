/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
                },
              ],
            },
            reactStrictMode: true,
  };
  
  export default nextConfig;
