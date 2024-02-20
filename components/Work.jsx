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
                  Secured $45 million in additional revenue from strategic customer
                  contracts through product work and customer account
                  management and consulting.
                </li>
                <li>
                  Implemented a formal agile SDLC within first 3-months which was
                  used as the basis adopted company-wide resulting in releases being 4x more
                  efficient.
                </li>
                <li>
                  Successfully built first customer-facing documentation site
                  with embedded analytics and feedback loops with 0
                  engineering resources in under 2 months.
                </li>
                <li>
                  Built an internal tooling application at near-zero cost
                  that is currently adopted by 70% of engineer, data, and
                  product team members on a weekly basis.
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
            <p className="mt-4 text-lg text-gray-500">Product Manager</p>
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
              <ul className="mt-std text-base text-gray-500 list-disc">
                <li>
                  Generated over $7 million in revenue through strategic account
                  renewals and acquisitions of new customers.{" "}
                </li>
                <li>
                  Built and launched a comprehensive platform training portal
                  with over 100 videos and documentation within 3 months.
                </li>
                <li>
                  Redesigned and relaunched company website at 0 cost, resulting
                  in 300% increase in web traffic, 40% reduction in bounce rate,
                  and 20% improvement in mobile optimization score.
                </li>
                <li>
                  Developed a comprehensive online training center for over 20
                  product solutions in 3 months, including the creation of all
                  content, UI, database, and videos.
                </li>
                <li>
                  Launched 3 major solutions that saw an adoption rate of 80% in
                  our customer engagements.
                </li>
              </ul>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
