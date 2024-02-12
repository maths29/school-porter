import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-[#011431]">
      <div className="flex gap-6 items-center">
        <span className="md:hidden flex justify-between text-white items-center px-1">
          <h1 className="text-xl font-bold">Swift School</h1>
          <MdMenu />
        </span>
        <span className="hidden md:flex">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </span>
        <ul className="flex gap-12">
          <li className="text-orange-600">Home</li>
          <li className="relative group">
                <a href="/" className="text-white">Staff & HRD</a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">Academic Staff</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Administrative Staff</a></li>
                  
                </ul>
              </li>
              <li className="relative group">
                <a href="/" className="text-white">Academics</a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">Admission policy</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Apply now</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Check Entrance Exam Result</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Reprint Application</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Take Entrance Exam</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a href="/" className="text-white">Departments </a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">Head Of Department</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Subject Offered</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Guidiance & Counselling</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Research & library</a></li>
				  
                </ul>
              </li>
              
              <li className="relative group">
                <a href="/" className="text-white">Academics</a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">School Management Structure</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Academics</a></li>
                  
                </ul>
              </li>
              <li className="relative group">
                <a href="/" className="text-white">More Pages</a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">Contact Us</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">News</a></li>
                  <li><a href="/" className="block px-4 py-2 text-white">Calendar</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Tuition and fees</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Photo Gallery</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Definition Of Role</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">School Anthem & Pledge</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Horarium</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Honour Code</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Brief History</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Alumni Blogs</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Downloads</a></li>
				  <li><a href="/" className="block px-4 py-2 text-white">Prospective Students info</a></li>
				  
				  
				  
                </ul>
              </li>
              <li className="relative group">
                <a href="/" className="text-white">Accounts</a>
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                  <li><a href="/" className="block px-4 py-2 text-white">Login</a></li>
                  </ul>
              </li>
          <li className="text-white">Library</li>
        </ul>
        <li>
                <div className="relative">
                  <input type="text" placeholder="Search" className="py-1 px-3 bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-600" />
                  <button className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 11.293a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 1 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
      </div>
    </nav>
  );
};

export default Navbar;
