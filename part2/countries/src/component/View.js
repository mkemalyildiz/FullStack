import React from 'react'
import Weather from './Weather'

const View = ({ country }) => {



    return (
        <ul>
            <div key={country.alpha2Code}>
                <h1 key={country.name}>{country.name}</h1>
                <li key={country.capital}>capital {country.capital}</li>
                <li key={country.population}>population {country.population}</li>
                <h1>Languages</h1>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
                <img src={country.flag} width="100" height="100" />

                <Weather capital={country.capital} />
            </div>
        </ul>
    )
}
export default View