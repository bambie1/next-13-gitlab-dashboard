const Loading = () => {
  return (
    <div className="mt-20 grid gap-4 lg:grid-cols-2">
      <div>
        <p className="mb-6 inline-flex border-b border-gray-600 pb-1 text-lg font-semibold lg:text-xl">
          Authored MRs
        </p>
        <ul className="grid gap-2">
          {[1, 2, 3].map((item) => (
            <li key={item}>
              <LoadingBox />
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-4">
        <p className="mb-6 inline-flex border-b border-gray-600 pb-1 text-lg font-semibold lg:text-xl">
          For-review MRs
        </p>
        <ul className="grid gap-2">
          {[1, 2, 3].map((item) => (
            <li key={item}>
              <LoadingBox />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const LoadingBox = () => {
  return (
    <div className="space-y-2 border p-4 shadow-sm">
      <div className="h-3 w-[40%] rounded-lg bg-gray-100"></div>
      <div className="h-10 rounded-lg bg-gray-100"></div>
    </div>
  );
};

export default Loading;
