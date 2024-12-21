"use client"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold italic">heyDaddy</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 italic">
          <a href="#" className="hover:text-indigo-300">Home</a>
          <a href="#about" className="hover:text-indigo-300">About</a>
          <a href="#services" className="hover:text-indigo-300">Services</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 text-center space-y-4 py-4">
          <a href="#" className="block text-white">Home</a>
          <a href="#about" className="block text-white">About</a>
          <a href="#services" className="block text-white">Services</a>
          <a href="#contact" className="block text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
