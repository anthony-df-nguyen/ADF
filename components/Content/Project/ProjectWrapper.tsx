import { ReactNode } from "react";
import { ProjectData } from "@/data/projects";
import Card from "@/components/UI/Card";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import classNames from "@/helpers/classNames";

interface Props {
  project: ProjectData;
  right?: boolean;
}

export default function Project({ project }: Props) {
  const {
    title,
    id,
    role,
    url,
    githubURL,
    description,
    sections,
    why,
    achievements,
  } = project;
  return (
    <div id={id}>
      {" "}
      <Card>
        <div className="grid md:grid-cols-4 gap-8">
          <div className={`col-span-2`}>
            <ProjectTitle
              title={title}
              role={role}
              description={description}
              url={url}
              githubURL={githubURL}
            />
          </div>
          <div className="col-span-2">
            <ProjectImage src={project.img} alt={project.title} />
          </div>
        </div>
        <div className={classNames("mt-8 grid gap-8", achievements && "lg:grid-cols-2")}>
          {/* Why */}
          <div className="">
            <div className="text-h3">Why I Built This</div>
            <div className="text-body-sm mt-4">{why}</div>
          </div>

          {/* Achievements */}
          {achievements && (
            <div className="">
              <div className="text-h3">Achievements</div>
              <div className="text-body-sm mt-4">{achievements}</div>
            </div>
          )}
        </div>
        {/* Sections */}
        <div className="mt-8">
          <div className="mt-8 grid gap-8">
            {" "}
            {sections.map((s) => (
              <div key={s.title} className="">
                <div className="text-h3">{s.title}</div>
                <div className="text-body-sm mt-4">{s.content}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
