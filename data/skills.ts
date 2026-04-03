import { ComponentType, SVGProps } from "react";
import {
  ClipboardListIcon,
  CodeIcon,
  DocumentTextIcon,
  EmojiHappyIcon,
  LightBulbIcon,
  LightningBoltIcon,
  PaperAirplaneIcon,
  PhotographIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  TemplateIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

export interface SkillItem {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

export const skills: SkillItem[] = [
  { title: "Agile Product Management", icon: LightningBoltIcon },
  { title: "Customer service and development", icon: UsersIcon },
  { title: "SCRUM", icon: ViewBoardsIcon },
  { title: "Product roadmapping", icon: PaperAirplaneIcon },
  { title: "Product prioritization", icon: ScaleIcon },
  { title: "Strategic planning", icon: LightBulbIcon },
  { title: "JIRA and Confluence", icon: ViewListIcon },
  { title: "Wireframing and mockups", icon: TemplateIcon },
  { title: "Product requirements documentation", icon: ClipboardListIcon },
  { title: "Sales and marketing", icon: PresentationChartLineIcon },
  { title: "Stakeholder management", icon: EmojiHappyIcon },
  { title: "HTML5", icon: DocumentTextIcon },
  { title: "CSS/LESS/SCSS and Tailwind", icon: PhotographIcon },
  { title: "Javascript and React/NextJS", icon: CodeIcon },
];
