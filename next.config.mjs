/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  reactStrictMode: false,

  async redirects() {
    const redirects = {
      "/strep-sinusitis": "/acute-conditions/strep",
    };

    return Object.keys(redirects).map((oldUrl) => ({
      source: oldUrl,
      destination: redirects[oldUrl],
      permanent: true, // This sends a 301 redirect
    }));
  },
};

export default nextConfig;
