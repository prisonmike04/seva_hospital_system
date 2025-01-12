import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';
import OurDoctors from '../OurDoctors';
import HomeQuote from '../HomeQuote';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const fadeInHero = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const fadeInContent = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className="bg-gray-50">
      <Navbar />
      <animated.section
        style={{
          ...fadeInHero,
          backgroundImage: `url('hospital.jpg')`,
        }}
        className="bg-cover bg-center h-80 flex items-center justify-center text-white rounded-lg shadow-lg mx-4 my-4"
      >
        <h1 className="text-5xl font-bold bg-white bg-opacity-10 px-8 py-4 rounded-full backdrop-blur-lg shadow-md">
          Welcome to Seattle Grace Hospital
        </h1>
      </animated.section>
      <animated.section style={fadeInContent} className="py-16 text-center bg-white rounded-lg mx-4 shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Vision and Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          
Here’s a concise version of the content in 15 lines:

Providing compassionate, accessible, high-quality healthcare to transform lives.
Seattle Grace Hospital is dedicated to delivering exceptional care with compassion and empathy. Our mission is to not only treat illnesses but to provide a supportive environment that nurtures the physical, emotional, and mental well-being of every patient.

We strive to make healthcare accessible to all, bridging gaps in affordability and availability. By offering state-of-the-art facilities and personalized care, we ensure that every patient feels valued and understood. Our approach emphasizes education and empowerment, enabling individuals to take charge of their health and well-being.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
        Dedicated to advancing health through innovation, clinical quality, and unmatched commitment.
Innovation drives everything we do at Seattle Grace Hospital. From advanced surgical techniques to groundbreaking research, we lead the way in delivering cutting-edge care tailored to individual needs.

Our team of experts is committed to clinical excellence, ensuring the highest quality outcomes for our patients. Beyond treatment, we actively engage in community health initiatives and preventive care programs to build a healthier future.

At Seattle Grace Hospital, we’re transforming lives, redefining healthcare, and shaping a brighter tomorrow.
        </p>
      </animated.section>
      <animated.section style={fadeInContent} className="py-16 bg-gray-50 rounded-lg mx-4 my-4 shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Doctors</h2>
        <OurDoctors />
      </animated.section>
      <animated.section style={fadeInContent} className="py-16 bg-gray-100 rounded-lg mx-4 my-4 shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">News and Achievements</h2>
        <HomeQuote />
      </animated.section>
      <Footer />
    </div>
  );
};

export default Home;
