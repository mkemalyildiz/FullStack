const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://herhes:${password}@cluster0.7eequ.mongodb.net/phonebook?retryWrites=true`

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
    
})


const Person = mongoose.model('Person', phonebookSchema)

if (process.argv.length < 4) {

    

    Person.find({}).then(result => {

        result.forEach(person => {

            console.log(person)
            mongoose.connection.close()
        })
        
    })
    
} else {

    const person = new Person({
        name: name,
        number: number,
    })

    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    }) }