import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg font-roboto">Ka-Pe Kalipay</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-white hover:text-gray-400 transition duration-300 ease-in-out font-roboto">Home</span>
          <span className="text-white hover:text-gray-400 transition duration-300 ease-in-out font-roboto">About</span>
          <span className="text-white hover:text-gray-400 transition duration-300 ease-in-out font-roboto">Bulk Inquiries</span>
          <span className="text-white hover:text-gray-400 transition duration-300 ease-in-out font-roboto">Visit Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
