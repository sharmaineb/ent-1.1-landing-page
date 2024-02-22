import React, { useState } from 'react';

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto ml-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Discover Our Coffee</h2>
            <p className="text-lg mb-6 text-white">
              At our café, we take pride in serving the finest coffee sourced directly from the lush farms of the Philippines. Each cup is a testament to our commitment to quality and sustainability.
            </p>
            <p className="text-lg mb-6 text-white">
              Whether you prefer a rich espresso, a creamy latte, or a refreshing cold brew, we have the perfect brew to satisfy your cravings. Explore our menu and embark on a journey of flavor and aroma.
            </p>
            <button onClick={openModal} className="text-yellow-300 bg-transparent border border-yellow-300 rounded-md py-2 px-4 hover:bg-yellow-300 hover:text-black">
              Learn More
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-md">
              <img src="https://t4.ftcdn.net/jpg/03/21/01/67/360_F_321016794_cqOGEfLN7f26Kii828xSacIH2HpG3yYW.jpg" alt="Coffee" className="w-full rounded-lg shadow-md mb-4" />
              <img src="https://t4.ftcdn.net/jpg/03/21/05/99/240_F_321059971_UtA0ZFqMtAEUJiyAepwUuistfuluIC7d.jpg" alt="Coffee" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Refer-a-Friend Program</h2>
            <p className="text-lg mb-4">
            Join our Refer-a-Friend Program and start earning rewards today! Share the joy of Ka-Pe Kalipay with your friends and family by referring them via email or social media. As a token of our appreciation, we offer enticing rewards such as discount codes for free coffee and pastries. Spread the love of plants and delicious treats while enjoying exclusive benefits for you and your referrals.
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

export default Content;