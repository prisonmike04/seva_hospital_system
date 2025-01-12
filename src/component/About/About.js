import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-80 text-white bg-cover bg-center rounded-lg shadow-lg my-4 mx-4" style={{ backgroundImage: `url('hospital.jpg')` }}>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-lg shadow-md">
          <h1 className="text-4xl font-bold text-center">About Seattle Grace Hospital</h1>
        </div>
      </section>
      <section className="py-16 bg-white rounded-lg shadow-md mx-4">
        <p className="text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
        Seattle Grace Hospital Ltd is the premier private healthcare provider in Scranton, offering a comprehensive range of world-class medical services. With cutting-edge facilities and a team of highly skilled professionals, we are committed to setting the benchmark for excellence in healthcare.

Our hospital is equipped with state-of-the-art technology, modern treatment facilities, and advanced diagnostic centers, ensuring accurate and efficient medical care. From routine check-ups to complex surgeries, we provide a seamless healthcare experience tailored to the unique needs of every patient.

What sets us apart is our dedicated team of physicians, surgeons, nurses, and support staff, who work tirelessly to deliver compassionate and personalized care. We believe in not just treating illnesses but also enhancing the overall well-being of our patients through empathy and innovation.

Seattle Grace Hospital takes pride in its specialized departments, including cardiology, oncology, orthopedics, pediatrics, and more, offering expert care across a wide spectrum of medical fields. Our commitment to research and development ensures that we stay ahead of the curve, pioneering new treatments and techniques that save lives.

Beyond medical care, we actively engage with the Scranton community through health awareness programs, preventive screenings, and wellness initiatives. At Seattle Grace Hospital, we are not just transforming healthcare — we are transforming lives.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
