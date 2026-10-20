import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_COUNTRIES_API_KEY}`,
    Accept: "application/json",
  },
});

// Country Data
export const countryData = async () => {
  const allCountries = [];
  let offset = 0;
  let more = true;
  while (more) {
    const response = await api.get("", {
      params: {
        limit: 100,
        offset,
        response_fields:
          "names.common,codes.alpha_2,flag.emoji,capitals,region,population",
      },
    });

    const result = response.data.data;

    allCountries.push(...result.objects);

    more = result.meta.more;
    offset += result.meta.count;
  }

  return allCountries;
};


export const countryDetailApi = (id) => {
  return api.get(`/codes.alpha_2/${id}`)

  
}