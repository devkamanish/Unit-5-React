import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  return (
    <div>
      {countries.map((c, i) => (
        <CountryCard key={i} country={c} />
      ))}
    </div>
  );
}
