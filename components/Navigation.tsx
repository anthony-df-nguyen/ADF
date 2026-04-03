import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/legacy/image";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Resume", href: "/" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
];

export default function Navigation() {
  return (
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
                  alt="Logo"
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
            {navItems.map((item) => (
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
                  alt="Logo"
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
              {navItems.map((item) => (
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
  );
}
