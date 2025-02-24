import React, { Fragment, useEffect, useState } from 'react';
import logo from "../../assets/img/logo.png";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className='bg-[#111111] text-white'>
      <div className='container lg:max-w-[1280px] mx-auto p-3'>
          <footer className="dark:bg-gray-100 dark:text-gray-900">
          	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
          		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start text-xl">
                <li className='hover:text-yellow-400'> 
                  <a href="#" >
                    Home 
                  </a>
                </li>
                <li className='hover:text-yellow-400'>  
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className='hover:text-yellow-400'>  
                    <a href="#experience">
                        Experience
                    </a>  
                </li>
                <li className='hover:text-yellow-400'>  
                    <a href="#projects">
                        Projects
                    </a>  
                </li>
                <li className='hover:text-yellow-400'>  
                  <a href="#contact">
                      Contact 
                  </a> 
                </li>
                <Fragment>
                  <div className=" footer justify-center text-center flex">
                    <h6 className='text-center'>{`© ${year}`}</h6>
                  </div>
                </Fragment>
          		</ul>
          		<div className="flex flex-col justify-center pt-6 lg:pt-0">
          			<div className="flex justify-center space-x-4">
                  <a rel="noopener noreferrer" href="https://github.com/ramazanova20" target="_blank" title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.71c-2.78.6-3.37-1.19-3.37-1.19-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.43.1 2.69.64.69 1.03 1.58 1.03 2.67 0 3.83-2.35 4.68-4.58 4.92.36.31.67.91.67 1.84v2.73c0 .27.18.59.69.49A10.005 10.005 0 0 0 22 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"/>
                    </svg>
                  </a>
          				<a rel="noopener noreferrer" href="https://www.linkedin.com/in/gunay-ramazanova/" target="_blank" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-blue-700 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727V22.27C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.727C24 .774 23.21 0 22.23 0zM7.12 20.453H3.56V9.056h3.56v11.397zM5.34 7.514a2.07 2.07 0 0 1-2.08-2.08c0-1.149.931-2.08 2.08-2.08s2.08.931 2.08 2.08a2.07 2.07 0 0 1-2.08 2.08zM20.44 20.453h-3.56v-5.615c0-1.34-.027-3.064-1.867-3.064-1.868 0-2.155 1.46-2.155 2.965v5.714h-3.56V9.056h3.42v1.56h.048c.477-.904 1.644-1.865 3.386-1.865 3.62 0 4.29 2.38 4.29 5.474v6.228z"></path>
                    </svg>
                  </a>
          				<a rel="noopener noreferrer" href="mailto:ramazanovagunay020@gmail.com" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
          					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8">
          						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          					</svg>
          				</a>
          			</div>
          		</div>
          	</div>
            <div className="flex flex-col w-full lg:w-auto">
              <div className="pt-5 footer justify-center text-center flex">
                <div className="logo">
                  <img src={logo} alt="Logo" className='max-w-[220px]'/>
                </div>  
              </div>
            </div>
          </footer>
      </div>
    </div>
  )
}

export default Footer