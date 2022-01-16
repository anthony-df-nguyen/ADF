import { CameraIcon, CodeIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { FaBasketballBall, FaBicycle, FaBowlingBall, FaGuitar } from "react-icons/fa";
import { MdBikeScooter } from "react-icons/md";
const data = [
  {
    title: "Photography",
    icon: CameraIcon,
    color: "text-sky-500",
    text: "I started photography at the end of 2019 and ever since, have been obsessed. I currently shoot with a Nikon Z6 alongside an assortment of zoom and prime lenses. My favorite things to shoot include long exposures of nighttime scenes or of my family and friends",
  },
  {
    title: "Coding",
    icon: CodeIcon,
    color: "text-green-500",
    text: "My coding journey started around 2019 when I first decided to pickup HTML and CSS. I spent about a year purely making websites from scratch. Eventually, as I started work on occovid.com, my passion project, I picked up some basic and intermediate Javascript, ReactJS, NextJS, and Tailwind along the way.",
  },
  {
    title: "Basketball",
    icon: FaBasketballBall,
    color: "text-orange-500",
    text: "Basketball has been my primary go-to sport to watch and play since I was 10 years old. I grew up a Lakers fan but nowadays find myself following specific players moreso than teams. I still frequently shoot hoops and run pick up games to stay sharp in case I ever get the call to tryout for the NBA 🥲",
  },
  {
    title: "Guitar",
    icon: FaGuitar,
    color: "text-amber-500",
    text: "Electric and acoustic. The game Guitar Hero pushed me to try the real thing, and ever since age 13, I've been jamming along to my favorite artists: including John Mayer, Switchfoot, The Fray, The Beatles, and more",
  },
  {
    title: "Road Biking",
    icon: FaBicycle,
    color: "text-red-500",
    text: "Although you won't find me wearing those skin-tight colorful jerseys, you will see me on my road bike. My personal record for a long distance ride is 53 miles. Hoping to crack 100 someday.",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="overflow-hidden">
      <div className="relative mt-std max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              I am
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Anthony Nguyen
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true">
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/images/about.jpg"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Born and raised in Orange County, California
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                {`I am passionate about creating things that people love to use. I love learning and get excited about the thought that I have the opportunity to learn any skill, and that if I try hard enough and stay dedicated, I can create something amazing. This passion for learning as much as I can extends beyond my professional career and into my own personal life.`}
              </p>
              <p>When I am not spending time with my family, I throw myself deeply into any one of my current hobbies, which include:</p>
              <div className="grid grid-cols-1 gap-4">
                {data.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white p-3 rounded-lg shadow  inline-flex items-start gap-4">
                    <span
                      className={classNames(
                        item.color,
                        " bg-gray-100 rounded-lg p-3"
                      )}>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-md font-semibold text-gray-700">
                        {item.title}
                      </div>
                      <div className="text-sm  text-gray-500">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
