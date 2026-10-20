import { useEffect, useState } from "react";
import { countryData } from "../api/CountryData";
import { CountriesGrid } from "../Components/UI/CountryCard";
import { SearchCountries } from "../Components/UI/SearchCountries";
import { Loader } from "../Components/UI/Loader";
import { NoCountriesFound } from "../Components/UI/NoCountries";

export const Countries = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [appliedSearch, setAppliedSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [error, setError] = useState(null);

  // Filtering Countries
  const filteredCountries = countries.filter((country) => {
    const searchMatch = country.names.common
      .toLowerCase()
      .includes(appliedSearch.toLocaleLowerCase().trim());
    const regionMatch = region === "All" || country.region === region;

    return searchMatch && regionMatch;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await countryData();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // While Loading This Component Renders
  if (loading)
    return (
      <>
        <Loader />
      </>
    );

  //While Error
  if (error)
    return <NoCountriesFound data={"Failed to fetch Country Details"} />;

  // After Getting Data These Components renders
  return (
    <>
      <SearchCountries
        region={region}
        setRegion={setRegion}
        appliedSearch={appliedSearch}
        setAppliedSearch={setAppliedSearch}
      />

      {filteredCountries.length === 0 ? (
        <NoCountriesFound data={"No Countries Found"} />
      ) : (
        <CountriesGrid countries={filteredCountries} />
      )}
    </>
  );
};
