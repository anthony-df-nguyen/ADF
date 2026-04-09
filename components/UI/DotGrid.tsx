import { useId } from "react";
import classNames from "@/helpers/classNames";

type DotGridProps = {
  side?: "left" | "right";
  size?: number;
  verticalPosition?: "top" | "center" | "bottom";
};

export function DotGrid({
  side = "left",
  size = 404,
  verticalPosition = "center",
}: DotGridProps) {
  const patternId = useId();

  const verticalClasses = {
    top: "top-0 -translate-y-1/4",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0 translate-y-1/4",
  }[verticalPosition];

  return (
    <svg
      className={classNames(
        "absolute hidden lg:block",
        verticalClasses,
        side === "left"
          ? "right-full translate-x-2/3 lg:translate-x-3/4"
          : "left-full -translate-x-2/3 lg:-translate-x-3/4",
      )}
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
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
      <rect width={size} height={size} fill={`url(#${patternId})`} />
    </svg>
  );
}
