import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity: 0.2, y:100}}
    transition={{ duration: 1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className="flex flex-col items-center justify-center my-20 py-12 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-12 text-center max-w-2xl">
        Hear what real users have to say about their experience using our platform. We take pride in
        delivering top-tier services and tools to empower your journey.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 w-72 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-16 h-16 mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold">{testimonial.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
            <div className="flex mb-2">
              {Array(testimonial.stars)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="star"
                    className="w-4 h-4 mr-1"
                  />
                ))}
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;

