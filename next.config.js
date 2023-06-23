/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      });
      config.resolve.fallback = { fs: false };
      return config;
    },
    
  };
 
module.exports = nextConfig
