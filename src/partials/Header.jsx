import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header () {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-left justify-between h-20">

          {/* Site branding */}
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <div className="shrink-2 mr-6">
              {/* Logo */}

              {/* <img className="mx-auto" src="/src/images/logo.png" width="200" height="200" alt="green" /> */}
              <img className="mx-auto" src="/dist/assets/logo-49825a85.png" width="200" height="200" alt="green" />
            </div>
            {/* Desktop links */}
            {/*<ul className="flex grow justify-end flex-wrap items-center">*/}
            <ul className="flex grow justify-end flex-wrap items-center">

            </ul>


            <ul className="flex grow justify-end flex-wrap items-center">
              <li> {/* original btn-sm text-purple-600 bg-purple-600 hover:bg-purple-700 ml-3  */}
                <Link to="/" className="btn-sm text-black  hover:text-white hover:bg-green-500 ml-3">Home</Link>
              </li>
              {/* <ul className="flex grow justify-end flex-wrap items-center">

              </ul> */}
              <li>
                <Link to="/articles" className="btn-sm text-black hover:text-white hover:bg-green-500 ml-3">Articles</Link>
              </li>
              <li> {/* original btn-sm text-purple-600 bg-purple-600 hover:bg-purple-700 ml-3  */}
                <Link to="/waste" className="btn-sm text-black  hover:text-white hover:bg-green-500 ml-3">Waste Category</Link>
              </li>

            </ul>

          </nav>

          {/* Mobile menu 
          <div className="md:hidden">

            {/* Hamburger button 
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>*/}
          {/*Mobile navigation 
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/history" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">History</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign Up</Link>
                </li>
              </ul>
            </nav>*/}

          {/*</div> */}

        </div>
      </div>

    </header>
  );
}

export default Header;
