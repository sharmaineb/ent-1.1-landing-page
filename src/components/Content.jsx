import React from 'react';

const Content = () => {
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
            <a href="https://github.com/sharmaineb" className="text-yellow-300 hover:underline inline-block border-b-2 border-yellow-400 py-1 transition duration-300 ease-in-out">
              Learn More
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-md">
              <img src="https://t4.ftcdn.net/jpg/03/21/01/67/360_F_321016794_cqOGEfLN7f26Kii828xSacIH2HpG3yYW.jpg" alt="Coffee" className="w-full rounded-lg shadow-md mb-4" />
              <img src="https://t4.ftcdn.net/jpg/03/21/05/99/240_F_321059971_UtA0ZFqMtAEUJiyAepwUuistfuluIC7d.jpg" alt="Coffee" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
