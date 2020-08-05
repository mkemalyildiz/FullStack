import React from 'react'
import View from './View'



const Countries = ({ filteredCountries, setFilteredCountries }) => {

    if (filteredCountries.length > 10) {
       
        return (<div> Too many matches, specify another filter </div>)

    } else if (filteredCountries.length === 1) {

        return (<View country={filteredCountries[0]} />)
    
    } else {

        return (
            <ul>
                {filteredCountries.map(country => {return (<div key={country.alpha2Code}>{country.name} <button onClick={() => setFilteredCountries([country])}>show</button></div>)})}
            </ul>
        )
    }
}

export default Countries
