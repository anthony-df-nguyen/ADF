import Image from "next/legacy/image";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 lg:bg-white lg:max-w-2xl lg:w-full">
          {/* Decorative angled divider between text and image on large screens */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Navigation />

          {/* Hero text */}
          <main className="mx-auto max-w-7xl bannerpad px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight">
                <span className="text-4xl sm:text-5xl md:text-6xl text-white lg:text-gray-900 block xl:inline font-bold lg:font-extrabold">
                  Anthony Nguyen
                </span>{" "}
                <span className="text-3xl sm:text-4xl md:text-5xl block text-white text-sky-600 lg:text-sky-600 xl:inline font-medium lg:font-extrabold">
                  Product Manager
                </span>
              </h1>
              <p className="mt-3 text-base text-white lg:text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Strategic, agile, and customer centric Product Manager with over 8
                years of experience working with B2B enterprise products and solutions
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

        {/* Splash image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="w-full object-cover lg:w-full lg:h-full">
            <Image src="/images/splash2.jpg" objectFit="cover" layout="fill" alt="Hero background" />
          </div>
        </div>
      </div>
    </div>
  );
}
