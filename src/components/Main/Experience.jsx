import React from 'react'
import migration from "../../assets/img/migrationservice.png";
import intern from "../../assets/img/internintelligence.png";

function Experience() {
  return (
    <div>
        <div id="experience" className='pt-24'>
            <h1 className="text-white text-3xl font-bold text-center hover:text-yellow-400">Experience</h1>
            <div>
                <div className='py-4'>
                    <div className="flex flex-col lg:flex-row justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Frontend Developer Intern</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-lg/7 text-center lg:text-left">
                            <li>Designed UI/UX for application and web pages using Figma.</li> 
                            <li>Identified existing problems and proposed design improvements.</li> 
                            <li>Collaborated with a mentor, completing tasks 8 hours/day.</li> 
                            <li>Developed web pages with HTML, CSS, and JavaScript.</li> 
                            <li><strong>Tech Stack:</strong> Figma, HTML, CSS, JavaScript</li>
                        </ul>
                    </section>
                    <a href='https://migration.gov.az/en' target="_blank" className="lg:w-[50%] tilt-in-right-2 border-r-8 border-b-8 border-solid border-[#139504] p-4">
                        <img src={migration} alt="MigrationService" className='py-12 w-full'/>
                        {/* <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                    </a>
                    </div>
                </div>
                <div className='py-4'>
                    <div className="flex flex-col lg:flex-row-reverse justify-between py-6">
                    <section className="text-white py-12 lg:py-20 tilt-in-left-2 border-l-8 border-t-8 lg:border-r-8 lg:border-b-8 lg:border-l-0 lg:border-t-0 border-solid border-[#139504] p-4">
                        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left hover:text-yellow-400">Frontend Developer Intern</h2>
                        <ul className="lg:list-disc pl-6 space-y-2 text-lg/7 text-center lg:text-left">
                            <li>Built a movie website by integrating TVMaze and Custom APIs for real-time movie and TV show data.</li> 
                            <li>Created a portfolio website showcasing personal projects and skills.</li> 
                            <li>Collaborated with the team on UI/UX design and front-end development tasks.</li> 
                            <li>Utilized React.js, Tailwind CSS, and custom API development to enhance site functionality.</li> 
                            <li><strong>Tech Stack:</strong> React.js, Tailwind CSS, TVMaze API, Custom API</li>
                        </ul>
                    </section>
                    <a href='https://www.linkedin.com/company/intern-intelligence/posts/?feedView=all' target="_blank" className="flex p-4 border-r-8 border-b-8 lg:border-l-8 lg:border-t-8 border-solid lg:border-r-0 lg:border-b-0 border-[#139504] lg:w-[50%] tilt-in-right-2">
                        <img src={intern} alt="InternIntelligence" className='py-12 w-full'/>
                        {/* <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience