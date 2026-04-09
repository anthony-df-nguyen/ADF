import Page from "@/components/Layout/Page";
import Hero from "@/components/Layout/Hero";
import Section from "@/components/Layout/Section";
import Aboutme from "@/components/Content/Aboutme";

export default function About() {
  return (
    <Page title="About Me">
      <Hero />
      <Section title="About Me" subtitle="More" bg="bg-gray-50">
        <Aboutme />
      </Section>
    </Page>
  );
}
 debugger