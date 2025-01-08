import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store
import { div, style } from 'motion/react-client';

const Header = () => {
  const headerRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation(); // Get the current location (route)
  
  // Get the number of items in the cart from Redux store
  const cartItems = useSelector((state) => state.cart.items); // Adjust the path according to your store structure
  const cartItemCount = cartItems.length;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Downscroll
        setIsHidden(true);
      } else {
        // Upscroll
        setIsHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out',
  };

  // Check if the current route is the products page or the cart page
  const isProductsPage = location.pathname === '/product' || location.pathname === '/cart'; // Replace with your actual route

  return (
    <header ref={headerRef} style={headerStyle} className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 text-slate-600 px-4 lg:px-24 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="uppercase text-3xl font-bold text-slate-600">
              Rich<span className='text-green-500'>Field</span>
            </div>
          </Link>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div className='flex items-center lg:order-2'>
          {isProductsPage ? (
             <Link to="/cart" className="relative">
              {/* The cart icon */}
             <img 
             src="./src/assets/cart.svg"
              alt="cart" 
              className='w-10'
            />
             {cartItemCount > 0 && (
               <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                 {cartItemCount}
               </span>
             )}
           </Link>
          ) : (
               <button className="btn bg-green-500 text-white border-none px-6 rounded-none transition ease-linear hover:bg-slate-600" onClick={()=>document.getElementById('my_modal_3').showModal()}
                        >
                GET STARTED
              </button>
          )}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-white">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-400 hover:text-white">✕</button>
                </form>
          
                <div className='w-full'>
                  <div className='px-5'>
                    <div className='mb-4'>
                      <h2 className='text-3xl font-semibold pb-2 text-slate-800'
                      >Login</h2>
                    </div>
                    <form>
                      <div className='space-y-3'>
                        {/* Input Fields */}
                        <div className='flex flex-col'>
                          <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="text-black bg-white py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-slate-600"
                            required
                          />
                        </div>
                        <div className='flex flex-col'>
                          <input 
                            type="Password"
                            name="Password"
                            placeholder="Password"
                            className="text-black bg-white py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-slate-600"
                          />
                        </div>
                        {/* Remember me */}
                        <div className='flex gap-2'>
                          <input 
                            type="checkbox"
                          />
                          <p className='text-sm'>Remember me</p>
                        </div>
                      </div>

                      {/* Form buttons */}
                      <div className='mt-7 space-y-2'>
                        <div className='flex flex-col'>
                          <button className="btn text-white hover:bg-black transition ease-linear"
                          >Log in</button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center">
                          <div className="border-t border-gray-400 flex-grow"></div>
                          <p className="text-base px-3 text-slate-600">Or</p>
                          <div className="border-t border-gray-400 flex-grow"></div>
                        </div>

                        {/* Google Auth Button */}
                        <div className='flex flex-col'>
                          <button className="py-3 bg-white border border-slate-300 rounded-md text-slate-800 transition ease-linear shadow-md hover:bg-slate-200"
                          >Sign in with Google</button>
                        </div>
                      </div>

                        <div className='text-center mt-5 hover:underline'>
                          <Link to={'#'}
                          className='text-blue-500 text-base'
                          >
                            Don&apos;t have an account?
                          </Link>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
            
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto 
                      lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 
                      lg:mt-0"
            >
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0
                                ${isActive ? 'text-green-500' : 'text-gray-400'}` 
                  }
                >
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0
                                ${isActive ? 'text-green-500' : 'text-gray-400'}` 
                  }
                >
                  ABOUT
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/product'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0
                                ${isActive ? 'text-green-500' : 'text-gray-400'}` 
                  }
                >
                  PRODUCT
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/service'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0
                                ${isActive ? 'text-green-500' : 'text-gray-400'}` 
                  }
                >
                  SERVICE
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/contact'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0
                                ${isActive ? 'text-green-500' : 'text-gray-400'}` 
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
