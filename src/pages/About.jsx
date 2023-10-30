import React from "react";

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-3xl font-bold tracking-widest'>
              Zeden
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Welcome to Zeden! We're passionate about furniture and creating a
        seamless shopping experience for you. Our goal is to make finding the
        perfect piece of furniture easy and enjoyable. Explore our collection of
        sofas, beds, and interior furnishings. We're here to simplify your
        furniture shopping journey.
      </p>
    </>
  );
};

export default About;
