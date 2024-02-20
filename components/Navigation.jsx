import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/legacy/image";



const navigation = [
  { name: "Resume", href: "/" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
];

export default function Navigation() {
  return (
    <div className="relative z-10  lg:bg-white lg:max-w-2xl lg:w-full ">
      <svg
        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src="/images/logo.svg"
                    layout="fixed"
                    height="40"
                    width="40"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="cursor-pointer font-medium text-white lg:text-gray-600 hover:text-sky-500">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src="/images/logo.svg"
                    layout="fixed"
                    height="40"
                    width="40"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* Text */}
      <main className=" mx-auto max-w-7xl bannerpad px-4  sm:px-6  lg:px-8 ">
        <div className=" sm:text-center lg:text-left">
          <h1 className="tracking-tight  ">
            <span className="text-4xl sm:text-5xl md:text-6xl text-white lg:text-gray-900 block xl:inline font-bold lg:font-extrabold ">
              Anthony Nguyen
            </span>{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl block text-white text-sky-600 lg:text-sky-600 xl:inline font-medium lg:font-extrabold ">
              Product Manager
            </span>
          </h1>
          <p className="mt-3 text-base text-white lg:text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Srategic, agile, and customer centric Product Manager with over 8
            years of experience working with B2B enterprise products and
            solutions
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md">
              <a
                href="mailto:anthonydfnguyen@gmail.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
                Contact me
              </a>
            </div>
            <div className="pb-8 lg:pb-0 mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://www.linkedin.com/in/anthonydfnguyen/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
