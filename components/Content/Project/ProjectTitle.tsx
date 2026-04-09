import React from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  role: string;
  url: string;
  githubURL?: string;
};

const ProjectTitle = ({ title, description, url, githubURL }: Props) => {
  return (
    <div>
      <div className="text-h2 text-accent">{title}</div>
      <div className="mt-4 lg:mt-4 text-body">{description}</div>

      <div className="mt-4 text-center flex flex-row w-full lg:w-max gap-4 justify-start">
        <a
          type="button"
          href={url}
          className="flex flex-1 lg:flex-0 items-center gap-x-1.5 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          <FaUpRightFromSquare aria-hidden="true" className="-ml-0.5 size-5" />
          {`Website`}
        </a>
        {githubURL && (
          <a
            type="button"
            href={githubURL}
            className="flex flex-1 lg:flex-0 items-center gap-x-1.5 rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            <FaGithub aria-hidden="true" className="-ml-0.5 size-5" />
            {`Github`}
          </a>
        )}
      </div>
      {/* <div className="mt-4 text-eyebrow">{role}</div> */}
    </div>
  );
};

export default ProjectTitle;
