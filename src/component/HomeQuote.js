import React from 'react';

const news = [
  {
    title: 'New Section Added',
    description: 'A new section has been inaugurated, featuring state-of-the-art facilities such as a Research and Development Cell, a cutting-edge Operation Theater, and a dedicated Check-Up Center for comprehensive health screenings and preventive care. This addition underscores our commitment to innovation and excellence in healthcare.',
  },
  {
    title: 'Best Hospital Award',
    description: 'We are honored to be recognized as the Best Hospital in Scranton! This prestigious accolade reflects the trust and support of our patients and the relentless dedication of our healthcare team. Thank you for making us a benchmark of excellence in medical care.',
  },
  {
    title: 'Medicinal Contribution',
    description: 'Our renowned researcher, Dr. Subhashish Karmakar, has achieved a breakthrough in dermatological medicine by discovering a revolutionary cure for skin microbes. This innovation is set to transform the way we treat skin conditions, improving lives worldwide.',
  },  
];

const HomeQuote = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeQuote;
