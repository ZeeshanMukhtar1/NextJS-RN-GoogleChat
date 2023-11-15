/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* other next.js config options here */
};

module.exports = withLess(nextConfig);
