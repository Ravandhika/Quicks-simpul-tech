/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://randomuser.me", "img.dummyapi.io"],
  },
};

module.exports = nextConfig;
