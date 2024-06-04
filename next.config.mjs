/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          `prismic-templates-website.cdn.prismic.io`,
          "images.prismic.io",
          "prismic-io.s3.amazonaws.com",
        ],
      },
};

export default nextConfig;
