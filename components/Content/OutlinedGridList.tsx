import React from "react";
import { SkillItem } from "@/data/skills";
import classNames from "@/helpers/classNames";

type Props = {
  skills: SkillItem[];
};

function OutlinedGridList({ skills }: Props) {
  return (
    <div className="rounded-lg  divide-y divide-gray-50 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px">
      {skills.map((skill, index) => (
        <div
          key={skill.title}
          className={classNames(
            index === 0 ? "rounded-tl rounded-tr sm:rounded-tr-none" : "",
            index === 2 ? "sm:rounded-tr" : "",
            index === skills.length - 3 ? "sm:rounded-bl" : "",
            index === skills.length - 1
              ? "rounded-bl rounded-br sm:rounded-bl-none"
              : "",
            "shadow-sm relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500",
          )}
        >
          <div className="focus:outline-none">
            <div className="flex items-center gap-2">
              <skill.icon aria-hidden="true" className="text-accent w-8" />
              <div className="absolute inset-0" aria-hidden="true" />
              <div className="text-body"> {skill.title}</div>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutlinedGridList;
