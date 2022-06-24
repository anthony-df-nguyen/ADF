/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Cogility */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 ">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Cogility</h2>
            <p className="mt-4 text-lg text-gray-500">Product Manager</p>
            <p className="mt-4 text-lg text-gray-500">Oct 2021 - Current</p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <p className="text-gray-500 font-bold">
              Instant, Informed Intelligence from Streaming Data. The world’s
              most advanced continuous intelligence solutions, trusted to solve
              the world’s most critical intelligence challenges.
            </p>
            {/* Bullets */}
            <dl className="mt-std">
              <ul className="mt-std text-base text-gray-500 list-disc">
                <li>
                  Serving as Product Manager for the Decision Support Team,
                  responsible for 3 applications{" "}
                </li>
                <li>
                  Implemented SCRUM process and methodology for product
                  development team within first 45 days of starting
                </li>
                <li>
                  Helped coordinate and create a product development lifecycle
                  cross-functionally between executives, product, QA, devops,
                  training and documentation teams{" "}
                </li>
                <li>
                  Developed an internal facing application for more efficient
                  daily workflows for product and QA team members within 1 day
                </li>
              </ul>
            </dl>
          </div>
        </div>
        <hr className="mt-pad"></hr>
        {/* Stratana */}
        <div className="mt-pad lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Stratana Inc.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Vice President of Product Development
            </p>
            <p className="mt-4 text-lg text-gray-500">July 2013 - Aug 2021</p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <p className="text-gray-500 font-bold">
              Stratana provides SaaS platforms and solutions for end-to-end
              strategy management, serving the executives and leadership of
              large and mid-size organizations
            </p>
            {/* Bullets */}
            <dl className="mt-std">
              <dt className="text-lg leading-6 font-medium text-gray-600">
                Product Management and Development
              </dt>
              <ul className="mt-std text-base text-gray-500 list-disc">
                <li>
                  Successfully implemented over 2,500 features and stories
                  across numerous initiatives, epics and sprints
                </li>
                <li>
                  Launched 14 significant major product releases over the last 5
                  years alone
                </li>
                <li>
                  Gathered ideas and stories from users and internal
                  stakeholders, prioritized the product backlog and formulated
                  the product roadmap
                </li>
                <li>
                  Designed wireframes, mockups, product requirements, acceptance
                  criteria and oversaw the completion of sprints and tasks
                </li>
              </ul>
            </dl>
            <dl className="mt-std">
              <dt className="text-lg leading-6 font-medium text-gray-600">
                Customer and Business Development
              </dt>
              <ul className="mt-std text-base text-gray-500 list-disc">
                <li>
                  Facilitated over 2,000 hours of consulting, training and
                  interviews with customers to validate new ideas and identify
                  pain points, user personas and stories
                </li>
                <li>
                  Achieved over $7m in revenue from strategic account renewals
                  and new customers through my product management and customer
                  development efforts
                </li>
                <li>
                  Developed an online training center for over 20 product
                  solutions in 3 months, including creation of all content, UI,
                  database and videos
                </li>
              </ul>
            </dl>
            <dl className="mt-std">
              <dt className="text-lg leading-6 font-medium text-gray-600">
                Marketing and Sales
              </dt>
              <ul className="mt-std text-base text-gray-500 list-disc">
                <li>
                  Redesigned and rebuilt company website increasing traffic by
                  300%, mobile optimization score by 20%, and reducing bounce
                  rate by 40%
                </li>
                <li>
                  Conducted product demos and sales presentations to C-level
                  executives, key stakeholders, and end users for strategic
                  accounts and new prospective clients
                </li>
              </ul>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
