import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // İkonlar üçün
import logo from '../../assets/img/logo.png';

function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <div className='fixed top-0 left-0 bg-[#111111] w-full shadow-md z-50'>
      <div className="container mx-auto p-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="max-w-[220px]" />
          </div>
    
          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row justify-end text-white gap-8 my-4 text-xl">
            <li className='hover:text-yellow-400' onClick={scrollToTop}><Link to="/">Home</Link></li>
            <li className='hover:text-yellow-400'><a href="#about">About</a></li>
            <li className='hover:text-yellow-400'><a href="#experience">Experience</a></li>
            <li className='hover:text-yellow-400'><a href="#projects">Projects</a></li>
            <li className='hover:text-yellow-400'><a href="#contact">Contact</a></li>
          </ul>
    
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
    
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#111111] text-white absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-8 text-xl">
            <li className='hover:text-yellow-400'><Link to="/" onClick={() => {scrollToTop(); setIsOpen(false);}}>Home</Link></li>
            <li className='hover:text-yellow-400'><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li className='hover:text-yellow-400'><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li className='hover:text-yellow-400'><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className='hover:text-yellow-400'><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
