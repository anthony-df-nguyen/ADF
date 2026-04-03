import Page from "../components/Page";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Aboutme from "../components/Aboutme";

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
