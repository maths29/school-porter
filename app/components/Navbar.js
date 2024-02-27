import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#011431] flex justify-between p-2">
        <div className="w-full flex justify-between text-white items-center">
          <Link
            href="/"
            className="flex gap-1 md:gap-2 items-center"
          >
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
            <h1 className="">Swift School</h1>
          </Link>
          <span className="md:hidden text-2xl cursor-pointer">
            <MdOutlineMenu />
          </span>
        {/* <ul className="hidden md:flex gap-12">
          <li className="text-orange-600">
            <Link href="/">Home</Link>
          </li>
          <li className="relative group">
            <Link href="" className="text-white">
              Staff & HRD
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  Academic Staff
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Administrative Staff
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="text-white">
              Admission
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  Admission policy
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Apply now
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Check Entrance Exam Result
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Reprint Application
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Take Entrance Exam
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="text-white">
              Departments{" "}
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  Head Of Department
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Subject Offered
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Guidiance & Counselling
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Research & library
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <Link href="" className="text-white">
              Academics
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  School Management Structure
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Academics
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="text-white">
              More Pages
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Tuition and fees
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Definition Of Role
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  School Anthem & Pledge
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Horarium
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Honour Code
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Brief History
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Alumni Blogs
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="" className="block text-white">
                  Prospective Students info
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="text-white">
              Accounts
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block text-white">
                  Login
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-white">Library</li>
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
        </ul> */}   
        </div>  
    </nav>
  );
};

export default Navbar;
