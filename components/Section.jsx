/* This example requires Tailwind CSS v2.0+ */
export default function Example(props) {
  return (
    <div className={`bannerpad + ${props.bg}`}>
      <div className="max-w-7xl mx-auto  px-4  sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-sky-600 tracking-wide uppercase">
            {props.subtitle}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.title}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {props.text}
          </p>
        </div>
      </div>
      <div className="mt-std">{props.children}</div>
    </div>
  );
}
