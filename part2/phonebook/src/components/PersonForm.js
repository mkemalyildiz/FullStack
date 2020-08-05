import React from 'react'
import phonebookService from '../services/phonebookService'
const PersonForm =({persons, setPersons, filteredList, setFilteredList, newName, newNumber, setNewName, setNewNumber, filter, setMessage}) => {

    const addPerson = (event) => {
        event.preventDefault()
  
        const names = persons.map(person => person.name)
  
        if (!names.includes(newName)) {
   
         const personObject = {
          name : newName, 
          number: newNumber
        }

        phonebookService
        .create(personObject)
        .then(returnedPerson=> {

          setPersons(persons.concat(returnedPerson))
          //setMessage({text:`Added ${returnedPerson.name}`, type:'info'})
          setMessage({text:`Added ${returnedPerson.name}`, type:'info'})

          setTimeout(() => {
            setMessage(null)
          }, 2000)
          
          if (newName.toLowerCase().includes(filter.toLowerCase())) {
            setFilteredList(filteredList.concat(returnedPerson)) }
        })


  
        //setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        
  
      } else {
          //window.alert(`${newName} is already added to the phonebook`);
          if (window.confirm(`${newName} is already added to the  phonebook, replace the old number with a new one`)) {

            const person = persons.filter(p => p.name === newName)
           
            const personUpdate = {
              name : newName,
              number: newNumber
            }

            phonebookService
            .update(person[0].id, personUpdate)
            .then(returnedPerson =>{
              setPersons(persons.map(person => person.name !== newName ? person : returnedPerson ))

              setFilteredList(filteredList.map(person => person.name !==newName ? person : returnedPerson))
            }
              )
              .catch(error => {
                console.log(error.response.data)
                setMessage({text: `Information of ${personUpdate.name} has already removed from server`, type: 'error'})
                setTimeout(() => {
                  setMessage(null)
                }, 3000)
              
              })



          }
  
      }
  
    }
  
    const addName = (event) => {  
      setNewName(event.target.value)
    }
  
    const addNumber = (event) => {  
      setNewNumber(event.target.value)
    }

    return (

        <form onSubmit={addPerson}>
      
        <div>
           name: <input onChange={addName}  value={newName}/>
        </div>
        <div>
           number: <input onChange={addNumber} value={newNumber}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


    )
 }
 export default PersonForm