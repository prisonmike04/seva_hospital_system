import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 rounded-t-lg shadow-md">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
          <p className="text-sm">Email: sgh@gmail.com</p>
          <p className="text-sm">Phone: 9874561230</p>
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Address</h5>
          <p className="text-sm">Scranton, Pennsylvania</p>
        </div>
        <div className="mt-6">
          <p className="text-xs">© 2025 Seattle Grace Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
