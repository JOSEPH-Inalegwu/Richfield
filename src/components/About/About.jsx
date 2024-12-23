import React from 'react'

export default function About() {
  return (
    <>
    <div className="relative bg-center bg-cover bg-no-repeat h-[85vh] bg-[url('src/assets/about01.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 mx-5 md:mx-24 pb-20 flex flex-col items-start justify-end h-full space-y-4">
        <h2 className="text-white">HOME/ ABOUT</h2>
        <h1 className="lg:text-5xl md:text-4xl text-4xl text-white font-bold">About Us</h1>
        </div>
    </div>
      <div className="py-16 bg-white">
          <div className="lg:mx-14 px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-6/12 border">

                  {/* image grid */}
                <div className="grid-container md:grid">
                  <div className="grid-item item1">
                        <img src="src/assets/fruit00.jpg" alt="Fresh Fruits" />
                    </div>
                    <div className="grid-item item2 hidden md:block">
                        <img src="src/assets/fish00.jpg" alt="Fresh Fishes" />
                    </div>
                    <div className="grid-item item3 hidden md:block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7lT2RC_9oViBe0jFDXHZYH-AquNzSYAQdA&s" 
                        alt="Fruits" />
                    </div>
                </div>
                  
                  </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                        About Us Lorem Dolor
                    </h2>
                    <p className="mt-6 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                        accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                        aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                    </p>
                    <p className="mt-4 text-gray-600">
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                        Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                        Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                    </p>
                </div>
              </div>
          </div>
      </div>
      </>
  );
}