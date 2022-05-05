/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/public/myfile.html",
      destination: "/pages/api/myfile.js",
    },
  ],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  extends: ["plugin:@next/next/recommended"],
};

module.exports = nextConfig;
