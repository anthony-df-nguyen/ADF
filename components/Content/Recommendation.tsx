import { recommendations } from "@/data/recommendations";
import Card from "@/components/UI/Card";
import { DotGrid } from "@/components/UI/DotGrid";

export default function Recommendation() {
  return (
    <div className="relative container">
      <DotGrid verticalPosition="bottom" />
      <div className="grid lg:grid-cols-3 gap-4">
        {" "}
        {recommendations.map((rec) => (
          <Card key={rec.name}>
            <div>
              <div className="text-h4">{rec.name}</div>
              <div className="text-accent text-eyebrow">
                {rec.title} | {rec.company}
              </div>
            </div>
            <div className="mt-4 mx-auto">
              <div className="text-body-sm">{rec.quote}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
