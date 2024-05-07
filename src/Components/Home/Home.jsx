import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState('');
    const [continent, setContinent] = useState('');
    const [capital, setCapital] = useState('');
    const [flag, setFlag] = useState('');
    const [minimumNumber , setMinimumNumber] = useState('');

    const deleteRow = (index) => {
        const updatedCountries = [...countries];
        updatedCountries.splice(index, 1);
        setCountries(updatedCountries);
    }

    const addCountry = () => {
        if (!country || !population || !continent || !capital || !flag) {
            alert('Please fill in all fields.');
            return;
        }

        const newCountry = {
            name: country,
            population: population,
            continent: continent,
            capital: capital,
            flag: flag,
        };

        setCountries([...countries, newCountry]);

        setCountry('');
        setPopulation('');
        setContinent('');
        setCapital('');
        setFlag('');
    };

    function filterCountries(array) {
        const result = array.filter((country) => parseInt(country.population) > parseInt(minimumNumber));
        return result;
    }
    
    const filteredCountries = filterCountries(countries);
    const displayedCountries = countries.length > 0 ? filteredCountries.concat(countries) : filteredCountries;
    console.log("Displayed result:", displayedCountries);
    return (
        <div>
            <h1>World Flags</h1>
            <div className='countryContainer'>
                <input
                    value={country}
                    type='text'
                    name='country'
                    placeholder='Country Name'
                    onChange={(e) => setCountry(e.target.value)}
                />

                <input
                    name='population'
                    value={population}
                    type='text'
                    placeholder='Population'
                    onChange={(e) => setPopulation(e.target.value)}
                />

                <input
                    name='continent'
                    value={continent}
                    type='text'
                    placeholder='Continent'
                    onChange={(e) => setContinent(e.target.value)}
                />

                <input
                    name='capital'
                    value={capital}
                    type='text'
                    placeholder='Capital'
                    onChange={(e) => setCapital(e.target.value)}
                />

                <input
                    name='flag'
                    value={flag}
                    type='text'
                    placeholder='Link to Flag'
                    onChange={(e) => setFlag(e.target.value)}
                />

                <button className='addBtn' onClick={addCountry}>Add Country</button>
                <br />
            </div>
            <div className='filterContainer'>
                <label >Filter:</label>
                <br />
                <input 
                type='text' 
                value={minimumNumber} 
                placeholder='Minimum Population' 
                onChange={(e) => setMinimumNumber(e.target.value)}/>
            </div>

            <div className="box">

                <div className='resultBox'>
                    {filteredCountries.map((country, index) => (
                        <div className='resultContainer' key={index}>
                            <div className="imgBox">
                                <img className='img' src={country.flag} alt='flagImage' />
                            </div>
                            <div className="infoBox">
                                <p>{country.name}</p>
                                <p>Population: {country.population}</p>
                                <p>Continent: {country.continent}</p>
                                <p>Capital: {country.capital}</p>
                            </div>
                            <div className="delete">
                                <button className='btnDelete' onClick={() => deleteRow(index)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;
