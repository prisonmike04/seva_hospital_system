import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="E:\MERN + AI\seva_hospital_management_system-master\seva_hospital_management_system-master\client\src\logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-semibold">
          <li>
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-200">
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/regPatient" className="hover:text-gray-200">
              Patient Register
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <div>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
