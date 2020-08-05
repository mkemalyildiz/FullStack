import React from 'react'
const Filter =({filter, setFilter, countries, setFilteredCountries}) => {

    

    const handleFilter = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
        const countryNames = countries.map(country => country.name)
       const filteredCountries = countryNames.filter(name => name.toLowerCase().includes((event.target.value).toLowerCase()))
       setFilteredCountries(countries.filter(country => filteredCountries.includes(country.name)))
   
   
    }

    return (

    <div>
           filter shown with <input value={filter}  onChange={handleFilter}/>
      </div>

    )
}

export default Filter