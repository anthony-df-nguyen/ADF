import { skills } from "../data/skills";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg divide-y divide-gray-50 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {skills.map((skill, skillIdx) => (
        <div
          key={skill.title}
          className={classNames(
            skillIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
            skillIdx === 1 ? "sm:rounded-tr-lg" : "",
            skillIdx === skills.length - 2 ? "sm:rounded-bl-lg" : "",
            skillIdx === skills.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
            "shadow relative group bg-white p-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500"
          )}>
          <div className="">
            <h3 className="text-lg font-medium text-gray-700">
              <div className="focus:outline-none">
                <div className="flex items-center gap-4">
                  <span className={classNames("text-sky-500", "bg-gray-100 rounded-lg inline-flex p-3 ring-4 ring-white")}>
                    <skill.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {skill.title}
                </div>
              </div>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
