import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addToCart } from '../../redux/features/cart/cartSlice'; // Import the action to add to cart

function ProductCard({
  name = 'Product',
  description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  id = '0000',
  image = 'src/assets/no_image.png',
  priceInCent = 4000,
}) {
  const [value, setValue] = useState(1);
  const [added, setAdded] = useState(false); // Local state for showing the "Added" notification
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Function to handle adding item to the cart
  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product details
    dispatch(addToCart({
      id,
      name,
      description,
      image,
      priceInCent,
      quantity: value,
    }));
    setAdded(true); // Show the "Added" notification
    setTimeout(() => {
      setAdded(false); // Hide the notification after 2 seconds
    }, 2000);
  };

  return (
    <div className='border text-center cursor-pointer py-6 px-4 rounded-md relative flex flex-col justify-between' style={{ height: '500px' }}> 
      <div className='space-y-2'>
        <div className='flex justify-center items-center'>
          <img src={image} alt="" className='w-48 h-36' />
        </div>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p className='flex justify-center md:text-left'>{description}</p>
      </div>

      <div className='mt-6 flex items-center justify-center space-x-8'>
        <div className="w-20 bg-white flex items-center justify-between rounded-md p-2 border border-green-500">
          <div className="w-5 bg-green-400 rounded-sm flex items-center justify-center hover:bg-green-800">
            <div 
              className='text-white font-bold cursor-pointer'
              onClick={() => setValue(value => value > 1 ? value - 1 : 1)} // Prevent value going below 1
            >
              -
            </div>
          </div>
          <p>{value}</p>
          <div className="w-5 bg-green-500 rounded-sm flex items-center justify-center hover:bg-green-800">
            <div 
              className='text-white font-bold cursor-pointer'
              onClick={() => setValue(value + 1)} // Increase the quantity by 1
            >
              +
            </div>
          </div>
        </div>

        <p className='font-bold text-gray-800'>
          ₦{(priceInCent)} {/* Format price##.toFixed(2) */}
        </p>
      </div>

      {/* Notification that appears when an item is added to the cart */}
      {added && (
        <div className="mt-4 text-green-500 font-bold">
          <span>Added</span>
        </div>
      )}

      <div className="mt-3">
        <button 
          className='bg-green-500 px-12 py-2 rounded-sm text-white'
          onClick={handleAddToCart} // Call the handleAddToCart function on click
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
