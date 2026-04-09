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
    title: "Senior Product Manager",
    dates: "Oct 2021 - Present",
    description:
      "Lead product strategy and end-to-end delivery for a Decision Intelligence Platform serving federal agencies. Own a portfolio of 5 products: analyst-facing investigative tooling, compliance, identity management, data intake, and an AI service, supporting high-consequence security and insider threat workflows in classified and restricted environments.",
    bullets: [
      "Launched the company's first AI product in 4 months. Built and shipped Cogynt Intelligence, a provider-agnostic LLM abstraction layer.",
      "Directly drove a $45M federal contract. Extensive discovery and operational program support with the customer, mapped analyst workflows end-to-end, and led the implementation program from discovery through launch. Direct revenue attribution.",
      "300% active user growth in 4 months. Launched the Submission Portal, a B2B2B data intake product that scaled the engaged active user base 3× within its first 4 months.",
      "50% improvement in analyst productivity. Redesigned investigative workflows and UX in Workstation, the platform's core analyst application, cutting time-on-task significantly for threat analysts.",
      "4× release efficiency. Designed and implemented a people-centered SDLC from scratch, adopted company-wide within 3 months of rollout.",
      "Built internal tooling at $0 engineering cost: Shipped an internal navigation and utility app actively used by 70% of engineering, design, and product teams weekly.",
    ],
  },
  {
    company: "Stratana Inc.",
    title: "Product Manager",
    dates: "July 2013 - Aug 2021",
    description:
      "Served as the company's sole Product Manager across an 8-year tenure, growing from intern to owning the full product roadmap. Built and scaled a B2B2B strategy-execution SaaS platform for healthcare; used by enterprise consultancies to manage and demonstrate program ROI to their health system clients. Worked directly with the CEO to align the roadmap with company priorities, own QA, and drive customer success.",
    bullets: [
      "$7M in contract value driven across strategic enterprise accounts in healthcare consultancies and health systems through roadmap alignment, account management, and customer success.",
      "80% customer adoption on a new platform module. Launched a lifecycle management product that became core to how healthcare consultancy customers integrated the platform into their own client engagements.",
      "Launched 10+ enterprise pilot programs. Partnered with customers to deliver their solutions (enabled by our SaaS) to their health system clients, shaping how the platform was positioned and deployed in the field.",
      "Relaunched the company website at $0 cost. Drove a 3× increase in traffic, 40% lower bounce rate, and 20% improvement in mobile optimization.",
    ],
  },
];
