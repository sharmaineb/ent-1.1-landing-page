import React from 'react';

const CoffeeCards = () => {
  return (
    <div className="py-20 bg-neutral-900">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our Cafè</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://t3.ftcdn.net/jpg/03/16/01/48/240_F_316014817_EC1KN7mAD86ALYhhwGUUeSsQoJIVMtfQ.jpg"
              alt="Coffee"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Coffee</h2>
              <p className="text-gray-700">
                At our café, we proudly serve coffee made from beans sourced directly from the Philippines. We believe in supporting local farmers and ensuring the highest quality in every cup.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://cdn.vox-cdn.com/thumbor/wNfAOXf-0EexL1mzA1vGZyE4mr4=/99x0:1121x767/1400x1050/filters:focal(99x0:1121x767):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/48825203/pastry-pandesal-avila.0.0.jpg"
              alt="Pastries"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Pastries</h2>
              <p className="text-gray-700">
                Our pastries are made with love and care, using locally-sourced ingredients. From traditional Filipino favorites to modern twists, we offer a wide range of delectable treats that celebrate our heritage and community.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-50 object-cover object-center"
              src="https://t3.ftcdn.net/jpg/06/79/93/02/240_F_679930291_55tTrQ6TV7jTGEXAnkmKg7QpJF8sfS0b.jpg"
              alt="Desserts"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Desserts</h2>
              <p className="text-gray-700">
                Indulge in our selection of Filipino desserts, crafted with care and authenticity. We collaborate with local artisans and suppliers to bring you the finest sweets that capture the essence of Filipino flavors and traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;