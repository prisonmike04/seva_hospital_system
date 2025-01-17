import React from 'react';

const GlassCard = ({ title, description, image }) => {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 p-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-white/90">{description}</p>
      </div>
    </div>
  );
};

export default GlassCard;
