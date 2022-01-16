import Page from "../components/Page";
import Hero from "../components/Hero";
import Section from "../components/Section";
import About from '../components/Aboutme'

export default function Example() {
  return (
    <Page title="About Me">
      <Hero />
      <Section title="About Me" subtitle="More" bg="bg-gray-50">
        <About />
      </Section>
    </Page>
  );
}
