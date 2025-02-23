import React from 'react'
import Banner from './Banner'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from '../Header/Contact'

function Main() {
  return (
    <div className='bg-black'>
        <div  
        className="container lg:max-w-[1280px] mx-auto p-3 py-[200px]"
        // className="bg-[url('https://cdn.pixabay.com/photo/2022/06/30/23/43/ink-7294678_1280.jpg')] bg-cover bg-center h-screen"
        >
            <Banner/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    </div>
  )
}

export default Main