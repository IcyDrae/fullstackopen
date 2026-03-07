import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setSelectedCountry(null); // reset selection on new search
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // Automatically select if exactly one country matches
  if (filteredCountries.length === 1 && !selectedCountry) {
    setSelectedCountry(filteredCountries[0]);
  }

  return (
    <div>
      <input
        value={search}
        onChange={handleSearchChange}
        placeholder="Search countries"
      />

      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter.</p>
      ) : selectedCountry ? (
        // Detailed view
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : "N/A"}</p>
          <p>Population: {selectedCountry.population.toLocaleString()}</p>
          <p>Languages: {selectedCountry.languages ? Object.values(selectedCountry.languages).join(", ") : "N/A"}</p>
          <img
            src={selectedCountry.flags.png}
            alt={`Flag of ${selectedCountry.name.common}`}
            width={150}
          />
        </div>
      ) : (
        // List view
        filteredCountries.map((country) => (
          <div key={country.cca3}>
            {country.name.common}{" "}
            <button onClick={() => handleShowCountry(country)}>Show</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;

