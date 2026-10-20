import { useState } from "react";
import world from "../../assets/images/world.webp";
import { IoMdSearch } from "react-icons/io";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export const SearchCountries = ({
  region,
  setRegion,
  appliedSearch,
  setAppliedSearch,
}) => {
  const [search, setSearch] = useState("");
  const handleSubmitButton = (e) => {
    e.preventDefault();
    setAppliedSearch(search);
    e.currentTarget.querySelector("input")?.blur();
  };

  return (
    <section>
      <div
        className="relative bg-cover bg-center bg-no-repeat px-2 py-20"
        style={{ backgroundImage: `url(${world})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
        <div className="relative m-auto  max-w-[95%] text-white">
          <h1 className="mb-5 text-3xl font-bold md:text-5xl">
            Explore The Countries
          </h1>

          {/* Search bar */}
          <form
            onSubmit={handleSubmitButton}
            className="flex items-center gap-2 rounded-4xl bg-white py-1 pl-3 pr-1 text-black max-w-sm "
          >
            <IoMdSearch className="shrink-0 text-2xl text-gray-600" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a country..."
              className="min-w-0 flex-1 border-none bg-transparent text-sm outline-none md:text-base"
            />
            <button className="bg-blue-600 text-white px-3 py-1.5 rounded-2xl cursor-pointer hover:bg-blue-800">
              Search
            </button>
          </form>

          {/* Region buttons */}
          <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
            {regions.map((currElem) => (
              <button
                key={currElem}
                type="button"
                onClick={() => setRegion(currElem)}
                className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors md:px-5 md:py-2 md:text-sm ${
                  region === currElem
                    ? "bg-blue-600 text-white"
                    : "bg-white/90 text-gray-800 hover:bg-white"
                }`}
              >
                {currElem}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
