import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';
import GlassCard from '../GlassCard/GlassCard';

const images = [
  {
    src: '/assets/images/facilities1.jpg',
    alt: 'Ward Rooms',
    description: 'Comfortable and spacious ward rooms with modern amenities.',
  },
  {
    src: '/assets/images/facilities2.jpg',
    alt: 'Operation Theater',
    description: 'Cutting-edge operation theaters for complex procedures.',
  },
  {
    src: '/assets/images/facilities3.jpg',
    alt: 'CT Scan/CAT Scan Center',
    description: 'Advanced diagnostic imaging technology for precise results.',
  },
  {
    src: '/assets/images/facilities4.jpg',
    alt: 'PET Scan Center',
    description: 'Comprehensive PET scan facilities for accurate imaging.',
  },
  {
    src: '/assets/images/facilities5.jpg',
    alt: 'ICU / CCU',
    description: 'High-tech ICUs and CCUs for critical care patients.',
  },
  {
    src: '/assets/images/facilities6.jpg',
    alt: 'Heart Surgery OT',
    description: 'Dedicated heart surgery operating rooms with expert care.',
  },
];

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen">
      <Navbar />
      <div className="py-16">
        <h1 className="text-center text-5xl font-extrabold text-blue-800 mb-10">Our Facilities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {images.map((image, index) => (
            <GlassCard key={index} title={image.alt} description={image.description} image={image.src} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
