import { workHistory } from "../data/work";

export default function Work() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {workHistory.map((job, index) => (
          <div key={job.company}>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">{job.company}</h2>
                <p className="mt-4 text-lg text-gray-500">{job.title}</p>
                <p className="mt-4 text-lg text-gray-500">{job.dates}</p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <p className="text-gray-500 font-bold">{job.description}</p>
                <dl className="mt-std">
                  <ul className="mt-std text-base text-gray-500 list-disc">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </dl>
              </div>
            </div>
            {index < workHistory.length - 1 && <hr className="mt-pad" />}
          </div>
        ))}
      </div>
    </div>
  );
}
