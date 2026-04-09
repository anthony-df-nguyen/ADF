import { workHistory } from "../../data/work";
import Card from "../UI/Card";

export default function Work() {
  return (
    <div className="container flex flex-col gap-4">
       {workHistory.map((job) => (
          <Card key={job.company}>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="text-h2">{job.company}</div>
                <div className="text-eyebrow">{job.title}</div>
                <div className="text-meta">{job.dates}</div>
              </div>
              <div className="mt-4 lg:mt-0 lg:col-span-2">
                <div className="text-body-sm">{job.description}</div>
                <div className="mt-std">
                  <ul className="mt-std list-disc">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="text-body-sm">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

