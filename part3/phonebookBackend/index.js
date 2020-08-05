require('dotenv').config()
const Person = require('./models/person')
const express = require('express')
//const nodemon = require('nodemon')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const { response } = require('express')

app.use(cors())

app.use(express.static('build'))
app.use(express.json())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

/*
let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "kemal",
        "number": "981",
        "id": 5
    }
]
*/

let generateId = () => {
    return (
        Math.floor(Math.random() * Math.floor(10000))
    )
}
app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons =>{
        res.json(persons)
    })
})

app.get('/info', (req, res) => {
    Person.find({})
        .then(persons =>{
            res.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${Date()}</p>`)
        })
    

})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if(person){
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {

    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    const person = new Person ({
        name: body.name,
        number: body.number,
       
    })

    person.save().then(personSaved =>{
        response.json(personSaved)
    })
        .catch(error => next(error))

    
    
})

app.put('/api/persons/:id',  (request, response, next) => {

    const body = request.body

    const person = {
       
        name: body.name,
        number: body.number,
       
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then( updatePerson => {
            response.json(updatePerson)
        })
        .catch(error => next(error)) 
}) 

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log(error)
    console.error(error.message)
  
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else {

        return response.status(400).send(error.message)
    }
  
    //next(error)
}
  
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})