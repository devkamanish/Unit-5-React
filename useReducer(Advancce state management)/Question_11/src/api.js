import axios from "axios";

const API_URL = "https://api.first.org/data/v1/countries";

export const fetchCountries = async (query, page = 1, limit = 10) => {
  try {
    const res = await axios.get(API_URL);
    let countries = Object.values(res.data.data);

    if (query) {
      countries = countries.filter(c =>
        c.country.toLowerCase().includes(query.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    return {
      data: countries.slice(start, start + limit),
      total: countries.length
    };
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
};
