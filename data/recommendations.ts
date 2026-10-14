export interface RecommendationEntry {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export const recommendations: RecommendationEntry[] = [
  {
    name: "David Flores",
    title: "CEO",
    company: "Stratana Inc",
    quote:
      "He's successfully solved many complex technology and design problems, and lead major software development programs while producing outstanding results. He possesses world-class abilities to translate strategic vision, concepts, customer needs and operational constraints into executable product requirements that customers love and want to use.",
  },
  {
    name: "Dan Williams",
    title: "CTO",
    company: "Stratana Inc",
    quote:
      "I have worked with Anthony for 8 years and have found him to be extremely competent and reliable. His natural understanding of software and technology makes it easy to collaborate and complete product requirements and successfully deliver sprints.",
  },
  {
    name: "Roman Solodkyi",
    title: "Senior Frontend Engineer",
    company: "Cogility",
    quote: "I saw Anthony lead and deliver complex projects that required a deep understanding of both the company’s platform and highly specific client environments, taking ideas from early discovery all the way to enterprise-ready solutions. I also had the opportunity to work alongside him during the development of the company’s first AI-driven capabilities, where his ability to connect product vision with practical execution stood out especially strongly"
  }
  // {
  //   name: "Lyndsay Andrae",
  //   title: "Dir. Performance Improvement",
  //   company: "Leidos Health",
  //   quote:
  //     "Anthony is a detail-oriented, service-focused leader who brings a wealth of knowledge to help teams plan, prepare, and implement successful strategy programs. I could depend on him to help keep projects on track, resolve issues quickly, and collaborate as a thought partner to brainstorm solutions that would be tailored to our needs.",
  // },
];
