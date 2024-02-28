"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleOpen = () => {
    setMenu(!menu);
  };
  return (
    <nav className="bg-[rgb(1,20,49)] flex p-2 md:px-8">
      <div className="w-full flex flex-col gap-6 md:flex-row justify-between text-white md:items-center">
        <div className="flex justify-between">
          <Link href="/" className="flex gap-1 md:gap-2 items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="">Swift School</h1>
          </Link>
          {menu ? (
            <button
              className="md:hidden text-2xl cursor-pointer"
              onClick={handleOpen}
            >
              <MdClose />
            </button>
          ) : (
            <button
              className="md:hidden text-2xl cursor-pointer"
              onClick={handleOpen}
            >
              <MdOutlineMenu />
            </button>
          )}
        </div>
        <ul className="hidden md:flex justify-between gap-4 w-11/12 md:w-10/12 mt-2 ">
          <li className="hover:text-orange-600">
            <Link href="/">Home</Link>
          </li>
          <li className="relative group">
            <Link href="" className="">
              Staff & HRD
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  Academic Staff
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Administrative Staff
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="">
              Admission
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  Admission policy
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Apply now
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Check Entrance Exam Result
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Reprint Application
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Take Entrance Exam
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="">
              Departments{" "}
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  Head Of Department
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Subject Offered
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Guidiance & Counselling
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Research & library
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="">
              Academics
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  School Management Structure
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Academics
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="">
              More Pages
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  News
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Tuition and fees
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Definition Of Role
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  School Anthem & Pledge
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Horarium
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Honour Code
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Brief History
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Alumni Blogs
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="" className="block ">
                  Prospective Students info
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="" className="">
              Accounts
            </Link>
            <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
              <li>
                <Link href="" className="block ">
                  Login
                </Link>
              </li>
            </ul>
          </li>
          <li className="">Library</li>
          {/* <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-1 px-3 bg-gray-700  rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
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
            </li> */}
        </ul>
        {menu && (
          <ul className="md:hidden flex flex-col gap-2">
            <li className="text-orange-600">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <Link href="" className="">
                Staff & HRD
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    Academic Staff
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Administrative Staff
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="" className="">
                Admission
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    Admission policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Apply now
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Check Entrance Exam Result
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Reprint Application
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Take Entrance Exam
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="" className="">
                Departments{" "}
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    Head Of Department
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Subject Offered
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Guidiance & Counselling
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Research & library
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="" className="">
                Academics
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    School Management Structure
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Academics
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="" className="">
                More Pages
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Tuition and fees
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Definition Of Role
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    School Anthem & Pledge
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Horarium
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Honour Code
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Brief History
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Alumni Blogs
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link href="" className="block ">
                    Prospective Students info
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link href="" className="">
                Accounts
              </Link>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg mt-2">
                <li>
                  <Link href="" className="block ">
                    Login
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">Library</li>
            {/* <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-1 px-3 bg-gray-700  rounded-md focus:outline-none focus:bg-gray-600"
                />
                <button className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
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
            </li> */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
