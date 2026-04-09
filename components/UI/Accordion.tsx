"use client";
import { useState } from "react";
import Card from "@/components/UI/Card";

interface AccordionProps {
  title: string;
  id: string | number;
  defaultOpen?: boolean;
  children: any;
  titleClassName?: string;
}

export default function Accordion({
  title,
  id,
  defaultOpen = false,
  children,
  titleClassName = "text-h3",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        group shadow-sm hover:shadow-md rounded-xl transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "border-neutral-300 bg-white shadow-md shadow-neutral-100"
            : "border-neutral-200 bg-white hover:border-neutral-300"
        }
      `}
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:rounded-2xl"
      >
        <div className={`text-left ${titleClassName}`}>{title}</div>

        {/* Icon */}
        <span
          className={`
            flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300
            ${isOpen ? "bg-slate-500 text-white rotate-45" : ""}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Animated panel using CSS grid trick */}
      <div
        id={`panel-${id}`}
        role="region"
        className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
