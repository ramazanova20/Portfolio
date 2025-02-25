import React from 'react';
import 'animate.css';
import apple from "../../assets/img/apple1.png";
import movie from "../../assets/img/movie.png";
import cosmetics from "../../assets/img/cosmetics.png";
import medical from "../../assets/img/medical.png";

function Projects() {
  return (
    <div id="projects" className="overflow-x-hidden px-4">
      <div className="pt-24">
        <div className="text-white text-center mb-6">
          <h1 className="text-3xl font-bold hover:text-yellow-400">My Portfolio</h1>
          <p>Projects I worked on</p>
        </div>
        
        <div className="space-y-12">
          {/* Movie Project */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
            <section className="text-white py-12 w-full lg:w-[50%] tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Movie Platform</h2>
              <ul className="lg:list-disc pl-6 space-y-2 text-lg text-center lg:text-left">
                <li>A movie and TV series platform that fetches data from TVMaze and Custom APIs.</li>
                <li>Real-time search and category-based filtering for an enhanced user experience.</li>
                <li>Dark-themed UI with smooth animations for a cinematic feel.</li>
                <li><strong>Developed a custom API</strong> to handle specific data processing needs.</li>
                <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, React Router, TVMaze API, Custom API</li>
              </ul>
            </section>
            <a href="https://movie-world-bay.vercel.app/" target="_blank" className="w-full lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
              <img src={movie} alt="Movie" className="w-full max-w-full h-auto" />
            </a>
          </div>

          {/* Cosmetics Project */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-6">
            <section className="text-white py-12 w-full lg:w-[50%] tilt-in-left-2 border-l-8 border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0 lg:border-t-0 border-solid border-[#139504] p-4">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Cosmetics Store</h2>
              <ul className="lg:list-disc pl-6 space-y-2 text-lg text-center lg:text-left">
                <li>An online beauty store showcasing various cosmetic products.</li>
                <li>Includes product filtering and sorting options for better navigation.</li>
                <li>Modern and clean UI with responsive design.</li>
                <li><strong>Developed a custom API</strong> to manage product data and improve performance.</li>
                <li>Integrated data from <a href="https://makeup-api.herokuapp.com/" target="_blank">Makeup API</a> for an extensive product collection.</li>
                <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, React Router, Makeup API, Custom API</li>
              </ul>
            </section>
            <a href="https://cosmetics-site-bay.vercel.app/" target="_blank" className="w-full lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
              <img src={cosmetics} alt="Cosmetics" className="w-full max-w-full h-auto" />
            </a>
          </div>

          {/* Apple-Inspired Project */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
            <section className="text-white py-12 w-full lg:w-[50%] tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Apple-Inspired Landing Page</h2>
              <ul className="lg:list-disc pl-6 space-y-2 text-lg text-center lg:text-left">
                <li>A sleek and minimalist landing page inspired by Apple’s design.</li>
                <li>Showcases product features with a modern layout.</li>
                <li>Fully responsive design built with Bootstrap.</li>
                <li>Emphasizes simplicity, elegance, and usability.</li>
                <li><strong>Tech Stack:</strong> HTML, CSS, Bootstrap</li>
              </ul>
            </section>
            <a href="https://apple-green-two.vercel.app/" target="_blank" className="w-full lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
              <img src={apple} alt="Apple" className="w-full max-w-full h-auto" />
            </a>
          </div>

          {/* Medical Website */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-6">
            <section className="text-white py-12 w-full lg:w-[50%] tilt-in-left-2 border-l-8 border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0 lg:border-t-0 border-solid border-[#139504] p-4">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Medical Website</h2>
              <ul className="lg:list-disc pl-6 space-y-2 text-lg text-center lg:text-left">
                <li>A simple and professional website for medical institutions.</li>
                <li>Provides essential information about healthcare services.</li>
                <li>Clean and responsive design using Bootstrap.</li>
                <li>Focused on accessibility and user-friendly navigation.</li>
                <li><strong>Tech Stack:</strong> HTML, CSS, Bootstrap</li>
              </ul>
            </section>
            <a href="https://medical-nine-beta.vercel.app/" target="_blank" className="w-full lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
              <img src={medical} alt="Medical" className="w-full max-w-full h-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
