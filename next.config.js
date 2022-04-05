/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  extends: ["plugin:@next/next/recommended"],
};

module.exports = nextConfig;
