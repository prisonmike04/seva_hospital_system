import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/gallery" className="hover:text-blue-400">Gallery</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <p>Email: info@seattlegracehospital.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Grace Road, Scranton, PA</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Company</h3>
          <ul>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2025 Seattle Grace Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
