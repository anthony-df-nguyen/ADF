import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  bg: string;
  text?: string;
  children: ReactNode;
}

export default function Section({ title, subtitle, bg, text, children }: SectionProps) {
  return (
    <div className={`bannerpad ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-sky-600 tracking-wide uppercase">
            {subtitle}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
          {text && (
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {text}
            </p>
          )}
        </div>
      </div>
      <div className="mt-std">{children}</div>
    </div>
  );
}
