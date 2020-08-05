import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import phonebookService from './services/phonebookService'
import Notification from './components/Notification'


const AppPhoneBook = () => {
    const [persons, setPersons] = useState([])
    
const hook = () => {
    console.log('effect')
    phonebookService
     .getAll()
     .then(initialPersons => {
            console.log('promise fulfilled')
            setPersons(initialPersons)
            setFilteredList(initialPersons)
          })
} 
useEffect(hook, []) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter] = useState('')
  const [ filteredList, setFilteredList ] = useState([])
  const [message, setMessage] = useState(null)

  //useEffect(setMessage({text:"initiate", type:"info"}), [])



  return (
    <div>
      <h2>Phonebook</h2>      
      <Notification message={message}/>
      <Filter filter={filter} setFilter={setFilter} persons={persons} setFilteredList={setFilteredList}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} 
      newNumber={newNumber} setNewNumber={setNewNumber} filteredList={filteredList} setFilteredList={setFilteredList} filter={filter} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filteredList={filteredList} setPersons={setPersons} setFilteredList={setFilteredList} />
    </div>
  )
}
export default AppPhoneBook