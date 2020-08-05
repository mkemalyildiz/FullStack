import React from 'react'
import phonebookService from '../services/phonebookService'



const Persons = ({ filteredList, persons, setPersons, setFilteredList }) => {

    const handleClick = person => {

        if (window.confirm(`Delete ${person.name}`)) {

            phonebookService
                .del(person.id)
                .then(response => {

                    const list = persons.filter(p => p.id !== person.id)
                    setPersons(list)
                    const list2 = filteredList.filter(p => p.id !== person.id)
                    setFilteredList(list2)

                })
                .catch(error => {
                    console.log('failed')
                })
        }
    }
    return (
        <ul>
            {filteredList.map(person => {
                return (
                    <>
                        <li key={person.name}>{person.name} {person.number} <button onClick={() => handleClick(person)} >delete</button></li>
                    </>
                )
            }

            )}
        </ul>


    )
}

export default Persons
