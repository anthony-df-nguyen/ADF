export interface WorkEntry {
  company: string;
  title: string;
  dates: string;
  description: string;
  bullets: string[];
}

export const workHistory: WorkEntry[] = [
  {
    company: "Cogility",
    title: "Product Manager",
    dates: "Oct 2021 - Present",
    description:
      "Instant, Informed Intelligence from Streaming Data. The world's most advanced continuous intelligence solutions, trusted to solve the world's most critical intelligence challenges.",
    bullets: [
      "Secured $45 million in additional revenue from strategic customer contracts through product work and customer account management and consulting.",
      "Implemented a formal agile SDLC within first 3-months which was used as the basis adopted company-wide resulting in releases being 4x more efficient.",
      "Successfully built first customer-facing documentation site with embedded analytics and feedback loops with 0 engineering resources in under 2 months.",
      "Built an internal tooling application at near-zero cost that is currently adopted by 70% of engineer, data, and product team members on a weekly basis.",
    ],
  },
  {
    company: "Stratana Inc.",
    title: "Product Manager",
    dates: "July 2013 - Aug 2021",
    description:
      "Stratana provides SaaS platforms and solutions for end-to-end strategy management, serving the executives and leadership of large and mid-size organizations.",
    bullets: [
      "Generated over $7 million in revenue through strategic account renewals and acquisitions of new customers.",
      "Built and launched a comprehensive platform training portal with over 100 videos and documentation within 3 months.",
      "Redesigned and relaunched company website at 0 cost, resulting in 300% increase in web traffic, 40% reduction in bounce rate, and 20% improvement in mobile optimization score.",
      "Developed a comprehensive online training center for over 20 product solutions in 3 months, including the creation of all content, UI, database, and videos.",
      "Launched 3 major solutions that saw an adoption rate of 80% in our customer engagements.",
    ],
  },
];
