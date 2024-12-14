import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-2xl container mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-20 h-auto" 
          />
          <div className="hidden md:flex gap-6">
            <button className="hover:text-blue-500">Pricing</button>
            <button className="hover:text-blue-500">How it works</button>
            <button className="hover:text-blue-500">Contact Us</button>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-blue-500">Log in</button>
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
            Sign up
          </button>
        </div>
        <div className="md:hidden">
          <button 
            className="text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "\u2715" : "\u2630"} 
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col gap-4 px-4 py-2">
            <button className="hover:text-blue-500">Pricing</button>
            <button className="hover:text-blue-500">How it works</button>
            <button className="hover:text-blue-500">Contact Us</button>
            <button className="hover:text-blue-500">Log in</button>
            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
