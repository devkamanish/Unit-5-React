export default function CountryCard({ country }) {
  return (
    <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
      <h3>{country.country}</h3>
      <p>Region: {country.region}</p>
    </div>
  );
}
