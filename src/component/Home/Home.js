import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';

const Home = () => {
  const features = [
    { title: 'Instant Video Consultation', description: 'Connect within 60 secs', icon: '/assets/icons/video.png' },
    { title: 'Find Doctors near you', description: 'Confirmed appointments', icon: '/assets/icons/doctor.png' },
    { title: '24/7 Medicines', description: 'Essentials at your doorstep', icon: '/assets/icons/medicine.png' },
    { title: 'Lab Tests', description: 'Sample pickup at your home', icon: '/assets/icons/lab.png' },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-content">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Consult a doctor <span className="text-purple-500">anytime, anywhere</span> by video call
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Get access to top-notch medical advice from licensed doctors through our secure, HIPAA-compliant video call platform.
          Whether you're looking for instant consultation, follow-up care, or general advice, our platform provides a seamless way
          to connect with healthcare professionals in real-time. Experience personalized medical care from the comfort of your home.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="/ask-doctor" className="btn-primary">
            Ask A Doctor Online
          </a>
          <a href="/chat" className="btn-secondary">
            Unlimited Chat
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to Meddical</h2>
        <h3>A Great Place to Receive Care</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
          Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
        <a href="/learn-more">Learn More →</a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-box flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
