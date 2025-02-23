import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTop() {
  return (
    <div className='container lg:max-w-[1280px] mx-auto p-3'>
    <ul className='flex flex-row justify-end text-white gap-2'>
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
  )
}

export default HeaderTop