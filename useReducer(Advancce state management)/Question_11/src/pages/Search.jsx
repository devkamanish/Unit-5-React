import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import useDebounce from "../useDebounce";
import CountryList from "../components/CountryList";

export default function Search() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState([]);
  const [total, setTotal] = useState(0);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetchCountries(debouncedQuery, page, 10);
        setCountries(res.data);
        setTotal(res.total);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [debouncedQuery, page]);

  return (
    <div>
      <h2>Search Countries</h2>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        placeholder="Type country name..."
      />
      <CountryList countries={countries} />
      <div>
        {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
        {page * 10 < total && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
