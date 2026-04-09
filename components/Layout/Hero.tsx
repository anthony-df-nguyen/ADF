import Image from "next/legacy/image";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container">
        <div className="relative z-10 lg:bg-white lg:max-w-2xl lg:w-full">
          {/* Decorative angled divider between text and image on large screens */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Navigation />

          {/* Hero text */}
          <main className="mx-auto  bannerpad">
            <div className="sm:text-center lg:text-left">
              <div className="text-display">Anthony Nguyen</div>
              <div className="text-h2 text-accent"> Senior Product Manager</div>
              <div className="mt-3 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                <div className="text-body-lg">
                  $50M+ in revenue impact, combining strategic vision with the
                  technical fluency to move fast and bridge the gap between
                  product and engineering.
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="mailto:anthonydfnguyen@gmail.com"
                    className="text-white w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Me
                  </a>
                </div>
                <div className="pb-8 lg:pb-0 mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://www.linkedin.com/in/anthonydfnguyen/"
                    className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Splash image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="opacity-0  lg:opacity-100 w-full object-cover lg:w-full lg:h-full">
            <Image
              src="/images/annie-spratt-dWYU3i-mqEo-unsplash.jpg"
              objectFit="cover"
              layout="fill"
              alt="Hero background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
