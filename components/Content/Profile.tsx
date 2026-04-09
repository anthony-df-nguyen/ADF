import Image from "next/image";
import { DotGrid } from "../UI/DotGrid";

export default function Profile() {
  return (
    <div className="bg-gray-50 overflow-hidden bannerpad">
      <div className="relative container">
        <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-left max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
          <div>
            <div className="text-lead text-accent">My</div>
            <div className="mt-2 text-h1">Profile</div>
          </div>
        </div>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
          <div className="relative md:row-start-1 md:col-start-2">
            <DotGrid side="right" verticalPosition="top" />
            <div className="relative mx-auto max-w-prose md:max-w-[400px]">
              <figure>
                <div className="aspect-w-12 aspect-h-12 md:aspect-none ">
                  <Image
                    className="rounded-md shadow-md object-cover object-center overflow-hidden"
                    src="/images/headshot.jpg"
                    alt="Anthony Nguyen"
                    width={3266}
                    height={4899}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="text-body">
              Senior Product Manager with nearly 10 years of experience building
              enterprise SaaS products for federal, defense, and healthcare
              markets. I have directly driven over $45M in contract value,
              launched a company&apos;s first AI product, and grown active users through workflow-driven product decisions. What sets
              me apart is technical depth - I build and ship
              web apps with React and Next.js, prototype with real code instead of
              mockups, and operate at the intersection of product,
              engineering, and customer operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
