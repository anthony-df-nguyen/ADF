import React from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="relative group bg-white shadow-sm border-gray-200 rounded p-6 lg:p-8">
      <div>
        <div className="focus:outline-none">{children}</div>
      </div>
    </div>
  );
};

export default Card;
