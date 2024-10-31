// import React from "react";

// function Navbar () {
//     return(
//         <div className="bg-blue-500">
//             <h1 className=""> Hello</h1>
//         </div>
//     )
// }

// export default Navbar

import React, { useState } from "react";
import Logo from "./InsectNet.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-GreenMint w-full text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <img className="h-12" src={Logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 px-5">
        <Link to="/" className="hover:text-BrownForest">Home</Link>
        <Link to="/about" className="hover:text-BrownForest">About</Link>
        <Link to="/species" className="hover:text-BrownForest">Species</Link>
          <a href="#gallery" className="hover:text-BrownForest">Gallery</a>
        <Link to="/request" className="hover:text-BrownForest">Request</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-500 rounded-xl text-white space-y-2 pt-2 px-4 pb-4">
          <Link to="/" className="hover:text-BrownForest">Home</Link>
          <Link to="/about" className="hover:text-BrownForest">About</Link>
          <Link to="/species" className="hover:text-BrownForest">Species</Link>
          <a href="#gallery" className="block hover:text-BrownForest">Gallery</a>
          <Link to="/request" className="hover:text-BrownForest">Request</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
