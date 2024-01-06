const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

let users = [ 
    {
        id: 1,
        username:'Nazira'

    },
    {
        id: 2,
        username: 'Fidan'
    },
    {
        id: 3,
        username:'Elman'
    },
    {
        id: 4,
        username:'Nihad'
    },

]

app.get('/code/users', (req,res) => {
    res.json(users)
})

app.delete('/code/users/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('Uaer deleted succesfully!')
})

app.post('/code/users', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.send('User added successfully!')
})

const PORT = process.env.PORT



app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}` .green.bold))