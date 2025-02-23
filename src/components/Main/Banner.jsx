import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
         <div  
        className="py-[150px]"
        // className="bg-[url('https://cdn.pixabay.com/photo/2022/06/30/23/43/ink-7294678_1280.jpg')] bg-cover bg-center h-screen"
        >
            <h1 className='text-8xl font-bold bg-gradient-to-r from-[#139504] to-green-500 text-transparent bg-clip-text'>Hello, Everyone!</h1>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-[#139504] to-green-500 text-transparent bg-clip-text'>I'm Gunay Ramazanova</h1>
            <h6 className='text-xl text-white'>Front-End Developer and I'm passionated and dedicated to my work</h6>
            <a href="#contact" >
              <button className='border-4 border-dashed border-[#139504] p-2 mt-2 font-bold bg-gradient-to-r from-[#139504] to-green-500 text-transparent bg-clip-text'>
                <h1>Let's talk</h1>
              </button>
                
            </a>
            
        </div>
    </div>
  )
}

export default Banner