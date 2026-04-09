import Page from "@/components/Layout/Page";
import Hero from "@/components/Layout/Hero";
import Profile from "@/components/Content/Profile";
import Education from "@/components/Content/Education";
import Section from "@/components/Layout/Section";
import Work from "@/components/Content/Work";
import Skills from "@/components/Content/Skills";
import ProjectPreview from "@/components/Content/Project/ProjectPreview";
import Recommendation from "@/components/Content/Recommendation";

export default function Home() {
  return (
    <Page title="Anthony DF Nguyen">
      <Hero />
      <Profile />
      <Section title="Experience" subtitle="Work" bg="bg-gray-50">
        <Work />
      </Section>
      <div id="recommendations">
        <Section
          title="Recommendations"
          subtitle="Professional"
          bg="bg-gray-50"
        >
          <Recommendation />
        </Section>
      </div>
      <Section title="Projects" subtitle="My" bg="bg-gray-50">
          <ProjectPreview />
      </Section>
      <Section title="Skills" subtitle="My" bg="bg-gray-50">
        <Skills />
      </Section>{" "}
      <Section title="Education" subtitle="My" bg="bg-gray-50">
        <Education />
      </Section>
    </Page>
  );
}
