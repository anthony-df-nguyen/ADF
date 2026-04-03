import { educationStats } from "../data/education";

export default function Education() {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow sm:grid sm:grid-cols-3">
                {educationStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col p-6 text-center ${
                      index === 0
                        ? "border-t border-gray-100 sm:border-0 sm:border-l"
                        : index === 1
                        ? "border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r"
                        : "border-b border-gray-100 sm:border-0 sm:border-r"
                    }`}>
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-3xl font-extrabold text-sky-600">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
