/* This example requires Tailwind CSS v2.0+ */
import Section from "../components/Section";
export default function Example() {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Focus
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-sky-600">
                    Economics, B.A.
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    GPA
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-sky-600">
                    3.7
                  </dd>
                </div>
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Distinction
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold text-sky-600">
                    Cum Laude
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
