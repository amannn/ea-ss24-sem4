/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: 'i.pravatar.cc'}, {hostname: 'c.pxhere.com'}]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
