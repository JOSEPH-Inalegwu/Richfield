import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addToCart } from '../../redux/features/cart/cartSlice'; // Import the action to add to cart
import { div } from 'motion/react-client';

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
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-62 cursor-pointer">
      <div className="relative">
          <img src={image} alt="Product image" className="w-full h-44 object-cover" />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
              <svg className="w-4 h-4 text-center text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>
      </div>
      <div className="p-4">
          <div className="flex justify-between items-start">
              <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {name}
                  </h2>
              </div>
          </div>
              <div className="py-2 flex items-center gap-8">
                <p className="text-lg font-semibold text-green-600">
                  ₦{(priceInCent).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              
                <p className="text-sm text-gray-600 font-semibold line-through">
                  ₦{(priceInCent * 2).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
          <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                  <i className="fas fa-truck text-slate-600 mr-2"></i>
                  <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center">
                  <i className="fas fa-clock text-slate-600 mr-2"></i>
                  <span className="text-sm text-gray-600">In Stock</span>
              </div>
          </div>

          <div 
            style={{ visibility: added ? 'visible' : 'hidden' }}
            className='my-2 flex items-center gap-2 text-green-600'>
            <i className="fa-solid fa-circle-check"></i>
            <p id='add-to-cart' 
            className='text-sm text-green-600 h-5'
            >
            Added To Cart
            </p>
          </div>
          <div className="flex space-x-10">
              <button 
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-200">
                  Add to Cart
              </button>
            <div className='flex items-center'>
              <select 
              name="select"
              value={value}
              className='bg-gray-200 text-slate-800 w-20 rounded-full border px-3 py-2'
              onChange={(e) => setValue(Number(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
      </div>
      </div>

  </div>
  );
}

export default ProductCard;
