import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const headerRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

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
            <Link
              to="#"
              className="text-white bg-green-500 hover:bg-green-700 
                          focus:ring-4 focus:ring-orange-300 font-medium rounded-sm 
                          text-sm px-6 py-3 mr-2 focus:outline-none"
            > GET STARTED
            </Link>
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
                > SERVICE   
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


