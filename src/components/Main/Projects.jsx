import React from 'react'
import 'animate.css';
import apple from "../../assets/img/apple1.png";
import movie from "../../assets/img/movie.png";
import cosmetics from "../../assets/img/cosmetics.png";
import medical from "../../assets/img/medical.png";

function Projects() {
  return (
    <div id="projects">
        <div className='pt-24'>
           <div className='text-white text-center mb-4'>
           <h1 className="text-white text-3xl font-bold text-center hover:text-yellow-400">My Portfolio</h1>
                <p> Projects I worked on</p>
           </div>
            <div className='py-4'>
                <div className="flex flex-col lg:flex-row justify-between py-6">
                    <section className="text-white py-12 lg:py-36 tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Project Highlights</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-lg/7 text-center lg:text-left">
                            <li>A movie and TV series platform that fetches data from TVMaze and Custom APIs.</li> 
                            <li>Real-time search and category-based filtering for an enhanced user experience.</li> 
                            <li>Dark-themed UI with smooth animations for a cinematic feel.</li> 
                            <li><strong>Developed a custom API</strong> to handle specific data processing needs.</li> 
                            <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, React Router, TVMaze API, Custom API</li>
                        </ul>
                    </section>
                    <a href='https://movie-world-bay.vercel.app/' target="_blank" className="border-r-8 border-b-8 border-solid border-[#139504] p-4 lg:w-[50%] tilt-in-right-2">
                        <img src={movie} alt="Movie" className='lg:py-12 w-full'/>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0 lg:border-t-0 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Project Highlights</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-center text-lg/7 lg:text-left">
                            <li>An online beauty store showcasing various cosmetic products.</li> 
                            <li>Includes product filtering and sorting options for better navigation.</li> 
                            <li>Modern and clean UI with responsive design.</li> 
                            <li><strong>Developed a custom API</strong> to manage product data and improve performance.</li> 
                            <li>Integrated data from <a href="https://makeup-api.herokuapp.com/" target="_blank">Makeup API</a> for an extensive product collection.</li> 
                            <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, React Router, Makeup API, Custom API</li>
                        </ul>
                    </section>
                    <a href='https://cosmetics-site-bay.vercel.app/' target="_blank" className="flex p-4 border-r-8 border-b-8 lg:border-l-8 lg:border-t-8 border-solid lg:border-r-0 lg:border-b-0 border-[#139504] lg:w-[50%] tilt-in-right-2">
                        <img src={cosmetics} alt="Cosmetics" className='py-12 w-full'/>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Project Highlights</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-lg/7 text-center lg:text-left">
                            <li>A sleek and minimalist landing page inspired by Apple’s design.</li> 
                            <li>Showcases product features with a modern layout.</li> 
                            <li>Fully responsive design built with Bootstrap.</li> 
                            <li>Emphasizes simplicity, elegance, and usability.</li> 
                            <li><strong>Tech Stack:</strong> HTML, CSS, Bootstrap</li>
                        </ul>
                    </section>
                    <a href='https://apple-green-two.vercel.app/' target="_blank" className="lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
                        <img src={apple} alt="Apple" className=' py-12 w-full'/>
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0 lg:border-t-0 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Project Highlights</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-lg/7 text-center lg:text-left">
                            <li>A simple and professional website for medical institutions.</li> 
                            <li>Provides essential information about healthcare services.</li> 
                            <li>Clean and responsive design using Bootstrap.</li> 
                            <li>Focused on accessibility and user-friendly navigation.</li> 
                            <li><strong>Tech Stack:</strong> HTML, CSS, Bootstrap</li>
                        </ul>
                    </section>
                    <a href='https://medical-nine-beta.vercel.app/' target="_blank" className="p-4 border-r-8 border-b-8 lg:border-l-8 lg:border-t-8 border-solid lg:border-r-0 lg:border-b-0 border-[#139504] lg:w-[50%] tilt-in-right-2">
                        <img src={medical} alt="Medical" className='py-12 w-full'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects