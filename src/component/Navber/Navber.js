import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Seattle Grace Hospital</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/regPatient" className="hover:text-gray-300">
              Patient Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
