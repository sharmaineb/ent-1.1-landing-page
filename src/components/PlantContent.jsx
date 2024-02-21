import React from 'react';

const PlantContent = () => {
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
            <a href="https://github.com/sharmaineb" className="text-yellow-300 hover:underline inline-block border-b-2 border-yellow-400 py-1 transition duration-300 ease-in-out">
              Discover Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantContent;

