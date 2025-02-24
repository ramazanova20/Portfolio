import React, {useState} from 'react'

function Contact() {
	const [message, setMessage] = useState(""); 
  return (
    <div id='contact' className='pt-20'>
      <div className="text-white grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      	<div className="flex flex-col justify-between text-white">
      		<div className="space-y-2 text-white"> 
      			<h2 className="text-4xl font-bold leading-tight lg:text-5xl hover:text-yellow-400">Let's talk!</h2>
      		</div>
      		<img src="https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png" alt="" className="h-full" />
      	</div>
      	<form noValidate="" className="space-y-6 mt-14">
      		<div>
      			<label htmlFor="name" className="text-sm">Full name</label>
      			<input id="name" type="text" placeholder="Full Name" className="w-full p-3 rounded dark:bg-gray-100 border-2 border-solid border-[#139504] mt-2" />
      		</div>
      		<div>
      			<label htmlFor="email" className="text-sm">Email</label>
      			<input id="email" type="email" placeholder='Email' className="w-full p-3 rounded dark:bg-gray-100 border-2 border-solid border-[#139504] mt-2" />
      		</div>
      		<div>
      			<label htmlFor="message" className="text-sm">Message</label>
      			<textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="3" placeholder='Message' className="w-full p-3 rounded dark:bg-gray-100 border-2 border-solid border-[#139504] mt-2" spellCheck="false"></textarea>
      		</div>
      		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50 border-2 border-solid border-[#139504] mt-2">Send Message</button>
      	</form>
      </div>
    </div>
  )
}

export default Contact