import React from 'react'
const Filter =({filter, setFilter, persons, setFilteredList}) => {

    const handleFilter = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
        const names = persons.map(person => person.name)
       const filteredNames = names.filter(name => name.toLowerCase().includes((event.target.value).toLowerCase()))
       setFilteredList(persons.filter(person => filteredNames.includes(person.name)))
   
   
    }

    return (

    <div>
           filter shown with <input value={filter}  onChange={handleFilter}/>
      </div>

    )
}

export default Filter