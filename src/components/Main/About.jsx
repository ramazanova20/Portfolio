import React from 'react';
import profil from "../../assets/img/profil.jpg";

function About() {
  return (
    <div className='bg-[#1B1B18]'>
      <div id="about" className="pt-20 px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Mətn hissəsi */}
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h1 className="text-white text-3xl font-bold hover:text-yellow-400">About Me</h1>
            <p className="text-white mt-4 text-xl space-y-2">
              Hello! I'm Gunay Ramazanova, a passionate Frontend Developer with a strong eye for design and user experience. 
              I specialize in React.js, JavaScript, Tailwind CSS, and Bootstrap, and I enjoy building visually appealing and functional web applications.
            </p>
            <a href="https://www.linkedin.com/in/gunay-ramazanova/" target="_blank" className="p-2 mt-4 text-2xl font-bold bg-gradient-to-r from-[#139504] to-green-500 text-transparent bg-clip-text">Learn More</a>
          </div>

          {/* Şəkil hissəsi */}
          <div className="w-full md:w-[50%] flex justify-center mt-6 lg:mt-0 mb-6">
            <img className="w-64 h-64 object-cover rounded-lg" src={profil} alt="profil" />
          </div>
        </div>
      </div>
     </div> 
  );

}

export default About;
