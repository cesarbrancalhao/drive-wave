"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        //todo
    };

  return (
    <div className='hero'>
        
      <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>Find your dream car!</h1>

          <p className='hero__subtitle'>Live life in the fast lane</p>

          <CustomButton
          title="Explore"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero2.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>

    </div>
  );
};

export default Hero;