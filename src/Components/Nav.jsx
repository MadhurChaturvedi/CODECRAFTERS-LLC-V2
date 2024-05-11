// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./nav.css"

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBackground, setShowBackground] = useState(false);
//   const TOP_OFFSET = 50;
//   useEffect(() => {
//     const handleScroll = () => {
//       console.log(window.scrollY);
//       if (window.scrollY >= TOP_OFFSET) {
//         setShowBackground(true);
//       } else {
//         setShowBackground(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className={` bg-white  transition-all  text-black sticky top-0 left-0 z-40`}
//     >
//       <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center border-b-2">
//         <div className="flex items-center justify-between">
//           <Link
//            id="select-nav"
//             to={"/"}
//             className={`w-auto h-6 sm:h-7 text-xl  ${
//               showBackground ? " text-gray-900" : "bg-zinc-100"
//             } font-extrabold`}
//           >
//             {/* <img
//               className="w-auto h-6 sm:h-7"
//               src="https://merakiui.com/images/full-logo.svg"
//               alt=""
//             /> */}
//             CODECRAFTERS LLC
//           </Link>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="text-gray-500  hover:text-gray-600"
//               aria-label="toggle menu"
//             >
//               {!isOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 8h16M4 16h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`absolute mt-4 inset-x-0  bg-slate-50 md:border-none  border-b-2 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
//             isOpen
//               ? "translate-x-0 opacity-100 "
//               : "opacity-0 -translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col md:flex-row md:mx-6"  id="select-nav"

//           >
//             <Link
//               to={"/"}
//               className={`my-2 ${
//                 showBackground ? "text-gray-900" : "text-gray-700"
//               }  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
//               href="#"
//             >
//               Home
//             </Link>
//             <Link
//               to={"/about"}
//               className={`my-2 ${
//                 showBackground
//                   ? "text-gray-900"
//                   : `${showBackground ? " text-gray-900" : "text-gray-700"} `
//               }  =  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
//               href="#"
//             >
//               About
//             </Link>
//             <Link
//                to={'contact'}
//               className={`my-2 ${
//                 showBackground ? "text-gray-900" : "text-gray-700"
//               } transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
//               href="#"
//             >
//               Contact
//             </Link>
//             <Link
//               to={"/services"}
//               className={`my-2 ${
//                 showBackground ? "text-gray-900" : "text-gray-700 "
//               }   transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
//               href="#"
//             >
//               Service
//             </Link>
//             <Link
//               to={"/team"}
//               className={`my-2 ${
//                 showBackground ? "text-gray-900" : "text-gray-700 "
//               }   transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}

//             >
//               Team
//             </Link>
//             <Link
//               to={"/news"}
//               className={`my-2 ${
//                 showBackground ? "text-gray-900" : "text-gray-700 "
//               }   transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
//               href="#"
//             >
//               News
//             </Link>
//           </div>

//         </div>
//         <div className=" md:flex hidden gap-2"  id="select-nav">
//           <button
//             type="button"
//             className="focus:outline-none text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//           >
//             Login
//           </button>
//           <button
//             type="button"
//             className="focus:outline-none border-2 text-black bg-neutral-100 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const TOP_OFFSET = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-white transition-all text-black sticky top-0 left-0 z-40`}
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center border-b-2">
        <div className="flex items-center justify-between">
          <Link
            to={"/"}
            className={`w-auto h-6 sm:h-7 text-xl ${
              showBackground ? "text-gray-900" : "bg-zinc-100"
            } font-extrabold`}
            onClick={closeMenu} // Close menu when clicking the logo
          >
            CODECRAFTERS LLC
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 hover:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute mt-4 inset-x-0 bg-slate-50 md:border-none border-b-2 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to={"/"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              About
            </Link>
            <Link
              to={"contact"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              Contact
            </Link>
            <Link
              to={"/services"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              Service
            </Link>
            <Link
              to={"/team"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              Team
            </Link>
            <Link
              to={"/news"}
              className={`my-2 ${
                showBackground ? "text-gray-900" : "text-gray-700"
              } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
              onClick={closeMenu} // Close menu when clicking a link
            >
              News
            </Link>
          </div>
        </div>
        <div className="md:flex hidden gap-2">
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Login
          </button>
          <button
            type="button"
            className="focus:outline-none border-2  bg-purple-400 hover:bg-purple-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
