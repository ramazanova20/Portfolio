import React from 'react'
import migration from "../../assets/img/migrationservice.png";
import intern from "../../assets/img/internintelligence.png";

function Experience() {
  return (
    <div>
        <div id="experience">
            <h1 className='text-center text-white'>Experience</h1>
            <div>
                <div className='py-4'>
                    <div className="flex flex-col md:flex-row justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center md:text-left hover:text-yellow-400">Frontend Developer Intern</h2>
                        <ul className="md:list-disc pl-6 space-y-2 text-lg/7 text-center md:text-left">
                            <li>Designed UI/UX for application and web pages using Figma.</li> 
                            <li>Identified existing problems and proposed design improvements.</li> 
                            <li>Collaborated with a mentor, completing tasks 8 hours/day.</li> 
                            <li>Developed web pages with HTML, CSS, and JavaScript.</li> 
                            <li><strong>Tech Stack:</strong> Figma, HTML, CSS, JavaScript</li>
                        </ul>
                    </section>
                    <div className="md:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
                        <img src={migration} alt="MigrationService" className='py-12 w-full'/>
                        {/* <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                    </div>
                    </div>
                </div>
                <div className='py-4'>
                    <div className="flex flex-col md:flex-row-reverse justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 md:border-r-8 md:border-b-8 md:border-l-0 md:border-t-0 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center md:text-left hover:text-yellow-400">Frontend Developer Intern</h2>
                        <ul className="md:list-disc pl-6 space-y-2 text-lg/7 text-center md:text-left">
                            <li>Built a movie website by integrating TVMaze and Custom APIs for real-time movie and TV show data.</li> 
                            <li>Created a portfolio website showcasing personal projects and skills.</li> 
                            <li>Collaborated with the team on UI/UX design and front-end development tasks.</li> 
                            <li>Utilized React.js, Tailwind CSS, and custom API development to enhance site functionality.</li> 
                            <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, TVMaze API, Custom API</li>
                        </ul>
                        
                        
                    </section>
                    <div className="flex p-4 border-r-8 border-b-8 md:border-l-8 md:border-t-8 border-solid md:border-r-0 md:border-b-0 border-[#139504] md:w-[50%] tilt-in-right-2">
                        <img src={intern} alt="InternIntelligence" className='py-12 w-full'/>
                        {/* <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience