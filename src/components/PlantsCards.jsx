import React from 'react';

const PlantCards = () => {
  return (
    <div className="bg-neutral-900 pb-10">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Explore Our Plant Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://t4.ftcdn.net/jpg/06/97/02/79/240_F_697027971_E7O4xNixnbjCWrThvJuH0KY5wp2Feji5.jpg"
              alt="Coffee"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Explore Plant Varieties</h2>
              <p className="text-gray-700">
                Ka-pe Kalipay is not just a café, but also a plant shop where you can explore and shop for different types of plants. We collaborate closely with local farms and nurseries to provide you with a diverse selection of plants. At Ka-pe Kalipay, we take pride in offering a diverse and carefully curated selection of plants for our customers to explore and shop. 
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://t4.ftcdn.net/jpg/07/16/16/69/240_F_716166950_2C6XrNKP9ndrOYYn4skra69O68anBUCl.jpg"
              alt="Pastries"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Plant-inspired Pastries</h2>
              <p className="text-gray-700">
              Our plant shop boasts an extensive variety of greenery, ranging from vibrant tropical plants to elegant succulents, lush ferns, and exotic blooms. Whether you're a seasoned plant enthusiast or just beginning your journey into gardening, our collection caters to all tastes and preferences.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://t3.ftcdn.net/jpg/06/69/68/34/240_F_669683458_jr8EjWzGuhooMEs4icRbJX0Er0Hsfpnc.jpg"
              alt="Desserts"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Filipino Flavored Desserts</h2>
              <p className="text-gray-700">
              From air-purifying houseplants to statement-making foliage, our plant selection provides endless possibilities for enhancing your indoor and outdoor spaces with natural beauty. Come, sit at the cafe, and enjoy a cup of coffee surrounded by lush greenery while indulging in some delicious Filipino pastries and desserts. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCards;


