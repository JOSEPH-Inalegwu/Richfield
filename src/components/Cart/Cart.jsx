import React from "react";
import { Link } from "react-router-dom";
import {removeFromCart, clearCart, incrementQuantity, decrementQuantity} from '../../redux/features/cart/cartSlice'; // Adjust path as needed

import { useSelector, useDispatch } from "react-redux";
// import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.priceInCent * item.quantity,
    0
  );

  console.log(total)

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto p-6 text-slate-600">

        {cartItems.length === 0 ? (
         <div className="grid place-content-center bg-white px-4">
         <div className="text-center">
           <h1 className="text-9xl font-black text-gray-300 mb-10">
            Ops!
           </h1>
       
           {/* <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p> */}
       
           <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No item in the cart
           </p>
  
          <Link to='/'
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Add Product
          </Link>
         </div>
       </div>
        ): (
          <>
            {/* Table for larger screens */}
            <div className="hidden md:block">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border border-gray-300">S.N.</th>
                    <th className="p-3 border text-left border-gray-300">Image</th>
                    <th className="p-3 border border-gray-300 text-left">Product</th>
                    <th className="p-3 border border-gray-300">Unit Price</th>
                    <th className="p-3 border border-gray-300">Quantity</th>
                    <th className="p-3 border border-gray-300">Total Price</th>
                    <th className="p-3 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={item.id}>
                      <td className="p-3 border border-gray-300 text-center">
                        {index + 1}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-3 border border-gray-300">{item.name}</td>
                      <td className="p-3 border border-gray-300 text-center">
                      ₦{(item.priceInCent).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        <button
                          className="px-2 text-white bg-green-500 rounded"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="px-2 text-white bg-green-500 rounded"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        ₦{(item.priceInCent * item.quantity).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        <button
                          className="text-slate-700 text-2xl"
                          onClick={() => dispatch(removeFromCart(item.id))}
                          
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for mobile view */}
            <div className="md:hidden space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-4 border border-gray-300 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p>
                      Unit Price: ₦{(item.priceInCent).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p>Total:  ₦{(item.priceInCent * item.quantity).toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 text-white bg-green-500 rounded"
                        // onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 text-white bg-orange-500 rounded"
                        // onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="px-3 py-1 text-white bg-red-600 rounded self-start sm:self-center"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    {/* <FaTrash /> */}
                  </button>
                </div>
              ))}
            </div>

            {/* Footer actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <button
                className="px-6 py-2 bg-red-600 text-white rounded shadow w-full sm:w-auto"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <div className="flex items-center text-base font-bold text-green-600">
                Quantity ({cartItems.length} Items ): 
                <div className="mx-3 text-xl"> 
                  ₦{(total).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div> 
              </div>
              <Link 
                to=''
                className="px-8 py-3 bg-green-600 text-white rounded shadow w-full sm:w-auto"
              >
                Check Out
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;
