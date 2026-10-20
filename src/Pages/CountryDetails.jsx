import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { countryDetailApi } from "../api/CountryData";
import { Loader } from "../Components/UI/Loader";
import { NoCountriesFound } from "../Components/UI/NoCountries";

const regionColors = {
  Asia: "bg-orange-100 text-orange-700",
  Americas: "bg-green-100 text-green-700",
  Europe: "bg-blue-100 text-blue-700",
  Africa: "bg-yellow-100 text-yellow-700",
  Oceania: "bg-purple-100 text-purple-700",
};

const StatCard = ({ emoji, label, value }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg shadow-gray-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
      {emoji}
    </div>
    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">
      {label}
    </p>
    <p className="mt-1 truncate text-lg font-bold text-gray-900 sm:text-xl">
      {value}
    </p>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 border-b border-gray-100 py-3 last:border-0">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="text-right text-sm font-medium text-gray-900">
      {value}
    </span>
  </div>
);

const Chip = ({ children }) => (
  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 sm:text-sm">
    {children}
  </span>
);

export const CountryDetails = () => {
  const [countryDetail, setCountryDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const data = await countryDetailApi(id);
        const detailedData = data.data.data.objects[0];
        setCountryDetail(detailedData);
        console.log(detailedData);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCountryDetails();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <NoCountriesFound data={"Failed to fetch Country Details"}/>

  return (
    <section className="min-h-screen pb-12">
      {/* Top gradient banner */}
      <div className="h-40 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 sm:h-52" />

      <div className="mx-auto -mt-28 max-w-6xl px-4 sm:-mt-36">
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 cursor-pointer rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30"
        >
          ← Back
        </button>

        {/* Hero card */}
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-xl sm:p-8 md:flex-row md:items-center">
          <div className="w-full shrink-0 overflow-hidden rounded-2xl border border-gray-100 shadow-md md:w-80">
            <img
              src={
                countryDetail.codes?.alpha_2
                  ? `https://flagcdn.com/w320/${countryDetail.codes.alpha_2.toLowerCase()}.png`
                  : "/default-flag.png"
              }
              alt={`Flag of ${countryDetail.names.common}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  regionColors[countryDetail.region] ||
                  "bg-gray-100 text-gray-700"
                }`}
              >
                {countryDetail.region}
              </span>
              {countryDetail.subregion && (
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {countryDetail.subregion}
                </span>
              )}
            </div>

            <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {countryDetail.names.common}
            </h1>
            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              {countryDetail.names.official}
            </p>

            <a
              href={`https://www.google.com/maps/place/${countryDetail.names.common}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
            >
              View on Map
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <StatCard
            emoji="🏛️"
            label="Capital"
            value={countryDetail.capitals?.[0]?.name ?? "N/A"}
          />
          <StatCard
            emoji="👥"
            label="Population"
            value={countryDetail.population?.toLocaleString() ?? "N/A"}
          />
          <StatCard
            emoji="📐"
            label="Area"
            value={
              countryDetail.area?.kilometers != null
                ? `${countryDetail.area.kilometers.toLocaleString()} km²`
                : "N/A"
            }
          />
          <StatCard
            emoji="🌍"
            label="Continent"
            value={countryDetail.continents[0]}
          />
        </div>

        {/* Details */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2 sm:gap-6">
          {/* General info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-2 text-lg font-bold text-gray-900">
              General Information
            </h2>
            <InfoRow
              label="Official Name"
              value={countryDetail.names?.official ?? "N/A"}
            />
            <InfoRow label="Region" value={countryDetail.region} />
            <InfoRow label="Subregion" value={countryDetail.subregion} />
            <InfoRow
              label="Calling Code"
              value={`+${countryDetail.calling_codes?.[0] ?? "N/A"}`}
            />
            <InfoRow
              label="Government Type"
              value={countryDetail.government_type}
            />
            <InfoRow
              label="Driving Side"
              value={countryDetail.cars?.driving_side ?? "N/A"}
            />
            <InfoRow
              label="Timezone"
              value={countryDetail.timezones?.[0] ?? "N/A"}
            />
          </div>

          {/* Languages + currencies */}
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {countryDetail.languages.map((lang) => (
                  <Chip key={lang.bcp47}>{lang.name}</Chip>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                Currencies
              </h2>
              <div className="flex flex-wrap gap-2">
                {countryDetail.currencies.map((cur) => (
                  <Chip key={cur.code}>
                    {cur.symbol} {cur.name}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Border countries */}
        <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Border Countries
          </h2>
          {countryDetail.borders.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {countryDetail.borders.map((b) => (
                <p
                  key={b}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700  hover:bg-blue-50 hover:text-blue-700"
                >
                  {b}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">(island nation).</p>
          )}
        </div>
      </div>
    </section>
  );
};
