import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-4 '>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tighter sm:text-6xl '>
          We’re changing the way people shop.
        </h1>
        <p className='mt-8 text-lg max-w-xl leading-8'>
          Welcome to Zeden! We're passionate about furniture and creating a
          seamless shopping experience for you. Our goal is to make finding the
          perfect piece of furniture easy and enjoyable. Explore our collection
          of sofas, beds, and interior furnishings. We're here to simplify your
          furniture shopping journey.
        </p>
        <div className='mt-10'>
          <Link to='products' className='btn btn-neutral'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box sm:h-[20rem]'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80  object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
