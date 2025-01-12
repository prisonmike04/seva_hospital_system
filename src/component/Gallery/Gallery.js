import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';

const images = [
  { src: 'facilities1.jpg', alt: 'Ward Rooms' },
  { src: 'facilities2.jpg', alt: 'Operation Theater' },
  { src: 'facilities3.jpg', alt: 'CT Scan/CAT Scan Center' },
  { src: 'facilities4.jpg', alt: 'PET Scan Center' },
  { src: 'facilities5.jpg', alt: 'ICU / CCU' },
  { src: 'facilities6.jpg', alt: 'OT Specialized for Heart Surgery' },
];

const Gallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="py-16">
        <h1 className="text-center text-4xl font-bold text-blue-700 mb-6">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-10 backdrop-blur-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
