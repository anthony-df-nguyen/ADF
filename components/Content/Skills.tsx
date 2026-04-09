import { coreSkills, skillGroups } from "@/data/skills";
import Accordion from "@/components/UI/Accordion";
import Card from "@/components/UI/Card";
import Divider from "@/components/UI/Divider";
import Chip from "@/components/UI/Chip";
import { DotGrid } from "@/components/UI/DotGrid";

export default function Skills() {
  return (
    <section className="container space-y-10">
      {/* Core Skills */}

      <div className="relative">
        <DotGrid side="right"/>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {coreSkills.map((group) => (
            <Card key={group.title}>
              <div className="flex items-center gap-4">
                <group.icon aria-hidden="true" className=" text-accent w-8" />
                <div className="text-left lg:text-left text-h4">
                  {group.title}
                </div>
              </div>
              <div className="text-body-sm mt-4">{group.summary}</div>
            </Card>
          ))}
        </div>
      </div>

      <Divider title="Dive Deeper" />

      {/* Accordion */}
      <div className="grid gap-4 ">
        {skillGroups.map((group, id) => (
          <Accordion
            key={group.title}
            title={group.title}
            id={id}
            titleClassName="text-h3"
          >
            {/* Content */}
            <div className="lg:p-6 flex flex-col gap-8">
              {/* Skill Breakdown */}
              <div className="grid lg:grid-cols-2 gap-8">
                {group.skills.map((skill) => (
                  <div key={skill.title} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      {/* <skill.icon
                        aria-hidden="true"
                        className=" text-accent w-8"
                      /> */}
                      <div className="text-left text-h3">
                        <div className="text-eyebrow">
                          {skill.title}
                        </div>
                      </div>
                    </div>

                    <div className="text-body-sm">{skill.summary}</div>
                    <ul>
                      {skill.details?.map((d, i) => (
                        <li key={`skill-${i}`} className="list-disc text-body-sm">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Tools */}
              <div>
                <Divider title="Tools I Use" />

                <div className="mt-4 flex flex-wrap items-center gap-2 md:justify-center">
                  {group.tools?.map((tool) => (
                    <Chip key={tool} title={tool} />
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
