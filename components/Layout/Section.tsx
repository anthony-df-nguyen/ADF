import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  bg: string;
  children: ReactNode;
}

export default function Section({
  title,
  subtitle,
  bg,
  children,
}: SectionProps) {
  return (
    <div className={`bannerpad ${bg}`}>
      <div className="container">
        <div className="text-left">
          <h2 className="text-lead text-accent">{subtitle}</h2>
          <p className="mt-1 text-h1">{title}</p>
        </div>
      </div>
      <div className="mt-std">{children}</div>
    </div>
  );
}
