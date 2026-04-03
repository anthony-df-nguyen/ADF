import Page from "../components/Page";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Project from "../components/Project";
import { projects, ProjectStat } from "../data/projects";

function StatGrid({ stats }: { stats: ProjectStat[] }) {
  return (
    <div className="mt-10">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
            <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Projects() {
  return (
    <Page title="Projects">
      <Hero />
      <Section title="Projects" subtitle="My" bg="bg-gray-50">
        {projects.map((project) => (
          <div key={project.title} className="mt-pad">
            <Project title={project.title} img={project.img}>
              <div className="text-xl text-sky-500 font-bold tracking-tight">{project.role}</div>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              <StatGrid stats={project.stats} />
              <div className="mt-10 text-base font-medium text-sky-600">
                <a href={project.url}>{project.urlLabel}</a>
              </div>
            </Project>
          </div>
        ))}
      </Section>
    </Page>
  );
}
