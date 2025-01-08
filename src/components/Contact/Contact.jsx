import React from 'react'

function Contact() {
  return (
  <div className='bg-gray-200 pb-5'>
 <div className="relative bg-center bg-cover bg-no-repeat h-[85vh] bg-[url('src/assets/contact.jpg')]">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 mx-5 md:mx-24 pb-20 flex flex-col items-start justify-end h-full space-y-4">
      <h2 className="text-white">HOME/ CONTACT</h2>
      <h1 className="lg:text-5xl md:text-4xl text-4xl text-white font-bold">Contact Us</h1>
    </div>
  </div>


   <h1 className='font-bold text-3xl mx-5 md:text-center lg:text-left md:mx-24 mt-16 mb-4'
   >Get in Touch</h1>
     <div className="lg:mx-24 md:mx-6 flex flex-col md:flex-row
        px-6 md:px-0 md:space-x-14">
        <div className="flex flex-col md:w-1/2 space-y-12 mb-16 md:mb-0">
          
          <form>
            <div className='flex flex-col space-y-6'>
              <input 
              type="text" 
              className='border px-6 py-4 outline-none rounded-md hover:shadow-md '
              placeholder='Your Name'
              />
              <input 
              type="email" 
              className='border px-6 py-4 outline-none rounded-md hover:shadow-md'
              placeholder='Your Email'
              required
              />
              <input 
              type="text" 
              className='border px-6 py-4 outline-none rounded-md hover:shadow-md'
              placeholder='Subject'
              />

              <textarea 
              placeholder='Message'
              cols="30" 
              rows="5"
              className='border outline-none px-6 py-4 rounded-md hover:shadow-md'
              ></textarea>
            </div>
          </form>
        <div>
          <button className='bg-green-500 text-white px-12 py-4 rounded-sm hover:bg-green-700'
          >Send Message</button>
        </div>
      </div>

        <div className="md:w-1/2 space-y-6">
          <div className='bg-white border px-6 py-4 space-y-4 hover:shadow-lg cursor-pointer'>
            <div className='flex items-center space-x-12'>
              <img src="/arrowUp.svg"
              className='w-[8%]'/> 
              <p className='font-bold'>Address</p>
            </div>
            <h1 className='text-center md:text-left'
            >198 West 21th Street, Suite 721 New York NY 10016</h1>
          </div>

          <div className='bg-white border px-6 py-4 space-y-4 hover:shadow-lg cursor-pointer'>
            <div className='flex items-center space-x-12'>
              <img src="/arrowUp.svg"
              className='w-[8%]'/> 
              <p className='font-bold'>Phone</p>
            </div>
            <h1 className='text-center md:text-left'
            >+000-1900-8979-00</h1>
          </div>

          <div className='bg-white border px-6 py-4 space-y-4 hover:shadow-lg cursor-pointer'>
            <div className='flex items-center space-x-12'>
              <img src="/arrowUp.svg"
              className='w-[8%]'/> 
              <p className='font-bold'>Email</p>
            </div>
            <h1 className='text-center md:text-left'
            >info@example.com</h1>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Contact