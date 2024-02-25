'use'
import { useState } from 'react';
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="bg-[#011431]">
      <div className="flex gap-6 items-center">
        <span className="md:hidden flex justify-between text-white items-center px-1">
          <h1 className="text-xl font-bold">Swift School</h1>
          <MdMenu onClick={toggleLinks} />
        </span>
        <span className="hidden md:flex">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </span>
        <ul className={`flex md:flex gap-12 ${showLinks ? 'flex' : 'hidden'} md:gap-0`}>
          <li className="text-orange-600">
            <Link href="/">Home</Link>
          </li>
          {/* Add other list items here */}
          <li className="relative group">
            <Link href="#" className="text-white">
              Staff & HRD
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="#" className="block px-4 py-2 text-white">
                  Academic Staff
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 text-white">
                  Administrative Staff
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* Search input */}
        <li>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600"
            />
            <button className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 11.293a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 1 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
