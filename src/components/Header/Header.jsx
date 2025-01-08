import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store

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

  // Check if the current route is the products page
  const isProductsPage = location.pathname === '/product'; // Replace with your actual route

  return (
    <header ref={headerRef} style={headerStyle} className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-24 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="uppercase text-3xl font-bold">
              Rich<span className='text-green-500'>Field</span>
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            {isProductsPage ? (
              <Link to="/cart" className="relative">
                <FaShoppingCart size={24} className="text-green-500" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            ) : (
              <Link
                to="/signup"
                className="text-white bg-green-500 hover:bg-green-700 
                          focus:ring-4 focus:ring-orange-300 font-medium rounded-sm 
                          text-sm px-6 py-3 mr-2 focus:outline-none"
              >
                GET STARTED
              </Link>
            )}
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
