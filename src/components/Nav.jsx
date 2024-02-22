import React, { useState } from 'react';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLimitedTimeSaleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
          <button className="text-white bg-yellow-500 hover:bg-yellow-400 transition duration-300 ease-in-out font-roboto px-4 py-2 rounded-md shadow-md" onClick={handleLimitedTimeSaleClick}>Limited-Time Only!</button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-2xl mb-4">Limited-Time</h2>
            <p className="text-lg mb-4">Hurry up and grab a free succulent when you purchase any coffee and one dessert!</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

