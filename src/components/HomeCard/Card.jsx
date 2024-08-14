import React from 'react'

function Card({name = 'Undefined', image= 'src/assets/no_image.png', text}) {
  return (
    <>
    <div className="w-[95%] shadow-md border-solid border-gray-300 duration-300
        text-center cursor-pointer py-6 px-4 rounded-2xl bg-white/40 hover:bg-white">
        <div className="space-y-3">
            <div className="flex justify-center items-center">
                <img src={image} alt="" className="w-40 h-36" />
            </div>
            <h3 className="text-2xl font-bold"
            >{name}
            </h3>
            <p className="max-w-sm text-center text-darkGrayishBlue
            md:text-left">{text}</p>
        </div>
      </div>
    </>
  )
}

export default Card