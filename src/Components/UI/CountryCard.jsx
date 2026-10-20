import { Link } from "react-router-dom";

const regionColors = {
  Africa: "bg-amber-100 text-amber-700",
  Americas: "bg-blue-100 text-blue-700",
  Asia: "bg-emerald-100 text-emerald-700",
  Europe: "bg-violet-100 text-violet-700",
  Oceania: "bg-cyan-100 text-cyan-700",
};

const CountryCard = ({ country }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Flag + region badge */}
      <div className="relative h-24 w-full overflow-hidden bg-gray-100 md:h-28">
        <img
          src={
            country.codes?.alpha_2
              ? `https://flagcdn.com/w320/${country.codes.alpha_2.toLowerCase()}.png`
              : "/default-flag.png"
          }
          alt={`Flag of ${country.names.common}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute left-2 top-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            regionColors[country.region] || "bg-gray-100 text-gray-700"
          } `}
        >
          {country.region}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="truncate text-sm font-bold text-gray-900 md:text-base">
          {country.names.common}
        </h3>

        <div className="mt-2 space-y-1 text-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="text-gray-500">Capital</span>
            <span className="truncate font-medium text-gray-900">
              {country.capitals?.[0]?.name ?? "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-gray-500">Population</span>
            <span className="font-medium text-gray-900">
              {country.population?.toLocaleString() ?? "N/A"}
            </span>
          </div>
        </div>

        <Link
          to={`/countrydetail/${country.codes.alpha_2}`}
          className="mt-3 block rounded-lg bg-blue-600 py-1.5 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export const CountriesGrid = ({ countries }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
        {countries.map((country) => (
          <CountryCard key={country.names.common} country={country} />
        ))}
      </div>
    </section>
  );
};
