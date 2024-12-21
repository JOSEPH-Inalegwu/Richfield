import React from 'react'

function Service() {

  return (
    <div className=''>
      <div className="relative bg-center bg-cover bg-no-repeat h-[85vh] bg-[url('src/assets/about02.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 mx-5 md:mx-24 pb-20 flex flex-col items-start justify-end h-full space-y-4">
        <h2 className="text-white">HOME/ SERVICES</h2>
        <h1 className="lg:text-5xl md:text-4xl text-4xl text-white font-bold"
          >Services
        </h1>
          </div>
      </div>

      <div className="relative my-16 md:my-24 gap-y-14 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-x-10 md:gap-y-12 lg:mx-16">
          <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-md">
            <img src="src/assets/images/icon-06.svg" alt="" />
            <h3 className="text-3xl text-gray-600">High-quality Products</h3>
            <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

           <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-2xl">
            <img src="src/assets/images/icon-04.svg" alt="" />
            <h3 className="text-3xl text-gray-700">Crafted for Startups</h3>
            <p className="text-xl text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

           <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-md">
            <img src="src/assets/images/icon-06.svg" alt="" />
            <h3 className="text-3xl text-gray-700">Fully Customizable</h3>
            <p className="text-xl text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

           <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-md">
            <img src="src/assets/images/icon-07.svg" alt="" />
            <h3 className="text-3xl text-gray-700">Speed Optimized</h3>
            <p className="text-xl text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

           <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-md">
            <img src="src/assets/images/icon-06.svg" alt="" />
            <h3 className="text-3xl text-gray-700">Regular Updates</h3>
            <p className="text-xl text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

           <div className="hover:bg-slate-100 transition duration-500 ease-in-out cursor-pointer space-y-6 p-12 rounded-md">
            <img src="src/assets/images/icon-05.svg" alt="" />
            <h3 className="text-3xl text-gray-700">All In One Place</h3>
            <p className="text-xl text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
           </div>

            <div>
              <img className="absolute top-0 right-24 animate-pulse" src="src/assets/images/shape-09.svg" alt="" />
            </div>
          </div>
    </div>
  )
}

export default Service