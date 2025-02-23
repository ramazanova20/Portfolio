import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png";
function HeaderTop() {
  return (
    <div className='container mx-auto p-3'>
        <div className='flex justify-between'>
            <div className="logo">
              <img src={logo} alt="Logo" className='max-w-[220px]'/>
            </div>
            <ul className='flex flex-row justify-end text-white gap-8 my-4'>
                <li> 
                    <Link to={"/"} >
                        Home 
                    </Link>

                </li>
                <li>  
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>  
                    <a href="#experience">
                        Experience
                    </a>  
                </li>
                <li>  
                    <a href="#projects">
                        Projects
                    </a>  
                </li>
                <li>  
                    <a href="#contact">
                        Contact 
                    </a> 
                </li>
            </ul>
        </div>
    
</div>
  )
}

export default HeaderTop