import Page from "../components/Page";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Section from '../components/Section'
import Work from '../components/Work'
import Skills from "../components/Skills";


export default function Home() {
  return (
    <Page title="Anthony DF Nguyen">
      <Hero />
      <Profile />
      <Section title="Experience" subtitle="Work" bg="bg-gray-50">
        <Work />
      </Section>
      <Section title="Skills" subtitle="Hard" bg="bg-white">
        <Skills />
      </Section>

      <Section
        title="Education"
        subtitle="My"
        bg="bg-gray-50"
        text="University of California, Irvine | 2011 to 2014">
        <Education />
      </Section>
    </Page>
  );
}
