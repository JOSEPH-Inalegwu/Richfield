import React, { useState } from 'react'

function ProductCard({
    name='Product',
    description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    id = '0000',
    image = 'src/assets/no_image.png',
    priceInCent = 4000

}) {

    const [value, setValue] = useState(1)
   
  return (
       <div className='border text-center cursor-pointer py-6 px-4 rounded-md'> 
        <div className='space-y-2'>
            <div className='flex justify-center items-center'>
                <img src={image} alt=""
                className='w-48 h-36' 
                />
            </div>
            <h3 className='text-lg font-bold'
            >{name}</h3>
            <p className='flex justify-center md:text-left'
            >{description}</p>
        </div>
        <div className='mt-6 flex items-center justify-center space-x-8'>
            <div className="w-20 bg-white flex items-center justify-between rounded-md p-2 border border-green-500">
                <div className="w-5 bg-green-400 rounded-sm flex items-center justify-center hover:bg-green-800">
                    <div className='text-white font-bold cursor-pointer'
                    onClick={() => setValue(value => value > 1 ? value - 1 : value = 1)}
                    > - </div>
                </div>
                <p className=""> {value} </p>      
                <div className="w-5 bg-green-500 rounded-sm flex items-center justify-center hover:bg-green-800">
                    <div className='text-white font-bold cursor-pointer'
                    onClick={() => setValue(value => value + 1)}
                    > + </div>
                </div>
            </div>
            <p className='font-bold text-gray-800'
            >₦{(priceInCent / 100).toFixed(2)}</p>
        </div>

        <div className="justify-center text-green-500 mt-6">
            {/* <img src="" /> */}
            Added
        </div>

        <div className="mt-3">
          <button 
          className='bg-green-500 px-12 py-2 rounded-sm text-white'
          >Add to Cart</button>
        </div>
       </div>
  )
}

export default ProductCard