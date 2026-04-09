import React from "react";

type Props = {
  title: string;
};

const Chip = ({ title }: Props) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-body-sm text-semibold">
      {title}
    </span>
  );
};

export default Chip;
