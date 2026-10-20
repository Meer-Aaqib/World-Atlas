export const NoCountriesFound = ({data}) => {
  return (
    <div className="mx-auto flex w-full max-w-sm md:max-w-xl my-12 flex-col items-center rounded-3xl border border-gray-100 bg-white px-6 py-12 text-center shadow-xl sm:px-10">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-blue-100 blur-xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9 text-white"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
            <path d="M8.5 8.5l5 5M13.5 8.5l-5 5" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {data}
      </h3>
    </div>
  );
};
