import { ReactNode } from "react";
import { occovid, docs, nba } from "@/data/projects";

import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview() {
  const data = [occovid, docs, nba];
  return (
    <div className="container">
      <div className="grid  grid-cols-1 gap-8 lg:grid-cols-3">
        {data.map((project) => (
          <article
            key={project.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative z-0 w-full overflow-hidden rounded shadow aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
              <Image alt="" src={project.img} fill className="object-cover" />
              <div className="absolute inset-0 inset-ring inset-ring-gray-900/10" />
            </div>
            <div className="flex max-w-xl grow flex-col justify-between">
              <div className="group relative grow">
                <div className="mt-std text-link">
                  <Link href={`/projects#${project.id}`}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </Link>
                </div>
                <div className="mt-5 text-body-sm">{project.description}</div>
                <div className="mt-5 text-body-sm text-link-muted ">Learn More <span aria-hidden="true">&rarr;</span></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
