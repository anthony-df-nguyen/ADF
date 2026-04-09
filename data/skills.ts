import { ComponentType, SVGProps } from "react";
import {
  BeakerIcon,
  ChartBarIcon,
  ChipIcon,
  ClipboardListIcon,
  CodeIcon,
  DatabaseIcon,
  EmojiHappyIcon,
  LightBulbIcon,
  LightningBoltIcon,
  OfficeBuildingIcon,
  PaperAirplaneIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  ServerIcon,
  TemplateIcon,
  TerminalIcon,
  UsersIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";

type IconType = ComponentType<
  SVGProps<SVGSVGElement> & {
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }
>;

export interface SkillItem {
  title: string;
  icon: IconType;
  summary: string;      // one-liner for compact / homepage display
  details?: string[];   // proof points for expanded / reference view
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
  tools?: string[];     // tools and technologies used across all skills in group
}

// ------------------------------------------------------------
// Core skills — curated flat list for homepage display.
// Ordered by impact and differentiation.
// ------------------------------------------------------------
export const coreSkills: SkillItem[] = [
  {
    title: "Enterprise Product Strategy",
    icon: LightBulbIcon,
    summary:
      "Multi-year roadmap ownership across federal and healthcare SaaS products, aligned to company revenue and customer outcomes.",
  },
  {
    title: "Technical Product Management",
    icon: CodeIcon,
    summary:
      "Bridges product and engineering with real technical depth — writes code, reads infrastructure, and prototypes independently.",
  },
  {
    title: "AI Product Development",
    icon: ChipIcon,
    summary:
      "Owned and shipped a provider-agnostic LLM abstraction service on Amazon Bedrock, establishing AI capabilities across an enterprise platform in 4 months.",
  },
  {
    title: "Code Prototyping",
    icon: TerminalIcon,
    summary:
      "Builds and deploys interactive prototypes in React/Next.js for real user testing — faster than Figma, more realistic, shareable via URL.",
  },
  {
    title: "Implementation Leadership",
    icon: OfficeBuildingIcon,
    summary:
      "On-site implementation leadership with a $45M federal contract directly attributed to embedded customer discovery and program launch.",
  },
  {
    title: "Cross-functional Leadership",
    icon: UsersIcon,
    summary:
      "Led cross-functional teams of 8–15 across engineering, design, QA, and sales with regular executive-level roadmap presentations.",
  },
];

// ------------------------------------------------------------
// Full skill groups — for expanded / reference view.
// Each skill includes summary, proof-point details, and tools.
// ------------------------------------------------------------
export const skillGroups: SkillGroup[] = [
  {
    title: "Product Strategy & Execution",
    skills: [
      {
        title: "Product Strategy & Roadmapping",
        icon: PaperAirplaneIcon,
        summary:
          "End-to-end roadmap ownership across multiple enterprise products, aligned to business priorities and customer outcomes.",
        details: [
          "Led product strategy and delivery for 4 enterprise applications simultaneously at Cogility",
          "Conducted bi-weekly roadmap updates to all stakeholders to maintain alignment and respond to shifting priorities",
          "Worked directly with the CEO to align the product roadmap with company priorities at Stratana across an 8-year tenure",
        ],
      },
      {
        title: "Prioritization & Tradeoff Decisions",
        icon: ScaleIcon,
        summary:
          "Balances competing demands across federal customer commitments, engineering capacity, and long-term platform goals.",
        details: [
          "Managed and prioritized the backlog across 4 concurrent enterprise products in a fast-changing federal environment",
          "Balanced short-term customer delivery commitments with long-term platform architecture investments",
        ],
      },
      {
        title: "Agile Execution & SDLC Design",
        icon: ViewBoardsIcon,
        summary:
          "Designed and implemented a company-wide SDLC from scratch that improved release efficiency 4x.",
        details: [
          "Implemented a people-centered SDLC adopted company-wide, improving release efficiency 4x within 3 months of rollout",
          "Led sprint planning, kickoffs, demos, and retrospectives across product and engineering teams",
        ],
      },
      {
        title: "PRDs & Technical Specifications",
        icon: ClipboardListIcon,
        summary:
          "Writes detailed PRDs and specs that engineering can execute without follow-up.",
        details: [
          "Authored PRDs for Cogynt Intelligence (first AI product), Submission Portal, User Management, and Audit Viewer",
          "Wrote API specifications and acceptance criteria for serverless functions, LLM integrations, and data intake workflows",
        ],
      },
    ],
    tools: ["Jira", "Confluence", "Claude Cowork", "ChatGPT"],
  },
  {
    title: "Enterprise & Customer",
    skills: [
      {
        title: "Enterprise Implementation Leadership",
        icon: OfficeBuildingIcon,
        summary:
          "On-site implementation leadership directly attributed to $45M in federal contract revenue.",
        details: [
          "Directly responsible for a $45M, 5-year federal contract — the company's first major enterprise deal — through embedded discovery, workflow mapping, and program launch",
          "Went on-site with customers, ran operational working groups, and interviewed stakeholders to shape the product around real analyst workflows",
          "Developed custom training materials and led user onboarding for each customer launch",
        ],
      },
      {
        title: "Stakeholder & Executive Alignment",
        icon: EmojiHappyIcon,
        summary:
          "Regular executive-level communication across roadmap, delivery status, and strategic tradeoffs.",
        details: [
          "Led cross-functional teams of 8–15 across engineering, design, QA, and customer success",
          "Presented roadmap and strategy to executive leadership on a regular cadence",
          "Maintained bi-weekly stakeholder roadmap updates to stay aligned across all functions",
        ],
      },
      {
        title: "Customer Discovery & User Research",
        icon: UsersIcon,
        summary:
          "Runs end-to-end discovery from stakeholder interviews through prototype testing and analytics-backed validation.",
        details: [
          "Conducted on-site workflow mapping and stakeholder interviews with federal agency end users",
          "Used prototype and mockup testing to validate product ideas before engineering investment",
          "Used product analytics to track adoption, usage patterns, and feature value post-launch",
        ],
      },
      {
        title: "Sales Partnership & Go-to-Market",
        icon: PresentationChartLineIcon,
        summary:
          "Active participant in enterprise sales cycles — from demo leadership to technical Q&A to conference presence.",
        details: [
          "Led and supported enterprise sales demos with prospective federal customers",
          "Answered technical and product questions during complex government procurement cycles",
          "Attended industry conferences to represent the company and identify new prospects",
          "Conducted competitive analysis across direct and adjacent defense and commercial markets",
        ],
      },
    ],
    tools: ["Pendo", "PostHog", "Google Analytics", "Apache Superset","Figma", "Maze","Confluence"],
  },
  {
    title: "Analytics & Data",
    skills: [
      {
        title: "Product Analytics & Metrics",
        icon: ChartBarIcon,
        summary:
          "Tracks product adoption, usage, and outcomes independently — without relying on a data team.",
        details: [
          "Measured and reported 300% active user growth in 4 months following the Submission Portal launch",
          "Tracked 50% analyst productivity improvement through Workstation UX redesigns",
          "Used product analytics to monitor feature adoption and inform backlog prioritization",
        ],
      },
      {
        title: "Data Analysis & Visualization",
        icon: BeakerIcon,
        summary:
          "Builds dashboards and runs exploratory analysis independently using Superset and Jupyter Notebooks.",
        details: [
          "Built analytics dashboards in Apache Superset for adoption monitoring and operational reporting",
          "Uses Jupyter Notebooks for ad-hoc analysis and data exploration without involving engineering",
        ],
      },
      {
        title: "SQL",
        icon: DatabaseIcon,
        summary:
          "Writes queries for independent data investigation, test data generation, and database validation.",
        details: [
          "Writes SQL for ad-hoc data analysis to answer questions independently without relying on a data team",
          "Written scripts to help teams generate high volumes of test data and to back up and restore databases",
          "Uses SQL within Jupyter Notebooks for data exploration and insight generation",
        ],
      },
    ],
    tools: ["Pendo", "PostHog", "Apache Superset", "Apache Kafka", "Apache Pinot", "Jupyter Notebooks", "Python", "Pandas"],
  },
  {
    title: "Technical",
    skills: [
      {
        title: "React / Next.js",
        icon: CodeIcon,
        summary: "Ships real production applications used by real users.",
        details: [
          "Built OC COVID Dashboard (occovid.vercel.app) — a public health tracking app with 50K peak monthly visitors, fully self-built and deployed",
          "Built Cogility's internal shortcut app with GitHub API integration for PR status and build pipeline visibility, adopted daily by ~70% of the company",
          "Built the Cogynt Next.js API — a suite of serverless functions for IP whitelisting, Slack webhook alerting, and Google Sheets form ingestion",
        ],
      },
      {
        title: "Code Prototyping",
        icon: TemplateIcon,
        summary:
          "Skips Figma. Builds and deploys interactive React prototypes for user testing — faster and more realistic.",
        details: [
          "Instead of clickable Figma flows, builds interactive React/Next.js prototypes deployed as live URLs for real user testing",
          "More realistic for test users and immediately shareable without any designer handoff",
          "Reduces prototype-to-validated-feedback cycles significantly compared to traditional PM tooling",
        ],
      },
      {
        title: "API Design & Serverless Functions",
        icon: LightningBoltIcon,
        summary:
          "Builds and ships serverless APIs for internal tooling and cross-functional automation.",
        details: [
          "Built the Cogynt Next.js API — serverless functions for client IP whitelisting, custom Slack alerts, and form-to-Google Sheets ingestion",
          "Sufficient REST API fluency to design endpoints, review contracts, and have technical implementation conversations with engineering",
        ],
      },
      {
        title: "Infrastructure Fluency",
        icon: ServerIcon,
        summary:
          "Navigates Kubernetes and Docker to troubleshoot, investigate, and improve developer workflows.",
        details: [
          "Uses Kubernetes to check pods, restart services, pull secrets, and monitor platform health for customers and internal teams",
          "Extended Docker configurations at Cogility by adding Jupyter Lab and custom data-seeding services, improving developer onboarding and iteration speed",
          "Uses DB Gate for data integrity investigation, migration validation, and test data backup and restoration",
        ],
      },
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Node.js", "REST APIs", "Kubernetes", "Docker", "DB Gate", "ChatGPT", "Claude Cowork", "Ollama"],
  },
];
