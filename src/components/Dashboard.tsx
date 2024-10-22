import React, { useState } from "react";
import { BackgroundGradient } from "./Background";
import DropDown from "./Dropdown"; // Ensure this component is properly defined.

const Dashboard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleModal = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main container for content with relative positioning */}
      <div className="relative z-20 flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="flex items-center justify-center h-16 bg-gray-800">
            {/* Logo/Icon */}
            <button onClick={toggleModal} className="text-white">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          <div className="flex items-center justify-center h-16 bg-gray-800">
            {isDropdownOpen && <DropDown/>}
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="px-4 py-2">
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2"
                >
                  <span className="text-lg">&#8962;</span>
                  <span>Dashboard</span>
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>

          <div className="mt-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2"
            >
              <span>&#9881;</span>
              <span>Settings</span>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <BackgroundGradient
          blur={15}
          waveWidth={60}
          waveOpacity={0.6}
          colors={["#fbcfe8", "#e9d5ff", "#f3e8ff", "#f9f5ff", "#f0abfc"]}
        />
        <div className="flex-grow flex flex-col">
          {/* Content Area */}
          <main
            className="flex-grow p-6 flex items-center justify-center"
            style={{ backgroundColor: "#e0f7fa" }}
          >
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-full w-full flex items-center justify-center">
              <p className="text-gray-500">Content goes here...</p>
            </div>
          </main>
        </div>
        <BackgroundGradient />
      </div>
    </>
  );
};

export default Dashboard;
