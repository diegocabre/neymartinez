/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com", // Permitir imágenes desde tailwindui.com
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Permitir imágenes desde images.unsplash.com
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
