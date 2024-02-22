import React, { useState } from 'react';

const PlantContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <div className="max-w-md">
              <img src="https://t4.ftcdn.net/jpg/04/42/28/69/240_F_442286904_hpejph0FfFKCGC7DAWXuIsutjZS29A9k.jpg" alt="Plants" className="w-full rounded-lg shadow-md mb-4" />
              <img src="https://t4.ftcdn.net/jpg/06/33/07/11/240_F_633071187_mCJqYn4SuvQpGxNxLx5fo9Den0vrFjvg.jpg" alt="Plants" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Plants</h2>
            <p className="text-lg mb-6 text-white">
              At Ka-Pe Kalipay we offer a wide variety of indoor and outdoor plants to enhance your living space with natural beauty. From lush foliage to vibrant blooms, each plant is carefully selected to bring joy and tranquility into your home.
            </p>
            <p className="text-lg mb-6 text-white">
              Whether you're a seasoned plant enthusiast or just starting your green journey, we have the perfect plants for you. Explore our collection and discover the wonders of nature right at your doorstep.
            </p>
            <button onClick={openModal} className="text-yellow-300 bg-transparent border border-yellow-300 rounded-md py-2 px-4 hover:bg-yellow-300 hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Plant Care Tips & Workshops</h2>
            <p className="text-lg mb-4">
              <strong>1. Plant Care Guides:</strong> Access our free plant care guides by signing up with your email address. Get valuable tips and tricks for keeping your plants healthy and thriving!
            </p>
            <p className="text-lg mb-4">
              <strong>2. Plant Workshops:</strong> Join our upcoming plant workshops to learn from experts, discover new techniques, and connect with fellow plant enthusiasts. Register now to secure your spot!
            </p>
            <button onClick={closeModal} className="text-white bg-blue-400 hover:bg-green-600 rounded-md px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlantContent;