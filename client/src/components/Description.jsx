import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
    initial={{opacity: 0.2, y:100}}
    transition={{ duration: 1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center my-24 px-6 md:px-28'>
      {/* Section Title */}
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>Create AI Images</h1>
      <p className='text-gray-500 mb-8 text-center max-w-2xl'>
        Transform your words into stunning visuals instantly with our AI-powered text-to-image generator. Fast, creative, and effortless.
      </p>

      {/* Image + Text */}
      <div className='flex flex-col md:flex-row items-center gap-10 w-full'>
        {/* Image */}
        <img
          src={assets.sample_img_1}
          alt="AI Generated Sample"
          className='w-80 xl:w-96 rounded-lg shadow-md'
        />

        {/* Text Content */}
        <div className='flex flex-col gap-6 text-left max-w-2xl'>
          <h2 className='text-3xl font-medium max-w-lg mb-4 mt-5'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4'>
            Discover the future of creativity with our advanced text-to-image generator. Powered by cutting-edge AI, this tool allows you to transform simple words and ideas into high-quality, visually stunning images within seconds. Whether you're an artist seeking inspiration, a content creator designing unique visuals, or a developer building innovative projects, our platform empowers you to turn imagination into reality—effortlessly.
          </p>
          <p className='text-gray-600'>
            With an intuitive interface, fast generation speed, and support for a variety of styles and themes, it's never been easier to create custom graphics without any design experience. Unlock the potential of your thoughts and bring your vision to life, one prompt at a time.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
