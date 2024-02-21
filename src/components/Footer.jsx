import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-white py-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/48/66/83/240_F_248668319_cU8jh11DMc3HOghSZhny4jnStmIzYcT1.jpg)' }}
      ></div>
      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg mb-4">Connect with Us & Stay Updated:</p>
        <form className="flex justify-center items-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 mr-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white-400 mb-4 mt-3">&copy; 2024 Ka-Pe Kalipay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
