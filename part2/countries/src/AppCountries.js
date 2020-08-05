import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterCountries from './components/FilterCountries'
import Countries from './components/Countries'


const AppCountires = () => {

  const [countries, setCountries] = useState([])
  const [ filter, setFilter] = useState('')
  const [ filteredCountries, setFilteredCountries ] = useState([])


  const hook = () => {
  axios.get('https://restcountries.eu/rest/v2/all').then( response => {
  //const notes = response.data

 
  setCountries(response.data)
  

})

  }

  useEffect(hook, [])

 


return (
<div>
<FilterCountries filter={filter} setFilter={setFilter} countries={countries} setFilteredCountries={setFilteredCountries}/>

<Countries setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
</div>
  )

}

export default AppCountires