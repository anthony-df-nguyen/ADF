import Image from 'next/image'
import Navigation from './Navigation';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Navigation />
        {/* Image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="w-full object-cover  lg:w-full lg:h-full">
            <Image src="/images/splash2.jpg" objectFit="cover" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
