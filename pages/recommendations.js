import Page from "../components/Page";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Recommendation from "../components/Recommendation";

export default function Example() {
  return (
    <Page title="Recommendations">
      <Hero />
      <Section title="Recommendations" subtitle="Professional" bg="bg-gray-50">
        <Recommendation
          name="David Flores"
          title="CEO, Stratana Inc"
          side="left">
          {`"An incredibly talented, brilliant, hard-working product development
          and service leader. He's successfully solved many complex technology
          and design problems, and lead major software development programs
          while producing outstanding results. He possesses world-class
          abilities to translate strategic vision, concepts, customer needs and
          operational constraints into executable product requirements that
          customers love and want to use"`}
        </Recommendation>
        <div className="mt-pad"></div>
        <Recommendation
          name="Dan Williams"
          title="CTO, Stratana Inc"
          side="right">
          {`"I have worked with Anthony for 8 years and have found him to be extremely competent and reliable. His natural understanding of software and technology makes it easy to collaborate and complete product requirements and successfully deliver sprints. As a manager you can be rest assured that any tasks given to Anthony will be completed correctly and on-time"`}
        </Recommendation>
        <div className="mt-pad"></div>
        <Recommendation name="Danny Chen" title="COO, Stratana Inc" side="left">
          {`"It has been a pleasure working alongside Anthony for over 7 years. He is highly organized and communicates very effectively. Anthony has great attention to detail especially regarding product requirements, prioritization, testing, and refinements. He is intelligent and has a strong work ethic. Anthony would be a valuable addition to any organization"`}
        </Recommendation>
        <div className="mt-pad"></div>
        <Recommendation
          name="Lyndsay Andrae"
          title="Director Performance Improvement, Leidos Health"
          side="right">
          {`"Anthony is a detail-oriented, service-focused leader who brings a wealth of knowledge to help teams plan, prepare, and implement successful strategy programs. Working with Anthony, I could depend on him to help keep projects on track, resolve issues quickly, and collaborate as a thought partner to brainstorm solutions that would be tailored to our needs"`}
        </Recommendation>
      </Section>
    </Page>
  );
}
