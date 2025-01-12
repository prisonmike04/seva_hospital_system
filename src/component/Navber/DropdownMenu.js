import React from 'react';
import { Menu } from '@headlessui/react';

const DropdownMenu = () => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {/* Dropdown Trigger */}
        <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Login
        </Menu.Button>

        {/* Dropdown Content */}
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/patient/login"
                className={`block px-4 py-2 text-gray-800 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Patient Login
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/doctors/login"
                className={`block px-4 py-2 text-gray-800 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Doctor Login
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/employee/login"
                className={`block px-4 py-2 text-gray-800 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Employee Login
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/administrator/login"
                className={`block px-4 py-2 text-gray-800 ${
                  active ? 'bg-gray-100' : ''
                }`}
              >
                Admin Login
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
