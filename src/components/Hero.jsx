import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-40" style={{ backgroundImage: "url(https://t4.ftcdn.net/jpg/01/06/32/13/240_F_106321309_U1xokp8gUIpTKdvRYvzhtmWl0pJnFQNZ.jpg)", backgroundSize: "cover", backgroundPosition: "center", fontFamily: 'Josefin Slab, serif' }}>
      <div className="container mx-auto text-center">
        <h1 className="font-roboto text-5xl md:text-6xl font-bold mb-4">Ka-Pe Kalipay</h1>
      </div>
    </section>
  );
};

export default Hero;