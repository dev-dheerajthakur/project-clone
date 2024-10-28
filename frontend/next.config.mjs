/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['http://192.168.17.131','127.0.0.1', 'anotherdomain.com'], // Add your image host domains here
  },
  env: {
    jwt_secret: "jwt secret should more complex like highly secured password that can't be gueesed!",
    server_domain: "http://192.168.17.131:5000", //domain used for backend;
    communication_domain: "http://127.0.0.1:8080", //domain used for socket io;
  }
};
export default nextConfig;
