import Page from "@/components/Layout/Page";
import Hero from "@/components/Layout/Hero";
import Section from "@/components/Layout/Section";
import ProjectWrapper from "@/components/Content/Project/ProjectWrapper";
import { occovid, docs, nba, stratana } from "@/data/projects";

export default function Projects() {
  return (
    <Page title="Projects">
      <Hero />
      <Section title="Things I've Built" subtitle="Some" bg="bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8">
            <ProjectWrapper project={occovid} />
            <ProjectWrapper project={docs} />
            <ProjectWrapper project={nba} />
          </div>
        </div>
      </Section>
    </Page>
  );
}
