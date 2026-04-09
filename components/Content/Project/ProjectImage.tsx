import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const ProjectImage = ({ src, alt }: Props) => {
  return (
    // <div className="relative">
    //   <div className="relative mx-auto">
    //     <div className="relative pt-[25vh] lg:pt-[400px] rounded-md shadow-xl overflow-hidden">
    //       <Image
    //         className="absolute inset-0 h-full w-full object-cover object-left-top"
    //         src={src}
    //         alt={alt}
    //         fill
    //       />
    //       <div className="absolute inset-0 mix-blend-multiply" />
    //       <div className="absolute inset-0 bg-gradient-to-t opacity-90" />
    //       <div className="relative px-8"></div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative z-0 w-full overflow-hidden rounded shadow aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
      <Image alt="" src={src} fill className="object-cover" />
      <div className="absolute inset-0 inset-ring inset-ring-gray-900/10" />
    </div>
  );
};

export default ProjectImage;
