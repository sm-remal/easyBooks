/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'i.pinimg.com',
  //     },
  //   ],
  // },
  images: {
    domains: [
      'images.unsplash.com',
      'i.pinimg.com',
      'images-na.ssl-images-amazon.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      '*',
      'i.pravatar.cc'
    ],
  },
};

export default nextConfig;
