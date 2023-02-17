import React from "react";

function Header() {
  return (
    <>
      <nav className="border-gray-200 px-4 lg:px-6 py-5 border border-b-gray-100">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-2">
          <a href="https://nikhilkadam.vercel.app" className="flex items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/homeadvisor.png"
              className="mr-3 h-6 sm:h-9"
              alt=""
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Estatery
            </span>
          </a>
          
          <div className="justify-between items-center w-full lg:flex lg:w-auto ml-0">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#rent"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Rent
                </a>
              </li>
              <li>
                <a
                  href="#buy"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Buy
                </a>
              </li>
              <li>
                <a
                  href="#sell"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Sell
                </a>
              </li>
              <li>
                <a
                  href="#manageProperty"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Manage Property
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <a
              href="#login"
              className="text-blue-800 font-medium rounded-md text-sm px-5 py-1.5 mr-2 border border-blue-800"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="text-white bg-blue-800 font-medium rounded-md text-sm px-5 py-1.5 mr-2 border border-blue-800"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
