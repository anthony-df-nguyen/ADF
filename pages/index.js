import Page from "../components/Page";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Section from '../components/Section'

export default function Home() {
  return (
    <Page>
      <Hero />
      <Profile />
      <Section title="Education" subtitle="My" bg="bg-gray-50" text="University of California, Irvine | 2011 to 2014">
        <Education />
      </Section>

      <Section title="Experience" subtitle="Work" bg="bg-white">
        <Education />
      </Section>
    </Page>
  );
}
