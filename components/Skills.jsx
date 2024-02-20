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

const actions = [
  {
    title: "Agile Product Management",
    icon: LightningBoltIcon,
  },
  {
    title: "Customer service and development",
    icon: UsersIcon,
  },
  {
    title: "SCRUM",
    icon: ViewBoardsIcon,
  },
  {
    title: "Product roadmapping",
    icon: PaperAirplaneIcon,
  },
  {
    title: "Product prioritization",
    icon: ScaleIcon,
  },
  {
    title: "Strategic planning",
    icon: LightBulbIcon,
  },
  {
    title: "JIRA and Confluence",
    icon: ViewListIcon,
  },
  {
    title: "Wireframing and mockups",
    icon: TemplateIcon,
  },
  {
    title: "Product requirements documentation",
    icon: ClipboardListIcon,
  },

  {
    title: "Sales and marketing",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Stakeholder management",
    icon: EmojiHappyIcon,
  },
  {
    title: "HTML5",
    icon: DocumentTextIcon,
  },
  {
    title: "CSS/LESS/SCSS and Tailwind",
    icon: PhotographIcon,
  },
  {
    title: "Javascript and React/NextJS",
    icon: CodeIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg  divide-y divide-gray-50 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "shadow relative group bg-white p-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500"
          )}>
          <div className="">
            <h3 className="text-lg font-medium text-gray-700 ">
              <div className="focus:outline-none">
                <div className="flex items-center gap-4">
                  <span
                    className={classNames(
                      "text-sky-500",
                      "bg-gray-100 rounded-lg inline-flex p-3 ring-4 ring-white"
                    )}>
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </div>
              </div>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}