import Link from "next/link";
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
const navigation = {
  main: [
    { name: "Resume", href: "/" },
    { name: "Recommendations", href: "/recommendations" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/anthonydfnguyen/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/anthony-df-nguyen",
      icon: FaGithub,
    },
    {
      name: "Mail",
      href: "mailto:anthonydfnguyen@gmail.com",
      icon: MdEmail,
    },
  ],
};

export default function Example() {
  return (
    <footer className="bg-sky-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <span className="cursor-pointer text-base text-white hover:text-sky-500">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-100 hover:text-sky-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      
      </div>
    </footer>
  );
}
