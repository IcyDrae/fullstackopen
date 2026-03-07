import { useState, useEffect } from "react"
import axios from "axios";


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((response) => {
      console.log(response);
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <input value={search} onChange={handleSearchChange}  placeholder="search"></input>

      {filteredCountries.length > 10 ? (
        <p>Too many matches, please refine your search.</p>
      ) : (
        filteredCountries.map((country) => (
          <div key={country.cca3}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
            <p>Area: {country.area}</p>
            <h1>Languages</h1>
            <p>Languages: { country.languages ? Object.values(country.languages).join(", " ) : "N/A" }</p>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              width={100}
            />
          </div>
        ))
      )}
    </>
  )
}

export default App
